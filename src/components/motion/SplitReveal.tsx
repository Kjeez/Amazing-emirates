"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap, SplitText } from "@/lib/gsap";

export default function SplitReveal({
  children,
  delay = 0,
  duration = 1.2,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const split = SplitText.create(el, {
        type: "lines,words",
        mask: "lines",
      });

      gsap.from(split.words, {
        yPercent: 100,
        opacity: 0,
        duration,
        delay,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      return () => split.revert();
    },
    { dependencies: [delay, duration] },
  );

  return <div ref={ref}>{children}</div>;
}
