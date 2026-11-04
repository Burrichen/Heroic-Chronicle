import { useEffect, useMemo, useState } from 'react';
import { getChronicle } from '../chronicles';
import { autoComplete, currentStep, isComplete, previousStep, prune, resolve, rewindTo } from '../engine/engine';
import type { Resolution, Results } from '../engine/types';
import { Rail } from './Rail';
import { Start } from './Start';
import { StepView } from './StepView';
import { Summary } from './Summary';
import { clearSaved, loadSaved, loadTheme, writeSaved, writeTheme, type Screen, type Theme } from './storage';

export function App() {
  const saved = useMemo(loadSaved, []);
  const [chronicleId] = useState(saved?.chronicleId ?? 'original');
  const def = getChronicle(chronicleId);
  const [results, setResults] = useState<Results>(() => (saved ? prune(def, saved.results) : {}));
  const [name, setName] = useState(saved?.name ?? '');
  const [screen, setScreen] = useState<Screen>(saved?.screen === 'summary' ? 'summary' : 'start');
  const [theme, setTheme] = useState<Theme>(loadTheme);
  /** A previous answer to show again after Back or "redo from here". */
  const [restored, setRestored] = useState<{ key: string; res: Resolution } | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    writeTheme(theme);
  }, [theme]);

  useEffect(() => {
    writeSaved({ chronicleId, results, name, screen });
  }, [chronicleId, results, name, screen]);

  const step = currentStep(def, results);
  const done = isComplete(def, results);
  const hasProgress = Object.keys(results).length > 0 && !done;
  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const commit = (res: Resolution) => {
    if (!step) return;
    const next = resolve(def, results, step.key, res);
    setRestored(null);
    setResults(next);
    if (isComplete(def, next)) setScreen('summary');
  };

  const back = () => {
    const prev = previousStep(def, results);
    if (!prev) return;
    setRestored({ key: prev.key, res: results[prev.key] });
    setResults(rewindTo(def, results, prev.key));
    setScreen('steps');
  };

  const revisit = (key: string) => {
    const res = results[key];
    setRestored(res ? { key, res } : null);
    setResults(rewindTo(def, results, key));
    setScreen('steps');
  };

  const auto = (base: Results) => {
    setRestored(null);
    setResults(autoComplete(def, base));
    setScreen('summary');
  };

  const restart = () => {
    clearSaved();
    setResults({});
    setName('');
    setRestored(null);
    setScreen('start');
  };

  if (screen === 'start') {
    return (
      <Start
        def={def}
        theme={theme}
        hasProgress={hasProgress}
        onToggleTheme={toggleTheme}
        onGuided={() => {
          setResults({});
          setName('');
          setScreen('steps');
        }}
        onAuto={() => {
          setName('');
          auto({});
        }}
        onResume={() => setScreen('steps')}
      />
    );
  }

  const showSummary = screen === 'summary' && done;
  return (
    <div className="shell">
      <Rail
        def={def}
        results={results}
        currentKey={showSummary ? undefined : step?.key}
        theme={theme}
        onToggleTheme={toggleTheme}
        onRevisit={revisit}
        onRestart={restart}
      />
      <main className="main">
        <div className="main-inner">
          {showSummary || !step ? (
            <Summary def={def} results={results} name={name} onName={setName} />
          ) : (
            <StepView
              key={step.key}
              step={step}
              initial={restored?.key === step.key ? restored.res : undefined}
              canBack={!!previousStep(def, results)}
              onBack={back}
              onCommit={commit}
              onAuto={(pending) => auto(pending && step ? resolve(def, results, step.key, pending) : results)}
            />
          )}
        </div>
      </main>
    </div>
  );
}
