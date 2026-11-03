import type { DiceSpec, Table, TableRow } from './types';

export type Rng = () => number;

export interface ParsedDice {
  count: number;
  sides: number;
  modifier: number;
}

/** Parses `d100`, `2d4`, `2d4+2`, `1d6-1`. Throws on anything else. */
export function parseDice(spec: DiceSpec): ParsedDice {
  const m = /^\s*(\d*)d(\d+)\s*(?:([+-])\s*(\d+))?\s*$/i.exec(spec);
  if (!m) throw new Error(`Invalid dice expression: ${spec}`);
  const count = m[1] ? Number(m[1]) : 1;
  const sides = Number(m[2]);
  const modifier = m[3] ? (m[3] === '-' ? -1 : 1) * Number(m[4]) : 0;
  if (count < 1 || sides < 1) throw new Error(`Invalid dice expression: ${spec}`);
  return { count, sides, modifier };
}

export function rollDie(sides: number, rng: Rng = Math.random): number {
  return Math.floor(rng() * sides) + 1;
}

export function rollDice(spec: DiceSpec, rng: Rng = Math.random): { total: number; rolls: number[] } {
  const { count, sides, modifier } = parseDice(spec);
  const rolls = Array.from({ length: count }, () => rollDie(sides, rng));
  return { total: rolls.reduce((a, b) => a + b, 0) + modifier, rolls };
}

/** Lowest and highest possible totals. */
export function diceRange(spec: DiceSpec): [number, number] {
  const { count, sides, modifier } = parseDice(spec);
  return [count + modifier, count * sides + modifier];
}

/** The number of sides on a table's single die (tables always use one die). */
export function tableSides(table: Table): number {
  return parseDice(table.die).sides;
}

export function findRowIndex(table: Table, roll: number): number {
  return table.rows.findIndex((r) => roll >= r.min && roll <= r.max);
}

/** Formats a roll for display; on a d100, 100 is written "00". */
export function formatRoll(n: number, sides: number): string {
  if (sides === 100) return n === 100 ? '00' : String(n).padStart(2, '0');
  return String(n);
}

export function formatRange(row: TableRow, sides: number): string {
  const lo = formatRoll(row.min, sides);
  const hi = formatRoll(row.max, sides);
  return row.min === row.max ? lo : `${lo}–${hi}`;
}

/** Checks that a table's rows cover every face of its die exactly once. */
export function validateTable(table: Table): string[] {
  const sides = tableSides(table);
  const problems: string[] = [];
  const seen = new Array<number>(sides + 1).fill(0);
  for (const row of table.rows) {
    if (row.min > row.max) problems.push(`${table.id}: row "${row.label}" has min > max`);
    for (let n = row.min; n <= row.max; n++) {
      if (n < 1 || n > sides) problems.push(`${table.id}: row "${row.label}" covers ${n}, outside 1–${sides}`);
      else seen[n]++;
    }
  }
  for (let n = 1; n <= sides; n++) {
    if (seen[n] === 0) problems.push(`${table.id}: ${n} is not covered`);
    if (seen[n] > 1) problems.push(`${table.id}: ${n} is covered ${seen[n]} times`);
  }
  return problems;
}
