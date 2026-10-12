"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2023",
    title: "The Foundation",
    description:
      "Amazing Emiratis was founded with a singular vision: to create the definitive archive of the nation's most influential leaders.",
  },
  {
    year: "2024",
    title: "First 100 Profiles",
    description:
      "We reached our first milestone of 100 curated profiles, spanning business, arts, sport, and technology across all seven emirates.",
  },
  {
    year: "2025",
    title: "Global Recognition",
    description:
      "Featured in Forbes Middle East, Bloomberg, and Arabian Business as the premier directory of UAE excellence.",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(".timeline-item", {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: { trigger: ".timeline-list", start: "top 85%" },
      });

      // Animate the connecting line
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: { trigger: ".timeline-list", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-sand py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-24">
          <h2 className="timeline-title font-serif text-3xl md:text-5xl text-gold">
            Our Journey
          </h2>
          <div className="w-20 h-px bg-gold mt-6" />
        </div>

        <div className="relative max-w-3xl">
          {/* Vertical connecting line */}
          <div className="timeline-line absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gold/40" />

          <div className="timeline-list space-y-12 md:space-y-16">
            {milestones.map((item, index) => (
              <div key={index} className="timeline-item relative pl-10 md:pl-16">
                {/* Gold dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 md:w-5 md:h-5 rounded-full border-2 border-gold bg-sand" />

                <span className="font-serif text-2xl md:text-3xl text-gold block mb-2">
                  {item.year}
                </span>
                <h3 className="font-sans text-charcoal text-lg md:text-xl font-semibold uppercase tracking-wider mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-warmgray text-sm md:text-base leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
