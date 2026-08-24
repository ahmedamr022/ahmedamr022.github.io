import React from 'react';
import { useTheme } from '../../context/ThemeContext';

/* ═══════════ FLATICON VECTOR ICONS FOR WORKFLOW ═══════════ */

function DatabaseFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-9 h-9 sm:w-10 sm:h-10 flex-none" viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="11" rx="16" ry="6" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 8 11 V 24 C 8 27.5 15.2 30 24 30 C 32.8 30 40 27.5 40 24 V 11" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 8 24 V 37 C 8 40.5 15.2 43 24 43 C 32.8 43 40 40.5 40 37 V 24" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SearchFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-9 h-9 sm:w-10 sm:h-10 flex-none" viewBox="0 0 48 48" fill="none">
      <circle cx="21" cy="21" r="13" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 31 31 L 41 41" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* ── Custom High-End Neural Network Model Flaticon Icon ── */
function ModelNeuralFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-9 h-9 sm:w-10 sm:h-10 flex-none" viewBox="0 0 48 48" fill="none">
      {/* Synapse Connection Lines */}
      {/* Input to Hidden */}
      <line x1="10" y1="14" x2="24" y2="10" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="10" y1="14" x2="24" y2="19" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="10" y1="14" x2="24" y2="29" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="10" y1="24" x2="24" y2="19" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="10" y1="24" x2="24" y2="29" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="10" y1="34" x2="24" y2="29" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="10" y1="34" x2="24" y2="38" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />

      {/* Hidden to Output */}
      <line x1="24" y1="10" x2="38" y2="16" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="24" y1="19" x2="38" y2="16" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="24" y1="29" x2="38" y2="32" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="24" y1="38" x2="38" y2="32" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="24" y1="19" x2="38" y2="32" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.4" />

      {/* ── Input Layer Nodes (3 Nodes) ── */}
      <circle cx="10" cy="14" r="3.5" fill="#38bdf8" stroke="#fff" strokeWidth="1.2" />
      <circle cx="10" cy="24" r="3.5" fill="#38bdf8" stroke="#fff" strokeWidth="1.2" />
      <circle cx="10" cy="34" r="3.5" fill="#38bdf8" stroke="#fff" strokeWidth="1.2" />

      {/* ── Hidden Dense Layer Nodes (4 Nodes) ── */}
      <circle cx="24" cy="10" r="3.5" fill={color} stroke="#fff" strokeWidth="1.2" />
      <circle cx="24" cy="19" r="4" fill={color} stroke="#fff" strokeWidth="1.2" />
      <circle cx="24" cy="29" r="4" fill={color} stroke="#fff" strokeWidth="1.2" />
      <circle cx="24" cy="38" r="3.5" fill={color} stroke="#fff" strokeWidth="1.2" />

      {/* ── Output Layer Nodes (2 Nodes) ── */}
      <circle cx="38" cy="16" r="3.5" fill="#ec4899" stroke="#fff" strokeWidth="1.2" />
      <circle cx="38" cy="32" r="3.5" fill="#ec4899" stroke="#fff" strokeWidth="1.2" />
    </svg>
  );
}

function RocketFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-9 h-9 sm:w-10 sm:h-10 flex-none" viewBox="0 0 48 48" fill="none">
      <path d="M 24 6 C 31 11 36 21 34 32 L 28 34 L 24 28 L 20 34 L 14 32 C 12 21 17 11 24 6 Z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="24" cy="18" r="3" stroke={color} strokeWidth="2" />
      <path d="M 14 32 L 8 38 L 13 39 L 16 33" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 34 32 L 40 38 L 35 39 L 32 33" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TargetFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-9 h-9 sm:w-10 sm:h-10 flex-none" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="17" stroke={color} strokeWidth="2.5" />
      <circle cx="24" cy="24" r="11" stroke={color} strokeWidth="2" />
      <circle cx="24" cy="24" r="5" stroke={color} strokeWidth="2" />
      <path d="M 35 13 L 25 23" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 32 10 L 38 16" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const WORKFLOW_STEPS = [
  {
    step: 'Collect',
    desc: 'Gather raw data from sources',
    IconComponent: DatabaseFlaticon,
    color: '#0284c7',
  },
  {
    step: 'Analyze',
    desc: 'Clean & extract insights',
    IconComponent: SearchFlaticon,
    color: '#9333ea',
  },
  {
    step: 'Model',
    desc: 'Build & train ML models',
    IconComponent: ModelNeuralFlaticon,
    color: '#c026d3',
  },
  {
    step: 'Deploy',
    desc: 'Deploy to real applications',
    IconComponent: RocketFlaticon,
    color: '#2563eb',
  },
  {
    step: 'Impact',
    desc: 'Drive informed decisions',
    IconComponent: TargetFlaticon,
    color: '#059669',
  },
];

export function PipelineWorkflowBar(): JSX.Element {
  const { theme } = useTheme();

  return (
    <div className="w-full relative z-20 mt-8 sm:mt-12">
      {/* ── Main Container ── */}
      <div className={`relative rounded-[22px] sm:rounded-[26px] p-[2px] overflow-hidden shadow-2xl transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-[#0a122c]/60 shadow-[0_20px_50px_rgba(0,0,0,0.9)]' 
          : 'bg-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.08)]'
      }`}>
        
        {/* ── 1. The Clockwise Traveling Laser Beam ── */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none rounded-[22px] sm:rounded-[26px] overflow-visible"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="1" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#a855f7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Static Track Border */}
          <rect
            x="1.5"
            y="1.5"
            width="calc(100% - 3px)"
            height="calc(100% - 3px)"
            rx="23"
            fill="none"
            stroke={theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}
            strokeWidth="1.5"
          />

          {/* Animated Clockwise Traveling Beam */}
          <rect
            x="1.5"
            y="1.5"
            width="calc(100% - 3px)"
            height="calc(100% - 3px)"
            rx="23"
            fill="none"
            stroke="url(#laserBeamGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray="22 78"
            className="traveling-border-beam"
            style={{
              filter: theme === 'dark' ? 'drop-shadow(0 0 8px #00d4ff) drop-shadow(0 0 16px #a855f7)' : 'drop-shadow(0 0 6px #0284c7)',
            }}
          />
        </svg>

        {/* ── 2. Inner Glassmorphism Card (Horizontal Touch-Scroll on Mobile) ── */}
        <div className={`relative rounded-[20px] sm:rounded-[24px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 overflow-x-auto no-scrollbar transition-all duration-500 ${
          theme === 'dark'
            ? 'bg-[#040816]/95 backdrop-blur-2xl'
            : 'bg-white/95 backdrop-blur-xl'
        }`}>

          {/* ── 5 STEPS HORIZONTAL ROW ── */}
          <div className="flex items-center justify-between min-w-[700px] lg:min-w-0 gap-2 sm:gap-3">
            {WORKFLOW_STEPS.map((s, idx) => (
              <React.Fragment key={s.step}>
                {/* Step Item */}
                <div className="flex items-center gap-2.5 sm:gap-3.5 flex-1 min-w-0 group cursor-default">
                  {/* Flaticon Vector Icon */}
                  <div className="transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">
                    <s.IconComponent color={s.color} />
                  </div>

                  {/* Step Text Content */}
                  <div className="flex flex-col min-w-0">
                    <h4 className={`text-xs sm:text-sm font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{s.step}</h4>
                    <p className={`text-[10px] sm:text-[11px] font-medium leading-tight mt-0.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{s.desc}</p>
                  </div>
                </div>

                {/* Connecting Arrow */}
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <div className={`flex-none px-0.5 sm:px-1 ${theme === 'dark' ? 'text-cyan-400/60' : 'text-blue-500/70'}`}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
