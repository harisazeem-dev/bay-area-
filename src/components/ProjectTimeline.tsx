import React from 'react';
import { PROJECT_JOURNEY_STEPS } from '../data/roofingData';
import { ClipboardList, Search, FileSpreadsheet, CheckCircle } from 'lucide-react';

const stepIcons = [ClipboardList, Search, FileSpreadsheet, CheckCircle];

export const ProjectTimeline: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F5F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B2D]">
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
            <span>HOW A JOB WORKS</span>
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071B2D] tracking-tight">
            Local Roofers for Bay Area Homes
          </h2>

          <p className="text-base sm:text-lg text-[#5D6B78] leading-relaxed">
            Bay Area roofing is not one-size-fits-all. Fog along the Sunset District, winter rain, older residential construction, and hillside fire exposure can all affect the right roofing approach. We account for local conditions and applicable requirements, then put the proposed work in writing.
          </p>
        </div>

        {/* 4-Step Horizontal Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROJECT_JOURNEY_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle;
            return (
              <div 
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between relative z-10"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-full bg-[#071B2D] text-[#F5C52E] flex items-center justify-center font-heading font-extrabold text-base shadow">
                      {step.step}
                    </div>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#071B2D] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5D6B78] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#287A58]">
                  Step {step.step} of 4
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
