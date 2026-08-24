import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Logo } from './Logo';

export function Footer(): JSX.Element {
  const { theme } = useTheme();

  return (
    <footer className={`border-t py-10 relative z-10 transition-colors duration-500 ${
      theme === 'dark' ? 'border-white/[0.08] bg-[#020617]' : 'border-slate-200 bg-white'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        {/* Modern AI Logo */}
        <Logo />

        {/* Copyright */}
        <p className={`text-xs font-mono font-medium ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
          &copy; {new Date().getFullYear()} Ahmed Amr. All rights reserved.
        </p>

      </div>
    </footer>
  );
}