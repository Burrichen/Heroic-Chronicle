import type { ReactNode } from 'react';

/** Heater-shield outline used for the roll result and the crest. */
const SHIELD_PATH = 'M6 5h68v34c0 22-15 36-34 43C21 75 6 61 6 39z';

/**
 * The roll result, blazoned on a gold-rimmed shield. `children` is the figure
 * in the centre: a number, or a short word such as "Chosen".
 */
export function Shield({
  children,
  word,
  dim,
  decorative,
}: {
  children: ReactNode;
  word?: boolean;
  dim?: boolean;
  /** An empty placeholder shield, hidden from assistive technology. */
  decorative?: boolean;
}) {
  return (
    <div className={`shield${word ? ' is-word' : ''}${dim ? ' is-dim' : ''}`} aria-hidden={decorative || undefined}>
      <svg viewBox="0 0 80 88" aria-hidden="true" focusable="false">
        <path className="shield-field" d={SHIELD_PATH} />
        <path className="shield-rim" d={SHIELD_PATH} pathLength={1} />
        <path className="shield-inner" d="M12 11h56v28c0 18-12 30-28 36C24 69 12 57 12 39z" />
      </svg>
      <span className="shield-figure num">{children}</span>
    </div>
  );
}

/** The app's crest: a shield bearing a die, with a chevron. */
export function Crest({ className = '' }: { className?: string }) {
  return (
    <svg className={`crest ${className}`} viewBox="0 0 80 88" aria-hidden="true" focusable="false">
      <path className="crest-field" d={SHIELD_PATH} />
      <path className="crest-chevron" d="M14 52 40 34l26 18v9L40 43 14 61z" />
      <path className="crest-rim" d={SHIELD_PATH} />
      <g className="crest-charge">
        <path d="M40 14 50 20v12l-10 6-10-6V20z" />
        <path d="M40 14v24M30 20l20 12M50 20 30 32" opacity="0.55" />
      </g>
    </svg>
  );
}

/** Four small corner ornaments for a framed panel. The parent must be position: relative. */
export function Corners() {
  const corner = (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M1.5 15V6.5a5 5 0 0 1 5-5H15" />
      <path className="pip" d="M6 4.2 7.8 6 6 7.8 4.2 6z" />
    </svg>
  );
  return (
    <>
      <span className="corner tl">{corner}</span>
      <span className="corner tr">{corner}</span>
      <span className="corner bl">{corner}</span>
      <span className="corner br">{corner}</span>
    </>
  );
}

/** A centred ornamental rule: two hairlines and a lozenge. */
export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`divider ${className}`} aria-hidden="true">
      <span />
      <svg viewBox="0 0 12 12" focusable="false">
        <path d="M6 1 11 6 6 11 1 6z" />
      </svg>
      <span />
    </div>
  );
}
