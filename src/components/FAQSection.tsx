import React, { useState } from 'react';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import { FAQ_DATA, COMPANY_DETAILS } from '../data/roofingData';

interface FAQSectionProps {
  onQuoteClick: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onQuoteClick }) => {
  // Track open item index; default first question open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B2D]">
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
            <span>FAQ</span>
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071B2D] tracking-tight">
            Questions Homeowners Ask
          </h2>

          <p className="text-base sm:text-lg text-[#5D6B78] leading-relaxed max-w-2xl mx-auto">
            Straightforward answers to common roofing questions. Your inspection and written estimate will address the specifics of your property.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-[#071B2D] bg-[#F5F7F8] shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C52E] rounded-2xl cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold font-heading text-[#071B2D] pr-2">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#071B2D] text-[#F5C52E] rotate-180' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#5D6B78] leading-relaxed animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final FAQ CTA */}
        <div className="mt-14 text-center space-y-4">
          <div className="text-base font-bold text-[#071B2D]">
            Still Have Questions?
          </div>
          <button
            onClick={onQuoteClick}
            type="button"
            className="h-12 px-8 rounded-full bg-[#F5C52E] hover:bg-[#FFD653] text-[#071B2D] font-bold text-base shadow-md transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Still Have Questions? Get Free Roof Bids.</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="text-xs text-[#5D6B78]">
            We'll review your roof slope, access, and materials with zero sales pressure.
          </div>
        </div>

      </div>
    </section>
  );
};
