"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/data/navigation";

export default function QuoteCTA() {
  return (
    <section className="bg-charcoal text-ivory py-20 sm:py-32 lg:py-40 relative overflow-hidden border-t border-charcoal-light">
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-bronze/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center"
      >
        {/* Small Eyebrow */}
        <span className="text-[10px] sm:text-xs font-sans text-bronze uppercase tracking-[0.3em] block mb-3.5 font-semibold">
          Begin The Journey
        </span>

        {/* Large Headline */}
        <h2 className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] sm:leading-[1.08] mb-5 sm:mb-6">
          READY TO <br />
          <span className="italic font-normal">TELL YOUR STORY?</span>
        </h2>

        {/* Supporting text */}
        <p className="text-ivory/80 text-xs sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-8 sm:mb-12">
          Dates for upcoming wedding seasons are limited. Tell us about your vision and let&apos;s create something unforgettable together.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-5 max-w-md sm:max-w-none mx-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-ivory text-charcoal px-7 sm:px-9 py-3.5 sm:py-5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] border border-ivory hover:bg-bronze hover:text-ivory hover:border-bronze transition-all duration-300 group shadow-lg"
          >
            <span>Request Private Quote</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-transparent text-ivory px-7 sm:px-8 py-3.5 sm:py-5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] border border-ivory/30 hover:border-ivory hover:bg-white/5 transition-all duration-300"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-bronze" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
