"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function DrawStroke({
  children,
  duration = 1.5,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const shapes = el.querySelectorAll("path, line, polyline, polygon, circle, rect, ellipse");
      const copy = el.querySelectorAll("[data-draw-copy]");

      if (shapes.length) {
        gsap.from(shapes, {
          drawSVG: 0,
          duration,
          delay,
          stagger: 0.12,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      if (copy.length) {
        gsap.from(copy, {
          opacity: 0,
          y: 16,
          duration: 0.8,
          delay: delay + 0.35,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { dependencies: [duration, delay] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
