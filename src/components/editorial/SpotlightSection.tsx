"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SPOTLIGHT_PROFILES = [
  {
    id: "khalid-al-suwaidi",
    name: "H.E. Khalid Al Suwaidi",
    role: "CEO, Emirates Logistics",
    category: "BUSINESS",
    bio: "Building smarter supply chains for a connected region.",
    image: "/images/editorial/hero-construction.jpg",
  },
  {
    id: "noura-al-falasi",
    name: "Noura Al Falasi",
    role: "Founder, Aarno Tech",
    category: "TECH",
    bio: "Empowering the next generation of web innovators.",
    image: "/images/profiles/noor-al-suwaidi.png",
  },
  {
    id: "dr-sameer-ahmad",
    name: "Dr. Sameer Ahmad",
    role: "Consultant Cardiologist",
    category: "HEALTH",
    bio: "Delivering world-class cardiac care in the UAE.",
    image: "/images/editorial/doctor-cardiologist.jpg",
  },
  {
    id: "layla-hassan",
    name: "Layla Hassan",
    role: "Artist & Creative Director",
    category: "CULTURE",
    bio: "Celebrating Emirati heritage through contemporary art.",
    image: "/images/profiles/layla-al-marri.png",
  },
  {
    id: "chef-marco-bellini",
    name: "Chef Marco Bellini",
    role: "Culinary Entrepreneur",
    category: "LIFESTYLE",
    bio: "Bringing people together through food and culture.",
    image: "/images/editorial/hero-chef.jpg",
  },
  {
    id: "aisha-al-hammadi",
    name: "Aisha Al Hammadi",
    role: "Founder, Youth Circle",
    category: "COMMUNITY",
    bio: "Creating opportunities for UAE's next generation.",
    image: "/images/profiles/aisha-al-mansoori.png",
  },
];

export default function SpotlightSection() {
  return (
    <section id="spotlight" className="w-full bg-[#FAF8F5] py-8 sm:py-10 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-[#E8E4DC] pb-3 mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-[#B28843] uppercase">
            In The Spotlight
          </h2>
          <Link
            href="#profiles"
            className="text-xs font-semibold text-[#666259] hover:text-[#B28843] flex items-center gap-1 group transition-colors"
          >
            <span>View all profiles</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 6 Profiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {SPOTLIGHT_PROFILES.map((profile) => (
            <article
              key={profile.id}
              className="group bg-white rounded-xl border border-[#EFECE6] overflow-hidden hover:border-[#DED9CE] hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#ECE8DF]">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                />
              </div>

              {/* Card Details */}
              <div className="p-3 sm:p-3.5 flex flex-col flex-1">
                {/* Category Badge */}
                <div className="mb-1.5">
                  <span className="inline-block px-1.5 py-0.5 bg-[#B28843] text-white text-[9px] font-bold tracking-wider uppercase rounded-xs">
                    {profile.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#1A1A1A] leading-snug group-hover:text-[#B28843] transition-colors">
                  {profile.name}
                </h3>

                {/* Role */}
                <p className="text-[11px] font-medium text-[#7A756C] mt-0.5 mb-2">
                  {profile.role}
                </p>

                {/* Bio excerpt */}
                <p className="text-[11px] text-[#666259] leading-snug line-clamp-2 mt-auto">
                  {profile.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
