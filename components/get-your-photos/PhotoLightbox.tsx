"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Sparkles,
  Info,
  Check,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { PhotoSearchItem } from "@/types/photo-portal";
import { getPhotoViewUrl } from "@/lib/api/events";

interface PhotoLightboxProps {
  items: PhotoSearchItem[];
  currentIndex: number;
  sessionId?: string | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function PhotoLightbox({
  items,
  currentIndex,
  sessionId,
  onClose,
  onNavigate,
}: PhotoLightboxProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setIsZoomed(false);
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        setIsZoomed(false);
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (!currentItem) return null;

  const photo = currentItem.photo;
  const isMatch = currentItem.match_type === "face_match";
  const viewUrl = getPhotoViewUrl(photo.event_id, photo.id, sessionId);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const res = await fetch(viewUrl);
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = photo.original_filename || `photo-${photo.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2500);
    } catch {
      window.open(viewUrl, "_blank");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] bg-charcoal/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-300 select-none">
      {/* Top Controls Header */}
      <div className="flex items-center justify-between text-ivory border-b border-white/10 pb-3 sm:pb-4">
        {/* Left: Position & Match Status */}
        <div className="flex items-center space-x-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ivory/60">
            {currentIndex + 1} / {items.length}
          </span>
          {isMatch && (
            <span className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-bronze/20 border border-bronze/50 text-bronze text-[11px] font-sans uppercase tracking-widest font-semibold">
              <Sparkles className="w-3 h-3 text-bronze" />
              <span>
                Face Match
                {currentItem.similarity_score
                  ? ` • ${Math.round(currentItem.similarity_score * 100)}%`
                  : ""}
              </span>
            </span>
          )}
        </div>

        {/* Center: Filename */}
        <div className="hidden md:block max-w-sm truncate text-center text-xs font-mono text-ivory/80">
          {photo.original_filename}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          {/* Zoom Toggle */}
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            aria-label="Toggle zoom"
            className="p-2 text-ivory/80 hover:text-ivory hover:bg-white/10 rounded transition-colors"
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          {/* Info toggle */}
          <button
            type="button"
            onClick={() => setShowInfo(!showInfo)}
            aria-label="Toggle image info"
            className={`p-2 rounded transition-colors ${
              showInfo
                ? "bg-bronze text-ivory"
                : "text-ivory/80 hover:text-ivory hover:bg-white/10"
            }`}
          >
            <Info className="w-4 h-4" />
          </button>

          {/* Download Full-Resolution Button */}
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className={`inline-flex items-center space-x-2 px-3 py-1.5 text-xs uppercase tracking-widest font-medium transition-colors rounded ${
              downloaded
                ? "bg-green-600 text-ivory"
                : "bg-bronze hover:bg-bronze-light text-ivory"
            }`}
          >
            {downloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">
              {downloaded ? "Saved" : downloading ? "Downloading..." : "Download High-Res"}
            </span>
          </button>

          {/* Close Lightbox */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-2 text-ivory/80 hover:text-white hover:bg-white/10 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div className="relative flex-1 flex items-center justify-center my-3 overflow-hidden">
        {/* Prev Arrow */}
        <button
          type="button"
          onClick={() => {
            setIsZoomed(false);
            onNavigate((currentIndex - 1 + items.length) % items.length);
          }}
          aria-label="Previous"
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-charcoal/70 border border-white/20 text-ivory hover:bg-bronze hover:border-bronze transition-colors shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div
          className={`relative w-full h-full max-w-6xl max-h-[82vh] transition-transform duration-300 ${
            isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <Image
            src={viewUrl}
            alt={photo.original_filename || "Event photograph"}
            fill
            sizes="95vw"
            unoptimized
            priority
            className="object-contain object-center"
          />
        </div>

        {/* Next Arrow */}
        <button
          type="button"
          onClick={() => {
            setIsZoomed(false);
            onNavigate((currentIndex + 1) % items.length);
          }}
          aria-label="Next"
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-charcoal/70 border border-white/20 text-ivory hover:bg-bronze hover:border-bronze transition-colors shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Collapsible Info Drawer */}
        {showInfo && (
          <div className="absolute bottom-4 right-4 sm:right-8 z-30 max-w-sm w-full bg-charcoal/95 border border-white/15 p-5 text-ivory shadow-2xl backdrop-blur-md rounded-sm animate-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-bronze font-semibold">
                Photo Intelligence
              </span>
              <button
                type="button"
                onClick={() => setShowInfo(false)}
                className="text-white/60 hover:text-white text-xs"
              >
                ✕
              </button>
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-white/50">Filename:</span>
                <span className="text-white truncate max-w-[200px]" title={photo.original_filename}>
                  {photo.original_filename}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Category:</span>
                <span className={isMatch ? "text-bronze font-semibold" : "text-white"}>
                  {isMatch ? "Face Match (Private)" : "Public Photo"}
                </span>
              </div>
              {currentItem.similarity_score !== null && (
                <div className="flex justify-between">
                  <span className="text-white/50">Similarity Score:</span>
                  <span className="text-white">
                    {(currentItem.similarity_score * 100).toFixed(2)}%
                  </span>
                </div>
              )}
              {currentItem.detection_confidence !== null && (
                <div className="flex justify-between">
                  <span className="text-white/50">Detection Confidence:</span>
                  <span className="text-white">
                    {(currentItem.detection_confidence * 100).toFixed(2)}%
                  </span>
                </div>
              )}
              {photo.face_count !== undefined && (
                <div className="flex justify-between">
                  <span className="text-white/50">Detected Faces:</span>
                  <span className="text-white">{photo.face_count}</span>
                </div>
              )}
              <div className="flex justify-between pt-1 border-t border-white/10 text-[10px] text-white/40">
                <span>Photo ID:</span>
                <span className="truncate max-w-[170px]">{photo.id}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Thumbnail Strip or Filename Info */}
      <div className="flex items-center justify-between text-xs text-ivory/60 pt-2 border-t border-white/10">
        <span className="font-sans font-light">
          Press <kbd className="px-1 py-0.5 bg-white/10 rounded font-mono text-[10px]">←</kbd> and{" "}
          <kbd className="px-1 py-0.5 bg-white/10 rounded font-mono text-[10px]">→</kbd> to navigate,{" "}
          <kbd className="px-1 py-0.5 bg-white/10 rounded font-mono text-[10px]">Esc</kbd> to close
        </span>
        <span className="font-mono text-[11px] text-ivory/80">
          Cinigama Secure Delivery Protocol
        </span>
      </div>
    </div>
  );
}

