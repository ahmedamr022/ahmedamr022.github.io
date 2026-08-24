import React from 'react';
import { ANALYZE_BARS } from '../sceneGeometry';

/**
 * Floating glass Analytics panel with rising bars and trend line.
 * Matches Image 2:
 * - Rounded frosted card with glowing cyan/blue border
 * - Animated ascending equalizer bars
 * - Spline trend line with glowing point pulses
 * - Bold neon "ANALYZE" typography above
 */
export function AnalyzeNode(): JSX.Element {
  return (
    <g className="cursor-pointer transition-transform duration-300 hover:scale-105" id="node-analyze">
      {/* Label ANALYZE */}
      <text
        className="node-label"
        x="848"
        y="262"
        textAnchor="middle"
        fill="#7dd3fc"
        fontSize="30"
        fontWeight="600"
        letterSpacing="3.5"
        style={{ filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))' }}
      >
        ANALYZE
      </text>

      <g className="analyze-node">
        {/* Ambient Card Shadow / Glow */}
        <rect
          x="774"
          y="292"
          width="148"
          height="132"
          rx="18"
          fill="rgba(56, 189, 248, 0.15)"
          filter="url(#cyanGlow)"
        />

        {/* Card Body */}
        <rect
          className="an-card"
          x="774"
          y="292"
          width="148"
          height="132"
          rx="18"
          fill="url(#cardGrad)"
          stroke="#38bdf8"
          strokeWidth="2.5"
        />

        {/* Rising Equalizer Bars */}
        {ANALYZE_BARS.map((bar) => (
          <rect
            key={bar.x}
            className="an-bar"
            x={bar.x}
            y={400 - bar.h}
            width="22"
            height={bar.h}
            rx="4"
            fill="url(#barGrad)"
            style={{ '--dur': bar.dur, '--d': bar.delay } as React.CSSProperties}
          />
        ))}

        {/* Spline Trend Line */}
        <polyline
          className="an-line"
          points="792,378 826,352 856,362 884,322 906,308"
          fill="none"
          stroke="#67e8f9"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="drop-shadow(0 0 4px #22d3ee)"
        />

        {/* Pulsing Highlight Data Points */}
        {[
          { cx: 826, cy: 352, d: '0s' },
          { cx: 884, cy: 322, d: '0.8s' },
          { cx: 906, cy: 308, d: '1.4s' },
        ].map((dot) => (
          <g key={dot.cx}>
            <circle
              className="an-dot-pulse"
              cx={dot.cx}
              cy={dot.cy}
              r="8"
              fill="rgba(103, 232, 249, 0.4)"
              style={{ '--d': dot.d } as React.CSSProperties}
            />
            <circle cx={dot.cx} cy={dot.cy} r="4" fill="#ffffff" filter="drop-shadow(0 0 3px #ffffff)" />
          </g>
        ))}
      </g>
    </g>
  );
}