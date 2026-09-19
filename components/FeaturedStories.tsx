"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { STORIES } from "@/data/stories";

export default function FeaturedStories() {
  const featured = STORIES.slice(0, 4);
  const story1 = featured[0]; // Big landscape
  const story2 = featured[1]; // Stacked portrait 1
  const story3 = featured[2]; // Stacked portrait 2
  const story4 = featured[3]; // Big landscape or wide

  return (
    <section className="bg-ivory py-16 sm:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-bordergray gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-bronze text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase mb-2.5 font-semibold">
              <span className="w-6 h-[1px] bg-bronze" />
              <span>Recent Stories</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-5xl md:text-6xl text-charcoal font-light tracking-tight">
              LOVE STORIES, <br className="hidden sm:inline" />
              <span className="italic font-normal">TOLD BEAUTIFULLY.</span>
            </h2>
          </div>

          <div className="mt-2 md:mt-0">
            <Link
              href="/stories"
              className="inline-flex items-center space-x-3 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-medium text-charcoal hover:text-bronze transition-colors group"
            >
              <span className="border-b border-charcoal/40 group-hover:border-bronze pb-1">
                View All Wedding Stories
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Layout */}
        <div className="space-y-8 sm:space-y-16">
          {/* Row 1: Story 1 */}
          {story1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link
                href={`/stories/${story1.slug}`}
                className="group block relative overflow-hidden bg-beige rounded-sm shadow-sm hover:shadow-lg transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                  <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={story1.coverImage}
                      alt={story1.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-charcoal/15 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  <div className="lg:col-span-4 p-6 sm:p-10 flex flex-col justify-between h-full bg-beige/40">
                    <div>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-bronze font-medium block mb-2 sm:mb-3">
                        {story1.category} • {story1.location}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-4xl text-charcoal mb-3 sm:mb-4 font-light leading-snug group-hover:text-bronze transition-colors">
                        {story1.couple}
                      </h3>
                      <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed mb-5 sm:mb-6 line-clamp-3">
                        {story1.tagline}
                      </p>
                    </div>

                    <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                      <span className="border-b border-charcoal group-hover:border-bronze pb-0.5">
                        View Story
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Row 2: Stories 2 & 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {story2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                <Link
                  href={`/stories/${story2.slug}`}
                  className="group block relative overflow-hidden bg-beige rounded-sm shadow-sm hover:shadow-lg transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={story2.coverImage}
                      alt={story2.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent z-10" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20 text-ivory">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-ivory/80 block mb-1.5 sm:mb-2">
                        {story2.category} • {story2.location}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mb-2">
                        {story2.couple}
                      </h3>
                      <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-ivory/90 group-hover:text-bronze transition-colors">
                        <span className="border-b border-ivory/60 pb-0.5">View Story</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {story3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <Link
                  href={`/stories/${story3.slug}`}
                  className="group block relative overflow-hidden bg-beige rounded-sm shadow-sm hover:shadow-lg transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={story3.coverImage}
                      alt={story3.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent z-10" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20 text-ivory">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-ivory/80 block mb-1.5 sm:mb-2">
                        {story3.category} • {story3.location}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mb-2">
                        {story3.couple}
                      </h3>
                      <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-ivory/90 group-hover:text-bronze transition-colors">
                        <span className="border-b border-ivory/60 pb-0.5">View Story</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Row 3: Story 4 */}
          {story4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link
                href={`/stories/${story4.slug}`}
                className="group block relative overflow-hidden bg-beige rounded-sm shadow-sm hover:shadow-lg transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                  <div className="lg:col-span-4 p-6 sm:p-10 flex flex-col justify-between h-full bg-beige/40 order-2 lg:order-1">
                    <div>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-bronze font-medium block mb-2 sm:mb-3">
                        {story4.category} • {story4.location}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-4xl text-charcoal mb-3 sm:mb-4 font-light leading-snug group-hover:text-bronze transition-colors">
                        {story4.couple}
                      </h3>
                      <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed mb-5 sm:mb-6 line-clamp-3">
                        {story4.tagline}
                      </p>
                    </div>

                    <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                      <span className="border-b border-charcoal group-hover:border-bronze pb-0.5">
                        View Story
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </div>

                  <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden order-1 lg:order-2">
                    <Image
                      src={story4.coverImage}
                      alt={story4.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/15 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
