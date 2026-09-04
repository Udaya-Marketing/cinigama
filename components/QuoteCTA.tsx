import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/navigation";

export default function QuoteCTA() {
  return (
    <section className="bg-charcoal text-ivory py-28 sm:py-36 lg:py-44 relative overflow-hidden border-t border-charcoal-light">
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bronze/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Small Eyebrow */}
        <span className="text-[11px] sm:text-xs font-sans text-bronze uppercase tracking-[0.3em] block mb-4 font-semibold">
          Begin The Journey
        </span>

        {/* Large Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.08] mb-6">
          READY TO <br />
          <span className="italic font-normal">TELL YOUR STORY?</span>
        </h2>

        {/* Supporting text */}
        <p className="text-ivory/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-12">
          Dates for 2025–2026 wedding seasons are limited. Tell us about your vision and let&apos;s create something unforgettable together.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-ivory text-charcoal px-9 py-4 sm:py-5 text-xs font-medium uppercase tracking-[0.2em] border border-ivory hover:bg-bronze hover:text-ivory hover:border-bronze transition-all duration-300 group"
          >
            <span>Request Private Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-transparent text-ivory px-8 py-4 sm:py-5 text-xs font-medium uppercase tracking-[0.2em] border border-ivory/30 hover:border-ivory hover:bg-white/5 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 text-bronze" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
