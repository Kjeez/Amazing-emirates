"use client";

import Image from "next/image";

const EXPLORE_LINKS = [
  { label: "Business", href: "#business" },
  { label: "Culture", href: "#culture" },
  { label: "Health", href: "#health" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Tech", href: "#tech" },
  { label: "Events", href: "#events" },
  { label: "Awards", href: "#awards" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Meet the Team", href: "/about#team" },
  { label: "Partner With Us", href: "#partner" },
  { label: "Nominate", href: "#nominate" },
  { label: "Contact", href: "#contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Use", href: "#terms" },
  { label: "Editorial Policy", href: "#editorial-policy" },
];

export default function EditorialFooter() {
  return (
    <footer className="w-full bg-[#0D131A] text-white pt-16 pb-12 px-4 sm:px-8 lg:px-12 border-t border-[#1C2633]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#1C2633]">
          {/* Col 1: Brand & Tagline & Social (~4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* White Logo or styled wordmark */}
              <div className="mb-4">
                <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-white block">
                  AMAZING
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-light tracking-widest text-[#C5A059] block -mt-1">
                  EMIRATIS
                </span>
              </div>

              {/* Tagline */}
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm mb-6">
                People. Ideas. Progress.<br />
                A stronger, brighter UAE.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#94A3B8]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (~4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-3 gap-6">
            {/* Explore */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
                Explore
              </h4>
              <ul className="space-y-2 text-xs text-[#94A3B8]">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-xs text-[#94A3B8]">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-xs text-[#94A3B8]">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Gold Watermark Branding (~4 cols) */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] h-32 flex items-center justify-center">
              <Image
                src="/footerlogo.png"
                alt="Amazing Emiratis"
                width={320}
                height={120}
                className="h-auto w-full object-contain filter drop-shadow-[0_4px_12px_rgba(178,136,67,0.25)]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#64748B]">
          <p>© 2026 Amazing Emiratis. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <span>•</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <span>•</span>
            <a href="/v1" className="text-[#C5A059] hover:underline transition-colors">Classic Version</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
