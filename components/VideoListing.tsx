"use client";

import { useState } from "react";
import Link from "next/link";

const videos = [
  "/videos/KaviyarasuRiyasini.webm",
  "/videos/Hariramya.webm",
  
  
];

export default function PreviousWorks() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      {/* ========================================= */}
      {/* PREVIOUS WORKS SECTION */}
      {/* ========================================= */}

      <section className="py-20 sm:py-24 lg:py-28">

        {/* Full Device Width Border */}
        <div className="h-px w-full bg-bordergray/60 mb-12 sm:mb-16" />

        {/* Content Container */}
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="mb-12 sm:mb-16">

            {/* Header Content */}
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between pb-8">

              {/* Left - Title */}
              <div>
                <span className="mb-3 block text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-bronze sm:text-xs">
                  Our Wedding Stories
                </span>

                <h2 className="font-serif text-4xl font-light leading-[0.95] tracking-tight text-charcoal sm:text-5xl md:text-6xl">
                  PRE-WEDDING STORIES
                  <br />
                  {/* <span className="font-normal italic">
                    DRONE SHOTS
                  </span> */}
                </h2>
              </div>

              {/* Right - Explore Button */}
              <Link
                href="/videolisting"
                className="group inline-flex w-fit items-center gap-4 border-b border-charcoal pb-2 text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-charcoal transition-opacity hover:opacity-60"
              >
                <span>Explore All Stories</span>

                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>
          </div>

          {/* ========================================= */}
          {/* VIDEO GRID */}
          {/* ========================================= */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {videos.map((video) => (
              <div
                key={video}
                className="cursor-pointer overflow-hidden rounded-lg bg-black"
                onClick={() => setSelectedVideo(video)}
              >
                <video
                  className="aspect-video w-full object-cover"
                  src={video}
                  controls
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* VIDEO POPUP */}
      {/* ========================================= */}

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-black"
              aria-label="Close video"
            >
              ✕
            </button>

            {/* Selected Video */}
            <video
              key={selectedVideo}
              src={selectedVideo}
              className="max-h-[75vh] w-full object-contain"
              controls
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              autoPlay
              playsInline
              preload="auto"
            />

          </div>
        </div>
      )}
    </>
  );
}