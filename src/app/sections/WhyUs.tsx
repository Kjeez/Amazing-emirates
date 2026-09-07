"use client";

import DrawStroke from "@/components/motion/DrawStroke";

const COLUMNS = [
  {
    title: "Curated Exclusivity",
    description:
      "A selective curation of the UAE's most influential individuals who are shaping a brighter tomorrow.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M24 4 42 24 24 44 6 24Z" />
        <path d="M24 4v40M6 24h36" />
        <path d="M13 13 35 35M35 13 13 35" />
      </svg>
    ),
  },
  {
    title: "Verified Authority",
    description:
      "Every profile is carefully researched and verified for credibility, impact and legacy.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M24 6 10 12v12c0 9.5 6.2 16.6 14 20 7.8-3.4 14-10.5 14-20V12Z" />
        <path d="m17 24 5 5 10-11" />
      </svg>
    ),
  },
  {
    title: "Global Visibility",
    description:
      "A powerful platform that showcases Emirates excellence to a global audience of opportunities.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.25">
        <circle cx="24" cy="24" r="16" />
        <ellipse cx="24" cy="24" rx="7" ry="16" />
        <path d="M8 24h32M12 14h24M12 34h24" />
      </svg>
    ),
  },
] as const;

function Diamond() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="h-2.5 w-2.5 fill-gold">
      <path d="M8 0 9.4 6.6 16 8 9.4 9.4 8 16 6.6 9.4 0 8l6.6-1.4Z" />
    </svg>
  );
}

export default function WhyUs() {
  return (
    <section className="bg-sand px-8 py-20 md:px-14 lg:px-20 lg:py-28 xl:px-24">
      <DrawStroke duration={1.5} className="mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <p
            data-draw-copy
            className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold"
          >
            More than a directory
          </p>
          <h2
            data-draw-copy
            className="mt-4 font-serif text-4xl text-gold md:text-5xl lg:text-[3.25rem]"
          >
            Why Amazing Emirates
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gold md:w-24" />
            <Diamond />
            <span className="h-px w-16 bg-gold md:w-24" />
          </div>
        </header>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
          {COLUMNS.map((column, index) => (
            <article
              key={column.title}
              className={`flex flex-col items-center px-6 text-center md:px-10 ${
                index > 0 ? "md:border-l md:border-gold/40" : ""
              }`}
            >
              <div className="text-gold">{column.icon}</div>
              <h3
                data-draw-copy
                className="mt-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-charcoal"
              >
                {column.title}
              </h3>
              <p data-draw-copy className="mt-4 max-w-xs text-[15px] leading-7 text-warmgray">
                {column.description}
              </p>
            </article>
          ))}
        </div>
      </DrawStroke>
    </section>
  );
}
