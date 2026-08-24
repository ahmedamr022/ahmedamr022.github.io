import React, { useState, useEffect } from 'react';
import {
  ActivityIcon,
  CpuIcon,
  DatabaseIcon,
  LayersIcon,
  LineChartIcon,
  PlayIcon,
  RocketIcon,
  ServerIcon,
  SparklesIcon,
} from 'lucide-react';

const CODE_SNIPPETS = [
  [{ c: 'c-cm', t: '# ahmed_pipeline.py' }],
  [{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'torch' }, { c: 'c-kw', t: ', ' }, { c: 'c-mod', t: 'torchvision' }],
  [{ c: 'c-kw', t: 'from ' }, { c: 'c-mod', t: 'sklearn.metrics ' }, { c: 'c-kw', t: 'import ' }, { c: 'c-fn', t: 'accuracy_score' }],
  [],
  [{ c: 'c-var', t: 'model ' }, { c: 'c-kw', t: '= ' }, { c: 'c-fn', t: 'ResNet50' }, { c: 'c-var', t: '(pretrained=' }, { c: 'c-kw', t: 'True' }, { c: 'c-var', t: ')' }],
  [{ c: 'c-var', t: 'loader ' }, { c: 'c-kw', t: '= ' }, { c: 'c-fn', t: 'DataLoader' }, { c: 'c-var', t: '(dataset, batch_size=' }, { c: 'c-num', t: '64' }, { c: 'c-var', t: ')' }],
  [],
  [{ c: 'c-kw', t: 'for ' }, { c: 'c-var', t: 'epoch ' }, { c: 'c-kw', t: 'in ' }, { c: 'c-fn', t: 'range' }, { c: 'c-var', t: '(' }, { c: 'c-num', t: '20' }, { c: 'c-var', t: '):' }],
  [{ c: 'c-kw', t: '    for ' }, { c: 'c-var', t: 'inputs, targets ' }, { c: 'c-kw', t: 'in ' }, { c: 'c-var', t: 'loader:' }],
  [{ c: 'c-var', t: '        preds ' }, { c: 'c-kw', t: '= ' }, { c: 'c-fn', t: 'model' }, { c: 'c-var', t: '(inputs)' }],
  [{ c: 'c-var', t: '        loss ' }, { c: 'c-kw', t: '= ' }, { c: 'c-fn', t: 'criterion' }, { c: 'c-var', t: '(preds, targets)' }],
  [{ c: 'c-var', t: '        loss.' }, { c: 'c-fn', t: 'backward' }, { c: 'c-var', t: '()' }],
  [{ c: 'c-var', t: '        optimizer.' }, { c: 'c-fn', t: 'step' }, { c: 'c-var', t: '()' }],
  [],
  [{ c: 'c-cm', t: '# Eval & Deploy to Cloud' }],
  [{ c: 'c-fn', t: 'print' }, { c: 'c-var', t: '(' }, { c: 'c-str', t: '"Accuracy: 93.2% | Deployed"' }, { c: 'c-var', t: ')' }],
  [{ c: 'c-fn', t: 'export_onnx' }, { c: 'c-var', t: '(model, ' }, { c: 'c-str', t: '"model.onnx"' }, { c: 'c-var', t: ')' }],
];

const BARS_INIT = [40, 65, 35, 80, 50, 92, 45, 75, 60, 98, 55, 85, 42, 70, 58, 88, 48, 72];

