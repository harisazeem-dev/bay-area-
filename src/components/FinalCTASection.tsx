import React from 'react';
import { ArrowRight, CheckCircle2, MapPin, Shield, Award } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/roofingData';

interface FinalCTASectionProps {
  onQuoteClick: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onQuoteClick }) => {
  const scrollToHowItWorks = () => {
    const el = document.querySelector('#how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#071B2D] text-white overflow-hidden py-20 sm:py-28">
      {/* Background Photography with Deep Navy Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/modern_california_dusk_1792187146460.jpg"
          alt="Northern California architectural residence with finished roof at dusk"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D] via-[#071B2D]/90 to-[#071B2D]/75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5C52E]">
              <span className="w-6 h-0.5 bg-[#F5C52E]" />
              <span>YOUR ROOF, YOUR STREET, YOUR CALL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Protect Your Home With a Clear Roofing Plan.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Leaks do not wait for a convenient week. Tell us what is happening with your roof, and we'll arrange a visit in your part of the Bay Area.
            </p>

            {/* 3 Short Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F5C52E] shrink-0" />
                <span>Free written bid</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F5C52E] shrink-0" />
                <span>Clear project pricing</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F5C52E] shrink-0" />
                <span>One point of contact</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onQuoteClick}
                type="button"
                className="h-13 px-8 rounded-full bg-[#F5C52E] hover:bg-[#FFD653] text-[#071B2D] font-bold text-base shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{COMPANY_DETAILS.primaryCtaText}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={scrollToHowItWorks}
                type="button"
                className="h-13 px-6 rounded-full border border-slate-600 hover:border-slate-400 text-white hover:text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Learn How It Works</span>
              </button>
            </div>
          </div>

          {/* Right Column: Verified Business Credentials Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B263D]/95 backdrop-blur-md rounded-2xl p-7 border border-slate-700/80 shadow-2xl space-y-5">
            <div className="flex items-center gap-3 border-b border-slate-700/70 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#102F49] text-[#F5C52E] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-extrabold text-base text-white">
                  {COMPANY_DETAILS.name}
                </div>
                <div className="text-xs text-[#F5C52E] font-medium">
                  CA License #{COMPANY_DETAILS.licenseNumber}
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5C52E] shrink-0 mt-0.5" />
                <a
                  href={COMPANY_DETAILS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline underline-offset-2 leading-relaxed"
                >
                  {COMPANY_DETAILS.address}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#F5C52E] shrink-0 mt-0.5" />
                <span>
                  Licensed, bonded, and insured C-39 Roofing Contractor serving all nine Bay Area counties.
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-700/70">
              <button
                onClick={onQuoteClick}
                type="button"
                className="w-full py-2.5 rounded-xl bg-[#102F49] hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-colors text-center"
              >
                Arrange In-Person Roof Walk
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
