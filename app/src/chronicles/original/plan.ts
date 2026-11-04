import type { Results, Step, Table, TableRow } from '../../engine/types';
import {
  BACKGROUNDS,
  CUISINE_FOR_REGION,
  FATEFUL_EXTRAS,
  GOVERNMENT_COLUMN,
  NATION_COLUMNS,
  PET_BEASTS,
  RACES,
  REGIONS,
  SIBLING_DICE,
  SOCIAL_STATUS,
  allyRelationshipTable,
  backgroundTable,
  familyRelationshipTable,
  fatefulMomentTable,
  foodTables,
  homelandTable,
  identityTable,
  isStarIdentity,
  parentTables,
  prophecyFill,
  prophecyTable,
  rivalRelationshipTable,
  secretTable,
  settlementTables,
  siblingTables,
  type FamilyTableKind,
  type NationColumn,
  type SettlementType,
} from './tables';

// ── Result readers ──────────────────────────────────────────────────────────

export const rowIndex = (R: Results, key: string): number | undefined => {
  const x = R[key];
  return x?.kind === 'table' ? x.rowIndex : undefined;
};
export const row = (R: Results, key: string, table: Table): TableRow | undefined => {
  const i = rowIndex(R, key);
  return i === undefined ? undefined : table.rows[i];
};
export const choice = (R: Results, key: string): string | undefined => {
  const x = R[key];
  return x?.kind === 'choice' ? x.value : undefined;
};
export const total = (R: Results, key: string): number | undefined => {
  const x = R[key];
  return x?.kind === 'dice' ? x.total : undefined;
};

/** What a settlement type means for the family tables when the book doesn't say. */
const FAMILY_KIND_DEFAULT: Record<SettlementType, FamilyTableKind> = {
  Village: 'Village',
  City: 'City',
  Town: 'Village',
  'Military outpost': 'City',
  'Nomadic diaspora': 'Village',
  'Seven villages': 'Village',
};

export interface AcquiredSlot {
  index: number;
  kind: 'ally' | 'rival';
}

export interface Derived {
  regionIndex?: number;
  government?: string;
  column?: NationColumn;
  background?: (typeof BACKGROUNDS)[number];
  allies?: number;
  rivals?: number;
  swapped?: boolean;
  slots?: AcquiredSlot[];
  settlementType?: SettlementType;
  familyKind?: FamilyTableKind;
  /** Which acquired slot earned each fateful moment, in order. */
  fateSources?: number[];
}

/**
 * Walks the chronicle in order. Returns the steps that exist so far and the
 * facts derived from finished steps. Stops at the first unresolved step that
 * later steps depend on.
 */
