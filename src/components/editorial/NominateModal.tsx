"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle, Award } from "lucide-react";

interface NominateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export default function NominateModal({ isOpen, onClose, defaultCategory = "Business" }: NominateModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nomineeName: "",
    category: defaultCategory,
    bio: "",
  });

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E8E4DC] overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-1 rounded-full text-[#8C887E] hover:text-[#1A1A1A] hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
              Nomination Received
            </h3>
            <p className="text-sm text-[#5A5751] max-w-md mx-auto">
              Thank you for nominating an exceptional changemaker. Our editorial board reviews submissions each week.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 bg-[#B28843] text-white text-sm font-semibold rounded-lg hover:bg-[#9E7634] transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2.5 text-[#B28843] mb-1">
              <Award className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-semibold">
                Amazing Emiratis Awards & Archive
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1A1A]">
              Nominate a Leader or Brand
            </h2>
            <p className="text-xs text-[#6B665E] leading-relaxed">
              Help us recognize the pioneers shaping the future of the United Arab Emirates across arts, tech, business, and community.
            </p>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-[#2C2A26] mb-1">
                  Nominee / Brand Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Noura Al Kaabi or Aarno Technologies"
                  value={formData.nomineeName}
                  onChange={(e) => setFormData({ ...formData, nomineeName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-[#D8D2C5] rounded-lg focus:outline-none focus:border-[#B28843] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#2C2A26] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-[#D8D2C5] rounded-lg focus:outline-none focus:border-[#B28843] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2C2A26] mb-1">
                    Your Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-[#D8D2C5] rounded-lg focus:outline-none focus:border-[#B28843] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C2A26] mb-1">
                  Pillar / Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-[#D8D2C5] rounded-lg focus:outline-none focus:border-[#B28843] transition-colors bg-white"
                >
                  <option value="Business">Business & Innovation</option>
                  <option value="Culture">Culture & Arts</option>
                  <option value="Health">Healthcare & Well-being</option>
                  <option value="Lifestyle">Culinary & Lifestyle</option>
                  <option value="Tech">Technology & AI</option>
                  <option value="Community">Community & Social Impact</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2C2A26] mb-1">
                  Why should they be featured?
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a brief overview of their achievements, impact, and leadership..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-[#D8D2C5] rounded-lg focus:outline-none focus:border-[#B28843] transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 bg-[#B28843] hover:bg-[#9E7634] text-white font-medium text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Nomination</span>
              <span>&rarr;</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
