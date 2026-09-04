import Image from "next/image";
import { Instagram, ArrowRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/navigation";

const INSTA_POSTS = [
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
    alt: "Royal bride in handcrafted lehenga",
    caption: "Golden hour pheras in Udaipur #CinigamaWeddings"
  },
  {
    url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
    alt: "Bridal portrait with intricate jewellery",
    caption: "The quiet moments before the walk down the aisle."
  },
  {
    url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    alt: "Traditional Kanchipuram silk saree detail",
    caption: "Heritage silks & temple morning light in Chettinad."
  },
  {
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
    alt: "Couple walking on the beach at sunset",
    caption: "Barefoot cliffside vows above the Arabian sea."
  },
  {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    alt: "Haldi ceremony with yellow flowers",
    caption: "Euphoric marigold petals during the haldi!"
  },
  {
    url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=800&auto=format&fit=crop",
    alt: "Twilight mandap illuminated with diyas",
    caption: "Lake Pichola mandap setup under a million stars."
  },
];

export default function InstagramFeed() {
  return (
    <section className="bg-beige/40 py-20 sm:py-28 border-t border-bordergray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 flex flex-col sm:flex-row sm:items-end justify-between">
        <div>
          <span className="text-[11px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] block mb-2 font-semibold">
            Visual Diary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light tracking-tight">
            FOLLOW THE STORIES
          </h2>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-warmgray hover:text-bronze transition-colors tracking-widest mt-1 inline-block"
          >
            @cinigama.weddings
          </a>
        </div>

        <div className="mt-4 sm:mt-0">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-charcoal hover:text-bronze transition-colors group"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span className="border-b border-charcoal group-hover:border-bronze pb-0.5">
              Follow On Instagram
            </span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* 6-Grid Images */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTA_POSTS.map((post, idx) => (
            <a
              key={idx}
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square w-full overflow-hidden bg-beige block"
            >
              <Image
                src={post.url}
                alt={post.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center transition-transform duration-700 ease-editorial group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="w-9 h-9 rounded-full bg-ivory/90 text-charcoal flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Instagram className="w-4 h-4 text-bronze" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
