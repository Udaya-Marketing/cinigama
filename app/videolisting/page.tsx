// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { ArrowLeft, ArrowRight, Camera, Sparkles, MapPin, Calendar, Maximize2 } from "lucide-react";

// const preWeddingVideos = [
//   "/videos/Cinigama02.webm",
//   "/videos/Highlight01.webm",
//   "/videos/HariVideo.webm",
//   "/videos/kavin01.webm",
//   "/videos/Hari92.webm",
//   "/videos/kavin02.webm", 
//   "/videos/kavin03.webm",
// ];

// const droneVideos = [
//   "https://player.vimeo.com/video/76979871",

//   "https://vimeo.com/1230875508?fl=tl&fe=ec",
//   "https://vimeo.com/1230875505?fl=tl&fe=ec",
//   "https://vimeo.com/1230875507?fl=tl&fe=ec",
//   "https://vimeo.com/1230875507?fl=tl&fe=ec",
//   "https://vimeo.com/1230876107?fl=tl&fe=ec",
//   "https://vimeo.com/1230875710?fl=tl&fe=ec",
//   "https://vimeo.com/1230875506?fl=tl&fe=ec",
// ];

// export default function VideoListingPage() {
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

//   return (
//     <>
//       <main className="bg-beige/40">

//         {/* ========================================= */}
//         {/* PAGE INTRO */}
//         {/* ========================================= */}
        

//         <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-32 lg:px-12 lg:pt-40">
          
//             <div className="mb-8 sm:mb-10">
//               {/* Back button */}
//               <Link
//                 href="/"
//                 className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-black/70 hover:text-black mb-6 transition-colors"
//                 >
//                 <ArrowLeft className="w-3.5 h-3.5" />
//                 <span>Back to All Stories</span>
//               </Link>
//             </div>
//           <div className="border-b border-bordergray pb-10">
        
//             <span className="mb-4 block text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-bronze sm:text-xs">
//               Our Films
//             </span>

//             <h1 className="font-serif text-4xl font-light leading-[0.95] tracking-tight text-charcoal sm:text-6xl md:text-7xl">
//               STORIES
//               <br />
//               <span className="font-normal italic">
//                 IN EMOTION.
//               </span>
//             </h1>

//             <p className="mt-6 max-w-xl text-sm leading-7 text-charcoal/60">
//               From intimate pre-wedding stories to cinematic aerial
//               perspectives, explore some of the moments we've captured.
//             </p>

//           </div>
//         </section>


//         {/* ========================================= */}
//         {/* PRE-WEDDING STORIES */}
//         {/* ========================================= */}

//         <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 sm:pb-32 lg:px-12">

//           {/* Section Header */}
//           <div className="mb-12 flex flex-col gap-6 border-b border-bordergray pb-8 sm:mb-16 md:flex-row md:items-end md:justify-between">

//             <div>
//               <span className="mb-3 block text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-bronze sm:text-xs">
//                 Pre-Wedding
//               </span>

//               <h2 className="font-serif text-3xl font-light leading-tight text-charcoal sm:text-5xl md:text-6xl">
//                 PRE-WEDDING
//                 <br />
//                 <span className="italic">
//                   STORIES.
//                 </span>
//               </h2>
//             </div>

//             <p className="max-w-sm text-sm leading-6 text-charcoal/60 md:text-right">
//               Intimate moments, natural emotions and beautiful stories
//               captured before the big day.
//             </p>

//           </div>


//           {/* Videos */}
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

//             {preWeddingVideos.map((video, index) => (
//               <VideoCard
//                 key={video}
//                 video={video}
//                 index={index}
//                 onClick={() => setSelectedVideo(video)}
//               />
//             ))}

//           </div>

//         </section>


//         {/* ========================================= */}
//         {/* DRONE SHOTS */}
//         {/* ========================================= */}

//         <section className="border-t border-bordergray bg-[#e9e3d9]/40">

//           <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">

//             {/* Section Header */}
//             <div className="mb-12 flex flex-col gap-6 border-b border-bordergray pb-8 sm:mb-16 md:flex-row md:items-end md:justify-between">

//               <div>
//                 <span className="mb-3 block text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-bronze sm:text-xs">
//                   Aerial Cinema
//                 </span>

//                 <h2 className="font-serif text-3xl font-light leading-tight text-charcoal sm:text-5xl md:text-6xl">
//                   DRONE
//                   <br />
//                   <span className="italic">
//                     SHOTS.
//                   </span>
//                 </h2>
//               </div>

