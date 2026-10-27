import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Wrench, AlertTriangle, Search, Flame, Droplets } from 'lucide-react';
import { SERVICES_DATA, COMPANY_DETAILS, ServiceItem } from '../data/roofingData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onQuoteClick: () => void;
}

const serviceIcons: Record<string, React.ElementType> = {
  replacement: Shield,
  repair: Wrench,
  'leak-repair': AlertTriangle,
  inspection: Search,
  'fire-resistant': Flame,
  gutters: Droplets,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onQuoteClick }) => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B2D]">
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
            <span>OUR SERVICES</span>
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071B2D] tracking-tight">
            Roofing Services for Bay Area Homes
          </h2>

          <p className="text-base sm:text-lg text-[#5D6B78] leading-relaxed">
            Most homeowners call with a leak, an aging roof, or an insurance letter. Choose the service that fits your situation, and we'll help you understand the next step.
          </p>
        </div>

        {/* 6 Services Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const Icon = serviceIcons[service.id] || Shield;
            return (
              <div
                key={service.id}
                className="group bg-[#F5F7F8] hover:bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                  <img
                    src={service.image}
                    alt={`${service.title} for Bay Area homes`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-3.5 left-3.5 bg-[#071B2D]/90 backdrop-blur-sm text-[#F5C52E] text-[11px] font-bold px-3 py-1 rounded-full border border-slate-700/60 flex items-center gap-1.5 shadow-sm">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{service.badge}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#071B2D] group-hover:text-[#0B263D] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#287A58] mt-0.5">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-[#5D6B78] mt-2.5 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="pt-2 border-t border-slate-200/80 space-y-2">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#293847]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#287A58] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button Action */}
                  <div className="pt-3">
                    <button
                      onClick={() => {
                        onSelectService(service.id);
                        onQuoteClick();
                      }}
                      type="button"
                      className="w-full h-10 rounded-xl bg-white group-hover:bg-[#071B2D] text-[#071B2D] group-hover:text-white border border-slate-300 group-hover:border-[#071B2D] font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Request Free Bid on {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F5C52E]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 text-center space-y-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onQuoteClick}
              type="button"
              className="h-12 px-8 rounded-full bg-[#F5C52E] hover:bg-[#FFD653] text-[#071B2D] font-bold text-base shadow-md transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>{COMPANY_DETAILS.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#pricing"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#071B2D] hover:text-[#0B263D] underline underline-offset-4 px-3 py-2"
            >
              <span>Explore Pricing & Cost Guide</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-[#5D6B78]">
            Every estimate is free, written, itemized, and includes permit costs for your municipality.
          </p>
        </div>

      </div>
    </section>
  );
};
