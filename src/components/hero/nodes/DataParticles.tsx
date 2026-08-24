import React from 'react';
import type { RefObject } from 'react';
import { PATHS } from '../sceneGeometry';

type DataParticlesProps = {
  dotRefs: Array<RefObject<SVGGElement>>;
  dot2Refs: Array<RefObject<SVGGElement>>;
};

/**
 * Travelling data particles — bright core, soft outer glow, and a smaller
 * trailing companion. Their position is driven along the real SVG paths by
 * usePipeline, so they follow the curves exactly.
 */
export function DataParticles({ dotRefs, dot2Refs }: DataParticlesProps): JSX.Element {
  return (
    <g>
      {PATHS.map((_, i) =>
      <g key={`particle-${i}`}>
          <g className="flow-dot" ref={dot2Refs[i]} opacity="0.5">
            <circle r="15" fill="url(#dotGlow)" />
            <circle r="3.2" fill="#e0ffff" />
          </g>
          <g className="flow-dot" ref={dotRefs[i]}>
            <circle r="26" fill="url(#dotGlow)" />
            <circle r="9" fill="rgba(224,255,255,0.35)" />
            <circle r="4.6" fill="#f2feff" />
          </g>
        </g>
      )}
    </g>);

}