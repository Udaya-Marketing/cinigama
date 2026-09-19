"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { JOURNAL_ARTICLES } from "@/data/journal";

export default function JournalSection() {
  const articles = JOURNAL_ARTICLES.slice(0, 3);

  return (
    <section className="bg-ivory py-16 sm:py-28 lg:py-36 border-t border-bordergray/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-bordergray gap-4">
          <div>
            <span className="text-[10px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] block mb-2.5 font-semibold">
              Editorial Notes
            </span>
            <h2 className="font-serif text-2xl sm:text-5xl md:text-6xl text-charcoal font-light tracking-tight">
              FROM THE JOURNAL
            </h2>
          </div>

          <div className="mt-2 md:mt-0">
            <Link
              href="/journal"
              className="inline-flex items-center space-x-3 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium text-charcoal hover:text-bronze transition-colors group"
            >
              <span className="border-b border-charcoal/40 group-hover:border-bronze pb-1">
                Read All Articles
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {articles.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            >
              <Link
                href={`/journal/${article.slug}`}
                className="group flex flex-col justify-between h-full"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-beige mb-5 sm:mb-6 rounded-sm">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center space-x-3 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-bronze font-medium mb-2.5">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span className="text-warmgray">{article.date}</span>
                  </div>

                  {/* Article Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-light leading-snug group-hover:text-bronze transition-colors mb-2.5">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed mb-5 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read Link */}
                <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-charcoal font-medium group-hover:text-bronze transition-colors">
                  <span className="border-b border-charcoal/50 group-hover:border-bronze pb-0.5">
                    Read Story
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
