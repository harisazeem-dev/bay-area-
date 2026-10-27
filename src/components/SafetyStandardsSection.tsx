import React from 'react';
import { ShieldCheck, Flame, Scale, Sun, FileText, ArrowRight, Info } from 'lucide-react';
import { SAFETY_STANDARDS, COMPANY_DETAILS } from '../data/roofingData';

interface SafetyStandardsSectionProps {
  onQuoteClick: () => void;
}

const standardIcons = [Flame, Scale, Sun, FileText];

export const SafetyStandardsSection: React.FC<SafetyStandardsSectionProps> = ({ onQuoteClick }) => {
  return (
    <section id="safety-standards" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B2D]">
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
            <span>SAFETY & STANDARDS</span>
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071B2D] tracking-tight">
            Which Rules Can Affect Your Bay Area Roof Job?
          </h2>

          <p className="text-base sm:text-lg text-[#5D6B78] leading-relaxed">
            Local requirements vary. Wildfire exposure, roofing materials, project scope, building characteristics, and city permitting rules can all affect the work. We identify the requirements that apply to your project and explain them in your estimate.
          </p>
        </div>

        {/* 4 Informational Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SAFETY_STANDARDS.map((standard, index) => {
            const Icon = standardIcons[index] || ShieldCheck;
            return (
              <div
                key={standard.id}
                className="bg-[#F5F7F8] rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#071B2D] text-[#F5C52E] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-[#071B2D]">
                        {standard.title}
                      </h3>
                      <span className="text-xs font-semibold text-[#287A58]">
                        {standard.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#5D6B78] leading-relaxed pt-2">
                    {standard.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200 flex items-start gap-2 text-xs text-slate-500">
                  <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{standard.legalNote}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="text-center space-y-4">
          <button
            onClick={onQuoteClick}
            type="button"
            className="h-12 px-8 rounded-full bg-[#F5C52E] hover:bg-[#FFD653] text-[#071B2D] font-bold text-base shadow-md transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>{COMPANY_DETAILS.primaryCtaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="text-xs text-[#5D6B78]">
            We check building codes and local requirements relevant to your specific property prior to starting work.
          </div>
        </div>

      </div>
    </section>
  );
};
