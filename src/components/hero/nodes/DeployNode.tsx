import React from 'react';
import { DEPLOY_RISERS } from '../sceneGeometry';

/**
 * 3D Cloud Deployment Node with Launch Pedestal.
 * Matches Image 2:
 * - Glowing neon cyan cloud shape
 * - Vibrant neon pink/magenta upload arrow
 * - Elevated 3D isometric platform base with upward laser rays
 * - Bold neon "DEPLOY" typography below
 */
export function DeployNode(): JSX.Element {
  return (
    <g className="cursor-pointer transition-transform duration-300 hover:scale-105" id="node-deploy">
      <g className="deploy-node">
        {/* Cloud Ambient Glow */}
        <path
          d="M 1386 604 C 1358 604 1344 578 1360 558 C 1350 534 1370 510 1392 516 C 1404 490 1446 484 1462 508 C 1490 502 1512 524 1504 550 C 1524 558 1522 594 1496 604 Z"
          fill="rgba(56, 189, 248, 0.25)"
          filter="url(#cyanGlow)"
        />

        {/* Cloud Main Body */}
        <path
          className="cloud-shape"
          d="M 1386 604 C 1358 604 1344 578 1360 558 C 1350 534 1370 510 1392 516 C 1404 490 1446 484 1462 508 C 1490 502 1512 524 1504 550 C 1524 558 1522 594 1496 604 Z"
          fill="rgba(10, 25, 60, 0.9)"
          stroke="#00d4ff"
          strokeWidth="3.5"
        />

        {/* Upload Arrow (Neon Pink / Magenta) */}
        <path
          className="cloud-arrow"
          d="M 1432 594 V 528 M 1412 548 L 1432 522 L 1452 548"
          fill="none"
          stroke="#ec4899"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#pinkGlow)"
        />

        {/* Upward Laser Light Pillars */}
        {DEPLOY_RISERS.map((x, i) => (
          <line
            key={x}
            className="deploy-riser"
            x1={x}
            y1="612"
            x2={x}
            y2="656"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="6 8"
            style={{ '--d': `${i * 0.08}s` } as React.CSSProperties}
          />
        ))}

        {/* 3D Platform Slab Base */}
        <path className="deploy-slab-side" d="M 1374 676 L 1374 696 L 1432 716 L 1432 696 Z" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="1.8" />
        <path className="deploy-slab-side" d="M 1490 676 L 1490 696 L 1432 716 L 1432 696 Z" fill="#172554" stroke="#38bdf8" strokeWidth="1.8" />
        <path className="deploy-slab-top" d="M 1374 676 L 1432 656 L 1490 676 L 1432 696 Z" fill="rgba(56, 189, 248, 0.4)" stroke="#00d4ff" strokeWidth="2.4" />
      </g>

      {/* Label DEPLOY */}
      <text
        className="node-label"
        x="1432"
        y="760"
        textAnchor="middle"
        fill="#7dd3fc"
        fontSize="30"
        fontWeight="600"
        letterSpacing="3.5"
        style={{ filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))' }}
      >
        DEPLOY
      </text>

      <text
        className="deploy-status"
        x="1432"
        y="788"
        textAnchor="middle"
        fill="#34d399"
        fontFamily="monospace"
        fontSize="15"
        fontWeight="500"
        letterSpacing="2"
      >
        ● SERVED 100%
      </text>
    </g>
  );
}