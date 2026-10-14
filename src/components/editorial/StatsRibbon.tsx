"use client";

import { BookOpen, Users, Compass, Target } from "lucide-react";

const STATS = [
  {
    icon: BookOpen,
    value: "250+",
    label: "STORIES PUBLISHED",
    subtext: null,
  },
  {
    icon: Users,
    value: "45",
    label: "INDUSTRIES COVERED",
    subtext: null,
  },
  {
    icon: Compass,
    value: "7",
    label: "EMIRATES FEATURED",
    subtext: null,
  },
  {
    icon: Target,
    value: "1",
    label: "VISION",
    subtext: "A STRONGER, BRIGHTER UAE",
  },
];

export default function StatsRibbon() {
  return (
    <section className="w-full bg-[#FAF8F5] pb-10 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-white rounded-xl border border-[#EBE7DF] py-6 px-4 sm:px-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#EFEBE3]">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 ${
                    idx !== 0 ? "pt-4 md:pt-0 md:pl-8 lg:pl-10" : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#FAF7F0] border border-[#E8DEC8] flex items-center justify-center shrink-0 text-[#B28843]">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  {/* Value and label */}
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] tracking-tight leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-[#666259] tracking-wider uppercase mt-1">
                      {stat.label}
                    </div>
                    {stat.subtext && (
                      <div className="text-[9px] text-[#8C887E] tracking-wider uppercase font-medium">
                        {stat.subtext}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
