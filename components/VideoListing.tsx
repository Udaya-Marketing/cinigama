"use client";

import { useState } from "react";

const videos = [
  "/videos/Cinigama02.mp4",
  "/videos/Hariramya.mp4",
  "/videos/kavin01.mp4",
  "/videos/KaviyarasuRiyasini.mp4",
];

export default function PreviousWorks() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-3 mb-4 sm:mb-6">
          <span className="w-6 sm:w-8 h-[1px] bg-bronze" />

          <span className="text-[10px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] font-semibold">
            Pre-Wedding & Drone Shots
          </span>
        </div>

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
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Video Popup */}
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