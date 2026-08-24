import React from 'react';
import { ExternalLinkIcon, CalendarIcon } from 'lucide-react';
import { certifications } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

/* ═══════════ FLATICON VECTOR ICONS FOR CERTIFICATIONS ═══════════ */

function StatisticsFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 flex-none" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="6" width="36" height="36" rx="8" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.1" />
      <path d="M 12 36 L 12 28 C 12 26.5 14 26.5 14 28 L 14 36" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 20 36 L 20 20 C 20 18.5 22 18.5 22 20 L 22 36" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 28 36 L 28 14 C 28 12.5 30 12.5 30 14 L 30 36" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 36 36 L 36 24 C 36 22.5 38 22.5 38 24 L 38 36" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 10 26 Q 22 6 38 18" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="14" r="3" fill="#38bdf8" />
    </svg>
  );
}

function PythonCertFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 flex-none" viewBox="0 0 48 48" fill="none">
      <path d="M 23.5 6 C 16 6 16.5 9.5 16.5 9.5 L 16.5 13 L 24 13 L 24 14.5 L 13.5 14.5 C 9 14.5 6 17 6 24 C 6 30.5 8.5 30.5 8.5 30.5 L 11 30.5 L 11 27 C 11 23 14.5 23 14.5 23 L 22 23 C 24 23 25.5 21.5 25.5 19.5 L 25.5 10 C 25.5 7.5 24.5 6 23.5 6 Z" fill={color} fillOpacity="0.85" />
      <path d="M 24.5 42 C 32 42 31.5 38.5 31.5 38.5 L 31.5 35 L 24 35 L 24 33.5 L 34.5 33.5 C 39 33.5 42 31 42 24 C 42 17.5 39.5 17.5 39.5 17.5 L 37 17.5 L 37 21 C 37 25 33.5 25 33.5 25 L 26 25 C 24 25 22.5 26.5 22.5 28.5 L 22.5 38 C 22.5 40.5 23.5 42 24.5 42 Z" fill="#38bdf8" fillOpacity="0.85" />
      <circle cx="19.5" cy="9.5" r="1.5" fill="#fff" />
      <circle cx="28.5" cy="38.5" r="1.5" fill="#fff" />
    </svg>
  );
}

function ExcelFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 flex-none" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="8" width="36" height="32" rx="6" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.1" />
      <line x1="6" y1="18" x2="42" y2="18" stroke={color} strokeWidth="2" />
      <line x1="18" y1="8" x2="18" y2="40" stroke={color} strokeWidth="2" />
      <line x1="30" y1="8" x2="30" y2="40" stroke={color} strokeWidth="2" />
      <rect x="20" y="20" width="8" height="8" rx="2" fill={color} fillOpacity="0.4" />
      <path d="M 32 24 L 40 32" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="36" cy="28" r="2" fill="#10b981" />
    </svg>
  );
}

function VerifiedCheckFlaticon({ color }: { color: string }) {
  return (
    <svg className="w-3.5 h-3.5 flex-none" viewBox="0 0 24 24" fill="none">
      <path d="M 12 2 L 15 5 L 19 5 L 20 9 L 23 12 L 20 15 L 19 19 L 15 19 L 12 22 L 9 19 L 5 19 L 4 15 L 1 12 L 4 9 L 5 5 L 9 5 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5" />
      <path d="M 8 12 L 11 15 L 16 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CERT_ICONS: Record<string, React.ComponentType<{ color: string }>> = {
  'Statistics 101': StatisticsFlaticon,
  'Scientific Computing with Python': PythonCertFlaticon,
  'Data Analysis with Excel Pivot Tables': ExcelFlaticon,
};

export function Certifications(): JSX.Element {
  const { theme } = useTheme();

  return (
    <section id="certificates" className="site-section">
      <div className="container">
        
        {/* Section Header */}
        <header className="mb-10 sm:mb-14 text-center">
          <p className="section-label justify-center">Credentials</p>
          <h2 className="section-title">Verified <span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle mx-auto">
            Industry-recognized credentials validating my competencies in Data Science, Machine Learning, and Engineering
          </p>
        </header>

        {/* ── 3-Column Luxury Cards Grid (Responsive 1/2/3 cols) ── */}
        <div className="mx-auto grid max-w-[1200px] gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            const IconComp = CERT_ICONS[cert.name] || StatisticsFlaticon;

            return (
              <div 
                key={cert.name} 
                className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border p-5 sm:p-8 transition-all duration-500 overflow-hidden ${
                  theme === 'dark'
                    ? 'border-white/[0.08] bg-gradient-to-b from-[#070e24]/90 via-[#040816]/90 to-[#020512]/90 shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:border-[#38bdf8]/40 hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)] hover:-translate-y-1.5'
                    : 'border-slate-200/90 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:border-blue-400 hover:shadow-[0_20px_45px_rgba(59,130,246,0.12)] hover:-translate-y-1.5'
                }`}
              >
                {/* Ambient Top Glow */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                  style={{ backgroundColor: cert.badgeColor }}
                />

                <div>
                  {/* Card Top Row: Flaticon Vector + Verified Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border shadow-inner transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        borderColor: `${cert.badgeColor}33`,
                        backgroundColor: `${cert.badgeColor}15`
                      }}
                    >
                      <IconComp color={cert.badgeColor} />
                    </div>

                    <span 
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider border shadow-sm"
                      style={{
                        color: cert.badgeColor,
                        borderColor: `${cert.badgeColor}40`,
                        backgroundColor: `${cert.badgeColor}12`
                      }}
                    >
                      <VerifiedCheckFlaticon color={cert.badgeColor} /> Verified
                    </span>
                  </div>

                  {/* Certification Title */}
                  <h3 className={`text-lg sm:text-xl font-bold leading-snug tracking-tight mb-2 transition-colors ${
                    theme === 'dark' ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    {cert.name}
                  </h3>

                  {/* Issuer & Date Metadata */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-2.5 text-xs mb-4 sm:mb-5">
                    <span className="font-mono font-bold" style={{ color: cert.badgeColor }}>
                      {cert.issuer}
                    </span>
                    <span className="text-slate-500 opacity-60">•</span>
                    <span className={`inline-flex items-center gap-1.5 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      <CalendarIcon size={12} />
                      {cert.date}
                    </span>
                  </div>

                  {/* Skills Acquired Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill}
                        className={`px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono font-medium border transition-colors ${
                          theme === 'dark'
                            ? 'border-white/[0.06] bg-white/[0.02] text-slate-300 group-hover:border-white/15'
                            : 'border-slate-200 bg-slate-50 text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className={`pt-4 sm:pt-5 border-t flex items-center justify-between gap-3 ${
                  theme === 'dark' ? 'border-white/[0.07]' : 'border-slate-100'
                }`}>
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 tracking-wider">
                    ID: {cert.verifiedId}
                  </span>

                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white px-3.5 sm:px-4 py-2 rounded-xl transition-all shadow-md group-hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${cert.badgeColor}, #6366f1)`
                    }}
                  >
                    <span>View Credential</span>
                    <ExternalLinkIcon size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}