"use client";

import { useState } from "react";
import {
  Sparkles,
  Camera,
  Share2,
  Check,
  Calendar,
  MapPin,
  Download,
  Filter,
} from "lucide-react";
import { EventData, PhotoSearchItem } from "@/types/photo-portal";

interface EventHeaderProps {
  event: EventData;
  totalPhotos: number;
  matchedCount: number;
  publicCount: number;
  hasSearched: boolean;
  onOpenSelfieModal: () => void;
  onDownloadAllMatches?: () => void;
}

export default function EventHeader({
  event,
  totalPhotos,
  matchedCount,
  publicCount,
  hasSearched,
  onOpenSelfieModal,
  onDownloadAllMatches,
}: EventHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 bg-gradient-to-b from-beige/60 via-ivory to-ivory border-b border-bordergray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Breadcrumb & Status Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-bronze font-semibold">
              Live Event Gallery
            </span>
            <span className="text-warmgray/40">•</span>
            <span className="font-mono text-xs text-warmgray uppercase tracking-wider">
              ID: {event.id.slice(0, 8)}...
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-ivory border border-bordergray text-charcoal text-xs uppercase tracking-wider hover:border-bronze transition-colors rounded-sm shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5 text-bronze" />}
              <span>{copied ? "Link Copied" : "Share"}</span>
            </button>
          </div>
        </div>

        {/* Title & Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-light tracking-tight leading-[1.1]">
              {event.name}
            </h1>

            {event.description && (
              <p className="text-warmgray text-sm sm:text-base font-light max-w-2xl leading-relaxed">
                {event.description}
              </p>
            )}

            {/* Date & Location Pills if present */}
            <div className="flex flex-wrap gap-4 text-xs text-warmgray pt-1 font-light">
              {event.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-bronze" />
                  <span>{event.date}</span>
                </div>
              )}
              {event.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-bronze" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Action Box: Face Search CTA */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <button
              type="button"
              onClick={onOpenSelfieModal}
              className="inline-flex items-center justify-center space-x-2.5 px-6 py-4 bg-charcoal text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-bronze transition-all duration-300 shadow-md group"
            >
              <Camera className="w-4 h-4 text-bronze group-hover:scale-110 transition-transform" />
              <span>{hasSearched ? "Upload New Selfie" : "Find My Photos (Selfie)"}</span>
            </button>

            {hasSearched && matchedCount > 0 && onDownloadAllMatches && (
              <button
                type="button"
                onClick={onDownloadAllMatches}
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 border border-bordergray bg-ivory text-charcoal text-xs uppercase tracking-[0.18em] font-medium hover:bg-beige transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-bronze" />
                <span>Save All My Matches ({matchedCount})</span>
              </button>
            )}
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-bordergray/60 text-charcoal">
          <div className="p-4 bg-ivory border border-bordergray/70 rounded-sm">
            <span className="text-[10px] uppercase font-sans tracking-widest text-warmgray block mb-1">
              Total Gallery
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-light text-charcoal">
              {totalPhotos}
            </span>
          </div>

          <div className="p-4 bg-ivory border border-bordergray/70 rounded-sm">
            <span className="text-[10px] uppercase font-sans tracking-widest text-warmgray block mb-1">
              Public Photos
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-light text-charcoal">
              {publicCount}
            </span>
          </div>

          <div className={`p-4 border rounded-sm transition-colors ${
            hasSearched && matchedCount > 0
              ? "bg-beige/60 border-bronze/60 shadow-sm"
              : "bg-ivory border-bordergray/70"
          }`}>
            <span className="text-[10px] uppercase font-sans tracking-widest text-warmgray block mb-1 flex items-center justify-between">
              <span>Your Matches</span>
              {hasSearched && <Sparkles className="w-3 h-3 text-bronze" />}
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-light text-charcoal">
              {hasSearched ? matchedCount : "—"}
            </span>
          </div>

          <div className="p-4 bg-ivory border border-bordergray/70 rounded-sm">
            <span className="text-[10px] uppercase font-sans tracking-widest text-warmgray block mb-1">
              Privacy Status
            </span>
            <span className="text-xs font-mono text-bronze font-semibold flex items-center gap-1.5 mt-1 sm:mt-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
              Secured & Encrypted
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

