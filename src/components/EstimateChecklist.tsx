import React from 'react';
import { CheckCircle2, FileText, Shield, DollarSign, Info } from 'lucide-react';
import { ESTIMATE_CHECKLIST, COMPANY_DETAILS } from '../data/roofingData';

export const EstimateChecklist: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B2D]">
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
            <span>TRANSPARENT SPECIFICATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071B2D] tracking-tight">
            Know What You're Paying For.
          </h2>

          <p className="text-base sm:text-lg text-[#5D6B78] leading-relaxed">
            Every estimate should explain the proposed work and its costs before you commit. We leave zero room for ambiguity.
          </p>
        </div>

        {/* 2-Column Grid: Visual Sample Estimate on Left, 8-Item Checklist on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Professionally Formatted Estimate Mockup Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#F5F7F8] rounded-2xl p-6 sm:p-7 border border-slate-300 shadow-lg relative">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Sample Contractor Proposal
                </span>
                <div className="font-heading font-extrabold text-base text-[#071B2D]">
                  Bay Area Roof Master
                </div>
                <div className="text-[11px] text-slate-500">
                  CA License #1014432 · 4411 Geary Blvd, SF
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-[#071B2D] text-[#F5C52E] flex items-center justify-center font-bold text-xs">
                EST
              </div>
            </div>

            {/* Itemized Line Items Mockup */}
            <div className="space-y-3 text-xs">
              <div className="bg-white rounded-lg p-3 border border-slate-200 flex justify-between items-start">
                <div>
                  <div className="font-bold text-[#071B2D]">01. Tear-Off & Disposal</div>
                  <div className="text-[11px] text-slate-500">Complete strip of existing 1-layer shingles & haul-away</div>
                </div>
                <span className="font-bold text-[#287A58] tabular-nums">Itemized</span>
              </div>

              <div className="bg-white rounded-lg p-3 border border-slate-200 flex justify-between items-start">
                <div>
                  <div className="font-bold text-[#071B2D]">02. Plywood Decking Provision</div>
                  <div className="text-[11px] text-slate-500">Deck inspection; $95 per 4x8 CDX plywood sheet replaced</div>
                </div>
                <span className="font-bold text-[#287A58] tabular-nums">Explicit Rate</span>
              </div>

              <div className="bg-white rounded-lg p-3 border border-slate-200 flex justify-between items-start">
                <div>
                  <div className="font-bold text-[#071B2D]">03. Underlayment & Valley Metal</div>
                  <div className="text-[11px] text-slate-500">Synthetic high-temp underlayment + ice/water shield in valleys</div>
                </div>
                <span className="font-bold text-[#287A58] tabular-nums">Included</span>
              </div>

              <div className="bg-white rounded-lg p-3 border border-slate-200 flex justify-between items-start">
                <div>
                  <div className="font-bold text-[#071B2D]">04. Specified Shingles (Class A)</div>
                  <div className="text-[11px] text-slate-500">CertainTeed Landmark / GAF Timberline HDZ (Named Brand)</div>
                </div>
                <span className="font-bold text-[#287A58] tabular-nums">Brand Named</span>
              </div>

              <div className="bg-white rounded-lg p-3 border border-slate-200 flex justify-between items-start">
                <div>
                  <div className="font-bold text-[#071B2D]">05. City Building Permit Coordination</div>
                  <div className="text-[11px] text-slate-500">Municipal filing, permit fees, & final inspector scheduling</div>
                </div>
                <span className="font-bold text-[#287A58] tabular-nums">Itemized Fee</span>
              </div>

              <div className="bg-white rounded-lg p-3 border border-slate-200 flex justify-between items-start">
                <div>
                  <div className="font-bold text-[#071B2D]">06. Cleanup & Written Warranty</div>
                  <div className="text-[11px] text-slate-500">Full magnetic sweep + documented labor & material warranty</div>
                </div>
                <span className="font-bold text-[#287A58] tabular-nums">Guaranteed</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-[#071B2D] font-bold">
              <span>Deposit Terms:</span>
              <span className="text-[#287A58]">Max $1,000 / 10% per CA Law</span>
            </div>
          </div>

          {/* Right Column: 8-Item Checklist (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ESTIMATE_CHECKLIST.map((item) => (
                <div
                  key={item.number}
                  className="bg-[#F5F7F8] rounded-xl p-4 border border-slate-200/80 flex items-start gap-3.5 hover:border-slate-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#071B2D] text-[#F5C52E] font-extrabold text-xs flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    {item.number}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold font-heading text-[#071B2D]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#5D6B78] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Statutory Compliance Note */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5 mt-6">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong>California Home Improvement Contract Note:</strong> Under California Business and Professions Code section 7159, contracts must include specific consumer notices, statutory deposit limits, and lien release documentation. We adhere strictly to California CSLB guidelines.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
