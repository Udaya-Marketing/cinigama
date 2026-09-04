export interface StoryImage {
  url: string;
  alt: string;
  caption?: string;
  aspect?: "portrait" | "landscape" | "wide" | "square";
  span?: "full" | "half" | "two-thirds" | "one-third";
}

export interface Story {
  id: string;
  slug: string;
  couple: string;
  title: string;
  category: "Palace Royal" | "Heritage South" | "Destination Coastal" | "Intimate Soirée" | "Vibrant Celebration" | "Pre-Wedding Film";
  location: string;
  venue: string;
  date: string;
  coverImage: string;
  heroImage: string;
  tagline: string;
  quote: string;
  quoteAuthor: string;
  synopsis: string;
  storyParagraphs: string[];
  filmEmbedId?: string;
  details: {
    eventTypes: string[];
    outfits?: string[];
    decorStyle?: string;
    cinematography: string;
    teamSize: string;
  };
  gallery: StoryImage[];
  featured: boolean;
}

export const STORIES: Story[] = [
  {
    id: "rohan-ananya",
    slug: "rohan-ananya-udaipur-palace",
    couple: "Rohan & Ananya",
    title: "A Royal Symphony on the Waters of Pichola",
    category: "Palace Royal",
    location: "Udaipur, Rajasthan",
    venue: "The Oberoi Udaivilas & Jagmandir Island",
    date: "December 2024",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2400&auto=format&fit=crop",
    tagline: "Golden hour pheras beneath carved stone arches as the sun dipped behind the Aravalli hills.",
    quote: "When we looked at the photos, we didn't just see how we looked. We felt the nervous heartbeats right before the varmala, the tear that escaped my father's eye, and the pure euphoria of our midnight sangeet.",
    quoteAuthor: "Ananya, The Bride",
    synopsis: "Set against the majestic backdrop of Lake Pichola, Rohan and Ananya's three-day celebration blended timeless Rajputana grandeur with intimate, emotionally charged moments that unfolded naturally without pretense.",
    storyParagraphs: [
      "There is a quiet stillness to Udaipur just before dusk. As the reflection of Jagmandir Palace shimmers upon Lake Pichola, Rohan and Ananya stepped onto the carved marble pavilion. No staged theatrics — only an exchange of glances that carried the weight of seven years of shared dreams.",
      "The festivities began with an electrifying Sufi night under a canopy of thousands of twinkling brass lanterns. What made this celebration truly unforgettable was not just the regal scale, but the warmth of two families celebrating as one.",
      "During the twilight pheras, cool desert breezes carried the resonance of live Vedic chants. Our team worked invisibly from the shadows with prime cinema lenses, capturing raw candid tears, uncontrollable laughter during the joota chupai, and the quiet handhold right before the bidaai."
    ],
    details: {
      eventTypes: ["Welcome Soirée", "Sufi & Qawwali Night", "Haldi & Phoolon Ki Holi", "Royal Pheras & Gala"],
      outfits: ["Sabyasachi Heritage Lehenga", "Raghavendra Rathore Sherwani"],
      decorStyle: "Mogra, Rajnigandha & Antique Brass",
      cinematography: "Shot on ARRI Alexa Mini LF + Vintage Anamorphic Lenses",
      teamSize: "8-Artist Master Crew"
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop",
        alt: "Bridal portrait in intricately hand-embroidered royal red lehenga with kundan jewellery",
        caption: "Ananya in her bridal suite moments before the varmala ceremony.",
        aspect: "portrait",
        span: "half"
      },
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
        alt: "The groom Rohan adjusting his royal safa with vintage kalgi",
        caption: "Quiet anticipation in the heritage palace courtyards.",
        aspect: "portrait",
        span: "half"
      },
      {
        url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2000&auto=format&fit=crop",
        alt: "Wide panoramic view of Lake Pichola wedding mandap illuminated by hundreds of floating diyas",
        caption: "The twilight mandap setup on the lake edge as night descended.",
        aspect: "wide",
        span: "full"
      },
      {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
        alt: "Couple smiling during their phoolon ki holi haldi ceremony with yellow petals flying",
        caption: "Unfiltered joy and pure yellow hues during the morning Haldi.",
        aspect: "landscape",
        span: "two-thirds"
      },
      {
        url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop",
        alt: "Intimate close-up of henna-adorned hands holding wedding ring",
        caption: "Intricate mehendi motifs telling their travel stories.",
        aspect: "portrait",
        span: "one-third"
      },
      {
        url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2000&auto=format&fit=crop",
        alt: "Rohan & Ananya walking through the grand arched corridors of Udaivilas",
        caption: "Timeless elegance in the palace corridors.",
        aspect: "wide",
        span: "full"
      }
    ],
    featured: true
  },
  {
    id: "kabir-meera",
    slug: "kabir-meera-chettinad-heritage",
    couple: "Kabir & Meera",
    title: "Sacred Chants & Brass Bells in Chettinad",
    category: "Heritage South",
    location: "Karaikudi & Chennai, Tamil Nadu",
    venue: "Chidambara Vilas & The Leela Palace Chennai",
    date: "November 2024",
    coverImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2400&auto=format&fit=crop",
    tagline: "Kanchipuram silk, fragrant jasmine, and centuries of architectural legacy.",
    quote: "Cinigama captured the soul of our Tamil heritage. The morning sunlight filtering through the courtyard tiles while the nadaswaram played felt poetic.",
    quoteAuthor: "Meera & Kabir",
    synopsis: "A soulful celebration of South Indian traditions held within the 120-year-old teakwood courtyards of a Chettinad mansion, followed by a grand sea-facing reception in Chennai.",
    storyParagraphs: [
      "There is an unmatched purity in the golden morning light of Tamil Nadu. The scent of fresh vettiver, temple gopuram bells echoing at dawn, and the rich rustle of pure mulberry silk set the tone for Meera and Kabir's union.",
      "The Muhurtham took place in the central sunlit courtyard of Chidambara Vilas, where intricate athangudi tiles and Belgian crystal chandeliers bore witness to centuries of heritage.",
      "We focused on subtle nuances — the bride's grandmother adjusting the jasmine garland, the sacred Oonjal swing songs sung by aunts, and the spirited cheer as the thali was tied."
    ],
    details: {
      eventTypes: ["Vratham", "Oonjal & Muhurtham", "Temple Blessing", "Reception by the Sea"],
      outfits: ["Pure Kanchipuram Korvai Silk & Temple Gold", "Raw Silk Veshti & Angavastram"],
      decorStyle: "Marigolds, Banana Stems, Brass Urulis & Jasmine",
      cinematography: "Sony FX6 Cinema Line with Master Primes",
      teamSize: "6-Artist Specialist Crew"
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?q=80&w=1600&auto=format&fit=crop",
        alt: "Bride in traditional crimson and gold Kanchipuram silk saree with poola jada hair adornment",
        caption: "Meera adorned in heirloom temple gold jewellery.",
        aspect: "portrait",
        span: "half"
      },
      {
        url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop",
        alt: "Couple laughing during the traditional South Indian Oonjal ceremony",
        caption: "The playful Oonjal swing ritual surrounded by family.",
        aspect: "portrait",
        span: "half"
      },
      {
        url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop",
        alt: "Grand view of the heritage Chettinad mansion courtyard lined with brass lamps",
        caption: "Chidambara Vilas bathed in morning sunlight.",
        aspect: "wide",
        span: "full"
      }
    ],
    featured: true
  },
  {
    id: "aditya-sarah",
    slug: "aditya-sarah-goa-cliffside",
    couple: "Aditya & Sarah",
    title: "Barefoot Vows Above the Arabian Sea",
    category: "Destination Coastal",
    location: "Goa, India",
    venue: "Cabo Serai & W Goa",
    date: "January 2025",
    coverImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2400&auto=format&fit=crop",
    tagline: "A breezy cross-cultural celebration where ocean cliffs met sunset melodies.",
    quote: "We wanted zero stiffness, zero clichés. Cinigama gave us a film that feels like an indie cinema masterpiece we will rewatch on every anniversary.",
    quoteAuthor: "Aditya & Sarah",
    synopsis: "Blending Sarah's British-Irish roots with Aditya's Punjabi vibrancy, this three-day beach and cliffside wedding in South Goa was an ode to freedom, laughter, and ocean breezes.",
    storyParagraphs: [
      "Perched on a secluded cliff overlooking the Arabian Sea, Aditya and Sarah exchanged handwritten vows as the horizon turned into shades of tangerine and violet.",
      "The weekend transitioned effortlessly from a high-voltage sundowner cocktail party with live saxophonists to an intimate white-mandap ceremony set directly against crashing waves."
    ],
    details: {
      eventTypes: ["Sundowner Beach Party", "Boho Mehendi", "Sunset Vows & Pheras", "Afterparty Under Palms"],
      outfits: ["Custom Ivory Organza Drape", "Linen Bandhgala"],
      decorStyle: "Pampas Grass, White Bougainvillea & Driftwood",
      cinematography: "Red Komodo 6K Cinema + Drone Aerials",
      teamSize: "6-Artist Destination Crew"
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop",
        alt: "Aditya and Sarah walking barefoot on the shoreline at sunset",
        caption: "Golden hour silence on the shores of South Goa.",
        aspect: "landscape",
        span: "two-thirds"
      },
      {
        url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
        alt: "Sarah smiling with wind blowing her veil against the blue sky",
        caption: "Unrehearsed laughter caught in the ocean breeze.",
        aspect: "portrait",
        span: "one-third"
      }
    ],
    featured: true
  },
  {
    id: "dev-rhea",
    slug: "dev-rhea-vineyard-soiree",
    couple: "Dev & Rhea",
    title: "Sunlit Romance Amid Rolling Vines",
    category: "Intimate Soirée",
    location: "Nashik, Maharashtra",
    venue: "Sula Vineyards & The Source Resort",
    date: "February 2025",
    coverImage: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2400&auto=format&fit=crop",
    tagline: "Italian-inspired rustic elegance blended with contemporary Indian festivities.",
    quote: "Our wedding felt like an intimate European weekend with 80 of our closest people. Every frame captured that relaxed, love-drenched atmosphere.",
    quoteAuthor: "Rhea, The Bride",
    synopsis: "An intimate 80-guest wedding nestled in the lush rolling hills of Nashik, featuring candlelit vineyard dinners, acoustic guitar serenades, and heartfelt toasts.",
    storyParagraphs: [
      "Nestled among endless rows of grapevines and Tuscan-inspired stone villas, Dev and Rhea created a celebration focused entirely on human connection.",
      "No stage, no barricades — just communal dining tables adorned with wild rosemary, olive branches, and warm tungsten filament bulbs."
    ],
    details: {
      eventTypes: ["Wine Tasting & Welcome Dinner", "Sunlit Haldi", "Twilight Vows", "Candlelit Banquet"],
      outfits: ["Pastel Mint Raw Silk", "Classic Textured Tuxedo"],
      decorStyle: "Eucalyptus, Olive Leaves, Terra Cotta & Fairy Lights",
      cinematography: "35mm Film + Digital Cinema Hybrid",
      teamSize: "4-Artist Specialist Crew"
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1600&auto=format&fit=crop",
        alt: "Dev & Rhea walking between rows of lush green vineyards",
        caption: "Strolling through the vineyard rows at dusk.",
        aspect: "landscape",
        span: "half"
      },
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
        alt: "Dev and Rhea sharing a quiet toast under festoon lights",
        caption: "Candlelit conversations lasting until 4 AM.",
        aspect: "landscape",
        span: "half"
      }
    ],
    featured: false
  },
  {
    id: "varun-tanya",
    slug: "varun-tanya-jaipur-haveli",
    couple: "Varun & Tanya",
    title: "A Carnival of Lights in the Pink City",
    category: "Vibrant Celebration",
    location: "Jaipur, Rajasthan",
    venue: "Samode Palace & Haveli",
    date: "October 2024",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2400&auto=format&fit=crop",
    tagline: "High-octane Sangeet choreography, vibrant marigolds, and historic frescoed walls.",
    quote: "The energy Cinigama captured during our Sangeet is unbelievable. You can literally hear the dhol beats through the stills.",
    quoteAuthor: "Varun & Tanya",
    synopsis: "A high-octane celebration inside the hand-painted courtyards of Samode Palace, featuring non-stop dancing, fireworks, and deeply touching family bonds.",
    storyParagraphs: [
      "Few venues in the world match the theatrical grandeur of Samode Palace. Varun and Tanya brought an infectious, electric energy to every moment of their three-day carnival of joy."
    ],
    details: {
      eventTypes: ["Genda Phool Mehendi", "Sangeet Under The Stars", "Royal Baraat", "Grand Reception"],
      outfits: ["Emerald Green Velvet Lehenga", "Bespoke Royal Bandhgala"],
      decorStyle: "Marigold Cascades, Mirror Work & Palace Diyas",
      cinematography: "High Frame Rate Cinema & Dynamic Gimbals",
      teamSize: "8-Artist Crew"
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
        alt: "Bride dancing joyfully surrounded by friends and family with flower petals",
        caption: "Euphoric moments during the Sangeet finale.",
        aspect: "portrait",
        span: "half"
      },
      {
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1600&auto=format&fit=crop",
        alt: "Groom lifting bride in his arms under sparkling fireworks",
        caption: "Midnight celebration over the palace terrace.",
        aspect: "portrait",
        span: "half"
      }
    ],
    featured: false
  },
  {
    id: "siddharth-priya",
    slug: "siddharth-priya-bali-prewedding",
    couple: "Siddharth & Priya",
    title: "Mist & Waterfalls in the Valley of Ubud",
    category: "Pre-Wedding Film",
    location: "Bali, Indonesia",
    venue: "Ubud Rainforests & Black Sand Beaches",
    date: "September 2024",
    coverImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2400&auto=format&fit=crop",
    tagline: "An editorial pre-wedding film set against dramatic tropical topography.",
    quote: "We didn't want awkward poses. Cinigama turned our travel trip into a poetic visual love letter.",
    quoteAuthor: "Priya & Siddharth",
    synopsis: "A 4-day editorial pre-wedding retreat capturing the couple's genuine chemistry across misty volcano vistas, bamboo forests, and dramatic coastal tides.",
    storyParagraphs: [
      "We traveled through northern Bali with Siddharth and Priya, embracing early morning fog at sunrise and untamed waves on volcanic black shores."
    ],
    details: {
      eventTypes: ["Rainforest Editorial", "Black Sand Sunset Shoot", "Traditional Temple Trail"],
      outfits: ["Flowing Chiffon Gown", "Tailored Neutral Linens"],
      decorStyle: "Untamed Nature",
      cinematography: "Cinema Camera + Drone 4K Pro",
      teamSize: "3-Artist Director Crew"
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop",
        alt: "Couple standing on volcanic sand with dramatic waves behind them",
        caption: "Raw ocean currents and cinematic contrast.",
        aspect: "wide",
        span: "full"
      }
    ],
    featured: false
  }
];
