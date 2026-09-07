"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

/* ─────────────────────────────────────────────── data ── */

const EMIRATES = [
  {
    id: "dubai",
    name: "Dubai",
    tagline: "A Global City of Opportunity",
    description:
      "Bold vision, limitless ambition. Dubai continues to inspire the world through its people, innovation and global influence.",
    image: "/images/emirates/dubai.jpg",
    profile: {
      name: "Khalid Al Falasi",
      role: "Founder & Group CEO",
      company: "Al Falasi Holding",
      href: "/profiles/khalid-al-falasi",
      image: "/images/profiles/khalid-al-falasi.png",
    },
  },
  {
    id: "abu-dhabi",
    name: "Abu Dhabi",
    tagline: "Capital of Ambition",
    description:
      "The seat of UAE's federal authority and home to extraordinary wealth, culture, and global institutions that shape tomorrow.",
    image: "/images/emirates/abu-dhabi.jpg",
    profile: null,
  },
  {
    id: "sharjah",
    name: "Sharjah",
    tagline: "Cultural Capital of the Gulf",
    description:
      "The UAE's creative heart — Sharjah's dedication to arts, heritage and education has earned it global UNESCO recognition.",
    image: "/images/emirates/sharjah.jpg",
    profile: null,
  },
  {
    id: "ajman",
    name: "Ajman",
    tagline: "The Pearl of the Gulf",
    description:
      "Ajman's compact coastline belies the depth of its maritime heritage and the warmth of its community spirit.",
    image: "/images/emirates/ajman.jpg",
    profile: null,
  },
  {
    id: "umm-al-quwain",
    name: "Umm Al Quwain",
    tagline: "Where Nature & Heritage Meet",
    description:
      "Untouched mangroves, ancient forts, and a peaceful coastal character define this emirate's enduring soul.",
    image: "/images/emirates/umm-al-quwain.jpg",
    profile: null,
  },
  {
    id: "ras-al-khaimah",
    name: "Ras Al Khaimah",
    tagline: "The Adventure Emirate",
    description:
      "Where the Hajar mountains meet the Arabian Gulf — RAK offers dramatic landscapes and a thriving tourism renaissance.",
    image: "/images/emirates/ras-al-khaimah.jpg",
    profile: null,
  },
  {
    id: "fujairah",
    name: "Fujairah",
    tagline: "Where East Meets the Sea",
    description:
      "The only emirate bordering the Gulf of Oman, Fujairah's ancient fort and rugged coastline tell a story of resilience.",
    image: "/images/emirates/fujairah.jpg",
    profile: null,
  },
] as const;

type EmirateId = (typeof EMIRATES)[number]["id"];

/* ─────────────────────────────────────── sub-components ── */