//               <p className="max-w-sm text-sm leading-6 text-charcoal/60 md:text-right">
//                 A different perspective on love, celebrations and the
//                 places where your stories unfold.
//               </p>

//             </div>


//             {/* Videos */}
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

//               {droneVideos.map((video, index) => (
//                 <VideoCard
//                   key={video}
//                   video={video}
//                   index={index}
//                   onClick={() => setSelectedVideo(video)}
//                 />
//               ))}

//             </div>

//           </div>

//         </section>

//       </main>


//       {/* ========================================= */}
//       {/* VIDEO POPUP */}
//       {/* ========================================= */}

//       {selectedVideo && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
//           onClick={() => setSelectedVideo(null)}
//         >

//           <div
//             className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >

//             {/* Close Button */}
//             <button
//               type="button"
//               onClick={() => setSelectedVideo(null)}
//               className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-black"
//               aria-label="Close video"
//             >
//               ✕
//             </button>

//             {/* Video */}
//             <video
//               key={selectedVideo}
//               src={selectedVideo}
//               className="max-h-[85vh] w-full object-contain"
//               controls
//               controlsList="nodownload noplaybackrate"
//               disablePictureInPicture
//               autoPlay
//               playsInline
//               preload="auto"
//             />

//           </div>

//         </div>
//       )}
//     </>
//   );
// }


// /* ========================================= */
// /* VIDEO CARD */
// /* ========================================= */

// function VideoCard({
//   video,
//   index,
//   onClick,
// }: {
//   video: string;
//   index: number;
//   onClick: () => void;
// }) {
//   return (
//     <div
//       className="group cursor-pointer overflow-hidden rounded-lg bg-black"
//       onClick={onClick}
//     >

//       {/* Video */}
//       <div className="relative overflow-hidden">

//         <video
//           src={video}
//           className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="metadata"
//         />

//         {/* Play indicator */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">

//           <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-lg">
//             <span className="ml-1 text-lg">
//               ▶
//             </span>
//           </div>

//         </div>

//       </div>


//       {/* Bottom Info */}
//       <div className="flex items-center justify-between bg-charcoal px-4 py-3">

//         <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/70">
//           Film {String(index + 1).padStart(2, "0")}
//         </span>

//         <span className="text-xs text-white/80">
//           Watch →
//         </span>

//       </div>

//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Camera, Sparkles, MapPin, Calendar, Maximize2 } from "lucide-react";

const preWeddingVideos = [
  "/videos/Cinigama02.webm",
  "/videos/Highlight01.webm",
  "/videos/HariVideo.webm",
  "/videos/kavin01.webm",
  "/videos/Hari92.webm",
  "/videos/kavin02.webm", 
  "/videos/kavin03.webm",
];

// Vimeo videos. You can paste either normal links (https://vimeo.com/123...)
// or player links (https://player.vimeo.com/video/123...). Extra bits like
// ?fl=tl&fe=ec are ignored.
const droneVideos = [
  "https://vimeo.com/1230875508",
  "https://vimeo.com/1230875505",
  "https://vimeo.com/1230875507",
  "https://vimeo.com/1230875710",
  "https://vimeo.com/1230875506",
  "https://vimeo.com/1230876107",
];

/* ========================================= */
/* VIMEO HELPERS */
/* ========================================= */

function isVimeo(src: string) {
  return src.includes("vimeo.com");
}

// Turns any Vimeo link into a player embed URL.
// Supports unlisted links too: vimeo.com/ID/HASH  ->  ?h=HASH
function vimeoEmbedUrl(src: string, params: string) {
  const match = src.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([a-zA-Z0-9]+))?/);
  if (!match) return src;

  const [, id, hash] = match;
  const hashParam = hash ? `h=${hash}&` : "";

  // Hides the like, watch later, share and embed-code buttons on every video
  const hideButtons = "like=0&watchlater=0&share=0&embed=0&title=0&byline=0&portrait=0";

  return `https://player.vimeo.com/video/${id}?${hashParam}${hideButtons}&${params}`;
}

