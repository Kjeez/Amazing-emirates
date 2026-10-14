"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/editorial/TopBar";
import HeaderNav from "@/components/editorial/HeaderNav";
import Footer from "@/app/sections/Footer";
import NominateModal from "@/components/editorial/NominateModal";
import { STORIES_DATA, MOST_READ_BUSINESS } from "@/lib/editorialData";
import {
  MapPin,
  Briefcase,
  Globe,
  Share2,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Send,
  ArrowRight,
} from "lucide-react";

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export default function StoryDetailPage({ params }: StoryPageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const [copied, setCopied] = useState(false);
  const [nominateOpen, setNominateOpen] = useState(false);

  // Find story or default to first
  const story =
    STORIES_DATA.find((s) => s.slug === slug) || STORIES_DATA[0];

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A1A1A] antialiased">
      <TopBar />
      <HeaderNav />

      <main className="flex-1 pb-16">
        {/* Article Header & Title */}
        <section className="w-full pt-8 sm:pt-12 pb-6 px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Category Tag */}
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-[#B28843] text-white text-[11px] font-bold tracking-wider uppercase rounded-xs">
                {story.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal leading-[1.18] text-[#1A1A1A] tracking-tight mb-4 max-w-3xl mx-auto">
              {story.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#5A5751] leading-relaxed max-w-2xl mx-auto mb-6">
              {story.subtitle || story.excerpt}
            </p>

            {/* Author, Date & Share Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3 border-y border-[#EBE7DF] max-w-2xl mx-auto text-xs text-[#7A756C]">
              {/* Author & Read Time */}
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#D5CEC2] shrink-0">
                  <Image
                    src={story.author.avatar}
                    alt={story.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="font-semibold text-[#1A1A1A]">By {story.author.name}</span>
                  <span className="mx-2 text-[#D0C9BD]">|</span>
                  <span>{story.date}</span>
                  <span className="mx-2 text-[#D0C9BD]">|</span>
                  <span>{story.readTime}</span>
                </div>
              </div>

              {/* Share Icons */}
              <div className="flex items-center gap-3 text-[#5A5751]">
                <button
                  type="button"
                  onClick={handleCopy}
                  title="Copy link"
                  className="hover:text-[#B28843] transition-colors p-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B28843] transition-colors p-1"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B28843] transition-colors p-1"
                  aria-label="Share on X"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B28843] transition-colors p-1"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Large Panoramic Hero Image */}
        <section className="w-full px-4 sm:px-8 lg:px-12 mb-10">
          <div className="max-w-[1240px] mx-auto">
            <div className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full rounded-2xl overflow-hidden shadow-sm bg-[#EAE5DC] border border-[#E8E4DC]">
              <Image
                src={story.image}
                alt={story.title}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1240px) 100vw, 1240px"
              />
            </div>
            {/* Caption & Photo Credit */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#7A756C] mt-2.5 px-1 gap-1">
              <span>{story.imageCaption || "Founder and visionary shaping the regional creative landscape."}</span>
              <span className="italic">{story.imageCredit || "Photo by Ahmad Al Qasimi"}</span>
            </div>
          </div>
        </section>

        {/* Article Body with Floating Social (Left), Content (Middle), Profile Card (Right) */}
        <section className="w-full px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Sticky Social Share Bar (1 col) */}
              <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-4 sticky top-28 pt-2">
                <span className="text-[10px] font-bold text-[#8C887E] tracking-widest uppercase">
                  Share
                </span>
                <div className="flex flex-col gap-3 text-[#5A5751]">
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-[#E2DDCF] bg-white hover:bg-[#25D366] hover:text-white hover:border-[#25D366] flex items-center justify-center transition-all"
                    aria-label="WhatsApp"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-[#E2DDCF] bg-white hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] flex items-center justify-center transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-[#E2DDCF] bg-white hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all"
                    aria-label="X"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="w-8 h-8 rounded-full border border-[#E2DDCF] bg-white hover:bg-[#B28843] hover:text-white hover:border-[#B28843] flex items-center justify-center transition-all"
                    aria-label="Copy link"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Middle Core Article Content (7 cols) */}
              <div className="lg:col-span-7 prose prose-stone max-w-none text-[#2C2A26]">
                {/* Paragraph 1 with Drop Cap */}
                <p className="text-base sm:text-lg leading-relaxed text-[#2C2A26] mb-6">
                  <span className="float-left font-serif text-5xl sm:text-6xl leading-[0.8] pr-3 pt-1 text-[#8C6228] font-bold">
                    D
                  </span>
                  ubai&apos;s fashion scene has evolved from a niche market into a global industry, and Manal Al Mansoori has been at the forefront of this transformation. As the founder and CEO of Maison 88, she is building the infrastructure, talent pipelines and international connections that are positioning the UAE as a serious player in the global fashion economy.
                </p>

                <p className="text-base sm:text-lg leading-relaxed text-[#4A4742] mb-8">
                  What started as a small concept store in 2018 has now grown into a multi-faceted platform that includes a dedicated showroom, mentorship programmes, and an annual showcase that connects regional designers with international buyers.
                </p>

                {/* Subheading */}
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1A1A] mt-10 mb-4 tracking-tight">
                  Creating Opportunities for Regional Talent
                </h2>

                <p className="text-base sm:text-lg leading-relaxed text-[#4A4742] mb-8">
                  Manal believes that the Middle East has a unique creative identity that deserves a larger global platform. Through Maison 88, she provides emerging designers with access to mentorship, production support and international exposure.
                </p>

                {/* Pull Quote */}
                <div className="my-10 pl-6 border-l-2 border-[#B28843] py-2">
                  <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-[26px] leading-[1.35] text-[#8C6228] font-normal mb-3">
                    &ldquo; The UAE is more than a consumer market — it&apos;s a launchpad for global opportunities. Our designers have a unique story to tell, and the world is ready to listen. &rdquo;
                  </blockquote>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#7A756C]">
                    — Manal Al Mansoori
                  </p>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-[#4A4742] mb-8">
                  Her annual showcase at Dubai Design District brings together designers, buyers, media and industry leaders from across the world, creating a bridge between regional creativity and global markets. The event has become one of the most anticipated dates on Dubai&apos;s fashion calendar.
                </p>

                {/* In-Article Second Image */}
                <div className="my-8">
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-xs border border-[#E8E4DC] bg-[#EAE5DC]">
                    <Image
                      src="/images/editorial/story-under30.jpg"
                      alt="Manal Al Mansoori working with regional designers"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 700px"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#7A756C] mt-2 px-1">
                    <span>Manal Al Mansoori working with regional designers at the Maison 88 studio in Dubai Design District.</span>
                    <span className="italic">Photo by Sara Khan</span>
                  </div>
                </div>

                {/* Subheading */}
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1A1A] mt-10 mb-4 tracking-tight">
                  A Bigger Vision for the UAE
                </h2>

                <p className="text-base sm:text-lg leading-relaxed text-[#4A4742] mb-8">
                  For Manal, fashion is not just about clothing — it&apos;s about culture, identity and economic opportunity. She envisions Dubai as a global hub where East meets West, and where regional designers can build sustainable businesses that create jobs and inspire future generations.
                </p>

                {/* Topic Tags */}
                <div className="pt-6 border-t border-[#EBE7DF] mb-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C887E] mr-2">
                      Topics
                    </span>
                    {(story.tags || ["Fashion", "Entrepreneurship", "Dubai", "Women Leaders", "Creative Economy"]).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white border border-[#DDD7CB] text-[#5A5751] text-xs font-medium rounded-full hover:border-[#B28843] hover:text-[#B28843] cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Horizontal Share Bar */}
                <div className="flex items-center justify-between p-3.5 bg-white border border-[#EBE7DF] rounded-xl mb-8">
                  <span className="text-xs font-semibold text-[#5A5751]">Share this article</span>
                  <div className="flex items-center gap-3 text-[#5A5751]">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#FAF8F5] border border-[#DDD7CB] text-xs font-medium hover:text-[#B28843] transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Copied" : "Copy Link"}</span>
                    </button>
                  </div>
                </div>

                {/* Author Bio Box */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#EBE7DF] mb-8">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D5CEC2] shrink-0">
                    <Image
                      src={story.author.avatar}
                      alt={story.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C887E] block mb-0.5">
                      About the Author
                    </span>
                    <h4 className="font-serif text-sm font-bold text-[#1A1A1A] mb-1">
                      {story.author.name}
                    </h4>
                    <p className="text-xs text-[#5A5751] leading-relaxed">
                      {story.author.bio || "Sara is a senior writer at Amazing Emiratis, covering business, innovation and the people shaping the future of the UAE."}
                    </p>
                  </div>
                </div>

                {/* Nomination Callout Banner */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-[#FAF5EB] border border-[#E8DEC8] mb-10">
                  <div className="flex items-center gap-3 text-center sm:text-left">
                    <div className="w-8 h-8 rounded-full bg-[#B28843]/15 flex items-center justify-center shrink-0 text-[#B28843]">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A]">
                        Know someone with a story like this?
                      </h4>
                      <p className="text-[11px] text-[#7A756C]">
                        We&apos;re always looking to feature inspiring individuals and brands across the UAE.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNominateOpen(true)}
                    className="px-5 py-2.5 bg-[#B28843] hover:bg-[#9E7634] text-white text-xs font-semibold rounded-lg shrink-0 transition-colors flex items-center gap-1.5"
                  >
                    <span>Nominate Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Previous / Next Story Navigation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#EBE7DF]">
                  {/* Previous Story */}
                  <Link
                    href="/stories/sustainable-construction"
                    className="group flex items-center gap-3.5 p-3 rounded-xl bg-white border border-[#EFECE6] hover:border-[#DED9CE] hover:shadow-xs transition-all"
                  >
                    <div className="relative w-16 h-14 rounded-lg overflow-hidden shrink-0 bg-[#E8E4DC]">
                      <Image
                        src="/images/editorial/hero-construction.jpg"
                        alt="Previous Story"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] font-bold text-[#8C887E] tracking-wider uppercase block">
                        &larr; Previous Story
                      </span>
                      <h5 className="font-serif text-xs font-bold text-[#1A1A1A] leading-snug line-clamp-2 group-hover:text-[#B28843] transition-colors mt-0.5">
                        How a Dubai Startup Is Redefining Sustainable Construction
                      </h5>
                    </div>
                  </Link>

                  {/* Next Story */}
                  <Link
                    href="/stories/making-investment-accessible"
                    className="group flex items-center gap-3.5 p-3 rounded-xl bg-white border border-[#EFECE6] hover:border-[#DED9CE] hover:shadow-xs transition-all"
                  >
                    <div className="relative w-16 h-14 rounded-lg overflow-hidden shrink-0 bg-[#E8E4DC]">
                      <Image
                        src="/images/editorial/hero-doctor.jpg"
                        alt="Next Story"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] font-bold text-[#8C887E] tracking-wider uppercase block">
                        Next Story &rarr;
                      </span>
                      <h5 className="font-serif text-xs font-bold text-[#1A1A1A] leading-snug line-clamp-2 group-hover:text-[#B28843] transition-colors mt-0.5">
                        A Doctor&apos;s Mission to Make Mental Health Care More Accessible in the UAE
                      </h5>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Profile Sidebar Card (4 cols) */}
              <div className="lg:col-span-4 sticky top-28">
                <div className="bg-white rounded-2xl border border-[#EFECE6] overflow-hidden p-6 shadow-sm">
                  <span className="text-[10px] font-serif font-bold text-[#B28843] tracking-widest uppercase block mb-4">
                    Profile
                  </span>

                  {/* Photo */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#EAE5DC] mb-4">
                    <Image
                      src={story.profile?.image || story.image}
                      alt={story.profile?.name || "Profile"}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] leading-snug">
                    {story.profile?.name || "Manal Al Mansoori"}
                  </h3>
                  <p className="text-xs text-[#8C6228] font-medium mt-0.5 mb-4">
                    {story.profile?.role || "Founder & CEO"}, {story.profile?.company || "Maison 88"}
                  </p>

                  {/* Metadata Rows */}
                  <div className="space-y-2.5 text-xs text-[#5A5751] pb-5 border-b border-[#F0ECE1]">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#8C887E] shrink-0" />
                      <span>{story.profile?.location || "Based in Dubai, UAE"}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Briefcase className="w-4 h-4 text-[#8C887E] shrink-0" />
                      <span>{story.profile?.industry || "Industry: Fashion & Creative Economy"}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-[#8C887E] shrink-0" />
                      <span>{story.profile?.website || "Website: www.maison88.ae"}</span>
                    </div>
                  </div>

                  {/* Social & Action */}
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-xs text-[#8C887E] font-medium">Follow</span>
                    <div className="flex items-center gap-3 text-[#5A5751]">
                      <a href="#" className="hover:text-[#B28843] transition-colors">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="#" className="hover:text-[#B28843] transition-colors">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="hover:text-[#B28843] transition-colors">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setNominateOpen(true)}
                    className="w-full mt-4 py-2 border border-[#E8DEC8] hover:border-[#B28843] bg-[#FAF7F0] text-[#8C6228] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Nominate someone like this</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MORE FROM BUSINESS Section */}
        <section className="w-full bg-[#FAF8F5] pt-16 px-4 sm:px-8 lg:px-12">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex items-baseline justify-between border-b border-[#E8E4DC] pb-3 mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-[#B28843] uppercase">
                More From Business
              </h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous"
                  className="w-7 h-7 rounded-full border border-[#D5CEC2] bg-white flex items-center justify-center text-[#5A5751] hover:bg-[#F2ECE4] transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  className="w-7 h-7 rounded-full border border-[#D5CEC2] bg-white flex items-center justify-center text-[#5A5751] hover:bg-[#F2ECE4] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* 3 Story Cards (8 cols) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {[
                  {
                    slug: "urban-living-dubai",
                    title: "From Dubai to the World: A Fintech Founder's Next Chapter",
                    author: "Daniel Martin",
                    readTime: "7 min read",
                    image: "/images/editorial/business-fintech.jpg",
                  },
                  {
                    slug: "sustainable-construction",
                    title: "The Real Estate Leader Building Smarter Communities",
                    author: "Fatima Noor",
                    readTime: "6 min read",
                    image: "/images/editorial/hero-construction.jpg",
                  },
                  {
                    slug: "tech-talent-uae",
                    title: "Preserving Emirati Heritage Through Modern Art",
                    author: "Aisha Rahman",
                    readTime: "5 min read",
                    image: "/images/profiles/layla-al-marri.png",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="group bg-white rounded-xl border border-[#EFECE6] overflow-hidden hover:border-[#DED9CE] hover:shadow-md transition-all duration-300 flex flex-col"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8E4DC]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-3.5 flex flex-col flex-1">
                      <span className="inline-block text-[9px] font-bold text-[#B28843] uppercase tracking-wider mb-1">
                        Business
                      </span>
                      <Link href={`/stories/${item.slug}`}>
                        <h4 className="font-serif text-xs sm:text-sm font-bold text-[#1A1A1A] leading-snug line-clamp-2 group-hover:text-[#B28843] transition-colors mb-2">
                          {item.title}
                        </h4>
                      </Link>
                      <p className="text-[10px] text-[#8C887E] mt-auto font-medium">
                        By {item.author} | {item.readTime}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* MOST READ (4 cols) */}
              <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-[#EFECE6] shadow-xs">
                <h3 className="font-serif text-sm font-bold text-[#1A1A1A] uppercase tracking-wider border-b border-[#EFEBE3] pb-2.5 mb-3">
                  Most Read
                </h3>
                <div className="divide-y divide-[#F2EFE8]">
                  {MOST_READ_BUSINESS.map((item) => (
                    <div
                      key={item.rank}
                      className="py-2.5 first:pt-0 last:pb-0 flex items-start gap-3.5 group cursor-pointer"
                    >
                      <span className="font-serif text-2xl font-bold text-[#B28843] leading-none shrink-0 w-4">
                        {item.rank}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-serif text-xs font-medium text-[#1A1A1A] leading-snug group-hover:text-[#B28843] transition-colors">
                          {item.title}
                        </h5>
                        <p className="text-[9px] text-[#8C887E] mt-0.5 font-medium">
                          {item.readTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <NominateModal isOpen={nominateOpen} onClose={() => setNominateOpen(false)} defaultCategory="Fashion & Creative" />
    </div>
  );
}
