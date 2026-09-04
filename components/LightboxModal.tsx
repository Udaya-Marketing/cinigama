"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string; alt: string; caption?: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[120] bg-charcoal/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between text-ivory/80 border-b border-white/10 pb-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ivory/60">
          {currentIndex + 1} / {images.length}
        </span>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2 text-ivory hover:text-bronze transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Center Image Viewport */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Prev Button */}
        <button
          onClick={() =>
            onNavigate((currentIndex - 1 + images.length) % images.length)
          }
          aria-label="Previous Image"
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-charcoal/60 border border-white/20 text-ivory hover:bg-bronze hover:border-bronze transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
          <Image
            src={currentImg.url}
            alt={currentImg.alt}
            fill
            sizes="90vw"
            priority
            className="object-contain object-center"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={() =>
            onNavigate((currentIndex + 1) % images.length)
          }
          aria-label="Next Image"
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-charcoal/60 border border-white/20 text-ivory hover:bg-bronze hover:border-bronze transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div className="text-center text-ivory/80 text-xs sm:text-sm font-light py-2">
        {currentImg.caption && <p className="italic">{currentImg.caption}</p>}
      </div>
    </div>
  );
}