export default function VideoListingPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <main className="bg-beige/40">

        {/* ========================================= */}
        {/* PAGE INTRO */}
        {/* ========================================= */}
        

        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-32 lg:px-12 lg:pt-40">
          
            <div className="mb-8 sm:mb-10">
              {/* Back button */}
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-black/70 hover:text-black mb-6 transition-colors"
                >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Stories</span>
              </Link>
            </div>
          <div className="border-b border-bordergray pb-10">
        
            <span className="mb-4 block text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-bronze sm:text-xs">
              Our Films
            </span>

            <h1 className="font-serif text-4xl font-light leading-[0.95] tracking-tight text-charcoal sm:text-6xl md:text-7xl">
              STORIES
              <br />
              <span className="font-normal italic">
                IN EMOTION.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-charcoal/60">
              From intimate pre-wedding stories to cinematic aerial
              perspectives, explore some of the moments we've captured.
            </p>

          </div>
        </section>


        {/* ========================================= */}
        {/* PRE-WEDDING STORIES */}
        {/* ========================================= */}

        <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 sm:pb-32 lg:px-12">

          {/* Section Header */}
          <div className="mb-12 flex flex-col gap-6 border-b border-bordergray pb-8 sm:mb-16 md:flex-row md:items-end md:justify-between">

            <div>
              <span className="mb-3 block text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-bronze sm:text-xs">
                Pre-Wedding
              </span>

              <h2 className="font-serif text-3xl font-light leading-tight text-charcoal sm:text-5xl md:text-6xl">
                PRE-WEDDING
                <br />
                <span className="italic">
                  STORIES.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-charcoal/60 md:text-right">
              Intimate moments, natural emotions and beautiful stories
              captured before the big day.
            </p>

          </div>


          {/* Videos */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {preWeddingVideos.map((video, index) => (
              <VideoCard
                key={`${video}-${index}`}
                video={video}
                index={index}
                onClick={() => setSelectedVideo(video)}
              />
            ))}

          </div>

        </section>


        {/* ========================================= */}
        {/* DRONE SHOTS */}
        {/* ========================================= */}

        <section className="border-t border-bordergray bg-[#e9e3d9]/40">

          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32 lg:px-12">

            {/* Section Header */}
            <div className="mb-12 flex flex-col gap-6 border-b border-bordergray pb-8 sm:mb-16 md:flex-row md:items-end md:justify-between">

              <div>
                <span className="mb-3 block text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-bronze sm:text-xs">
                  Aerial Cinema
                </span>

                <h2 className="font-serif text-3xl font-light leading-tight text-charcoal sm:text-5xl md:text-6xl">
                  DRONE
                  <br />
                  <span className="italic">
                    SHOTS.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-6 text-charcoal/60 md:text-right">
                A different perspective on love, celebrations and the
                places where your stories unfold.
              </p>

            </div>


            {/* Videos */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              {droneVideos.map((video, index) => (
                <VideoCard
                  key={`${video}-${index}`}
                  video={video}
                  index={index}
                  onClick={() => setSelectedVideo(video)}
                />
              ))}

            </div>

          </div>

        </section>

      </main>


      {/* ========================================= */}
      {/* VIDEO POPUP */}
      {/* ========================================= */}

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
          onClick={() => setSelectedVideo(null)}
        >

          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-black"
              aria-label="Close video"
            >
              ✕
            </button>

            {/* Video */}
            {isVimeo(selectedVideo) ? (
              <iframe
                key={selectedVideo}
                src={vimeoEmbedUrl(selectedVideo, "autoplay=1")}
                title="Video player"
                className="aspect-video w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                key={selectedVideo}
                src={selectedVideo}
                className="max-h-[85vh] w-full object-contain"
                controls
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                autoPlay
                playsInline
                preload="auto"
              />
            )}

          </div>

        </div>
      )}
    </>
  );
}


/* ========================================= */
/* VIDEO CARD */
/* ========================================= */

function VideoCard({
  video,
  index,
  onClick,
}: {
  video: string;
  index: number;
  onClick: () => void;
}) {
  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-lg bg-black"
      onClick={onClick}
    >

      {/* Video */}
      <div className="relative overflow-hidden">

        {isVimeo(video) ? (
          // pointer-events-none lets the click reach the card, so the popup opens
          <iframe
            src={vimeoEmbedUrl(
              video,
              "autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0"
            )}
            title={`Film ${index + 1}`}
            className="pointer-events-none aspect-video w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
          />
        ) : (
          <video
            src={video}
            className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}

        {/* Play indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-lg">
            <span className="ml-1 text-lg">
              ▶
            </span>
          </div>

        </div>

      </div>


      {/* Bottom Info */}
      <div className="flex items-center justify-between bg-charcoal px-4 py-3">

        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-white/70">
          Film {String(index + 1).padStart(2, "0")}
        </span>

        <span className="text-xs text-white/80">
          Watch →
        </span>

      </div>

    </div>
  );
}
