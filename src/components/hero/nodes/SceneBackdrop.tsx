import React from 'react';

const HEXES = [
{ x: 1330, y: 120, r: 96, o: 0.16 },
{ x: 1470, y: 260, r: 70, o: 0.1 },
{ x: 1250, y: 60, r: 54, o: 0.08 }];


function hexPath(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i += 1) {
    const a = Math.PI / 3 * i - Math.PI / 6;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return `M ${pts.join(' L ')} Z`;
}

/** Ambient depth: light pools on the floor, a violet halo behind the mesh, faint circuitry. */
export function SceneBackdrop(): JSX.Element {
  return (
    <g aria-hidden="true">
      <ellipse cx="1120" cy="880" rx="380" ry="58" fill="url(#padGlow)" />
      <ellipse cx="692" cy="668" rx="150" ry="42" fill="url(#padGlow)" />
      <ellipse cx="1432" cy="700" rx="108" ry="32" fill="url(#padGlow)" />
      <ellipse cx="1147" cy="246" rx="190" ry="150" fill="url(#violetGlow)" />

      {HEXES.map((hex) =>
      <path
        key={`${hex.x}-${hex.y}`}
        d={hexPath(hex.x, hex.y, hex.r)}
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.6"
        opacity={hex.o} />

      )}

      <path d="M 40 300 H 180 V 250 H 300" fill="none" stroke="rgba(96,165,250,0.18)" strokeWidth="1.6" />
      <path d="M 40 360 H 240 V 420 H 380" fill="none" stroke="rgba(167,139,250,0.16)" strokeWidth="1.6" />
      <circle cx="300" cy="250" r="4" fill="rgba(96,165,250,0.4)" />
      <circle cx="380" cy="420" r="4" fill="rgba(167,139,250,0.35)" />
    </g>);

}