import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Film, Heart, Sparkles } from "lucide-react";
import QuoteCTA from "@/components/QuoteCTA";

export default function AboutPage() {
  const accolades = [
    {
      title: "Vogue India Weddings",
      feature: "Top 10 Destination Wedding Cinematographers in India",
      year: "2024",
    },
    {
      title: "Harper's Bazaar Bride",
      feature: "The New Wave of Emotional Visual Storytellers",
      year: "2023",
    },
    {
      title: "Fearless Photographers Global",
      feature: "Excellence in Candid Wedding Moments",
      year: "2024",
    },
    {
      title: "WedMeGood Annual Awards",
      feature: "Best Luxury Wedding Cinema Collective",
      year: "2023 & 2024",
    },
  ];

  return (
    <div className="bg-ivory pt-32 sm:pt-40">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 sm:pb-28">
        <div className="max-w-4xl">
          <span className="text-[11px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] block mb-3 font-semibold">
            About Cinigama
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-charcoal font-light tracking-tight leading-[1.08] mb-6">
            WE CAPTURE LOVE <br />
            <span className="italic font-normal">WITHOUT THE SCRIPT.</span>
          </h1>
          <p className="text-warmgray text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Born out of a deep reverence for authentic cinema and Indian cultural heritage, Cinigama is a boutique visual collective documenting weddings across India and the globe.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="border-t border-bordergray bg-beige/30 py-24 sm:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image Col */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-beige shadow-[0_20px_40px_rgba(23,21,19,0.08)] border border-bordergray">
                <Image
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600&auto=format&fit=crop"
                  alt="Cinigama Cinematographers at Work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6 text-warmgray text-base sm:text-lg font-light leading-relaxed">
              <span className="text-[11px] uppercase tracking-[0.25em] text-bronze font-semibold block mb-2">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light leading-snug">
                Preserving Human Connection in an Age of Choreography.
              </h2>
              <p>
                When we founded Cinigama in 2018, we observed that wedding photography had become synonymous with rigid stage setups, continuous flashes, and choreographed poses that stripped celebrations of their genuine intimacy.
              </p>
              <p>
                We chose a different path: silent, mindful, and deeply empathetic documentation. We treat every wedding as a sacred convergence of human souls, family lineages, and spontaneous joy.
              </p>
              <p>
                Our artists work with compact, high-performance cinema cameras and vintage prime optics, allowing us to move gracefully among your guests as friends rather than an intrusive production crew.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars / Ethos */}
      <section className="py-24 sm:py-36 bg-ivory border-t border-bordergray">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
            <span className="text-[11px] font-sans text-bronze uppercase tracking-[0.25em] block mb-2 font-semibold">
              The Cinigama Way
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-light">
              CORE PRINCIPLES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="p-8 bg-beige/40 border border-bordergray">
              <Film className="w-6 h-6 text-bronze mb-6" />
              <h3 className="font-serif text-2xl text-charcoal font-light mb-3">
                Cinematic Discretion
              </h3>
              <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed">
                We never disrupt a sacred mantra, an emotional hug, or a heartfelt toast. Our best work is captured when you forget we are even there.
              </p>
            </div>

            <div className="p-8 bg-beige/40 border border-bordergray">
              <Heart className="w-6 h-6 text-bronze mb-6" />
              <h3 className="font-serif text-2xl text-charcoal font-light mb-3">
                Emotional Resonance
              </h3>
              <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed">
                We prioritize feeling over superficial polish. A photograph that evokes tears is infinitely more valuable than an immaculate but lifeless frame.
              </p>
            </div>

            <div className="p-8 bg-beige/40 border border-bordergray">
              <Sparkles className="w-6 h-6 text-bronze mb-6" />
              <h3 className="font-serif text-2xl text-charcoal font-light mb-3">
                Heirloom Mastery
              </h3>
              <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed">
                From hand-graded film colors to Italian leather albums, everything we deliver is built to remain breathtaking 50 years from now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Press */}
      <section className="py-24 sm:py-32 bg-beige/60 border-t border-bordergray">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-[11px] font-sans text-bronze uppercase tracking-[0.25em] block mb-3 font-semibold">
            Recognitions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-light mb-16">
            FEATURED & CELEBRATED
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {accolades.map((acc, i) => (
              <div
                key={i}
                className="p-8 bg-ivory border border-bordergray hover:border-bronze transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-warmgray mb-3">
                    <span className="uppercase tracking-widest text-bronze font-semibold">
                      {acc.title}
                    </span>
                    <span>{acc.year}</span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal font-light">
                    {acc.feature}
                  </h3>
                </div>
                <div className="mt-6 pt-4 border-t border-bordergray/40 flex items-center gap-2 text-xs text-warmgray">
                  <Award className="w-3.5 h-3.5 text-bronze" />
                  <span>Editorial Mention</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCTA />
    </div>
  );
}
