import React, { useState, useEffect } from 'react';

interface NodeInfo {
  title: string;
  subtitle: string;
  metric: string;
  desc: string;
  color: string;
}

const NODES_INFO: Record<string, NodeInfo> = {
  data: {
    title: 'DATA INGESTION',
    subtitle: 'Extract, Load & Transform',
    metric: '100K+ Rows/s',
    desc: 'Automated data pipelines collecting unstructured logs, SQL databases & cloud storage.',
    color: '#00d4ff',
  },
  analyze: {
    title: 'EDA & FEATURE ENGINEERING',
    subtitle: 'Insights & Preprocessing',
    metric: '99.4% Data Quality',
    desc: 'Exploratory data analysis, handling missing features, statistical modeling and outliers.',
    color: '#38bdf8',
  },
  model: {
    title: 'DEEP LEARNING MODEL',
    subtitle: 'Neural Architecture',
    metric: 'PyTorch / TensorFlow',
    desc: 'Deep neural networks, CNNs for computer vision & Transformers for NLP reasoning.',
    color: '#c084fc',
  },
  deploy: {
    title: 'PRODUCTION DEPLOYMENT',
    subtitle: 'Cloud & Edge APIs',
    metric: '99.99% Uptime',
    desc: 'FastAPI / Docker containerization deployed to AWS / GCP with sub-50ms latency.',
    color: '#00d4ff',
  },
};

/**
 * 100% Transparent Interactive Overlay:
 * Contains NO image, NO box, and NO borders.
 * Overlays live SVG neon laser pulses, shockwave ripples, and clickable telemetry popups
 * directly onto the full-screen master background.
 */
