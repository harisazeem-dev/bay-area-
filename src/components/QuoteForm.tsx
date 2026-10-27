import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/roofingData';

interface QuoteFormProps {
  initialZip?: string;
  onSuccessNotice?: () => void;
  onOpenPrivacy?: () => void;
  className?: string;
}

interface FormState {
  fullName: string;
  zipCode: string;
  phone: string;
  email: string;
  propertyAddress: string;
  roofDetails: string;
  serviceType: string;
}

interface FormErrors {
  fullName?: string;
  zipCode?: string;
  phone?: string;
  email?: string;
  propertyAddress?: string;
  roofDetails?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialZip = '',
  onOpenPrivacy,
  className = ''
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    zipCode: initialZip,
    phone: '',
    email: '',
    propertyAddress: '',
    roofDetails: '',
    serviceType: 'replacement'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  // Sync initialZip if passed from zip checker
  React.useEffect(() => {
    if (initialZip && !formData.zipCode) {
      setFormData(prev => ({ ...prev, zipCode: initialZip }));
    }
  }, [initialZip]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    // US ZIP code validation (5 digits or 5+4)
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required.';
    } else if (!zipRegex.test(formData.zipCode.trim())) {
      newErrors.zipCode = 'Please enter a valid 5-digit US ZIP code.';
    }

    // Phone validation (at least 10 digits)
    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (phoneClean.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.propertyAddress.trim()) {
      newErrors.propertyAddress = 'Property address is required.';
    }

