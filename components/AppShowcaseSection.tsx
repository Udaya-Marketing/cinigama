"use client";

import { useState } from "react";
import { CheckCircle2, Clock, Image as ImageIcon, Video, CreditCard, MessageSquare, Smartphone, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AppShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"progress" | "photos" | "payments">("progress");

  return (
    <section id="client-portal" className="py-24 bg-white text-charcoal relative overflow-hidden border-b border-bordergray/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Value Propositions */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-bronze font-semibold block mb-3">
                Client Portal • Exclusive Experience
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-light leading-[1.1] tracking-tight">
                Never wonder <br className="hidden sm:inline" />
                <span className="italic font-normal text-bronze">where things stand.</span>
              </h2>
            </div>

            <p className="text-warmgray text-sm sm:text-base font-light leading-relaxed max-w-lg">
              The app made exclusively for booked Cinigama couples — everything about your wedding, in one private place, updated the moment we update it.
            </p>

            {/* Feature List (Matching Screenshot 2) */}
            <div className="space-y-6 pt-2">
              <div className="flex items-start space-x-4">
                <div className="w-2.5 h-2.5 rounded-full bg-bronze mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-charcoal font-normal">
                    Galleries & films the moment they&apos;re ready
                  </h3>
                  <p className="text-xs text-warmgray font-light mt-1">
                    No waiting on a WhatsApp link — open the app and stream in full 4K resolution.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2.5 h-2.5 rounded-full bg-bronze mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-charcoal font-normal">
                    Real delivery progress, not a guess
                  </h3>
                  <p className="text-xs text-warmgray font-light mt-1">
                    Every deliverable shows its own % completed and current editing stage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2.5 h-2.5 rounded-full bg-bronze mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-charcoal font-normal">
                    Payments & schedule, always in view
                  </h3>
                  <p className="text-xs text-warmgray font-light mt-1">
                    What&apos;s paid, what&apos;s next — transparent ledger with zero back-and-forth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2.5 h-2.5 rounded-full bg-bronze mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-charcoal font-normal">
                    A direct line to your event team
                  </h3>
                  <p className="text-xs text-warmgray font-light mt-1">
                    Message your Lead Photographer & Cinematic Editor in-app — replies land right there.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 bg-charcoal text-ivory text-xs uppercase tracking-[0.2em] px-7 py-3.5 hover:bg-bronze transition-colors duration-300 shadow-md"
              >
                <span>Book Your Date & Access Portal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center space-x-2 text-xs text-warmgray font-light">
                <ShieldCheck className="w-4 h-4 text-bronze" />
                <span>Encrypted Private Client Access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Interactive Mobile App Mockup (Screenshot 2 Style) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            {/* Background Decorative Blur */}
            <div className="absolute -inset-4 bg-bronze/10 rounded-full blur-3xl -z-10" />

            {/* Phone Frame */}
            <div className="w-full max-w-[340px] sm:max-w-[380px] bg-charcoal text-ivory rounded-[40px] border-4 border-charcoal-light p-5 shadow-2xl relative overflow-hidden">
              {/* Top Dynamic Island / Notch */}
              <div className="flex justify-between items-center px-4 pt-1 pb-4 text-[10px] text-ivory/60 font-mono">
                <span>9:41</span>
                <div className="w-16 h-4 bg-black/60 rounded-full mx-auto" />
                <div className="flex items-center space-x-1.5">
                  <Smartphone className="w-3 h-3" />
                  <span>5G</span>
                </div>
              </div>

              {/* App Header */}
              <div className="flex items-center justify-between px-2 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#C7A878] font-bold block">
                    Cinigama Portal
                  </span>
                  <h4 className="font-serif text-xl text-ivory font-normal">
                    Good morning, Vikas & Ananya
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#C7A878]/20 text-[#C7A878] flex items-center justify-center font-bold text-xs">
                  VA
                </div>
              </div>

              {/* Card 1: Your Wedding Journey */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-ivory/60">
                    Grand Destination Wedding
                  </span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium">
                    In Production
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1 font-sans">
                    <span className="text-ivory/80">Overall Progress</span>
                    <span className="text-[#C7A878] font-semibold">78% Complete</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#C7A878] to-[#E3C89B] rounded-full w-[78%]" />
                  </div>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex border-b border-white/10 mb-4 text-xs">
                <button
                  onClick={() => setActiveTab("progress")}
                  className={`pb-2 px-3 font-medium transition-colors border-b-2 ${
                    activeTab === "progress"
                      ? "border-[#C7A878] text-[#C7A878]"
                      : "border-transparent text-ivory/50"
                  }`}
                >
                  Deliverables
                </button>
                <button
                  onClick={() => setActiveTab("photos")}
                  className={`pb-2 px-3 font-medium transition-colors border-b-2 ${
                    activeTab === "photos"
                      ? "border-[#C7A878] text-[#C7A878]"
                      : "border-transparent text-ivory/50"
                  }`}
                >
                  Photos (1,006)
                </button>
                <button
                  onClick={() => setActiveTab("payments")}
                  className={`pb-2 px-3 font-medium transition-colors border-b-2 ${
                    activeTab === "payments"
                      ? "border-[#C7A878] text-[#C7A878]"
                      : "border-transparent text-ivory/50"
                  }`}
                >
                  Ledger
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "progress" && (
                <div className="space-y-3 font-sans text-xs">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-bronze/20 text-bronze flex items-center justify-center">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-ivory">Candid Film (4K)</p>
                        <p className="text-[10px] text-emerald-400">Ready for review</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-[#C7A878] text-charcoal px-2.5 py-1 rounded font-semibold cursor-pointer">
                      WATCH
                    </span>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 text-ivory/70 flex items-center justify-center">
                        <ImageIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-ivory">Color Corrected Stills</p>
                        <p className="text-[10px] text-ivory/50">1006 photos ready • PIN: 1628</p>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 text-ivory/70 flex items-center justify-center">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-ivory">Teaser Trailer</p>
                        <p className="text-[10px] text-ivory/50">Color grading stage (90%)</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-ivory/40">2 Days Left</span>
                  </div>
                </div>
              )}

              {activeTab === "photos" && (
                <div className="bg-white/5 p-4 rounded-xl text-center space-y-2">
                  <ImageIcon className="w-8 h-8 text-[#C7A878] mx-auto" />
                  <p className="text-xs text-ivory font-medium">High-Res Gallery Unlocked</p>
                  <p className="text-[10px] text-ivory/60">
                    Direct access to original uncompressed RAW and color-graded album selections.
                  </p>
                  <button className="text-[10px] uppercase tracking-widest text-[#C7A878] border border-[#C7A878]/40 px-3 py-1.5 rounded mt-2">
                    Open Web Gallery
                  </button>
                </div>
              )}

              {activeTab === "payments" && (
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between p-2.5 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-ivory/70">Booking Advance</span>
                    <span className="text-emerald-400 font-mono">₹1,50,000 [PAID]</span>
                  </div>
                  <div className="flex justify-between p-2.5 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-ivory/70">Pre-Wedding Shoot</span>
                    <span className="text-emerald-400 font-mono">₹1,00,000 [PAID]</span>
                  </div>
                  <div className="flex justify-between p-2.5 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-ivory/70">Final Album Balance</span>
                    <span className="text-[#C7A878] font-mono">Due on Delivery</span>
                  </div>
                </div>
              )}

              {/* Bottom Quick Chat Pill */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-ivory/70">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C7A878]" />
                  <span className="text-[10px]">Lead Editor: Available</span>
                </div>
                <span className="text-[9px] bg-white/10 px-2 py-0.5 rounded text-ivory">
                  In-App Chat
                </span>
              </div>
            </div>

            {/* Floating Quote Badge (Screenshot 2 style) */}
            <div className="absolute -bottom-6 -left-4 sm:left-2 bg-charcoal text-ivory p-3 px-4 border border-white/20 rounded-xl shadow-xl hidden sm:flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#C7A878]">Live Client Portal</p>
                <p className="text-xs font-serif">Updated real-time for every couple</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
