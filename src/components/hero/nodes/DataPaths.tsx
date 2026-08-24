import React from 'react';
import type { RefObject } from 'react';
import { PATHS } from '../sceneGeometry';

type DataPathsProps = {
  pathRefs: Array<RefObject<SVGPathElement>>;
  trailRefs: Array<RefObject<SVGPathElement>>;
};

/**
 * The always-visible glowing data channels between the four stages: a wide soft
 * glow, the dashed channel itself, and the bright trail that lights up behind
 * each travelling particle.
 */
export function DataPaths({ pathRefs, trailRefs }: DataPathsProps): JSX.Element {
  return (
    <g>
      {PATHS.map((d, i) =>
      <g key={`channel-${i}`}>
          <path className="flow-glow" d={d} />
          <path className="flow-track" d={d} />
          <path className="flow-trail" d={d} ref={trailRefs[i]} />
          {/* measurement-only copy: gives the animation controller exact path geometry */}
          <path d={d} ref={pathRefs[i]} fill="none" stroke="none" />
        </g>
      )}
    </g>);

}