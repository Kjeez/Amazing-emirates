"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function ConnectingLine({
  children,
  duration = 2.5,
  className = "",
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const line = el.querySelector("[data-connecting-line]");
      if (!line) return;

      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration,
          ease: "power2.inOut",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { dependencies: [duration] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
