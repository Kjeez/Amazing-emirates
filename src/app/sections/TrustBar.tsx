"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const STATS = [
  { to: 247, suffix: "", label: "Profiles Curated" },
  { to: 12, suffix: "B+", label: "AED Combined Net Worth" },
  { to: 45, suffix: "", label: "Industries" },
  { to: 6, suffix: "", label: "Emirates" },
] as const;

function Diamond() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="mx-6 hidden h-2.5 w-2.5 shrink-0 fill-gold sm:block lg:mx-10"
    >
      <path d="M8 0 9.4 6.6 16 8 9.4 9.4 8 16 6.6 9.4 0 8l6.6-1.4Z" />
    </svg>
  );
}

function CountValue({
  to,
  suffix,
  duration,
}: {
  to: number;
  suffix: string;
  duration: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useGSAP(
    () => {
      if (!ref.current) return;

      const counter = { val: 0 };

      gsap.to(counter, {
        val: to,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => setValue(Math.round(counter.val)),
      });
    },
    { dependencies: [to, duration] },
  );

  return (
    <span ref={ref} className="font-serif text-3xl text-gold md:text-4xl lg:text-[2.75rem]">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="bg-sand">
      <div className="flex flex-wrap items-center justify-center gap-y-8 px-8 py-10 md:px-14 lg:flex-nowrap lg:px-20 lg:py-12 xl:px-24">
        {STATS.map((stat, index) => (
          <div key={stat.label} className="flex items-center">
            {index > 0 ? <Diamond /> : null}
            <div className="flex min-w-[8.5rem] flex-col items-center text-center lg:min-w-[10rem]">
              <CountValue to={stat.to} suffix={stat.suffix} duration={2} />
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold md:text-[11px]">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
