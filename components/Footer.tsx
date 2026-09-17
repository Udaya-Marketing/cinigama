import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { SOCIAL_LINKS, CITY_HUBS, OFFICE_LOCATIONS } from "@/data/navigation";

const NAVIGATE = [
  { label: "Our Stories", href: "/stories" },
  { label: "Editorial Studio", href: "/#editorial-gallery" },
  { label: "Services & Pricing", href: "/services" },
  { label: "Client Portal", href: "/#client-portal" },
  { label: "About Cinigama", href: "/about" },
  { label: "Journal & Guides", href: "/journal" },
  { label: "Get a Quote", href: "/contact" },
];

const SERVICES = [
  { label: "Candid Photography", href: "/services" },
  { label: "Cinematic Wedding Films", href: "/services" },
  { label: "Pre-Wedding Shoots", href: "/services" },
  { label: "Drone & Aerial Films", href: "/services" },
  { label: "Custom Albums", href: "/services" },
  { label: "Destination Weddings", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* ── Main Content Grid ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-white/10 pb-16">

          {/* Col 1 — Brand (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/logo/logo-white.webp"
                alt="Cinigama Luxury Wedding Photography & Cinema"
                width={180}
                height={52}
                className="h-9 sm:h-11 w-auto object-contain transition-opacity group-hover:opacity-85"
              />
            </Link>

            <p className="text-ivory/65 text-sm font-light leading-relaxed max-w-xs">
              Candid, cinematic, and timeless wedding stories crafted around
              authentic love — across India and global destinations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-ivory/70 hover:text-ivory hover:border-bronze hover:bg-bronze/20 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-ivory/70 hover:text-ivory hover:border-bronze hover:bg-bronze/20 transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-ivory/70 hover:text-ivory hover:border-bronze hover:bg-bronze/20 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 border border-bronze/50 text-bronze hover:bg-bronze hover:text-charcoal transition-all duration-300 w-fit"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Check Date Availability</span>
            </a>
          </div>

          {/* Col 2 — Navigate (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-sans uppercase tracking-[0.28em] text-bronze block mb-5 font-semibold">
              Navigate
            </span>
            <ul className="space-y-3">
              {NAVIGATE.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-ivory/65 hover:text-ivory transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-sans uppercase tracking-[0.28em] text-bronze block mb-5 font-semibold">
              Services
            </span>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-xs text-ivory/65 hover:text-ivory transition-colors duration-200 tracking-wide"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Studio Hubs (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-sans uppercase tracking-[0.28em] text-bronze block mb-5 font-semibold">
              Studio Hubs
            </span>
            <ul className="space-y-2.5">
              {CITY_HUBS.map((city) => (
                <li
                  key={city}
                  className="text-xs text-ivory/55 hover:text-ivory/85 transition-colors duration-200 tracking-wide"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 — Contact & Primary Office (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-sans uppercase tracking-[0.28em] text-bronze block mb-5 font-semibold">
              Contact Us
            </span>
            <div className="space-y-4 text-xs text-ivory/65 font-light">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-start gap-2.5 hover:text-ivory transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-bronze mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{SOCIAL_LINKS.email}</span>
              </a>
              <a
                href={`tel:${SOCIAL_LINKS.phone.replace(/\s+/g, "")}`}
                className="flex items-start gap-2.5 hover:text-ivory transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-bronze mt-0.5 flex-shrink-0" />
                <span>{SOCIAL_LINKS.phone}</span>
              </a>

              {/* Primary Office Address */}
              {OFFICE_LOCATIONS[0] && (
                <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-bronze mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-bronze/80 font-medium block mb-1">
                      {OFFICE_LOCATIONS[0].city}
                    </span>
                    <p className="text-ivory/50 text-[11px] leading-relaxed">
                      {OFFICE_LOCATIONS[0].address}
                    </p>
                  </div>
                </div>
              )}

              <p className="text-[11px] text-ivory/40 leading-relaxed pt-1">
                Available for worldwide commissions &amp; destination weddings.
              </p>
            </div>
          </div>
        </div>

        {/* ── Copyright Bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ivory/40 font-light gap-4">
          <p>© {new Date().getFullYear()} Cinigama Studios. All rights reserved.</p>
          <div className="flex items-center space-x-5 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-ivory/80 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-ivory/20">•</span>
            <Link href="/terms" className="hover:text-ivory/80 transition-colors">
              Terms of Commission
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
