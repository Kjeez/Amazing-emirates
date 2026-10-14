"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HEALTH_SUB_ARTICLES = [
  {
    id: "womens-health",
    title: "Women's Health: A Growing Priority",
    readTime: "4 min read",
    image: "/images/editorial/curated-mental-health.jpg",
  },
  {
    id: "mental-health-innovations",
    title: "Innovations in Mental Health",
    readTime: "5 min read",
    image: "/images/profiles/layla-al-marri.png",
  },
  {
    id: "uae-hospitals-forefront",
    title: "UAE Hospitals at the Global Forefront",
    readTime: "6 min read",
    image: "/images/editorial/doctor-cardiologist.jpg",
  },
  {
    id: "genomics-longevity-research",
    title: "Genomics & Longevity Research in Abu Dhabi",
    readTime: "5 min read",
    image: "/images/editorial/health-research-genomics.jpg",
  },
];

const TECH_SUB_ARTICLES = [
  {
    id: "startups-real-problems",
    title: "UAE Startups Solving Real Problems",
    readTime: "4 min read",
    image: "/images/editorial/story-under30.jpg",
  },
  {
    id: "future-smart-cities",
    title: "The Future of Smart Cities",
    readTime: "6 min read",
    image: "/images/editorial/story-sustainable.jpg",
  },
  {
    id: "inclusive-uae-tech",
    title: "Tech for a More Inclusive UAE",
    readTime: "4 min read",
    image: "/images/profiles/noor-al-suwaidi.png",
  },
  {
    id: "autonomous-mobility-frontier",
    title: "Autonomous Mobility & Next-Gen Robotics",
    readTime: "5 min read",
    image: "/images/editorial/tech-autonomous-lab.jpg",
  },
];

export default function HealthTechSection() {
  return (
    <section className="w-full bg-[#FAF8F5] py-8 sm:py-10 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* HEALTH COLUMN */}
          <div id="health" className="flex flex-col">
            {/* Header */}
            <div className="flex items-baseline justify-between border-b border-[#E8E4DC] pb-3 mb-5">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] uppercase tracking-wide">
                Health
              </h2>
              <Link
                href="/category/health"
                className="text-xs font-semibold text-[#8C887E] hover:text-[#B28843] flex items-center gap-1 group transition-colors"
              >
                <span>View all</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Content: Main Card + 4 Side Articles */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-stretch">
              {/* Main Card (7 cols) */}
              <Link
                href="/story/preventive-care-uae"
                className="sm:col-span-7 bg-white rounded-xl border border-[#EFECE6] overflow-hidden hover:border-[#DED9CE] hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-[#EAE5DC] overflow-hidden">
                    <Image
                      src="/images/editorial/hero-doctor.jpg"
                      alt="Preventive Care is a Stronger UAE"
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1A1A] leading-snug group-hover:text-[#B28843] transition-colors mb-2">
                      Preventive Care is a Stronger UAE
                    </h3>
                    <p className="text-xs text-[#5A5751] leading-relaxed mb-3 line-clamp-2">
                      Dr. Amina Al Rahmani on how early detection and awareness can build healthier communities.
                    </p>
                    <p className="text-[11px] text-[#8C887E] font-medium">4 min read</p>
                  </div>
                </div>
              </Link>

              {/* 4 Sub Articles (5 cols) */}
              <div className="sm:col-span-5 flex flex-col justify-between gap-2.5 h-full">
                {HEALTH_SUB_ARTICLES.map((article) => (
                  <Link
                    key={article.id}
                    href={`/story/${article.id}`}
                    className="group flex items-center gap-3 bg-white p-2 sm:p-2.5 rounded-xl border border-[#EFECE6] hover:border-[#DED9CE] hover:shadow-xs transition-all duration-200 cursor-pointer"
                  >
                    <div className="relative w-16 h-14 rounded-lg overflow-hidden shrink-0 bg-[#E8E4DC]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="70px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-xs font-semibold text-[#1A1A1A] leading-snug line-clamp-2 group-hover:text-[#B28843] transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-[10px] text-[#8C887E] mt-1 font-medium">
                        {article.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* TECHNOLOGY COLUMN */}
          <div id="tech" className="flex flex-col">
            {/* Header */}
            <div className="flex items-baseline justify-between border-b border-[#E8E4DC] pb-3 mb-5">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1A1A] uppercase tracking-wide">
                Technology
              </h2>
              <Link
                href="/category/tech"
                className="text-xs font-semibold text-[#8C887E] hover:text-[#B28843] flex items-center gap-1 group transition-colors"
              >
                <span>View all</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Content: Main Card + 4 Side Articles */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-stretch">
              {/* Main Card (7 cols) */}
              <Link
                href="/story/uae-next-wave-ai"
                className="sm:col-span-7 bg-white rounded-xl border border-[#EFECE6] overflow-hidden hover:border-[#DED9CE] hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-[#111] overflow-hidden">
                    <Image
                      src="/images/editorial/tech-vr-ai.jpg"
                      alt="How UAE is Powering the Next Wave of AI"
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A1A1A] leading-snug group-hover:text-[#B28843] transition-colors mb-2">
                      How UAE is Powering the Next Wave of AI
                    </h3>
                    <p className="text-xs text-[#5A5751] leading-relaxed mb-3 line-clamp-2">
                      From government initiatives to homegrown startups, the UAE is positioning itself as a global hub for artificial intelligence.
                    </p>
                    <p className="text-[11px] text-[#8C887E] font-medium">5 min read</p>
                  </div>
                </div>
              </Link>

              {/* 4 Sub Articles (5 cols) */}
              <div className="sm:col-span-5 flex flex-col justify-between gap-2.5 h-full">
                {TECH_SUB_ARTICLES.map((article) => (
                  <Link
                    key={article.id}
                    href={`/story/${article.id}`}
                    className="group flex items-center gap-3 bg-white p-2 sm:p-2.5 rounded-xl border border-[#EFECE6] hover:border-[#DED9CE] hover:shadow-xs transition-all duration-200 cursor-pointer"
                  >
                    <div className="relative w-16 h-14 rounded-lg overflow-hidden shrink-0 bg-[#E8E4DC]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="70px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-xs font-semibold text-[#1A1A1A] leading-snug line-clamp-2 group-hover:text-[#B28843] transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-[10px] text-[#8C887E] mt-1 font-medium">
                        {article.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
