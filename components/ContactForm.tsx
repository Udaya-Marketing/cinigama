"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/navigation";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    partnerName: "",
    email: "",
    phone: "",
    weddingDate: "",
    location: "",
    weddingType: "Royal Palace",
    eventDuration: "3+ Days (Full Celebration)",
    services: "Both Photography & Cinematic Films",
    budget: "₹6 Lakhs – ₹12 Lakhs",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const weddingTypes = [
    "Royal Palace / Fort",
    "Heritage South Indian",
    "Beach / Coastal Destination",
    "Intimate Soirée / Vineyard",
    "Temple Ceremony",
    "International Destination",
  ];

  const durations = [
    "1 Day (Intimate Ceremony)",
    "2 Days (Standard Wedding)",
    "3+ Days (Full Grand Celebration)",
  ];

  const serviceOptions = [
    "Both Photography & Cinematic Films",
    "Only Wedding Photography",
    "Only Cinematic Films",
    "Pre-Wedding & Engagement Film",
  ];

  const budgetOptions = [
    "₹3 Lakhs – ₹6 Lakhs",
    "₹6 Lakhs – ₹10 Lakhs",
    "₹10 Lakhs – ₹18 Lakhs",
    "₹18 Lakhs+ (Luxury Bespoke)",
  ];

  if (submitted) {
    return (
      <div className="bg-beige/40 p-8 sm:p-14 border border-bordergray text-center max-w-2xl mx-auto my-12 animate-in fade-in duration-500">
        <div className="w-14 h-14 mx-auto rounded-full bg-bronze/15 text-bronze flex items-center justify-center mb-6">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <span className="text-[11px] uppercase tracking-[0.25em] text-bronze block mb-2 font-medium">
          Inquiry Received
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-light mb-4">
          Thank you, {formData.fullName.split(" ")[0] || "there"}.
        </h3>
        <p className="text-warmgray text-sm sm:text-base font-light leading-relaxed mb-8 max-w-md mx-auto">
          We have received your wedding details. Our studio director will review our calendar availability and reach out within 24 hours with a bespoke proposal.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-charcoal text-ivory px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-bronze transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-[0.2em] text-warmgray hover:text-charcoal border-b border-bordergray pb-0.5"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12 sm:space-y-16">
      {/* 01: Couple Names */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        <div className="relative">
          <label className="block text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mb-2">
            Your Name <span className="text-bronze">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Ananya Sharma"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full bg-transparent border-b border-bordergray focus:border-charcoal py-3 text-base sm:text-lg text-charcoal placeholder:text-bordergray focus:outline-none transition-colors"
          />
        </div>

        <div className="relative">
          <label className="block text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mb-2">
            Partner&apos;s Name <span className="text-bronze">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rohan Kapoor"
            value={formData.partnerName}
            onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
            className="w-full bg-transparent border-b border-bordergray focus:border-charcoal py-3 text-base sm:text-lg text-charcoal placeholder:text-bordergray focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* 02: Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        <div className="relative">
          <label className="block text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mb-2">
            Email Address <span className="text-bronze">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="ananya@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-transparent border-b border-bordergray focus:border-charcoal py-3 text-base sm:text-lg text-charcoal placeholder:text-bordergray focus:outline-none transition-colors"
          />
        </div>

        <div className="relative">
          <label className="block text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mb-2">
            Phone / WhatsApp <span className="text-bronze">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+91 79045 18754"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-transparent border-b border-bordergray focus:border-charcoal py-3 text-base sm:text-lg text-charcoal placeholder:text-bordergray focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* 03: Date & Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        <div className="relative">
          <label className="block text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mb-2">
            Tentative Wedding Date(s) <span className="text-bronze">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Dec 14–17, 2025"
            value={formData.weddingDate}
            onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
            className="w-full bg-transparent border-b border-bordergray focus:border-charcoal py-3 text-base sm:text-lg text-charcoal placeholder:text-bordergray focus:outline-none transition-colors"
          />
        </div>

        <div className="relative">
          <label className="block text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mb-2">
            City & Venue (if finalized) <span className="text-bronze">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Udaipur, Oberoi Udaivilas"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full bg-transparent border-b border-bordergray focus:border-charcoal py-3 text-base sm:text-lg text-charcoal placeholder:text-bordergray focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* 04: Wedding Type Radio Selection */}
      <div>
        <label className="block text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mb-4">
          Wedding Style / Setting
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {weddingTypes.map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setFormData({ ...formData, weddingType: type })}
              className={`p-3 text-left text-xs font-sans border transition-all duration-300 ${
                formData.weddingType === type
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-bordergray bg-transparent text-warmgray hover:border-charcoal hover:text-charcoal"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* 05: Number of Days / Duration */}
      <div>
        <label className="block text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mb-4">
          Celebration Timeline
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {durations.map((dur) => (
            <button
              type="button"
              key={dur}
              onClick={() => setFormData({ ...formData, eventDuration: dur })}
              className={`p-3 text-left text-xs font-sans border transition-all duration-300 ${
                formData.eventDuration === dur
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-bordergray bg-transparent text-warmgray hover:border-charcoal hover:text-charcoal"
              }`}
            >
              {dur}
            </button>
          ))}
        </div>
      </div>

      {/* 06: Services Required */}
      <div>
        <label className="block text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mb-4">
          Coverage Desired
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {serviceOptions.map((srv) => (
            <button
              type="button"
              key={srv}
              onClick={() => setFormData({ ...formData, services: srv })}
              className={`p-3 text-left text-xs font-sans border transition-all duration-300 ${
                formData.services === srv
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-bordergray bg-transparent text-warmgray hover:border-charcoal hover:text-charcoal"
              }`}
            >
              {srv}
            </button>
          ))}
        </div>
      </div>

      {/* 07: Estimated Budget Allocation */}
      <div>
        <label className="block text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mb-4">
          Estimated Photography & Cinema Budget
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {budgetOptions.map((bg) => (
            <button
              type="button"
              key={bg}
              onClick={() => setFormData({ ...formData, budget: bg })}
              className={`p-3 text-center text-xs font-sans border transition-all duration-300 ${
                formData.budget === bg
                  ? "border-charcoal bg-charcoal text-ivory font-medium"
                  : "border-bordergray bg-transparent text-warmgray hover:border-charcoal hover:text-charcoal"
              }`}
            >
              {bg}
            </button>
          ))}
        </div>
      </div>

      {/* 08: Vision & Message */}
      <div className="relative">
        <label className="block text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mb-2">
          Tell us about your story, vision, or any special moments you want documented
        </label>
        <textarea
          rows={4}
          placeholder="How did you meet? What feels most important to you both on the wedding day?"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-transparent border-b border-bordergray focus:border-charcoal py-3 text-base text-charcoal placeholder:text-bordergray focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-bordergray">
        <span className="text-xs text-warmgray font-light">
          We respect your privacy and never share your contact details.
        </span>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-charcoal text-ivory px-10 py-5 text-xs font-medium uppercase tracking-[0.2em] hover:bg-bronze transition-all duration-300 group disabled:opacity-50"
        >
          <span>{loading ? "Sending Inquiry..." : "START YOUR STORY →"}</span>
          {!loading && (
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          )}
        </button>
      </div>
    </form>
  );
}
