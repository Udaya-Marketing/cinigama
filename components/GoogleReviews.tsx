"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    author: "Shilpa Bhasker",
    location: "CINIGAMA CHENNAI",
    text: "We had a wonderful experience with Cinigama from start to finish. Everything was very well organised from day one, and the team kept us updated at every stage of the process. They didn't just take photos—they captured the real soul of our wedding.",
  },
  {
    author: "Yogithaa M",
    location: "CINIGAMA BANGALORE",
    text: "My sister's wedding was covered by Cinigama, and our whole family loved the experience. They made sure we enjoyed every moment without stiff posing. The teaser delivered within 3 days gave our entire family goosebumps!",
  },
  {
    author: "Kiruthika & Ashwin",
    location: "CINIGAMA COIMBATORE",
    text: "I've seen many photography teams, but this was completely different. The team handled everything with extreme professionalism and care. The photos have a timeless, warm film quality that feels truly luxury.",
  },
  {
    author: "Ananya & Rohan",
    location: "CINIGAMA UDAIPUR",
    text: "Our palace wedding film feels like an Oscar-nominated indie film. The soundtrack, the color grading, the candid laughter—everything was executed with unmatched perfection. Best decision we made.",
  },
];

export default function GoogleReviews() {
  return (
    <section id="reviews" className="bg-ivory py-24 sm:py-32 border-t border-bordergray">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Rating Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center space-x-4 mb-3">
            <span className="font-serif text-5xl sm:text-7xl text-charcoal font-light leading-none">
              4.9
            </span>
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-1 text-[#C7A878]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-[11px] font-sans uppercase tracking-[0.22em] text-warmgray mt-1 font-medium">
                180+ VERIFIED GOOGLE REVIEWS
              </span>
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-warmgray/80 font-mono">
            CHENNAI • BANGALORE • COIMBATORE • MUMBAI • RAJASTHAN
          </p>
        </div>

        {/* 3 Review Cards matching Screenshot 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {REVIEWS.slice(0, 3).map((rev, idx) => (
            <div
              key={idx}
              className="bg-ivory p-8 sm:p-10 border border-bordergray/80 hover:border-[#C7A878] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(23,21,19,0.02)]"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 text-[#C7A878] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-warmgray text-sm sm:text-[15px] font-light leading-relaxed mb-8">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-bordergray/50 pt-4">
                <span className="font-serif text-lg text-charcoal block font-normal">
                  {rev.author}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-warmgray/80 font-sans block mt-0.5">
                  {rev.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
