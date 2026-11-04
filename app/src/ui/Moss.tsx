import type { CSSProperties } from 'react';

interface MossProps {
  id: string;
  /** Where the growth roots; it thins to nothing towards the inner edges. */
  from: 'bottom' | 'top-right';
  width: number;
  height: number;
  seed?: number;
  style?: CSSProperties;
  className?: string;
}

const STOPS = (
  <>
    <stop offset="0" stopColor="#fff" stopOpacity="1" />
    <stop offset="0.3" stopColor="#fff" stopOpacity="0.8" />
    <stop offset="0.65" stopColor="#fff" stopOpacity="0.25" />
    <stop offset="1" stopColor="#fff" stopOpacity="0" />
  </>
);

/**
 * Moss and lichen growth, generated with SVG turbulence.
 * A fine noise is mixed with a slow one so growth gathers into cushions and
 * clumps rather than an even dapple, then thresholded into three layers (deep
 * moss, moss, bright tips) with a fine displacement for fuzzy edges. The mask
 * reaches zero on every inner edge, so the growth has no visible boundary.
 * Colours come from the theme tokens via CSS.
 */
export function Moss({ id, from, width, height, seed = 3, style, className = '' }: MossProps) {
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
        {from === 'bottom' ? (
          <linearGradient id={`${id}-fade`} x1="0" y1="1" x2="0" y2="0">
            {STOPS}
          </linearGradient>
        ) : (
          <radialGradient id={`${id}-fade`} cx="1" cy="0" r="1">
            {STOPS}
          </radialGradient>
        )}
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
          <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="2" seed={seed + 5} result="clump" />
          <feComposite in="body" in2="clump" operator="arithmetic" k1="0" k2="0.5" k3="0.7" k4="-0.1" result="mix" />
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" seed={seed + 11} result="fuzz" />
          <feDisplacementMap in="mix" in2="fuzz" scale="5" xChannelSelector="R" yChannelSelector="G" result="n" />
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
