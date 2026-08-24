import React from 'react';
import { ArrowRightIcon, MessageSquareIcon } from 'lucide-react';
import { profile } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

/* ═══════════ FLATICON VECTOR ICONS FOR HERO ═══════════ */

function GraduationFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 flex-none" viewBox="0 0 24 24" fill="none">
      <path d="M 12 3 L 2 8 L 12 13 L 22 8 Z" fill="currentColor" fillOpacity="0.2" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 6 10.5 V 16 C 6 18.5 8.5 21 12 21 C 15.5 21 18 18.5 18 16 V 10.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 22 8 V 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="22" cy="16" r="1.5" fill={color} />
    </svg>
  );
}

function AnalysisFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 flex-none" viewBox="0 0 24 24" fill="none">
      <path d="M 3 20 L 21 20" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 6 16 L 10 11 L 14 14 L 20 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="7" r="1.5" fill={color} />
    </svg>
  );
}

function MlFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 flex-none" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" fill={color} />
      <line x1="12" y1="4" x2="12" y2="9" stroke={color} strokeWidth="1.8" />
      <line x1="12" y1="15" x2="12" y2="20" stroke={color} strokeWidth="1.8" />
      <line x1="4" y1="12" x2="9" y2="12" stroke={color} strokeWidth="1.8" />
      <line x1="15" y1="12" x2="20" y2="12" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

function CvFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 flex-none" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.8" strokeDasharray="3 2" />
      <circle cx="12" cy="12" r="3" fill={color} />
      <path d="M 9 5 H 5 V 9" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 15 5 H 19 V 9" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 9 19 H 5 V 15" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 15 19 H 19 V 15" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DeFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4 flex-none" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.2" />
      <path d="M 4 6 V 12 C 4 13.8 7.6 15 12 15 C 16.4 15 20 13.8 20 12 V 6" stroke={color} strokeWidth="1.8" />
      <path d="M 4 12 V 18 C 4 19.8 7.6 21 12 21 C 16.4 21 20 19.8 20 18 V 12" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

/* 4 Core Specialization Pillars (Replaced generic Python with Computer Vision) */
const PILLS = [
  { label: 'Machine Learning', IconComponent: MlFlaticon, color: '#a855f7' },
  { label: 'Computer Vision', IconComponent: CvFlaticon, color: '#06b6d4' },
  { label: 'Data Engineering', IconComponent: DeFlaticon, color: '#10b981' },
  { label: 'Data Analysis', IconComponent: AnalysisFlaticon, color: '#38bdf8' },
];

function KaggleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.825 23.859c-.022.086-.117.141-.21.141h-3.139a.47.47 0 0 1-.393-.207l-4.97-6.938-1.507 1.442v5.398c0 .261-.213.473-.475.473H5.626a.473.473 0 0 1-.475-.473V.473C5.151.211 5.364 0 5.626 0h2.505c.262 0 .475.211.475.473v14.15l6.196-6.196a.467.467 0 0 1 .331-.137h3.367c.099 0 .195.059.222.152.035.118-.01.246-.098.334l-6.49 6.273 7.087 8.487c.078.094.106.222.067.322z" />
    </svg>
  );
}

