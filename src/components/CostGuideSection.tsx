import React from 'react';
import { ArrowRight, Info, AlertTriangle, ShieldCheck, DollarSign } from 'lucide-react';
import { COST_COMPARISON_TABLE, COST_FACTORS, COMPANY_DETAILS } from '../data/roofingData';

interface CostGuideSectionProps {
  onQuoteClick: () => void;
}

export const CostGuideSection: React.FC<CostGuideSectionProps> = ({ onQuoteClick }) => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F5F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B2D]">
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
            <span>ROOFING COSTS</span>
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071B2D] tracking-tight">
            How Much Does a Roof Cost in the Bay Area?
          </h2>

          <p className="text-base sm:text-lg text-[#5D6B78] leading-relaxed">
            Transparent guide figures and material comparisons to help you understand realistic project investment ranges.
          </p>
        </div>

        {/* Featured Price Range Panel */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5C52E]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Price Highlight */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-2 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#287A58] inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Typical Project Range</span>
              </span>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#071B2D] tracking-tight tabular-nums">
                $15,000–$35,000
              </div>
              <div className="text-xs font-semibold text-slate-500 pt-1">
                Typical shingle roof replacement range for a Bay Area home, based on the supplied 2026 guide.
              </div>
            </div>

            {/* Right: Explanation & Context */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xl font-bold font-heading text-[#071B2D]">
                Understanding What Shapes Your Final Investment
              </h4>
              <p className="text-sm text-[#5D6B78] leading-relaxed">
                Your actual price depends on roof size, material selection, decking condition, municipal permit fees, architectural complexity, and applicable fire-zone requirements. Metal and tile typically have different pricing from asphalt shingles, and flat roofs use dedicated single-ply systems.
              </p>
              <div className="p-3.5 bg-[#F5F7F8] rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
                <Info className="w-4 h-4 text-[#071B2D] shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> Figures shown are indicative guide ranges rather than guaranteed fixed quotes. Your complimentary in-person inspection confirms exact squares, wood repair scope, and city permit fees.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Pricing Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden mb-16">
          <div className="p-6 bg-[#071B2D] text-white flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold font-heading text-white">
                Roofing Material Comparison Guide
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Approximate installed cost per square foot for residential roofing systems in Northern California.
              </p>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-[#071B2D] uppercase tracking-wider">
                  <th className="py-4 px-6">Roof Type</th>
                  <th className="py-4 px-6">Indicative Cost / Sq. Ft.</th>
                  <th className="py-4 px-6">Typical Lifespan</th>
                  <th className="py-4 px-6">Fire Rating</th>
                  <th className="py-4 px-6">Practical Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COST_COMPARISON_TABLE.map((row) => (
                  <tr key={row.roofType} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#071B2D]">
                      {row.roofType}
                    </td>
                    <td className="py-4 px-6 font-bold text-[#287A58] text-base tabular-nums">
                      {row.pricePerSqFt}
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-medium tabular-nums">
                      {row.lifespan}
                    </td>
                    <td className="py-4 px-6 text-xs font-semibold text-slate-700">
                      <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">
                        {row.fireRating}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-xs text-[#5D6B78] max-w-xs leading-relaxed">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden divide-y divide-slate-200">
            {COST_COMPARISON_TABLE.map((row) => (
              <div key={row.roofType} className="p-5 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-bold text-base text-[#071B2D]">{row.roofType}</h4>
                  <span className="font-bold text-[#287A58] text-lg tabular-nums shrink-0">
                    {row.pricePerSqFt}
                  </span>
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-3">
                  <span>Lifespan: <strong>{row.lifespan}</strong></span>
                  <span>·</span>
                  <span>{row.fireRating}</span>
                </div>
                <p className="text-xs text-[#5D6B78] leading-relaxed pt-1">
                  {row.notes}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 text-center">
            Supplied figures are 2026 guide values and will be confirmed based on your exact roof pitch, access, and city code.
          </div>
        </div>

        {/* Four Factors That Can Change the Final Bill */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-[#071B2D]">
              Four Factors That Can Change the Final Bill
            </h3>
            <p className="text-xs text-[#5D6B78] mt-1">
              Why an in-person roof walk is always required before signing a contract.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COST_FACTORS.map((factor, index) => (
              <div 
                key={factor.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#071B2D] text-[#F5C52E] font-bold text-xs flex items-center justify-center">
                    0{index + 1}
                  </div>
                  <h4 className="font-bold font-heading text-base text-[#071B2D]">
                    {factor.title}
                  </h4>
                  <p className="text-xs text-[#5D6B78] leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onQuoteClick}
            type="button"
            className="h-12 px-8 rounded-full bg-[#F5C52E] hover:bg-[#FFD653] text-[#071B2D] font-bold text-base shadow-md transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Get a Written Estimate for Your Roof</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
