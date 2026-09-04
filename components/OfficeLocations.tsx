import { OFFICE_LOCATIONS } from "@/data/navigation";

export default function OfficeLocations() {
  return (
    <section id="locations" className="bg-ivory py-24 sm:py-32 border-t border-bordergray">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.3em] text-warmgray block font-medium">
            OUR OFFICE LOCATIONS
          </span>
        </div>

        {/* 3-Column Office Grid matching Screenshot 2 & 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-20 border-b border-bordergray">
          {OFFICE_LOCATIONS.slice(0, 3).map((loc, idx) => (
            <div key={idx} className="flex flex-col space-y-4">
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-charcoal/40 font-light block">
                  {loc.country}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-light">
                  / {loc.city}
                </h3>
              </div>

              <p className="text-warmgray text-xs sm:text-[13px] font-sans uppercase tracking-wider leading-relaxed font-light">
                {loc.address}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
