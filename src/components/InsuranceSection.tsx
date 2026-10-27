import React from 'react';
import { ShieldAlert, ArrowRight, Clock, FileCheck, Layers, AlertCircle, Camera, CheckCircle2 } from 'lucide-react';
import { INSURANCE_TOPICS, COMPANY_DETAILS } from '../data/roofingData';

interface InsuranceSectionProps {
  onQuoteClick: () => void;
}

const topicIcons = [Clock, FileCheck, Layers, ShieldAlert, Camera];

export const InsuranceSection: React.FC<InsuranceSectionProps> = ({ onQuoteClick }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F5F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B2D]">
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
            <span>ROOF AGE & INSURANCE</span>
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071B2D] tracking-tight">
            Could Your Roof's Age Affect Your Home Insurance?
          </h2>

          <p className="text-base sm:text-lg text-[#5D6B78] leading-relaxed">
            Some insurers consider roof age, material, condition, and maintenance when underwriting or renewing a homeowners policy. Requirements vary by insurer and policy.
          </p>
        </div>

        {/* 5 Editorial Information Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {INSURANCE_TOPICS.map((topic, index) => {
            const Icon = topicIcons[index] || AlertCircle;
            return (
              <div
                key={topic.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#071B2D] text-[#F5C52E] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#071B2D]">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5D6B78] leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Quick Inspection Value Card (fills the 6th spot in 3x2 grid) */}
          <div className="bg-[#071B2D] text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5C52E]">
                Proactive Documentation
              </span>
              <h3 className="text-lg font-bold font-heading text-white">
                Need an Inspection Report for Renewal?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If your insurer requested photographic proof of roof condition or roof life expectancy, we provide thorough written inspections detailing decking, flashings, and surface integrity.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onQuoteClick}
                type="button"
                className="w-full h-10 rounded-xl bg-[#F5C52E] hover:bg-[#FFD653] text-[#071B2D] font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow"
              >
                <span>Get Your Roof Checked</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Note */}
        <div className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Important Notice:</strong> Roofing contractor information provided on this website does not constitute insurance underwriting guidelines or legal advice. Policy terms, coverage eligibility, and roof age criteria vary across insurance companies and regional wildfire risk models. Confirm coverage terms and underwriting requirements directly with your licensed insurance representative or policy documentation.
          </div>
        </div>

      </div>
    </section>
  );
};
