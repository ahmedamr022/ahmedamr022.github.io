import React from 'react';

/**
 * 3D Glowing SQL Database Cylinder with ambient light base.
 * Matches Image 2 precisely:
 * - 3 layered glowing cyan discs with metallic rim highlights
 * - Floor illumination pad
 * - Bold neon "DATA" typography
 */
export function DataNode(): JSX.Element {
  return (
    <g className="cursor-pointer transition-transform duration-300 hover:scale-105" id="node-data">
      <g className="data-node">
        {/* Floor ambient light pad */}
        <ellipse className="db-halo" cx="692" cy="662" rx="96" ry="28" fill="url(#padGlow)" filter="url(#cyanGlow)" />
        <ellipse className="db-pad" cx="692" cy="662" rx="92" ry="26" stroke="#00d4ff" strokeWidth="2" fill="none" opacity="0.8" />
        <ellipse className="db-pad" cx="692" cy="662" rx="64" ry="18" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.5" />

        {/* Database Main Cylinder Body */}
        <path
          className="db-body"
          d="M 630 512 L 630 622 A 62 22 0 0 0 754 622 L 754 512"
          fill="rgba(8, 20, 52, 0.95)"
          stroke="#00d4ff"
          strokeWidth="3.2"
        />

        {/* Cylinder Intermediate Glowing Neon Rings */}
        <ellipse className="db-ring" cx="692" cy="550" rx="62" ry="22" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <ellipse className="db-ring" cx="692" cy="588" rx="62" ry="22" fill="none" stroke="#38bdf8" strokeWidth="2.5" />

        {/* Top Disc with Inner Bevel Glow */}
        <ellipse className="db-top" cx="692" cy="512" rx="62" ry="22" fill="#0d2c5e" stroke="#00d4ff" strokeWidth="3.5" />
        <ellipse cx="692" cy="512" rx="44" ry="14" fill="#38bdf8" fillOpacity="0.35" />
        <ellipse cx="692" cy="512" rx="20" ry="6" fill="#ffffff" fillOpacity="0.6" />
      </g>

      {/* Label DATA */}
      <text
        className="node-label"
        x="692"
        y="712"
        textAnchor="middle"
        fill="#7dd3fc"
        fontSize="32"
        fontWeight="600"
        letterSpacing="4"
        style={{ filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))' }}
      >
        DATA
      </text>
    </g>
  );
}