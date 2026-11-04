export type SaveOutcome = 'saved' | 'cancelled';

export function fileNameFor(name: string): string {
  const slug = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${slug || 'heroic-chronicle'}.md`;
}

const inDesktopApp = () => typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;

/**
 * Saves text as a file. In the desktop app this opens the system save dialog;
 * in a browser it downloads the file.
 */
export async function saveTextFile(fileName: string, text: string): Promise<SaveOutcome> {
  if (inDesktopApp()) {
    const [{ save }, { writeTextFile }] = await Promise.all([
      import('@tauri-apps/plugin-dialog'),
      import('@tauri-apps/plugin-fs'),
    ]);
    const path = await save({ defaultPath: fileName, filters: [{ name: 'Markdown', extensions: ['md'] }] });
    if (!path) return 'cancelled';
    await writeTextFile(path, text);
    return 'saved';
  }

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