function PlusMinus({ expanded }: { expanded: boolean }) {
  return (
    <span
      className="relative flex h-5 w-5 shrink-0 items-center justify-center"
      aria-hidden
    >
      <span className="absolute h-px w-full bg-gold transition-opacity duration-300" />
      <span
        className={`absolute h-full w-px bg-gold transition-all duration-300 ${
          expanded ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
    </span>
  );
}

function Diamond() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="h-2 w-2 shrink-0 fill-gold opacity-80"
    >
      <path d="M8 0 9.4 6.6 16 8 9.4 9.4 8 16 6.6 9.4 0 8l6.6-1.4Z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────── panel ── */

interface PanelProps {
  emirate: (typeof EMIRATES)[number];
  isExpanded: boolean;
  onToggle: (id: EmirateId) => void;
  index: number;
}

function EmiratePanel({ emirate, isExpanded, onToggle, index }: PanelProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const image = imageRef.current;
      const text = textRef.current;
      if (!image || !text) return;

      if (isExpanded) {
        gsap.fromTo(
          image,
          { opacity: 0, scale: 1.06 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: 0.05,
          },
        );
        gsap.fromTo(
          text,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            delay: 0.18,
          },
        );
      } else {
        gsap.to([image, text], {
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        });
      }
    },
    { dependencies: [isExpanded] },
  );

  return (
    <article
      className={`group relative flex flex-col overflow-hidden border-r border-emerald/30 last:border-r-0 cursor-pointer transition-[flex] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isExpanded ? "flex-[4]" : "flex-[1] hover:flex-[1.25]"
      }`}
      style={{ minWidth: 0 }}
      onClick={() => onToggle(emirate.id)}
      aria-expanded={isExpanded}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onToggle(emirate.id)}
      aria-label={`${emirate.name} – ${isExpanded ? "collapse" : "expand"}`}
    >
      {/* Background image */}
      <div
        ref={imageRef}
        className={`absolute inset-0 transition-opacity duration-500 ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={emirate.image}
          alt={emirate.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
      </div>

      {/* Collapsed label */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-between py-6 transition-opacity duration-300 ${
          isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <PlusMinus expanded={false} />
          <span className="mt-1 h-6 w-px bg-gold/40" />
          <Diamond />
        </div>

        <p
          className="font-serif text-[0.95rem] font-normal leading-none tracking-[0.12em] text-gold"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {emirate.name.toUpperCase()}
        </p>

        <div className="flex flex-col items-center gap-2">
          <Diamond />
          <span className="mb-1 h-6 w-px bg-gold/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-gold/50" />
        </div>
      </div>

      {/* Expanded content */}
      <div
        ref={textRef}
        className={`relative z-10 flex h-full flex-col p-7 transition-opacity duration-300 ${
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ minWidth: 240 }}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-[1.5rem] leading-tight text-gold drop-shadow-sm">
              {emirate.name.toUpperCase()}
            </h3>
            <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.24em] text-sand/80">
              {emirate.tagline}
            </p>
          </div>
          <PlusMinus expanded />
        </div>

        <span className="mt-4 block h-px w-10 bg-gold/60" />

        <p className="mt-4 max-w-[24ch] text-[13px] leading-relaxed text-sand/90">
          {emirate.description}
        </p>

        {/* Dubai profile card */}
        {emirate.profile && (
          <div className="mt-5 flex flex-col">
            <div className="relative w-full max-w-[13rem] overflow-hidden rounded-sm border border-gold/30 aspect-[4/5]">
              <Image
                src={emirate.profile.image}
                alt={emirate.profile.name}
                fill
                sizes="208px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            </div>

            <div className="mt-4">
              <p className="font-serif text-[1.05rem] leading-tight text-gold">
                {emirate.profile.name}
              </p>
              <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-sand/70">
                {emirate.profile.role}
              </p>
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-sand/50">
                {emirate.profile.company}
              </p>

              <Link
                href={emirate.profile.href}
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald bg-emerald px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-emerald/80"
              >
                View Profile&nbsp;→
              </Link>
            </div>
          </div>
        )}

        {!emirate.profile && (
          <div className="mt-auto pt-6">
            <Link
              href={`/emirates/${emirate.id}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-gold/80 transition-colors hover:text-gold"
            >
              Explore →
            </Link>
          </div>
        )}
      </div>

      {/* Hover tint */}
      {!isExpanded && (
        <div className="absolute inset-0 bg-[#f5ede0]/0 transition-colors duration-300 group-hover:bg-[#f5ede0]/8" />
      )}
    </article>
  );
}

/* ─────────────────────────────────────────────── main ── */

export default function Emirates() {
  const [expanded, setExpanded] = useState<EmirateId>("dubai");
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback((id: EmirateId) => {
    setExpanded(id);
  }, []);

  useGSAP(
    () => {
      const heading = headingRef.current;
      const accordion = accordionRef.current;
      if (!heading || !accordion) return;

      gsap.fromTo(
        heading,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
          },
        },
      );

      gsap.fromTo(
        accordion,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: accordion,
            start: "top 92%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex h-screen flex-col overflow-hidden bg-sand px-6 pb-8 pt-10 md:px-10 lg:px-14 xl:px-20"
      aria-label="The Emirates"
    >
      {/* UAE coastline texture */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/emirates/emirates-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sand/50 via-transparent to-sand/60" />
      </div>

      {/* Header */}
      <div ref={headingRef} className="relative z-10 mb-6 shrink-0 text-center">
        {/* Corner labels */}
        <div className="absolute left-0 top-0 hidden text-left lg:block">
          <p className="text-[9px] font-semibold uppercase leading-[1.6] tracking-[0.24em] text-gold/70">
            A<br />Brighter<br />Tomorrow
          </p>
          <span className="mt-2 block h-px w-8 bg-gold/50" />
        </div>
        <div className="absolute right-0 top-0 hidden text-right lg:block">
          <p className="text-[9px] font-semibold uppercase leading-[1.6] tracking-[0.24em] text-gold/70">
            People<br />Places<br />Possibilities
          </p>
          <span className="mt-2 ml-auto block h-px w-8 bg-gold/50" />
        </div>

        <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.32em] text-gold/60">
          Explore
        </p>
        <h2 className="font-serif text-5xl font-normal leading-none text-gold md:text-6xl lg:text-7xl">
          The Emirates
        </h2>

        {/* Gold diamond rule */}
        <div className="mx-auto mt-4 flex w-fit items-center gap-3">
          <span className="h-px w-12 bg-gold/50" />
          <Diamond />
          <span className="h-px w-12 bg-gold/50" />
        </div>

        <p className="mx-auto mt-5 max-w-md text-[10px] font-medium uppercase tracking-[0.26em] text-charcoal/50">
          Seven Emirates. A shared legacy of extraordinary people.
        </p>
      </div>

      {/* Accordion */}
      <div
        ref={accordionRef}
        className="relative z-10 flex min-h-0 flex-1 w-full overflow-hidden rounded-sm border border-emerald/40"
        role="list"
      >
        {EMIRATES.map((emirate, i) => (
          <EmiratePanel
            key={emirate.id}
            emirate={emirate}
            isExpanded={expanded === emirate.id}
            onToggle={toggle}
            index={i}
          />
        ))}
      </div>

      {/* Bottom emirate tabs */}
      <div className="relative z-10 mt-4 shrink-0 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {EMIRATES.map((em) => (
          <button
            key={em.id}
            id={`emirate-tab-${em.id}`}
            onClick={() => toggle(em.id)}
            suppressHydrationWarning
            className={`text-[8px] font-medium uppercase tracking-[0.22em] transition-colors duration-200 ${
              expanded === em.id
                ? "text-gold"
                : "text-charcoal/40 hover:text-gold/70"
            }`}
          >
            {em.name}
          </button>
        ))}
      </div>
    </section>
  );
}
