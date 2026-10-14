"use client";

import { useEffect, useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SEARCHES = [
  "Sustainable Construction",
  "Fintech Startups",
  "Women in Leadership",
  "Abu Dhabi Cultural District",
  "Dr. Sameer Ahmad",
  "AI & Future Tech",
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#E8E4DC] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#F0ECE1]">
          <Search className="w-5 h-5 text-[#8C887E]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, changemakers, industries..."
            className="flex-1 text-base text-[#1A1A1A] placeholder:text-[#9E9B92] outline-none bg-transparent"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-[#8C887E] hover:text-[#1A1A1A] px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#8C887E] hover:text-[#1A1A1A] hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular / Suggested */}
        <div className="p-6 bg-[#FCFBF9]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8C887E] mb-3">
            Suggested Topics & Trending
          </p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="text-xs font-medium bg-white hover:bg-[#F2ECE4] text-[#2C2A26] border border-[#E8E4DC] px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5"
              >
                <span>{term}</span>
                <ArrowRight className="w-3 h-3 text-[#B28843]" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
