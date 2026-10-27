import React from 'react';
import { ExternalLink, ShieldAlert, Award, FileCheck, CheckCircle2, Shield, CalendarCheck, Sparkles, UserCheck } from 'lucide-react';
import { WHY_CHOOSE_US_REASONS, COMPANY_DETAILS } from '../data/roofingData';

const reasonIcons = [Award, FileCheck, Shield, CheckCircle2, UserCheck, Sparkles];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#071B2D] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(245, 197, 46, 0.4) 0%, transparent 60%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5C52E]">
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
            <span>WHY CHOOSE US</span>
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            A Direct Contractor, Not a Middleman.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We do the work. We write your bid. One team from inspection through cleanup.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {WHY_CHOOSE_US_REASONS.map((reason, index) => {
            const Icon = reasonIcons[index] || CheckCircle2;
            return (
              <div
                key={reason.number}
                className="bg-[#0B263D] rounded-2xl p-7 border border-[#102F49] hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#102F49] text-[#F5C52E] flex items-center justify-center group-hover:bg-[#F5C52E] group-hover:text-[#071B2D] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-heading font-extrabold text-xs text-slate-500">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contrasting Light Card: Protect Your Property: Know What to Check */}
        <div className="bg-white text-[#293847] rounded-2xl p-7 sm:p-9 shadow-2xl border border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#287A58]">
                <ShieldAlert className="w-4 h-4 text-[#287A58]" />
                <span>Consumer Protection Guidance</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#071B2D] tracking-tight">
                Protect Your Property: Know What to Check.
              </h3>

              <p className="text-sm text-[#5D6B78] leading-relaxed">
                Before hiring any roofing professional in Northern California, protect your investment by confirming these critical safeguards:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-[#071B2D] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287A58] shrink-0" />
                  <span>Verify active C-39 contractor license status</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287A58] shrink-0" />
                  <span>Request a written, fully itemized bid</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287A58] shrink-0" />
                  <span>Confirm which municipal permits are required</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287A58] shrink-0" />
                  <span>Obtain labor and material warranty in writing</span>
                </li>
                <li className="flex items-center gap-2 sm:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287A58] shrink-0" />
                  <span>Review statutory deposit limits ($1,000 / 10%) & lien release terms</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F7F8] rounded-xl p-5 border border-slate-200 lg:max-w-xs w-full text-center space-y-3 shrink-0">
              <div className="text-xs text-[#5D6B78]">
                California homeowners can independently verify any contractor through the state board:
              </div>
              <a
                href={COMPANY_DETAILS.cslbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 px-4 rounded-xl bg-[#071B2D] hover:bg-[#0B263D] text-[#F5C52E] font-bold text-xs inline-flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>Verify on CSLB.ca.gov</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="text-[11px] text-slate-500">
                Bay Area Roof Master · CA Lic #{COMPANY_DETAILS.licenseNumber}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
