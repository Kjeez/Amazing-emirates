"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/editorial/TopBar";
import HeaderNav from "@/components/editorial/HeaderNav";
import Footer from "@/app/sections/Footer";
import {
  CATEGORY_FILTERS,
  SUB_PILLARS,
  STORIES_DATA,
  MOST_READ_BUSINESS,
} from "@/lib/editorialData";
import {
  Rocket,
  TrendingUp,
  Globe,
  Building2,
  Store,
  Leaf,
  ChevronRight,
  Mail,
  Check,
  ChevronDown,
} from "lucide-react";

const ICON_MAP = {
  rocket: Rocket,
  "trending-up": TrendingUp,
  globe: Globe,
  building: Building2,
  store: Store,
  leaf: Leaf,
};

export default function CategoriesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Latest First");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter stories based on selected pill
  const filteredStories = STORIES_DATA.filter((story) => {
    if (activeFilter === "All") return true;
    return (
      story.badge.toLowerCase().includes(activeFilter.toLowerCase()) ||
      story.title.toLowerCase().includes(activeFilter.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) setNewsletterSubscribed(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1A1A] antialiased">
      <TopBar />
      <HeaderNav />

      <main className="flex-1 pb-16">
        {/* Category Hero Header */}
        <section className="relative w-full overflow-hidden border-b border-[#E8E4DC] pt-6 pb-10 px-4 sm:px-8 lg:px-12 bg-[#FAF8F5]">
          {/* Full background image restricted to this section's bounds */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src="/images/editorial/emirates-towers-dawn.jpg"
              alt="Dubai International Financial Centre and Emirates Towers"
              fill
              priority
              className="object-cover object-[center_42%]"
              sizes="100vw"
            />
            {/* Multi-layer luxury overlay ensuring high contrast and seamless editorial tone */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/85 to-[#FAF8F5]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent opacity-50" />
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#7A756C] mb-4">
              <Link href="/" className="hover:text-[#B28843] transition-colors">
                Home
              </Link>
              <span>&gt;</span>
              <span className="text-[#1A1A1A] font-semibold">Business</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Big Title & Subtitle */}
              <div className="lg:col-span-6">
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#1A1A1A] tracking-tight mb-4 drop-shadow-xs">
                  Business
                </h1>
                <p className="text-sm sm:text-base text-[#3D3A34] leading-relaxed max-w-md font-medium">
                  Profiles, insights and ideas from the entrepreneurs, business leaders and changemakers shaping the UAE&apos;s economy.
                </p>
              </div>

              {/* Right Column: 6 Sub-Pillars Grid with Glassmorphic Card */}
              <div className="lg:col-span-6 flex justify-end">
                <div className="w-full max-w-md grid grid-cols-2 gap-x-4 gap-y-3.5 bg-white/75 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/80 shadow-xs">
                  {SUB_PILLARS.map((pillar) => {
                    const IconComp = ICON_MAP[pillar.icon as keyof typeof ICON_MAP] || Rocket;
                    return (
                      <div
                        key={pillar.label}
                        className="flex items-start gap-2.5 group cursor-pointer"
                        onClick={() => {
                          setActiveFilter(
                            CATEGORY_FILTERS.find((f) =>
                              pillar.label.toLowerCase().includes(f.toLowerCase())
                            ) || "All"
                          );
                        }}
                      >
                        <div className="w-6 h-6 rounded-md bg-[#FAF5EC] border border-[#E8DEC8] flex items-center justify-center shrink-0 text-[#B28843] group-hover:bg-[#B28843] group-hover:text-white transition-colors shadow-2xs">
                          <IconComp className="w-3.5 h-3.5 stroke-[1.75]" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-[#3D3A34] group-hover:text-[#B28843] transition-colors leading-tight">
                          {pillar.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Pills Bar & Sorting */}
        <section className="w-full bg-[#FAF8F5] py-5 px-4 sm:px-8 lg:px-12 border-b border-[#EFECE6]">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Scrollable Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {CATEGORY_FILTERS.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "bg-[#B28843] text-white shadow-xs"
                        : "bg-white text-[#5A5751] hover:text-[#1A1A1A] hover:bg-[#F2ECE4] border border-[#E8E4DC]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0 text-xs text-[#5A5751] self-end md:self-auto">
              <span>Sort by:</span>
              <div className="relative inline-block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-[#DDD7CB] rounded-lg px-3 py-1.5 pr-8 text-xs font-medium text-[#1A1A1A] outline-none cursor-pointer hover:border-[#B28843] transition-colors"
                >
                  <option value="Latest First">Latest First</option>
                  <option value="Oldest First">Oldest First</option>
                  <option value="Most Read">Most Read</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#8C887E] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section: 8 Grid Cards (Left) + Sidebar (Right) */}
        <section className="w-full bg-[#FAF8F5] pt-8 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: 8 Article Cards Grid (~8 cols / ~70%) */}
              <div className="lg:col-span-8 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {(filteredStories.length > 0 ? filteredStories : STORIES_DATA.slice(0, 8)).map(
                    (story) => (
                      <article
                        key={story.slug}
                        className="group bg-white rounded-xl border border-[#EFECE6] overflow-hidden hover:border-[#DED9CE] hover:shadow-md transition-all duration-300 flex flex-col"
                      >
                        {/* Compact Image */}
                        <Link href={`/stories/${story.slug}`} className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#E8E4DC] block">
                          <Image
                            src={story.image}
                            alt={story.title}
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                          />
                        </Link>

                        {/* Content */}
                        <div className="p-3.5 sm:p-4 flex flex-col flex-1">
                          <span className="inline-block text-[9px] sm:text-[10px] font-bold text-[#B28843] uppercase tracking-wider mb-1">
                            {story.badge}
                          </span>

                          <Link href={`/stories/${story.slug}`}>
                            <h3 className="font-serif text-sm sm:text-base font-bold text-[#1A1A1A] leading-snug line-clamp-2 group-hover:text-[#B28843] transition-colors mb-1.5">
                              {story.title}
                            </h3>
                          </Link>

                          <p className="text-xs text-[#666259] leading-relaxed line-clamp-2 mb-3">
                            {story.excerpt}
                          </p>

                          {/* Author & Meta */}
                          <div className="mt-auto pt-2.5 border-t border-[#F2EFE8] flex items-center gap-2">
                            <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 border border-[#DDD7CB]">
                              <Image
                                src={story.author.avatar}
                                alt={story.author.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="text-[11px] text-[#8C887E] truncate">
                              <span>By {story.author.name}</span>
                              <span className="mx-1 opacity-60">|</span>
                              <span>{story.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    )
                  )}
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-center gap-1.5 mt-10">
                  {[1, 2, 3, 4, 5].map((pageNum) => (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-md text-xs font-semibold transition-colors ${
                        currentPage === pageNum
                          ? "bg-[#B28843] text-white"
                          : "bg-white text-[#5A5751] hover:bg-[#F2ECE4] border border-[#E2DDCF]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                  <span className="px-2 text-xs text-[#8C887E]">...</span>
                  <button
                    type="button"
                    onClick={() => setCurrentPage(12)}
                    className="w-8 h-8 rounded-md text-xs font-semibold bg-white text-[#5A5751] hover:bg-[#F2ECE4] border border-[#E2DDCF] transition-colors"
                  >
                    12
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(12, p + 1))}
                    className="w-8 h-8 rounded-md text-xs font-semibold bg-white text-[#5A5751] hover:bg-[#F2ECE4] border border-[#E2DDCF] flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Sticky Sidebar (~4 cols / ~30%) */}
              <div className="lg:col-span-4 lg:sticky lg:top-24 self-start flex flex-col gap-5">
                {/* 1. FEATURED STORY Card */}
                <div className="bg-white rounded-xl border border-[#EFECE6] p-4 shadow-xs">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-[#E8E4DC]">
                      <Image
                        src="/images/editorial/business-fintech.jpg"
                        alt="Featured Story"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] font-bold text-[#8C887E] tracking-wider uppercase block mb-1">
                        Featured Story
                      </span>
                      <Link href="/stories/dubai-fashion-economy">
                        <h4 className="font-serif text-xs sm:text-sm font-bold text-[#1A1A1A] leading-snug hover:text-[#B28843] transition-colors line-clamp-2">
                          From Dubai to the World: A Fintech Founder&apos;s Next Chapter
                        </h4>
                      </Link>
                      <p className="text-[10px] text-[#8C887E] mt-1">
                        By Daniel Martin | 7 min read
                      </p>
                    </div>
                    <Link
                      href="/stories/dubai-fashion-economy"
                      className="w-8 h-8 rounded-full border border-[#D5CEC2] flex items-center justify-center text-[#8C887E] hover:text-[#B28843] hover:border-[#B28843] transition-colors shrink-0"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* 2. MOST READ IN BUSINESS */}
                <div className="bg-white p-5 rounded-xl border border-[#EFECE6] shadow-xs">
                  <h3 className="font-serif text-base font-bold text-[#1A1A1A] uppercase tracking-wider border-b border-[#EFEBE3] pb-3 mb-4">
                    Most Read in Business
                  </h3>
                  <div className="divide-y divide-[#F2EFE8]">
                    {MOST_READ_BUSINESS.map((item) => (
                      <div
                        key={item.rank}
                        className="py-3 first:pt-0 last:pb-0 flex items-start gap-4 group cursor-pointer"
                      >
                        <span className="font-serif text-3xl font-bold text-[#B28843] leading-none shrink-0 w-5">
                          {item.rank}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-xs font-medium text-[#1A1A1A] leading-snug group-hover:text-[#B28843] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-[#8C887E] mt-1 font-medium">
                            {item.readTime}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Newsletter Box */}
                <div className="bg-white p-5 rounded-xl border border-[#EFECE6] shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#B28843] mb-2">
                    <Mail className="w-5 h-5 stroke-[1.75]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                      Business Newsletter
                    </span>
                  </div>
                  <p className="text-xs text-[#5A5751] mb-4 leading-relaxed">
                    Get the latest business stories from Amazing Emiratis.
                  </p>

                  {newsletterSubscribed ? (
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                      <Check className="w-4 h-4" />
                      <span>Subscribed successfully!</span>
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletter} className="space-y-2">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs border border-[#DDD7CB] rounded-lg outline-none focus:border-[#B28843] transition-colors"
                      />
                      <button
                        type="submit"
                        className="w-full py-2 bg-[#B28843] hover:bg-[#9E7634] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Subscribe</span>
                        <span>&rarr;</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
