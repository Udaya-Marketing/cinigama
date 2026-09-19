"use client";

import { useState } from "react";
import Image from "next/image";
import LightboxModal from "./LightboxModal";
import { Sparkles, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

const EDITORIAL_PHOTOS = [
  {
    id: "edit-1",
    title: "Warm Heritage Couple",
    subtitle: "Beige Velvet & Royal Sherwani",
    image: "/images/couture1.jpg",
    aspectRatio: "portrait",
    tag: "Series I",
  },
  {
    id: "edit-2",
    title: "Intimate Close-Up",
    subtitle: "Embrace in Warm Drapes",
    image: "/images/couture2.jpg",
    aspectRatio: "portrait",
    tag: "Series II",
  },
  {
    id: "edit-3",
    title: "Gentle Connection",
    subtitle: "Natural Linen & Soft Lighting",
    image: "/images/couture3.jpg",
    aspectRatio: "portrait",
    tag: "Series III",
  },
  {
    id: "edit-4",
    title: "Minimalist Elegance",
    subtitle: "Standing Editorial Pose",
    image: "/images/couture4.jpg",
    aspectRatio: "portrait",
    tag: "Series IV",
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
    <section id="editorial-gallery" className="py-16 sm:py-28 bg-cream/40 border-y border-bordergray/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center space-x-2 text-bronze mb-2.5 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold">
                Editorial Studio • Couture Portraiture
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-charcoal font-light tracking-wide leading-tight">
              Timeless Frames, Warm Neutral Aesthetic
            </h2>
          </div>
          <p className="text-warmgray text-xs sm:text-sm font-light max-w-md leading-relaxed">
            Curated high-fashion studio portraits featuring warm linen backdrops, soft cinematic lighting, and quiet elegance.
          </p>
        </div>

        {/* 2 Column on Mobile, 4 Column on Web Portrait Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {EDITORIAL_PHOTOS.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              onClick={() => setSelectedIndex(idx)}
              className="group relative cursor-pointer overflow-hidden bg-charcoal/5 border border-bordergray/60 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm"
            >
              {/* Image Container with aspect 3/4 */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={idx < 2}
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] bg-charcoal/80 backdrop-blur-md text-ivory/90 px-2 py-0.5 sm:px-3 sm:py-1 border border-white/10 font-sans font-medium">
                    {photo.tag}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-ivory/90 text-charcoal flex items-center justify-center backdrop-blur-md shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* Bottom Title & Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-sm sm:text-xl text-ivory font-light tracking-wide mb-0.5 sm:mb-1 leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-[9px] sm:text-xs text-ivory/80 font-light tracking-wider uppercase line-clamp-1">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Caption Footnote */}
        <div className="mt-8 sm:mt-12 text-center flex items-center justify-center space-x-3 text-warmgray text-[10px] sm:text-xs tracking-widest uppercase">
          <span className="h-px w-8 sm:w-12 bg-bordergray" />
          <span>Crafted for couples who appreciate subtle luxury</span>
          <span className="h-px w-8 sm:w-12 bg-bordergray" />
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
