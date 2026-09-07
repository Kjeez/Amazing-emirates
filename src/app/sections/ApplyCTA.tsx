"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ApplyCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const leftLabelRef = useRef<HTMLDivElement>(null);
  const rightLabelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const text = textRef.current;
      const form = formRef.current;
      if (!section || !text || !form) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      // Text fade up
      tl.fromTo(
        text.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );

      // Form fields stagger in
      tl.fromTo(
        Array.from(form.children),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=0.4"
      );

      // Labels fade in
      if (leftLabelRef.current && rightLabelRef.current) {
        gsap.fromTo(
          [leftLabelRef.current, rightLabelRef.current],
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-ivory px-6 py-20 md:px-10 lg:min-h-[600px] lg:py-28"
      aria-label="Apply to Join"
    >
      {/* Background Image (Silhouettes) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[50%] w-full opacity-70 md:h-[60%]">
        <Image
          src="/images/apply_cta_bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom mix-blend-multiply"
          priority
        />
        {/* Soft blend at the top */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-transparent" />
      </div>

      {/* Side Labels */}
      <div ref={leftLabelRef} className="absolute left-8 top-20 hidden flex-col opacity-0 md:flex lg:left-14">
        <p className="text-[9px] font-semibold uppercase leading-[1.6] tracking-[0.24em] text-warmgray">
          People
          <br />
          Places
          <br />
          Possibilities
        </p>
        <span className="mt-4 block h-10 w-px bg-gold/40" />
      </div>

      <div ref={rightLabelRef} className="absolute right-8 top-20 hidden flex-col items-end text-right opacity-0 md:flex lg:right-14">
        <p className="text-[9px] font-semibold uppercase leading-[1.6] tracking-[0.24em] text-warmgray">
          A<br />
          Stronger
          <br />
          Emirates
        </p>
        <span className="mt-4 block h-10 w-px bg-gold/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        {/* Header Text */}
        <div ref={textRef} className="flex flex-col items-center">
          <div className="mb-6 flex flex-col items-center text-[9px] font-bold uppercase tracking-[0.3em] text-gold/80">
            <span className="mb-1">Extraordinary People</span>
            <span>A Brighter Tomorrow</span>
            <span className="mt-4 block h-px w-10 bg-gold/50" />
          </div>

          <h2 className="mb-4 font-serif text-4xl text-charcoal md:text-5xl lg:text-6xl">
            Join the Archive
          </h2>

          <p className="mb-14 max-w-[500px] text-[13px] leading-relaxed tracking-wide text-warmgray md:text-sm">
            Be part of a curated platform that celebrates the visionaries, leaders and change-makers shaping the Emirates.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          suppressHydrationWarning
          className="flex w-full flex-col items-center gap-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex w-full flex-col gap-8 sm:flex-row sm:gap-12 lg:px-4">
            <input
              type="text"
              placeholder="Your Name"
              suppressHydrationWarning
              className="w-full border-b border-emerald bg-transparent pb-3 text-[13px] font-serif text-charcoal outline-none placeholder:font-serif placeholder:text-warmgray focus:border-charcoal transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              suppressHydrationWarning
              className="w-full border-b border-emerald bg-transparent pb-3 text-[13px] font-serif text-charcoal outline-none placeholder:font-serif placeholder:text-warmgray focus:border-charcoal transition-colors"
            />
          </div>

          <button
            type="submit"
            suppressHydrationWarning
            className="group relative mt-2 overflow-hidden rounded-full bg-emerald px-10 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors hover:bg-charcoal"
          >
            <span className="relative z-10 flex items-center gap-3">
              Apply Now
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>

          <p className="mt-[-10px] text-[9px] font-bold uppercase tracking-[0.28em] text-warmgray/80">
            Select profiles only. Invitation based review.
          </p>
        </form>
      </div>
    </section>
  );
}
