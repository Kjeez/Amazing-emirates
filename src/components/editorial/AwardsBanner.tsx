"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import NominateModal from "./NominateModal";

export default function AwardsBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="awards" className="w-full bg-[#FAF8F5] py-6 sm:py-8 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-[#11161B] text-white shadow-xl border border-[#2B3540]">
            {/* Elegant Background Gold Geometry & Watermark */}
            <div className="pointer-events-none absolute inset-0 opacity-15">
              <svg className="w-full h-full object-cover" viewBox="0 0 1000 300" preserveAspectRatio="none">
                <defs>
                  <pattern id="awards-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#C5A059" strokeWidth="0.8" />
                    <circle cx="30" cy="30" r="12" fill="none" stroke="#C5A059" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#awards-pattern)" />
              </svg>
            </div>

            {/* Subtle Gold Ambient Glow */}
            <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#B28843]/15 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#B28843]/15 rounded-full blur-3xl" />

            {/* Content Container */}
            <div className="relative z-10 px-6 sm:px-10 lg:px-14 py-8 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Branding */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
                <span className="font-serif text-sm sm:text-base font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                  Amazing Emiratis
                </span>
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide text-white mt-1">
                  AWARDS 2026
                </span>
              </div>

              {/* Divider on desktop */}
              <div className="hidden lg:block h-14 w-px bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent" />

              {/* Middle Text Content */}
              <div className="text-center lg:text-left max-w-xl">
                <h3 className="font-serif text-lg sm:text-xl font-normal text-white mb-1.5">
                  Nominate yourself or your brand
                </h3>
                <p className="text-xs sm:text-sm text-[#A8B2C0] leading-relaxed">
                  Recognising the visionaries, changemakers and community leaders shaping a brighter UAE.
                </p>
              </div>

              {/* Right CTA Button & Trophy */}
              <div className="flex items-center gap-6 shrink-0">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 rounded-md bg-[#B28843] hover:bg-[#9A7334] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all flex items-center gap-2 group"
                >
                  <span>Submit Nomination</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Trophy Preview */}
                <div className="hidden sm:block relative w-16 h-20 lg:w-20 lg:h-24 shrink-0 drop-shadow-[0_10px_20px_rgba(178,136,67,0.3)]">
                  <Image
                    src="/images/editorial/awards-trophy.jpg"
                    alt="Amazing Emiratis Trophy"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NominateModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultCategory="Awards" />
    </>
  );
}
