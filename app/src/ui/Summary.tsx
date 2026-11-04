import { useState } from 'react';
import { Download, Star } from 'lucide-react';
import { toMarkdown } from '../engine/describe';
import type { ChronicleDef, Results, SummaryItem, SummarySection } from '../engine/types';
import { fileNameFor, saveTextFile } from './saveFile';

interface SummaryProps {
  def: ChronicleDef;
  results: Results;
  name: string;
  onName: (name: string) => void;
}

const WIDE = new Set(['Prophecy', 'Prophecy rewards']);
/** Who the hero is on the left; what they carry and who they know on the right. */
const LEFT = new Set(['Origins', 'Family', 'Quirks & mysteries']);

function renderSection(s: SummarySection) {
  return (
    <section
      key={s.title}
      className={`sum-section${WIDE.has(s.title) ? ' is-wide' : ''}${s.title === 'Mechanical benefits' ? ' is-boons' : ''}`}
    >
      <h3 className="carved">{s.title}</h3>
      {s.items.length ? (
        <dl className="sum-items">
          {s.items.map((item, i) => (
            <div key={i} className={`sum-item${item.tone ? ` tone-${item.tone}` : ''}`}>
              <dt>{item.label}</dt>
              <Value item={item} />
            </div>
          ))}
        </dl>
      ) : (
        <p className="sum-empty">{s.empty}</p>
      )}
    </section>
  );
}

function Value({ item }: { item: SummaryItem }) {
  const star = item.value.endsWith(' ★');
  const text = star ? item.value.slice(0, -2) : item.value;
  return (
    <dd>
      {text}
      {star && (
        <span className="badge is-star">
          <Star aria-hidden="true" fill="currentColor" />
          Powerful
        </span>
      )}
      {item.detail && <span className="d">{item.detail}</span>}
    </dd>
  );
}

export function Summary({ def, results, name, onName }: SummaryProps) {
  const sections = def.summarize(results);
  const [status, setStatus] = useState('');

  const save = async () => {
    try {
      const outcome = await saveTextFile(fileNameFor(name), toMarkdown(def, name, sections));
      setStatus(outcome === 'saved' ? 'Chronicle saved.' : '');
    } catch {
      setStatus('Couldn’t save the file. Check you have permission to write to that folder, then try again.');
    }
  };

  return (
    <div className="summary">
      <header className="summary-head">
        <label htmlFor="hero-name">Name your hero</label>
        <input
          id="hero-name"
          className="name-field carved"
          placeholder="An unnamed hero"
          value={name}
          autoComplete="off"
          spellCheck={false}
          onChange={(e) => onName(e.target.value)}
        />
        <p className="summary-sub">Their chronicle is written. Read it through, then save a copy for the table.</p>
      </header>

      <div className="summary-actions">
        <button type="button" className="btn btn-primary btn-lg" onClick={save}>
          <Download aria-hidden="true" />
          Save as .md
        </button>
        {status && (
          <span className="status" role="status">
            {status}
          </span>
        )}
      </div>

      <div className="summary-grid">
        <div className="sum-col">{sections.filter((s) => LEFT.has(s.title)).map(renderSection)}</div>
        <div className="sum-col">
          {sections.filter((s) => !LEFT.has(s.title) && !WIDE.has(s.title)).map(renderSection)}
        </div>
        {sections.filter((s) => WIDE.has(s.title)).map(renderSection)}
      </div>
    </div>
  );
}
