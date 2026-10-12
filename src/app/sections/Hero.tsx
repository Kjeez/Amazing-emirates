"use client";

import { useGSAP } from "@gsap/react";
import { ArrowDown, ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import GoldRule from "@/components/ui/GoldRule";
import { gsap, SplitText } from "@/lib/gsap";

const NAV_LINKS = [
  { href: "/", label: "Home", active: true },
  { href: "/about", label: "About" },
  { href: "/profiles", label: "Profiles" },
  { href: "/categories", label: "Categories" },
  { href: "/stories", label: "Stories" },
  { href: "/apply", label: "Apply" },
] as const;

const STATS = [
  { value: "247", label: "Profiles" },
  { value: "6", label: "Emirates" },
  { value: "45", label: "Industries" },
  { value: "1", label: "Vision" },
] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const figureWrapRef = useRef<HTMLDivElement>(null);
  const figureShiftRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const headline = headlineRef.current;
      const figure = figureWrapRef.current;
      const shift = figureShiftRef.current;
      const section = sectionRef.current;
      if (!headline || !figure || !shift || !section) return;

      let split: SplitText | undefined;

      const play = async () => {
        await document.fonts.ready;
        split = SplitText.create(headline, {
          type: "lines,words",
          mask: "lines",
          aria: "auto",
        });

        gsap.fromTo(
          split.words,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.2,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.12,
          },
        );
      };

      void play();

      gsap.fromTo(
        figure,
        { opacity: 0 },
        { opacity: 1, duration: 1.4, ease: "power2.out" },
      );

      gsap.to(shift, {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        split?.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-hidden bg-ivory lg:h-screen"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_back.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/80 via-ivory/35 to-transparent lg:from-ivory/70 lg:via-ivory/20 lg:to-transparent" />
      </div>

      <div
        ref={figureWrapRef}
        className="pointer-events-none absolute inset-x-0 top-[5.5rem] z-10 h-[48vh] lg:inset-x-auto lg:top-[20%] lg:right-[14%] lg:bottom-[-10%] lg:left-auto lg:h-auto lg:w-[50%]"
      >
        <div ref={figureShiftRef} className="relative h-full w-full">
          <Image
            src="/hero_figure.png"
            alt="Emirati man in a white kandura looking toward the horizon"
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <div className="relative z-20 flex min-h-screen flex-col lg:h-screen">
        <header className="grid grid-cols-[1fr_auto] items-center gap-4 px-8 py-6 md:px-14 lg:grid-cols-3 lg:px-20 xl:px-24">
          <Link href="/" className="inline-flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="Amazing Emiratis"
              width={137}
              height={114}
              priority
              className="h-11 w-auto object-contain md:h-12 lg:h-14"
            />
          </Link>

          <nav className="hidden items-center justify-center gap-6 lg:flex xl:gap-8">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[11px] font-medium uppercase tracking-[0.22em] ${
                  "active" in item && item.active
                    ? "text-charcoal"
                    : "text-charcoal/70 hover:text-charcoal"
                }`}
              >
                <span className={"active" in item && item.active ? "border-b border-gold pb-1" : undefined}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3 md:gap-4">
            <button
              type="button"
              aria-label="Search"
              className="text-charcoal transition-colors hover:text-emerald"
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <Link
              href="/subscribe"
              className="rounded-full bg-emerald px-6 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-emerald/90"
            >
              Subscribe
            </Link>
          </div>
        </header>

        <div className="relative flex min-h-0 flex-1 flex-col justify-between px-8 pb-20 pt-[48vh] md:px-14 lg:w-[55%] lg:px-20 lg:pb-12 lg:pt-6 xl:px-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-emerald">
              The Definitive Archive
            </p>
            <h1
              ref={headlineRef}
              className="font-serif text-[2.35rem] leading-[1.08] text-gold sm:text-5xl lg:text-[3.55rem] xl:text-[3.85rem]"
            >
              <span className="block lg:whitespace-nowrap">The Definitive</span>
              <span className="block lg:whitespace-nowrap">Archive of</span>
              <span className="block lg:whitespace-nowrap">Emiratis Excellence</span>
            </h1>
            <GoldRule width="mt-6 w-24 lg:w-28" />
            <p className="mt-6 max-w-md text-[17px] leading-8 text-charcoal/85">
              A curated directory of the UAE&apos;s most influential leaders,
              innovators, artists and changemakers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/profiles"
                className="inline-flex items-center gap-2.5 rounded-full bg-emerald px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-emerald/90 md:text-[13px]"
              >
                Explore Profiles
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-emerald bg-ivory/40 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-emerald backdrop-blur-[2px] transition-colors hover:bg-emerald/5 md:text-[13px]"
              >
                Our Mission
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-8 lg:mt-0">
            <dl className="flex flex-wrap items-end">
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`pr-6 ${index > 0 ? "border-l border-gold pl-6" : ""}`}
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-3xl text-gold lg:text-[2.15rem]">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-charcoal">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
            <p className="text-[10px] font-normal uppercase tracking-[0.2em] text-charcoal/55">
              People — Stories — A brighter tomorrow
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-10 top-[36%] z-20 hidden lg:block xl:right-14">
        <p className="text-[11px] font-semibold uppercase leading-[1.35] tracking-[0.28em] text-gold">
          A
          <br />
          Bolder
          <br />
          Brighter
          <br />
          Emiratis
        </p>
        <span className="mt-3 block h-[1.5px] w-10 bg-gold" />
      </div>

      <div className="absolute bottom-10 right-10 z-20 hidden lg:block xl:right-14">
        <span className="mb-3 block h-[1.5px] w-14 bg-gold" />
        <p className="text-[11px] font-semibold uppercase leading-5 tracking-[0.22em] text-gold">
          Rooted here.
          <br />
          Recognised globally.
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center text-gold">
        <div className="flex animate-scroll-hint flex-col items-center">
          <span className="text-[9px] font-medium uppercase tracking-[0.28em]">
            Scroll
          </span>
          <span className="mt-1.5 h-8 w-px bg-gold" />
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold">
            <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.25} />
          </span>
        </div>
      </div>
    </section>
  );
}
