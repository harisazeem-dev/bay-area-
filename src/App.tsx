/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { ContractorIntro } from './components/ContractorIntro';
import { ServicesSection } from './components/ServicesSection';
import { LocalArchitectureSection } from './components/LocalArchitectureSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { ProjectTimeline } from './components/ProjectTimeline';
import { WarningSignsSection } from './components/WarningSignsSection';
import { CostGuideSection } from './components/CostGuideSection';
import { EstimateChecklist } from './components/EstimateChecklist';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { SafetyStandardsSection } from './components/SafetyStandardsSection';
import { InsuranceSection } from './components/InsuranceSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { PrivacyModal, TermsModal, OptOutModal, CallbackModal } from './components/LegalModals';

export default function App() {
  // Modal states
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [optOutOpen, setOptOutOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);

  // Smooth scroll to quote form
  const scrollToQuoteForm = () => {
    const el = document.getElementById('quote-form-container') || document.querySelector('form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const firstInput = el.querySelector('input') as HTMLInputElement | null;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 600);
      }
    }
  };

  const handleSelectService = (serviceId: string) => {
    scrollToQuoteForm();
    const select = document.getElementById('serviceType') as HTMLSelectElement | null;
    if (select) {
      select.value = serviceId;
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  const handleZipVerified = (zip: string) => {
    scrollToQuoteForm();
    const zipInput = document.getElementById('zipCode') as HTMLInputElement | null;
    if (zipInput) {
      zipInput.value = zip;
      zipInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7F8] font-body text-[#293847] selection:bg-[#F5C52E] selection:text-[#071B2D]">
      {/* 1 & 2. Announcement Bar */}
      <AnnouncementBar onCallbackClick={() => setCallbackOpen(true)} />

      {/* 3. Sticky Main Navigation Header */}
      <Navbar onQuoteClick={scrollToQuoteForm} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 4. Hero Section with Free Bid Quote Form */}
        <HeroSection 
          onQuoteClick={scrollToQuoteForm} 
          onOpenPrivacy={() => setPrivacyOpen(true)} 
        />

        {/* 5. Trust and Credibility Strip */}
        <TrustStrip />

        {/* 6. Direct Contractor Experience Narrative */}
        <ContractorIntro onQuoteClick={scrollToQuoteForm} />

        {/* 7. Roofing Services for Bay Area Homes */}
        <ServicesSection 
          onSelectService={handleSelectService} 
          onQuoteClick={scrollToQuoteForm} 
        />

        {/* 8. Local Architecture and Weather Conditions */}
        <LocalArchitectureSection />

        {/* 9. Why Choose Bay Area Roof Master */}
        <WhyChooseUs />

        {/* 10. How It Works — Three-Phase Process */}
        <ProcessSection onQuoteClick={scrollToQuoteForm} />

        {/* 11. Local Roofing Expertise & Project Journey */}
        <ProjectTimeline />

        {/* 12. Roof Warning Signs */}
        <WarningSignsSection onQuoteClick={scrollToQuoteForm} />

        {/* 13. Roofing Cost Guide & Pricing Table */}
        <CostGuideSection onQuoteClick={scrollToQuoteForm} />

        {/* 14. What Every Written Estimate Includes */}
        <EstimateChecklist />

        {/* 15. Service Areas Across the Nine Bay Area Counties */}
        <ServiceAreasSection 
          onZipVerified={handleZipVerified} 
          onQuoteClick={scrollToQuoteForm} 
        />

        {/* 16. Safety, Standards, Permits & Reliability */}
        <SafetyStandardsSection onQuoteClick={scrollToQuoteForm} />

        {/* 17. Roof Age and Insurance Information */}
        <InsuranceSection onQuoteClick={scrollToQuoteForm} />

        {/* 18. Final High-Contrast Closing Conversion CTA */}
        <FinalCTASection onQuoteClick={scrollToQuoteForm} />

        {/* 19. Frequently Asked Questions */}
        <FAQSection onQuoteClick={scrollToQuoteForm} />
      </main>

      {/* 20. Professional 4-Column Footer */}
      <Footer
        onQuoteClick={scrollToQuoteForm}
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenOptOut={() => setOptOutOpen(true)}
      />

      {/* 21. Accessible Legal & Interactive Modals */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
      <OptOutModal isOpen={optOutOpen} onClose={() => setOptOutOpen(false)} />
      <CallbackModal isOpen={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </div>
  );
}
