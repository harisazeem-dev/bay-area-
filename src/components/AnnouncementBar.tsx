import React from 'react';
import { MapPin, PhoneCall, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/roofingData';

interface AnnouncementBarProps {
  onCallbackClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onCallbackClick }) => {
  return (
    <div className="bg-[#071B2D] text-slate-200 border-b border-[#102F49] text-xs font-medium relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4">
        {/* Left: Physical Business Address linking to Google Maps */}
        <div className="flex items-center gap-2 truncate">
          <MapPin className="w-3.5 h-3.5 text-[#F5C52E] shrink-0" aria-hidden="true" />
          <a
            href={COMPANY_DETAILS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors truncate hover:underline"
            title="Open 4411 Geary Blvd in Google Maps"
          >
            <span className="hidden sm:inline">Office: </span>
            <span>{COMPANY_DETAILS.address}</span>
          </a>
        </div>

        {/* Right: Trust credential + Callback CTA */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F5C52E]" aria-hidden="true" />
            <span>CA License #{COMPANY_DETAILS.licenseNumber}</span>
          </div>

          <button
            onClick={onCallbackClick}
            type="button"
            className="inline-flex items-center gap-1.5 text-[#F5C52E] hover:text-[#FFD653] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C52E] rounded px-1"
          >
            <PhoneCall className="w-3 h-3" aria-hidden="true" />
            <span>Request a Free Call Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};
