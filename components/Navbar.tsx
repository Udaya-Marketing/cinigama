"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import MegaMenuModal from "./MegaMenuModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkHero = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isDarkHero
            ? "bg-gradient-to-b from-charcoal/80 via-charcoal/30 to-transparent text-ivory py-6"
            : "editorial-glass text-charcoal border-b border-bordergray/40 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link
            href="/"
            className="group flex flex-col items-start transition-opacity hover:opacity-85"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] uppercase font-light leading-none">
              Cinigama
            </span>
            <span
              className={`text-[8px] sm:text-[9px] uppercase tracking-[0.35em] mt-1 transition-colors ${
                isDarkHero ? "text-ivory/70" : "text-warmgray"
              }`}
            >
              One of a Kind • Photography
            </span>
          </Link>

          {/* Right Action Controls: GET A QUOTE + MENU */}
          <div className="flex items-center space-x-4 sm:space-x-8">
            {/* Get a Quote Button */}
            <Link
              href="/contact"
              className={`inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] px-4 sm:px-6 py-2 sm:py-2.5 rounded-none border transition-all duration-300 ${
                isDarkHero
                  ? "border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal hover:border-ivory"
                  : "border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory"
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-bronze" />
              <span>Get a Quote</span>
            </Link>

            {/* Menu Toggle Button (with Menu label and 2/3 horizontal lines) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className={`flex items-center space-x-3 text-xs uppercase tracking-[0.22em] font-medium transition-colors group p-1 ${
                isDarkHero ? "text-ivory hover:text-bronze" : "text-charcoal hover:text-bronze"
              }`}
            >
              <span className="hidden sm:inline">Menu</span>
              <div className="flex flex-col space-y-1.5 w-6 items-end">
                <span
                  className={`h-[2px] w-6 transition-all duration-300 ${
                    isDarkHero ? "bg-ivory group-hover:bg-bronze" : "bg-charcoal group-hover:bg-bronze"
                  }`}
                />
                <span
                  className={`h-[2px] w-4 group-hover:w-6 transition-all duration-300 ${
                    isDarkHero ? "bg-ivory group-hover:bg-bronze" : "bg-charcoal group-hover:bg-bronze"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Luxury Mega Menu Modal */}
      <MegaMenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