export function PipelineScene(): JSX.Element {
  const [activeStage, setActiveStage] = useState(0);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Synchronized Pipeline Stage Cycle (every 2.8s next stage)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center select-none pointer-events-none">
      {/* Coordinate Canvas matching right half of screen */}
      <div className="relative w-full h-full max-w-[850px] max-h-[600px] pointer-events-auto">
        
        {/* ══════════════════════════════════════════════════════
            1. LIVE SVG FLOW PARTICLES & NEON LASER BEAMS
        ══════════════════════════════════════════════════════ */}
        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 1000 667" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="laserBeamPulse" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="b1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b2" />
              <feMerge>
                <feMergeNode in="b2" />
                <feMergeNode in="b1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Path 1: DATA (453, 335) -> ANALYZE (548, 275) */}
            <path id="flow-p1" d="M 453 325 C 453 285, 490 275, 545 275" />

            {/* Path 2: ANALYZE (595, 230) -> MODEL (685, 155) */}
            <path id="flow-p2" d="M 595 230 C 635 230, 655 155, 685 155" />

            {/* Path 3: MODEL (795, 155) -> DEPLOY (925, 340) */}
            <path id="flow-p3" d="M 795 155 C 875 155, 925 240, 925 340" />
          </defs>

          {/* ── Traveling High-Energy Light Particles ── */}
          {activeStage === 0 && (
            <circle r="5.5" fill="#00d4ff" filter="url(#laserBeamPulse)">
              <animateMotion dur="2.4s" repeatCount="1" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                <mpath href="#flow-p1" />
              </animateMotion>
            </circle>
          )}

          {activeStage === 1 && (
            <circle r="5.5" fill="#c084fc" filter="url(#laserBeamPulse)">
              <animateMotion dur="2.4s" repeatCount="1" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                <mpath href="#flow-p2" />
              </animateMotion>
            </circle>
          )}

          {activeStage >= 2 && (
            <circle r="5.5" fill="#00d4ff" filter="url(#laserBeamPulse)">
              <animateMotion dur="2.4s" repeatCount="1" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                <mpath href="#flow-p3" />
              </animateMotion>
            </circle>
          )}
        </svg>

        {/* ══════════════════════════════════════════════════════
            2. INTERACTIVE SHOCKWAVE PULSES ON EACH NODE
        ══════════════════════════════════════════════════════ */}

        {/* ── NODE 1: DATA CYLINDER OVERLAY ── */}
        <div 
          onClick={() => setSelectedNode(selectedNode === 'data' ? null : 'data')}
          className="absolute left-[40.5%] top-[48%] w-[10%] h-[20%] z-20 cursor-pointer group flex items-center justify-center"
          title="Click to inspect Data Pipeline"
        >
          <div className={`absolute inset-0 rounded-full border-2 border-[#00d4ff] transition-all duration-700 pointer-events-none ${
            activeStage === 0 ? 'opacity-100 scale-125 animate-ping' : 'opacity-0 scale-95'
          }`} />
          <div className="absolute inset-0 rounded-full bg-[#00d4ff]/25 opacity-0 group-hover:opacity-100 blur-md transition-opacity pointer-events-none" />
        </div>

        {/* ── NODE 2: ANALYZE CARD OVERLAY ── */}
        <div 
          onClick={() => setSelectedNode(selectedNode === 'analyze' ? null : 'analyze')}
          className="absolute left-[50.5%] top-[17.5%] w-[9%] h-[15%] z-20 cursor-pointer group flex items-center justify-center"
          title="Click to inspect Analytics"
        >
          <div className={`absolute inset-0 rounded-2xl border-2 border-[#38bdf8] transition-all duration-700 pointer-events-none ${
            activeStage === 1 ? 'opacity-100 scale-110 shadow-[0_0_30px_rgba(56,189,248,0.7)]' : 'opacity-0 scale-95'
          }`} />
          <div className="absolute inset-0 rounded-2xl bg-[#38bdf8]/25 opacity-0 group-hover:opacity-100 blur-md transition-opacity pointer-events-none" />
        </div>

        {/* ── NODE 3: MODEL POLYHEDRON OVERLAY ── */}
        <div 
          onClick={() => setSelectedNode(selectedNode === 'model' ? null : 'model')}
          className="absolute left-[68%] top-[10%] w-[12%] h-[18%] z-20 cursor-pointer group flex items-center justify-center"
          title="Click to inspect Neural Model"
        >
          <div className={`absolute w-14 h-14 rounded-full border-2 border-[#d946ef] transition-all duration-700 pointer-events-none ${
            activeStage === 2 ? 'opacity-100 scale-150 animate-ping' : 'opacity-0 scale-95'
          }`} />
          <div className="absolute inset-0 rounded-full bg-[#d946ef]/25 opacity-0 group-hover:opacity-100 blur-lg transition-opacity pointer-events-none" />
        </div>

        {/* ── NODE 4: DEPLOY CLOUD OVERLAY ── */}
        <div 
          onClick={() => setSelectedNode(selectedNode === 'deploy' ? null : 'deploy')}
          className="absolute left-[87.5%] top-[50%] w-[10%] h-[18%] z-20 cursor-pointer group flex items-center justify-center"
          title="Click to inspect Deployment"
        >
          <div className={`absolute inset-0 rounded-2xl border-2 border-[#00d4ff] transition-all duration-700 pointer-events-none ${
            activeStage === 3 ? 'opacity-100 scale-115 shadow-[0_0_30px_rgba(0,212,255,0.7)]' : 'opacity-0 scale-95'
          }`} />
          <div className="absolute inset-0 rounded-2xl bg-[#00d4ff]/25 opacity-0 group-hover:opacity-100 blur-md transition-opacity pointer-events-none" />
        </div>

        {/* ══════════════════════════════════════════════════════
            3. INTERACTIVE NODE DETAILS POPUP (ON CLICK)
        ══════════════════════════════════════════════════════ */}
        {selectedNode && NODES_INFO[selectedNode] && (
          <div 
            className="absolute left-[50%] top-[2%] -translate-x-1/2 z-30 px-6 py-4 rounded-2xl bg-[#030816]/95 border backdrop-blur-2xl shadow-[0_15px_45px_rgba(0,0,0,0.95)] flex items-center gap-5 transition-all duration-300 animate-in fade-in slide-in-from-top-3 max-w-[480px] w-[90%]"
            style={{ borderColor: `${NODES_INFO[selectedNode].color}80` }}
          >
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: NODES_INFO[selectedNode].color }} />
                <h4 className="font-mono text-xs font-black tracking-widest uppercase" style={{ color: NODES_INFO[selectedNode].color }}>
                  {NODES_INFO[selectedNode].title}
                </h4>
              </div>
              <p className="text-[11px] text-slate-300 font-medium">{NODES_INFO[selectedNode].subtitle}</p>
              <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{NODES_INFO[selectedNode].desc}</p>
            </div>

            <div className="flex flex-col items-end flex-none pl-3 border-l border-white/10">
              <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">Metric</span>
              <span className="font-mono text-xs font-bold text-white whitespace-nowrap">{NODES_INFO[selectedNode].metric}</span>
              <button 
                onClick={() => setSelectedNode(null)} 
                className="mt-2 text-[10px] text-slate-400 hover:text-white transition-colors underline"
              >
                Close ✕
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}