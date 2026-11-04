import { useState } from 'react';
import { Moon, RotateCcw, Sun } from 'lucide-react';
import { resolutionText } from '../engine/describe';
import type { ChronicleDef, Results } from '../engine/types';
import { Moss } from './Moss';
import type { Theme } from './storage';

interface RailProps {
  def: ChronicleDef;
  results: Results;
  currentKey?: string;
  theme: Theme;
  onToggleTheme: () => void;
  onRevisit: (key: string) => void;
  onRestart: () => void;
}

export function Rail({ def, results, currentKey, theme, onToggleTheme, onRevisit, onRestart }: RailProps) {
  const [confirmKey, setConfirmKey] = useState<string | null>(null);
  const [confirmRestart, setConfirmRestart] = useState(false);
  const plan = def.plan(results);
  const currentSection = plan.find((s) => s.key === currentKey)?.section;
  const currentIdx = currentSection ? def.sections.findIndex((s) => s.id === currentSection) : def.sections.length;

  return (
    <aside className="rail" aria-label="Your chronicle so far">
      <div className="rail-head">
        <h1 className="carved">{def.name}</h1>
        <p>{def.tagline}</p>
      </div>

      <nav className="rail-body">
        {def.sections.map((sec, si) => {
          const entries = plan.filter(
            (s) => s.section === sec.id && !def.hiddenInRail?.(s.key) && (s.key in results || s.key === currentKey),
          );
          const state = si < currentIdx ? 'is-done' : si === currentIdx ? 'is-current' : '';
          return (
            <div key={sec.id} className={`rail-section ${state}`}>
              <div className="rail-section-title">
                <span className="dot" aria-hidden="true" />
                {sec.title}
              </div>
              {entries.length > 0 && (
                <ul className="rail-entries">
                  {entries.map((s) => {
                    const res = results[s.key];
                    const isNow = s.key === currentKey;
                    const value = isNow ? 'now' : res ? resolutionText(s, res) : '';
                    return (
                      <li key={s.key}>
                        <button
                          type="button"
                          className={`rail-entry${isNow ? ' is-now' : ''}`}
                          aria-current={isNow ? 'step' : undefined}
                          title={isNow ? undefined : `${def.label(s.key)}: ${value}. Click to redo from here.`}
                          onClick={() => !isNow && setConfirmKey(confirmKey === s.key ? null : s.key)}
                        >
                          <span className="k">{def.label(s.key)}</span>
                          <span className="v">{value}</span>
                        </button>
                        {confirmKey === s.key && (
                          <div className="rail-confirm" role="group" aria-label="Redo from here">
                            <p>Redo this step? Everything after it will be cleared and rolled again.</p>
                            <div className="row">
                              <button
                                type="button"
                                className="btn btn-primary"
                                autoFocus
                                onClick={() => {
                                  setConfirmKey(null);
                                  onRevisit(s.key);
                                }}
                              >
                                Redo from here
                              </button>
                              <button type="button" className="btn" onClick={() => setConfirmKey(null)}>
                                Keep it
                              </button>
                            </div>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      <Moss id="rail-moss" from="bottom" width={300} height={300} seed={4} style={{ left: 0, bottom: 0 }} />

      <div className="rail-foot">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        {confirmRestart ? (
          <>
            <button type="button" className="btn btn-danger" autoFocus onClick={onRestart}>
              Discard and start over
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => setConfirmRestart(false)}>
              Cancel
            </button>
          </>
        ) : (
          <button type="button" className="btn btn-ghost" onClick={() => setConfirmRestart(true)}>
            <RotateCcw aria-hidden="true" />
            Start over
          </button>
        )}
      </div>
    </aside>
  );
}
