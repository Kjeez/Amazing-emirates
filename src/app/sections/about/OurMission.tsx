"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Shield, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: Search,
    title: "Curate",
    description:
      "We handpick every profile through a rigorous editorial process, ensuring only those who have genuinely shaped the Emiratis are represented.",
  },
  {
    icon: Shield,
    title: "Verify",
    description:
      "Every achievement, net worth figure, and biographical detail is independently confirmed by our research team against multiple sources.",
  },
  {
    icon: Star,
    title: "Celebrate",
    description:
      "We tell the stories behind the success — not just the headlines, but the journey, the vision, and the impact on our nation.",
  },
];

export default function OurMission() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mission-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".mission-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".mission-grid",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-sand py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="mission-title font-serif text-3xl md:text-5xl text-gold mb-6">
            Our Mission
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="w-12 h-px bg-gold" />
          </div>
        </div>

        <div className="mission-grid grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="mission-card text-center px-4 md:px-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-8 border border-gold rounded-full">
                <pillar.icon className="w-7 h-7 text-gold stroke-[1.5]" />
              </div>
              <h3 className="font-sans text-charcoal text-lg font-semibold uppercase tracking-widest mb-4">
                {pillar.title}
              </h3>
              <p className="font-sans text-warmgray text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
