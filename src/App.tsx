import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { IntroLoader } from './components/IntroLoader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { Marquee } from './components/sections/Marquee';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Internship } from './components/sections/Internship';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function AppContent(): JSX.Element {
  const { theme } = useTheme();
  useScrollReveal();

  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      theme === 'dark' 
        ? 'bg-[#020617] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200' 
        : 'bg-[#f8fafc] text-slate-900 selection:bg-blue-500/30 selection:text-blue-900'
    }`}>
      {/* Cinematic AI First-Load Intro Transition */}
      <IntroLoader />

      <Navbar />
      
      <main>
        <HeroSection />
        <Marquee />
        <About />
        <Skills />
        <Internship />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export function App(): JSX.Element {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}