"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function BeFeaturedCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#FAF8F5] py-12 sm:py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#B28843] mb-2 tracking-wide">
          Be Featured
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#666259] max-w-xl mx-auto mb-8 leading-relaxed">
          Know someone making a difference in the UAE? Nominate yourself or an inspiring individual or brand.
        </p>

        {/* Form or Success State */}
        {submitted ? (
          <div className="flex items-center justify-center gap-2.5 bg-white p-5 rounded-xl border border-[#D8D2C5] max-w-md mx-auto text-[#006D5B]">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">
              Thank you! Our editorial team will review your nomination.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto"
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full sm:w-64 px-4 py-3 bg-white border border-[#DDD7CB] rounded-lg text-xs sm:text-sm text-[#1A1A1A] placeholder:text-[#9E9B92] outline-none focus:border-[#B28843] transition-colors shadow-2xs"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-64 px-4 py-3 bg-white border border-[#DDD7CB] rounded-lg text-xs sm:text-sm text-[#1A1A1A] placeholder:text-[#9E9B92] outline-none focus:border-[#B28843] transition-colors shadow-2xs"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3 bg-[#B28843] hover:bg-[#9E7634] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 group shrink-0"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
