"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/navigation";

interface HeroSlide {
  webImage?: string;
  mobileImage?: string;
  video?: string;
  title: string;
  subtitle: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    webImage: "/images/hero/hero-1-web.png",
    mobileImage: "/images/hero/hero-1-mobile.webp",
    title: "Embracing the journey of love.",
    subtitle: "Candid, cinematic and timeless wedding photography crafted around your authentic story.",
  },
  {
    webImage: "/images/hero/hero-2-web.jpg",
    mobileImage: "/images/hero/hero-2-mobile.webp",
    title: "Preserving sacred heirloom moments.",
    subtitle: "Documenting generations of traditions, tears, and unfiltered joy across India.",
  },
  {
    webImage: "/images/hero/hero-3-web.png",
    mobileImage: "/images/hero/hero-3-mobile.png",
    title: "Where forever begins.",
    subtitle: "From palace courtyards in Rajasthan to cliffside vows in Goa and worldwide.",
  },
  {
    video: "/images/hero/hero-4-video.mov",
    title: "Unstaged emotions, pure art.",
    subtitle: "Bespoke photography and documentary cinema for discerning couples.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Images & Video */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={s.video || s.webImage || idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transition: "opacity 1.2s ease-in-out, transform 8s ease-out" }}
        >
          {s.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.78]"
            >
              <source src={s.video} type="video/quicktime" />
              <source src={s.video} type="video/mp4" />
            </video>
          ) : (
            <>
              {/* Desktop Image */}
              <div className="hidden md:block absolute inset-0">
                <Image
                  src={s.webImage!}
                  alt="Cinigama Luxury Wedding Photography"
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover object-center brightness-[0.78]"
                />
              </div>
              {/* Mobile Image */}
              <div className="block md:hidden absolute inset-0">
                <Image
                  src={s.mobileImage!}
                  alt="Cinigama Luxury Wedding Photography"
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover object-center brightness-[0.78]"
                />
              </div>
            </>
          )}
        </div>
      ))}

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/50 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(23,21,19,0.35)_100%)] z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-28 pb-12 flex flex-col justify-between h-full">
        <div className="hidden sm:block" />

        {/* Center Editorial Headline and Dual CTAs */}
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="font-serif text-ivory text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-light italic leading-[1.08] tracking-tight mb-8">
            {slide.title}
          </h1>

          {/* Dual CTAs matching OOAK style */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 mb-8">
            {/* WhatsApp Quote Button */}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-[#C7A878] hover:bg-[#D4B788] text-charcoal px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Get a Quote on WhatsApp</span>
            </a>

            {/* Enquire Ghost Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-black/20 hover:bg-black/40 text-ivory px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] border border-ivory/40 hover:border-ivory transition-all duration-300 backdrop-blur-sm"
            >
              <span>Enquire</span>
            </Link>
          </div>

          {/* Social proof strip under CTAs */}
          <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-ivory/70">
            4.9★ GOOGLE &nbsp;•&nbsp; 1,200+ WEDDINGS &nbsp;•&nbsp; SINCE 2018
          </div>
        </div>

        {/* Bottom Bar with Slide Counter Controls */}
        <div className="flex items-center justify-between text-ivory/70 text-xs tracking-widest pt-6 border-t border-white/10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-ivory/60 font-sans hidden sm:inline">
            Cinigama Photography & Cinema
          </span>

          {/* Slide Arrow Navigation */}
          <div className="flex items-center space-x-4 ml-auto">
            <button
              onClick={prev}
              aria-label="Previous Slide"
              className="p-2 text-ivory/70 hover:text-ivory hover:scale-110 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="font-mono text-xs text-ivory tracking-widest">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>

            <button
              onClick={next}
              aria-label="Next Slide"
              className="p-2 text-ivory/70 hover:text-ivory hover:scale-110 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
