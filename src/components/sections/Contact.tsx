import React from 'react';
import { MailIcon } from 'lucide-react';
import { profile } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

/* ═══════════ FLATICON VECTOR ICONS FOR CONTACT ═══════════ */

function MailFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="4" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
      <path d="M 4 7 L 12 13 L 20 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none">
      <path d="M 5 4 C 5 4 5 7 7 9 L 9 7 C 9.5 6.5 10.5 6.5 11 7 L 13 9 C 13.5 9.5 13.5 10.5 13 11 L 12 12 C 13 14 15 16 17 17 L 18 16 C 18.5 15.5 19.5 15.5 20 16 L 22 18 C 22.5 18.5 22.5 19.5 22 20 L 20 22 C 17 23 11 20 7 16 C 3 12 0 6 1 3 L 3 1 C 3.5 0.5 4.5 0.5 5 1 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} fillOpacity="0.1" transform="translate(1,1)" />
    </svg>
  );
}

function LocationFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none">
      <path d="M 12 2 C 7.5 2 4 5.5 4 10 C 4 15.5 12 22 12 22 C 12 22 20 15.5 20 10 C 20 5.5 16.5 2 12 2 Z" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
      <circle cx="12" cy="10" r="3" fill={color} />
    </svg>
  );
}

function TimezoneFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-5 h-5 flex-none" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
      <polyline points="12 7 12 12 15 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HuggingFaceIconFlaticon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="10" width="32" height="28" rx="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="18" cy="22" r="3" fill="currentColor" />
      <circle cx="30" cy="22" r="3" fill="currentColor" />
      <path d="M 18 30 C 21 34 27 34 30 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Contact(): JSX.Element {
  const { theme } = useTheme();

  const items = [
    { IconComp: MailFlaticon, label: 'Email', value: profile.email, color: '#38bdf8' },
    { IconComp: PhoneFlaticon, label: 'Phone', value: profile.phone, color: '#a855f7' },
    { IconComp: LocationFlaticon, label: 'Location', value: profile.location, color: '#10b981' },
    { IconComp: TimezoneFlaticon, label: 'Timezone', value: profile.timezone, color: '#f59e0b' },
  ];

  const socials = [
    { 
      href: profile.github, 
      label: 'GitHub', 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> 
    },
    { 
      href: profile.linkedin, 
      label: 'LinkedIn', 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> 
    },
    { 
      href: profile.huggingface, 
      label: 'Hugging Face', 
      icon: <HuggingFaceIconFlaticon /> 
    },
  ];

  return (
    <section id="contact" className="site-section">
      <div className="container">
        <header className="mb-10 sm:mb-14 text-center">
          <p className="section-label justify-center">Get In Touch</p>
          <h2 className="section-title">Let&apos;s Build <span className="gradient-text">Something Great</span></h2>
          <p className="section-subtitle mx-auto">Interested in collaborating or have an opportunity? I&apos;d love to hear from you</p>
        </header>

        <div className="mx-auto max-w-[950px]">
          <p className={`text-sm sm:text-base lg:text-lg leading-relaxed text-center max-w-[700px] mx-auto ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            I&apos;m a fresh CS graduate actively looking for opportunities in Machine Learning, Computer Vision, and Data Analysis. Whether you have a project idea, an internship, a full-time role, or just want to talk AI — my inbox is always open.
          </p>

          {/* Contact Details Cards (Responsive 1 / 2 cols) */}
          <div className="mt-8 sm:mt-10 grid gap-3.5 sm:gap-5 grid-cols-1 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item.label} className="glass-card flex items-center gap-3.5 sm:gap-4 p-4 sm:p-6 group">
                <span 
                  className="grid h-11 w-11 sm:h-12 sm:w-12 flex-none place-items-center rounded-2xl border transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}33`
                  }}
                >
                  <item.IconComp color={item.color} />
                </span>
                <span className="min-w-0">
                  <span className={`block font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] font-bold ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {item.label}
                  </span>
                  <span className={`block truncate text-sm sm:text-base font-semibold ${
                    theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
                  }`}>
                    {item.value}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Social Links & Main Contact Button (Responsive Flex Stack) */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-5 sm:p-6 glass-card">
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target={s.href.startsWith('http') ? '_blank' : undefined} 
                  rel="noreferrer" 
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${
                    theme === 'dark'
                      ? 'border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:scale-105'
                      : 'border-slate-300 bg-slate-50 text-slate-700 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50 hover:scale-105'
                  }`}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <a href={`mailto:${profile.email}`} className="btn btn-primary w-full sm:w-auto text-center">
              <MailIcon size={18} /> Email Me Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}