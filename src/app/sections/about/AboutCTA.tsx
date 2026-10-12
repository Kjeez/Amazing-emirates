"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-cta-content", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ivory py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="about-cta-content text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-6">
            Join the Archive
          </h2>
          <p className="font-sans text-warmgray text-base md:text-lg leading-relaxed mb-10">
            The archive is curated. The standards are high. The legacy is
            forever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald text-white font-sans text-sm uppercase tracking-widest rounded-full hover:bg-emerald/90 transition-colors"
            >
              Apply for Listing
            </Link>
            <Link
              href="/criteria"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-emerald text-emerald font-sans text-sm uppercase tracking-widest rounded-full hover:bg-emerald/5 transition-colors"
            >
              View Criteria
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
