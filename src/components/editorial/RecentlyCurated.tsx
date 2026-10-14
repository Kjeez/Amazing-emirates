"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CURATED_STORIES = [
  {
    id: "real-estate-next-gen",
    badge: "BUSINESS",
    title: "Redefining Real Estate for the Next Generation",
    readTime: "6 min read",
    image: "/images/editorial/hero-construction.jpg",
  },
  {
    id: "emirati-heritage-art",
    badge: "CULTURE",
    title: "Preserving Emirati Heritage Through Modern Art",
    readTime: "5 min read",
    image: "/images/profiles/layla-al-marri.png",
  },
  {
    id: "global-music-scene",
    badge: "LIFESTYLE",
    title: "The UAE's Rising Stars in the Global Music Scene",
    readTime: "4 min read",
    image: "/images/editorial/curated-musician.jpg",
  },
  {
    id: "womens-mental-wellbeing",
    badge: "HEALTH",
    title: "A Mission to Support Women's Mental Wellbeing",
    readTime: "5 min read",
    image: "/images/editorial/curated-mental-health.jpg",
  },
  {
    id: "photography-real-stories",
    badge: "COMMUNITY",
    title: "Using Photography to Tell Real Stories",
    readTime: "4 min read",
    image: "/images/editorial/curated-photographer.jpg",
  },
];

export default function RecentlyCurated() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const amount = scrollContainerRef.current.clientWidth * 0.75;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="curated" className="w-full bg-[#FAF8F5] py-10 sm:py-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header with Title & Arrow Buttons */}
        <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-3 mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-[#B28843] uppercase">
            Recently Curated
          </h2>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous stories"
              className="w-8 h-8 rounded-full border border-[#D5CEC2] bg-white hover:bg-[#F2ECE4] text-[#4A4742] flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next stories"
              className="w-8 h-8 rounded-full border border-[#D5CEC2] bg-white hover:bg-[#F2ECE4] text-[#4A4742] flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Cards Row / Carousel */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 overflow-x-auto pb-2 scrollbar-none"
        >
          {CURATED_STORIES.map((story) => (
            <article
              key={story.id}
              className="group bg-white rounded-xl border border-[#EFECE6] overflow-hidden hover:border-[#DED9CE] hover:shadow-md transition-all duration-300 flex flex-col min-w-[210px] sm:min-w-0"
            >
              {/* Image with NEW Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8E4DC]">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                {/* Golden NEW Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 bg-[#B28843] text-white text-[9px] font-bold tracking-wider uppercase rounded-xs shadow-xs">
                    New
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-3.5 flex flex-col flex-1">
                <span className="inline-block text-[10px] font-bold text-[#B28843] uppercase tracking-wider mb-1">
                  {story.badge}
                </span>

                <h3 className="font-serif text-xs sm:text-sm font-semibold text-[#1A1A1A] leading-snug line-clamp-2 group-hover:text-[#B28843] transition-colors mb-2">
                  {story.title}
                </h3>

                <p className="text-[10px] text-[#8C887E] mt-auto font-medium">
                  {story.readTime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
