import Image from "next/image";

export default function WhyChooseUs() {
  const pillars = [
    {
      num: "01",
      title: "AUTHENTIC",
      subtitle: "Real emotions. Nothing forced.",
      description:
        "We never ask you to perform for the camera. We create a calm space where you, your families, and your guests can simply exist in the joy of the day.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
    },
    {
      num: "02",
      title: "CINEMATIC",
      subtitle: "Frames that feel like scenes from your favorite film.",
      description:
        "Master lighting, deliberate framing, and cinema-grade glass turn everyday moments into evocative visual art reminiscent of fine cinema.",
      image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      num: "03",
      title: "TIMELESS",
      subtitle: "Photography that feels beautiful decades later.",
      description:
        "We reject fleeting filters and trendy color grades in favor of rich skin tones, authentic color rendition, and enduring elegance.",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop"
    },
    {
      num: "04",
      title: "PERSONAL",
      subtitle: "Understanding your story before taking a single shot.",
      description:
        "We invest time getting to know your family dynamics, rituals, and inside jokes so our presence on your wedding day feels like trusted friends.",
      image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-beige/60 py-24 sm:py-32 lg:py-40 border-t border-bordergray/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-bordergray">
          <div>
            <span className="text-[11px] sm:text-xs font-sans text-bronze uppercase tracking-[0.25em] block mb-3 font-semibold">
              The Cinigama Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-light tracking-tight">
              WHY CHOOSE US?
            </h2>
          </div>
          <p className="text-warmgray text-sm sm:text-base max-w-md mt-4 md:mt-0 font-light">
            A bespoke approach that treats every wedding as a distinct cinematic narrative, never an assembly-line product.
          </p>
        </div>

        {/* 4 Large Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="group relative flex flex-col justify-between p-6 sm:p-8 bg-ivory border border-bordergray/80 hover:border-bronze transition-all duration-500 hover:shadow-[0_15px_35px_rgba(23,21,19,0.06)]"
            >
              <div>
                {/* Large Number */}
                <span className="font-serif text-4xl sm:text-5xl text-bronze/70 block mb-6 font-light">
                  {pillar.num}
                </span>

                {/* Photo Preview Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-beige mb-6">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Serif Title */}
                <h3 className="font-serif text-2xl text-charcoal tracking-wide mb-2">
                  {pillar.title}
                </h3>

                {/* Subtitle */}
                <h4 className="font-serif italic text-sm text-bronze mb-4 font-normal">
                  {pillar.subtitle}
                </h4>

                {/* Description */}
                <p className="text-warmgray text-xs sm:text-sm font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-8 pt-4 border-t border-bordergray/40 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] uppercase text-warmgray group-hover:text-charcoal transition-colors">
                  Excellence
                </span>
                <span className="w-4 h-[1px] bg-bordergray group-hover:w-8 group-hover:bg-bronze transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
