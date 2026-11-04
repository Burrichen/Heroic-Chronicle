import { describe, expect, it } from 'vitest';
import { diceRange, formatRoll, parseDice, rollDice, validateTable } from './dice';
import { autoComplete, autoResolve, currentStep, isComplete, resolve, rewindTo } from './engine';
import { originalChronicle as def } from '../chronicles/original';
import { ALL_TABLES } from '../chronicles/original/tables';
import type { Results } from './types';

/** Small deterministic RNG so failures can be reproduced. */
function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

describe('dice', () => {
  it('parses expressions', () => {
    expect(parseDice('d100')).toEqual({ count: 1, sides: 100, modifier: 0 });
    expect(parseDice('2d4+2')).toEqual({ count: 2, sides: 4, modifier: 2 });
    expect(diceRange('2d4+2')).toEqual([4, 10]);
    expect(() => parseDice('banana')).toThrow();
  });
  it('rolls within range', () => {
    const rng = seeded(1);
    for (let i = 0; i < 500; i++) {
      const { total } = rollDice('2d4+2', rng);
      expect(total).toBeGreaterThanOrEqual(4);
      expect(total).toBeLessThanOrEqual(10);
    }
  });
  it('writes 100 as 00 on a d100', () => {
    expect(formatRoll(100, 100)).toBe('00');
    expect(formatRoll(7, 100)).toBe('07');
    expect(formatRoll(7, 20)).toBe('7');
  });
});

describe('original chronicle tables', () => {
  it.each(ALL_TABLES.map((t) => [t.id, t] as const))('%s covers every face exactly once', (_, table) => {
    expect(validateTable(table)).toEqual([]);
  });
});

describe('original chronicle flow', () => {
  it('auto mode always finishes and produces a summary', () => {
    for (let seed = 0; seed < 300; seed++) {
      const R = autoComplete(def, {}, seeded(seed));
      expect(isComplete(def, R)).toBe(true);
      const sections = def.summarize(R);
      expect(sections.find((s) => s.title === 'Origins')?.items.length).toBeGreaterThan(3);
    }
  });

  it('a ★ identity creates a fateful moment step', () => {
    let R: Results = {};
    const rng = seeded(7);
    // Auto-resolve everything except identity rolls, which are forced to Mage (★, row 16).
    for (let i = 0; i < 200; i++) {
      const step = currentStep(def, R);
      if (!step || step.key.startsWith('fate-')) break;
      R = step.key.endsWith('-id')
        ? resolve(def, R, step.key, { kind: 'table', roll: 82, rowIndex: 16, method: 'chosen' })
        : resolve(def, R, step.key, autoResolve(step, rng));
    }
    const stars = Object.keys(R).filter((k) => k.endsWith('-id')).length;
    const fates = def.plan(R).filter((s) => /^fate-\d+$/.test(s.key)).length;
    expect(fates).toBe(stars > 0 ? 1 : 0);
  });

  it('a Soldier in the Empire has 1 ally and 1 rival', () => {
    let R: Results = {};
    R = resolve(def, R, 'homeland', { kind: 'table', roll: 50, rowIndex: 2, method: 'chosen' }); // Zemni Fields
    R = resolve(def, R, 'background', { kind: 'table', roll: 17, rowIndex: 16, method: 'chosen' }); // Soldier
    const status = def.summarize(R)[0].items.find((x) => x.label === 'Social standing');
    expect(status?.value).toBe('1 ally, 1 rival');
  });

  it('Uthodurn swaps allies and rivals', () => {
    let R: Results = {};
    R = resolve(def, R, 'homeland', { kind: 'table', roll: 75, rowIndex: 3, method: 'chosen' });
    R = resolve(def, R, 'government', { kind: 'choice', value: 'Uthodurn', method: 'chosen' });
    R = resolve(def, R, 'background', { kind: 'table', roll: 1, rowIndex: 0, method: 'chosen' }); // Acolyte: GW = 1 rival
    const standing = def.summarize(R)[0].items.find((x) => x.label === 'Social standing');
    expect(standing?.value).toBe('1 ally, 0 rivals');
  });

  it('rewinding clears later steps', () => {
    const R = autoComplete(def, {}, seeded(42));
    const back = rewindTo(def, R, 'background');
    expect('background' in back).toBe(false);
    expect('secret' in back).toBe(false);
    expect('homeland' in back).toBe(true);
    expect(currentStep(def, back)?.key).toBe('background');
  });
});

describe('prophecy sentences', async () => {
  const { joinGoal } = await import('../chronicles/original/summary');
  it('joins table complications as one sentence', () => {
    expect(joinGoal('Join a blood hunter order', 'and gain power at a steep price')).toBe(
      'Join a blood hunter order, and gain power at a steep price',
    );
  });
  it('keeps player-written complications as their own sentence', () => {
    expect(joinGoal('Find my sister', 'She does not want to be found.')).toBe(
      'Find my sister. Complication: She does not want to be found.',
    );
  });
});

describe('chapter progress', async () => {
  const { chapterProgress } = await import('./engine');
  it('starts at zero, never goes backwards, and ends at one', () => {
    for (let seed = 0; seed < 50; seed++) {
      const rng = seeded(seed);
      let R: Results = {};
      let last = chapterProgress(def, R).fraction;
      expect(last).toBe(0);
      for (let i = 0; i < 200; i++) {
        const step = currentStep(def, R);
        if (!step) break;
        R = resolve(def, R, step.key, autoResolve(step, rng));
        const p = chapterProgress(def, R).fraction;
        expect(p).toBeGreaterThanOrEqual(last);
        last = p;
      }
      expect(last).toBe(1);
    }
  });
});
