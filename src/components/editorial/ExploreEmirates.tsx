"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const EMIRATES_LIST = [
  {
    num: "01",
    name: "ABU DHABI",
    image: "/images/emirates/abu-dhabi.jpg",
    description: "Capital of culture & ambition",
  },
  {
    num: "02",
    name: "DUBAI",
    image: "/images/emirates/dubai.jpg",
    description: "A global city of opportunity",
  },
  {
    num: "03",
    name: "SHARJAH",
    image: "/images/emirates/sharjah.jpg",
    description: "Cultural capital of the Gulf",
  },
  {
    num: "04",
    name: "AJMAN",
    image: "/images/emirates/ajman.jpg",
    description: "Coastline of enduring heritage",
  },
  {
    num: "05",
    name: "UMM AL QUWAIN",
    image: "/images/emirates/umm-al-quwain.jpg",
    description: "Where nature & heritage meet",
  },
  {
    num: "06",
    name: "RAS AL KHAIMAH",
    image: "/images/emirates/ras-al-khaimah.jpg",
    description: "Mountains & ancient history",
  },
  {
    num: "07",
    name: "FUJAIRAH",
    image: "/images/emirates/fujairah.jpg",
    description: "The jewel of the Indian Ocean",
  },
];

export default function ExploreEmirates() {
  return (
    <section id="emirates" className="w-full bg-[#FAF8F5] py-8 sm:py-10 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between border-b border-[#E8E4DC] pb-3 mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-[#B28843] uppercase">
            Explore The Emirates
          </h2>
          <Link
            href="#all-emirates"
            className="text-xs font-semibold text-[#666259] hover:text-[#B28843] flex items-center gap-1 group transition-colors"
          >
            <span>View all</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 7 Emirates Vertical Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {EMIRATES_LIST.map((item) => (
            <article
              key={item.num}
              className="group bg-white rounded-xl border border-[#EFECE6] overflow-hidden hover:border-[#B28843]/50 hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Header inside card */}
              <div className="p-3.5 pb-2.5">
                <span className="block text-xs font-serif font-bold text-[#B28843] tracking-widest mb-0.5">
                  {item.num}
                </span>
                <h3 className="font-serif text-xs sm:text-sm font-semibold text-[#1A1A1A] tracking-wider uppercase truncate group-hover:text-[#B28843] transition-colors">
                  {item.name}
                </h3>
              </div>

              {/* Landmark Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE5DC] mt-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 14vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
