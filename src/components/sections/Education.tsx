import React from 'react';
import { useTheme } from '../../context/ThemeContext';

/* ═══════════ FLATICON VECTOR FOR EDUCATION ═══════════ */
function AcademicFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 flex-none" viewBox="0 0 48 48" fill="none">
      <path d="M 24 8 L 4 18 L 24 28 L 44 18 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 12 23 V 34 C 12 38.5 17.4 42 24 42 C 30.6 42 36 38.5 36 34 V 23" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 44 18 V 32" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="44" cy="33" r="2.5" fill={color} />
    </svg>
  );
}

export function Education(): JSX.Element {
  const { theme } = useTheme();

  return (
    <section id="education" className="site-section">
      <div className="container">
        <header className="mb-10 sm:mb-14 text-center">
          <p className="section-label justify-center">Academic Background</p>
          <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
          <p className="section-subtitle mx-auto">Building strong foundations in computer science and artificial intelligence</p>
        </header>

        <div className="glass-card mx-auto max-w-[760px] p-5 sm:p-8 lg:p-10">
          <div className="flex items-center gap-3.5 sm:gap-4 mb-3.5 sm:mb-4">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex-none flex items-center justify-center border shadow-inner ${
              theme === 'dark' ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-cyan-50 border-cyan-200'
            }`}>
              <AcademicFlaticon color={theme === 'dark' ? '#38bdf8' : '#0284c7'} />
            </div>
            <div>
              <h3 className={`text-base sm:text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Bachelor of Computer Science
              </h3>
              <p className="font-mono text-xs sm:text-sm font-semibold text-[#00d4ff]">Modern Academy Maadi, Cairo, Egypt</p>
            </div>
          </div>

          <p className={`font-mono text-[11px] sm:text-xs mb-3 sm:mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            September 2022 — June 2026
          </p>

          <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            Specializing in Artificial Intelligence and Machine Learning. Studying core CS fundamentals alongside advanced topics in Deep Learning, Computer Vision, Data Structures &amp; Algorithms, Databases, and Software Engineering.
          </p>

          <div className="mt-5 sm:mt-6">
            <span className={`inline-flex items-center gap-2 rounded-full border px-3.5 sm:px-4 py-1.5 sm:py-2 font-mono text-[11px] sm:text-xs font-bold ${
              theme === 'dark'
                ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300'
                : 'border-cyan-600/30 bg-cyan-50 text-cyan-800'
            }`}>
              <AcademicFlaticon color={theme === 'dark' ? '#38bdf8' : '#0284c7'} />
              <span>Fresh Graduate — AI Specialization</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}