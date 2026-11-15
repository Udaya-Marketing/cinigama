"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, Download, Sparkles, Eye, Check } from "lucide-react";
import { PhotoSearchItem } from "@/types/photo-portal";
import { getPhotoThumbnailUrl, getPhotoViewUrl } from "@/lib/api/events";

interface PhotoCardProps {
  item: PhotoSearchItem;
  sessionId?: string | null;
  onSelect: (item: PhotoSearchItem) => void;
}

export default function PhotoCard({ item, sessionId, onSelect }: PhotoCardProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const photo = item.photo;
  const isMatch = item.match_type === "face_match";

  const thumbUrl = photo.thumbnail_url || getPhotoThumbnailUrl(photo.event_id, photo.id, sessionId);
  const fullUrl = photo.url || getPhotoViewUrl(photo.event_id, photo.id, sessionId);

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      setDownloading(true);
      const res = await fetch(fullUrl);
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
    } catch (err) {
      console.error("Failed to download image directly, opening view url:", err);
      window.open(fullUrl, "_blank");
    } finally {
      setDownloading(false);
    }
  };

  const matchPercent =
    item.similarity_score !== null && item.similarity_score !== undefined
      ? Math.round(item.similarity_score * 100)
      : null;

  return (
    <div
      onClick={() => onSelect(item)}
      className={`group relative overflow-hidden bg-beige border transition-all duration-500 cursor-pointer rounded-sm ${
        isMatch
          ? "border-bronze/60 shadow-[0_4px_20px_rgba(139,111,71,0.12)] hover:border-bronze hover:shadow-[0_8px_30px_rgba(139,111,71,0.2)]"
          : "border-bordergray/70 hover:border-charcoal/40 hover:shadow-lg"
      }`}
    >
      {/* Image Container with 3:4 Aspect Ratio */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-charcoal/5">
        {!imageError ? (
          <Image
            src={thumbUrl}
            alt={photo.original_filename || "Event photograph"}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            unoptimized
            onError={() => setImageError(true)}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-beige text-warmgray text-center text-xs">
            <Eye className="w-6 h-6 mb-2 text-bronze" />
            <span className="font-mono">{photo.original_filename}</span>
          </div>
        )}

        {/* Ambient Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
          {isMatch ? (
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-charcoal/90 text-ivory text-[10px] tracking-wider uppercase font-semibold border border-bronze/60 backdrop-blur-md rounded-full shadow-md">
              <Sparkles className="w-3 h-3 text-bronze animate-pulse" />
              <span>Matched You{matchPercent ? ` (${matchPercent}%)` : ""}</span>
            </div>
          ) : (
            <div className="inline-flex items-center space-x-1 px-2 py-0.5 bg-ivory/85 text-charcoal text-[9px] uppercase tracking-widest font-medium border border-bordergray/70 backdrop-blur-sm rounded-sm">
              <span>Public</span>
            </div>
          )}

          {/* Face count badge if available */}
          {photo.face_count !== undefined && photo.face_count > 0 && (
            <div className="px-1.5 py-0.5 bg-charcoal/75 text-ivory/90 text-[9px] font-mono rounded backdrop-blur-sm">
              {photo.face_count} {photo.face_count === 1 ? "face" : "faces"}
            </div>
          )}
        </div>

        {/* Hover Quick Action Buttons */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(item);
            }}
            aria-label="View large"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-ivory text-charcoal text-xs uppercase tracking-wider font-medium hover:bg-bronze hover:text-ivory transition-colors shadow-sm rounded-sm"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Preview</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            aria-label="Download photograph"
            className={`p-2 transition-colors shadow-sm rounded-sm ${
              downloaded
                ? "bg-green-600 text-ivory"
                : "bg-charcoal/90 text-ivory hover:bg-bronze border border-white/20"
            }`}
          >
            {downloaded ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <Download className={`w-3.5 h-3.5 ${downloading ? "animate-bounce" : ""}`} />
            )}
          </button>
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="p-3 bg-ivory flex items-center justify-between text-xs border-t border-bordergray/40">
        <p className="font-mono text-[11px] text-warmgray truncate max-w-[70%]" title={photo.original_filename}>
          {photo.original_filename}
        </p>
        <span className="text-[10px] uppercase font-sans tracking-widest text-bronze font-medium">
          {isMatch ? "Matched" : "Public"}
        </span>
      </div>
    </div>
  );
}

