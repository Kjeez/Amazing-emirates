"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function StaggerIn({
  children,
  stagger = 0.15,
  duration = 1,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  stagger?: number;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const items = el.children;
      if (!items.length) return;

      gsap.from(items, {
        y: 48,
        x: -24,
        opacity: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { dependencies: [stagger, duration, delay] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
