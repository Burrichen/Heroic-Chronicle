import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowLeft, Dices, Feather, RotateCcw, Sparkles, Star } from 'lucide-react';
import { diceRange, findRowIndex, formatRange, formatRoll, rollDice, rollDie, tableSides } from '../engine/dice';
import type {
  ChoiceStep,
  DiceStep,
  InfoStep,
  Resolution,
  Step,
  TableRow,
  TableStep,
  TextStep,
} from '../engine/types';
import { useSweep } from './useSweep';

interface StepViewProps {
  step: Step;
  /** A previous answer for this step (after going Back), shown as the pending result. */
  initial?: Resolution;
  canBack: boolean;
  onBack: () => void;
  onCommit: (res: Resolution) => void;
  onAuto: (pending: Resolution | null) => void;
}

export function StepView({ step, initial, canBack, onBack, onCommit, onAuto }: StepViewProps) {
  const headRef = useRef<HTMLHeadingElement>(null);
  const [pending, setPending] = useState<Resolution | null>(initial ?? null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    headRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div className="step">
      <div className="step-top">
        {canBack ? (
          <button type="button" className="btn btn-ghost" onClick={onBack}>
            <ArrowLeft aria-hidden="true" />
            Back
          </button>
        ) : (
          <span />
        )}
        <button type="button" className="btn btn-ghost" onClick={() => onAuto(pending)}>
          <Sparkles aria-hidden="true" />
          Roll the rest for me
        </button>
      </div>

      <header className="step-head">
        <h2 ref={headRef} tabIndex={-1} className="carved">
          {step.title}
        </h2>
        {step.intro && <p className="intro">{step.intro}</p>}
        {step.note && <p className="note">{step.note}</p>}
      </header>

      {step.type === 'table' && <TableBody step={step} pending={pending} setPending={setPending} onCommit={onCommit} />}
      {step.type === 'choice' && <ChoiceBody step={step} pending={pending} setPending={setPending} onCommit={onCommit} />}
      {step.type === 'dice' && <DiceBody step={step} pending={pending} setPending={setPending} onCommit={onCommit} />}
      {step.type === 'info' && <InfoBody step={step} onCommit={onCommit} />}
      {step.type === 'text' && <TextBody step={step} initial={initial} onCommit={onCommit} />}
    </div>
  );
}

// ── Shared pieces ───────────────────────────────────────────────────────────

interface BodyProps<S extends Step> {
  step: S;
  pending: Resolution | null;
  setPending: (r: Resolution | null) => void;
  onCommit: (r: Resolution) => void;
}

/** Enter continues, R rolls, unless the user is typing. */
function useStepKeys(onEnter?: () => void, onRoll?: () => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
      const t = e.target as HTMLElement;
      if (t.closest('input, textarea, select')) return;
      if (e.key === 'Enter' && onEnter && !t.closest('button')) {
        e.preventDefault();
        onEnter();
      } else if ((e.key === 'r' || e.key === 'R') && onRoll) {
        e.preventDefault();
        onRoll();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onEnter, onRoll]);
}

function Badge({ text }: { text: string }) {
  const star = text.startsWith('★');
  const label = star ? text.replace(/^★\s*/, '') : text;
  return (
    <span className={`badge${star ? ' is-star' : ''}${text === 'Nuisance' ? ' is-rival' : ''}`}>
      {star && <Star aria-hidden="true" fill="currentColor" />}
      {label}
    </span>
  );
}

interface SlabProps {
  roll: string;
  word?: boolean;
  sweeping?: boolean;
  title: ReactNode;
  detail?: string;
  sub?: string;
  onContinue?: () => void;
  onReroll?: () => void;
  rerollLabel?: string;
}

function Slab({ roll, word, sweeping, title, detail, sub, onContinue, onReroll, rerollLabel = 'Roll again' }: SlabProps) {
  return (
    <section className="slab" aria-live="polite">
      <div className={`slab-roll num carved${word ? ' is-word' : ''}${sweeping ? ' is-sweeping' : ''}`}>{roll}</div>
      <div className="slab-body">
        <h3 className="carved">{title}</h3>
        {detail && <p className="detail">{detail}</p>}
        {sub && <p className="sub">{sub}</p>}
      </div>
      {onContinue && (
        <div className="slab-actions">
          <button type="button" className="btn btn-primary btn-lg" onClick={onContinue} autoFocus>
            Continue
          </button>
          {onReroll && (
            <button type="button" className="btn" onClick={onReroll}>
              <RotateCcw aria-hidden="true" />
              {rerollLabel}
            </button>
          )}
          <span className="hint">
            <kbd>Enter</kbd> to continue{onReroll ? <> · <kbd>R</kbd> to roll again</> : null}
          </span>
        </div>
      )}
    </section>
  );
}

