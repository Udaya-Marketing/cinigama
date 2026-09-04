export interface JournalArticle {
  slug: string;
  title: string;
  category: "EDITORIAL ADVICE" | "DESTINATION GUIDES" | "THE CRAFT" | "WEDDING STYLING";
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  tips?: { title: string; desc: string }[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "art-of-storytelling-through-wedding-photography",
    title: "The Art of Storytelling: Why Unstaged Moments Outlive Perfect Poses",
    category: "THE CRAFT",
    date: "February 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop",
    excerpt: "True luxury in wedding photography is not about sterile perfection—it is the courage to capture raw, fleeting human vulnerability.",
    content: [
      "In an era dominated by rapid social media trends and choreographed routines, the greatest photographs are still the ones that catch you off guard: the breathless laugh between vows, a mother secretly dabbing away tears in the third row, or two barefoot souls running across the courtyard at 3 AM.",
      "At Cinigama, our visual philosophy revolves around cinematic observation. We position ourselves not as directors dictating an artificial script, but as quiet chroniclers attuned to subtle emotional currents.",
      "When you look back at your wedding album twenty years from now, you will not remember who stood at what angle. You will remember exactly how you felt in your chest when your eyes first met across the floral mandap."
    ],
    tips: [
      {
        title: "Trust the light and let go",
        desc: "Give yourself permission to ignore the cameras completely. The most radiant frames happen when you are entirely immersed in the moment."
      },
      {
        title: "Prioritize private moments",
        desc: "Carve out 20 minutes right after your pheras or ceremony just for the two of you to breathe before stepping into the reception."
      }
    ]
  },
  {
    slug: "how-to-plan-a-destination-wedding-photoshoot",
    title: "Curating a Destination Wedding: Lighting, Timing & Visual Harmony",
    category: "DESTINATION GUIDES",
    date: "January 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1600&auto=format&fit=crop",
    excerpt: "A comprehensive guide on coordinating timeline schedules, natural light, and architectural backdrops for destination weddings in India and abroad.",
    content: [
      "Destination celebrations provide extraordinary opportunities for visual storytelling—from the historic stone arches of Rajasthan to the dramatic coastal cliff lines of Bali and Goa.",
      "The key to magazine-grade photography lies in understanding the sun's trajectory at your chosen venue. Staging your primary ceremonies during the 'golden window' transforms ordinary portraits into rich, luminous art."
    ],
    tips: [
      {
        title: "Schedule around the Golden Hour",
        desc: "Aim for your outdoor ceremony or couple session to coincide with the 60 minutes before sunset."
      },
      {
        title: "Embrace local architectural heritage",
        desc: "Work with your cinematographers to incorporate the raw textures and shadows of your venue's unique geometry."
      }
    ]
  },
  {
    slug: "capturing-the-little-moments-that-matter",
    title: "The Quiet Symphony: Finding Poetry in Heirloom Traditions and Fleeting Glances",
    category: "EDITORIAL ADVICE",
    date: "December 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop",
    excerpt: "How mindful documentation preserves the sacred emotional tapestry of Indian weddings across generations.",
    content: [
      "Indian weddings are a sensorial explosion of color, sound, and sacred symbolism. Yet beneath the crescendo of nadaswaram and dhol beats lies an understated emotional landscape.",
      "A grandmother's trembling hands tying an heirloom gold chain, a father quietly adjusting his daughter's veil, and the stolen touch of hands under the sacred fire are the fragments of time that become family lore."
    ],
    tips: [
      {
        title: "Heirloom Details Matter",
        desc: "Share the history behind special jewelry, ancestral drapes, or personalized embroidery with your photography team in advance."
      }
    ]
  }
];
