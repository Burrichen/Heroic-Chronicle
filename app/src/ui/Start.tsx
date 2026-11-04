import { Footprints, Moon, Sparkles, Sun } from 'lucide-react';
import type { ChronicleDef } from '../engine/types';
import { Moss } from './Moss';
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

/** The standing-stone mark: a weathered stele with a carved die face. */
function Mark() {
  return (
    <svg className="start-mark" viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path
        d="M20 66V18c0-8 7-13 16-13s16 5 16 13v48"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M14 66h44" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M36 24 46 30v12l-10 6-10-6V30z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M36 24v24M26 30l20 12M46 30 26 42" stroke="currentColor" strokeWidth="1.1" opacity="0.55" />
      <path d="M24 58c3-2 6-1 8 1M40 60c2-2 5-3 8-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
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
        <Mark />
        <h1>{def.name}</h1>
        <p className="lede">
          Uncover where your hero comes from, who stands beside them, who stands against them, and what fate has
          written for them.
        </p>

        <div className="start-choices">
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

      <Moss
        id="start-moss"
        from="bottom"
        width={1600}
        height={240}
        seed={9}
        style={{ left: '50%', bottom: 0, transform: 'translateX(-50%)' }}
      />
    </main>
  );
}
