import { Footprints, Moon, Sparkles, Sun } from 'lucide-react';
import type { ChronicleDef } from '../engine/types';
import { Corners, Crest, Divider } from './Heraldry';
import type { Theme } from './storage';

interface StartProps {
  def: ChronicleDef;
  theme: Theme;
  hasProgress: boolean;
  onToggleTheme: () => void;
  onGuided: () => void;
  onAuto: () => void;
  onResume: () => void;
}

export function Start({ def, theme, hasProgress, onToggleTheme, onGuided, onAuto, onResume }: StartProps) {
  return (
    <main className="start">
      <div className="theme-corner">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>

      <div className="start-inner">
        <Crest className="start-crest" />
        <h1>{def.name}</h1>
        <Divider />
        <p className="lede">
          Uncover where your hero comes from, who stands beside them, who stands against them, and what fate has
          written for them.
        </p>

        <div className="start-choices">
          <Corners />
          <button type="button" className="start-choice" onClick={onGuided}>
            <Footprints aria-hidden="true" />
            <strong>Walk the chronicle</strong>
            <span>Go step by step. Roll each table, pick a result, or type in your own dice.</span>
          </button>
          <button type="button" className="start-choice" onClick={onAuto}>
            <Sparkles aria-hidden="true" />
            <strong>Let fate decide</strong>
            <span>Roll everything at once and jump straight to the finished chronicle.</span>
          </button>
        </div>

        {hasProgress && (
          <div className="start-resume">
            <button type="button" className="btn btn-lg" onClick={onResume}>
              Continue your unfinished chronicle
            </button>
          </div>
        )}

        <p className="start-foot">{def.tagline}</p>
      </div>

    </main>
  );
}
