import SmoothScroll from "@/components/motion/SmoothScroll";
import AboutHero from "@/app/sections/about/AboutHero";
import OurMission from "@/app/sections/about/OurMission";
import EditorialTeam from "@/app/sections/about/EditorialTeam";
import Timeline from "@/app/sections/about/Timeline";
import AboutCTA from "@/app/sections/about/AboutCTA";
import Footer from "@/app/sections/Footer";

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="bg-ivory overflow-x-hidden">
        <AboutHero />
        <OurMission />
        <EditorialTeam />
        <Timeline />
        <AboutCTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
