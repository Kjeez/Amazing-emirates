"use client";

import { useState } from "react";

export default function TopBar() {
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  return (
    <div
      className="w-full border-b border-[#8C6228]/60 text-white text-[11px] tracking-wide font-sans py-2 px-4 sm:px-8 lg:px-12 relative overflow-hidden shadow-xs"
      style={{
        background: `
          repeating-linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.15) 0px,
            rgba(255, 255, 255, 0.15) 2px,
            transparent 2px,
            transparent 8px
          ),
          linear-gradient(
            90deg,
            #8C6228 0%,
            #A67C33 15%,
            #B28843 35%,
            #C5A059 50%,
            #B28843 65%,
            #A67C33 85%,
            #8C6228 100%
          )
        `,
      }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 relative z-10">
        {/* Left: Date & Hijri calendar */}
        <div className="flex items-center gap-2 font-medium">
          <span className="text-white font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
            Tue, 14 Oct 2026
          </span>
          <span className="text-white/50">|</span>
          <span className="text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
            23 Rabi&apos; Al-Thani 1448
          </span>
        </div>

        {/* Right: Language switch + Social media icons */}
        <div className="flex items-center gap-5 sm:gap-6">
          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 text-xs">
            <button
              type="button"
              onClick={() => setLang("EN")}
              className={`transition-all font-medium px-2 py-0.5 rounded text-[11px] ${
                lang === "EN"
                  ? "bg-black/25 text-white font-bold shadow-inner"
                  : "text-white/85 hover:text-white hover:bg-black/15"
              }`}
            >
              EN
            </button>
            <span className="text-white/40">|</span>
            <button
              type="button"
              onClick={() => setLang("AR")}
              className={`transition-all font-serif font-medium px-2 py-0.5 rounded text-[11px] ${
                lang === "AR"
                  ? "bg-black/25 text-white font-bold shadow-inner"
                  : "text-white/85 hover:text-white hover:bg-black/15"
              }`}
            >
              العربية
            </button>
          </div>

          <span className="hidden sm:inline-block h-3.5 w-px bg-white/30" />

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-3.5 text-white/90">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white hover:scale-110 transition-all p-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white hover:scale-110 transition-all p-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-white hover:scale-110 transition-all p-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white hover:scale-110 transition-all p-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
