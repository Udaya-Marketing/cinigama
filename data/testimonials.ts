export interface Testimonial {
  id: string;
  number: string;
  quote: string;
  couple: string;
  weddingType: string;
  location: string;
  date: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    number: "01 / 05",
    quote: "Cinigama gave us something priceless. Watching our wedding film feels like watching a high-end cinematic feature where we are the protagonists. They never once made us pose awkwardly, yet captured the most soul-stirring frames.",
    couple: "Ananya & Rohan",
    weddingType: "Royal Palace Wedding",
    location: "Oberoi Udaivilas, Udaipur",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    number: "02 / 05",
    quote: "Our families were blown away by the level of respect and discretion the crew maintained. They captured every sacred nuance of our Chettinad rituals while blending seamlessly into the background. True artists.",
    couple: "Meera & Kabir",
    weddingType: "Heritage South Indian",
    location: "Chidambara Vilas, Karaikudi",
    date: "November 2024",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    number: "03 / 05",
    quote: "From our first video call to receiving the handcrafted leather album, the journey was effortless. The photos have a timeless, warm editorial glow that feels like a vintage European magazine spread.",
    couple: "Sarah & Aditya",
    weddingType: "Coastal Destination",
    location: "W Goa & Cabo Serai",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "4",
    number: "04 / 05",
    quote: "The team understood our desire for an intimate, calm celebration. They caught the small stolen glances, the laughter over wine, and the golden hour light that made our vineyard wedding magical.",
    couple: "Rhea & Dev",
    weddingType: "Intimate Vineyard Soirée",
    location: "Sula Vineyards, Nashik",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "5",
    number: "05 / 05",
    quote: "The energy in our Sangeet video is infectious. Everyone who watches it gets goosebumps. If you care about authentic memories and world-class cinema, Cinigama is in a league of their own.",
    couple: "Tanya & Varun",
    weddingType: "Palace Celebration",
    location: "Samode Palace, Jaipur",
    date: "October 2024",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop"
  }
];
