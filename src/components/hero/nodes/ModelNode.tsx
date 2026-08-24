import React, { useMemo } from 'react';
import { MODEL_NODES, buildModelEdges } from '../sceneGeometry';

/**
 * 3D Sacred Geometry Neural Network Mesh.
 * Matches Image 2:
 * - Multi-layer interconnected glowing nodes (spheres)
 * - Violet / Purple halo pulses and cyan/blue centers
 * - Firing neural synapses across layers
 * - Bold neon "MODEL" typography above
 */
export function ModelNode(): JSX.Element {
  const edges = useMemo(() => buildModelEdges(), []);

  return (
    <g className="cursor-pointer transition-transform duration-300 hover:scale-105" id="node-model">
      {/* Label MODEL */}
      <text
        className="node-label"
        x="1147"
        y="58"
        textAnchor="middle"
        fill="#7dd3fc"
        fontSize="30"
        fontWeight="600"
        letterSpacing="3.5"
        style={{ filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))' }}
      >
        MODEL
      </text>

      <g className="model-node">
        {/* Background Ambient Violet Glow */}
        <ellipse cx="1147" cy="246" rx="160" ry="140" fill="url(#violetGlow)" filter="url(#purpleGlow)" opacity="0.6" />

        {/* Neural Synapse Interconnect Edges */}
        {edges.map((edge) => (
          <line
            key={edge.key}
            className="nn-edge"
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke="#818cf8"
            strokeWidth="2"
            strokeOpacity="0.5"
            style={{ '--d': `${0.04 + edge.layer * 0.1}s` } as React.CSSProperties}
          />
        ))}

        {/* Neural Network Nodes */}
        {MODEL_NODES.map((node) => (
          <g key={`${node.x}-${node.y}`}>
            {/* Outer Breathing Aura */}
            <circle
              className="nn-glow"
              cx={node.x}
              cy={node.y}
              r={node.hub ? 20 : 16}
              fill={node.hub ? 'rgba(217, 70, 239, 0.25)' : 'rgba(56, 189, 248, 0.22)'}
              style={{ '--d': `${node.layer * 0.4}s` } as React.CSSProperties}
            />

            {/* Firing Activation Halo */}
            <circle
              className="nn-halo"
              cx={node.x}
              cy={node.y}
              r="12"
              fill={node.hub ? '#f472b6' : '#a5f3fc'}
              style={{ '--d': `${node.layer * 0.12}s` } as React.CSSProperties}
            />

            {/* Core Sphere */}
            <circle
              className={node.hub ? 'nn-core is-hub' : 'nn-core'}
              cx={node.x}
              cy={node.y}
              r={node.hub ? 12 : 10}
              fill={node.hub ? 'url(#hubGrad)' : 'url(#nodeGrad)'}
              stroke={node.hub ? '#f472b6' : '#93c5fd'}
              strokeWidth="1.8"
              filter={node.hub ? 'url(#pinkGlow)' : 'drop-shadow(0 0 4px #38bdf8)'}
            />
          </g>
        ))}
      </g>
    </g>
  );
}