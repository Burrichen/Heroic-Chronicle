import { useCallback, useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * The roll animation: a light hops between candidates, slowing down, and
 * settles on the result. `count` is how many candidates there are (table rows,
 * options, or possible totals); `target` is the index it lands on.
 */
export function useSweep() {
  const [lit, setLit] = useState<number | null>(null);
  const [sweeping, setSweeping] = useState(false);
  const timers = useRef<number[]>([]);

  const clear = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };
  useEffect(() => clear, []);

  const run = useCallback((count: number, target: number, done: () => void) => {
    clear();
    if (prefersReducedMotion() || count <= 1) {
      setLit(null);
      setSweeping(false);
      done();
      return;
    }
    setSweeping(true);
    const hops = 14;
    let t = 0;
    let delay = 32;
    let prev = -1;
    for (let i = 0; i < hops; i++) {
      const last = i === hops - 1;
      let idx = last ? target : Math.floor(Math.random() * count);
      if (!last && idx === prev) idx = (idx + 1) % count;
      prev = idx;
      t += delay;
      delay *= 1.19;
      timers.current.push(
        window.setTimeout(() => {
          setLit(idx);
          if (last) {
            timers.current.push(
              window.setTimeout(() => {
                setSweeping(false);
                setLit(null);
                done();
              }, 280),
            );
          }
        }, t),
      );
    }
  }, []);

  return { lit, sweeping, run };
}
