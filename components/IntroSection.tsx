"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section id="intro" className="bg-ivory py-16 sm:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Small Label */}
            <div className="inline-flex items-center space-x-3 mb-4 sm:mb-6">
              <span className="w-6 sm:w-8 h-[1px] bg-bronze" />
              <span className="text-[10px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] font-semibold">
                The Art of Storytelling
              </span>
            </div>

            {/* Huge Serif Heading */}
            <h2 className="font-serif text-2xl sm:text-5xl md:text-6xl text-charcoal font-light leading-[1.14] sm:leading-[1.12] mb-6 sm:mb-8 tracking-tight">
              WE DON&apos;T JUST <br className="hidden sm:inline" />
              <span className="italic font-normal">CAPTURE MOMENTS.</span> <br className="hidden sm:inline" />
              WE PRESERVE <br className="hidden sm:inline" />
              HOW THEY FELT.
            </h2>

            {/* Paragraph Description */}
            <p className="text-warmgray text-xs sm:text-base leading-relaxed max-w-xl font-light mb-4 sm:mb-6">
              We document weddings honestly — the unfiltered laughter, the sacred silence before the vows, the tear that escapes unnoticed, and the chaotic euphoria of the dance floor.
            </p>

            <p className="text-warmgray text-xs sm:text-base leading-relaxed max-w-xl font-light mb-8 sm:mb-10">
              No stiff poses or artificial directives. Our philosophy is rooted in unobtrusive cinematic observation, translating ephemeral family heritage into heirloom art you will cherish decades later.
            </p>

            {/* Link to About */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center space-x-3 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium text-charcoal hover:text-bronze transition-colors group"
              >
                <span className="border-b border-charcoal/40 group-hover:border-bronze pb-1">
                  Discover Our Philosophy
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Editorial Photograph */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none shadow-[0_20px_50px_rgba(23,21,19,0.08)]">
              <div className="relative w-full h-full overflow-hidden bg-beige rounded-sm">
                <Image
                  src="/images/introimage.jpg"
                  alt="Bride portrait in regal Indian wedding attire"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-1000 hover:scale-105"
                />
              </div>

              {/* Floating Editorial Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 bg-beige/95 border border-bordergray p-4 sm:p-5 max-w-[200px] sm:max-w-[220px] shadow-lg backdrop-blur-sm">
                <span className="text-[9px] uppercase tracking-[0.2em] text-warmgray block mb-1 font-mono">
                  Editorial Craft
                </span>
                <p className="font-serif text-xs sm:text-sm text-charcoal italic leading-snug">
                  &ldquo;A wedding is not a photo shoot; it is a living, breathing emotional legacy.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
