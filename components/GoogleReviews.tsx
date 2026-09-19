"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const REVIEWS = [
  {
    author: "Shilpa Bhasker",
    location: "CINIGAMA CHENNAI",
    date: "2 months ago",
    initial: "S",
    text: "We had a wonderful experience with Cinigama from start to finish. Everything was very well organised from day one, and the team kept us updated at every stage of the process. They didn't just take photos—they captured the real soul of our wedding.",
  },
  {
    author: "Yogithaa M",
    location: "CINIGAMA BANGALORE",
    date: "1 month ago",
    initial: "Y",
    text: "My sister's wedding was covered by Cinigama, and our whole family loved the experience. They made sure we enjoyed every moment without stiff posing. The teaser delivered within 3 days gave our entire family goosebumps!",
  },
  {
    author: "Kiruthika & Ashwin",
    location: "CINIGAMA COIMBATORE",
    date: "3 months ago",
    initial: "K",
    text: "I've seen many photography teams, but this was completely different. The team handled everything with extreme professionalism and care. The photos have a timeless, warm film quality that feels truly luxury.",
  },
  {
    author: "Ananya & Rohan",
    location: "CINIGAMA UDAIPUR",
    date: "4 months ago",
    initial: "A",
    text: "Our palace wedding film feels like an Oscar-nominated indie film. The soundtrack, the color grading, the candid laughter—everything was executed with unmatched perfection. Best decision we made.",
  },
  {
    author: "Deepika & Vikram",
    location: "CINIGAMA GOA",
    date: "5 months ago",
    initial: "D",
    text: "From our sunset beach vows to the midnight pool party, Cinigama captured the unfiltered joy of every guest. The custom linen album craftsmanship is stunning!",
  },
];

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? REVIEWS.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
  };

  // Get 3 consecutive reviews for desktop layout, wrapping around smoothly
  const getDesktopReviews = () => {
    return [
      REVIEWS[currentIndex % REVIEWS.length],
      REVIEWS[(currentIndex + 1) % REVIEWS.length],
      REVIEWS[(currentIndex + 2) % REVIEWS.length],
    ];
  };

  const desktopReviews = getDesktopReviews();
  const mobileReview = REVIEWS[currentIndex % REVIEWS.length];

  return (
    <section id="reviews" className="bg-ivory py-16 sm:py-28 border-t border-bordergray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Rating Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Google G Logo Badge + 4.9 Score */}
          <div className="inline-flex items-center space-x-3 bg-beige/60 border border-bordergray/80 px-4 sm:px-6 py-2 rounded-full mb-6 shadow-sm">
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-charcoal font-semibold">
              4.9 Rating on Google Reviews
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <span className="font-serif text-5xl sm:text-7xl text-charcoal font-light leading-none">
              4.9
            </span>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center space-x-1 text-[#C7A878]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mt-1.5 font-medium">
                180+ VERIFIED 5-STAR REVIEWS
              </span>
            </div>
          </div>

          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-warmgray/70 font-mono max-w-lg mx-auto">
            CHENNAI &nbsp;•&nbsp; BANGALORE &nbsp;•&nbsp; COIMBATORE &nbsp;•&nbsp; MUMBAI &nbsp;•&nbsp; UDAIPUR &nbsp;•&nbsp; GOA
          </p>
        </div>

        {/* Desktop Layout (Stable 3 Cards Grid) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {desktopReviews.map((rev, idx) => (
            <div
              key={`${rev.author}-${idx}`}
              className="bg-beige/40 p-8 border border-bordergray/70 hover:border-[#C7A878] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md rounded-sm group min-h-[280px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1 text-[#C7A878]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-warmgray/60 uppercase tracking-widest">
                    Google Verified
                  </span>
                </div>

                <p className="text-charcoal/85 text-sm font-light leading-relaxed mb-8 italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="border-t border-bordergray/60 pt-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#C7A878]/20 text-[#9C7D4D] flex items-center justify-center font-serif text-sm font-semibold">
                    {rev.initial}
                  </div>
                  <div>
                    <span className="font-serif text-base text-charcoal block font-medium leading-none mb-1">
                      {rev.author}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.18em] text-warmgray font-sans block">
                      {rev.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout (Single Card Carousel) */}
        <div className="block md:hidden max-w-md mx-auto">
          <div className="bg-beige/40 p-6 border border-bordergray/70 transition-all duration-300 flex flex-col justify-between shadow-sm rounded-sm min-h-[260px]">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-1 text-[#C7A878]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[9px] font-mono text-warmgray/60 uppercase tracking-widest">
                  Google Verified
                </span>
              </div>

              <p className="text-charcoal/85 text-xs font-light leading-relaxed mb-6 italic">
                &ldquo;{mobileReview.text}&rdquo;
              </p>
            </div>

            <div className="border-t border-bordergray/60 pt-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#C7A878]/20 text-[#9C7D4D] flex items-center justify-center font-serif text-sm font-semibold">
                  {mobileReview.initial}
                </div>
                <div>
                  <span className="font-serif text-base text-charcoal block font-medium leading-none mb-1">
                    {mobileReview.author}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-warmgray font-sans block">
                    {mobileReview.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls & Links */}
        <div className="flex items-center justify-between pt-8 sm:pt-10 border-t border-bordergray/40 mt-8 max-w-6xl mx-auto">
          {/* Pagination Dots */}
          <div className="flex items-center space-x-2">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-[#C7A878]" : "w-1.5 bg-bordergray hover:bg-warmgray"
                }`}
              />
            ))}
          </div>

          {/* Direct Google Link */}
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-charcoal hover:text-[#C7A878] transition-colors"
          >
            <span className="hidden sm:inline">View All 180+ Reviews</span>
            <span className="sm:hidden">180+ Reviews</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prev}
              aria-label="Previous Review"
              className="p-2 sm:p-2.5 rounded-full border border-bordergray hover:border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next Review"
              className="p-2 sm:p-2.5 rounded-full border border-bordergray hover:border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
