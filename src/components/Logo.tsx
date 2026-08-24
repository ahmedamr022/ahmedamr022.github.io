import React from 'react';
import logoImg from '../assets/logo-transparent.png';
import { useTheme } from '../context/ThemeContext';

export function Logo({ className = '' }: { className?: string }): JSX.Element {
  const { theme } = useTheme();

  return (
    <a 
      href="#" 
      className={`group relative flex items-center gap-3.5 select-none ${className}`}
      aria-label="Ahmed Amr - AI & Data Engineer"
    >
      {/* ── 3D Emblem with Floating Glow Animation ── */}
      <div className="relative w-10 h-10 flex-none flex items-center justify-center">
        {/* Ambient Neon Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00d4ff] via-[#8b5cf6] to-[#ec4899] opacity-35 blur-md group-hover:opacity-75 group-hover:blur-lg transition-all duration-500" />

        {/* 3D Logo Image */}
        <img 
          src={logoImg} 
          alt="Ahmed Amr Logo" 
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_4px_14px_rgba(0,212,255,0.45)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" 
        />
      </div>

      {/* ── Brand Typography ── */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="flex items-center gap-2">
          <span className={`text-[1.18rem] font-black tracking-normal transition-colors font-sans ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Ahmed
          </span>
          <span className="text-[1.18rem] font-black tracking-normal bg-gradient-to-r from-[#38bdf8] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent font-sans">
            Amr
          </span>
        </div>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.24em] text-[#38bdf8] font-bold mt-0.5 opacity-90 group-hover:opacity-100 transition-opacity">
          AI &amp; Data Engineer
        </span>
      </div>
    </a>
  );
}
