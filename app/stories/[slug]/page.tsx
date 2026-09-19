"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Camera, Sparkles, MapPin, Calendar, Maximize2 } from "lucide-react";
import { STORIES } from "@/data/stories";
import LightboxModal from "@/components/LightboxModal";
import QuoteCTA from "@/components/QuoteCTA";

interface Props {
  params: {
    slug: string;
  };
}

export default function StoryDetailPage({ params }: Props) {
  const storyIndex = STORIES.findIndex((s) => s.slug === params.slug);

  if (storyIndex === -1) {
    notFound();
  }

  const story = STORIES[storyIndex];
  const prevStory = STORIES[(storyIndex - 1 + STORIES.length) % STORIES.length];
  const nextStory = STORIES[(storyIndex + 1) % STORIES.length];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <article className="bg-ivory min-h-screen">
      {/* 01: Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-end pb-16 sm:pb-24 bg-charcoal overflow-hidden">
        <Image
          src={story.heroImage}
          alt={story.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center "
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/40" /> */}

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-ivory">
          {/* Back button */}
          <Link
            href="/stories"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-ivory/70 hover:text-ivory mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Stories</span>
          </Link>

          {/* Category & Location */}
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-ivory/80 mb-3 font-medium">
            <span>{story.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-bronze" /> {story.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-bronze" /> {story.date}
            </span>
          </div>

          {/* Couple Name */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-light tracking-tight leading-none mb-4">
            {story.couple}
          </h1>

          <p className="text-ivory/90 text-sm sm:text-base font-light max-w-2xl">
            {story.tagline}
          </p>
        </div>
      </section>

      {/* 02: Editorial Narrative & Overview */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-6 sm:px-8">
        {/* Pull Quote */}
        <div className="border-l-2 border-bronze pl-6 sm:pl-8 py-2 mb-16">
          <blockquote className="font-serif text-2xl sm:text-3xl text-charcoal italic font-light leading-relaxed mb-3">
            &ldquo;{story.quote}&rdquo;
          </blockquote>
          <cite className="text-xs uppercase tracking-[0.2em] text-warmgray not-italic font-medium">
            — {story.quoteAuthor}
          </cite>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-6 text-warmgray text-base sm:text-lg font-light leading-relaxed mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-light tracking-tight mb-4">
            {story.title}
          </h2>
          {story.storyParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Metadata Details Table */}
        <div className="bg-beige/60 border border-bordergray p-8 sm:p-10 my-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-bronze block mb-6 font-semibold">
            Wedding Details & Production Credits
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div>
              <span className="text-warmgray block mb-1 uppercase tracking-wider font-medium">
                Venue & Location
              </span>
              <p className="text-charcoal font-medium text-sm">{story.venue}</p>
            </div>

            <div>
              <span className="text-warmgray block mb-1 uppercase tracking-wider font-medium">
                Rituals & Events
              </span>
              <p className="text-charcoal font-medium text-sm">
                {story.details.eventTypes.join(", ")}
              </p>
            </div>

            {story.details.decorStyle && (
              <div>
                <span className="text-warmgray block mb-1 uppercase tracking-wider font-medium">
                  Floral & Decor Style
                </span>
                <p className="text-charcoal font-medium text-sm">
                  {story.details.decorStyle}
                </p>
              </div>
            )}

            <div>
              <span className="text-warmgray block mb-1 uppercase tracking-wider font-medium">
                Cinematography Spec
              </span>
              <p className="text-charcoal font-medium text-sm">
                {story.details.cinematography}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03: Curated Visual Gallery (Magazine-Style Editorial Layouts) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-24 mb-24 sm:mb-36">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[11px] font-sans text-bronze uppercase tracking-[0.25em] block mb-2 font-semibold">
            The Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light">
            Moments In Sequence
          </h2>
          <p className="text-xs text-warmgray mt-2 font-light">
            Click any frame for high-resolution full-screen view.
          </p>
        </div>

        {story.gallery.map((img, idx) => {
          if (img.aspect === "wide" || img.span === "full") {
            return (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer overflow-hidden bg-beige"
              >
                <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="100vw"
                    className="object-cover object-center transition-transform duration-1000 ease-editorial group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 right-4 p-2 bg-charcoal/60 text-ivory rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                {img.caption && (
                  <p className="text-xs text-warmgray italic mt-3 font-light">
                    {img.caption}
                  </p>
                )}
              </div>
            );
          }

          if (img.span === "two-thirds" || img.span === "half") {
            return (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer overflow-hidden bg-beige"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-cover object-center transition-transform duration-1000 ease-editorial group-hover:scale-102"
                  />
                  <div className="absolute top-4 right-4 p-2 bg-charcoal/60 text-ivory rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                {img.caption && (
                  <p className="text-xs text-warmgray italic mt-3 font-light">
                    {img.caption}
                  </p>
                )}
              </div>
            );
          }

          return (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden bg-beige max-w-md mx-auto"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-1000 ease-editorial group-hover:scale-102"
                />
                <div className="absolute top-4 right-4 p-2 bg-charcoal/60 text-ivory rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
              {img.caption && (
                <p className="text-xs text-warmgray italic mt-3 font-light text-center">
                  {img.caption}
                </p>
              )}
            </div>
          );
        })}
      </section>

      {/* 04: Story Navigation (Previous & Next Stories) */}
      <section className="border-t border-bordergray bg-beige/30 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <span className="text-[10px] uppercase tracking-[0.25em] text-bronze block mb-8 text-center font-semibold">
            Explore More Love Stories
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Prev Story */}
            <Link
              href={`/stories/${prevStory.slug}`}
              className="group flex flex-col p-6 sm:p-8 bg-ivory border border-bordergray hover:border-bronze transition-all duration-300"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-warmgray mb-2 flex items-center gap-1.5">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                Previous Story
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:text-bronze transition-colors font-light">
                {prevStory.couple}
              </h3>
              <p className="text-xs text-warmgray font-light mt-1">
                {prevStory.category} • {prevStory.location}
              </p>
            </Link>

            {/* Next Story */}
            <Link
              href={`/stories/${nextStory.slug}`}
              className="group flex flex-col sm:items-end sm:text-right p-6 sm:p-8 bg-ivory border border-bordergray hover:border-bronze transition-all duration-300"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-warmgray mb-2 flex items-center gap-1.5">
                Next Story
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:text-bronze transition-colors font-light">
                {nextStory.couple}
              </h3>
              <p className="text-xs text-warmgray font-light mt-1">
                {nextStory.category} • {nextStory.location}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 05: Ready to Tell Your Story CTA */}
      <QuoteCTA />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={story.gallery}
        currentIndex={activeImageIndex}
        onNavigate={(idx) => setActiveImageIndex(idx)}
      />
    </article>
  );
}