export function walk(R: Results): { steps: Step[]; d: Derived } {
  const steps: Step[] = [];
  const d: Derived = {};
  const has = (key: string) => key in R;
  const done = () => ({ steps, d });

  // 1. Homeland
  steps.push({
    key: 'homeland',
    type: 'table',
    section: 'origins',
    title: 'Where were you born?',
    intro: 'Roll for the region of Wildemount you call home, or choose it.',
    note: 'Born in one region and raised in another? The book suggests rolling twice. Pick the one that shaped you most.',
    table: homelandTable,
  });
  const hIdx = rowIndex(R, 'homeland');
  if (hIdx === undefined) return done();
  d.regionIndex = hIdx;
  const region = REGIONS[hIdx];

  let government = region.governments[0];
  if (region.governments.length > 1) {
    steps.push({
      key: 'government',
      type: 'choice',
      section: 'origins',
      title: 'Who rules your home?',
      intro: `The ${region.name} answers to more than one power. Which one were you raised under?`,
      options: region.governments.map((g) => ({ value: g, label: g })),
    });
    const g = choice(R, 'government');
    if (!g) return done();
    government = g;
  }
  d.government = government;

  let column = GOVERNMENT_COLUMN[government];
  if (column === null) {
    steps.push({
      key: 'status-column',
      type: 'choice',
      section: 'origins',
      title: 'Whose eyes judge you?',
      intro: `The book gives no Social Status column for ${government}. Choose the nation whose view of your background fits best.`,
      note: government === 'Revelry pirates' ? 'The Clovis Concord shares your coast.' : 'The Kryn Dynasty shares your land.',
      options: NATION_COLUMNS.map((n) => ({ value: n.id, label: n.name, description: n.values })),
      autoValue: government === 'Revelry pirates' ? 'CC' : 'KD',
    });
    const c = choice(R, 'status-column') as NationColumn | undefined;
    if (!c) return done();
    column = c;
  }
  d.column = column;

  // 2. Background
  steps.push({
    key: 'background',
    type: 'table',
    section: 'origins',
    title: 'What was your life before?',
    intro: 'Your background: the trade, calling or circumstance you grew into.',
    table: backgroundTable,
  });
  const bIdx = rowIndex(R, 'background');
  if (bIdx === undefined) return done();
  const bg = BACKGROUNDS[bIdx];
  d.background = bg;

  // 3. Social Status
  let status = SOCIAL_STATUS[bg][column];
  if (status === 'faith') {
    steps.push({
      key: 'faith',
      type: 'choice',
      section: 'origins',
      title: 'Is your faith lawful?',
      intro: 'The Dwendalian Empire permits only certain gods. An acolyte of a legal faith gains an ally; one of an outlawed faith gains a rival.',
      options: [
        { value: 'legal', label: 'A legal faith', description: '1 ally' },
        { value: 'illegal', label: 'An outlawed faith', description: '1 rival' },
      ],
    });
    const f = choice(R, 'faith');
    if (!f) return done();
    status = f === 'legal' ? [1, 0] : [0, 1];
  }
  let [allies, rivals] = status;
  const swapped = government === 'Uthodurn';
  if (swapped) [allies, rivals] = [rivals, allies];
  d.allies = allies;
  d.rivals = rivals;
  d.swapped = swapped;
  d.slots = [
    ...Array.from({ length: allies }, () => 'ally' as const),
    ...Array.from({ length: rivals }, () => 'rival' as const),
  ].map((kind, index) => ({ index, kind }));

  const nation = NATION_COLUMNS.find((n) => n.id === column)!;
  const count = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
  steps.push({
    key: 'social-status',
    type: 'info',
    section: 'origins',
    title: 'How the world sees you',
    intro: `In the eyes of the ${nation.name}, a ${bg.toLowerCase()} is a known quantity.`,
    lines: [
      nation.values,
      allies + rivals === 0
        ? 'Your standing earns you no allies or rivals of note.'
        : `Your standing earns you ${count(allies, 'ally', 'allies')} and ${count(rivals, 'rival', 'rivals')}. You’ll meet them shortly.`,
      ...(swapped ? ['Uthodurn turns things around: every ally from the table became a rival, and every rival an ally.'] : []),
    ],
  });
  if (!has('social-status')) return done();

  // 4. Home Settlement (travellers may roll up to three)
  for (let i = 1; i <= 3; i++) {
    steps.push({
      key: `settlement-${i}`,
      type: 'table',
      section: 'origins',
      title: i === 1 ? 'Where did you grow up?' : 'Where else did you have ties?',
      intro: i === 1 ? `Roll for your home settlement in the ${region.name}.` : 'Another place you had connections in.',
      note: i === 1 ? 'If the result clashes with your social status, reroll or explain it.' : undefined,
      table: settlementTables[region.id],
    });
    if (!has(`settlement-${i}`)) return done();
    if (i === 3) break;
    steps.push({
      key: `traveller-${i}`,
      type: 'choice',
      section: 'origins',
      title: 'Did you travel?',
      intro: 'Travellers (military children, nomads, touring performers) may have ties to up to three settlements.',
      options: [
        { value: 'done', label: 'No, this was home' },
        { value: 'more', label: 'Yes, add another settlement' },
      ],
      autoValue: 'done',
    });
    const t = choice(R, `traveller-${i}`);
    if (!t) return done();
    if (t === 'done') break;
  }
  const settlement = row(R, 'settlement-1', settlementTables[region.id])!;
  const type = settlement.detail as SettlementType;
  d.settlementType = type;

  // 5. Race
  steps.push({
    key: 'race',
    type: 'choice',
    section: 'origins',
    title: 'What is your race?',
    intro: `The book rolls against ${settlement.label}’s demographics (EGW Chapter 3). Choose your race, or let the dice pick from common Wildemount peoples.`,
    options: RACES.map((x) => ({ value: x, label: x })),
    allowCustom: true,
  });
  if (!has('race')) return done();

  // 6. Family
  let familyKind: FamilyTableKind;
  if (type === 'Village' || type === 'City') {
    familyKind = type;
  } else {
    steps.push({
      key: 'family-kind',
      type: 'choice',
      section: 'family',
      title: 'Village or city family?',
      intro: `The book has family tables only for villages and cities. ${settlement.label} is a ${type.toLowerCase()}. Which is it closer to?`,
      options: [
        { value: 'Village', label: 'Village', description: 'Larger families; farms need hands' },
        { value: 'City', label: 'City', description: 'Smaller families; cities are expensive' },
      ],
      autoValue: FAMILY_KIND_DEFAULT[type],
    });
    const k = choice(R, 'family-kind') as FamilyTableKind | undefined;
    if (!k) return done();
    familyKind = k;
  }
  d.familyKind = familyKind;

  steps.push({
    key: 'parents',
    type: 'table',
    section: 'family',
    title: 'Who raised you?',
    intro: 'Living parents. “Parents” can mean any household that raised you.',
    table: parentTables[familyKind],
  });
  if (!has('parents')) return done();

  steps.push({
    key: 'siblings',
    type: 'table',
    section: 'family',
    title: 'Brothers and sisters?',
    intro: 'Living siblings. Half-siblings, cousins and sworn kin all count.',
    table: siblingTables[familyKind],
  });
  const sIdx = rowIndex(R, 'siblings');
  if (sIdx === undefined) return done();
  const sibDice = SIBLING_DICE[sIdx];
  if (sibDice) {
    steps.push({
      key: 'sibling-count',
      type: 'dice',
      section: 'family',
      title: 'How many siblings?',
      intro: `Roll ${sibDice.replace('+', ' + ')} for the number of living siblings.`,
      dice: sibDice,
      describe: (n) => `${n} sibling${n === 1 ? '' : 's'}`,
    });
    if (!has('sibling-count')) return done();
  }

  // 7. Powerful family relationships
  steps.push({
    key: 'family-count',
    type: 'dice',
    section: 'family',
    title: 'Whose bond runs deepest?',
    intro: 'Roll a d3 for how many family members you share a powerful relationship with.',
    note: 'If you have fewer family members than this, the book has no rule. Treat the extras as extended or found family.',
    dice: 'd3',
    describe: (n) => `${n} powerful relationship${n === 1 ? '' : 's'}`,
  });
  const famCount = total(R, 'family-count');
  if (famCount === undefined) return done();
  for (let i = 0; i < famCount; i++) {
    steps.push({
      key: `family-rel-${i}`,
      type: 'table',
      section: 'family',
      title: famCount > 1 ? `Family bond ${i + 1} of ${famCount}` : 'Your family bond',
      intro: 'Each powerful family relationship makes them an ally or a rival.',
      table: familyRelationshipTable,
    });
    if (!has(`family-rel-${i}`)) return done();
  }

  // 8. Acquired allies & rivals
  let fateCount = 0;
  d.fateSources = [];
  for (const slot of d.slots) {
    const n = d.slots.filter((s) => s.kind === slot.kind).indexOf(slot) + 1;
    const ofKind = d.slots.filter((s) => s.kind === slot.kind).length;
    const name = slot.kind === 'ally' ? 'ally' : 'rival';
    const label = ofKind > 1 ? `${name} ${n} of ${ofKind}` : name;
    steps.push({
      key: `acq-${slot.index}-rel`,
      type: 'table',
      section: 'bonds',
      title: slot.kind === 'ally' ? `Your ${label}: what binds you?` : `Your ${label}: what stands between you?`,
      intro: slot.kind === 'ally' ? 'How did this ally come into your life?' : 'Why does this rival have it in for you?',
      table: slot.kind === 'ally' ? allyRelationshipTable : rivalRelationshipTable,
      tone: slot.kind,
    });
    const relIdx = rowIndex(R, `acq-${slot.index}-rel`);
    if (relIdx === undefined) return done();

    if (slot.kind === 'ally' && relIdx === 0) {
      steps.push({
        key: `acq-${slot.index}-pet`,
        type: 'choice',
        section: 'bonds',
        title: 'What creature is your companion?',
        intro: 'A loyal pet: choose any beast of CR 1/8 or lower. Pets don’t roll an identity.',
        options: PET_BEASTS.map((x) => ({ value: x, label: x })),
        allowCustom: true,
      });
      if (!has(`acq-${slot.index}-pet`)) return done();
      continue;
    }

    steps.push({
      key: `acq-${slot.index}-id`,
      type: 'table',
      section: 'bonds',
      title: `Who is your ${label}?`,
      intro: 'Their identity gives them a stat block. Results marked “Fateful moment” are someone powerful, and earn you a fateful moment.',
      note: 'The DM may make this roll in secret, to keep their true nature hidden.',
      table: identityTable,
      tone: slot.kind,
    });
    const idIdx = rowIndex(R, `acq-${slot.index}-id`);
    if (idIdx === undefined) return done();
    if (isStarIdentity(idIdx)) {
      fateCount++;
      d.fateSources.push(slot.index);
    }
  }

  // 9. Fateful moments
  for (let j = 0; j < fateCount; j++) {
    steps.push({
      key: `fate-${j}`,
      type: 'table',
      section: 'fate',
      title: fateCount > 1 ? `Fateful moment ${j + 1} of ${fateCount}` : 'A fateful moment',
      intro: 'Someone powerful crossed your path, and an event changed you for good.',
      note: 'If the result doesn’t fit your story (siblings you don’t have, say), reroll or adapt it with your DM.',
      table: fatefulMomentTable,
    });
    const fIdx = rowIndex(R, `fate-${j}`);
    if (fIdx === undefined) return done();
    const extra = FATEFUL_EXTRAS[fIdx];
    if (extra?.identity) {
      steps.push({
        key: `fate-${j}-who`,
        type: 'table',
        section: 'fate',
        title: extra.identity,
        intro: 'This moment involves someone new. Roll their identity.',
        note: 'This roll doesn’t earn another fateful moment. The book doesn’t say whether it should.',
        table: identityTable,
      });
      if (!has(`fate-${j}-who`)) return done();
    }
    if (extra?.choice) {
      steps.push({
        key: `fate-${j}-choice`,
        type: 'choice',
        section: 'fate',
        title: extra.choice.title,
        intro: fatefulMomentTable.rows[fIdx].label,
        options: extra.choice.options.map((x) => ({ value: x, label: x })),
      });
      if (!has(`fate-${j}-choice`)) return done();
    }
  }

  // 10. Favourite food
  steps.push({
    key: 'food',
    type: 'table',
    section: 'flavour',
    title: 'What tastes like home?',
    intro: 'Your favourite food or drink. Purely for flavour.',
    table: foodTables[CUISINE_FOR_REGION[region.id]],
  });
  if (!has('food')) return done();

  // 11. Mysterious secret
  steps.push({
    key: 'secret',
    type: 'table',
    section: 'flavour',
    title: 'What can’t you explain?',
    intro: 'Something strange you saw or received, which has stayed with you all your life. Your DM decides what it means.',
    table: secretTable,
  });
  if (!has('secret')) return done();

  // 12. Prophecy
  steps.push({
    key: 'prophecy',
    type: 'text',
    section: 'prophecy',
    title: 'What will you become?',
    intro: 'Write three goals. Each has a complication: what happens once you achieve it. Completing a goal earns a reward.',
    note: 'Only the immediate goal is needed now. Linking a goal to your mysterious secret works well.',
    groups: [
      { id: 'immediate', title: 'Immediate goal', hint: 'Early in the campaign' },
      { id: 'long', title: 'Long-term goal', hint: 'Mid-campaign' },
      { id: 'arc', title: 'Arc-ending goal', hint: 'Concludes your story' },
    ].map((g) => ({
      ...g,
      fields: [
        { id: 'goal', label: 'Goal', placeholder: 'What do you want to achieve?' },
        { id: 'complication', label: 'Complication', placeholder: 'What happens once you do?' },
      ],
    })),
    inspiration: {
      table: prophecyTable,
      fill: (r) => {
        const [goal, complication] = prophecyFill(prophecyTable.rows.indexOf(r));
        return { goal, complication };
      },
    },
  });
  return done();
}

export const plan = (R: Results): Step[] => walk(R).steps;
