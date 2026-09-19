"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Star,
  ArrowRight,
  PhoneCall,
  Clock,
  Send,
  Camera,
  Film,
  Award,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Users,
} from "lucide-react";
import { trackMetaEvent } from "@/components/MetaPixel";

// Placeholder gallery images (high-definition photography placeholders)
const PORTFOLIO_ITEMS = [
  {
    title: "Royal Palace Wedding, Udaipur",
    category: "Palace Wedding",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Sunset Beach Vows, Goa",
    category: "Destination",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Heritage Chettinad Celebrations",
    category: "Traditional Luxury",
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Intimate Cliffside Ceremony, Bali",
    category: "International",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
  },
];

const PACKAGES = [
  {
    name: "Essential Collection",
    tagline: "Ideal for 2-day intimate weddings & celebrations",
    price: "₹3,50,000",
    popular: false,
    features: [
      "2 Days Complete Event Coverage",
      "Lead Photographer & Senior Cinematographer",
      "Full HD Color Graded Feature Film (15-20 min)",
      "High-Res Edited Candid Photos (600+)",
      "Express 48-Hour Instagram Teaser Trailer",
      "Online Private Client Gallery with Unlimited Downloads",
    ],
  },
  {
    name: "Signature Royal Experience",
    tagline: "Our most requested 3-day luxury destination package",
    price: "₹6,00,000",
    popular: true,
    features: [
      "3 Days Unlimited Multi-Crew Coverage",
      "2 Senior Candid Photographers + 2 Lead Cinematographers",
      "Includes Pre-Wedding Concept Shoot (Photo + Film)",
      "4K Ultra HD Cinematic Film & Teaser Reel",
      "4K Aerial Drone Coverage included",
      "1,000+ Premium Hand-Retouched Images",
      "Handcrafted Italian Leather Heirloom Photobook",
    ],
  },
  {
    name: "Grand Destination Signature",
    tagline: "Bespoke global destination wedding coverage",
    price: "Custom Quote",
    popular: false,
    features: [
      "Multi-day Unlimited Global Coverage",
      "Full Director's Cut & Multiple Cinema Teasers",
      "Dedicated Same-Day Edit Crew for Reception Display",
      "Pre & Post Wedding Shoots in Global Locations",
      "2x Handcrafted Heirloom Albums for Couples & Parents",
      "Raw Footage Drive + Exclusive VIP Concierge",
    ],
  },
];

const FAQS = [
  {
    q: "How far in advance should we book Cinigama for our wedding?",
    a: "We recommend booking 4 to 8 months in advance, especially for prime wedding dates between October and March. Because we limit our bookings to only 25 couples per year to maintain cinematic quality, dates get reserved quickly.",
  },
  {
    q: "Do you travel for destination weddings across India and abroad?",
    a: "Yes! Over 70% of our weddings are destination events in Udaipur, Jaipur, Goa, Kerala, Bali, Thailand, and Europe. Our travel and logistics team handles all flight and equipment transfers smoothly.",
  },
  {
    q: "What is your booking process and payment structure?",
    a: "Booking is simple: after we confirm availability for your dates, a 30% advance deposit reserves your spot. 60% is payable 7 days before the main event, and the remaining 10% upon final delivery of your photo gallery and films.",
  },
  {
    q: "How long does it take to deliver final photos and wedding films?",
    a: "You receive your 48-Hour Teaser Reel within two days after the wedding! High-res photo galleries are delivered within 4-6 weeks, and full cinematic films in 8-10 weeks.",
  },
];

