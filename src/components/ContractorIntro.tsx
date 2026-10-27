import React from 'react';
import { ArrowRight, CheckCircle2, Shield, UserCheck, HardHat, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/roofingData';

interface ContractorIntroProps {
  onQuoteClick: () => void;
}

export const ContractorIntro: React.FC<ContractorIntroProps> = ({ onQuoteClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Highlight Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B2D]">
              <span className="w-6 h-0.5 bg-[#F5C52E]" />
              <span>DIRECT CONTRACTOR EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#071B2D] tracking-tight leading-tight">
              Bay Area Roofing Contractors Who Own the Work.
            </h2>

            <div className="space-y-4 text-base text-[#293847] leading-relaxed">
              <p>
                Bay Area Roof Master repairs, replaces, and inspects roofs on homes and small commercial buildings from San Francisco to San Jose and across the North Bay. We are the contractor, so the person who walks your roof is the person who writes your bid.
              </p>
              <p className="text-[#5D6B78]">
                Every job starts with a written, itemized estimate. We pull the permit, check the decking, and account for applicable local building and fire-code requirements. Tell us what is happening with your roof and we'll arrange a visit.
              </p>
            </div>

            {/* Credibility highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#071B2D]">
                <UserCheck className="w-4 h-4 text-[#287A58] shrink-0" />
                <span>No middleman or broker markup</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#071B2D]">
                <HardHat className="w-4 h-4 text-[#287A58] shrink-0" />
                <span>Dedicated full-time roofing crews</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#071B2D]">
                <Shield className="w-4 h-4 text-[#287A58] shrink-0" />
                <span>CA State License #1014432</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#071B2D]">
                <Sparkles className="w-4 h-4 text-[#287A58] shrink-0" />
                <span>Clean magnetic ground sweep daily</span>
              </div>
            </div>

            {/* Highlighted Offer Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F5C52E]" />
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#287A58] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Free Written Bids</span>
                </span>
                <h4 className="text-lg font-bold font-heading text-[#071B2D]">
                  No Obligation. Itemized Pricing, With Permit Costs Shown.
                </h4>
                <p className="text-xs text-[#5D6B78]">
                  Direct contractor walkthrough, plywood decking check, and clear timeline.
                </p>
              </div>

              <button
                onClick={onQuoteClick}
                type="button"
                className="h-11 px-6 rounded-full bg-[#071B2D] hover:bg-[#0B263D] text-[#F5C52E] font-bold text-sm transition-all shadow shrink-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{COMPANY_DETAILS.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Photography Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <img
                src="/src/assets/images/roof_installation_work_1792187145771.jpg"
                alt="Bay Area roofing contractor installing asphalt shingles and metal flashing"
                className="w-full h-[440px] sm:h-[480px] object-cover object-center transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/85 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5C52E] block mb-1">
                  On-Site Craftsmanship
                </span>
                <h3 className="text-base font-bold font-heading text-white leading-snug">
                  "The person who walks your roof is the person who writes your bid."
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Inspecting underlayment, valleys, chimney saddles, and ventilation.
                </p>
              </div>
            </div>

            {/* Subtle credential badge offset */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#071B2D] text-white p-3 rounded-xl shadow-lg border border-slate-700/60 items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F5C52E] text-[#071B2D] flex items-center justify-center font-bold text-xs">
                CA
              </div>
              <div className="text-left">
                <div className="text-xs font-bold leading-tight">License #1014432</div>
                <div className="text-[10px] text-slate-300">Verified Contractor</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
