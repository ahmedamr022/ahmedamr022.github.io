import React, { useEffect, useState, useRef } from 'react';

/** Realistic ML training code with rich syntax highlights */
const CODE_LINES = [
  [{ c: 'c-cm', t: '# train_pipeline.py' }],
  [{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'torch' }],
  [{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'pandas ' }, { c: 'c-kw', t: 'as ' }, { c: 'c-var', t: 'pd' }],
  [{ c: 'c-kw', t: 'from ' }, { c: 'c-mod', t: 'sklearn ' }, { c: 'c-kw', t: 'import ' }, { c: 'c-fn', t: 'metrics' }],
  [],
  [{ c: 'c-var', t: 'df ' }, { c: 'c-kw', t: '= ' }, { c: 'c-fn', t: 'pd.read_csv' }, { c: 'c-var', t: '(' }, { c: 'c-str', t: '"dataset.csv"' }, { c: 'c-var', t: ')' }],
  [{ c: 'c-var', t: 'df ' }, { c: 'c-kw', t: '= ' }, { c: 'c-fn', t: 'preprocess' }, { c: 'c-var', t: '(df).' }, { c: 'c-fn', t: 'dropna' }, { c: 'c-var', t: '()' }],
  [{ c: 'c-var', t: 'X, y ' }, { c: 'c-kw', t: '= ' }, { c: 'c-fn', t: 'extract_features' }, { c: 'c-var', t: '(df)' }],
  [],
  [{ c: 'c-kw', t: 'def ' }, { c: 'c-fn', t: 'train_epoch' }, { c: 'c-var', t: '(model, loader):' }],
  [{ c: 'c-kw', t: '    for ' }, { c: 'c-var', t: 'xb, yb ' }, { c: 'c-kw', t: 'in ' }, { c: 'c-var', t: 'loader:' }],
  [{ c: 'c-var', t: '        out ' }, { c: 'c-kw', t: '= ' }, { c: 'c-var', t: 'model(xb)' }],
  [{ c: 'c-var', t: '        loss ' }, { c: 'c-kw', t: '= ' }, { c: 'c-fn', t: 'criterion' }, { c: 'c-var', t: '(out, yb)' }],
  [{ c: 'c-var', t: '        loss.' }, { c: 'c-fn', t: 'backward' }, { c: 'c-var', t: '()' }],
  [{ c: 'c-var', t: '        optimizer.' }, { c: 'c-fn', t: 'step' }, { c: 'c-var', t: '()' }],
  [{ c: 'c-kw', t: '    return ' }, { c: 'c-var', t: 'model' }],
  [],
  [{ c: 'c-cm', t: '# evaluate & deploy' }],
  [{ c: 'c-var', t: 'acc ' }, { c: 'c-kw', t: '= ' }, { c: 'c-fn', t: 'metrics.accuracy_score' }, { c: 'c-var', t: '(y, pred)' }],
  [{ c: 'c-kw', t: 'print' }, { c: 'c-var', t: '(' }, { c: 'c-str', t: '"Model Accuracy: 87%"' }, { c: 'c-var', t: ')' }],
  [{ c: 'c-fn', t: 'torch.save' }, { c: 'c-var', t: '(model, ' }, { c: 'c-str', t: '"model.pt"' }, { c: 'c-var', t: ')' }],
  [{ c: 'c-fn', t: 'deploy_to_cloud' }, { c: 'c-var', t: '(' }, { c: 'c-str', t: '"model.pt"' }, { c: 'c-var', t: ')' }],
];

const BASE_BARS = [45, 62, 38, 75, 55, 88, 42, 70, 60, 92, 48, 78, 40, 65, 52, 82, 46, 68];
const ACCURACIES = [87, 88, 87, 89];
const DONUT_RADIUS = 16;
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS;

