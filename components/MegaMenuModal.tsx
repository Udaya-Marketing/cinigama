"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, MessageCircle } from "lucide-react";
import { MEGA_MENU_DATA, SOCIAL_LINKS } from "@/data/navigation";

interface MegaMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenuModal({ isOpen, onClose }: MegaMenuModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[200] bg-charcoal text-ivory flex flex-col justify-between overflow-y-auto animate-in fade-in duration-300"
    >
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-6 flex items-center justify-between border-b border-white/10">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={onClose}
          className="group flex items-center transition-opacity hover:opacity-85"
        >
          <Image
            src="/images/logo/logo-white.webp"
            alt="Cinigama Luxury Wedding Photography & Cinema"
            width={160}
            height={47}
            className="h-7 sm:h-9 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Right Actions: Get a Quote & Close */}
        <div className="flex items-center space-x-4 sm:space-x-8">
          <Link
            href="/contact"
            onClick={onClose}
            className="hidden sm:inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] px-5 py-2.5 border border-ivory/30 text-ivory hover:border-ivory hover:bg-white/5 transition-all duration-300"
          >
            <MessageCircle className="w-3.5 h-3.5 text-bronze" />
            <span>Get a Quote</span>
          </Link>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex items-center space-x-2 text-xs uppercase tracking-[0.22em] text-ivory/80 hover:text-ivory transition-colors group p-2"
          >
            <span className="hidden sm:inline font-sans">Close</span>
            <X className="w-6 h-6 text-ivory group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-10 sm:py-16 my-auto">


        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 border-t border-white/10 pt-10 mb-20">
          {MEGA_MENU_DATA.map((col) => (
            <div key={col.title} className="space-y-5">
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-[#C7A878] font-semibold block">
                {col.title}
              </span>

              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label} className="group">
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block transition-all duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-serif text-lg sm:text-xl text-ivory/90 group-hover:text-ivory group-hover:translate-x-1 font-light tracking-wide transition-all duration-200">
                          {link.label}
                        </span>
                        {link.badge && (
                          <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-[#C7A878]/20 text-[#C7A878] font-sans font-medium border border-[#C7A878]/30">
                            {link.badge}
                          </span>
                        )}
                      </div>
                      {link.subtitle && (
                        <p className="text-xs text-ivory/50 font-light mt-0.5 group-hover:text-ivory/70 transition-colors">
                          {link.subtitle}
                        </p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Prominent WhatsApp Date Check Card */}
        <div className="mb-14 sm:mt-40">
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[#C7A878] hover:bg-[#D4B788] text-charcoal p-6 sm:p-8 max-w-xl transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center space-x-4 mb-2">
              <div className="w-9 h-9 rounded-full bg-charcoal text-[#C7A878] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal tracking-wide">
                Tell us your date on WhatsApp
              </h2>
            </div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-charcoal/80 font-sans font-medium pl-13 sm:pl-[52px]">
              WE&apos;LL CHECK IF THE TEAM IS FREE FOR YOUR DATE
            </p>
          </a>
        </div>
        
      </div>

      {/* Bottom Subtle Status Bar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
        <p className="font-sans">
          Cinigama Photography • Candid & Cinematic Wedding Films since 2018
        </p>
        <div className="flex items-center space-x-6 text-[11px] uppercase tracking-widest text-white/60">
          <Link href="/stories" onClick={onClose} className="hover:text-ivory">
            Stories
          </Link>
          <span>•</span>
          <Link href="/services" onClick={onClose} className="hover:text-ivory">
            Pricing
          </Link>
          <span>•</span>
          <Link href="/contact" onClick={onClose} className="hover:text-ivory">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
