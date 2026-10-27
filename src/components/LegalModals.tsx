import React, { useState } from 'react';
import { X, Shield, Lock, CheckCircle2, PhoneCall, Loader2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/roofingData';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#F5C52E]" />
            <h3 className="font-heading font-bold text-lg text-[#071B2D]">Privacy Policy</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          <p className="font-semibold text-slate-800">Effective Date: October 2026</p>
          <p>
            At <strong>{COMPANY_DETAILS.name}</strong>, we respect your privacy. This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website or submit an inquiry for roofing bids, inspections, and repairs.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">1. Information We Collect</h4>
          <p>
            When you complete a quote request or contact form, we collect your name, property address, ZIP code, email address, telephone number, and any notes regarding your roof's condition.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">2. How We Use Your Information</h4>
          <p>
            Your information is used strictly to coordinate roofing inspections, prepare written itemized bids, obtain necessary building permits with municipal departments, and provide customer support. We do not sell your personal information to third-party lead brokers.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">3. California Privacy Rights (CCPA/CPRA)</h4>
          <p>
            California residents have the right to request details on the personal data collected, request deletion of their data, and opt out of any future communications.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">4. Contact Us</h4>
          <p>
            For privacy inquiries, contact us at: <strong>{COMPANY_DETAILS.address}</strong> (License #{COMPANY_DETAILS.licenseNumber}).
          </p>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#071B2D] text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#F5C52E]" />
            <h3 className="font-heading font-bold text-lg text-[#071B2D]">Terms of Use</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          <p className="font-semibold text-slate-800">Effective Date: October 2026</p>
          <p>
            Welcome to the official website of <strong>{COMPANY_DETAILS.name}</strong>. By accessing or using this website, you agree to comply with and be bound by the following Terms of Use.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">1. Licensing & Contractor Services</h4>
          <p>
            {COMPANY_DETAILS.name} is a licensed California C-39 Roofing Contractor (License #{COMPANY_DETAILS.licenseNumber}). Any estimates, bids, or inspections requested via this site are subject to on-site physical evaluation and written contract execution.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">2. Indicative Estimates & Code Requirements</h4>
          <p>
            Pricing figures and cost ranges published on this site are for informational guidance. Actual project costs will be confirmed based on physical roof square footage, pitch, decking integrity, and municipal permit fees.
          </p>
          <h4 className="font-bold text-slate-800 text-sm">3. California Home Improvement Law Compliance</h4>
          <p>
            All executed roofing contracts adhere to California Business and Professions Code section 7159 governing home improvement agreements, deposit statutory limits, and progress payment schedules.
          </p>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#071B2D] text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const OptOutModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [optedOut, setOptedOut] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-heading font-bold text-base text-[#071B2D]">
            Consumer Privacy Preferences
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
          <p className="font-bold text-slate-800">
            Do Not Sell or Share My Personal Information
          </p>
          <p>
            Under the California Consumer Privacy Act (CCPA/CPRA), California residents have the right to opt out of the sale or sharing of their personal information.
          </p>
          <p className="text-xs bg-slate-100 p-3 rounded-lg text-slate-700">
            <strong>Notice:</strong> {COMPANY_DETAILS.name} does NOT sell or rent customer data to third parties. Customer contact details are used exclusively to arrange your requested roofing inspection.
          </p>

          {optedOut ? (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Your privacy preference has been saved for this browser.</span>
            </div>
          ) : (
            <button
              onClick={() => setOptedOut(true)}
              type="button"
              className="w-full py-2.5 rounded-lg bg-[#071B2D] text-[#F5C52E] font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              Record My Opt-Out Preference
            </button>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const CallbackModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [preferredTime, setPreferredTime] = useState('morning');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.replace(/\D/g, '').length < 10) return;

    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-5 h-5 text-[#F5C52E]" />
            <h3 className="font-heading font-bold text-lg text-[#071B2D]">Request a Free Call Back</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-lg text-[#071B2D]">Call Back Requested!</h4>
              <p className="text-xs text-slate-600">
                A licensed contractor from Bay Area Roof Master will reach out to <strong>{phone}</strong> during the {preferredTime}.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-full bg-[#071B2D] text-white text-xs font-bold"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600">
                Leave your number and preferred time. An estimator will call you back directly—no automated telemarketers.
              </p>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. David Miller"
                  className="w-full h-10 px-3 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#071B2D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="(415) 555-0199"
                  className="w-full h-10 px-3 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#071B2D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">Preferred Time to Call</label>
                <select
                  value={preferredTime}
                  onChange={e => setPreferredTime(e.target.value)}
                  className="w-full h-10 px-3 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#071B2D]"
                >
                  <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM – 5:00 PM)</option>
                  <option value="anytime">Anytime during business hours</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-full bg-[#F5C52E] hover:bg-[#FFD653] text-[#071B2D] font-bold text-sm shadow transition-all flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Request Call Back</span>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
