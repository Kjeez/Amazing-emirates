"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/* --- Icons --- */

function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={`fill-gold ${className}`}>
      <path d="M8 0 9.4 6.6 16 8 9.4 9.4 8 16 6.6 9.4 0 8l6.6-1.4Z" />
    </svg>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`fill-gold ${className}`}>
      <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l16 16" />
      <path d="M4 20L20 4" />
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const section = footerRef.current;
    const wordmark = wordmarkRef.current;
    
    if (!section || !wordmark) return;
    
    gsap.fromTo(
      wordmark,
      { scale: 0.9, opacity: 0.8 },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="relative w-full overflow-hidden bg-ivory pt-20">
      
      {/* Top Header */}
      <div className="mx-auto mb-20 flex max-w-[1400px] items-center justify-between px-6 md:px-12 lg:px-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">
          Amazing Emiratis
        </p>
        <div className="flex items-center gap-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-charcoal/50">
            People &nbsp;&nbsp; Places &nbsp;&nbsp; Possibilities
          </p>
          <span className="hidden h-px w-16 bg-gold/50 md:block" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 px-6 md:px-12 lg:flex-row lg:gap-0 lg:px-20">
        
        {/* Col 1 */}
        <div className="flex w-full flex-col lg:w-[38%] lg:border-r lg:border-gold/30 lg:pr-14">
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-charcoal md:text-5xl lg:text-[3.5rem]">
            The definitive<br />archive<br />of Emiratis<br />excellence.
          </h2>
          <span className="my-8 block h-px w-16 bg-gold" />
          <p className="mb-14 max-w-[320px] text-[15px] leading-[1.8] text-charcoal/60">
            Stories of visionary leaders, remarkable achievers and extraordinary individuals shaping a brighter tomorrow.
          </p>
          
          {/* Subscribe Form */}
          <form suppressHydrationWarning className="relative flex w-full max-w-[420px] items-center border-b border-charcoal/20 pb-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              suppressHydrationWarning
              className="w-full bg-transparent text-[14px] font-serif text-charcoal placeholder:font-serif placeholder:text-charcoal/50 outline-none pr-4"
            />
            <button suppressHydrationWarning className="flex shrink-0 items-center justify-center rounded-full bg-emerald px-7 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-charcoal">
              Subscribe <span className="ml-2">→</span>
            </button>
          </form>
          <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.35em] text-charcoal/50">
            Stay curated. Stay inspired.
          </p>
        </div>

        {/* Col 2 - Platform */}
        <div className="flex w-full flex-col pt-2 lg:w-[18%] lg:border-r lg:border-gold/30 lg:px-12">
          <h3 className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            Platform
          </h3>
          <ul className="flex flex-col gap-6 text-[16px] font-serif text-charcoal/80">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Mission", href: "/about#mission" },
              { label: "How It Works", href: "/about#how-it-works" },
              { label: "Apply", href: "#nominate" },
              { label: "Contact", href: "/about#contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-emerald">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 - Categories */}
        <div className="flex w-full flex-col pt-2 lg:w-[18%] lg:border-r lg:border-gold/30 lg:px-12">
          <h3 className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            Categories
          </h3>
          <ul className="flex flex-col gap-6 text-[16px] font-serif text-charcoal/80">
            {[
              { label: "Business Leaders", href: "/categories" },
              { label: "Artists", href: "/categories" },
              { label: "Athletes", href: "/categories" },
              { label: "Innovators", href: "/categories" },
              { label: "Changemakers", href: "/categories" },
              { label: "All Profiles", href: "/categories" },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-emerald">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 - Connect */}
        <div className="flex w-full flex-col pt-2 lg:w-[26%] lg:pl-12">
          <h3 className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            Connect With Us
          </h3>
          
          <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="group mb-8 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald text-white">
                <IconWhatsApp />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-charcoal">Chat with us on WhatsApp</span>
                <span className="mt-0.5 text-[11px] text-charcoal/50">+971 50 123 4567</span>
              </div>
            </div>
            <span className="text-charcoal/40 transition-transform group-hover:translate-x-1">→</span>
          </a>

          <a href="tel:+97141234567" className="group mb-8 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald text-white">
                <IconPhone />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-charcoal">Call us</span>
                <span className="mt-0.5 text-[11px] text-charcoal/50">+971 4 123 4567</span>
              </div>
            </div>
            <span className="text-charcoal/40 transition-transform group-hover:translate-x-1">→</span>
          </a>
          
          <span className="mb-8 block h-px w-full bg-charcoal/10" />

          <h4 className="mb-6 text-[13px] text-charcoal/60">Follow our journey</h4>
          <div className="flex items-center gap-4">
            {[IconLinkedIn, IconInstagram, IconX, IconYoutube].map((Icon, i) => (
              <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-white">
                <Icon />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="relative mx-auto mt-24 flex w-full max-w-[1400px] items-center justify-center px-6 md:px-12 lg:px-20">
        <span className="h-px flex-1 bg-gold/40" />
        <Diamond className="mx-4 h-4 w-4 opacity-80" />
        <span className="h-px flex-1 bg-gold/40" />
      </div>

      {/* Massive Wordmark Area */}
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-16">
        
        {/* Wordmark Logo */}
        <div ref={wordmarkRef} className="relative z-10 w-full flex items-center justify-center" style={{ transformOrigin: "bottom center" }}>
          <Image
            src="/footerlogo.png"
            alt="Amazing Emiratis"
            width={1200}
            height={200}
            className="h-auto w-[90%] md:w-[80%] lg:w-[100%] max-w-[1200px]"
            priority
          />
        </div>
      </div>

      {/* Background Silhouettes */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-full max-h-[500px] w-full opacity-60">
        <Image
          src="/footerlogobackground.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-transparent" />
      </div>

      {/* Bottom Legal / Copyright */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col-reverse items-center justify-between gap-6 px-6 pb-8 md:flex-row md:px-12 lg:px-20">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-charcoal/40">
          © 2024 Amazing Emiratis. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-[9px] font-semibold uppercase tracking-[0.2em] text-charcoal/40 transition-colors hover:text-emerald">Privacy Policy</Link>
          <Link href="#" className="text-[9px] font-semibold uppercase tracking-[0.2em] text-charcoal/40 transition-colors hover:text-emerald">Terms of Use</Link>
          <Link href="#" className="text-[9px] font-semibold uppercase tracking-[0.2em] text-charcoal/40 transition-colors hover:text-emerald">Cookie Preferences</Link>
          <span className="hidden h-px w-12 bg-gold/50 md:block" />
        </div>
      </div>

    </footer>
  );
}

