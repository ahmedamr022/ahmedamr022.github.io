import React from 'react';

/**
 * Enhanced SVG gradients, filters, and glow defs for the 3D pipeline nodes.
 */
export function SceneDefs(): JSX.Element {
  return (
    <defs>
      {/* Glow Filters */}
      <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="purpleGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="pinkGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Radial Gradients */}
      <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="35%" stopColor="#67e8f9" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
      </radialGradient>

      <radialGradient id="padGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.4" />
        <stop offset="60%" stopColor="#0284c7" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
      </radialGradient>

      <radialGradient id="violetGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#7c3aed" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#6b21a8" stopOpacity="0" />
      </radialGradient>

      {/* Linear Gradients */}
      <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="60%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#a5f3fc" />
      </linearGradient>

      <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
      </linearGradient>

      <radialGradient id="nodeGrad" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="30%" stopColor="#60a5fa" />
        <stop offset="70%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </radialGradient>

      <radialGradient id="hubGrad" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="30%" stopColor="#f472b6" />
        <stop offset="70%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#6b21a8" />
      </radialGradient>

      {/* Floor reflection gradient */}
      <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.25" />
      </linearGradient>
    </defs>
  );
}