import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import FloatingWidgets from "@/components/FloatingWidgets";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cinigama | Luxury Indian Wedding Photography & Cinematic Films",
  description:
    "Candid, cinematic, and timeless wedding photography and films crafted around authentic love stories across India, Rajasthan, South India, Bali, and global destinations.",
  keywords: [
    "Luxury Wedding Photography",
    "Indian Wedding Photographer",
    "Cinematic Wedding Films",
    "Destination Wedding India",
    "Udaipur Palace Wedding",
    "Chettinad Heritage Wedding",
    "Goa Beach Wedding",
    "Candid Wedding Photography",
    "Cinigama"
  ],
  authors: [{ name: "Cinigama Studios" }],
  creator: "Cinigama Studios",
  metadataBase: new URL("https://cinigama.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cinigama.com",
    siteName: "Cinigama Wedding Photography & Cinema",
    title: "Cinigama | Luxury Indian Wedding Photography & Cinematic Films",
    description:
      "Preserving how your wedding felt. Candid, cinematic, and timeless visual poetry for discerning couples worldwide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Cinigama Luxury Indian Wedding Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinigama | Luxury Indian Wedding Photography & Films",
    description: "Candid, cinematic, and timeless wedding stories crafted around raw emotion.",
    images: ["https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-ivory text-charcoal font-sans antialiased selection:bg-bronze selection:text-ivory">
        <Navbar />
        <main className="min-h-screen">{children}</main>

        <FloatingWidgets />
      </body>
    </html>
  );
}
