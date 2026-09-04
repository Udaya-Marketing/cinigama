export default function StatsStrip() {
  const stats = [
    { value: "4.9★", label: "GOOGLE RATING" },
    { value: "1,200+", label: "WEDDINGS DOCUMENTED" },
    { value: "50+", label: "CREATIVE MASTER ARTISTS" },
    { value: "2018", label: "ESTABLISHED" },
    { value: "15+", label: "WORLDWIDE DESTINATIONS" },
  ];

  return (
    <section className="bg-beige border-y border-bordergray/60 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 divide-y md:divide-y-0 lg:divide-x divide-bordergray/70">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${
                idx !== 0 ? "lg:pl-6" : ""
              } ${idx % 2 === 1 ? "pt-6 sm:pt-0" : ""}`}
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-light tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans text-warmgray uppercase tracking-[0.22em] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
