"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LATEST_STORIES = [
  {
    id: "sustainable-construction",
    category: "BUSINESS",
    title: "How a Dubai Startup Is Redefining Sustainable Construction",
    author: "Ahmad Raza",
    readTime: "5 min read",
    image: "/images/editorial/hero-construction.jpg",
    href: "/stories/sustainable-construction",
  },
  {
    id: "accessible-mental-health",
    category: "HEALTH",
    title: "A Doctor's Mission to Make Mental Health Care More Accessible in the UAE",
    author: "Fatima Noor",
    readTime: "4 min read",
    image: "/images/editorial/hero-doctor.jpg",
    href: "/stories/making-investment-accessible",
  },
  {
    id: "emirati-heritage-cuisine",
    category: "LIFESTYLE",
    title: "The Chef Blending Emirati Heritage with Modern Cuisine",
    author: "James Cooper",
    readTime: "6 min read",
    image: "/images/editorial/hero-chef.jpg",
    href: "/stories/home-kitchen-brand",
  },
  {
    id: "urban-living-dubai",
    category: "REAL ESTATE",
    title: "The Future of Urban Living in Dubai's Next Decade",
    author: "Daniel Martin",
    readTime: "7 min read",
    image: "/images/editorial/business-fintech.jpg",
    href: "/stories/urban-living-dubai",
  },
];

export default function HeroEditorial() {
  return (
    <section className="w-full bg-[#FAF8F5] pt-5 pb-10 sm:pb-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Featured Editorial Story (Left ~65%) */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-black aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10]">
            {/* Background Image */}
            <Image
              src="/images/editorial/hero-fashion.jpg"
              alt="Building the Infrastructure Behind Dubai's Fashion Economy"
              fill
              priority
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />

            {/* Gradient Overlays for high legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            {/* Story Content Bottom Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10 flex flex-col items-start justify-end text-white z-10">
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-[#B28843] text-white text-[11px] font-bold tracking-wider uppercase rounded-xs mb-3 shadow-xs">
                Fashion
              </span>

              {/* Main Headline */}
              <Link href="/stories/dubai-fashion-economy">
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] text-white hover:text-[#C5A059] transition-colors mb-3 max-w-2xl tracking-tight">
                  Building the Infrastructure Behind Dubai&apos;s Fashion Economy
                </h1>
              </Link>

              {/* Excerpt */}
              <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed mb-5 max-w-xl line-clamp-2 sm:line-clamp-3">
                How Emirati entrepreneur Mona Al Mansoori is creating opportunities for regional talent and putting Dubai on the global fashion map.
              </p>

              {/* Author & Read Time Meta */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 shrink-0 relative">
                  <Image
                    src="/images/profiles/layla-al-marri.png"
                    alt="Sara Khan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-xs text-white/90 font-medium">
                  <span>By Sara Khan</span>
                  <span className="mx-2 text-white/50">|</span>
                  <span className="text-white/70">6 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Latest Stories (~35%) */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Header: Latest Stories + View All */}
            <div className="flex items-baseline justify-between border-b border-[#E8E4DC] pb-2.5 mb-3.5">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A]">
                Latest Stories
              </h2>
              <Link
                href="/categories"
                className="text-xs font-semibold text-[#8C887E] hover:text-[#B28843] flex items-center gap-1 group transition-colors"
              >
                <span>View all</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* List of 4 Stories */}
            <div className="flex flex-col gap-3">
              {LATEST_STORIES.map((story) => (
                <Link
                  key={story.id}
                  href={story.href}
                  className="group flex gap-3.5 items-center bg-white p-3 rounded-xl border border-[#EFECE6] hover:border-[#DED9CE] hover:shadow-sm transition-all duration-200 block"
                >
                  {/* Thumbnail */}
                  <div className="relative w-22 sm:w-24 h-19 sm:h-20 rounded-lg overflow-hidden shrink-0 bg-[#E8E4DC]">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="96px"
                    />
                  </div>

                  {/* Text details */}
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[9px] sm:text-[10px] font-bold text-[#B28843] uppercase tracking-wider mb-0.5">
                      {story.category}
                    </span>
                    <h3 className="font-serif text-xs sm:text-sm font-medium text-[#1A1A1A] leading-snug line-clamp-2 group-hover:text-[#B28843] transition-colors">
                      {story.title}
                    </h3>
                    <div className="mt-1 text-[10px] sm:text-[11px] text-[#8C887E]">
                      <span>By {story.author}</span>
                      <span className="mx-1.5 opacity-60">|</span>
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
