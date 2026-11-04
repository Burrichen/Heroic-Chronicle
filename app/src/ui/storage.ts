import type { Results } from '../engine/types';

export type Screen = 'start' | 'steps' | 'summary';
export type Theme = 'dark' | 'light';

export interface Saved {
  chronicleId: string;
  results: Results;
  name: string;
  screen: Screen;
}

const KEY = 'heroic-chronicle.v1';
const THEME_KEY = 'heroic-chronicle.theme';

/** Storage can be unavailable (private windows, blocked site data); never let that break the app. */
export function loadSaved(): Saved | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as Partial<Saved>;
    if (typeof s !== 'object' || !s || typeof s.results !== 'object' || !s.results) return null;
    return {
      chronicleId: typeof s.chronicleId === 'string' ? s.chronicleId : 'original',
      results: s.results,
      name: typeof s.name === 'string' ? s.name : '',
      screen: s.screen === 'steps' || s.screen === 'summary' ? s.screen : 'start',
    };
  } catch {
    return null;
  }
}

export function writeSaved(s: Saved) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* progress just won't persist */
  }
}

export function clearSaved() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* nothing to clear */
  }
}

export function loadTheme(): Theme {
  try {
    return localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

export function writeTheme(t: Theme) {
  try {
    localStorage.setItem(THEME_KEY, t);
  } catch {
    /* theme just won't persist */
  }
}
