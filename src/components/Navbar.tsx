import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shield, Award } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/roofingData';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key handler for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Pricing Guide', href: '#pricing' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Standards & Permits', href: '#safety-standards' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-all duration-200 border-b ${
        isScrolled ? 'border-slate-200 shadow-md py-3' : 'border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Left: Brand Logo */}
        <a
          href="#"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C52E] rounded-md transition-opacity hover:opacity-95"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Logo variant="light" size="md" showTagline={false} />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#293847]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-[#293847] hover:text-[#071B2D] relative py-1 transition-colors whitespace-nowrap focus:outline-none focus-visible:text-[#071B2D] focus-visible:underline"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Gold CTA button */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <button
            onClick={onQuoteClick}
            type="button"
            className="h-11 px-6 rounded-full bg-[#F5C52E] hover:bg-[#FFD653] text-[#071B2D] font-bold text-sm shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071B2D] focus-visible:ring-offset-2 flex items-center gap-2 cursor-pointer"
          >
            <span>{COMPANY_DETAILS.primaryCtaText}</span>
            <ArrowRight className="w-4 h-4 text-[#071B2D]" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C52E]"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[105px] bottom-0 bg-white/95 backdrop-blur-md z-50 border-t border-slate-200 overflow-y-auto px-6 py-8 flex flex-col justify-between shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left py-3 text-lg font-bold text-[#071B2D] hover:text-[#F5C52E] border-b border-slate-100 flex items-center justify-between transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                type="button"
                className="w-full h-12 rounded-full bg-[#F5C52E] hover:bg-[#FFD653] text-[#071B2D] font-bold text-base shadow-md flex items-center justify-center gap-2"
              >
                <span>{COMPANY_DETAILS.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Footer Trust Summary */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-[#5D6B78] space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#F5C52E]" />
              <span className="font-semibold text-[#071B2D]">CA Contractor License #1014432</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#F5C52E]" />
              <span>Free Written Estimates · Permit Coordination Included</span>
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              4411 Geary Blvd, Suite 301, San Francisco, CA 94118
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
