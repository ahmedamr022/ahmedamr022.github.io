import React, { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/logo-transparent.png';

const BOOT_LOGS = [
  'Initializing PyTorch & Deep Learning Engines...',
  'Calibrating Axon Alzheimer Vision Network (93.2% Precision)...',
  'Vectorizing 440K+ Records & Predictive Data Pipelines...',
  'All Neural Systems Operational. Welcome to Ahmed Amr Portfolio.',
];

export function IntroLoader(): JSX.Element | null {
  const [hidden, setHidden] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleLaunch = () => {
    if (exiting) return;
    setExiting(true);
    setTimeout(() => setHidden(true), 600);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * -20;
    setMousePos({ x, y });
  };

  // ── Particle & Neural Canvas ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const numPoints = Math.min(width > 768 ? 40 : 20, 40);
    const points: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#00d4ff';
        ctx.shadowBlur = 6;
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // ── Auto Boot Progress ──
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => handleLaunch(), 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 8;
        if (next >= 25 && logIndex === 0) setLogIndex(1);
        if (next >= 55 && logIndex <= 1) setLogIndex(2);
        if (next >= 85 && logIndex <= 2) setLogIndex(3);
        return Math.min(100, next);
      });
    }, 85);

    return () => clearInterval(timer);
  }, [logIndex]);

  if (hidden) return null;

  return (
    <div 
      onMouseMove={handleMouseMove}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center p-4 sm:p-8 bg-[#020617] select-none transition-all duration-700 ease-out overflow-hidden ${
        exiting ? 'opacity-0 scale-105 pointer-events-none blur-md' : 'opacity-100 scale-100'
      }`}
    >
      {/* ── Interactive Particle Matrix Canvas ── */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" />

      {/* ── Ambient Radial Glows ── */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00d4ff]/15 via-[#8b5cf6]/20 to-[#ec4899]/15 blur-[120px] pointer-events-none animate-pulse" />

      {/* ── Top Bar with Skip ── */}
      <div className="absolute top-6 left-6 right-6 max-w-4xl mx-auto flex items-center justify-between z-20">
        <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold tracking-wider">AI SYSTEM BOOT</span>
        </div>

        <button
          onClick={handleLaunch}
          className="font-mono text-xs font-bold text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer px-3.5 py-1.5 rounded-xl border border-white/10 hover:border-cyan-400/40 bg-white/[0.04] backdrop-blur-md"
        >
          Skip Intro ➔
        </button>
      </div>

      {/* ── Central High-Tech Glass Capsule ── */}
      <div 
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative z-10 w-full max-w-[440px] rounded-3xl border border-white/15 bg-gradient-to-b from-[#08102a]/90 via-[#040816]/95 to-[#020512]/95 p-7 sm:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col items-center text-center"
      >
        {/* Top subtle neon line */}
        <div className="absolute top-0 left-12 right-12 h-[1.5px] bg-gradient-to-r from-transparent via-[#38bdf8] via-[#a855f7] to-transparent shadow-[0_0_12px_#38bdf8]" />

        {/* ── 3D Emblem with Orbiting Laser Rings ── */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-5 group cursor-pointer" onClick={handleLaunch}>
          <div className="absolute inset-[-10px] rounded-full border border-dashed border-[#38bdf8]/40 animate-[spin_8s_linear_infinite]" />
          <div className="absolute inset-[-20px] rounded-full border border-[#a855f7]/30 animate-[spin_12s_linear_infinite_reverse]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00d4ff] via-[#8b5cf6] to-[#ec4899] blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
          
          <img 
            src={logoImg} 
            alt="Ahmed Amr" 
            className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.7)] transition-transform duration-300 group-hover:scale-110" 
          />
        </div>

        {/* ── Typography ── */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-2xl sm:text-3xl font-black tracking-normal text-white font-sans">
            Ahmed
          </span>
          <span className="text-2xl sm:text-3xl font-black tracking-normal bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent font-sans">
            Amr
          </span>
        </div>

        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#38bdf8] font-bold mb-6">
          AI &amp; Data Engineer
        </p>

        {/* ── High-Precision Progress Bar ── */}
        <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden p-0.5 border border-white/10 relative shadow-inner mb-3">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-[#00d4ff] via-[#818cf8] via-[#a855f7] to-[#ec4899] shadow-[0_0_12px_#00d4ff] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full flex items-center justify-between font-mono text-[10px] text-slate-400 mb-5">
          <span>NEURAL MATRIX READY</span>
          <span className="text-cyan-300 font-bold">{progress}%</span>
        </div>

        {/* ── Live Boot Terminal Line ── */}
        <div className="w-full rounded-xl bg-black/40 border border-white/[0.06] px-3.5 py-2.5 font-mono text-[11px] text-cyan-200 text-left flex items-center gap-2 mb-5">
          <span className="text-[#38bdf8] font-bold animate-pulse">&gt;&gt;</span>
          <span className="truncate">{BOOT_LOGS[logIndex]}</span>
        </div>

        {/* ── Interactive Launch CTA ── */}
        <button
          onClick={handleLaunch}
          className="w-full py-3 px-6 rounded-xl font-mono text-xs font-extrabold uppercase tracking-widest text-white bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7] shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-white/20"
        >
          {progress >= 100 ? 'Explore Portfolio ➔' : 'Initialize Interface ➔'}
        </button>

      </div>
    </div>
  );
}
