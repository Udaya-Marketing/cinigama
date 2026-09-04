"use client";

import { useState } from "react";
import Image from "next/image";
import LightboxModal from "./LightboxModal";
import { Sparkles, Maximize2 } from "lucide-react";

const EDITORIAL_PHOTOS = [
  {
    id: "edit-1",
    title: "Warm Heritage Couple",
    subtitle: "Beige Velvet & Royal Sherwani",
    image: "/images/editorial-1.jpg",
    aspectRatio: "portrait",
    tag: "Studio Series I",
  },
  {
    id: "edit-2",
    title: "Intimate Close-Up",
    subtitle: "Embrace in Warm Drapes",
    image: "/images/editorial-2.jpg",
    aspectRatio: "portrait",
    tag: "Studio Series II",
  },
  {
    id: "edit-3",
    title: "Gentle Connection",
    subtitle: "Natural Linen & Soft Lighting",
    image: "/images/editorial-3.jpg",
    aspectRatio: "portrait",
    tag: "Studio Series III",
  },
  {
    id: "edit-4",
    title: "Minimalist Elegance",
    subtitle: "Standing Editorial Pose",
    image: "/images/editorial-4.jpg",
    aspectRatio: "portrait",
    tag: "Studio Series IV",
  },
];

export default function EditorialGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const lightboxImages = EDITORIAL_PHOTOS.map((p) => ({
    url: p.image,
    alt: p.title,
    caption: `${p.title} — ${p.subtitle}`,
  }));

  return (
    <section id="editorial-gallery" className="py-24 bg-cream/40 border-y border-bordergray/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-bronze mb-3">
              <Sparkles className="w-4 h-4" />
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] font-semibold">
                Editorial Studio • AI & Couture Portraiture
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-light tracking-wide leading-tight">
              Timeless Frames, Warm Neutral Aesthetic
            </h2>
          </div>
          <p className="text-warmgray text-xs sm:text-sm font-light max-w-md leading-relaxed">
            Curated high-fashion studio portraits featuring warm linen backdrops, soft cinematic lighting, and quiet elegance.
          </p>
        </div>

        {/* 4 Column Vertical Portrait Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {EDITORIAL_PHOTOS.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedIndex(idx)}
              className="group relative cursor-pointer overflow-hidden bg-charcoal/5 border border-bordergray/60 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container with aspect 3/4 */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[9px] uppercase tracking-[0.25em] bg-charcoal/70 backdrop-blur-md text-ivory/90 px-3 py-1 border border-white/10 font-sans font-medium">
                    {photo.tag}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-ivory/80 text-charcoal flex items-center justify-center backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Title & Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-xl text-ivory font-light tracking-wide mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-ivory/70 font-light tracking-wider uppercase text-[10px]">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Caption Footnote */}
        <div className="mt-12 text-center flex items-center justify-center space-x-3 text-warmgray text-xs tracking-widest uppercase">
          <span className="h-px w-12 bg-bordergray" />
          <span>Crafted for couples who appreciate subtle luxury</span>
          <span className="h-px w-12 bg-bordergray" />
        </div>
      </div>

      {/* Lightbox Modal on Click */}
      <LightboxModal
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        images={lightboxImages}
        currentIndex={selectedIndex ?? 0}
        onNavigate={(idx) => setSelectedIndex(idx)}
      />
    </section>
  );
}
