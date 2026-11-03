import { findRowIndex, rollDice, tableSides, rollDie, type Rng } from './dice';
import type { ChronicleDef, Resolution, Results, Step } from './types';

/** Removes results for steps that no longer exist, repeating until stable. */
export function prune(def: ChronicleDef, results: Results): Results {
  let current = results;
  for (let i = 0; i < 50; i++) {
    const keys = new Set(def.plan(current).map((s) => s.key));
    const next: Results = {};
    let changed = false;
    for (const [k, v] of Object.entries(current)) {
      if (keys.has(k)) next[k] = v;
      else changed = true;
    }
    if (!changed) return current;
    current = next;
  }
  return current;
}

export function currentStep(def: ChronicleDef, results: Results): Step | undefined {
  return def.plan(results).find((s) => !(s.key in results));
}

export function isComplete(def: ChronicleDef, results: Results): boolean {
  return currentStep(def, results) === undefined;
}

/** Records a result and drops anything that no longer applies. */
export function resolve(def: ChronicleDef, results: Results, key: string, res: Resolution): Results {
  return prune(def, { ...results, [key]: res });
}

/**
 * Clears the result for `key` and every step that comes after it, so the
 * user can redo that step. Later steps depend on earlier ones, so they must go.
 */
export function rewindTo(def: ChronicleDef, results: Results, key: string): Results {
  const plan = def.plan(results);
  const idx = plan.findIndex((s) => s.key === key);
  if (idx < 0) return results;
  const drop = new Set(plan.slice(idx).map((s) => s.key));
  const next: Results = {};
  for (const [k, v] of Object.entries(results)) if (!drop.has(k)) next[k] = v;
  return prune(def, next);
}

/** The step resolved most recently before the current one (for the Back button). */
export function previousStep(def: ChronicleDef, results: Results): Step | undefined {
  const plan = def.plan(results);
  const curIdx = plan.findIndex((s) => !(s.key in results));
  const end = curIdx < 0 ? plan.length : curIdx;
  for (let i = end - 1; i >= 0; i--) if (plan[i].key in results) return plan[i];
  return undefined;
}

/** Resolves a step without user input. Used by auto mode. */
export function autoResolve(step: Step, rng: Rng = Math.random): Resolution {
  switch (step.type) {
    case 'table': {
      const roll = rollDie(tableSides(step.table), rng);
      return { kind: 'table', roll, rowIndex: findRowIndex(step.table, roll), method: 'auto' };
    }
    case 'dice': {
      const { total, rolls } = rollDice(step.dice, rng);
      return { kind: 'dice', total, rolls, method: 'auto' };
    }
    case 'choice': {
      const value = step.autoValue ?? step.options[Math.floor(rng() * step.options.length)].value;
      return { kind: 'choice', value, method: 'auto' };
    }
    case 'text': {
      const values: Record<string, string> = {};
      if (step.inspiration) {
        const { table, fill } = step.inspiration;
        const used = new Set<number>();
        for (const group of step.groups) {
          let idx = -1;
          for (let tries = 0; tries < 20 && (idx < 0 || used.has(idx)); tries++) {
            idx = findRowIndex(table, rollDie(tableSides(table), rng));
          }
          used.add(idx);
          for (const [field, v] of Object.entries(fill(table.rows[idx]))) values[`${group.id}.${field}`] = v;
        }
      }
      return { kind: 'text', values, method: 'auto' };
    }
    case 'info':
      return { kind: 'info', method: 'auto' };
  }
}

/** Runs auto mode from the current step to the end. */
export function autoComplete(def: ChronicleDef, results: Results, rng: Rng = Math.random): Results {
  let r = results;
  for (let i = 0; i < 500; i++) {
    const step = currentStep(def, r);
    if (!step) return r;
    r = resolve(def, r, step.key, autoResolve(step, rng));
  }
  throw new Error('Auto mode did not finish; the chronicle plan may loop.');
}

/** Progress through the chronicle as a fraction of the steps known so far. */
export function progress(def: ChronicleDef, results: Results): { done: number; total: number } {
  const plan = def.plan(results);
  return { done: plan.filter((s) => s.key in results).length, total: plan.length };
}
