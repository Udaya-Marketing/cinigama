export interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  deliverables: string[];
  idealFor: string;
}

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Editorial Wedding Photography",
    tagline: "Honest, candid moments framed with high-fashion sensibility.",
    description: "We document your wedding without interrupting the organic flow of emotion. From the quiet tears of your morning rituals to the uninhibited frenzy of your midnight reception, our team captures raw moments as timeless art.",
    image: "/images/services/disciplines.jpg",
    deliverables: [
      "Curated Master Gallery of 800+ color-graded photographs",
      "Handcrafted fine-art leatherbound wedding album",
      "High-resolution & web-optimized digital archives with 10-year cloud storage",
      "Signature high-fashion couple portrait session on wedding day"
    ],
    idealFor: "Couples who value genuine storytelling over stiff, scripted poses."
  },
  {
    number: "02",
    title: "Cinematic Wedding Films",
    tagline: "Feature-length visual poems crafted around your voices and vows.",
    description: "Our films are not mere chronologies; they are deeply emotional cinematic time capsules. Using cinema-grade glass, original sound design, and custom score compositions, we bottle the spirit of your celebration forever.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    deliverables: [
      "3 to 5-minute Signature Cinematic Trailer (Teaser)",
      "15 to 25-minute Documentary Feature Film with full vows & speeches",
      "Complete archival edits of key rituals, sangeet performances & toasts",
      "Custom audio mastering and original score licensing"
    ],
    idealFor: "Couples looking for a real cinema experience that feels like an indie film."
  },
  {
    number: "03",
    title: "Pre-Wedding & Editorial Sessions",
    tagline: "An intimate escape to tell your personal narrative before the big day.",
    description: "Step away from the wedding rush into an intentional editorial session. Whether amidst the misty peaks of Munnar, historic havelis in Rajasthan, or ocean cliffs in Bali, we create visual poetry celebrating your quiet connection.",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop",
    deliverables: [
      "1 to 2-day tailored location shoot anywhere in India or globally",
      "Art direction, styling consultation & moodboard curation",
      "2-minute Concept Film + 50 Signature Editorial Stills",
      "Teaser asset designed for digital wedding save-the-date announcements"
    ],
    idealFor: "Couples wanting relaxed, cinematic portraits in a dream destination."
  },
  {
    number: "04",
    title: "Global Destination Weddings",
    tagline: "Worldwide travel crew equipped for multi-day cultural celebrations.",
    description: "From royal palaces in Rajasthan to cliffside villas in Italy and sun-drenched beaches in Thailand, our specialized travel team seamlessly adapts to foreign terrain, diverse light conditions, and complex multi-day schedules.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1600&auto=format&fit=crop",
    deliverables: [
      "Full multi-day coverage (Welcome Dinner to After-Party)",
      "Comprehensive location scouting & lighting pre-production",
      "Same-day or next-day social teaser delivery for live sharing",
      "Dedicated production manager for logistical coordination"
    ],
    idealFor: "Destination weddings requiring a dedicated, highly organized production crew."
  },
  {
    number: "05",
    title: "Engagements & Intimate Ceremonies",
    tagline: "Subtle elegance for intimate gatherings and heirloom rituals.",
    description: "For intimate rokas, civil unions, registry ceremonies, and backyard gatherings. We scale down the crew footprint to maintain complete intimacy while preserving our signature cinematic quality.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop",
    deliverables: [
      "Single-day comprehensive coverage by Senior Lead Artists",
      "300+ signature color-graded high-resolution photos",
      "1 to 2-minute intimate highlight film",
      "Express 72-hour preview delivery"
    ],
    idealFor: "Intimate celebrations with 30–150 close guests."
  },
  {
    number: "06",
    title: "Aerial Cinematography & FPV",
    tagline: "Breathtaking architectural scale and dynamic movement from above.",
    description: "Elevate your wedding film with licensed aerial cinematography. We capture the grand architectural symmetry of heritage palaces, dramatic coastal cliffs, and sweeping baraat entries in ultra-high-definition 4K.",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1600&auto=format&fit=crop",
    deliverables: [
      "Licensed DGCA certified commercial drone pilot on set",
      "4K Ultra-HD dynamic aerial footage seamlessly color-matched",
      "Custom FPV fly-throughs of venue architecture and floral mandaps",
      "Safety-certified redundant drone equipment"
    ],
    idealFor: "Grand venues, outdoor palaces, and large-scale architectural settings."
  }
];
