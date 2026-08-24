import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroBackground } from './HeroBackground';
import { PipelineWorkflowBar } from './PipelineWorkflowBar';

export function HeroSection(): JSX.Element {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-12">
      {/* 1. Full-Bleed Background Image */}
      <HeroBackground />

      {/* 2. Content Layout */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between">
        
        {/* Upper Area: Left Column with Text, Right side completely clear */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-6">
            <HeroContent />
          </div>

          {/* Right Column (Empty to let background image show cleanly) */}
          <div className="hidden lg:block lg:col-span-6" />
        </div>

        {/* Bottom Area: Pipeline Workflow Bar */}
        <PipelineWorkflowBar />

      </div>
    </section>
  );
}