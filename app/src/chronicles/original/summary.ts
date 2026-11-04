import type { Results, SummaryItem, SummarySection } from '../../engine/types';
import { choice, row, rowIndex, total, walk } from './plan';
import {
  BACKGROUNDS,
  CUISINE_FOR_REGION,
  FATEFUL_BENEFIT,
  FATEFUL_EXTRAS,
  NATION_COLUMNS,
  PARENT_COUNT,
  PROPHECY_REWARDS,
  REGIONS,
  allyRelationshipTable,
  backgroundTable,
  familyRelationshipTable,
  fatefulMomentTable,
  foodTables,
  identityTable,
  rivalRelationshipTable,
  secretTable,
  settlementTables,
} from './tables';

/**
 * A goal and its complication read as one sentence. The inspiration table's
 * complications are continuations ("and lose my sense of purpose"); a
 * player-written complication that starts a new sentence gets its own.
 */
export function joinGoal(goal = '', comp = ''): string {
  if (!comp) return goal || '—';
  if (!goal) return `Complication: ${comp}`;
  const continues = /^(and|but|which|by|or|then|so|reject|know)\b/i.test(comp);
  return continues ? `${goal.replace(/[.,;]\s*$/, '')}, ${comp}` : `${goal.replace(/\s*$/, '')}. Complication: ${comp}`;
}