    if (!formData.roofDetails.trim()) {
      newErrors.roofDetails = 'Please provide brief details about your roof.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Configurable submission adapter:
      // In production on Hostinger, this can point to /api/quotes or an endpoint like Formspree / Web3Forms.
      // Here we simulate network dispatch and store locally in state and localStorage.
      await new Promise(resolve => setTimeout(resolve, 800));

      const savedBids = JSON.parse(localStorage.getItem('roofmaster_bids') || '[]');
      savedBids.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        id: `BID-${Date.now()}`
      });
      localStorage.setItem('roofmaster_bids', JSON.stringify(savedBids));

      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    } catch {
      setErrors({ fullName: 'A temporary network issue occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      zipCode: '',
      phone: '',
      email: '',
      propertyAddress: '',
      roofDetails: '',
      serviceType: 'replacement'
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  if (isSubmitted && submittedData) {
    return (
      <div className={`bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 text-center animate-in fade-in duration-300 ${className}`}>
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold font-heading text-[#071B2D] mb-2">
          Bid Request Received!
        </h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          Thank you, <strong className="text-slate-800">{submittedData.fullName}</strong>. A licensed roofing specialist from Bay Area Roof Master will contact you to schedule an in-person roof inspection for <strong className="text-slate-800">{submittedData.propertyAddress}</strong>.
        </p>

        <div className="bg-[#F5F7F8] rounded-xl p-4 text-left text-xs text-slate-700 max-w-md mx-auto mb-6 border border-slate-200">
          <div className="font-semibold text-[#071B2D] border-b border-slate-200 pb-2 mb-2">
            Your Request Summary:
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div><span className="text-slate-500">Service:</span> {submittedData.serviceType.toUpperCase()}</div>
            <div><span className="text-slate-500">ZIP:</span> {submittedData.zipCode}</div>
            <div><span className="text-slate-500">Phone:</span> {submittedData.phone}</div>
            <div><span className="text-slate-500">Email:</span> {submittedData.email}</div>
          </div>
          <div className="mt-2 text-[11px] text-[#287A58] flex items-center gap-1 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Permit coordination & written itemized estimate guaranteed.</span>
          </div>
        </div>

        <button
          onClick={handleReset}
          type="button"
          className="text-xs text-[#071B2D] hover:text-[#0B263D] font-semibold underline underline-offset-4"
        >
          Submit another property request
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 ${className}`}>
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F5C52E] uppercase tracking-wider mb-1">
          <ShieldCheck className="w-4 h-4 text-[#F5C52E]" />
          <span>Zero Obligation · Direct Contractor</span>
        </div>
        <h3 className="text-2xl font-bold font-heading text-[#071B2D] tracking-tight">
          Get Your Free Roof Bid
        </h3>
        <p className="text-[#5D6B78] text-sm mt-1">
          Tell us a little about your roof. We'll contact you to arrange an inspection and prepare a clear, written estimate.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Service Type Selector */}
        <div>
          <label htmlFor="serviceType" className="block text-xs font-semibold text-[#071B2D] mb-1">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full h-11 px-3 text-sm bg-slate-50 border border-slate-300 rounded-lg text-[#293847] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#071B2D] focus:border-transparent transition-all"
          >
            <option value="replacement">Complete Roof Replacement</option>
            <option value="repair">Roof Repair (Shingle / Flashing Damage)</option>
            <option value="leak">Active Leak Investigation & Repair</option>
            <option value="inspection">Comprehensive Roof Inspection & Audit</option>
            <option value="fire-resistant">Fire-Resistant / Class A WUI System</option>
            <option value="gutters">Gutters, Fascia & Drainage</option>
          </select>
        </div>

        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-[#071B2D] mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              autoComplete="name"
              placeholder="e.g. Michael Chang"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full h-11 px-3 text-sm bg-slate-50 border rounded-lg text-[#293847] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#071B2D] transition-all ${
                errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-[#071B2D] mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              placeholder="(415) 555-0192"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full h-11 px-3 text-sm bg-slate-50 border rounded-lg text-[#293847] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#071B2D] transition-all ${
                errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Email & ZIP code */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-xs font-semibold text-[#071B2D] mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="m.chang@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full h-11 px-3 text-sm bg-slate-50 border rounded-lg text-[#293847] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#071B2D] transition-all ${
                errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-xs font-semibold text-[#071B2D] mb-1">
              ZIP Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              autoComplete="postal-code"
              maxLength={10}
              placeholder="94118"
              value={formData.zipCode}
              onChange={handleChange}
              className={`w-full h-11 px-3 text-sm bg-slate-50 border rounded-lg text-[#293847] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#071B2D] transition-all ${
                errors.zipCode ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.zipCode && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.zipCode}
              </p>
            )}
          </div>
        </div>

        {/* Property Address */}
        <div>
          <label htmlFor="propertyAddress" className="block text-xs font-semibold text-[#071B2D] mb-1">
            Property Address in Bay Area <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="propertyAddress"
            name="propertyAddress"
            autoComplete="street-address"
            placeholder="e.g. 1420 8th Ave, San Francisco, CA"
            value={formData.propertyAddress}
            onChange={handleChange}
            className={`w-full h-11 px-3 text-sm bg-slate-50 border rounded-lg text-[#293847] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#071B2D] transition-all ${
              errors.propertyAddress ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
            }`}
          />
          {errors.propertyAddress && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.propertyAddress}
            </p>
          )}
        </div>

        {/* Tell us about your roof */}
        <div>
          <label htmlFor="roofDetails" className="block text-xs font-semibold text-[#071B2D] mb-1">
            Tell Us About Your Roof <span className="text-red-500">*</span>
          </label>
          <textarea
            id="roofDetails"
            name="roofDetails"
            rows={3}
            placeholder="Leak, age of roof, insurance letter, or anything else you know..."
            value={formData.roofDetails}
            onChange={handleChange}
            className={`w-full p-3 text-sm bg-slate-50 border rounded-lg text-[#293847] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#071B2D] transition-all ${
              errors.roofDetails ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
            }`}
          />
          {errors.roofDetails && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.roofDetails}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 rounded-full bg-[#F5C52E] hover:bg-[#FFD653] text-[#071B2D] font-bold text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Preparing Your Request...</span>
            </>
          ) : (
            <>
              <span>{COMPANY_DETAILS.primaryCtaText}</span>
              <ArrowRight className="w-5 h-5 text-[#071B2D]" />
            </>
          )}
        </button>

        {/* Trust & Privacy Notice */}
        <div className="pt-2 flex items-center justify-between text-[11px] text-[#5D6B78]">
          <div className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-slate-400" />
            <span>256-Bit SSL Encrypted</span>
          </div>
          <p>
            Your information is used to respond to your roofing request. See our{' '}
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-[#071B2D] font-medium underline hover:text-[#F5C52E]"
            >
              Privacy Policy
            </button>.
          </p>
        </div>
      </form>
    </div>
  );
};
