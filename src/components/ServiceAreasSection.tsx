import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, ArrowRight, Shield, Building, AlertCircle } from 'lucide-react';
import { COUNTY_DATA, COMPANY_DETAILS } from '../data/roofingData';

interface ServiceAreasSectionProps {
  onZipVerified: (zip: string) => void;
  onQuoteClick: () => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({
  onZipVerified,
  onQuoteClick
}) => {
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState<{
    status: 'idle' | 'matched' | 'outside' | 'invalid';
    countyName?: string;
    message?: string;
  }>({ status: 'idle' });

  const handleCheckZip = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();

    if (!cleanZip || cleanZip.length !== 5 || !/^\d{5}$/.test(cleanZip)) {
      setZipResult({
        status: 'invalid',
        message: 'Please enter a valid 5-digit US ZIP code.'
      });
      return;
    }

    // Check prefix match against 9 Bay Area counties
    const prefix = cleanZip.substring(0, 3);
    const matched = COUNTY_DATA.find(c => c.zipPrefixes.includes(prefix));

    if (matched || (cleanZip.startsWith('94') || cleanZip.startsWith('950') || cleanZip.startsWith('951') || cleanZip.startsWith('954'))) {
      const county = matched ? matched.name : 'Nine-County Bay Area';
      setZipResult({
        status: 'matched',
        countyName: county,
        message: `Great news! ZIP ${cleanZip} is in our active service area for ${county}. We provide free written inspections and permit coordination here.`
      });
      onZipVerified(cleanZip);
    } else {
      setZipResult({
        status: 'outside',
        message: `ZIP ${cleanZip} appears to be outside our standard nine-county territory. Submit a request and our dispatch team will confirm if we can accommodate your project.`
      });
    }
  };

  return (
    <section id="service-areas" className="py-20 sm:py-28 bg-[#F5F7F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071B2D]">
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
            <span>SERVICE AREAS</span>
            <span className="w-6 h-0.5 bg-[#F5C52E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#071B2D] tracking-tight">
            Roofing Across the Nine-County Bay Area
          </h2>

          <p className="text-base sm:text-lg text-[#5D6B78] leading-relaxed">
            We serve homeowners across the Bay Area, with roofing plans tailored to local architecture, weather exposure, permitting requirements, and applicable fire-zone conditions.
          </p>

          {/* Interactive ZIP Code Checker Bar */}
          <div className="pt-4 max-w-xl mx-auto">
            <form onSubmit={handleCheckZip} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <MapPin className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  maxLength={5}
                  value={zipInput}
                  onChange={(e) => {
                    setZipInput(e.target.value);
                    if (zipResult.status !== 'idle') setZipResult({ status: 'idle' });
                  }}
                  placeholder="Enter your 5-digit ZIP code (e.g. 94118)"
                  className="w-full h-12 pl-11 pr-4 bg-white border border-slate-300 rounded-full text-sm text-[#071B2D] focus:outline-none focus:ring-2 focus:ring-[#071B2D] shadow-sm font-medium"
                />
              </div>

              <button
                type="submit"
                className="h-12 px-6 rounded-full bg-[#071B2D] hover:bg-[#0B263D] text-[#F5C52E] font-bold text-sm transition-all shadow-md shrink-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Check My Service Area</span>
              </button>
            </form>

            {/* ZIP Checker Feedback Message */}
            {zipResult.status === 'matched' && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 text-left flex items-start justify-between gap-3 animate-in fade-in">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Confirmed Coverage:</strong> {zipResult.message}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onQuoteClick}
                  className="shrink-0 text-xs font-bold bg-[#071B2D] text-[#F5C52E] px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Request Bid Now
                </button>
              </div>
            )}

            {zipResult.status === 'outside' && (
              <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 text-left flex items-start gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>{zipResult.message}</div>
              </div>
            )}

            {zipResult.status === 'invalid' && (
              <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 text-left flex items-center gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <div>{zipResult.message}</div>
              </div>
            )}
          </div>
        </div>

        {/* 9 Counties Grid (3x3 on desktop, 2 cols on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUNTY_DATA.map((county) => (
            <div
              key={county.name}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#287A58] uppercase tracking-wide">
                    {county.region}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-slate-100 text-[#071B2D] flex items-center justify-center">
                    <Building className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#071B2D]">
                  {county.name}
                </h3>

                <p className="text-xs text-[#5D6B78] leading-relaxed">
                  {county.description}
                </p>

                <div className="pt-2 text-[11px] text-slate-500">
                  <strong className="text-slate-700">Communities:</strong> {county.cities}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">Permits: {county.permitNotes}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Statement & Regional Graphic Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-center max-w-4xl mx-auto space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-[#071B2D] text-[#F5C52E] mx-auto flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <h4 className="text-lg font-bold font-heading text-[#071B2D]">
            From San Francisco to San Jose and across the North Bay.
          </h4>
          <p className="text-xs sm:text-sm text-[#5D6B78] max-w-2xl mx-auto leading-relaxed">
            Contact us with your address to verify fast scheduling availability. Our roofing crews operate across the entire nine-county region with localized permit and code coordination.
          </p>
          <div className="pt-2">
            <button
              onClick={onQuoteClick}
              type="button"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#071B2D] hover:text-[#0B263D] bg-[#F5C52E] hover:bg-[#FFD653] px-5 py-2.5 rounded-full shadow-sm transition-all"
            >
              <span>Verify My Address & Request Free Bid</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