export function summarize(R: Results): SummarySection[] {
  const { d } = walk(R);
  const sections: SummarySection[] = [];
  if (d.regionIndex === undefined) return sections;
  const region = REGIONS[d.regionIndex];

  // Origins
  const origins: SummaryItem[] = [{ label: 'Homeland', value: region.name }];
  if (d.government) origins.push({ label: 'Raised under', value: d.government });
  if (choice(R, 'status-column')) {
    const n = NATION_COLUMNS.find((x) => x.id === d.column);
    origins.push({ label: 'Judged as', value: `${n?.name} (no column in the book for ${d.government})` });
  }
  const settlements = [1, 2, 3]
    .map((i) => row(R, `settlement-${i}`, settlementTables[region.id]))
    .filter((x) => x !== undefined);
  if (settlements[0]) origins.push({ label: 'Home settlement', value: settlements[0].label, detail: settlements[0].detail });
  if (settlements.length > 1)
    origins.push({ label: 'Other ties', value: settlements.slice(1).map((s) => `${s.label} (${s.detail})`).join(', ') });
  const race = choice(R, 'race');
  if (race) origins.push({ label: 'Race', value: race });
  const bIdx = rowIndex(R, 'background');
  if (bIdx !== undefined)
    origins.push({ label: 'Background', value: BACKGROUNDS[bIdx], detail: backgroundTable.rows[bIdx].detail });
  if (d.allies !== undefined && d.rivals !== undefined) {
    const faith = choice(R, 'faith');
    origins.push({
      label: 'Social standing',
      value: `${d.allies} ${d.allies === 1 ? 'ally' : 'allies'}, ${d.rivals} ${d.rivals === 1 ? 'rival' : 'rivals'}`,
      detail: [
        faith ? `Acolyte of ${faith === 'legal' ? 'a legal' : 'an outlawed'} faith.` : '',
        d.swapped ? 'Uthodurn swapped allies and rivals.' : '',
      ]
        .filter(Boolean)
        .join(' ') || undefined,
    });
  }
  sections.push({ title: 'Origins', items: origins });

  // Family
  const family: SummaryItem[] = [];
  const pIdx = rowIndex(R, 'parents');
  if (pIdx !== undefined) family.push({ label: 'Living parents', value: PARENT_COUNT[pIdx] });
  const sIdx = rowIndex(R, 'siblings');
  if (sIdx !== undefined) {
    const n = total(R, 'sibling-count');
    family.push({ label: 'Living siblings', value: n === undefined ? 'None' : String(n) });
  }
  const famCount = total(R, 'family-count') ?? 0;
  for (let i = 0; i < famCount; i++) {
    const rel = row(R, `family-rel-${i}`, familyRelationshipTable);
    if (!rel) continue;
    const isAlly = rel.label === 'Ally';
    family.push({ label: `Family ${isAlly ? 'ally' : 'rival'}`, value: rel.detail ?? '', tone: isAlly ? 'ally' : 'rival' });
  }
  if (family.length) sections.push({ title: 'Family', items: family });

  // Allies & rivals
  const bonds: SummaryItem[] = [];
  const benefits: SummaryItem[] = [];
  for (const slot of d.slots ?? []) {
    const relTable = slot.kind === 'ally' ? allyRelationshipTable : rivalRelationshipTable;
    const rel = row(R, `acq-${slot.index}-rel`, relTable);
    if (!rel) continue;
    const pet = choice(R, `acq-${slot.index}-pet`);
    const id = row(R, `acq-${slot.index}-id`, identityTable);
    const who = pet ? `${pet} (pet)` : id ? `${id.label}${id.badge ? ' ★' : ''}` : '';
    bonds.push({
      label: slot.kind === 'ally' ? 'Ally' : 'Rival',
      value: pet ? `A loyal ${pet.toLowerCase()}` : [rel.label, who].filter(Boolean).join(' · '),
      detail: pet ? 'Your pet, a beast of CR 1/8 or lower.' : rel.detail,
      tone: slot.kind,
    });
    if (pet) benefits.push({ label: 'Companion', value: `A loyal ${pet.toLowerCase()}`, tone: 'boon' });
    if (rel.badge === 'Telepathy') benefits.push({ label: 'Telepathy', value: `Telepathic bond with your ${who.replace(' ★', '').toLowerCase()} ally, within 1 mile`, tone: 'boon' });
  }
  sections.push({ title: 'Allies & rivals', items: bonds, empty: 'Your social standing earned you no allies or rivals.' });

  // Fateful moments
  const fates: SummaryItem[] = [];
  (d.fateSources ?? []).forEach((_, j) => {
    const fIdx = rowIndex(R, `fate-${j}`);
    if (fIdx === undefined) return;
    const f = fatefulMomentTable.rows[fIdx];
    const ch = choice(R, `fate-${j}-choice`);
    const who = row(R, `fate-${j}-who`, identityTable);
    const benefit = FATEFUL_BENEFIT[fIdx].replace('{choice}', ch ?? '…');
    const reminder = FATEFUL_EXTRAS[fIdx]?.reminder;
    fates.push({
      label: f.label,
      value: f.detail?.split(' Benefit:')[0].split(' Cursed')[0].split(' Gift')[0] ?? '',
      detail: who ? `${FATEFUL_EXTRAS[fIdx]?.identity?.replace('?', '')}: ${who.label}` : undefined,
    });
    benefits.push({ label: f.label, value: benefit, detail: reminder, tone: 'boon' });
  });
  if (fates.length) sections.push({ title: 'Fateful moments', items: fates });

  // Flavour
  const flavour: SummaryItem[] = [];
  const food = row(R, 'food', foodTables[CUISINE_FOR_REGION[region.id]]);
  if (food) flavour.push({ label: 'Favourite food', value: food.label, detail: food.detail });
  const secret = row(R, 'secret', secretTable);
  if (secret) flavour.push({ label: 'Mysterious secret', value: secret.label, detail: secret.detail });
  if (flavour.length) sections.push({ title: 'Quirks & mysteries', items: flavour });

  // Prophecy
  const p = R['prophecy'];
  if (p?.kind === 'text') {
    const goals: SummaryItem[] = [];
    for (const [id, label] of [
      ['immediate', 'Immediate'],
      ['long', 'Long-term'],
      ['arc', 'Arc-ending'],
    ]) {
      const goal = p.values[`${id}.goal`]?.trim();
      const comp = p.values[`${id}.complication`]?.trim();
      if (goal || comp) goals.push({ label, value: joinGoal(goal, comp) });
    }
    sections.push({
      title: 'Prophecy',
      items: goals,
      empty: 'No goals written yet. Only the immediate goal is needed to begin.',
    });
    sections.push({
      title: 'Prophecy rewards',
      items: PROPHECY_REWARDS.map((x, i) => ({ label: `Option ${i + 1}`, value: x })),
    });
  }

  // Mechanical benefits go near the top, after origins: they're what players look for first.
  sections.splice(1, 0, {
    title: 'Mechanical benefits',
    items: benefits,
    empty: 'None this time. Fateful moments, the main source of benefits, come only from a powerful ally or rival.',
  });
  return sections;
}
