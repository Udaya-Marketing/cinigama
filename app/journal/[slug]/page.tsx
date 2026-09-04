import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar, Bookmark } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/journal";
import QuoteCTA from "@/components/QuoteCTA";

interface Props {
  params: {
    slug: string;
  };
}

export default function JournalArticlePage({ params }: Props) {
  const article = JOURNAL_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-ivory pt-32 sm:pt-40">
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pb-12">
        <Link
          href="/journal"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-warmgray hover:text-charcoal mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        <div className="flex items-center space-x-3 text-[11px] uppercase tracking-[0.25em] text-bronze font-medium mb-4">
          <span>{article.category}</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-warmgray">
            <Calendar className="w-3 h-3" /> {article.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-warmgray">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-light tracking-tight leading-[1.12] mb-6">
          {article.title}
        </h1>

        <p className="text-warmgray text-base sm:text-lg font-light leading-relaxed italic border-l-2 border-bronze pl-6 my-6">
          &ldquo;{article.excerpt}&rdquo;
        </p>
      </div>

      {/* Featured Cover Image */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mb-16">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-beige border border-bordergray">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 pb-20 sm:pb-28">
        <div className="space-y-6 text-warmgray text-base sm:text-lg font-light leading-relaxed">
          {article.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Editorial Planning Tips Box */}
        {article.tips && article.tips.length > 0 && (
          <div className="mt-12 p-8 sm:p-10 bg-beige/60 border border-bordergray">
            <div className="flex items-center space-x-2 text-bronze text-xs uppercase tracking-[0.25em] font-semibold mb-6">
              <Bookmark className="w-4 h-4" />
              <span>Key Editorial Takeaways</span>
            </div>

            <div className="space-y-6">
              {article.tips.map((tip, idx) => (
                <div key={idx} className="border-l border-bronze pl-4">
                  <h3 className="font-serif text-lg text-charcoal font-medium mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-warmgray font-light leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Share & Back */}
        <div className="mt-16 pt-8 border-t border-bordergray flex items-center justify-between">
          <Link
            href="/journal"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-charcoal hover:text-bronze transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>More Articles</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-bronze hover:text-charcoal transition-colors"
          >
            <span>Plan Your Photoshoot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Quote CTA */}
      <QuoteCTA />
    </article>
  );
}