export function HeroContent(): JSX.Element {
  const { theme } = useTheme();

  const socialLinks = [
    { 
      label: 'GitHub', 
      link: profile.github, 
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> 
    },
    { 
      label: 'LinkedIn', 
      link: profile.linkedin, 
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> 
    },
    { 
      label: 'Kaggle', 
      link: profile.kaggle, 
      icon: <KaggleIcon /> 
    },
    { 
      label: 'Email', 
      link: `mailto:${profile.email}`, 
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg> 
    },
  ];

  return (
    <div className="flex flex-col justify-center relative z-10 w-full max-w-[560px] pt-4 sm:pt-8 lg:pt-0">
      
      {/* 1. Flaticon Status Badge (Fresh Graduate • Open to Opportunities) */}
      <div className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border w-fit mb-5 sm:mb-6 shadow-sm ${
        theme === 'dark'
          ? 'border-emerald-500/40 bg-[#061520]/80 shadow-[0_0_20px_rgba(16,185,129,0.25)]'
          : 'border-emerald-600/30 bg-emerald-50/90 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
      }`}>
        <div className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}>
          <GraduationFlaticon color={theme === 'dark' ? '#34d399' : '#059669'} />
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span className={`text-[11px] sm:text-xs font-mono font-bold tracking-wide ${
          theme === 'dark' ? 'text-emerald-300' : 'text-emerald-800'
        }`}>
          Fresh Graduate <span className="opacity-40">•</span> Open to Opportunities
        </span>
      </div>

      {/* 2. Greeting */}
      <p className={`text-lg sm:text-xl font-medium tracking-wide mb-1.5 sm:mb-2 ${
        theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
      }`}>Hello, I&apos;m</p>
      
      {/* 3. Name */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-2 sm:mb-3 leading-[1.1]">
        <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>Ahmed </span>
        <span className="bg-gradient-to-r from-[#a855f7] via-[#818cf8] to-[#38bdf8] bg-clip-text text-transparent">
          Amr
        </span>
      </h1>
      
      {/* 4. Subtitle / Role */}
      <p className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 tracking-tight flex flex-wrap gap-1.5 sm:gap-2 items-center ${
        theme === 'dark' ? 'text-slate-100' : 'text-slate-800'
      }`}>
        Aspiring 
        <span className="text-[#38bdf8]">AI</span> 
        <span>&amp;</span> 
        <span className="text-[#a855f7]">Data Engineer</span>
      </p>

      {/* 5. Bio Description */}
      <p className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-7 max-w-[500px] ${
        theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
      }`}>
        A fresh graduate passionate about turning data into meaningful insights and building intelligent solutions using{' '}
        <span className="text-[#a855f7] font-semibold">Machine Learning</span> and{' '}
        <span className="text-[#38bdf8] font-semibold">AI</span>.
      </p>

      {/* 6. 4 Core Specialization Pillars */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-7 sm:mb-8">
        {PILLS.map((p) => (
          <span 
            key={p.label} 
            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold border ${
              theme === 'dark'
                ? 'text-slate-200 border-white/10 bg-[#070e24]/80 shadow-sm'
                : 'text-slate-700 border-slate-200 bg-white/95 shadow-sm'
            }`}
          >
            <p.IconComponent color={p.color} />
            {p.label}
          </span>
        ))}
      </div>

      {/* 7. CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-7 sm:mb-8">
        <a 
          href="#projects" 
          className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#3b82f6] to-[#a855f7] shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 transition-all text-center"
        >
          View My Projects <ArrowRightIcon size={18} />
        </a>
        <a 
          href="#contact" 
          className={`inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold border hover:-translate-y-0.5 transition-all text-center ${
            theme === 'dark'
              ? 'text-slate-200 border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30'
              : 'text-slate-800 border-slate-300 bg-white hover:bg-slate-50 shadow-sm'
          }`}
        >
          <MessageSquareIcon size={18} />
          Get In Touch
        </a>
      </div>

      {/* 8. Social Links */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-3 sm:gap-x-4">
        {socialLinks.map((s, idx) => (
          <React.Fragment key={s.label}>
            <a 
              href={s.link} 
              target={s.link.startsWith('http') ? '_blank' : undefined} 
              rel="noreferrer" 
              aria-label={s.label}
              className={`flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors group ${
                theme === 'dark' ? 'text-slate-400 hover:text-cyan-300' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <span className="transition-transform group-hover:scale-110">
                {s.icon}
              </span>
              <span>{s.label}</span>
            </a>

            {/* Vertical Divider */}
            {idx < socialLinks.length - 1 && (
              <span className={`h-3 w-[1px] ${theme === 'dark' ? 'bg-white/15' : 'bg-slate-300'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

    </div>
  );
}