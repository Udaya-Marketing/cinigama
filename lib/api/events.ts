import {
  ConsentResponse,
  EventData,
  EventPhoto,
  PhotoSearchItem,
  SearchResponse,
} from "@/types/photo-portal";

// API Base URL - configurable via environment variable, defaults to https://cinigama-backend.vercel.app
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "https://cinigama-backend.vercel.app";

/**
 * 1. Fetch Event Details
 * GET /api/v1/events/{id}
 */
export async function fetchEventDetails(eventId: string): Promise<EventData | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/events/${eventId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (res.ok) {
      const json = await res.json();
      if (json.data) return json.data;
    }
  } catch (err) {
    console.error("Error fetching event details:", err);
  }

  return null;
}

/**
 * 2. Fetch Public Photos for an Event
 * Tries GET /api/v1/events/{id}/photos?is_public=true, /photos/public, or /photos
 */
export async function fetchPublicPhotos(eventId: string): Promise<PhotoSearchItem[]> {
  try {
    const endpoints = [
      `${API_BASE_URL}/api/v1/events/${eventId}/photos?is_public=true`,
      `${API_BASE_URL}/api/v1/events/${eventId}/photos/public`,
      `${API_BASE_URL}/api/v1/events/${eventId}/photos`,
    ];

    for (const url of endpoints) {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        });

        if (res.ok) {
          const json = await res.json();
          const photos: EventPhoto[] = json.data?.photos || json.data || [];
          if (Array.isArray(photos)) {
            return photos
              .filter((p) => p.is_public !== false)
              .map((photo) => ({
                photo,
                match_type: "public" as const,
                similarity_score: null,
                detection_confidence: null,
              }));
          }
        }
      } catch {
        // try next endpoint variant
      }
    }
  } catch (err) {
    console.error("Error fetching public photos:", err);
  }

  return [];
}

/**
 * 3. Attendee Face Recognition Search: Record Consent & Initialize Search Session
 * POST https://cinigama-backend.vercel.app/api/v1/events/{id}/search/consent
 * Body: { "consent_given": true, "purpose": "facial_recognition_search" }
 */
export async function recordSearchConsent(eventId: string): Promise<ConsentResponse> {
  const res = await fetch(`${API_BASE_URL}/api/v1/events/${eventId}/search/consent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      consent_given: true,
      purpose: "facial_recognition_search",
    }),
  });

  if (!res.ok) {
    let errMsg = `Failed to record consent (Status: ${res.status})`;
    try {
      const errJson = await res.json();
      if (errJson.message) errMsg = errJson.message;
    } catch {
      // ignore
    }
    throw new Error(errMsg);
  }

  const json: ConsentResponse = await res.json();
  return json;
}

/**
 * 4. Upload Selfie & Retrieve Matching Photos
 * POST https://cinigama-backend.vercel.app/api/v1/events/{id}/search
 * Form-data:
 * - selfie=@attendee_selfie.jpg (one or more selfies)
 * - session_id=...
 */
export async function searchFacesWithSelfie(
  eventId: string,
  sessionId: string,
  selfies: File[]
): Promise<SearchResponse> {
  const formData = new FormData();
  formData.append("session_id", sessionId);

  // Append selfie file(s)
  selfies.forEach((file) => {
    formData.append("selfie", file);
  });

  const res = await fetch(`${API_BASE_URL}/api/v1/events/${eventId}/search`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    let errMsg = `Face recognition search failed (Status: ${res.status})`;
    try {
      const errJson = await res.json();
      if (errJson.message) errMsg = errJson.message;
    } catch {
      // ignore
    }
    throw new Error(errMsg);
  }

  const json: SearchResponse = await res.json();
  return json;
}

/**
 * 5. Secure Image Delivery URLs
 * View full photo:
 * GET https://cinigama-backend.vercel.app/api/v1/events/{eventId}/photos/{photoId}/view?session_id={sessionId}
 */
export function getPhotoViewUrl(
  eventId: string,
  photoId: string,
  sessionId?: string | null
): string {
  const sessionParam = sessionId ? `?session_id=${encodeURIComponent(sessionId)}` : "";
  return `${API_BASE_URL}/api/v1/events/${eventId}/photos/${photoId}/view${sessionParam}`;
}

/**
 * Get Thumbnail:
 * GET https://cinigama-backend.vercel.app/api/v1/events/{eventId}/photos/{photoId}/thumbnail?session_id={sessionId}
 */
export function getPhotoThumbnailUrl(
  eventId: string,
  photoId: string,
  sessionId?: string | null
): string {
  const sessionParam = sessionId ? `?session_id=${encodeURIComponent(sessionId)}` : "";
  return `${API_BASE_URL}/api/v1/events/${eventId}/photos/${photoId}/thumbnail${sessionParam}`;
}
