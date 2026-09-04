import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section id="intro" className="bg-ivory py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Label */}
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-bronze" />
              <span className="text-[11px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] font-semibold">
                The Art of Storytelling
              </span>
            </div>

            {/* Huge Serif Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-light leading-[1.12] mb-8 tracking-tight">
              WE DON&apos;T JUST <br />
              <span className="italic font-normal">CAPTURE MOMENTS.</span> <br />
              WE PRESERVE <br />
              HOW THEY FELT.
            </h2>

            {/* Paragraph Description */}
            <p className="text-warmgray text-base sm:text-lg leading-relaxed max-w-xl font-light mb-6">
              We document weddings honestly — the unfiltered laughter, the sacred silence before the vows, the tear that escapes unnoticed, and the chaotic euphoria of the dance floor.
            </p>

            <p className="text-warmgray text-base sm:text-lg leading-relaxed max-w-xl font-light mb-10">
              No stiff poses or artificial directives. Our philosophy is rooted in unobtrusive cinematic observation, translating ephemeral family heritage into heirloom art you will cherish decades later.
            </p>

            {/* Link to About */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium text-charcoal hover:text-bronze transition-colors group"
              >
                <span className="border-b border-charcoal/40 group-hover:border-bronze pb-1">
                  Discover Our Philosophy
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Photograph */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none shadow-[0_20px_50px_rgba(23,21,19,0.08)]">
              <div className="relative w-full h-full overflow-hidden bg-beige">
                <Image
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop"
                  alt="Bride portrait in regal Indian wedding attire"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-1000 hover:scale-103"
                />
              </div>

              {/* Floating Editorial Badge */}
              <div className="absolute -bottom-6 -left-6 bg-beige border border-bordergray p-5 hidden sm:block max-w-[220px]">
                <span className="text-[10px] uppercase tracking-[0.2em] text-warmgray block mb-1">
                  Editorial Craft
                </span>
                <p className="font-serif text-sm text-charcoal italic leading-snug">
                  &ldquo;A wedding is not a photo shoot; it is a living, breathing emotional legacy.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
