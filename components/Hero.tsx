"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS } from "@/data/navigation";

export interface HeroSlide {
  webImage?: string;
  mobileImage?: string;
  video?: string;
  title: string;
  subtitle: string;
  webPosition: "center-left" | "center-right" | "bottom-left" | "center" | "top-right" | "top-left";
  mobilePosition: "center-left" | "center-right" | "bottom-left" | "center" | "top-center" | "bottom-center";
}

const HERO_SLIDES: HeroSlide[] = [
  {
    webImage: "/images/hero/hero-1-web.png",
    mobileImage: "/images/hero/hero-1-mobile.webp",
    title: "Embracing the journey of love.",
    subtitle: "Candid, cinematic and timeless wedding photography crafted around your authentic story.",
    webPosition: "bottom-left",
    mobilePosition: "bottom-left",
  },
  {
    webImage: "/images/hero/hero-2-web.jpg",
    mobileImage: "/images/hero/hero-2-mobile (1).webp",
    title: "Preserving sacred heirloom moments.",
    subtitle: "Documenting generations of traditions, tears, and unfiltered joy across India.",
    webPosition: "center-right",
    mobilePosition: "top-center",
  },
  {
    webImage: "/images/hero/hero-3-web.png",
    mobileImage: "/images/hero/hero-3-mobile.png",
    title: "Where forever begins.",
    subtitle: "From palace courtyards in Rajasthan to cliffside vows in Goa and worldwide.",
    webPosition: "bottom-left",
    mobilePosition: "bottom-center",
  },
  {
    video: "/images/hero/hero-4-video.mov",
    title: "Unstaged emotions, pure art.",
    subtitle: "Bespoke photography and documentary cinema for discerning couples.",
    webPosition: "center",
    mobilePosition: "center",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mouse cursor tracking with spring physics (bounce effect)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // High stiffness + low damping creates an organic, springy bounce
  const springConfig = { damping: 10, stiffness: 140, mass: 0.5 };
  const textX = useSpring(rawX, springConfig);
  const textY = useSpring(rawY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Center origin offset (-0.5 to 0.5)
    const xOffset = (clientX - left) / width - 0.5;
    const yOffset = (clientY - top) / height - 0.5;

    // Movement offset range
    rawX.set(xOffset * 60);
    rawY.set(yOffset * 45);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

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

  const getWebPositionClasses = (position: HeroSlide["webPosition"]) => {
    switch (position) {
      case "center-left":
        return "md:max-w-2xl md:mr-auto md:text-left md:items-start md:my-auto";
      case "center-right":
        return "md:max-w-2xl md:ml-auto md:text-right md:items-end md:my-auto";
      case "bottom-left":
        return "md:max-w-2xl md:mr-auto md:text-left md:items-start md:mt-auto md:mb-4";
      case "top-right":
        return "md:max-w-2xl md:ml-auto md:text-right md:items-end md:mb-auto md:mt-4";
      case "top-left":
        return "md:max-w-2xl md:mr-auto md:text-left md:items-start md:mb-auto md:mt-4";
      case "center":
      default:
        return "md:max-w-3xl md:mx-auto md:text-center md:items-center md:my-auto";
    }
  };

  const getMobilePositionClasses = (position: HeroSlide["mobilePosition"]) => {
    switch (position) {
      case "center-left":
        return "max-w-full mr-auto text-left items-start my-auto";
      case "center-right":
        return "max-w-full ml-auto text-right items-end my-auto";
      case "bottom-left":
        return "max-w-full mr-auto text-left items-start mt-auto mb-2";
      case "bottom-center":
        return "max-w-full mx-auto text-center items-center mt-auto mb-2";
      case "top-center":
        return "max-w-full mx-auto text-center items-center mb-auto mt-2";
      case "center":
      default:
        return "max-w-full mx-auto text-center items-center my-auto";
    }
  };

  const getWebTextAlign = (position: HeroSlide["webPosition"]) => {
    switch (position) {
      case "center-right":
      case "top-right":
        return "md:text-right";
      case "center":
        return "md:text-center";
      case "center-left":
      case "bottom-left":
      case "top-left":
      default:
        return "md:text-left";
    }
  };

  const getMobileTextAlign = (position: HeroSlide["mobilePosition"]) => {
    switch (position) {
      case "center-right":
        return "text-right";
      case "center":
      case "bottom-center":
      case "top-center":
        return "text-center";
      case "center-left":
      case "bottom-left":
      default:
        return "text-left";
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden bg-charcoal select-none"
    >
      {/* Background Images & Video */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={s.video || s.webImage || idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
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
      <div  />
      <div  />

      {/* Hero Content Wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-28 pb-12 flex flex-col justify-between h-full">
        {/* Top Spacer */}
        <div className="hidden sm:block" />

        {/* Dynamic Alignment Container for Hero Text */}
        <div className="flex-1 flex flex-col justify-center w-full py-6">
          <motion.div
            style={{ x: textX, y: textY }}
            className="w-full will-change-transform pointer-events-none"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.97, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full flex flex-col ${getMobilePositionClasses(
                  slide.mobilePosition
                )} ${getWebPositionClasses(slide.webPosition)}`}
              >
                <h1
                  className={`font-serif text-ivory text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-light italic leading-[1.08] tracking-tight mb-6 drop-shadow-2xl ${getMobileTextAlign(
                    slide.mobilePosition
                  )} ${getWebTextAlign(slide.webPosition)}`}
                >
                  {slide.title}
                </h1>
              </motion.div>
            </AnimatePresence>
          </motion.div>
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
