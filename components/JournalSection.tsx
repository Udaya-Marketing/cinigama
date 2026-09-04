import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/journal";

export default function JournalSection() {
  const articles = JOURNAL_ARTICLES.slice(0, 3);

  return (
    <section className="bg-ivory py-24 sm:py-32 lg:py-40 border-t border-bordergray/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-bordergray">
          <div>
            <span className="text-[11px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] block mb-3 font-semibold">
              Editorial Notes
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-light tracking-tight">
              FROM THE JOURNAL
            </h2>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/journal"
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-medium text-charcoal hover:text-bronze transition-colors group"
            >
              <span className="border-b border-charcoal/40 group-hover:border-bronze pb-1">
                Read All Articles
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-beige mb-6">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-1000 ease-editorial group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Metadata */}
                <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.22em] text-bronze font-medium mb-3">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span className="text-warmgray">{article.date}</span>
                </div>

                {/* Article Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-light leading-snug group-hover:text-bronze transition-colors mb-3">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Link */}
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-charcoal font-medium group-hover:text-bronze transition-colors">
                <span className="border-b border-charcoal/50 group-hover:border-bronze pb-0.5">
                  Read Story
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
