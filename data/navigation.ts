export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "STORIES", href: "/stories", description: "Candid wedding galleries & cinematic films" },
  { label: "EDITORIAL STUDIO", href: "/#editorial-gallery", description: "AI & high-fashion luxury couple portraits" },
  { label: "SERVICES & PRICING", href: "/services", description: "Curated wedding photography packages" },
  { label: "CLIENT PORTAL", href: "/#client-portal", description: "Track your booking, film edits & live status" },
  { label: "REVIEWS & LOCATIONS", href: "/#locations", description: "Google reviews & studio presence across India" },
  { label: "ABOUT CINIGAMA", href: "/about", description: "Our story, vision & artistic directors" },
  { label: "JOURNAL", href: "/journal", description: "Wedding planning guides & expert tips" },
  { label: "CONTACT US", href: "/contact", description: "Check date availability & get a instant quote" },
];

export interface MegaMenuColumn {
  title: string;
  links: { label: string; href: string; badge?: string; subtitle?: string }[];
}

export const MEGA_MENU_DATA: MegaMenuColumn[] = [
  {
    title: "PORTFOLIO & STORIES",
    links: [
      { label: "Featured Wedding Stories", href: "/stories", subtitle: "Real wedding galleries across destinations" },
      { label: "Editorial Studio Showcase", href: "/#editorial-gallery", badge: "New", subtitle: "Warm studio portrait series" },
      { label: "Cinematic Wedding Films", href: "/services", subtitle: "4K 60fps heirloom films" },
    ],
  },
  {
    title: "CLIENT PORTAL & SERVICES",
    links: [
      { label: "Client Portal & Delivery", href: "/#client-portal", badge: "App", subtitle: "Track live project progress & status" },
      { label: "Packages & Pricing Guide", href: "/services", subtitle: "Transparent pricing & deliverables" },
      { label: "Custom Albums & Products", href: "/services", subtitle: "Handcrafted Italian leather albums" },
    ],
  },
  {
    title: "ABOUT & REVIEWS",
    links: [
      { label: "Our Story & Directors", href: "/about", subtitle: "The team behind Cinigama Studios" },
      { label: "Presence & Studio Hubs", href: "/#locations", subtitle: "Chennai, Bangalore, Udaipur & Goa" },
      { label: "Client Love & Testimonials", href: "/#reviews", subtitle: "4.9★ rated on Google & WedMeGood" },
    ],
  },
  {
    title: "CONNECT & GUIDES",
    links: [
      { label: "Journal & Planning Guides", href: "/journal", subtitle: "Inspiration for your big day" },
      { label: "Get a Quote / Contact", href: "/contact", badge: "Quick Reply", subtitle: "WhatsApp instant date check" },
    ],
  },
];

export const OFFICE_LOCATIONS = [
  {
    country: "India",
    city: "Chennai",
    address: "No. 339, 1st Floor, Poonamallee High Rd, Near D.G. Vaishnav College, Arumbakkam, Chennai 600106",
    phone: "+91 79045 18754",
  },
  {
    country: "India",
    city: "Coimbatore",
    address: "Door No. 820, 1st Floor, Sri Ganga Complex, Sathy Road, Gandhipuram, Coimbatore 641012",
    phone: "+91 98400 98765",
  },
  {
    country: "India",
    city: "Bangalore",
    address: "No. 2/5, Sai Elegant Apartments, Subbaraju St, Maruthi Seva Nagar, Bengaluru 560033",
    phone: "+91 98400 54321",
  },
  {
    country: "India",
    city: "Rajasthan & Mumbai",
    address: "Heritage Villa Suite, Lake Fatehsagar Promenade, Udaipur 313001",
    phone: "+91 98400 67890",
  },
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/cinigama.weddings",
  youtube: "https://youtube.com/@cinigamaweddings",
  whatsapp: "https://wa.me/917904518754?text=Hi%20Cinigama,%20I%20would%20like%20to%20check%20if%20the%20team%20is%20free%20for%20our%20wedding%20date.",
  email: "hello@cinigama.com",
  phone: "+91 79045 18754",
};

export const CITY_HUBS = [
  "Chennai",
  "Bangalore",
  "Coimbatore",
  "Hyderabad",
  "Mumbai",
  "Delhi NCR",
  "Goa",
  "Kerala",
  "Udaipur & Jaipur",
  "Bali & Worldwide",
];

