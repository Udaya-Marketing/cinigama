import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function DestinationCTA() {
  return (
    <section className="relative w-full py-32 sm:py-44 lg:py-52 overflow-hidden bg-charcoal">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=85&w=2600&auto=format&fit=crop"
          alt="Destination Wedding Photography Across the World"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.7] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center text-ivory">
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-sans tracking-[0.3em] uppercase text-ivory/80 mb-6 font-medium">
          <Compass className="w-4 h-4 text-bronze" />
          <span>Global Destination Crew</span>
        </div>

        {/* Large Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-light tracking-tight leading-[1.08] mb-6">
          WHEREVER <br />
          <span className="italic font-normal">YOUR STORY</span> <br />
          TAKES YOU.
        </h2>

        {/* Destinations list */}
        <p className="text-xs sm:text-sm md:text-base font-sans tracking-[0.25em] uppercase text-ivory/90 mb-10 max-w-2xl mx-auto">
          India • Bali • Dubai • Lake Como • Thailand • Worldwide
        </p>

        {/* CTA */}
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-3 bg-ivory text-charcoal px-8 sm:px-10 py-4 sm:py-5 text-xs font-medium uppercase tracking-[0.2em] border border-ivory hover:bg-bronze hover:text-ivory hover:border-bronze transition-all duration-300 group"
          >
            <span>Plan Your Destination Wedding</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
