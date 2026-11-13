"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, AlertCircle, ArrowRight, Home } from "lucide-react";

interface NoEventFoundProps {
  reason?: string;
}

export default function NoEventFound({
  reason = "No event ID was provided in the request.",
}: NoEventFoundProps) {
  const router = useRouter();
  const [manualId, setManualId] = useState("");
  const [error, setError] = useState("");

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = manualId.trim();
    if (!clean || clean.toLowerCase() === "null") {
      setError("Please enter a valid event ID or code");
      return;
    }
    setError("");
    router.push(`/get-your-photos?id=${encodeURIComponent(clean)}`);
  };

  return (
    <div className="min-h-[85vh] bg-ivory flex items-center justify-center pt-32 pb-24 px-6 sm:px-8">
      <div className="max-w-2xl w-full mx-auto text-center space-y-8 animate-in fade-in duration-500">
        {/* Editorial Subtitle Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-beige border border-bordergray/60">
          <AlertCircle className="w-3.5 h-3.5 text-bronze" />
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-bronze font-semibold">
            Gallery Access Error
          </span>
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-light tracking-tight leading-[1.1]">
            No Event Found
          </h1>
          <p className="text-warmgray text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed">
            {reason} Each event gallery requires a unique identification token provided on your invitation, wristband, or QR code.
          </p>
        </div>

        {/* Manual Event ID Lookup Form */}
        <div className="bg-beige/40 p-6 sm:p-8 border border-bordergray/80 rounded-sm text-left max-w-xl mx-auto shadow-sm">
          <label
            htmlFor="event-id-input"
            className="block text-[11px] uppercase tracking-[0.2em] font-medium text-charcoal mb-2"
          >
            Enter Event ID or Access Code
          </label>
          <form onSubmit={handleLookup} className="space-y-3">
            <div className="relative">
              <input
                id="event-id-input"
                type="text"
                placeholder="e.g. event-uuid-or-code"
                value={manualId}
                onChange={(e) => {
                  setManualId(e.target.value);
                  if (error) setError("");
                }}
                className="w-full px-4 py-3 bg-ivory border border-bordergray text-charcoal placeholder:text-warmgray/50 text-sm focus:outline-none focus:border-bronze font-mono transition-colors"
              />
              <Search className="w-4 h-4 text-warmgray absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {error && (
              <p className="text-xs text-red-600 font-sans tracking-wide">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center space-x-2 py-3 bg-charcoal text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-bronze transition-colors duration-300"
            >
              <span>Access Event Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Navigation Return Options */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-medium">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-5 py-2.5 border border-bordergray text-charcoal hover:bg-beige transition-colors uppercase tracking-[0.18em]"
          >
            <Home className="w-3.5 h-3.5 text-bronze" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-5 py-2.5 border border-transparent text-warmgray hover:text-charcoal transition-colors uppercase tracking-[0.18em]"
          >
            <span>Need Help? Contact Concierge</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

