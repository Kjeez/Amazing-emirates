"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const yOffset = direction === "up" ? 60 : direction === "down" ? -60 : 0;
      const xOffset = direction === "left" ? 60 : direction === "right" ? -60 : 0;

      gsap.from(ref.current, {
        y: yOffset,
        x: xOffset,
        opacity: 0,
        duration: 1.2,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { dependencies: [delay, direction] },
  );

  return <div ref={ref}>{children}</div>;
}
