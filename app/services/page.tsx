import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, Shield, Camera, Film, Compass, HeartHandshake } from "lucide-react";
import { SERVICES } from "@/data/services";
import QuoteCTA from "@/components/QuoteCTA";

export default function ServicesPage() {
  const faqs = [
    {
      q: "How early should we book Cinigama for our wedding?",
      a: "Our commissions for the peak Indian wedding seasons (October through March) typically book 6 to 12 months in advance. To secure dates for multi-day and destination celebrations, we recommend reaching out as early as possible."
    },
    {
      q: "What is your team size on the wedding day?",
      a: "Our crew sizes range from 4 to 8 master artists (Lead Directors, Candid Photographers, Cinema Operators, Drone Pilots, and Audio Engineers) depending on the scale and simultaneous rituals of your events."
    },
    {
      q: "Do you travel for destination weddings across India and worldwide?",
      a: "Yes, approximately 60% of our weddings are destination assignments across Udaipur, Jaipur, Goa, Kerala, Bali, Dubai, Thailand, and Europe. Our production team handles all travel and gear logistics seamlessly."
    },
    {
      q: "What is the turnaround timeline for our photos and films?",
      a: "You receive a curated 50-frame Master Sneak Peek within 72 hours of your wedding. The complete color-graded high-resolution gallery is delivered in 4–6 weeks, and the handcrafted cinematic feature film and trailer within 8–10 weeks."
    }
  ];

  return (
    <div className="bg-ivory pt-32 sm:pt-40">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 sm:pb-28">
        <div className="max-w-4xl">
          <span className="text-[11px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] block mb-3 font-semibold">
            Bespoke Commissions
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-charcoal font-light tracking-tight leading-[1.08] mb-6">
            DISCIPLINES OF <br />
            <span className="italic font-normal">CINEMATIC EXCELLENCE.</span>
          </h1>
          <p className="text-warmgray text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            We offer bespoke wedding photography, documentary cinema, editorial pre-weddings, and global destination coverage tailored to your wedding vision.
          </p>
        </div>
      </section>

      {/* Services List Detailed */}
      <section className="border-t border-bordergray divide-y divide-bordergray">
        {SERVICES.map((service, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div key={service.number} className="py-20 sm:py-28 bg-beige/30">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Visual Col */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-beige shadow-[0_15px_35px_rgba(23,21,19,0.06)] border border-bordergray">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-1000 hover:scale-103"
                      />
                    </div>
                  </div>

                  {/* Text Col */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <span className="font-serif text-3xl sm:text-4xl text-bronze/70 block mb-2 font-light">
                      {service.number}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light mb-3">
                      {service.title}
                    </h2>
                    <p className="font-serif italic text-bronze text-base mb-6">
                      {service.tagline}
                    </p>
                    <p className="text-warmgray text-sm sm:text-base font-light leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal font-semibold block mb-3">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables.map((del, dIdx) => (
                          <li
                            key={dIdx}
                            className="text-xs sm:text-sm text-warmgray flex items-start gap-2.5 font-light"
                          >
                            <Check className="w-4 h-4 text-bronze mt-0.5 flex-shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-charcoal hover:text-bronze transition-colors"
                      >
                        <span className="border-b border-charcoal hover:border-bronze pb-0.5">
                          Enquire For {service.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-ivory border-t border-bordergray">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-[11px] font-sans text-bronze uppercase tracking-[0.25em] block mb-2 font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-light">
              COMMISSION DETAILS
            </h2>
          </div>

          <div className="divide-y divide-bordergray">
            {faqs.map((faq, i) => (
              <div key={i} className="py-8">
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-light mb-3">
                  {faq.q}
                </h3>
                <p className="text-warmgray text-sm sm:text-base font-light leading-relaxed">
                  {faq.a}
                </p>
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
