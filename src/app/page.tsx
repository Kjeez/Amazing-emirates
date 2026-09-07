import ApplyCTA from "@/app/sections/ApplyCTA";
import AsFeaturedIn from "@/app/sections/AsFeaturedIn";
import ByTheNumbers from "@/app/sections/ByTheNumbers";
import Emirates from "@/app/sections/Emirates";
import FeaturedProfiles from "@/app/sections/FeaturedProfiles";
import Hero from "@/app/sections/Hero";
import RecentlyCurated from "@/app/sections/RecentlyCurated";
import Testimonial from "@/app/sections/Testimonial";
import TrustBar from "@/app/sections/TrustBar";
import WhyUs from "@/app/sections/WhyUs";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <FeaturedProfiles />
      <Emirates />
      <ByTheNumbers />
      <AsFeaturedIn />
      <Testimonial />
      <WhyUs />
      <RecentlyCurated />
      <ApplyCTA />
    </main>
  );
}


