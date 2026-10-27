import React from 'react';
import { CloudRain, Sun, Home, Compass, Mountain, CheckCircle2 } from 'lucide-react';
import { LOCAL_ARCHITECTURES, WEATHER_CONDITIONS } from '../data/roofingData';

export const LocalArchitectureSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F5F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B2D]">
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
            <span>LOCAL FIT</span>
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071B2D] tracking-tight">
            How Your Home and the Weather Shape Your Roof
          </h2>

          <p className="text-base sm:text-lg text-[#5D6B78] leading-relaxed">
            Bay Area homes face different roofing challenges depending on their architecture, location, slope, weather exposure, and municipal requirements.
          </p>
        </div>

        {/* 3 Architecture Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Eichler & Midcentury */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#071B2D] text-[#F5C52E] flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>

              <div className="inline-block text-xs font-bold text-[#287A58] uppercase tracking-wide">
                {LOCAL_ARCHITECTURES[0].badge}
              </div>

              <h3 className="text-xl font-bold font-heading text-[#071B2D]">
                {LOCAL_ARCHITECTURES[0].title}
              </h3>

              <p className="text-sm text-[#5D6B78] leading-relaxed">
                {LOCAL_ARCHITECTURES[0].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#287A58] shrink-0" />
              <span>TPO heat-welded seams & ISO insulation boards</span>
            </div>
          </div>

          {/* Card 2: SF Victorians & Row Houses */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#071B2D] text-[#F5C52E] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>

              <div className="inline-block text-xs font-bold text-[#287A58] uppercase tracking-wide">
                {LOCAL_ARCHITECTURES[1].badge}
              </div>

              <h3 className="text-xl font-bold font-heading text-[#071B2D]">
                {LOCAL_ARCHITECTURES[1].title}
              </h3>

              <p className="text-sm text-[#5D6B78] leading-relaxed">
                {LOCAL_ARCHITECTURES[1].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#287A58] shrink-0" />
              <span>Specialized staging & steep-pitch safety equipment</span>
            </div>
          </div>

          {/* Card 3: Hillside Homes in Fire Zones */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#071B2D] text-[#F5C52E] flex items-center justify-center">
                <Mountain className="w-6 h-6" />
              </div>

              <div className="inline-block text-xs font-bold text-[#287A58] uppercase tracking-wide">
                {LOCAL_ARCHITECTURES[2].badge}
              </div>

              <h3 className="text-xl font-bold font-heading text-[#071B2D]">
                {LOCAL_ARCHITECTURES[2].title}
              </h3>

              <p className="text-sm text-[#5D6B78] leading-relaxed">
                {LOCAL_ARCHITECTURES[2].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#287A58] shrink-0" />
              <span>Class A assemblies & ember-resistant vent guards</span>
            </div>
          </div>
        </div>

        {/* Horizontal Weather Information Band */}
        <div className="bg-[#071B2D] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F5C52E] mb-4">
            Bay Area Microclimate Roofing Factors
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {/* Winter Rain and Fog */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#102F49] text-[#F5C52E] flex items-center justify-center shrink-0">
                <CloudRain className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold font-heading text-white">
                  {WEATHER_CONDITIONS[0].title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {WEATHER_CONDITIONS[0].description}
                </p>
              </div>
            </div>

            {/* Summer Heat Inland */}
            <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-8">
              <div className="w-11 h-11 rounded-xl bg-[#102F49] text-[#F5C52E] flex items-center justify-center shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-bold font-heading text-white">
                  {WEATHER_CONDITIONS[1].title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {WEATHER_CONDITIONS[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
