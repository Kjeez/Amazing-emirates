"use client";

import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EFE8DD] py-20 sm:py-24 lg:py-28 px-4 sm:px-8">
      {/* Background Dunes Image with gentle blending */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/testimonial-dunes.jpg"
          alt="UAE Dunes"
          fill
          className="object-cover object-center opacity-85 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/80 via-transparent to-[#FAF8F5]/80" />
        <div className="absolute inset-0 bg-[#FAF8F5]/30" />
      </div>

      {/* Quote Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.3] text-[#8C6228] tracking-tight">
          &ldquo; A tribute to the visionaries who continually build our future. &rdquo;
        </blockquote>
      </div>
    </section>
  );
}
