"use client";

import Image from "next/image";
import { Instagram, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/data/navigation";

const INSTA_POSTS = [
  {
    url: "/images/instafeeds/image-7.jpg",
    alt: "Royal bride in handcrafted lehenga",
    caption: "Golden hour pheras in Udaipur #CinigamaWeddings"
  },
  {
    url: "/images/instafeeds/image-2.jpg",
    alt: "Bridal portrait with intricate jewellery",
    caption: "The quiet moments before the walk down the aisle."
  },
  {
    url: "/images/instafeeds/image-3.jpg",
    alt: "Traditional Kanchipuram silk saree detail",
    caption: "Heritage silks & temple morning light in Chettinad."
  },
  {
    url: "/images/instafeeds/image-4.jpg",
    alt: "Couple walking on the beach at sunset",
    caption: "Barefoot cliffside vows above the Arabian sea."
  },
  {
    url: "/images/instafeeds/image-5.jpg",
    alt: "Haldi ceremony with yellow flowers",
    caption: "Euphoric marigold petals during the haldi!"
  },
  {
    url: "/images/instafeeds/image-6.jpg",
    alt: "Twilight mandap illuminated with diyas",
    caption: "Lake Pichola mandap setup under a million stars."
  },
];

export default function InstagramFeed() {
  return (
    <section className="bg-beige/40 py-16 sm:py-28 border-t border-bordergray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] block mb-1.5 font-semibold">
            Visual Diary
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-charcoal font-light tracking-tight">
            FOLLOW THE STORIES
          </h2>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-xs font-mono text-warmgray hover:text-bronze transition-colors tracking-widest mt-1 inline-block"
          >
            @cinigama.weddings
          </a>
        </div>

        <div>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-charcoal hover:text-bronze transition-colors group"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span className="border-b border-charcoal group-hover:border-bronze pb-0.5">
              Follow On Instagram
            </span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* 3 Grid on Mobile, 6-Grid Images on Web */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {INSTA_POSTS.map((post, idx) => (
            <motion.a
              key={idx}
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
              className="group relative aspect-square w-full overflow-hidden bg-beige block rounded-sm shadow-sm hover:shadow-md"
            >
              <Image
                src={post.url}
                alt={post.alt}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                <div className="w-8 h-8 rounded-full bg-ivory/90 text-charcoal flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Instagram className="w-3.5 h-3.5 text-bronze" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