export function HeroSystemVisualizer(): JSX.Element {
  const [activeTab, setActiveTab] = useState<'train' | 'metrics' | 'network'>('train');
  const [tick, setTick] = useState(0);
  const [accuracy, setAccuracy] = useState(87);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTick((t) => t + 1);
      setAccuracy(87 + Math.floor(Math.sin(Date.now() / 1800) * 3 + 2));
    }, 1600);
    return () => window.clearInterval(timer);
  }, []);

  const bars = BARS_INIT.map((b, i) =>
    Math.max(20, Math.min(100, b + 14 * Math.sin(tick * 0.9 + i * 0.8)))
  );
  const lossVal = (0.18 - 0.02 * Math.abs(Math.sin(tick * 0.4))).toFixed(3);
  const f1Val = (0.92 + 0.015 * Math.abs(Math.sin(tick * 0.6))).toFixed(2);
  const throughput = 120 + Math.floor(Math.sin(tick) * 25 + 20);

  // Spline points
  const y1 = 28 + Math.sin(tick * 0.6) * 4;
  const y2 = 14 + Math.cos(tick * 0.8) * 4;
  const y3 = 20 + Math.sin(tick * 1.1) * 3;
  const y4 = 8 + Math.cos(tick * 0.7) * 3;
  const spline = `M 0 32 Q 25 ${y1}, 50 ${y2} T 75 ${y3} T 100 ${y4}`;
  const area = `${spline} L 100 45 L 0 45 Z`;

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-4 relative z-10 select-none">
      {/* 1. Orbiting Flow Architecture Badges (Top Row) */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { icon: DatabaseIcon, label: 'DATA', color: '#38bdf8', bg: 'rgba(56,189,248,0.1)' },
          { icon: LineChartIcon, label: 'ANALYZE', color: '#a855f7', bg: 'rgba(168,85,247,0.1)' },
          { icon: CpuIcon, label: 'MODEL', color: '#ec4899', bg: 'rgba(236,72,153,0.1)' },
          { icon: RocketIcon, label: 'DEPLOY', color: '#22d3ee', bg: 'rgba(34,211,238,0.1)' },
        ].map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.label}
              className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: node.bg,
                borderColor: `${node.color}40`,
                boxShadow: `0 0 16px ${node.bg}`,
              }}
            >
              <Icon size={15} style={{ color: node.color }} />
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-200">
                {node.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* 2. Main High-Tech Terminal Glass Box */}
      <div className="glass-panel rounded-2xl border border-sky-500/25 bg-[#06091d]/90 backdrop-blur-2xl shadow-2xl shadow-indigo-950/60 overflow-hidden flex flex-col">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#090e28]/95 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-slate-400 font-mono text-[11px] ml-2">ahmed@ai-core: ~/ml-pipeline</span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1 bg-white/[0.05] p-0.5 rounded-lg border border-white/10 text-[10px]">
            <button
              onClick={() => setActiveTab('train')}
              className={`px-2 py-0.5 rounded font-medium transition-all ${
                activeTab === 'train' ? 'bg-sky-500 text-white font-semibold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Train
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-2 py-0.5 rounded font-medium transition-all ${
                activeTab === 'metrics' ? 'bg-purple-600 text-white font-semibold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Metrics
            </button>
            <button
              onClick={() => setActiveTab('network')}
              className={`px-2 py-0.5 rounded font-medium transition-all ${
                activeTab === 'network' ? 'bg-pink-600 text-white font-semibold shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Neural Mesh
            </button>
          </div>
        </div>

        {/* Terminal Body Grid: Split View */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px] divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Left Side: Code & Neural Architecture (5 cols) */}
          <div className="md:col-span-5 p-3.5 bg-[#030614]/80 flex flex-col justify-between overflow-hidden relative font-mono text-[10.5px]">
            {activeTab === 'network' ? (
              /* Neural Network Graph View */
              <div className="w-full h-full flex flex-col items-center justify-center p-2">
                <span className="text-[10px] text-pink-400 font-mono font-bold mb-2">Deep Neural Synapses</span>
                <svg viewBox="0 0 120 80" className="w-full h-32">
                  {/* Edges */}
                  <line x1="20" y1="20" x2="60" y2="15" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
                  <line x1="20" y1="20" x2="60" y2="40" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
                  <line x1="20" y1="40" x2="60" y2="15" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
                  <line x1="20" y1="40" x2="60" y2="40" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
                  <line x1="20" y1="60" x2="60" y2="40" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
                  <line x1="20" y1="60" x2="60" y2="65" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
                  <line x1="60" y1="15" x2="100" y2="30" stroke="rgba(236,72,153,0.5)" strokeWidth="1" />
                  <line x1="60" y1="40" x2="100" y2="30" stroke="rgba(236,72,153,0.5)" strokeWidth="1" />
                  <line x1="60" y1="40" x2="100" y2="55" stroke="rgba(236,72,153,0.5)" strokeWidth="1" />
                  <line x1="60" y1="65" x2="100" y2="55" stroke="rgba(236,72,153,0.5)" strokeWidth="1" />
                  {/* Nodes */}
                  {[
                    { cx: 20, cy: 20, col: '#38bdf8' },
                    { cx: 20, cy: 40, col: '#38bdf8' },
                    { cx: 20, cy: 60, col: '#38bdf8' },
                    { cx: 60, cy: 15, col: '#a855f7' },
                    { cx: 60, cy: 40, col: '#a855f7' },
                    { cx: 60, cy: 65, col: '#a855f7' },
                    { cx: 100, cy: 30, col: '#ec4899' },
                    { cx: 100, cy: 55, col: '#ec4899' },
                  ].map((n, i) => (
                    <circle key={i} cx={n.cx} cy={n.cy} r="4.5" fill={n.col} className="animate-pulse" />
                  ))}
                </svg>
                <span className="text-[9px] text-slate-400 mt-2">Activation: ReLU &bull; Optimizer: AdamW</span>
              </div>
            ) : (
              /* Live Scrolling Code Editor */
              <div className="scr-code-scroll leading-[1.55]">
                {[...CODE_SNIPPETS, ...CODE_SNIPPETS].map((line, i) => (
                  <div key={i} className="flex gap-2 whitespace-nowrap">
                    <span className="text-slate-600 select-none w-3 text-right">
                      {(i % CODE_SNIPPETS.length) + 1}
                    </span>
                    <span>
                      {line.map((tok, j) => (
                        <span key={j} className={tok.c}>
                          {tok.t}
                        </span>
                      ))}
                      {i % CODE_SNIPPETS.length === CODE_SNIPPETS.length - 1 ? (
                        <span className="inline-block w-1.5 h-3 bg-cyan-400 ml-1 animate-pulse align-middle" />
                      ) : null}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#030614] to-transparent pointer-events-none" />
          </div>

          {/* Right Side: Live AI Dashboard & Telemetry (7 cols) */}
          <div className="md:col-span-7 p-3.5 flex flex-col justify-between gap-3 bg-[#060a22]/80">
            {/* Row 1: Loss Spline Chart + Accuracy Donut */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Spline Chart */}
              <div className="p-2.5 rounded-xl border border-sky-500/20 bg-sky-950/20 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-slate-300 font-semibold font-sans">Loss Curve</span>
                  <span className="text-sky-400 font-mono font-bold">{lossVal}</span>
                </div>
                <div className="h-12 w-full mt-1.5">
                  <svg viewBox="0 0 100 45" preserveAspectRatio="none" className="w-full h-full">
                    <defs>
                      <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="15" x2="100" y2="15" stroke="rgba(148,163,184,0.12)" strokeWidth="0.5" />
                    <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(148,163,184,0.12)" strokeWidth="0.5" />
                    <path d={area} fill="url(#curveGrad)" />
                    <path d={spline} fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="50" cy={y2} r="2.2" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />
                    <circle cx="75" cy={y3} r="2.2" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />
                    <circle cx="100" cy={y4} r="2.6" fill="#38bdf8" className="animate-ping" />
                  </svg>
                </div>
              </div>

              {/* Accuracy Donut Gauge */}
              <div className="p-2.5 rounded-xl border border-purple-500/20 bg-purple-950/20 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-slate-300 font-semibold font-sans">Model Acc</span>
                  <span className="text-purple-400 font-mono font-bold">{accuracy}%</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="relative w-11 h-11 flex-shrink-0">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="4" />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 14}
                        strokeDashoffset={2 * Math.PI * 14 * (1 - accuracy / 100)}
                        style={{
                          transition: 'stroke-dashoffset 0.8s ease-out',
                          filter: 'drop-shadow(0 0 4px #8b5cf6)',
                        }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white font-mono">
                      {accuracy}%
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 text-[8px] text-slate-300 font-mono">
                    <span className="flex items-center gap-1">
                      <i className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" /> Acc {accuracy}%
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" /> Prec 91%
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" /> Rec 88%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Equalizer Bars + Live Telemetry */}
            <div className="p-2.5 rounded-xl border border-cyan-500/20 bg-cyan-950/15 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className="text-slate-300 font-semibold font-sans flex items-center gap-1">
                  <ActivityIcon size={12} className="text-emerald-400" />
                  <span>Pipeline Telemetry</span>
                </span>
                <div className="flex items-center gap-2 text-[9px] font-mono text-slate-400">
                  <span>F1: <b className="text-sky-300">{f1Val}</b></span>
                  <span>Rate: <b className="text-emerald-300">{throughput}/s</b></span>
                </div>
              </div>
              <div className="flex items-end gap-[3px] h-8 w-full pt-1">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-[1.5px] transition-all duration-500"
                    style={{
                      height: `${h}%`,
                      background:
                        i % 3 === 0
                          ? 'linear-gradient(to top, #2563eb, #38bdf8)'
                          : i % 3 === 1
                          ? 'linear-gradient(to top, #7c3aed, #c084fc)'
                          : 'rgba(56,189,248,0.4)',
                      boxShadow: i % 3 === 0 ? '0 0 6px rgba(56,189,248,0.6)' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Footer Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#040718] border-t border-white/[0.08] text-[10px] text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-300 font-medium">Pipeline: Active &bull; Hugging Face Spaces</span>
          </div>
          <span className="text-slate-500">Epoch 18/20 &bull; PyTorch 2.2</span>
        </div>
      </div>
    </div>
  );
}