export function Laptop(): JSX.Element {
  const [tick, setTick] = useState(0);
  const [accIndex, setAccIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const laptopRef = useRef<HTMLDivElement>(null);

  // Live real-time stats oscillation
  useEffect(() => {
    const barTimer = window.setInterval(() => setTick((t) => t + 1), 2200);
    const accTimer = window.setInterval(() => setAccIndex((i) => (i + 1) % ACCURACIES.length), 4000);
    return () => {
      window.clearInterval(barTimer);
      window.clearInterval(accTimer);
    };
  }, []);

  // 3D Parallax Mouse Tracking on entire hero
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setTilt({
        x: x * 6, // max 6 deg tilt
        y: -y * 5,
      });
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  const accuracy = ACCURACIES[accIndex];
  const bars = BASE_BARS.map((b, i) =>
    Math.max(16, Math.min(98, b + 12 * Math.sin(tick * 0.9 + i * 0.7)))
  );
  const f1 = (0.91 + 0.015 * Math.abs(Math.sin(tick * 0.6))).toFixed(2);
  const auc = (0.94 + 0.012 * Math.abs(Math.cos(tick * 0.5))).toFixed(2);
  const loss = (0.19 - 0.02 * Math.abs(Math.sin(tick * 0.4))).toFixed(2);

  // Live analytics trend points
  const points = [
    [0, 28],
    [15, 22],
    [30, 26],
    [45, 14],
    [60, 18],
    [75, 10],
    [90, 16],
    [100, 8],
  ];
  const splinePath = `M 0 28 Q 15 22, 30 26 T 60 18 T 90 16 T 100 8`;
  const areaPath = `${splinePath} L 100 40 L 0 40 Z`;

  return (
    <div
      ref={laptopRef}
      className="laptop"
      style={{
        transform: `perspective(2400px) rotateX(${24 + tilt.y}deg) rotateY(${-20 + tilt.x}deg)`,
        transition: 'transform 0.15s cubic-bezier(0.2, 0.8, 0.4, 1)',
      }}
      aria-hidden="true"
    >
      <div className="laptop-stage">
        {/* Laptop Lid / Screen */}
        <div className="laptop-lid">
          <div className="laptop-bezel-webcam" />
          <div className="laptop-screen">
            {/* Screen Top Header Bar */}
            <div className="scr-bar">
              <div className="flex items-center gap-1.5">
                <i style={{ background: '#f87171' }} />
                <i style={{ background: '#fbbf24' }} />
                <i style={{ background: '#34d399' }} />
              </div>
              <span className="t">ahmed@ml — train_pipeline.py</span>
              <div className="flex items-center gap-2 ml-auto text-[0.7em] text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Training
              </div>
            </div>

            {/* Screen Inner Split: Code Editor (Left) & AI Dashboard (Right) */}
            <div className="scr-body">
              {/* Left: Code Editor */}
              <div className="scr-code">
                <div className="scr-code-scroll">
                  {[...CODE_LINES, ...CODE_LINES].map((line, i) => (
                    <div className="ln" key={i}>
                      <span className="no">{String((i % CODE_LINES.length) + 1).padStart(2, '0')}</span>
                      <span>
                        {line.map((tok, j) => (
                          <span className={tok.c} key={j}>
                            {tok.t}
                          </span>
                        ))}
                        {i % CODE_LINES.length === CODE_LINES.length - 1 ? (
                          <span className="scr-caret" />
                        ) : null}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: AI Dashboard */}
              <div className="scr-dash">
                <div className="scr-row">
                  {/* Card 1: Analytics Spline Chart */}
                  <div className="scr-panel">
                    <div className="flex items-center justify-between mb-1">
                      <h4>Analytics</h4>
                      <span className="text-[0.68em] text-cyan-400 font-mono">Loss Curve</span>
                    </div>
                    <div className="chart">
                      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                        <defs>
                          <linearGradient id="analyticsGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line x1="0" y1="13" x2="100" y2="13" stroke="rgba(148,163,184,0.12)" strokeWidth="0.4" />
                        <line x1="0" y1="26" x2="100" y2="26" stroke="rgba(148,163,184,0.12)" strokeWidth="0.4" />

                        {/* Area Fill */}
                        <path d={areaPath} fill="url(#analyticsGrad)" />

                        {/* Trend Curve */}
                        <path
                          d={splinePath}
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />

                        {/* Glowing Data Points */}
                        {points.map(([x, y], idx) => (
                          <circle
                            key={idx}
                            cx={x}
                            cy={y}
                            r="1.4"
                            fill="#ffffff"
                            stroke="#38bdf8"
                            strokeWidth="0.8"
                          />
                        ))}
                      </svg>
                    </div>
                  </div>

                  {/* Card 2: Model Performance Radial Donut */}
                  <div className="scr-panel">
                    <h4>Model Performance</h4>
                    <div className="metric-wrap">
                      <div className="metric-ring-wrap">
                        <svg viewBox="0 0 48 48" className="w-full h-full">
                          {/* Background Ring */}
                          <circle
                            cx="24"
                            cy="24"
                            r={DONUT_RADIUS}
                            fill="none"
                            stroke="rgba(148,163,184,0.15)"
                            strokeWidth="5"
                          />
                          {/* Animated Progress Arc */}
                          <g className="metric-ring">
                            <circle
                              cx="24"
                              cy="24"
                              r={DONUT_RADIUS}
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="5"
                              strokeLinecap="round"
                              strokeDasharray={DONUT_CIRCUMFERENCE}
                              strokeDashoffset={DONUT_CIRCUMFERENCE * (1 - accuracy / 100)}
                              style={{
                                transition: 'stroke-dashoffset 1.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                filter: 'drop-shadow(0 0 4px #3b82f6)',
                              }}
                            />
                          </g>
                        </svg>
                        <span className="metric-value">{accuracy}%</span>
                      </div>
                      <div className="metric-legend">
                        <span>
                          <i style={{ background: '#3b82f6' }} />
                          Accuracy
                        </span>
                        <span>
                          <i style={{ background: '#a855f7' }} />
                          Precision
                        </span>
                        <span>
                          <i style={{ background: '#22d3ee' }} />
                          Recall
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Data Insights Equalizer Bars */}
                <div className="scr-panel">
                  <div className="flex items-center justify-between mb-1">
                    <h4>Data Insights</h4>
                    <span className="text-[0.68em] text-slate-400 font-mono">Epoch 18</span>
                  </div>
                  <div className="bars-wrap">
                    <div className="bars">
                      {bars.map((h, i) => (
                        <div
                          key={i}
                          className="dash-bar"
                          style={{
                            height: `${h}%`,
                            background:
                              i % 4 === 0
                                ? 'linear-gradient(to top, #3b82f6, #60a5fa)'
                                : i % 4 === 1
                                ? 'linear-gradient(to top, #8b5cf6, #c084fc)'
                                : 'rgba(96,165,250,0.4)',
                            boxShadow: i % 4 === 0 ? '0 0 6px rgba(96,165,250,0.5)' : 'none',
                          }}
                        />
                      ))}
                    </div>
                    <div className="bars-side">
                      <span>
                        f1 <b>{f1}</b>
                      </span>
                      <span>
                        auc <b>{auc}</b>
                      </span>
                      <span>
                        loss <b>{loss}</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Specular Screen Glare */}
          <div className="laptop-shine" />
        </div>

        {/* Laptop Keyboard Deck & Base */}
        <div className="laptop-base">
          <div className="deck-keys" />
          <div className="deck-pad" />
        </div>
      </div>
    </div>
  );
}