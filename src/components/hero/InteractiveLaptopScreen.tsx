import React, { useEffect, useState } from 'react';
import { PlayIcon, RefreshCwIcon, CheckCircle2Icon } from 'lucide-react';

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

const BASE_BARS = [45, 65, 38, 80, 55, 90, 42, 72, 60, 95, 48, 82, 40, 68, 52, 85, 46, 70];
const DONUT_RADIUS = 15;
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS;

export function InteractiveLaptopScreen(): JSX.Element {
  const [tick, setTick] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [accuracy, setAccuracy] = useState(87);

  // Live simulation tick
  useEffect(() => {
    if (!isRunning) return;
    const interval = window.setInterval(() => {
      setTick((t) => t + 1);
      setAccuracy(86 + Math.floor(Math.sin(Date.now() / 2000) * 3 + 2));
    }, 1800);
    return () => window.clearInterval(interval);
  }, [isRunning]);

  const bars = BASE_BARS.map((b, i) =>
    Math.max(18, Math.min(96, b + 14 * Math.sin(tick * 0.85 + i * 0.75)))
  );
  const f1 = (0.91 + 0.015 * Math.abs(Math.sin(tick * 0.6))).toFixed(2);
  const auc = (0.94 + 0.012 * Math.abs(Math.cos(tick * 0.5))).toFixed(2);
  const loss = (0.19 - 0.02 * Math.abs(Math.sin(tick * 0.4))).toFixed(2);

  // Dynamic spline points
  const p1 = 26 + Math.sin(tick * 0.5) * 4;
  const p2 = 14 + Math.cos(tick * 0.7) * 4;
  const p3 = 18 + Math.sin(tick * 0.9) * 3;
  const p4 = 8 + Math.cos(tick * 0.6) * 3;

  const splinePath = `M 0 28 Q 20 ${p1}, 40 ${p2} T 70 ${p3} T 100 ${p4}`;
  const areaPath = `${splinePath} L 100 40 L 0 40 Z`;

  return (
    <div className="laptop-screen-inner w-full h-full flex flex-col bg-[#050814] text-white font-mono select-none overflow-hidden rounded-[4px] shadow-2xl border border-sky-500/20">
      {/* Chrome Header */}
      <div className="flex items-center justify-between px-2.5 py-1 bg-[#090d20] border-b border-white/10 text-[9px] flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span className="text-slate-400 font-sans ml-1 text-[8.5px]">ahmed@ml: ~/pipeline</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning((r) => !r)}
            className="flex items-center gap-1 text-[8px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 transition-colors"
            title="Toggle Simulation"
          >
            {isRunning ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Running</span>
              </>
            ) : (
              <>
                <PlayIcon size={8} />
                <span>Paused</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Screen Split: Left Code / Right Dashboard */}
      <div className="grid grid-cols-12 flex-1 min-h-0 overflow-hidden">
        {/* Left: Code Editor (5 cols) */}
        <div className="col-span-5 border-r border-white/10 bg-[#04060f]/90 p-2 overflow-hidden relative">
          <div className="scr-code-scroll text-[8px] leading-[1.45] text-slate-300 font-mono">
            {[...CODE_LINES, ...CODE_LINES].map((line, i) => (
              <div className="flex gap-1.5 whitespace-nowrap" key={i}>
                <span className="text-slate-600 select-none w-3 text-right">
                  {(i % CODE_LINES.length) + 1}
                </span>
                <span>
                  {line.map((tok, j) => (
                    <span className={tok.c} key={j}>
                      {tok.t}
                    </span>
                  ))}
                  {i % CODE_LINES.length === CODE_LINES.length - 1 ? (
                    <span className="inline-block w-1 h-2.5 bg-sky-400 ml-0.5 animate-pulse align-middle" />
                  ) : null}
                </span>
              </div>
            ))}
          </div>
          {/* Subtle bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#04060f] to-transparent pointer-events-none" />
        </div>

        {/* Right: Live AI Dashboard (7 cols) */}
        <div className="col-span-7 p-2 flex flex-col gap-1.5 overflow-hidden bg-[#070b1c]/80">
          {/* Top Row: Analytics + Model Performance */}
          <div className="grid grid-cols-2 gap-1.5 flex-1 min-h-0">
            {/* Analytics Spline Chart */}
            <div className="rounded border border-sky-500/20 bg-sky-950/20 p-1.5 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-[8px]">
                <span className="text-slate-300 font-semibold font-sans">Analytics</span>
                <span className="text-sky-400 text-[7.5px]">Loss Curve</span>
              </div>
              <div className="h-10 w-full mt-1">
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="liveAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="13" x2="100" y2="13" stroke="rgba(148,163,184,0.12)" strokeWidth="0.5" />
                  <line x1="0" y1="26" x2="100" y2="26" stroke="rgba(148,163,184,0.12)" strokeWidth="0.5" />
                  <path d={areaPath} fill="url(#liveAreaGrad)" />
                  <path d={splinePath} fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="40" cy={p2} r="1.8" fill="#ffffff" stroke="#38bdf8" strokeWidth="0.8" />
                  <circle cx="70" cy={p3} r="1.8" fill="#ffffff" stroke="#38bdf8" strokeWidth="0.8" />
                  <circle cx="100" cy={p4} r="2.2" fill="#38bdf8" className="animate-ping" />
                </svg>
              </div>
            </div>

            {/* Model Performance Gauge */}
            <div className="rounded border border-purple-500/20 bg-purple-950/20 p-1.5 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-[8px]">
                <span className="text-slate-300 font-semibold font-sans">Model Perf</span>
                <span className="text-purple-400 text-[7.5px] font-bold">{accuracy}%</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                {/* Donut Gauge */}
                <div className="relative w-9 h-9 flex-shrink-0">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle
                      cx="18"
                      cy="18"
                      r={DONUT_RADIUS}
                      fill="none"
                      stroke="rgba(148,163,184,0.15)"
                      strokeWidth="3.5"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r={DONUT_RADIUS}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray={DONUT_CIRCUMFERENCE}
                      strokeDashoffset={DONUT_CIRCUMFERENCE * (1 - accuracy / 100)}
                      style={{
                        transition: 'stroke-dashoffset 0.8s cubic-bezier(0.2, 0.8, 0.4, 1)',
                        filter: 'drop-shadow(0 0 3px #3b82f6)',
                      }}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[8.5px] font-bold text-white">
                    {accuracy}%
                  </span>
                </div>
                {/* Metric Legend */}
                <div className="flex flex-col gap-0.5 text-[7px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <i className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" /> Acc {accuracy}%
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" /> Prec 89%
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" /> Rec 85%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Data Insights Bars & Quick Telemetry */}
          <div className="rounded border border-cyan-500/20 bg-cyan-950/15 p-1.5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[8px] mb-1">
              <span className="text-slate-300 font-semibold font-sans">Data Insights</span>
              <div className="flex items-center gap-2 text-[7.5px] text-slate-400">
                <span>f1: <b className="text-sky-300">{f1}</b></span>
                <span>auc: <b className="text-purple-300">{auc}</b></span>
                <span>loss: <b className="text-emerald-300">{loss}</b></span>
              </div>
            </div>
            {/* Bars Equalizer */}
            <div className="flex items-end gap-[2px] h-7 w-full pt-1">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-[1px] transition-all duration-700"
                  style={{
                    height: `${h}%`,
                    background:
                      i % 3 === 0
                        ? 'linear-gradient(to top, #2563eb, #38bdf8)'
                        : i % 3 === 1
                        ? 'linear-gradient(to top, #7c3aed, #c084fc)'
                        : 'rgba(56,189,248,0.4)',
                    boxShadow: i % 3 === 0 ? '0 0 4px rgba(56,189,248,0.6)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
