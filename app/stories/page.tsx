"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { STORIES } from "@/data/stories";

const CATEGORIES = [
  "ALL STORIES",
  "Palace Royal",
  "Heritage South",
  "Destination Coastal",
  "Intimate Soirée",
  "Vibrant Celebration",
  "Pre-Wedding Film",
];

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL STORIES");

  const filteredStories =
    selectedCategory === "ALL STORIES"
      ? STORIES
      : STORIES.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-ivory pt-32 sm:pt-40 pb-24 sm:pb-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] block mb-3 font-semibold">
            The Archive
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-charcoal font-light tracking-tight leading-[1.08] mb-6">
            WEDDING STORIES, <br />
            <span className="italic font-normal">CAPTURED AS ART.</span>
          </h1>
          <p className="text-warmgray text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Explore our curated portfolio of real weddings across India&apos;s royal palaces, heritage temple courtyards, and sun-kissed global destinations.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto pb-6 mb-12 sm:mb-16 border-b border-bordergray no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-charcoal text-ivory font-medium"
                  : "bg-transparent text-warmgray hover:text-charcoal hover:bg-beige"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {filteredStories.map((story, idx) => {
            const isWide = idx % 3 === 0;
            return (
              <div
                key={story.id}
                className={`group ${isWide ? "md:col-span-2" : "md:col-span-1"}`}
              >
                <Link
                  href={`/stories/${story.slug}`}
                  className="block relative overflow-hidden bg-beige"
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      isWide ? "aspect-[16/9]" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={story.coverImage}
                      alt={story.title}
                      fill
                      sizes={isWide ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                      className="object-cover object-center transition-transform duration-1000 ease-editorial group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20 text-ivory flex flex-col justify-end">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-ivory/80 block mb-2 font-medium">
                        {story.category} • {story.location}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-4xl text-ivory font-light mb-2">
                        {story.couple}
                      </h2>
                      <p className="text-xs sm:text-sm text-ivory/80 font-light max-w-xl line-clamp-2 mb-4">
                        {story.tagline}
                      </p>
                      <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-ivory font-medium group-hover:text-bronze-light transition-colors">
                        <span className="border-b border-ivory/60 pb-0.5">
                          View Complete Story
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
