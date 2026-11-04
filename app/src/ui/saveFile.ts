export type SaveOutcome = 'saved' | 'cancelled';

export function fileNameFor(name: string): string {
  const slug = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${slug || 'heroic-chronicle'}.md`;
}

/** Saves text as a file. In the browser this is a download. */
export async function saveTextFile(fileName: string, text: string): Promise<SaveOutcome> {
  const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  return 'saved';
}
