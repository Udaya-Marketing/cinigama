import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import IntroSection from "@/components/IntroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import EditorialGallery from "@/components/EditorialGallery";
import FeaturedStories from "@/components/FeaturedStories";
import ServicesSection from "@/components/ServicesSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import DestinationCTA from "@/components/DestinationCTA";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import GoogleReviews from "@/components/GoogleReviews";
import JournalSection from "@/components/JournalSection";
import InstagramFeed from "@/components/InstagramFeed";

import QuoteCTA from "@/components/QuoteCTA";

export default function HomePage() {
  return (
    <>
      {/* 01: Full Viewport Cinematic Hero with Dual CTAs & Stats */}
      <Hero />

      {/* 02: Minimal Social Proof Strip */}
      <StatsStrip />

      {/* 03: Editorial Introduction */}
      <IntroSection />

      {/* 04: AI Editorial Studio Gallery (Screenshot 1 matching 4-column warm portrait series) */}
      <EditorialGallery />

      {/* 05: The 4 Editorial Pillars */}
      {/* <WhyChooseUs /> */}

      {/* 06: Asymmetric Featured Stories Gallery */}
      <FeaturedStories />

      {/* 07: Disciplines & Services */}
      <ServicesSection />

      {/* 08: Dedicated Client Portal & App Tracking (Screenshot 2 matching progress dashboard) */}
      {/* <AppShowcaseSection /> */}

      {/* 09: Full-Width Destination Parallax CTA */}
      {/* <DestinationCTA /> */}

      {/* 10: Client Experience Journey */}
      {/* <ExperienceTimeline /> */}

      {/* 11: 4.9★ Google Reviews Section matching OOAK design */}
      <GoogleReviews />

      {/* 12: Editorial Journal Preview */}
      {/* <JournalSection /> */}

      {/* 13: Instagram Visual Diary */}
      <InstagramFeed />


      {/* 15: Major Conversion Dark Charcoal CTA */}
      <QuoteCTA />
    </>
  );
}

