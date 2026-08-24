/**
 * All scene coordinates live in a 1536 × 1024 viewBox, mapped 1:1 from the
 * reference composition: DATA lower-left, ANALYZE above it, MODEL top-centre,
 * the laptop centre-right and DEPLOY on the far right.
 */

/** The three glowing data channels, in flow order. */
export const PATHS = [
// DATA → ANALYZE (rises out of the database, steps right, enters the card's base)
'M 700 496 C 692 456 712 432 748 432 C 782 432 796 430 800 424',
// ANALYZE → MODEL (leaves the card's right edge, climbs, curves into the mesh)
'M 922 352 C 954 352 966 344 966 312 C 966 280 972 256 1010 249 C 1024 246 1036 246 1046 246',
// MODEL → DEPLOY (sweeps right, drops past the laptop, enters the cloud)
'M 1244 246 C 1298 246 1336 256 1354 298 C 1370 336 1360 442 1364 496 C 1367 515 1372 525 1380 532'];


export type ModelNode = {x: number;y: number;layer: number;hub?: boolean;};

/** Mesh nodes of the neural network, grouped in 4 activation layers (left → right). */
export const MODEL_NODES: ModelNode[] = [
{ x: 1062, y: 197, layer: 0 },
{ x: 1062, y: 296, layer: 0 },
{ x: 1102, y: 150, layer: 1 },
{ x: 1145, y: 110, layer: 1 },
{ x: 1099, y: 246, layer: 1 },
{ x: 1102, y: 343, layer: 1 },
{ x: 1145, y: 383, layer: 1 },
{ x: 1149, y: 199, layer: 2 },
{ x: 1151, y: 293, layer: 2 },
{ x: 1192, y: 150, layer: 2 },
{ x: 1192, y: 343, layer: 2 },
{ x: 1198, y: 246, layer: 3, hub: true },
{ x: 1232, y: 197, layer: 3 },
{ x: 1232, y: 296, layer: 3 }];


export type ModelEdge = {key: string;x1: number;y1: number;x2: number;y2: number;layer: number;};

/** Every pair of nodes closer than the threshold becomes a connection — a real mesh. */
export function buildModelEdges(threshold = 108): ModelEdge[] {
  const edges: ModelEdge[] = [];
  for (let i = 0; i < MODEL_NODES.length; i += 1) {
    for (let j = i + 1; j < MODEL_NODES.length; j += 1) {
      const a = MODEL_NODES[i];
      const b = MODEL_NODES[j];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist <= threshold) {
        edges.push({
          key: `${i}-${j}`,
          x1: a.x,
          y1: a.y,
          x2: b.x,
          y2: b.y,
          layer: Math.min(a.layer, b.layer)
        });
      }
    }
  }
  return edges;
}

/** ANALYZE panel bars. */
export const ANALYZE_BARS = [
{ x: 802, h: 34, dur: '3.4s', delay: '0s' },
{ x: 836, h: 58, dur: '2.9s', delay: '0.4s' },
{ x: 870, h: 82, dur: '3.7s', delay: '0.15s' }];


/** Vertical data risers under the deployment cloud. */
export const DEPLOY_RISERS = [1378, 1399, 1420, 1441, 1462];