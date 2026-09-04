"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-beige/60 py-24 sm:py-32 lg:py-40 border-t border-bordergray overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 text-bronze text-[11px] sm:text-xs font-sans tracking-[0.25em] uppercase mb-4 font-semibold">
          <span className="w-6 h-[1px] bg-bronze" />
          <span>Voices of Love</span>
          <span className="w-6 h-[1px] bg-bronze" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-light tracking-tight mb-16">
          WORDS FROM OUR COUPLES
        </h2>

        {/* Testimonial Box */}
        <div className="relative min-h-[320px] flex flex-col items-center justify-center">
          {/* Subtle Decorative Quote Icon */}
          <span className="font-serif text-6xl sm:text-8xl text-bronze/20 select-none block mb-4 leading-none">
            “
          </span>

          {/* Emotional Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal font-light leading-relaxed max-w-3xl mx-auto mb-10 transition-opacity duration-500 italic">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Couple Details */}
          <div className="flex flex-col items-center space-y-1">
            <span className="font-serif text-xl sm:text-2xl text-charcoal tracking-wide">
              {current.couple}
            </span>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-bronze font-medium">
              {current.weddingType} • {current.location}
            </span>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-center space-x-8 mt-12 pt-8 border-t border-bordergray/60">
          <button
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="p-3 border border-bordergray hover:border-bronze text-charcoal hover:text-bronze transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="font-mono text-xs uppercase tracking-[0.25em] text-warmgray">
            {current.number}
          </span>

          <button
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="p-3 border border-bordergray hover:border-bronze text-charcoal hover:text-bronze transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
