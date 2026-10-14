import TopBar from "@/components/editorial/TopBar";
import HeaderNav from "@/components/editorial/HeaderNav";
import HeroEditorial from "@/components/editorial/HeroEditorial";
import StatsRibbon from "@/components/editorial/StatsRibbon";
import SpotlightSection from "@/components/editorial/SpotlightSection";
import AwardsBanner from "@/components/editorial/AwardsBanner";
import BusinessSection from "@/components/editorial/BusinessSection";
import ExploreEmirates from "@/components/editorial/ExploreEmirates";
import HealthTechSection from "@/components/editorial/HealthTechSection";
import QuoteBanner from "@/components/editorial/QuoteBanner";
import RecentlyCurated from "@/components/editorial/RecentlyCurated";
import ApplyCTA from "@/app/sections/ApplyCTA";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1A1A] antialiased">
      {/* 1. Top Utility Bar: Date, Hijri calendar, language switch, social icons */}
      <TopBar />

      {/* 2. Header & Main Navigation: Brand logo, menu items, search trigger, Nominate CTA */}
      <HeaderNav />

      <main className="flex-1">
        {/* 3. Hero Editorial Section: Left large featured fashion story + Right latest stories stack */}
        <HeroEditorial />

        {/* 4. Stats Ribbon: 250+ Stories, 45 Industries, 7 Emirates, 1 Vision */}
        <StatsRibbon />

        {/* 5. In The Spotlight: 6 Profile Cards with categories, roles, and bios */}
        <SpotlightSection />

        {/* 6. Awards Banner: Amazing Emiratis Awards 2026, Gold trophy, and nomination action */}
        <AwardsBanner />

        {/* 7. Business & Most Read: Featured story, 4-card column, and ranked Most Read articles */}
        <BusinessSection />

        {/* 8. Explore The Emirates: 7 Emirates cards (Abu Dhabi to Fujairah) */}
        <ExploreEmirates />

        {/* 9. Health & Technology: 2-column editorial breakdown with featured & sub-articles */}
        <HealthTechSection />

        {/* 10. Quote Banner: Soft golden desert dunes panorama and tribute quotation */}
        <QuoteBanner />

        {/* 11. Recently Curated: 5 New story cards with horizontal carousel navigation */}
        <RecentlyCurated />

        {/* 12. Join the Archive / Apply CTA */}
        <ApplyCTA />

      </main>
 
       {/* Footer: Original signature footer with platform, categories, contact, and dunes wordmark */}
       <Footer />
     </div>
  );
}
