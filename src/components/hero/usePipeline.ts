import { useEffect } from 'react';
import type { RefObject } from 'react';

/**
 * Timeline of one full pipeline cycle (ms).
 *  0 –  900  DATA emits
 *  900– 2900 particle travels DATA → ANALYZE
 * 2900– 4100 ANALYZE processes (bars + chart light up)
 * 4100– 6100 particle travels ANALYZE → MODEL
 * 6100– 7500 MODEL activates (nodes fire layer by layer)
 * 7500– 9500 particle travels MODEL → DEPLOY
 * 9500–10600 DEPLOY confirms
 */
const CYCLE = 10600;

const TRAVEL: Array<[number, number]> = [
[900, 2900],
[4100, 6100],
[7500, 9500]];


const STAGES: Array<[number, number, string]> = [
[0, 900, 'data'],
[2900, 4100, 'analyze'],
[6100, 7500, 'model'],
[9500, CYCLE, 'deploy']];


/** Offset of the trailing second particle, as a fraction of the path. */
const SECOND_DOT_LAG = 0.17;

type Refs = {
  rootRef: RefObject<HTMLDivElement>;
  pathRefs: Array<RefObject<SVGPathElement>>;
  trailRefs: Array<RefObject<SVGPathElement>>;
  dotRefs: Array<RefObject<SVGGElement>>;
  dot2Refs: Array<RefObject<SVGGElement>>;
};

function stageAt(t: number): string {
  for (const [from, to, name] of STAGES) {
    if (t >= from && t < to) return name;
  }
  return '';
}

export function usePipeline({ rootRef, pathRefs, trailRefs, dotRefs, dot2Refs }: Refs): void {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const paths = pathRefs.map((r) => r.current);
    const lengths = paths.map((p) => p ? p.getTotalLength() : 0);

    trailRefs.forEach((r, i) => {
      const trail = r.current;
      if (!trail) return;
      trail.style.strokeDasharray = String(lengths[i]);
      trail.style.strokeDashoffset = String(lengths[i]);
    });

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      // Static, fully-drawn connections. No travelling particles, no stage flashes.
      trailRefs.forEach((r, i) => {
        const trail = r.current;
        if (!trail) return;
        trail.style.strokeDashoffset = '0';
        trail.classList.add('is-live');
        void lengths[i];
      });
      return;
    }

    let raf = 0;
    let startedAt = performance.now();
    let pausedAt = 0;
    let stage = '';

    const place = (group: SVGGElement | null, path: SVGPathElement | null, length: number, progress: number) => {
      if (!group || !path) return;
      if (progress < 0 || progress > 1) {
        group.classList.remove('is-live');
        return;
      }
      const pt = path.getPointAtLength(progress * length);
      group.setAttribute('transform', `translate(${pt.x.toFixed(2)} ${pt.y.toFixed(2)})`);
      if (!group.classList.contains('is-live')) group.classList.add('is-live');
    };

    const frame = (now: number) => {
      const t = (now - startedAt) % CYCLE;

      const nextStage = stageAt(t);
      if (nextStage !== stage) {
        if (stage) root.classList.remove(`stage-${stage}`);
        if (nextStage) root.classList.add(`stage-${nextStage}`);
        stage = nextStage;
      }

      for (let i = 0; i < TRAVEL.length; i += 1) {
        const [from, to] = TRAVEL[i];
        const path = paths[i];
        const trail = trailRefs[i].current;
        const length = lengths[i];

        if (t >= from && t <= to) {
          const p = (t - from) / (to - from);
          place(dotRefs[i].current, path, length, p);
          place(dot2Refs[i].current, path, length, p - SECOND_DOT_LAG);
          if (trail) {
            trail.style.strokeDashoffset = String(length * (1 - p));
            if (!trail.classList.contains('is-live')) trail.classList.add('is-live');
          }
        } else {
          dotRefs[i].current?.classList.remove('is-live');
          dot2Refs[i].current?.classList.remove('is-live');
          if (trail) {
            trail.classList.remove('is-live');
            // Reset only before this segment runs again, while the trail is invisible.
            if (t < from) trail.style.strokeDashoffset = String(length);
          }
        }
      }

      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (raf) return;
      startedAt = performance.now() - pausedAt;
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      if (!raf) return;
      cancelAnimationFrame(raf);
      raf = 0;
      pausedAt = (performance.now() - startedAt) % CYCLE;
    };

    // Only animate while the hero is actually on screen.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) start();else
        stop();
      },
      { threshold: 0.05 }
    );
    io.observe(root);
    start();

    const onVisibility = () => document.hidden ? stop() : start();
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      stop();
      if (stage) root.classList.remove(`stage-${stage}`);
    };
    // Ref objects are stable for the lifetime of the scene.
  }, [rootRef]);
}