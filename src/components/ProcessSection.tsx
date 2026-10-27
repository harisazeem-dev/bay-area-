import React from 'react';
import { ArrowRight, CheckCircle2, Calendar, HardHat, FileCheck } from 'lucide-react';
import { THREE_PHASE_PROCESS, COMPANY_DETAILS } from '../data/roofingData';

interface ProcessSectionProps {
  onQuoteClick: () => void;
}

const phaseIcons = [Calendar, HardHat, FileCheck];

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onQuoteClick }) => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B2D]">
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
            <span>WHAT TO EXPECT</span>
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071B2D] tracking-tight">
            No Surprises, From Inspection to Warranty
          </h2>

          <p className="text-base sm:text-lg text-[#5D6B78] leading-relaxed">
            Every job follows a clear process, so you know what happens before work begins and what to expect when the project is complete.
          </p>
        </div>

        {/* 3-Column Phase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {THREE_PHASE_PROCESS.map((phase, idx) => {
            const Icon = phaseIcons[idx] || Calendar;
            return (
              <div
                key={phase.phase}
                className="bg-[#F5F7F8] rounded-2xl p-7 border border-slate-200/90 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#071B2D] text-[#F5C52E] font-bold text-xs">
                      {phase.phase}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#071B2D] mb-6">
                    {phase.title}
                  </h3>

                  <div className="space-y-4">
                    {phase.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#F5C52E]/30 text-[#071B2D] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                          {sIdx + 1}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#071B2D]">
                            {step.name}
                          </div>
                          <div className="text-xs text-[#5D6B78] mt-0.5 leading-relaxed">
                            {step.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-width Navy and Gold Closing CTA Panel */}
        <div className="bg-[#071B2D] rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Every project includes a written estimate, permit coordination where required, and cleanup.
            </h4>
            <p className="text-sm text-slate-300">
              Direct contractor communication. Inspection of decking, flashing, vents, and roof condition.
            </p>
          </div>

          <button
            onClick={onQuoteClick}
            type="button"
            className="h-12 px-8 rounded-full bg-[#F5C52E] hover:bg-[#FFD653] text-[#071B2D] font-bold text-base shadow-md transition-all transform hover:-translate-y-0.5 shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>{COMPANY_DETAILS.primaryCtaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
