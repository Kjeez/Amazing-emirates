"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MIDDLE_BUSINESS_ARTICLES = [
  {
    id: "sustainable-communities",
    badge: "REAL ESTATE",
    title: "Dubai's Next Wave of Sustainable Communities",
    readTime: "4 min read",
    image: "/images/editorial/story-sustainable.jpg",
  },
  {
    id: "30-under-30",
    badge: "STARTUPS",
    title: "Meet the UAE's 30 Under 30 Entrepreneurs",
    readTime: "8 min read",
    image: "/images/editorial/story-under30.jpg",
  },
  {
    id: "global-investors",
    badge: "ECONOMY",
    title: "Why Global Investors Are Betting on the UAE",
    readTime: "6 min read",
    image: "/images/btn-skyline.jpg",
  },
  {
    id: "people-first-companies",
    badge: "LEADERSHIP",
    title: "A CEO's Guide to Building People-First Companies",
    readTime: "5 min read",
    image: "/images/profiles/noor-al-suwaidi.png",
  },
];

const MOST_READ_ARTICLES = [
  {
    rank: 1,
    title: "The Emiratis Making AI Work for Everyone",
    readTime: "5 min read",
  },
  {
    rank: 2,
    title: "Inside the UAE's Booming Creator Economy",
    readTime: "4 min read",
  },
  {
    rank: 3,
    title: "How Dubai is Shaping the Future of Global Trade",
    readTime: "6 min read",
  },
  {
    rank: 4,
    title: "The Power of Community in a Changing World",
    readTime: "4 min read",
  },
  {
    rank: 5,
    title: "UAE's Next Generation of Women Leaders",
    readTime: "4 min read",
  },
];

export default function BusinessSection() {
  return (
    <section id="business" className="w-full bg-[#FAF8F5] py-8 sm:py-10 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-[#E8E4DC] pb-3 mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] uppercase tracking-wide">
            Business
          </h2>
          <Link
            href="/categories"
            className="text-xs font-semibold text-[#8C887E] hover:text-[#B28843] flex items-center gap-1 group transition-colors"
          >
            <span>View all</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3 Equal Symmetric Columns Grid (1:1:1 with Equal Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Col 1: Featured Business Story (1/3 equal width & height) */}
          <div className="bg-white rounded-xl border border-[#EFECE6] overflow-hidden hover:border-[#DED9CE] hover:shadow-md transition-all duration-300 flex flex-col h-full">
            <Link href="/stories/urban-living-dubai" className="relative aspect-[16/10] w-full bg-[#EBE7DF] overflow-hidden group block shrink-0">
              <Image
                src="/images/editorial/business-fintech.jpg"
                alt="From Dubai to the World: A Fintech Founder's Next Chapter"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <span className="absolute bottom-3 left-3 px-2.5 py-0.5 bg-[#B28843] text-white text-[10px] font-bold tracking-wider uppercase rounded-xs">
                Business
              </span>
            </Link>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <Link href="/stories/urban-living-dubai">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] leading-snug hover:text-[#B28843] transition-colors mb-2.5">
                  From Dubai to the World: A Fintech Founder&apos;s Next Chapter
                </h3>
              </Link>
              <p className="text-xs sm:text-sm text-[#5A5751] leading-relaxed mb-4">
                How Omar Al Saleh is building a globally competitive fintech platform from the UAE.
              </p>
              <div className="mt-auto text-xs text-[#8C887E] font-medium pt-3 border-t border-[#F2EFE8]">
                <span>By Daniel Martin</span>
                <span className="mx-2 text-[#D0C9BD]">|</span>
                <span>7 min read</span>
              </div>
            </div>
          </div>

          {/* Col 2: 4 Article Snippets Stack (1/3 equal width & height) */}
          <div className="flex flex-col justify-between gap-3 h-full">
            {MIDDLE_BUSINESS_ARTICLES.map((article) => (
              <Link
                key={article.id}
                href="/stories/urban-living-dubai"
                className="group flex items-center gap-3 bg-white p-3 rounded-xl border border-[#EFECE6] hover:border-[#DED9CE] hover:shadow-sm transition-all duration-200 block flex-1"
              >
                {/* Thumbnail */}
                <div className="relative w-20 sm:w-22 h-18 sm:h-19 rounded-lg overflow-hidden shrink-0 bg-[#E8E4DC]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="90px"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[9px] sm:text-[10px] font-bold text-[#B28843] uppercase tracking-wider mb-0.5">
                    {article.badge}
                  </span>
                  <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#1A1A1A] leading-snug line-clamp-2 group-hover:text-[#B28843] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-[10px] text-[#8C887E] mt-1 font-medium">
                    {article.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Col 3: MOST READ (1/3 equal width & height) */}
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#EFECE6] shadow-xs flex flex-col h-full">
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] uppercase tracking-wider border-b border-[#EFEBE3] pb-3 mb-3 shrink-0">
              Most Read
            </h3>

            <div className="divide-y divide-[#F2EFE8] flex-1 flex flex-col justify-between">
              {MOST_READ_ARTICLES.map((item) => (
                <div key={item.rank} className="py-2.5 first:pt-0 last:pb-0 flex items-center gap-3.5 group cursor-pointer flex-1">
                  {/* Big Gold Rank Number */}
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#B28843] leading-none shrink-0 w-5">
                    {item.rank}
                  </span>

                  {/* Title & Read Time */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-xs sm:text-sm font-medium text-[#1A1A1A] leading-snug group-hover:text-[#B28843] transition-colors">
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
        </div>
      </div>
    </section>
  );
}
