"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/* ─────────────────────────────────────────── data ── */

const STATS = [
  {
    value: 247,
    display: "247",
    label: "Profiles",
    sub: "Extraordinary individuals\nfrom across the Emirates.",
    yPct: 0,
  },
  {
    value: 12,
    display: "12B+",
    label: "AED",
    sub: "Combined net worth\ndriving real change.",
    yPct: 38,
  },
  {
    value: 45,
    display: "45",
    label: "Industries",
    sub: "From business to arts,\nsport to technology.",
    yPct: 18,
  },
  {
    value: 6,
    display: "6",
    label: "Emirates",
    sub: "A united nation\nof exceptional talent.",
    yPct: 42,
  },
  {
    value: 1,
    display: "1",
    label: "Standard",
    sub: "Excellence,\nalways.",
    yPct: 5,
  },
] as const;

const CONSTELLATION_PATH =
  "M 140,56 C 250,56 280,178 360,178 C 440,178 510,114 600,114 C 690,114 760,190 840,190 C 920,190 990,72 1060,72";

const ANCHOR_DOTS = [
  { cx: 140, cy: 56 },
  { cx: 360, cy: 178 },
  { cx: 600, cy: 114 },
  { cx: 840, cy: 190 },
  { cx: 1060, cy: 72 },
];

function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={`fill-gold ${className}`}>
      <path d="M8 0 9.4 6.6 16 8 9.4 9.4 8 16 6.6 9.4 0 8l6.6-1.4Z" />
    </svg>
  );
}

