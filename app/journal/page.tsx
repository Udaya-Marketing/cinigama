import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/journal";
import QuoteCTA from "@/components/QuoteCTA";

export default function JournalPage() {
  return (
    <div className="bg-ivory pt-32 sm:pt-40">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="max-w-4xl">
          <span className="text-[11px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] block mb-3 font-semibold">
            The Cinigama Journal
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-charcoal font-light tracking-tight leading-[1.08] mb-6">
            ESSAYS ON LOVE, <br />
            <span className="italic font-normal">LIGHT & TRADITION.</span>
          </h1>
          <p className="text-warmgray text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Editorial guides, real wedding reflections, and advice on crafting an unforgettable wedding photography experience.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="border-t border-bordergray py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
            {JOURNAL_ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-beige mb-6">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-1000 ease-editorial group-hover:scale-103"
                    />
                  </div>

                  {/* Category & Time */}
                  <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.22em] text-bronze font-medium mb-3">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span className="text-warmgray">{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-2xl text-charcoal font-light leading-snug group-hover:text-bronze transition-colors mb-3">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read Link */}
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-charcoal font-medium group-hover:text-bronze transition-colors">
                  <span className="border-b border-charcoal/50 group-hover:border-bronze pb-0.5">
                    Read Article
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <QuoteCTA />
    </div>
  );
}
