"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import SearchModal from "./SearchModal";
import NominateModal from "./NominateModal";

const NAV_ITEMS = [
  { label: "Business", href: "/categories" },
  { label: "Culture", href: "/categories" },
  { label: "Health", href: "/categories" },
  { label: "Lifestyle", href: "/categories" },
  { label: "Tech", href: "/categories" },
  { label: "Events", href: "/#events" },
  { label: "Awards", href: "/#awards" },
];

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [nominateOpen, setNominateOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#EBE7DF] transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between gap-6">
          {/* Logo with current logo.png */}
          <Link href="/" className="relative flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Amazing Emiratis"
              width={200}
              height={50}
              priority
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-[#2C2A26]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-[#B28843] relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B28843] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search stories and profiles"
              className="p-2 text-[#4A4742] hover:text-[#B28843] hover:bg-[#FAF8F5] rounded-full transition-colors"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Golden "Nominate ->" Pill Button */}
            <button
              type="button"
              onClick={() => setNominateOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#B28843] hover:bg-[#9E7634] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 group"
            >
              <span>Nominate</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2C2A26] hover:bg-[#F2ECE4] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EBE7DF] bg-[#FAF8F5] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3 text-sm font-medium text-[#2C2A26]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 hover:text-[#B28843] border-b border-[#EDE9DF]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Interactive Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <NominateModal isOpen={nominateOpen} onClose={() => setNominateOpen(false)} />
    </>
  );
}
