import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { SOCIAL_LINKS, CITY_HUBS } from "@/data/navigation";

export default function ContactPage() {
  return (
    <div className="bg-ivory pt-32 sm:pt-40 pb-24 sm:pb-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-[11px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] block mb-3 font-semibold">
            Private Commissions
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-charcoal font-light tracking-tight leading-[1.08] mb-6">
            LET&apos;S CREATE <br />
            <span className="italic font-normal">SOMETHING TIMELESS.</span>
          </h1>
          <p className="text-warmgray text-base sm:text-lg font-light leading-relaxed">
            We accept a limited number of commissions each wedding season to give every couple our undivided creative focus. Please share your plans below and we will get back to you within 24 hours.
          </p>
        </div>

        {/* Layout Grid: Left Form, Right Studio Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8 bg-ivory">
            <div className="mb-10 pb-6 border-b border-bordergray flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                Wedding Enquiry Form
              </span>
              <span className="text-[11px] uppercase tracking-widest text-bronze font-mono">
                2025–2026 Season
              </span>
            </div>

            <ContactForm />
          </div>

          {/* Right Column: Studio Contact & Direct Connect */}
          <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-32">
            {/* Direct WhatsApp Card */}
            <div className="p-8 bg-beige/60 border border-bordergray space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-bronze block font-semibold">
                Quick Response
              </span>
              <h3 className="font-serif text-2xl text-charcoal font-light">
                Prefer to chat directly?
              </h3>
              <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed">
                Connect directly with our studio director for immediate date checks and bespoke inquiries.
              </p>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 bg-charcoal text-ivory px-6 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-bronze transition-colors w-full justify-center"
              >
                <MessageCircle className="w-4 h-4 text-bronze" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Direct Info */}
            <div className="p-8 bg-ivory border border-bordergray space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-bronze block font-semibold">
                Direct Contact
              </span>

              <div className="space-y-4 text-xs text-warmgray font-light">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-bronze mt-0.5" />
                  <div>
                    <span className="block text-charcoal font-medium">Email</span>
                    <a
                      href={`mailto:${SOCIAL_LINKS.email}`}
                      className="hover:text-charcoal transition-colors"
                    >
                      {SOCIAL_LINKS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-bronze mt-0.5" />
                  <div>
                    <span className="block text-charcoal font-medium">Phone / Call</span>
                    <a
                      href={`tel:${SOCIAL_LINKS.phone.replace(/\s+/g, "")}`}
                      className="hover:text-charcoal transition-colors"
                    >
                      {SOCIAL_LINKS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-bronze mt-0.5" />
                  <div>
                    <span className="block text-charcoal font-medium">Studio Hours</span>
                    <span>Monday – Sunday: 9:00 AM – 9:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cities */}
            <div className="p-8 bg-beige/30 border border-bordergray">
              <span className="text-[10px] uppercase tracking-[0.25em] text-bronze block mb-4 font-semibold">
                Base Locations & Hubs
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-charcoal/80 font-light">
                {CITY_HUBS.map((hub) => (
                  <span
                    key={hub}
                    className="px-2.5 py-1 bg-ivory border border-bordergray/60 text-[11px]"
                  >
                    {hub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
