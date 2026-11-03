import type { ChronicleDef, Resolution, Step, SummarySection } from './types';

/** One-line text for a step's result, used in the progress rail. */
export function resolutionText(step: Step, res: Resolution): string {
  switch (res.kind) {
    case 'table':
      return step.type === 'table' ? step.table.rows[res.rowIndex]?.label ?? '' : '';
    case 'dice':
      return step.type === 'dice' && step.describe ? step.describe(res.total) : String(res.total);
    case 'choice': {
      if (step.type !== 'choice') return res.value;
      return step.options.find((o) => o.value === res.value)?.label ?? res.value;
    }
    case 'text': {
      if (step.type !== 'text') return '';
      const written = step.groups.filter((g) => g.fields.some((f) => res.values[`${g.id}.${f.id}`]?.trim())).length;
      return written === 0 ? 'Not written yet' : `${written} of ${step.groups.length} written`;
    }
    case 'info':
      return '';
  }
}

/** The finished chronicle as Markdown, for copying or saving. */
export function toMarkdown(def: ChronicleDef, name: string, sections: SummarySection[]): string {
  const lines: string[] = [`# ${name.trim() || 'Unnamed hero'}`, '', `*${def.name}*`, ''];
  for (const s of sections) {
    lines.push(`## ${s.title}`, '');
    if (!s.items.length) lines.push(s.empty ?? '—', '');
    for (const item of s.items) {
      lines.push(`- **${item.label}:** ${item.value}`);
      if (item.detail) lines.push(`  ${item.detail}`);
    }
    lines.push('');
  }
  return lines.join('\n');
}
