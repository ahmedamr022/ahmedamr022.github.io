import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

/* ═══════════ FLATICON VECTOR ICONS FOR PROJECTS ═══════════ */

function BrainMriFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-14 h-14 sm:w-16 sm:h-16 flex-none transition-transform duration-500 group-hover:scale-110" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="2" strokeDasharray="4 2" fill={color} fillOpacity="0.08" />
      <path d="M 30 16 C 20 16 14 24 14 34 C 14 44 21 50 30 50" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M 17 26 C 23 26 26 31 30 31" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 16 39 C 22 39 25 36 30 39" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="22" cy="26" r="2" fill={color} />
      <circle cx="21" cy="39" r="2" fill={color} />
      <path d="M 34 16 C 44 16 50 24 50 34 C 50 44 43 50 34 50" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" />
      <path d="M 47 26 C 41 26 38 31 34 31" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 48 39 C 42 39 39 36 34 39" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="42" cy="26" r="2" fill="#a855f7" />
      <circle cx="43" cy="39" r="2" fill="#a855f7" />
      <circle cx="32" cy="32" r="3" fill="#fff" />
    </svg>
  );
}

function ChurnAnalyticsFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-14 h-14 sm:w-16 sm:h-16 flex-none transition-transform duration-500 group-hover:scale-110" viewBox="0 0 64 64" fill="none">
      <rect x="8" y="10" width="48" height="44" rx="10" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.08" />
      <line x1="8" y1="22" x2="56" y2="22" stroke={color} strokeWidth="2" />
      <path d="M 18 46 V 34" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M 28 46 V 26" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M 38 46 V 38" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M 48 46 V 20" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
      <path d="M 16 32 L 28 22 L 38 30 L 48 16" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="48" cy="16" r="3" fill="#ec4899" />
    </svg>
  );
}

function FoodVisionFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-14 h-14 sm:w-16 sm:h-16 flex-none transition-transform duration-500 group-hover:scale-110" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="26" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.08" />
      <path d="M 18 24 V 18 H 24" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 46 24 V 18 H 40" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 18 40 V 46 H 24" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 46 40 V 46 H 40" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 22 28 C 22 24 26 21 32 21 C 38 21 42 24 42 28 Z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2" />
      <line x1="20" y1="32" x2="44" y2="32" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
      <line x1="22" y1="36" x2="42" y2="36" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 22 40 H 42 C 42 43 38 45 32 45 C 26 45 22 43 22 40 Z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2" />
    </svg>
  );
}

const PROJECT_ICONS: Record<string, React.ComponentType<{ color: string }>> = {
  "Axon: Alzheimer's Detection": BrainMriFlaticon,
  'Customer Churn Prediction': ChurnAnalyticsFlaticon,
  'Food Image Classifier': FoodVisionFlaticon,
};

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack & AI' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'cv', label: 'Computer Vision' },
] as const;

type FilterId = (typeof FILTERS)[number]['id'];

export function Projects(): JSX.Element {
  const [filter, setFilter] = useState<FilterId>('all');
  const { theme } = useTheme();
  const visible = projects.filter((p) => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="site-section">
      <div className="container">
        
        {/* Section Header */}
        <header className="mb-8 sm:mb-10 text-center">
          <p className="section-label justify-center">Portfolio</p>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle mx-auto">Real AI solutions I&apos;ve designed, built, and deployed</p>
        </header>

        {/* Filter Pills */}
        <div className="mb-8 sm:mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {FILTERS.map((f) => {
            const isActive = filter === f.id;
            return (
              <button 
                key={f.id} 
                type="button" 
                onClick={() => setFilter(f.id)} 
                aria-pressed={isActive}
                className={`rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-wide uppercase transition-all duration-300 border cursor-pointer ${
                  isActive 
                    ? theme === 'dark'
                      ? 'border-[#38bdf8] bg-[#38bdf8]/15 text-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                      : 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm'
                    : theme === 'dark'
                      ? 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/20'
                      : 'border-slate-300 bg-white text-slate-600 hover:text-slate-900'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="mx-auto grid max-w-[1200px] gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => {
            const IconComp = PROJECT_ICONS[p.name] || BrainMriFlaticon;
            const isFeatured = p.featured === true;

            return (
              <article
                key={p.name}
                className={`group glass-card flex flex-col overflow-hidden ${
                  isFeatured ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                {/* Banner: real screenshot for featured, SVG icon for others */}
                {p.image ? (
                  <div className="relative overflow-hidden h-56 sm:h-72 lg:h-80">
                    {/* Featured badge */}
                    <span className="absolute top-3 left-3 z-10 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                      ✦ Featured Project
                    </span>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* gradient overlay at bottom for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className={`grid h-40 sm:h-48 place-items-center border-b transition-colors relative overflow-hidden ${
                    theme === 'dark' ? 'border-white/[0.06] bg-gradient-to-b from-[#070e24] to-[#020512]' : 'border-slate-100 bg-gradient-to-b from-slate-50 to-white'
                  }`}>
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                    <IconComp color={p.category === 'cv' ? '#38bdf8' : '#a855f7'} />
                  </div>
                )}

                {/* Content Body */}
                <div className={`flex flex-1 flex-col p-5 sm:p-7 ${isFeatured ? 'lg:flex-row lg:gap-10' : ''}`}>
                  <div className={`flex flex-col flex-1 ${isFeatured ? 'lg:max-w-2xl' : ''}`}>
                    <span className="self-start rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-400 mb-2.5 sm:mb-3">
                      {p.tag}
                    </span>

                    <h3 className={`font-bold leading-snug tracking-tight ${
                      isFeatured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                    } ${theme === 'dark' ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-blue-600'}`}>
                      {p.name}
                    </h3>

                    <p className={`mt-2.5 sm:mt-3 leading-relaxed ${
                      isFeatured ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                    } ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {p.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                      {p.tech.map((t) => (
                        <span className="skill-tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className={`flex items-center gap-5 pt-5 sm:pt-7 border-t mt-auto ${
                    isFeatured ? 'lg:flex-col lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 lg:mt-0 lg:justify-center lg:items-start' : ''
                  } ${theme === 'dark' ? 'border-white/[0.06]' : 'border-slate-100'}`}>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 text-xs font-bold font-mono tracking-wide uppercase transition-colors ${
                        theme === 'dark' ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600'
                      }`}
                    >
                      <GithubIcon size={16} /> Source Code
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 font-bold font-mono tracking-wide uppercase transition-colors text-cyan-400 hover:text-cyan-300 ${
                          isFeatured ? 'text-sm px-5 py-2.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20' : 'text-xs'
                        }`}
                      >
                        <ExternalLinkIcon size={isFeatured ? 18 : 16} /> Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}