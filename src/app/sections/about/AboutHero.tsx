"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-label", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".about-headline", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      });
      gsap.from(".about-sub", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
      gsap.from(".about-rule", {
        scaleX: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[60vh] flex items-center bg-ivory overflow-hidden"
    >
      {/* Subtle gold texture background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #C5A059 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div ref={textRef} className="max-w-3xl">
          <span className="about-label block text-emerald text-xs md:text-sm font-sans uppercase tracking-[0.2em] mb-6">
            About Us
          </span>

          <h1 className="about-headline font-serif text-4xl md:text-6xl lg:text-7xl text-gold leading-[1.1] mb-8">
            The Story Behind
            <br />
            the Archive
          </h1>

          <div className="about-rule w-20 h-px bg-gold mb-8 origin-left" />

          <p className="about-sub font-sans text-warmgray text-base md:text-lg leading-relaxed max-w-xl">
            Curating the legacy of Emiratis excellence since 2023. We believe
            that influence deserves a platform as refined as the individuals who
            shape our nation.
          </p>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-charcoal">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-gold animate-bounce" />
      </div>
    </section>
  );
}
