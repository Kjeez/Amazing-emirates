"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const TESTIMONIALS = [
  {
    quote: "To be listed here is to be part of the story of our nation.”",
    author: "Sheikh Mohammed Bin Rashid Al Maktoum",
  },
  {
    quote: "A tribute to the visionaries who continually build our future.”",
    author: "Hamdan Bin Mohammed",
  },
  {
    quote: "A testament to the boundless ambition of our people and leaders.”",
    author: "Khaldoon Khalifa Al Mubarak",
  },
];

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const dunesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const dunes = dunesRef.current;
      const content = contentRef.current;
      if (!section || !dunes || !content) return;

      // Parallax for dunes
      gsap.to(dunes, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Initial fade in for content
      gsap.fromTo(
        content,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  // Rotating testimonials effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (!textWrapperRef.current) return;
      
      // Fade out and slide up
      gsap.to(textWrapperRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
          // Fade in and slide down
          gsap.fromTo(
            textWrapperRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
          );
        },
      });
    }, 6000); // 6 seconds per testimonial

    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[600px] flex-col items-center justify-center overflow-hidden bg-sand px-6 py-24 md:px-10 lg:min-h-[700px] lg:px-20"
      aria-label="Testimonial"
    >
      {/* Background Dunes */}
      <div
        ref={dunesRef}
        className="pointer-events-none absolute inset-x-0 bottom-[-10%] z-0 h-[60%] w-full opacity-70 md:h-[70%]"
      >
        <Image
          src="/images/testimonial-dunes.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom mix-blend-multiply"
          priority
        />
        {/* Top fade for smooth blending into the sand background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sand via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center opacity-0">
        {/* Decorative Quote Mark - Made larger */}
        <span
          aria-hidden="true"
          className="mb-2 font-serif text-[7rem] leading-none text-gold/80 md:text-[9rem] lg:text-[11rem]"
        >
          “
        </span>

        {/* Rotating Text Wrapper */}
        <div ref={textWrapperRef} className="flex min-h-[160px] flex-col items-center justify-center md:min-h-[140px]">
          {/* Quote */}
          <h2 className="mb-10 font-serif text-3xl font-medium italic leading-[1.4] text-gold md:text-4xl lg:text-5xl lg:leading-[1.3]">
            {activeTestimonial.quote}
          </h2>

          {/* Rule */}
          <span className="mb-6 block h-px w-16 bg-gold/50" />

          {/* Attribution */}
          <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-charcoal/80">
            {activeTestimonial.author}
          </p>
        </div>
      </div>
    </section>
  );
}
