export interface EventPhoto {
  id: string;
  event_id: string;
  original_filename: string;
  is_public: boolean;
  face_count?: number;
  url?: string;
  thumbnail_url?: string;
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
  organiser_id?: string;
  name: string;
  slug?: string;
  access_type: "public" | "private" | string;
  status: "active" | "archived" | string;
  description?: string;
  date?: string;
  location?: string;
  cover_image?: string;
}

export interface EventResponse {
  success: boolean;
  message?: string;
  data: EventData;
}

