"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Camera,
  Upload,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Trash2,
  Plus,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import {
  recordSearchConsent,
  searchFacesWithSelfie,
} from "@/lib/api/events";
import { SearchResponse } from "@/types/photo-portal";

interface SelfieUploadModalProps {
  isOpen: boolean;
  eventId: string;
  onClose: () => void;
  onSearchSuccess: (response: SearchResponse) => void;
}

type ModalStep = "consent" | "upload" | "scanning";

export default function SelfieUploadModal({
  isOpen,
  eventId,
  onClose,
  onSearchSuccess,
}: SelfieUploadModalProps) {
  const [step, setStep] = useState<ModalStep>("consent");
  const [consentChecked, setConsentChecked] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isInitializingConsent, setIsInitializingConsent] = useState(false);

  // Uploaded selfies state (supports 1 or more selfies as requested)
  const [selfies, setSelfies] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"upload" | "camera">("upload");

  // Camera capture state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  // Scanning animation stage
  const [scanStatus, setScanStatus] = useState("Analyzing facial landmarks...");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Clean up object URLs and camera on unmount or close
  useEffect(() => {
    return () => {
      stopCamera();
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  useEffect(() => {
    if (!isOpen) {
      stopCamera();
      setStep("consent");
      setConsentChecked(false);
      setSelfies([]);
      setPreviewUrls([]);
      setErrorMsg(null);
    }
  }, [isOpen]);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  const startCamera = async () => {
    try {
      setCameraError(null);
      stopCamera();
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsCameraActive(true);
    } catch (err: unknown) {
      console.error("Camera access error:", err);
      setCameraError("Camera permission was denied or device is unavailable. Please choose file upload.");
      setActiveTab("upload");
    }
  };

  // Switch tabs
  const handleTabChange = (tab: "upload" | "camera") => {
    setActiveTab(tab);
    if (tab === "camera") {
      startCamera();
    } else {
      stopCamera();
    }
  };

  // Handle consent proceed
  const handleProceedConsent = async () => {
    if (!consentChecked) return;
    try {
      setIsInitializingConsent(true);
      setErrorMsg(null);
      const consentRes = await recordSearchConsent(eventId);
      if (consentRes.success && consentRes.data?.session_id) {
        setSessionId(consentRes.data.session_id);
        setStep("upload");
      } else {
        throw new Error(consentRes.message || "Failed to initialize search session");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Error connecting to search session";
      setErrorMsg(message);
    } finally {
      setIsInitializingConsent(false);
    }
  };

  // Handle file picker selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      addFiles(filesArray);
      e.target.value = "";
    }
  };

  const addFiles = (newFiles: File[]) => {
    const validImages = newFiles.filter((f) => f.type.startsWith("image/"));
    if (validImages.length === 0) {
      setErrorMsg("Please upload valid image files (JPG, PNG, WebP)");
      return;
    }
    const newPreviews = validImages.map((file) => URL.createObjectURL(file));
    setSelfies((prev) => [...prev, ...validImages]);
    setPreviewUrls((prev) => [...prev, ...newPreviews]);
    setErrorMsg(null);
  };

  // Capture snapshot from webcam
  const handleSnapPhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw flipped for mirror effect
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const file = new File([blob], `selfie-camera-${Date.now()}.jpg`, {
          type: "image/jpeg",
        });
        addFiles([file]);
        stopCamera();
        setActiveTab("upload");
      },
      "image/jpeg",
      0.95
    );
  };

  const removeSelfie = (index: number) => {
    URL.revokeObjectURL(previewUrls[index]);
    setSelfies((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  // Execute Face Search
  const handleExecuteSearch = async () => {
    if (selfies.length === 0) {
      setErrorMsg("Please provide at least one selfie to search.");
      return;
    }

    if (!sessionId) {
      setErrorMsg("Search session not found. Please complete consent first.");
      setStep("consent");
      return;
    }

    setStep("scanning");
    setScanStatus("Scanning event photos for matching faces...");

    try {
      const response = await searchFacesWithSelfie(eventId, sessionId, selfies);
      onSearchSuccess(response);
      onClose();
    } catch (err: unknown) {
      console.error("Search execution failed:", err);
      const message =
        err instanceof Error ? err.message : "Search encountered an error. Please try again.";
      setErrorMsg(message);
      setStep("upload");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-charcoal/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-ivory border border-bordergray shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-bordergray/70 flex items-center justify-between bg-beige/40">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-bronze/10 rounded-full text-bronze">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-bronze font-semibold block">
                Face Recognition AI
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-light">
                Find Your Event Photos
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-2 text-warmgray hover:text-charcoal hover:bg-beige transition-colors rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {errorMsg && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 rounded-sm">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: Consent */}
          {step === "consent" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="p-5 bg-beige/50 border border-bordergray space-y-3 rounded-sm">
                <div className="flex items-center space-x-2 text-bronze">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Privacy & Biometric Consent
                  </span>
                </div>
                <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed">
                  To automatically isolate and deliver your private photographs from this event, Cinigama uses an encrypted facial vector search.
                </p>
                <ul className="text-xs text-warmgray space-y-1.5 list-disc list-inside font-light pt-1">
                  <li>Your selfie is processed strictly to match photos from this event.</li>
                  <li>Search sessions expire automatically after search completion.</li>
                  <li>Your facial geometry data is never shared with third parties or advertisers.</li>
                </ul>
              </div>

              {/* Consent Checkbox */}
              <label className="flex items-start space-x-3 cursor-pointer select-none group p-2">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-bordergray text-bronze focus:ring-bronze accent-bronze cursor-pointer"
                />
                <span className="text-xs sm:text-sm text-charcoal font-light group-hover:text-bronze transition-colors">
                  I consent to the processing of my selfie for facial recognition search within this event gallery.
                </span>
              </label>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  disabled={!consentChecked || isInitializingConsent}
                  onClick={handleProceedConsent}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 bg-charcoal text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-bronze transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isInitializingConsent ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-bronze" />
                      <span>Initializing Secure Session...</span>
                    </>
                  ) : (
                    <>
                      <span>Continue to Selfie Upload</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Upload / Capture Selfies */}
          {step === "upload" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Tab Selector: Upload or Live Camera */}
              <div className="flex border-b border-bordergray">
                <button
                  type="button"
                  onClick={() => handleTabChange("upload")}
                  className={`flex-1 py-3 text-xs uppercase tracking-[0.18em] font-medium border-b-2 transition-colors flex items-center justify-center gap-2 ${
                    activeTab === "upload"
                      ? "border-bronze text-charcoal"
                      : "border-transparent text-warmgray hover:text-charcoal"
                  }`}
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Photo(s)</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("camera")}
                  className={`flex-1 py-3 text-xs uppercase tracking-[0.18em] font-medium border-b-2 transition-colors flex items-center justify-center gap-2 ${
                    activeTab === "camera"
                      ? "border-bronze text-charcoal"
                      : "border-transparent text-warmgray hover:text-charcoal"
                  }`}
                >
                  <Camera className="w-4 h-4" />
                  <span>Take Live Selfie</span>
                </button>
              </div>

              {/* Tab 1: Upload Files */}
              {activeTab === "upload" && (
                <div className="space-y-4">
                  {/* File Upload Drop Area */}
                  <label className="border-2 border-dashed border-bordergray hover:border-bronze bg-beige/30 p-8 rounded-sm text-center flex flex-col items-center justify-center cursor-pointer transition-colors group">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <div className="w-12 h-12 rounded-full bg-ivory border border-bordergray flex items-center justify-center mb-3 group-hover:scale-105 group-hover:border-bronze transition-all text-bronze shadow-sm">
                      <Upload className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-charcoal mb-1">
                      Click or Drag Selfies Here
                    </span>
                    <span className="text-[11px] text-warmgray font-light">
                      Supports JPG, PNG, WebP (Upload one or more angles)
                    </span>
                  </label>
                </div>
              )}

              {/* Tab 2: Live Camera */}
              {activeTab === "camera" && (
                <div className="space-y-4">
                  {cameraError ? (
                    <div className="p-4 bg-red-50 text-red-700 text-xs text-center border border-red-200">
                      {cameraError}
                    </div>
                  ) : (
                    <div className="relative aspect-video max-h-72 w-full bg-black rounded-sm overflow-hidden flex items-center justify-center shadow-inner">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover scale-x-[-1]"
                      />

                      {/* Oval Face Silhouette Overlay */}
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <div className="w-40 h-52 border-2 border-bronze/70 rounded-[50%] border-dashed shadow-[0_0_20px_rgba(139,111,71,0.3)] animate-pulse" />
                      </div>

                      {/* Shutter Button */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                        <button
                          type="button"
                          onClick={handleSnapPhoto}
                          disabled={!isCameraActive}
                          className="px-6 py-2.5 bg-ivory text-charcoal border-2 border-bronze rounded-full text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-bronze hover:text-ivory transition-colors shadow-lg"
                        >
                          <Camera className="w-4 h-4 text-bronze group-hover:text-ivory" />
                          <span>Capture Selfie</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Previews of Uploaded / Snapped Selfies */}
              {previewUrls.length > 0 && (
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center justify-between text-xs text-charcoal font-medium">
                    <span className="uppercase tracking-wider">
                      Selected Selfies ({previewUrls.length})
                    </span>
                    <label className="text-bronze hover:underline cursor-pointer flex items-center gap-1 font-sans text-xs">
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add another</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {previewUrls.map((url, idx) => (
                      <div
                        key={idx}
                        className="group relative aspect-square rounded-sm overflow-hidden border border-bordergray bg-charcoal/5 shadow-sm"
                      >
                        <Image
                          src={url}
                          alt={`Selfie preview ${idx + 1}`}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeSelfie(idx)}
                          aria-label="Remove photo"
                          className="absolute top-1 right-1 p-1 bg-charcoal/80 text-white rounded hover:bg-red-600 transition-colors opacity-90 hover:opacity-100"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Search Submission Button */}
              <div className="pt-4 border-t border-bordergray/60 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    stopCamera();
                    setStep("consent");
                  }}
                  className="px-4 py-2.5 text-xs uppercase tracking-widest text-warmgray hover:text-charcoal transition-colors"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleExecuteSearch}
                  disabled={selfies.length === 0}
                  className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 bg-bronze text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-bronze-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>
                    Search Event Gallery ({selfies.length} {selfies.length === 1 ? "Selfie" : "Selfies"})
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Scanning AI Animation */}
          {step === "scanning" && (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in duration-300">
              {/* Radar Scanner Visual */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-bronze/40 animate-ping opacity-75" />
                <div className="absolute inset-2 rounded-full border border-bronze/60 animate-spin" />
                <div className="w-20 h-20 rounded-full bg-bronze/10 border-2 border-bronze flex items-center justify-center text-bronze shadow-[0_0_25px_rgba(139,111,71,0.3)]">
                  <Camera className="w-8 h-8" />
                </div>
              </div>

              <div className="space-y-2 max-w-sm">
                <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-bronze font-semibold block">
                  Processing Biometrics
                </span>
                <h4 className="font-serif text-2xl text-charcoal font-light">
                  Scanning Event Moments
                </h4>
                <p className="text-warmgray text-xs sm:text-sm font-light font-mono transition-all duration-300">
                  {scanStatus}
                </p>
              </div>

              <div className="w-48 h-1 bg-bordergray rounded-full overflow-hidden">
                <div className="h-full bg-bronze animate-pulse w-full" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

