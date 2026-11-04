import { useState } from 'react';
import { ChevronDown, Moon, RotateCcw, Sun } from 'lucide-react';
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
  /** Small windows: the chronicle collapses into a strip that opens on demand. */
  const [open, setOpen] = useState(false);
  const plan = def.plan(results);
  const currentSection = plan.find((s) => s.key === currentKey)?.section;
  const currentIdx = currentSection ? def.sections.findIndex((s) => s.id === currentSection) : def.sections.length;
  const doneCount = plan.filter((s) => s.key in results && !def.hiddenInRail?.(s.key)).length;
  const stripLabel = currentSection ? def.sections[currentIdx].title : 'Chronicle complete';

  return (
    <aside className={`rail${open ? ' is-open' : ''}`} aria-label="Your chronicle so far">
      <div className="rail-head">
        <h1>{def.name}</h1>
        <p>{def.tagline}</p>
      </div>

      <button
        type="button"
        className="rail-strip"
        aria-expanded={open}
        aria-controls="rail-body"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="dots" aria-hidden="true">
          {def.sections.map((sec, si) => (
            <span key={sec.id} className={si < currentIdx ? 'is-done' : si === currentIdx ? 'is-current' : ''} />
          ))}
        </span>
        <span className="t">{stripLabel}</span>
        <span className="n">{doneCount} recorded</span>
        <ChevronDown aria-hidden="true" />
      </button>

      <nav className="rail-body" id="rail-body">
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
                    const value = res && !isNow ? resolutionText(s, res) : '';
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
                          {isNow ? (
                            <span className="v now-mark">
                              <span className="pip" aria-hidden="true" />
                              In progress
                            </span>
                          ) : (
                            <span className="v">{value}</span>
                          )}
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

      <Moss id="rail-moss" from="bottom" width={300} height={150} seed={4} style={{ left: 0, bottom: 0 }} />

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
