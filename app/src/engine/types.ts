/**
 * Core types for the chronicle engine.
 *
 * A chronicle (the original Heroic Chronicle, or a reworked one later) is a
 * `ChronicleDef`. Its `plan()` function looks at the results so far and returns
 * every step that currently exists, in order. The engine finds the first step
 * without a result and shows it. This keeps branching (extra allies, fateful
 * moments, optional sub-choices) entirely inside the chronicle's own module.
 */

/** A dice expression such as `d100`, `d20`, `d3` or `2d4+2`. */
export type DiceSpec = string;

export interface TableRow {
  /** Inclusive lower bound of the roll range (d100 uses 1–100; 100 shows as 00). */
  min: number;
  /** Inclusive upper bound. */
  max: number;
  /** Short result name, shown in bold. */
  label: string;
  /** Longer explanation or mechanical effect. */
  detail?: string;
  /** Marks a result that matters mechanically or narratively, e.g. ★ identities. */
  badge?: string;
}

export interface Table {
  id: string;
  title: string;
  die: DiceSpec;
  rows: TableRow[];
}

export interface ChoiceOption {
  value: string;
  label: string;
  description?: string;
}

export interface TextField {
  id: string;
  label: string;
  placeholder?: string;
  multiline?: boolean;
}

interface StepBase {
  /** Unique, stable key for this step's result. */
  key: string;
  /** Section id (see `ChronicleDef.sections`) used for the progress rail. */
  section: string;
  title: string;
  /** One or two sentences explaining the step. */
  intro?: string;
  /** Extra guidance, shown smaller beneath the intro. */
  note?: string;
}

export interface TableStep extends StepBase {
  type: 'table';
  table: Table;
  /** Colours the table for an ally or a rival. */
  tone?: 'ally' | 'rival';
}

export interface DiceStep extends StepBase {
  type: 'dice';
  dice: DiceSpec;
  /** Turns the total into a sentence, e.g. "3 siblings". */
  describe?: (total: number) => string;
}

export interface ChoiceStep extends StepBase {
  type: 'choice';
  options: ChoiceOption[];
  /** Allow a free-text answer in addition to the listed options. */
  allowCustom?: boolean;
  /** What auto mode picks. Defaults to a random option. */
  autoValue?: string;
}

export interface InfoStep extends StepBase {
  type: 'info';
  lines: string[];
}

export interface TextStep extends StepBase {
  type: 'text';
  /** Groups of fields, e.g. one group per prophecy goal. */
  groups: { id: string; title: string; hint?: string; fields: TextField[] }[];
  /** Optional table that can fill a group's fields with a random idea. */
  inspiration?: {
    table: Table;
    fill: (row: TableRow) => Record<string, string>;
  };
}

export type Step = TableStep | DiceStep | ChoiceStep | InfoStep | TextStep;

export type Method = 'rolled' | 'chosen' | 'auto';

export type Resolution =
  | { kind: 'table'; roll: number; rowIndex: number; method: Method }
  | { kind: 'dice'; total: number; rolls: number[]; method: Method }
  | { kind: 'choice'; value: string; custom?: boolean; method: Method }
  | { kind: 'text'; values: Record<string, string>; method: Method }
  | { kind: 'info'; method: Method };

export type Results = Record<string, Resolution>;

export interface SummaryItem {
  label: string;
  value: string;
  detail?: string;
  /** Visual accent: ally, rival or a mechanical benefit. */
  tone?: 'ally' | 'rival' | 'boon';
}

export interface SummarySection {
  title: string;
  items: SummaryItem[];
  /** Shown when the section has no items. */
  empty?: string;
}

export interface ChronicleDef {
  id: string;
  name: string;
  tagline: string;
  /** Ordered sections for the progress rail. */
  sections: { id: string; title: string }[];
  plan: (results: Results) => Step[];
  summarize: (results: Results) => SummarySection[];
  /** Short name for a step in the progress rail, e.g. "Homeland". */
  label: (key: string) => string;
  /** Steps that never appear in the progress rail (e.g. yes/no prompts). */
  hiddenInRail?: (key: string) => boolean;
}