export default function ByTheNumbers() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const pathRef    = useRef<SVGPathElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const headerRef  = useRef<HTMLDivElement>(null);
  const footerRef  = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const bg      = bgRef.current;
      const shimmer = shimmerRef.current;
      const path    = pathRef.current;
      const header  = headerRef.current;
      const footer  = footerRef.current;
      if (!section || !bg || !shimmer || !path || !header || !footer) return;

      /* 1. Parallax drift */
      gsap.to(bg, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      /* 2. Background scale + fade reveal */
      gsap.fromTo(
        bg,
        { scale: 1.06, opacity: 0 },
        {
          scale: 1, opacity: 1,
          duration: 1.6, ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 80%", once: true },
        },
      );

      /* 3. Golden shimmer sweep */
      gsap.fromTo(
        shimmer,
        { x: "-110%" },
        {
          x: "110%",
          duration: 1.4, ease: "power2.inOut", delay: 0.4,
          scrollTrigger: { trigger: section, start: "top 75%", once: true },
        },
      );

      const entryTrigger = {
        trigger: section,
        start: "top 72%",
        once: true,
      } satisfies ScrollTrigger.Vars;

      /* 4. Header + footer fade */
      gsap.fromTo(
        [header, footer],
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0,
          duration: 0.9, ease: "power3.out", stagger: 0.08,
          scrollTrigger: entryTrigger,
        },
      );

      /* 5. Constellation line draw */
      gsap.fromTo(
        path,
        { drawSVG: "0%" },
        {
          drawSVG: "100%",
          duration: 2.2, ease: "power2.inOut", delay: 0.5,
          scrollTrigger: entryTrigger,
        },
      );

      /* 6. Count-up + stat block reveal */
      STATS.forEach((stat, i) => {
        const el = numberRefs.current[i];
        if (!el) return;

        const isSpecial = stat.display.includes("B+");
        const obj = { val: 0 };

        gsap.fromTo(
          obj,
          { val: 0 },
          {
            val: stat.value,
            duration: 2.4, ease: "power2.out",
            delay: 0.3 + i * 0.14,
            scrollTrigger: entryTrigger,
            onUpdate() {
              const r = Math.round(obj.val);
              el.textContent = isSpecial ? `${r}B+` : String(r);
            },
          },
        );

        const block = el.closest("[data-stat]") as HTMLElement | null;
        if (block) {
          gsap.fromTo(
            block,
            { opacity: 0, y: 32 },
            {
              opacity: 1, y: 0,
              duration: 0.85, ease: "power3.out",
              delay: 0.2 + i * 0.14,
              scrollTrigger: entryTrigger,
            },
          );
        }
      });
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-sand py-16 md:py-20"
      aria-label="By the numbers"
    >
      {/* Full-bleed background */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute z-0 opacity-0"
        style={{ inset: "-8%" }}
      >
        <Image
          src="/bythenumbers_background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Warm vignette overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-sand/65 via-transparent to-sand/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-sand/30 via-transparent to-sand/30" />
      </div>

      {/* Golden shimmer sweep */}
      <div
        ref={shimmerRef}
        aria-hidden
        className="pointer-events-none absolute inset-y-0 z-[2] w-[35%] -skew-x-12"
        style={{
          background:
            "linear-gradient(90deg,transparent 0%,rgba(178,136,67,0.07) 40%,rgba(178,136,67,0.14) 50%,rgba(178,136,67,0.07) 60%,transparent 100%)",
        }}
      />

      {/* Header */}
      <div
        ref={headerRef}
        className="relative z-10 mb-2 px-8 text-center opacity-0 md:px-14 lg:px-20"
      >
        <div className="absolute left-8 top-0 hidden text-left md:left-14 lg:block lg:left-20">
          <p className="text-[9px] font-semibold uppercase leading-[1.7] tracking-[0.24em] text-gold/65">
            Real People<br />Real Impact
          </p>
          <span className="mt-2 block h-px w-8 bg-gold/40" />
        </div>
        <div className="absolute right-8 top-0 hidden text-right md:right-14 lg:block lg:right-20">
          <p className="text-[9px] font-semibold uppercase leading-[1.7] tracking-[0.24em] text-gold/65">
            A Brighter<br />Tomorrow
          </p>
          <span className="mt-2 ml-auto block h-px w-8 bg-gold/40" />
        </div>

        <p className="text-[9px] font-medium uppercase tracking-[0.36em] text-gold/60">
          The Impact
        </p>
        <span className="mx-auto mt-2 block h-5 w-px bg-gold/40" />
        <p className="mt-3 flex items-center justify-center gap-3 text-[9px] font-medium uppercase tracking-[0.28em] text-charcoal/50">
          <span>People</span>
          <Diamond className="h-1.5 w-1.5 opacity-50" />
          <span>Opportunities</span>
          <Diamond className="h-1.5 w-1.5 opacity-50" />
          <span>A Stronger Emirates</span>
        </p>
      </div>

      {/* Stats row */}
      <div className="relative z-10 mx-auto mt-10 max-w-[1200px] px-6 md:px-10 lg:px-14">
        <div className="relative h-[320px] w-full">

          {/* Constellation SVG */}
          <svg
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden
          >
            <path
              ref={pathRef}
              d={CONSTELLATION_PATH}
              fill="none"
              stroke="#b28843"
              strokeWidth="1"
              strokeOpacity="0.5"
              strokeLinecap="round"
            />
            {ANCHOR_DOTS.map((pt, i) => (
              <circle
                key={i}
                cx={pt.cx} cy={pt.cy} r="3.5"
                fill="#b28843" fillOpacity="0.45"
              />
            ))}
          </svg>

          {/* Stat blocks */}
          {STATS.map((stat, i) => {
            const xPcts = [7, 27, 47, 67, 87];
            return (
              <div
                key={stat.label}
                data-stat
                className="absolute flex w-[16%] flex-col items-center text-center opacity-0"
                style={{
                  left: `${xPcts[i]}%`,
                  top: `${stat.yPct}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <span
                  ref={(el) => { numberRefs.current[i] = el; }}
                  className="font-serif text-[3.2rem] leading-none text-gold drop-shadow-sm sm:text-[3.8rem] lg:text-[4.5rem]"
                  aria-label={stat.display}
                >
                  0
                </span>
                <Diamond className="mt-2 h-2.5 w-2.5 opacity-80" />
                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-charcoal">
                  {stat.label}
                </p>
                <p className="mt-1.5 whitespace-pre-line text-[11px] leading-[1.55] text-charcoal/55">
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer tagline */}
      <div
        ref={footerRef}
        className="relative z-10 mt-10 flex items-center justify-center gap-4 opacity-0"
      >
        <span className="h-px w-16 bg-gold/50" />
        <p className="text-[9px] font-medium uppercase tracking-[0.32em] text-charcoal/45">
          The Emirates Move the World
        </p>
        <span className="h-px w-16 bg-gold/50" />
      </div>
    </section>
  );
}
