import React from 'react';
import heroBg from '../../assets/hero-bg.jpg';
import lightBg from '../../assets/light-bg.png';
import { useTheme } from '../../context/ThemeContext';

export function HeroBackground(): JSX.Element {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-700" aria-hidden="true">
      {/* Base Canvas */}
      <div className={`absolute inset-0 bg-[#020617] transition-opacity duration-700 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute inset-0 bg-[#f8fafc] transition-opacity duration-700 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`} />

      {/* ── DARK MODE 3D ARTWORK (Preloaded & Responsive) ── */}
      <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${theme === 'dark' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        <img 
          src={heroBg} 
          alt="" 
          loading="eager"
          className="absolute top-0 right-0 bottom-0 h-full w-auto max-w-none object-contain object-right select-none opacity-20 sm:opacity-40 lg:opacity-100 transition-opacity duration-500"
          style={{ width: 'auto', height: '100%', right: 0 }}
        />
        {/* Scrim Overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to right, #020617 0%, #020617 25%, rgba(2,6,23,0.85) 42%, rgba(2,6,23,0.1) 65%, transparent 85%)'
          }} 
        />
      </div>

      {/* ── LIGHT MODE 3D ARTWORK (Preloaded & Responsive) ── */}
      <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${theme === 'light' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
        <img 
          src={lightBg} 
          alt="" 
          loading="eager"
          className="absolute top-0 right-0 bottom-0 h-full w-auto max-w-none object-contain object-right select-none opacity-20 sm:opacity-40 lg:opacity-100 transition-opacity duration-500"
          style={{ width: 'auto', height: '100%', right: 0 }}
        />
        {/* Scrim Overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to right, #f8fafc 0%, #f8fafc 25%, rgba(248,250,252,0.85) 42%, rgba(248,250,252,0.1) 65%, transparent 85%)'
          }} 
        />
      </div>

      {/* Top Navbar Shadow */}
      <div className={`absolute top-0 left-0 right-0 h-28 pointer-events-none transition-opacity duration-700 ${
        theme === 'dark' ? 'bg-gradient-to-b from-[#020617] to-transparent opacity-80' : 'bg-gradient-to-b from-[#f8fafc] to-transparent opacity-90'
      }`} />

      {/* Bottom Transition Shadow */}
      <div className={`absolute bottom-0 left-0 right-0 h-24 pointer-events-none transition-opacity duration-700 ${
        theme === 'dark' ? 'bg-gradient-to-t from-[#020617] to-transparent' : 'bg-gradient-to-t from-[#f8fafc] to-transparent'
      }`} />
    </div>
  );
}
