export interface EventPhoto {
  id: string;
  event_id?: string;
  original_filename?: string;
  filename?: string;
  name?: string;
  is_public?: boolean;
  face_count?: number;
  url?: string;
  thumbnail_url?: string;
  processing_status?: string;
  created_at?: string;
}

export type MatchType = "face_match" | "public";

export interface PhotoSearchItem {
  photo: EventPhoto;
  match_type: MatchType;
  similarity_score: number | null;
  detection_confidence: number | null;
}

export interface ConsentSessionData {
  session_id: string;
  event_id: string;
  consent_purpose: string;
  status: "active" | "expired" | string;
  expires_at: string;
}

export interface ConsentResponse {
  success: boolean;
  message: string;
  data: ConsentSessionData;
}

export interface SearchResponseData {
  session_id: string;
  event_id: string;
  faces_detected_in_selfie: number;
  matched_count: number;
  public_count: number;
  total_returned: number;
  items: PhotoSearchItem[];
}

export interface SearchResponse {
  success: boolean;
  message: string;
  data: SearchResponseData;
}

export interface EventData {
  id: string;
  name: string;
  description?: string;
  event_date?: string;
  access_type: "public" | "private" | string;
  organiser_id?: string;
  slug?: string;
  status?: "active" | "archived" | string;
  created_at?: string;
  updated_at?: string;
  total_photos?: number;
  public_photos?: number;
  date?: string;
  location?: string;
  cover_image?: string;
}

export interface EventDetailsData {
  event: EventData;
  total_photos: number;
  public_photos: number;
  photos: (EventPhoto | PhotoSearchItem)[];
  page?: number;
  page_size?: number;
  total_pages?: number;
  has_next?: boolean;
  has_prev?: boolean;
}

export interface EventDetailsResponse {
  success: boolean;
  message: string;
  data: EventDetailsData;
}

export interface EventResponse {
  success: boolean;
  message?: string;
  data: EventData;
}
