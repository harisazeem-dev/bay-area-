import React from 'react';
import { MapPin, Shield, ArrowRight, ExternalLink, Award } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/roofingData';

interface FooterProps {
  onQuoteClick: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenOptOut: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onQuoteClick,
  onOpenPrivacy,
  onOpenTerms,
  onOpenOptOut
}) => {
  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051422] text-slate-300 border-t border-[#102F49] pt-16 pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="md" />

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Roof repair, replacement, and inspection for homes across the nine-county Bay Area. Direct contractor experience—the person who walks your roof writes your bid.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F5C52E] shrink-0 mt-0.5" />
                <a
                  href={COMPANY_DETAILS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_DETAILS.address}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#F5C52E] shrink-0" />
                <span>CA Contractor License #{COMPANY_DETAILS.licenseNumber} (C-39)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onQuoteClick}
                type="button"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F5C52E] hover:text-[#FFD653] transition-colors"
              >
                <span>Get Free Roof Bids →</span>
              </button>
            </div>
          </div>

          {/* Column 2: Services (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Roofing Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-white transition-colors text-left">
                  Roof Replacement (Complete System)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-white transition-colors text-left">
                  Roof Repair & Shingle Fixes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-white transition-colors text-left">
                  Emergency Roof Leak Repair
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-white transition-colors text-left">
                  Comprehensive Roof Inspections
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-white transition-colors text-left">
                  Fire-Resistant WUI Class A Roofing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-white transition-colors text-left">
                  Gutters, Downspouts & Fascia
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Nine Bay Area Counties
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-slate-300">
              <button onClick={() => scrollTo('#service-areas')} className="hover:text-white transition-colors text-left">
                San Francisco
              </button>
              <button onClick={() => scrollTo('#service-areas')} className="hover:text-white transition-colors text-left">
                San Mateo
              </button>
              <button onClick={() => scrollTo('#service-areas')} className="hover:text-white transition-colors text-left">
                Santa Clara
              </button>
              <button onClick={() => scrollTo('#service-areas')} className="hover:text-white transition-colors text-left">
                Alameda
              </button>
              <button onClick={() => scrollTo('#service-areas')} className="hover:text-white transition-colors text-left">
                Contra Costa
              </button>
              <button onClick={() => scrollTo('#service-areas')} className="hover:text-white transition-colors text-left">
                Marin County
              </button>
              <button onClick={() => scrollTo('#service-areas')} className="hover:text-white transition-colors text-left">
                Sonoma County
              </button>
              <button onClick={() => scrollTo('#service-areas')} className="hover:text-white transition-colors text-left">
                Napa County
              </button>
              <button onClick={() => scrollTo('#service-areas')} className="hover:text-white transition-colors text-left col-span-2">
                Solano County
              </button>
            </div>
          </div>

          {/* Column 4: Standards & Company (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Company & Standards
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => scrollTo('#how-it-works')} className="hover:text-white transition-colors text-left">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#pricing')} className="hover:text-white transition-colors text-left">
                  Cost Guide 2026
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#safety-standards')} className="hover:text-white transition-colors text-left">
                  Safety & Permits
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#faq')} className="hover:text-white transition-colors text-left">
                  Homeowner FAQ
                </button>
              </li>
              <li>
                <a
                  href={COMPANY_DETAILS.cslbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>CSLB Verification</span>
                  <ExternalLink className="w-3 h-3 text-[#F5C52E]" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Bay Area Roof Master. All rights reserved. CA License #1014432.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              type="button"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              type="button"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <button
              onClick={onOpenOptOut}
              type="button"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Do Not Sell or Share My Personal Information
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
