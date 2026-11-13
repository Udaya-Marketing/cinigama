"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Maximize2 } from "lucide-react";
import type { StoryImage } from "@/data/stories";

type MasonryItem = StoryImage & { id: string };

interface StoryMasonryGalleryProps {
  images: StoryImage[];
  onImageClick?: (index: number) => void;
  getHoverOverlay?: (index: number, image: StoryImage) => ReactNode;
  columnWidth?: number;
  maxColumnCount?: number;
}

function MasonrySkeleton({ count }: { count: number }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="break-inside-avoid mb-5 bg-beige/80 animate-pulse"
          style={{ height: i % 3 === 0 ? "280px" : i % 3 === 1 ? "380px" : "320px" }}
        />
      ))}
    </div>
  );
}

function MasonryTile({
  img,
  index,
  onImageClick,
  hoverOverlay,
}: {
  img: StoryImage;
  index: number;
  onImageClick?: (index: number) => void;
  hoverOverlay?: ReactNode;
}) {
  const clickable = Boolean(onImageClick);
  const showHoverCaption = Boolean(hoverOverlay || (clickable && img.caption));

  return (
    <figure className="m-0">
      <div
        role={clickable ? "button" : undefined}
        tabIndex={clickable ? 0 : undefined}
        onClick={clickable ? () => onImageClick?.(index) : undefined}
        onKeyDown={
          clickable
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onImageClick?.(index);
                }
              }
            : undefined
        }
        className={`group relative overflow-hidden bg-beige image-zoom-container ${
          clickable ? "cursor-pointer" : ""
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.url}
          alt={img.alt}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {clickable && (
          <div className="absolute top-3 right-3 p-2 bg-charcoal/70 text-ivory rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
            <Maximize2 className="w-4 h-4" />
          </div>
        )}

        {showHoverCaption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            {hoverOverlay}
            {img.caption && (
              <p className="text-xs sm:text-sm text-ivory font-light leading-snug drop-shadow-sm mt-1">
                {img.caption}
              </p>
            )}
          </div>
        )}
      </div>

      {img.caption && !clickable && !hoverOverlay && (
        <figcaption className="text-xs text-warmgray italic mt-3 font-light">
          {img.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function StoryMasonryGallery({
  images,
  onImageClick,
  getHoverOverlay,
  columnWidth = 300,
  maxColumnCount = 4,
}: StoryMasonryGalleryProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items: MasonryItem[] = useMemo(
    () =>
      images.map((img, index) => ({
        ...img,
        id: `${img.url}-${index}`,
      })),
    [images]
  );

  if (images.length === 0) {
    return null;
  }

  if (!mounted) {
    return <MasonrySkeleton count={Math.min(images.length, 8)} />;
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
      {items.map((img, index) => (
        <div key={img.id ?? index} className="break-inside-avoid mb-5">
          <MasonryTile
            img={img}
            index={index}
            onImageClick={onImageClick}
            hoverOverlay={getHoverOverlay?.(index, img)}
          />
        </div>
      ))}
    </div>
  );
}
