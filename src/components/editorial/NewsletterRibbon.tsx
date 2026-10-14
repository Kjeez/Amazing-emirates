"use client";

import { useState } from "react";
import { Send, ArrowRight, Check } from "lucide-react";

export default function NewsletterRibbon() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#9E7634] via-[#B28843] to-[#C5A059] text-white py-4 sm:py-5 px-4 sm:px-8 lg:px-12 shadow-sm">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Icon + Text */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Send className="w-4 h-4 text-white -rotate-12 translate-x-0.5" />
          </div>
          <p className="text-xs sm:text-sm font-medium tracking-wide text-white">
            Get inspiring stories from across the UAE, straight to your inbox.
          </p>
        </div>

        {/* Right: Input & Subscribe Button */}
        {subscribed ? (
          <div className="flex items-center gap-2 bg-white/25 px-4 py-2 rounded-lg text-xs font-semibold">
            <Check className="w-4 h-4 text-white" />
            <span>You&apos;re subscribed to the archive newsletter.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex items-center w-full md:w-auto max-w-md gap-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-72 px-3.5 py-2 sm:py-2.5 rounded-lg bg-white text-xs sm:text-sm text-[#1A1A1A] placeholder:text-[#8C887E] outline-none shadow-xs"
            />
            <button
              type="submit"
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#1A1A1A] hover:bg-[#2C2A26] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-colors flex items-center gap-1.5 shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