function Rows({
  rows,
  sides,
  lit,
  chosen,
  disabled,
  onPick,
}: {
  rows: TableRow[];
  sides?: number;
  lit: number | null;
  chosen: number | null;
  disabled?: boolean;
  onPick: (i: number) => void;
}) {
  const two = rows.length > 12;
  return (
    <ul className={`rows${two ? ' is-two' : ''}`}>
      {rows.map((r, i) => {
        const cls = ['row-btn'];
        if (lit === i) cls.push('is-lit');
        if (chosen === i) cls.push('is-chosen');
        else if (chosen !== null) cls.push('is-dim');
        return (
          <li key={i}>
            <button
              type="button"
              className={cls.join(' ')}
              disabled={disabled}
              aria-pressed={chosen === i}
              onClick={() => onPick(i)}
            >
              <span className="range">{sides ? formatRange(r, sides) : ''}</span>
              <span>
                <span className="label">{r.label}</span>
                {r.badge && <Badge text={r.badge} />}
                {r.detail && <span className="detail">{r.detail}</span>}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function TypedRoll({
  label,
  min,
  max,
  onRoll,
  disabled,
  hundred,
}: {
  label: string;
  min: number;
  max: number;
  onRoll: (n: number) => void;
  disabled?: boolean;
  hundred?: boolean;
}) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const submit = () => {
    const v = value.trim();
    let n = Number(v);
    if (hundred && (v === '00' || v === '0')) n = 100;
    if (!v || !Number.isInteger(n) || n < min || n > max) {
      setError(`Enter a whole number from ${min} to ${max}${hundred ? ' (00 counts as 100)' : ''}.`);
      return;
    }
    setError('');
    setValue('');
    onRoll(n);
  };
  return (
    <>
      <div className="typed">
        <label className="visually-hidden" htmlFor="typed-roll">
          {label}
        </label>
        <input
          id="typed-roll"
          className="field field-num"
          inputMode="numeric"
          placeholder={`${min}–${hundred ? '00' : max}`}
          value={value}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? 'typed-error' : undefined}
          onChange={(e) => setValue(e.target.value.replace(/[^0-9]/g, '').slice(0, 3))}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              submit();
            }
          }}
        />
        <button type="button" className="btn" disabled={disabled || !value} onClick={submit}>
          Use roll
        </button>
      </div>
      {error && (
        <p id="typed-error" className="roll-error" role="alert">
          {error}
        </p>
      )}
    </>
  );
}

// ── Table step ──────────────────────────────────────────────────────────────

function TableBody({ step, pending, setPending, onCommit }: BodyProps<TableStep>) {
  const { table } = step;
  const sides = tableSides(table);
  const { lit, sweeping, run } = useSweep();
  const current = pending?.kind === 'table' ? pending : null;

  const roll = useCallback(() => {
    if (sweeping) return;
    const n = rollDie(sides);
    const idx = findRowIndex(table, n);
    setPending(null);
    run(table.rows.length, idx, () => setPending({ kind: 'table', roll: n, rowIndex: idx, method: 'rolled' }));
  }, [sweeping, sides, table, run, setPending]);

  const commit = useCallback(() => {
    if (current && !sweeping) onCommit(current);
  }, [current, sweeping, onCommit]);

  useStepKeys(current ? commit : undefined, roll);

  const row = current ? table.rows[current.rowIndex] : undefined;
  return (
    <>
      <div className="action-zone">
        {current && row ? (
          <Slab
            roll={current.method === 'chosen' ? 'Chosen' : formatRoll(current.roll, sides)}
            word={current.method === 'chosen'}
            title={
              <>
                {row.label}
                {row.badge && <Badge text={row.badge} />}
              </>
            }
            detail={row.detail}
            onContinue={commit}
            onReroll={roll}
          />
        ) : (
          <div className="roll-bar">
            <button type="button" className="btn btn-primary btn-lg" onClick={roll} disabled={sweeping}>
              <Dices aria-hidden="true" />
              {sweeping ? 'Rolling…' : `Roll ${table.die}`}
            </button>
            <span className="or">or type your own roll</span>
            <TypedRoll
              label={`Your ${table.die} roll`}
              min={1}
              max={sides}
              hundred={sides === 100}
              disabled={sweeping}
              onRoll={(n) => setPending({ kind: 'table', roll: n, rowIndex: findRowIndex(table, n), method: 'rolled' })}
            />
            <span className="hint">
              or pick a row · <kbd>R</kbd> to roll
            </span>
          </div>
        )}
      </div>
      <div className="table-wrap">
        <div className="table-cap">
          <strong>{table.title}</strong>
          <span className="num">{table.die}</span>
        </div>
        <Rows
          rows={table.rows}
          sides={sides}
          lit={lit}
          chosen={sweeping ? null : current?.rowIndex ?? null}
          disabled={sweeping}
          onPick={(i) => {
            if (current?.rowIndex === i && current.method === 'chosen') return onCommit(current);
            setPending({ kind: 'table', roll: table.rows[i].min, rowIndex: i, method: 'chosen' });
          }}
        />
      </div>
    </>
  );
}

// ── Choice step ─────────────────────────────────────────────────────────────

function ChoiceBody({ step, pending, setPending, onCommit }: BodyProps<ChoiceStep>) {
  const { lit, sweeping, run } = useSweep();
  const [custom, setCustom] = useState('');
  const current = pending?.kind === 'choice' ? pending : null;
  const rows: TableRow[] = step.options.map((o) => ({ min: 0, max: 0, label: o.label, detail: o.description }));
  const chosenIdx = current ? step.options.findIndex((o) => o.value === current.value) : -1;

  const roll = useCallback(() => {
    if (sweeping) return;
    const idx = Math.floor(Math.random() * step.options.length);
    setPending(null);
    run(step.options.length, idx, () =>
      setPending({ kind: 'choice', value: step.options[idx].value, method: 'rolled' }),
    );
  }, [sweeping, step.options, run, setPending]);

  const commit = useCallback(() => {
    if (current && !sweeping) onCommit(current);
  }, [current, sweeping, onCommit]);

  useStepKeys(current ? commit : undefined, roll);

  const option = chosenIdx >= 0 ? step.options[chosenIdx] : undefined;
  return (
    <>
      <div className="action-zone">
        {current ? (
          <Slab
            roll={current.method === 'rolled' ? 'Fate' : 'Chosen'}
            word
            title={option?.label ?? current.value}
            detail={option?.description}
            onContinue={commit}
            onReroll={roll}
            rerollLabel="Let fate choose again"
          />
        ) : (
          <div className="roll-bar">
            <span className="or">Choose below, or</span>
            <button type="button" className="btn" onClick={roll} disabled={sweeping}>
              <Dices aria-hidden="true" />
              {sweeping ? 'Choosing…' : 'Let fate choose'}
            </button>
            <span className="hint">
              <kbd>R</kbd> to let fate choose
            </span>
          </div>
        )}
      </div>
      <div className="table-wrap">
        <Rows
          rows={rows}
          lit={lit}
          chosen={sweeping || chosenIdx < 0 ? null : chosenIdx}
          disabled={sweeping}
          onPick={(i) => {
            const value = step.options[i].value;
            if (current?.value === value && current.method === 'chosen') return onCommit(current);
            setPending({ kind: 'choice', value, method: 'chosen' });
          }}
        />
      </div>
      {step.allowCustom && (
        <form
          className="custom-entry"
          onSubmit={(e) => {
            e.preventDefault();
            if (!custom.trim()) return;
            setPending({ kind: 'choice', value: custom.trim(), custom: true, method: 'chosen' });
            setCustom('');
          }}
        >
          <label className="visually-hidden" htmlFor="custom-choice">
            Write your own
          </label>
          <input
            id="custom-choice"
            className="field"
            placeholder="Or write your own…"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
          />
          <button type="submit" className="btn" disabled={!custom.trim()}>
            <Feather aria-hidden="true" />
            Use this
          </button>
        </form>
      )}
    </>
  );
}

// ── Dice step ───────────────────────────────────────────────────────────────

function DiceBody({ step, pending, setPending, onCommit }: BodyProps<DiceStep>) {
  const [lo, hi] = diceRange(step.dice);
  const { lit, sweeping, run } = useSweep();
  const current = pending?.kind === 'dice' ? pending : null;

  const roll = useCallback(() => {
    if (sweeping) return;
    const { total, rolls } = rollDice(step.dice);
    setPending(null);
    run(hi - lo + 1, total - lo, () => setPending({ kind: 'dice', total, rolls, method: 'rolled' }));
  }, [sweeping, step.dice, lo, hi, run, setPending]);

  const commit = useCallback(() => {
    if (current && !sweeping) onCommit(current);
  }, [current, sweeping, onCommit]);

  useStepKeys(current ? commit : undefined, roll);

  const label = step.dice.replace('+', ' + ');
  return (
    <div className="action-zone">
      {sweeping ? (
        <Slab roll={String(lo + (lit ?? 0))} sweeping title="Rolling…" />
      ) : current ? (
        <Slab
          roll={String(current.total)}
          title={step.describe ? step.describe(current.total) : String(current.total)}
          sub={current.rolls.length > 1 ? `Rolled ${current.rolls.join(' + ')}${label.includes('+ ') ? ` + ${label.split('+ ')[1]}` : ''}` : undefined}
          onContinue={commit}
          onReroll={roll}
        />
      ) : (
        <div className="roll-bar">
          <button type="button" className="btn btn-primary btn-lg" onClick={roll}>
            <Dices aria-hidden="true" />
            Roll {label}
          </button>
          <span className="or">or type your own total</span>
          <TypedRoll
            label={`Your ${label} total`}
            min={lo}
            max={hi}
            onRoll={(n) => setPending({ kind: 'dice', total: n, rolls: [], method: 'rolled' })}
          />
          <span className="hint">
            <kbd>R</kbd> to roll
          </span>
        </div>
      )}
    </div>
  );
}

// ── Info step ───────────────────────────────────────────────────────────────

function InfoBody({ step, onCommit }: { step: InfoStep; onCommit: (r: Resolution) => void }) {
  const commit = useCallback(() => onCommit({ kind: 'info', method: 'chosen' }), [onCommit]);
  useStepKeys(commit);
  return (
    <>
      <div className="info-lines">
        {step.lines.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
      <div className="step-foot">
        <button type="button" className="btn btn-primary btn-lg" onClick={commit} autoFocus>
          Continue
        </button>
        <span className="hint">
          <kbd>Enter</kbd> to continue
        </span>
      </div>
    </>
  );
}

// ── Text step (prophecy) ────────────────────────────────────────────────────

function TextBody({
  step,
  initial,
  onCommit,
}: {
  step: TextStep;
  initial?: Resolution;
  onCommit: (r: Resolution) => void;
}) {
  const [values, setValues] = useState<Record<string, string>>(initial?.kind === 'text' ? initial.values : {});
  const [rolled, setRolled] = useState<Record<string, number>>({});
  const set = (k: string, v: string) => setValues((s) => ({ ...s, [k]: v }));

  const inspire = (groupId: string) => {
    if (!step.inspiration) return;
    const { table, fill } = step.inspiration;
    const n = rollDie(tableSides(table));
    const row = table.rows[findRowIndex(table, n)];
    const filled = fill(row);
    setValues((s) => {
      const next = { ...s };
      for (const [f, v] of Object.entries(filled)) next[`${groupId}.${f}`] = v;
      return next;
    });
    setRolled((r) => ({ ...r, [groupId]: n }));
  };

  return (
    <>
      <div className="goals">
        {step.groups.map((g) => (
          <section key={g.id} className="goal" aria-labelledby={`goal-${g.id}`}>
            <div className="goal-head">
              <h3 id={`goal-${g.id}`} className="carved">
                {g.title}
                {g.hint && <span className="hint">{g.hint}</span>}
              </h3>
              {step.inspiration && (
                <button type="button" className="btn" onClick={() => inspire(g.id)}>
                  <Dices aria-hidden="true" />
                  {rolled[g.id] ? `Rolled ${rolled[g.id]} · roll again` : `Roll an idea (${step.inspiration.table.die})`}
                </button>
              )}
            </div>
            <div className="goal-fields">
              {g.fields.map((f) => (
                <label key={f.id}>
                  {f.label}
                  <textarea
                    className="field"
                    rows={2}
                    placeholder={f.placeholder}
                    value={values[`${g.id}.${f.id}`] ?? ''}
                    onChange={(e) => set(`${g.id}.${f.id}`, e.target.value)}
                  />
                </label>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="step-foot">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => onCommit({ kind: 'text', values, method: 'chosen' })}
        >
          Complete the chronicle
        </button>
      </div>
    </>
  );
}
