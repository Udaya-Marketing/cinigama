import {
  ConsentResponse,
  EventData,
  EventDetailsResponse,
  EventPhoto,
  MatchType,
  PhotoSearchItem,
  SearchResponse,
} from "@/types/photo-portal";

// API Base URL - defaults to https://api.cinigama.in, configurable via NEXT_PUBLIC_API_URL
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "https://api.cinigama.in";

export interface EventDetailsResult {
  event: EventData;
  photos: PhotoSearchItem[];
  total_photos: number;
  public_photos: number;
  page?: number;
  page_size?: number;
  total_pages?: number;
  has_next?: boolean;
  has_prev?: boolean;
}

/**
 * Normalizes raw photo items from the API to PhotoSearchItem
 */
function normalizePhotoItems(
  photos: (EventPhoto | PhotoSearchItem | Record<string, unknown>)[],
  eventId: string
): PhotoSearchItem[] {
  if (!Array.isArray(photos)) return [];

  return photos.map((item) => {
    // If already in PhotoSearchItem format
    if ("photo" in item && typeof item.photo === "object" && item.photo !== null) {
      const searchItem = item as PhotoSearchItem;
      return {
        ...searchItem,
        photo: {
          ...searchItem.photo,
          event_id: searchItem.photo.event_id || eventId,
          original_filename:
            searchItem.photo.original_filename ||
            searchItem.photo.filename ||
            `photo-${searchItem.photo.id}.jpg`,
        },
      };
    }

    // If raw EventPhoto
    const raw = item as Record<string, unknown>;
    const id = String(raw.id || "");
    const filename = String(
      raw.original_filename || raw.filename || raw.name || `photo-${id}.jpg`
    );

    return {
      photo: {
        id,
        event_id: String(raw.event_id || eventId),
        original_filename: filename,
        is_public: raw.is_public !== false,
        face_count: typeof raw.face_count === "number" ? raw.face_count : undefined,
        url: typeof raw.url === "string" ? raw.url : undefined,
        thumbnail_url: typeof raw.thumbnail_url === "string" ? raw.thumbnail_url : undefined,
        processing_status: typeof raw.processing_status === "string" ? raw.processing_status : undefined,
        created_at: typeof raw.created_at === "string" ? raw.created_at : undefined,
      },
      match_type: "public" as MatchType,
      similarity_score: null,
      detection_confidence: null,
    };
  });
}

/**
 * 1. Fetch Event Details and Public Photos
 * GET /api/v1/events/{id_or_slug}/details
 * Example: https://api.cinigama.in/api/v1/events/52630/details
 */
export async function fetchEventWithDetails(
  idOrSlug: string,
  page = 1,
  pageSize = 50
): Promise<EventDetailsResult | null> {
  const cleanId = idOrSlug.trim();
  if (!cleanId) return null;

  try {
    const res = await fetch(
      `${API_BASE_URL}/api/v1/events/${encodeURIComponent(cleanId)}/details?page=${page}&page_size=${pageSize}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      }
    );

    if (res.ok) {
      const json: EventDetailsResponse = await res.json();
      if (json.success && json.data) {
        const data = json.data;
        const event = data.event;
        const eventId = event?.id || cleanId;
        const photos = normalizePhotoItems(data.photos || [], eventId);

        return {
          event: {
            ...event,
            total_photos: data.total_photos ?? event.total_photos ?? 0,
            public_photos: data.public_photos ?? event.public_photos ?? 0,
          },
          photos,
          total_photos: data.total_photos ?? event.total_photos ?? photos.length,
          public_photos: data.public_photos ?? event.public_photos ?? photos.length,
          page: data.page,
          page_size: data.page_size,
          total_pages: data.total_pages,
          has_next: data.has_next,
          has_prev: data.has_prev,
        };
      }
    }
  } catch (err) {
    console.error("Error fetching event details via /details endpoint:", err);
  }

  // Fallback to legacy GET /api/v1/events/{id} if /details is unavailable
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/events/${encodeURIComponent(cleanId)}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (res.ok) {
      const json = await res.json();
      if (json.data) {
        const event = json.data.event || json.data;
        return {
          event,
          photos: [],
          total_photos: event.total_photos ?? 0,
          public_photos: event.public_photos ?? 0,
        };
      }
    }
  } catch (fallbackErr) {
    console.error("Fallback error fetching event:", fallbackErr);
  }

  return null;
}

/**
 * 2. Attendee Face Recognition Search: Record Consent & Initialize Search Session
 * POST /api/v1/events/{id}/search/consent
 * Body: { "consent_given": true, "purpose": "facial_recognition_search" }
 */
export async function recordSearchConsent(eventId: string): Promise<ConsentResponse> {
  const res = await fetch(`${API_BASE_URL}/api/v1/events/${encodeURIComponent(eventId)}/search/consent`, {
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
 * 3. Upload Selfie & Retrieve Matching Photos
 * POST /api/v1/events/{id}/search
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

  const res = await fetch(`${API_BASE_URL}/api/v1/events/${encodeURIComponent(eventId)}/search`, {
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
 * 4. Secure Image Delivery URLs
 * Full resolution view:
 * GET /api/v1/events/{eventId}/photos/{photoId}/view?session_id={sessionId}
 */
export function getPhotoViewUrl(
  eventId?: string | null,
  photoId?: string | null,
  sessionId?: string | null,
  directUrl?: string
): string {
  if (directUrl && directUrl.startsWith("http")) {
    return directUrl;
  }
  const cleanEvent = eventId || "";
  const cleanPhoto = photoId || "";
  const sessionParam = sessionId ? `?session_id=${encodeURIComponent(sessionId)}` : "";
  return `${API_BASE_URL}/api/v1/events/${encodeURIComponent(cleanEvent)}/photos/${encodeURIComponent(cleanPhoto)}/view${sessionParam}`;
}

/**
 * Thumbnail view:
 * GET /api/v1/events/{eventId}/photos/{photoId}/thumbnail?session_id={sessionId}
 */
export function getPhotoThumbnailUrl(
  eventId?: string | null,
  photoId?: string | null,
  sessionId?: string | null,
  directUrl?: string
): string {
  if (directUrl && directUrl.startsWith("http")) {
    return directUrl;
  }
  const cleanEvent = eventId || "";
  const cleanPhoto = photoId || "";
  const sessionParam = sessionId ? `?session_id=${encodeURIComponent(sessionId)}` : "";
  return `${API_BASE_URL}/api/v1/events/${encodeURIComponent(cleanEvent)}/photos/${encodeURIComponent(cleanPhoto)}/thumbnail${sessionParam}`;
}
