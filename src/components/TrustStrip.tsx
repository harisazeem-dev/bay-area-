import React from 'react';
import { FileText, Building2, ShieldCheck, MapPin } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: FileText,
      title: 'Free Written Bids',
      description: 'Itemized pricing with labor, materials, and city permit costs clearly stated.'
    },
    {
      icon: Building2,
      title: 'Permit Handling',
      description: 'We pull required municipal building permits directly with your city or county.'
    },
    {
      icon: ShieldCheck,
      title: 'Written Warranty',
      description: 'Documented coverage detailing manufacturer material and contractor labor terms.'
    },
    {
      icon: MapPin,
      title: 'Nine-County Coverage',
      description: 'From San Francisco to San Jose and across the North Bay, we own the work.'
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-6 sm:py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title} 
                className={`flex items-start gap-3.5 ${
                  index !== 0 ? 'lg:border-l lg:border-slate-100 lg:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#071B2D] text-[#F5C52E] flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-[#071B2D]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5D6B78] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
