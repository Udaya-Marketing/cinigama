"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight, Instagram, Youtube, Phone, Mail } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-charcoal text-ivory flex flex-col justify-between p-6 sm:p-10 overflow-y-auto animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <Link
          href="/"
          onClick={onClose}
          className="font-serif text-2xl tracking-[0.2em] uppercase font-light"
        >
          Cinigama
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-ivory/80 hover:text-ivory transition-colors"
        >
          <X className="w-7 h-7" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="my-auto py-10 flex flex-col space-y-6">
        {NAV_LINKS.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide transition-all duration-300 hover:text-bronze"
            >
              <div className="flex items-baseline space-x-4">
                <span className="text-xs font-sans text-white/30 tracking-widest">
                  0{idx + 1}
                </span>
                <span className={isActive ? "text-bronze italic" : "text-ivory"}>
                  {link.label}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-bronze group-hover:translate-x-2 transition-all duration-300" />
            </Link>
          );
        })}
      </nav>

      {/* Bottom Footer Info */}
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-white/60">
        <div className="flex flex-col space-y-1">
          <span className="uppercase tracking-[0.2em] text-[10px] text-bronze font-medium">
            Direct Inquiries
          </span>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="hover:text-ivory transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            {SOCIAL_LINKS.email}
          </a>
          <a
            href={`tel:${SOCIAL_LINKS.phone.replace(/\s+/g, "")}`}
            className="hover:text-ivory transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            {SOCIAL_LINKS.phone}
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white/70 hover:text-ivory transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>
          <a
            href={SOCIAL_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white/70 hover:text-ivory transition-colors"
          >
            <Youtube className="w-4 h-4" />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}
