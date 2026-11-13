"use client";

import { Suspense, useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Sparkles,
  Camera,
  Filter,
  CheckCircle2,
  Download,
  Search,
  Eye,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import {
  EventData,
  PhotoSearchItem,
  SearchResponse,
} from "@/types/photo-portal";
import {
  fetchEventDetails,
  fetchPublicPhotos,
  getPhotoViewUrl,
} from "@/lib/api/events";
import NoEventFound from "@/components/get-your-photos/NoEventFound";
import EventHeader from "@/components/get-your-photos/EventHeader";
import PhotoCard from "@/components/get-your-photos/PhotoCard";
import PhotoLightbox from "@/components/get-your-photos/PhotoLightbox";
import SelfieUploadModal from "@/components/get-your-photos/SelfieUploadModal";
import Footer from "@/components/Footer";

function GetYourPhotosContent() {
  const searchParams = useSearchParams();
  const rawId = searchParams.get("id");

  // Validate ID: null, empty string, or "null" string
  const isInvalidId =
    !rawId ||
    rawId.trim() === "" ||
    rawId.trim().toLowerCase() === "null" ||
    rawId.trim().toLowerCase() === "undefined";

  const eventId = isInvalidId ? null : rawId.trim();

  // State
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [photos, setPhotos] = useState<PhotoSearchItem[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchSummary, setSearchSummary] = useState<string | null>(null);

  // Filter & Search
  const [activeFilter, setActiveFilter] = useState<"all" | "matched" | "public">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Modals
  const [isSelfieModalOpen, setIsSelfieModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [batchDownloading, setBatchDownloading] = useState(false);

  // Fetch event and public photos on mount or when eventId changes
  useEffect(() => {
    if (!eventId) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    const loadEventAndPublicPhotos = async () => {
      setLoading(true);
      try {
        const [event, publicPhotos] = await Promise.all([
          fetchEventDetails(eventId),
          fetchPublicPhotos(eventId),
        ]);

        if (isMounted) {
          setEventData(event);
          setPhotos(publicPhotos);
        }
      } catch (err) {
        console.error("Failed to load event data:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadEventAndPublicPhotos();
    return () => {
      isMounted = false;
    };
  }, [eventId]);

  // Handle Search Result from SelfieUploadModal
  const handleSearchSuccess = (response: SearchResponse) => {
    if (!response.success || !response.data) return;

    const data = response.data;
    setSessionId(data.session_id);
    setHasSearched(true);
    setSearchSummary(response.message || `Found ${data.matched_count} matching photo(s) and ${data.public_count} public photo(s)`);

    // Update photos list: put face matches first, then public photos
    const sorted = [...data.items].sort((a, b) => {
      if (a.match_type === "face_match" && b.match_type !== "face_match") return -1;
      if (b.match_type === "face_match" && a.match_type !== "face_match") return 1;
      return (b.similarity_score || 0) - (a.similarity_score || 0);
    });

    setPhotos(sorted);
    // Automatically switch to 'matched' tab if matches exist so the attendee sees their photos immediately!
    if (data.matched_count > 0) {
      setActiveFilter("matched");
    } else {
      setActiveFilter("all");
    }
  };

  // Filtered photos based on active tab and search query
  const filteredPhotos = useMemo(() => {
    let result = photos;

    if (activeFilter === "matched") {
      result = result.filter((item) => item.match_type === "face_match");
    } else if (activeFilter === "public") {
      result = result.filter((item) => item.match_type === "public");
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((item) =>
        item.photo.original_filename?.toLowerCase().includes(q)
      );
    }

    return result;
  }, [photos, activeFilter, searchQuery]);

  const matchedCount = useMemo(
    () => photos.filter((p) => p.match_type === "face_match").length,
    [photos]
  );

  const publicCount = useMemo(
    () => photos.filter((p) => p.match_type === "public").length,
    [photos]
  );

  // Batch download all matched photos
  const handleDownloadAllMatches = async () => {
    const matchedPhotos = photos.filter((p) => p.match_type === "face_match");
    if (matchedPhotos.length === 0 || !eventId) return;

    try {
      setBatchDownloading(true);
      for (let i = 0; i < matchedPhotos.length; i++) {
        const item = matchedPhotos[i];
        const url = getPhotoViewUrl(
          eventId,
          item.photo.id,
          sessionId
        );
        const a = document.createElement("a");
        a.href = url;
        a.download = item.photo.original_filename || `match-${i + 1}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        // Small delay between downloads to prevent browser blocking
        await new Promise((resolve) => setTimeout(resolve, 400));
      }
    } finally {
      setBatchDownloading(false);
    }
  };

  // If no ID or null, render the empty state
  if (isInvalidId || !eventId) {
    return <NoEventFound reason="No event ID was provided in the link. Please check your event invitation or QR code." />;
  }

  // Loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-ivory pt-32 sm:pt-40 pb-24 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="space-y-4 max-w-2xl">
            <div className="h-4 w-32 bg-beige animate-pulse rounded" />
            <div className="h-12 w-3/4 bg-beige animate-pulse rounded" />
            <div className="h-4 w-full bg-beige animate-pulse rounded" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-24 bg-beige animate-pulse rounded" />
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-beige animate-pulse rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // If event failed to load
  if (!eventData) {
    return <NoEventFound reason={`Could not locate event with ID: "${eventId}". It may have expired or been removed.`} />;
  }

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      {/* 01: Event Header & Statistics */}
      <EventHeader
        event={eventData}
        totalPhotos={photos.length}
        matchedCount={matchedCount}
        publicCount={publicCount}
        hasSearched={hasSearched}
        onOpenSelfieModal={() => setIsSelfieModalOpen(true)}
        onDownloadAllMatches={handleDownloadAllMatches}
      />

      {/* 02: Main Gallery Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Banner if search was just performed */}
        {hasSearched && searchSummary && (
          <div className="mb-10 p-5 bg-beige/60 border border-bronze/40 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in slide-in-from-top-3 duration-500">
            <div className="flex items-center space-x-3 text-charcoal">
              <div className="w-9 h-9 rounded-full bg-bronze/15 flex items-center justify-center text-bronze flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-bronze font-semibold block">
                  AI Face Match Complete
                </span>
                <p className="text-sm font-medium">{searchSummary}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setIsSelfieModalOpen(true)}
                className="text-xs uppercase tracking-wider text-bronze hover:underline font-medium inline-flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Search Different Selfie</span>
              </button>
            </div>
          </div>
        )}

        {/* Private Photos Callout Banner (shown before user has uploaded selfie) */}
        {!hasSearched && (
          <div className="mb-12 p-6 sm:p-8 bg-charcoal text-ivory rounded-sm shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-bronze/30">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center space-x-2 text-bronze">
                <Sparkles className="w-4 h-4 text-bronze animate-pulse" />
                <span className="text-[10px] uppercase font-sans tracking-[0.25em] font-semibold text-bronze">
                  Private Gallery Access
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-ivory">
                Looking for photos of yourself?
              </h3>
              <p className="text-ivory/70 text-xs sm:text-sm font-light leading-relaxed">
                We protect guest privacy by keeping personal portraits private. Upload a quick selfie or snap a live photo to automatically match and unlock your private event photos.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsSelfieModalOpen(true)}
              className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 bg-bronze hover:bg-bronze-light text-ivory text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-lg self-start md:self-auto"
            >
              <Camera className="w-4 h-4" />
              <span>Unlock My Photos</span>
            </button>
          </div>
        )}

        {/* 03: Controls Strip: Filter Tabs + Search Input */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b border-bordergray/70">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors rounded-sm ${
                activeFilter === "all"
                  ? "bg-charcoal text-ivory"
                  : "bg-beige/60 text-charcoal hover:bg-beige border border-bordergray/60"
              }`}
            >
              All Photos ({photos.length})
            </button>

            {hasSearched && (
              <button
                type="button"
                onClick={() => setActiveFilter("matched")}
                className={`inline-flex items-center space-x-1.5 px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors rounded-sm ${
                  activeFilter === "matched"
                    ? "bg-bronze text-ivory shadow-sm"
                    : "bg-beige/60 text-bronze hover:bg-beige border border-bronze/40"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>My Matches ({matchedCount})</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setActiveFilter("public")}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors rounded-sm ${
                activeFilter === "public"
                  ? "bg-charcoal text-ivory"
                  : "bg-beige/60 text-charcoal hover:bg-beige border border-bordergray/60"
              }`}
            >
              Public Gallery ({publicCount})
            </button>
          </div>

          {/* Search by Filename */}
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder="Search filename..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-ivory border border-bordergray text-charcoal placeholder:text-warmgray/50 text-xs focus:outline-none focus:border-bronze font-mono rounded-sm transition-colors"
            />
            <Search className="w-3.5 h-3.5 text-warmgray absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* 04: Photo Grid */}
        {filteredPhotos.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-beige/30 border border-bordergray/60 rounded-sm p-8">
            <div className="w-12 h-12 mx-auto rounded-full bg-bronze/10 text-bronze flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-2xl text-charcoal font-light">
              No Photographs in this View
            </h4>
            <p className="text-warmgray text-xs sm:text-sm font-light max-w-md mx-auto">
              {activeFilter === "matched"
                ? "No face matches were found with the provided selfie. Try uploading a clearer, front-facing selfie with good lighting."
                : "No photographs match the current filter or search criteria."}
            </p>
            {activeFilter === "matched" && (
              <button
                type="button"
                onClick={() => setIsSelfieModalOpen(true)}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-bronze text-ivory text-xs uppercase tracking-widest font-medium hover:bg-bronze-dark transition-colors"
              >
                <Camera className="w-4 h-4" />
                <span>Upload Another Angle</span>
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredPhotos.map((item, index) => (
              <PhotoCard
                key={item.photo.id || index}
                item={item}
                sessionId={sessionId}
                onSelect={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        )}
      </main>

      {/* 05: Selfie Upload & Consent Modal */}
      <SelfieUploadModal
        isOpen={isSelfieModalOpen}
        eventId={eventId}
        onClose={() => setIsSelfieModalOpen(false)}
        onSearchSuccess={handleSearchSuccess}
      />

      {/* 06: Full-Screen Photo Lightbox */}
      {lightboxIndex !== null && (
        <PhotoLightbox
          items={filteredPhotos}
          currentIndex={lightboxIndex}
          sessionId={sessionId}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}

      {/* 07: Cinigama Standard Footer */}
      <Footer />
    </div>
  );
}

export default function GetYourPhotosPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ivory flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-2 border-bronze border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs uppercase font-sans tracking-[0.25em] text-bronze font-semibold">
              Loading Cinigama Portal...
            </p>
          </div>
        </div>
      }
    >
      <GetYourPhotosContent />
    </Suspense>
  );
}

