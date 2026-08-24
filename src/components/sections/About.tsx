import React from 'react';
import { DownloadIcon, EyeIcon } from 'lucide-react';
import { aboutHighlights, profile, stats } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';
import mePhoto from '../../assets/me.png';

/* ═══════════ FLATICON VECTOR ICONS FOR ABOUT & STATS ═══════════ */

function GraduationFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none">
      <path d="M 12 3 L 2 8 L 12 13 L 22 8 Z" fill="currentColor" fillOpacity="0.2" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 6 10.5 V 16 C 6 18.5 8.5 21 12 21 C 15.5 21 18 18.5 18 16 V 10.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 22 8 V 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="22" cy="16" r="1.5" fill={color} />
    </svg>
  );
}

function StatBrainFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 flex-none mx-auto" viewBox="0 0 48 48" fill="none">
      <path d="M 22 10 C 14 10 10 16 10 24 C 10 32 15 38 22 38" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 12 18 C 17 18 19 22 22 22" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 11 28 C 16 28 18 26 22 28" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="18" r="1.5" fill={color} />
      <circle cx="15" cy="28" r="1.5" fill={color} />
      <path d="M 26 10 C 34 10 38 16 38 24 C 38 32 33 38 26 38" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 36 18 C 31 18 29 22 26 22" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 37 28 C 32 28 30 26 26 28" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="18" r="1.5" fill={color} />
      <circle cx="33" cy="28" r="1.5" fill={color} />
    </svg>
  );
}

function StatTargetFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 flex-none mx-auto" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="17" stroke={color} strokeWidth="2.5" />
      <circle cx="24" cy="24" r="11" stroke={color} strokeWidth="2" />
      <circle cx="24" cy="24" r="5" stroke={color} strokeWidth="2" />
      <path d="M 35 13 L 25 23" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 32 10 L 38 16" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function StatDatabaseFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 flex-none mx-auto" viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="11" rx="16" ry="6" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 8 11 V 24 C 8 27.5 15.2 30 24 30 C 32.8 30 40 27.5 40 24 V 11" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 8 24 V 37 C 8 40.5 15.2 43 24 43 C 32.8 43 40 40.5 40 37 V 24" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function StatRocketFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 flex-none mx-auto" viewBox="0 0 48 48" fill="none">
      <path d="M 24 6 C 31 11 36 21 34 32 L 28 34 L 24 28 L 20 34 L 14 32 C 12 21 17 11 24 6 Z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="24" cy="18" r="3" stroke={color} strokeWidth="2" />
      <path d="M 14 32 L 8 38 L 13 39 L 16 33" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 34 32 L 40 38 L 35 39 L 32 33" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const STAT_ICONS = [
  StatBrainFlaticon,
  StatTargetFlaticon,
  StatDatabaseFlaticon,
  StatRocketFlaticon,
];

const STAT_COLORS = ['#38bdf8', '#a855f7', '#10b981', '#f59e0b'];

export function About(): JSX.Element {
  const { theme } = useTheme();

  return (
    <section id="about" className="site-section">
      <div className="container">
        <div className="grid items-center gap-10 lg:gap-14 grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
          
          {/* Photo & Status Badge */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
            <div className={`overflow-hidden rounded-3xl border transition-all duration-500 relative aspect-[4/5] ${
              theme === 'dark' 
                ? 'border-white/[0.12] bg-[#070e24]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' 
                : 'border-slate-200 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]'
            }`}>
              <img 
                src={mePhoto} 
                alt="Ahmed Amr" 
                loading="lazy" 
                className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105" 
              />
            </div>

            {/* Enhanced Flaticon Status Badge */}
            <div className={`absolute -bottom-4 right-0 sm:-bottom-5 sm:-right-2 flex items-center gap-2.5 sm:gap-3.5 rounded-2xl border px-3.5 sm:px-5 py-2.5 sm:py-3.5 backdrop-blur-xl shadow-2xl transition-all duration-500 ${
              theme === 'dark'
                ? 'border-emerald-500/30 bg-[#040c1e]/90 shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
                : 'border-emerald-600/30 bg-white/95 shadow-[0_10px_30px_rgba(16,185,129,0.15)]'
            }`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border ${
                theme === 'dark' ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-emerald-600/20 bg-emerald-50'
              }`}>
                <GraduationFlaticon color={theme === 'dark' ? '#34d399' : '#059669'} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-emerald-500 font-bold">Status</span>
                <span className={`text-xs sm:text-sm font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Fresh Graduate
                </span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Turning Data Into<br />
              <span className="gradient-text">Intelligent Solutions</span>
            </h2>
            <p className={`mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed transition-colors ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              I&apos;m Ahmed Amr — a fresh Computer Science graduate from Modern Academy Maadi. I don&apos;t just train models — I obsess over the full pipeline. From cleaning messy real-world datasets to deploying models people can actually try, every step matters. My graduation project, <strong className={theme === 'dark' ? 'text-white font-bold' : 'text-slate-900 font-bold'}>Axon</strong>, classifies Alzheimer&apos;s Disease stages from brain MRI scans at 93.2% accuracy — trained on 33K+ images and deployed live on Hugging Face.
            </p>
            <p className={`mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              What I care about is building things people can actually use. Whether it&apos;s a 440K-record churn prediction study or a food classifier live on Hugging Face, I go for impact over theory — and I&apos;m looking for a role where I can keep learning while owning problems end-to-end.
            </p>

            <ul className="mt-6 sm:mt-8 grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-2">
              {aboutHighlights.map((item) => (
                <li key={item} className={`flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span className="text-[#00d4ff] text-base flex-none" aria-hidden="true">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a href={profile.resume} download className="btn btn-primary text-center">
                <DownloadIcon size={18} /> Download CV
              </a>
              <a href="#projects" className="btn btn-outline text-center">
                <EyeIcon size={18} /> View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Stats Row with Flaticon Icons */}
        <div className="mt-14 sm:mt-20 grid gap-3.5 sm:gap-5 grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => {
            const StatIconComp = STAT_ICONS[idx] || StatBrainFlaticon;
            const statColor = STAT_COLORS[idx] || '#38bdf8';

            return (
              <div key={s.label} className="glass-card px-4 sm:px-6 py-5 sm:py-7 text-center group">
                <div className="mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
                  <StatIconComp color={statColor} />
                </div>
                <div className={`font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {s.value}
                </div>
                <div className={`mt-1 sm:mt-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.16em] font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}