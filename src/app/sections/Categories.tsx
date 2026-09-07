"use client";

import { useState } from "react";

const CATEGORIES = [
  "All",
  "Business",
  "Arts",
  "Sport",
  "Technology",
  "Philanthropy",
] as const;

export default function Categories() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  return (
    <section className="bg-ivory">
      <nav
        aria-label="Profile categories"
        className="flex justify-center overflow-x-auto px-8 py-10 md:px-14 lg:px-20 lg:py-12 xl:px-24"
      >
        <ul className="flex min-w-max items-center gap-8 md:gap-12 lg:gap-16">
          {CATEGORIES.map((category) => {
            const isActive = category === active;

            return (
              <li key={category}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(category)}
                  className={`relative px-1 pb-2 text-[11px] font-medium uppercase tracking-[0.28em] transition-colors md:text-xs ${
                    isActive
                      ? "text-emerald"
                      : "text-charcoal/55 hover:text-charcoal"
                  }`}
                >
                  {category}
                  {isActive ? (
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-emerald" />
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
