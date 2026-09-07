"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function WordmarkReveal({
  children,
  duration = 1,
  className = "",
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.from(ref.current, {
        opacity: 0,
        scale: 0.9,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    },
    { dependencies: [duration] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
