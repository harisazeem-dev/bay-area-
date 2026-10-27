import React from 'react';
import { ArrowRight, Droplets, Wind, Layers, Sun, CloudRain, Clock, AlertCircle } from 'lucide-react';
import { WARNING_SIGNS, COMPANY_DETAILS } from '../data/roofingData';

interface WarningSignsSectionProps {
  onQuoteClick: () => void;
}

const signIcons: Record<string, React.ElementType> = {
  'ceiling-stains': Droplets,
  'missing-shingles': Wind,
  'granules-gutters': Layers,
  'daylight-attic': Sun,
  'moss-damp': CloudRain,
  'age-20-plus': Clock,
};

export const WarningSignsSection: React.FC<WarningSignsSectionProps> = ({ onQuoteClick }) => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B2D]">
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
            <span>KNOW THE SIGNS</span>
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071B2D] tracking-tight">
            How Do You Know Your Roof Needs Work?
          </h2>

          <p className="text-base sm:text-lg text-[#5D6B78] leading-relaxed">
            Roof problems often start small. Recognizing early warning signs may help you address damage before it becomes more extensive.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {WARNING_SIGNS.map((sign) => {
            const Icon = signIcons[sign.id] || AlertCircle;
            return (
              <div
                key={sign.id}
                className="bg-[#F5F7F8] rounded-2xl p-7 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white text-[#071B2D] border border-slate-200 flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6 text-[#071B2D]" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#071B2D] mb-2.5">
                    {sign.title}
                  </h3>

                  <p className="text-sm text-[#5D6B78] leading-relaxed">
                    {sign.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-[#5D6B78]">
                  <span className="font-semibold text-[#071B2D]">Risk:</span>
                  <span>{sign.risk}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#0B263D] text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-2xl font-bold font-heading text-white">
              See One of These Signs? Get Your Roof Checked.
            </h4>
            <p className="text-sm text-slate-300">
              Tell us what you've noticed, and we'll arrange an inspection to help you understand the next step.
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
