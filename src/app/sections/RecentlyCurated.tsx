"use client";

import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const PROFILES = [
  {
    name: "Khalid Al Falasi",
    image: "/images/profiles/khalid-al-falasi.png",
    href: "/profiles/khalid-al-falasi",
  },
  {
    name: "Dr. Aisha Al Mansoori",
    image: "/images/profiles/aisha-al-mansoori.png",
    href: "/profiles/aisha-al-mansoori",
  },
  {
    name: "Omar Al Nuaimi",
    image: "/images/profiles/omar-al-nuaimi.png",
    href: "/profiles/omar-al-nuaimi",
  },
  {
    name: "Layla Al Marri",
    image: "/images/profiles/layla-al-marri.png",
    href: "/profiles/layla-al-marri",
  },
  {
    name: "Hamdan Al Kaabi",
    image: "/images/profiles/hamdan-al-kaabi.png",
    href: "/profiles/hamdan-al-kaabi",
  },
  {
    name: "Noor Al Suwaidi",
    image: "/images/profiles/noor-al-suwaidi.png",
    href: "/profiles/noor-al-suwaidi",
  },
] as const;

function ArrowButton({
  direction,
  onClick,
  label,
}: {
  direction: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold/10"
    >
      {direction === "left" ? (
        <ChevronLeft className="h-5 w-5" strokeWidth={1.25} />
      ) : (
        <ChevronRight className="h-5 w-5" strokeWidth={1.25} />
      )}
    </button>
  );
}

export default function RecentlyCurated() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const card = track.children[0] as HTMLElement | undefined;
      if (!card) return;

      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap) || 20;
      const step = card.getBoundingClientRect().width + gap;
      const maxIndex = Math.max(0, PROFILES.length - 3);

      gsap.to(track, {
        x: -Math.min(index, maxIndex) * step,
        duration: 0.75,
        ease: "power3.inOut",
      });
    },
    { dependencies: [index] },
  );

  const maxIndex = Math.max(0, PROFILES.length - 3);

  return (
    <section className="bg-ivory px-8 py-16 md:px-14 lg:px-20 lg:py-24 xl:px-24">
      <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <h2 className="shrink-0 font-serif text-3xl text-gold md:text-4xl lg:text-[2.75rem]">
          Recently Curated
        </h2>
        <span className="hidden h-px min-w-8 flex-1 bg-gold sm:block" />
        <p className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-charcoal">
          Extraordinary people. A brighter tomorrow.
        </p>
      </header>

      <div className="flex items-center gap-4 lg:gap-6">
        <ArrowButton
          direction="left"
          label="Previous profiles"
          onClick={() => setIndex((current) => Math.max(0, current - 1))}
        />

        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-5 will-change-transform">
            {PROFILES.map((profile) => (
              <Link
                key={profile.name}
                href={profile.href}
                className="w-[200px] shrink-0 border border-gold bg-ivory sm:w-[220px]"
              >
                <div className="relative aspect-square">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-center px-3 py-5 text-center">
                  <p className="font-serif text-lg text-gold">{profile.name}</p>
                  <span className="mt-3 rounded-full bg-emerald px-3 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white">
                    New
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <ArrowButton
          direction="right"
          label="Next profiles"
          onClick={() => setIndex((current) => Math.min(maxIndex, current + 1))}
        />
      </div>
    </section>
  );
}
