import type { CSSProperties } from 'react';

interface MossProps {
  id: string;
  /** Where the growth is densest; it thins out towards the opposite edge. */
  from: 'bottom' | 'top-right' | 'bottom-left';
  width: number;
  height: number;
  seed?: number;
  style?: CSSProperties;
  className?: string;
}

const FADE: Record<MossProps['from'], { x1: string; y1: string; x2: string; y2: string }> = {
  bottom: { x1: '0', y1: '1', x2: '0', y2: '0' },
  'top-right': { x1: '1', y1: '0', x2: '0.15', y2: '1' },
  'bottom-left': { x1: '0', y1: '1', x2: '0.9', y2: '0' },
};

/**
 * Moss and lichen growth, generated with SVG turbulence: three thresholded
 * noise layers (deep moss, moss, bright tips) with a fine displacement so the
 * edges stay fuzzy. Colours come from the theme tokens via CSS.
 */
export function Moss({ id, from, width, height, seed = 3, style, className = '' }: MossProps) {
  const f = FADE[from];
  return (
    <svg
      className={`moss ${className}`}
      aria-hidden="true"
      focusable="false"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={style}
    >
      <defs>
        <linearGradient id={`${id}-fade`} x1={f.x1} y1={f.y1} x2={f.x2} y2={f.y2}>
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0.75" />
          <stop offset="0.7" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id={`${id}-mask`} maskUnits="userSpaceOnUse" x="0" y="0" width={width} height={height}>
          <rect width={width} height={height} fill={`url(#${id}-fade)`} />
        </mask>
        <filter
          id={`${id}-f`}
          filterUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={width}
          height={height}
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="4" seed={seed} result="body" />
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" seed={seed + 11} result="fuzz" />
          <feDisplacementMap in="body" in2="fuzz" scale="5" xChannelSelector="R" yChannelSelector="G" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  11 0 0 0 -5.35" result="a1" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 13 0 0 -6.75" result="a2" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 16 0 -8.75" result="a3" />
          <feFlood className="m-a" result="ca" />
          <feComposite in="ca" in2="a1" operator="in" result="la" />
          <feFlood className="m-b" result="cb" />
          <feComposite in="cb" in2="a2" operator="in" result="lb" />
          <feFlood className="m-c" result="cc" />
          <feComposite in="cc" in2="a3" operator="in" result="lc" />
          <feMerge>
            <feMergeNode in="la" />
            <feMergeNode in="lb" />
            <feMergeNode in="lc" />
          </feMerge>
        </filter>
      </defs>
      <rect width={width} height={height} filter={`url(#${id}-f)`} mask={`url(#${id}-mask)`} />
    </svg>
  );
}
