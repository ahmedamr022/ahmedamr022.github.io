import React, { useState, useEffect } from 'react';
import { MailIcon, MenuIcon, XIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Logo } from './Logo';

export function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certificates'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? theme === 'dark'
          ? 'py-3 sm:py-4 bg-[#020617]/90 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]' 
          : 'py-3 sm:py-4 bg-white/90 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)]'
        : 'py-4 sm:py-6 bg-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* ── 1. Upgraded AI Brand Logo (3D Emblem) ── */}
        <Logo />

        {/* ── 2. Modern Floating Nav Links (Desktop) ── */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative py-1 text-sm font-semibold transition-all duration-300 group ${
                  isActive 
                    ? theme === 'dark' ? 'text-white font-bold' : 'text-slate-900 font-bold'
                    : theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <span>{item.label}</span>

                {/* Active Neon Laser Underline */}
                {isActive ? (
                  <>
                    <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#a855f7] shadow-[0_0_12px_#38bdf8]" />
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-1.5 rounded-full bg-[#38bdf8] blur-[4px] opacity-80 pointer-events-none" />
                  </>
                ) : (
                  /* Hover Expansion Underline */
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#38bdf8] to-[#a855f7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center opacity-70" />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── 3. Right Action Area ── */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          
          {/* Contact Me Primary Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#a855f7] shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <MailIcon size={15} />
            <span className="hidden xs:inline sm:inline">Contact Me</span>
          </a>

          {/* Cyan Theme Toggle Button with Smooth Clockwise Rotating Neon Ring */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme Mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="relative group w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[2px] overflow-hidden flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md flex-none"
          >
            {/* Clockwise Slow Calming Rotating Gradient Border */}
            <span className="absolute inset-[-100%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#00d4ff_0%,#38bdf8_30%,#a855f7_60%,#00d4ff_100%)] opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Inner Glass Disc */}
            <div className={`relative w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-[#040816] text-[#00d4ff]'
                : 'bg-white text-[#0284c7]'
            }`}>
              {theme === 'dark' ? (
                <MoonIcon size={17} className="text-[#38bdf8] drop-shadow-[0_0_6px_rgba(56,189,248,0.6)] transition-transform duration-300 group-hover:-rotate-12" />
              ) : (
                <SunIcon size={17} className="text-[#0284c7] drop-shadow-[0_0_6px_rgba(2,132,199,0.4)] transition-transform duration-300 group-hover:rotate-45" />
              )}
            </div>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`md:hidden w-10 h-10 rounded-xl border flex items-center justify-center transition-colors cursor-pointer ${
              theme === 'dark' ? 'border-white/15 bg-white/[0.04] text-slate-300' : 'border-slate-300 bg-slate-100 text-slate-700'
            }`}
          >
            {mobileMenuOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>

      </div>

      {/* ── 4. Mobile Menu Drawer ── */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-5 pt-3 pb-5 backdrop-blur-2xl border-b transition-colors animate-in slide-in-from-top-4 duration-300 ${
          theme === 'dark' ? 'bg-[#020617]/95 border-white/10' : 'bg-white/95 border-slate-200 shadow-xl'
        }`}>
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  theme === 'dark' ? 'text-slate-200 hover:text-white hover:bg-white/[0.06]' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}