export default function BookingLandingPage() {
  // Form State
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    weddingDate: "",
    location: "",
    eventDuration: "3 Days",
    services: [] as string[],
    guestCount: "200 - 500",
    name: "",
    phone: "",
    email: "",
    budget: "₹5L - ₹8L",
    notes: "",
  });

  const [availabilityChecked, setAvailabilityChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track Meta Pixel Lead event
    trackMetaEvent("Lead", {
      value: formData.budget,
      currency: "INR",
      content_name: "Wedding Booking Enquiry",
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-ivory min-h-screen text-charcoal font-sans">
      {/* 1. Urgency / Announcement Bar */}
      <div className="bg-bronze text-ivory py-2.5 px-4 text-center text-xs md:text-sm font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-gold shrink-0 animate-pulse" />
        <span>
          Now Accepting Dates for 2024-2025 Wedding Season — <strong>Only 6 Key Dates Remaining!</strong>
        </span>
        <button
          onClick={scrollToForm}
          className="ml-2 underline font-semibold hover:text-gold transition-colors hidden sm:inline"
        >
          Check Your Date →
        </button>
      </div>

      {/* 2. Hero Section */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 px-4 overflow-hidden bg-gradient-to-b from-champagne/30 to-ivory">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Trust Badge Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-bronze/20 text-xs md:text-sm font-medium text-bronze mb-6 shadow-sm"
          >
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
              ))}
            </div>
            <span>4.9 Star Rated Luxury Wedding Studio (180+ Reviews)</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-light leading-tight md:leading-tight text-charcoal max-w-4xl mx-auto"
          >
            Your Wedding Deserves More Than Photos. <br className="hidden md:block" />
            <span className="italic text-bronze font-normal">It Deserves Timeless Cinema.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-6 text-base md:text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            We craft emotional, candid visual stories for discerning couples across India & destination venues worldwide. Reserve your date before our calendar closes.
          </motion.p>

          {/* Quick Date Availability Checker Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 md:mt-12 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-bronze/10 max-w-3xl mx-auto"
          >
            <h3 className="text-sm md:text-base font-semibold text-charcoal tracking-wide uppercase mb-4 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-bronze" /> Instant Wedding Date Availability Check
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative text-left">
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  Wedding Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>
              </div>

              <div className="relative text-left">
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  City / Venue
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="e.g. Udaipur, Goa, Chennai"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => {
                    setAvailabilityChecked(true);
                    scrollToForm();
                  }}
                  className="w-full bg-bronze hover:bg-bronze-dark text-white font-medium text-sm py-2.5 px-4 rounded-xl shadow-md transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Micro Guarantees */}
            <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap justify-center items-center gap-4 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Privacy Guaranteed
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Response Within 4 Hours
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-600" /> Limited to 25 Weddings/Year
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Interactive Multi-Step Booking Form Section */}
      <section ref={formRef} className="py-16 md:py-24 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-bronze font-semibold">
              Reserve Your Dates Today
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal mt-2 font-light">
              Check Date Availability & Custom Quote
            </h2>
            <p className="text-neutral-500 mt-2 text-sm md:text-base max-w-xl mx-auto">
              Tell us about your wedding events. It takes less than 60 seconds to get your personalized package outline.
            </p>
          </div>

          <div className="bg-ivory border border-bronze/15 rounded-3xl p-6 md:p-10 shadow-xl">
            {isSubmitted ? (
              /* Confirmation Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl text-charcoal font-normal">
                  Thank You, {formData.name || "Bride & Groom"}!
                </h3>
                <p className="text-neutral-600 mt-3 max-w-md mx-auto text-sm md:text-base">
                  We have received your booking inquiry for <strong>{formData.weddingDate || "your wedding"}</strong> at{" "}
                  <strong>{formData.location || "your venue"}</strong>.
                </p>

                <div className="mt-6 bg-white p-4 rounded-2xl border border-bronze/10 max-w-sm mx-auto text-xs text-neutral-600 space-y-1 text-left">
                  <p><strong>Booking Ref:</strong> #CNG-2024-{Math.floor(1000 + Math.random() * 9000)}</p>
                  <p><strong>Selected Services:</strong> {formData.services.length > 0 ? formData.services.join(", ") : "Complete Wedding Cinema & Photo"}</p>
                  <p><strong>Estimated Budget:</strong> {formData.budget}</p>
                </div>

                {/* <p className="text-xs text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full inline-block mt-6">
                  ⚡ Meta Pixel Event Tracked Successfully (Lead Generated)
                </p> */}

                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                    href={`https://wa.me/917904518754?text=Hi%20Cinigama!%20I%20just%20submitted%20a%20booking%20enquiry%20for%20my%20wedding%20on%20${encodeURIComponent(formData.weddingDate)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Chat with Director</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                    }}
                    className="text-xs text-neutral-500 underline hover:text-charcoal"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Multi-step Form */
              <form onSubmit={handleSubmit}>
                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                        step >= 1 ? "bg-bronze text-white" : "bg-neutral-200 text-neutral-600"
                      }`}
                    >
                      1
                    </span>
                    <span className="text-xs md:text-sm font-medium text-charcoal">Event Details</span>
                  </div>
                  <div className="h-0.5 flex-1 mx-4 bg-neutral-200 relative">
                    <div
                      className="h-0.5 bg-bronze transition-all duration-300"
                      style={{ width: step === 1 ? "0%" : step === 2 ? "50%" : "100%" }}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                        step >= 2 ? "bg-bronze text-white" : "bg-neutral-200 text-neutral-600"
                      }`}
                    >
                      2
                    </span>
                    <span className="text-xs md:text-sm font-medium text-charcoal">Services</span>
                  </div>
                  <div className="h-0.5 flex-1 mx-4 bg-neutral-200 relative">
                    <div
                      className="h-0.5 bg-bronze transition-all duration-300"
                      style={{ width: step === 3 ? "100%" : "0%" }}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                        step === 3 ? "bg-bronze text-white" : "bg-neutral-200 text-neutral-600"
                      }`}
                    >
                      3
                    </span>
                    <span className="text-xs md:text-sm font-medium text-charcoal">Contact</span>
                  </div>
                </div>

                {/* Step 1: Event Details */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                          Wedding / Main Event Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.weddingDate}
                          onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-bronze"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                          City / Venue Location *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Leela Palace Udaipur / Taj Coromandel Chennai"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-bronze"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                          Total Event Duration
                        </label>
                        <select
                          value={formData.eventDuration}
                          onChange={(e) => setFormData({ ...formData, eventDuration: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-bronze"
                        >
                          <option>1 Day (Intimate Ceremony)</option>
                          <option>2 Days (Sangeet + Wedding)</option>
                          <option>3 Days (Haldi, Mehendi, Sangeet & Reception)</option>
                          <option>4+ Days (Grand Multi-Event Destination)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                          Expected Guest Count
                        </label>
                        <select
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-bronze"
                        >
                          <option>Under 100 (Intimate Gathering)</option>
                          <option>100 - 300 Guests</option>
                          <option>300 - 600 Guests</option>
                          <option>600+ Grand Wedding</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!formData.weddingDate || !formData.location}
                        className="bg-bronze disabled:opacity-50 text-white font-medium text-sm py-3 px-8 rounded-xl hover:bg-bronze-dark transition-all flex items-center gap-2"
                      >
                        Next Step: Select Services →
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Service Requirements */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <label className="block text-xs font-semibold uppercase text-neutral-600 mb-2">
                      Which services do you require for your celebration?
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { title: "Candid Fine-Art Photography", desc: "Emotional, unscripted portraits & moments" },
                        { title: "Cinematic Wedding Film (4K)", desc: "Story-driven documentary feature film" },
                        { title: "4K Aerial Drone Cinematography", desc: "Breathtaking venue & aerial shots" },
                        { title: "Pre-Wedding Concept Shoot", desc: "Editorial portraits in exotic locations" },
                        { title: "Traditional Photo & Video", desc: "Complete stage & guest documentation" },
                        { title: "Same-Day Teaser Edit", desc: "48-Hour Instagram reel & teaser" },
                      ].map((item) => {
                        const isChecked = formData.services.includes(item.title);
                        return (
                          <div
                            key={item.title}
                            onClick={() => handleServiceToggle(item.title)}
                            className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                              isChecked
                                ? "bg-bronze/10 border-bronze text-charcoal shadow-sm"
                                : "bg-white border-neutral-200 hover:border-bronze/40 text-neutral-700"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              readOnly
                              className="mt-1 accent-bronze w-4 h-4"
                            />
                            <div>
                              <h4 className="text-sm font-medium">{item.title}</h4>
                              <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-medium text-neutral-500 hover:text-charcoal"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="bg-bronze text-white font-medium text-sm py-3 px-8 rounded-xl hover:bg-bronze-dark transition-all flex items-center gap-2"
                      >
                        Next Step: Contact Info →
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Contact & Budget Info */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Bride/Groom or Family Member"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-bronze"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 79045 18754"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-bronze"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your.email@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-bronze"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                          Estimated Media Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-bronze font-medium"
                        >
                          <option>₹3.5L - ₹5L (Essential Package)</option>
                          <option>₹5L - ₹8L (Signature Experience)</option>
                          <option>₹8L - ₹12L (Grand Destination)</option>
                          <option>₹12L+ (Bespoke Unlimited)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                        Any specific vision, dates or venue details? (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Tell us a bit about your story or special requests..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-bronze"
                      />
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-xs font-medium text-neutral-500 hover:text-charcoal"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-bronze hover:bg-bronze-dark text-white font-semibold text-sm py-3.5 px-8 rounded-xl shadow-lg transition-all transform active:scale-95 flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending Inquiry...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Submit Inquiry & Get Custom Proposal
                          </span>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Placeholder Showcase */}
      <section className="py-16 bg-ivory border-t border-b border-bronze/10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-bronze font-semibold">
            Visual Storytelling Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mt-2 font-light">
            Captured Celebrations Around The Globe
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[3/4] shadow-md"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-amber-300 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-light mt-1.5 leading-snug">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Transparent Package Comparison */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-bronze font-semibold">
            Investment & Packages
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mt-2 font-light">
            Transparent Pricing Crafted for Exceptional Weddings
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 transition-all flex flex-col justify-between ${
                  pkg.popular
                    ? "bg-bronze text-ivory shadow-2xl scale-105 border-2 border-gold"
                    : "bg-ivory text-charcoal border border-neutral-200 hover:border-bronze/30 shadow-md"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-charcoal font-bold text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <h3 className="font-serif text-2xl font-light">{pkg.name}</h3>
                  <p className={`text-xs mt-1 leading-relaxed ${pkg.popular ? "text-ivory/80" : "text-neutral-500"}`}>
                    {pkg.tagline}
                  </p>
                  <div className="mt-6 mb-6">
                    <span className="text-3xl font-serif font-semibold">{pkg.price}</span>
                    {pkg.price !== "Custom Quote" && (
                      <span className={`text-xs ml-1 ${pkg.popular ? "text-ivory/70" : "text-neutral-400"}`}>
                        + GST
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 text-xs md:text-sm">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.popular ? "text-gold" : "text-bronze"
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={scrollToForm}
                  className={`mt-8 w-full py-3 rounded-xl font-medium text-xs uppercase tracking-wider transition-all ${
                    pkg.popular
                      ? "bg-white text-bronze hover:bg-ivory font-semibold shadow-md"
                      : "bg-bronze text-white hover:bg-bronze-dark"
                  }`}
                >
                  Select Package & Reserve Date
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section (Objection Handling) */}
      <section className="py-16 md:py-24 px-4 bg-ivory border-t border-neutral-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-bronze font-semibold">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-2 font-light">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-bronze/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between font-serif text-base md:text-lg text-charcoal"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-bronze shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs md:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Sticky Mobile Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-bronze/20 p-3 z-50 flex items-center justify-between md:hidden shadow-2xl">
        <div>
          <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold block">
            Dates Closing Fast
          </span>
          <span className="text-xs font-bold text-bronze">2024-25 Wedding Booking</span>
        </div>
        <button
          onClick={scrollToForm}
          className="bg-bronze hover:bg-bronze-dark text-white px-5 py-2.5 rounded-xl font-medium text-xs flex items-center gap-1.5 shadow-md"
        >
          <span>Book Your Date</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
