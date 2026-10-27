import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, MapPin, Award } from 'lucide-react';
import { QuoteForm } from './QuoteForm';
import { COMPANY_DETAILS } from '../data/roofingData';

interface HeroSectionProps {
  onQuoteClick: () => void;
  onOpenPrivacy?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onQuoteClick, onOpenPrivacy }) => {
  const scrollToHowItWorks = () => {
    const el = document.querySelector('#how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#071B2D] text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Subtle radial architectural illumination */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(245, 197, 46, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(16, 47, 73, 0.6) 0%, transparent 60%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Split: Editorial Narrative & Visual on Top, with Form integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Headline, Trust Signals, and Intro (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102F49] border border-slate-700/60 text-[#F5C52E] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Bay Area Roofing Specialists · CA Lic #1014432</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold font-heading tracking-tight leading-[1.12] text-white text-balance">
              Bay Area Roofing Services.{' '}
              <span className="text-slate-100 block sm:inline">Repair, Replacement & Leak Fixes.</span>{' '}
              <span className="text-[#F5C52E] whitespace-nowrap">Built to Last.</span>
            </h1>

            {/* Supporting Paragraphs from Source Content */}
            <div className="space-y-3 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-body">
              <p>
                Our local roofing team handles roof leaks, repairs, inspections, and complete roof replacements for residential properties across all nine Bay Area counties. Whether you're dealing with storm water intrusion, an aging roof, or an insurance renewal audit, we assess your roof's condition and recommend the right solution.
              </p>
              <p className="text-sm sm:text-base text-slate-300">
                We provide detailed roof inspections and clear, itemized written bids so you know exactly what to expect before work begins. From municipal permits to thorough cleanup, we focus on dependable workmanship and transparent communication.
              </p>
            </div>

            {/* 3 Compact Trust Statements */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2 bg-[#0B263D] border border-slate-700/50 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5C52E] shrink-0" />
                <span>Free Written Bids</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0B263D] border border-slate-700/50 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5C52E] shrink-0" />
                <span>Permits Handled</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0B263D] border border-slate-700/50 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5C52E] shrink-0" />
                <span>Warranty in Writing</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onQuoteClick}
                type="button"
                className="h-12 px-7 rounded-full bg-[#F5C52E] hover:bg-[#FFD653] text-[#071B2D] font-bold text-base shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <span>{COMPANY_DETAILS.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToHowItWorks}
                type="button"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-[#F5C52E] transition-colors py-2 px-1"
              >
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4 text-[#F5C52E]" />
              </button>
            </div>

            {/* Hero Image Showcase on Mobile / Tablet */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl mt-6 lg:hidden group">
              <img
                src="/src/assets/images/hero_roof_inspection_1792187127203.jpg"
                alt="Professional licensed roofer inspecting residential architectural shingles in California"
                className="w-full h-72 sm:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 bg-[#071B2D]/90 backdrop-blur-md rounded-xl p-3 border border-slate-700/60 text-xs flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-200 font-medium">
                  <Award className="w-4 h-4 text-[#F5C52E]" />
                  <span>Licensed Contractor #1014432</span>
                </div>
                <span className="text-[#F5C52E] font-bold">Itemized Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Quote Request Form (5 cols on lg) */}
          <div className="lg:col-span-5 w-full" id="quote-form-container">
            <QuoteForm onOpenPrivacy={onOpenPrivacy} />
          </div>

        </div>

        {/* Desktop Featured Visual Panel beneath Hero Split */}
        <div className="hidden lg:block mt-12 relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
          <div className="relative h-80 w-full overflow-hidden">
            <img
              src="/src/assets/images/hero_roof_inspection_1792187127203.jpg"
              alt="Bay Area roofing contractor performing shingle inspection and valley flashing assessment"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
            {/* Dark contrast overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D]/90 via-[#071B2D]/40 to-transparent" />
            
            {/* Integrated Floating Trust Panel */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-[#071B2D]/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#102F49] flex items-center justify-center text-[#F5C52E]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Serving All 9 Bay Area Counties</div>
                  <div className="text-xs text-slate-300">San Francisco, Peninsula, South Bay, East Bay & North Bay</div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-slate-200">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F5C52E]" />
                  <span>Free Written Estimates</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F5C52E]" />
                  <span>Local Code Awareness</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F5C52E]" />
                  <span>One Point of Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
