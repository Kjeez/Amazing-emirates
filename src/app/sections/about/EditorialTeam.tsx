"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Amira Al Hashimi",
    role: "Editor-in-Chief",
    image: "/images/team/amira.jpg", // placeholder path
  },
  {
    name: "Omar Bin Sulayem",
    role: "Head of Research",
    image: "/images/team/omar.jpg",
  },
  {
    name: "Fatima Al Qasimi",
    role: "Senior Curator",
    image: "/images/team/fatima.jpg",
  },
];

export default function EditorialTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(".team-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".team-grid", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ivory py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-20">
          <h2 className="team-title font-serif text-3xl md:text-5xl text-gold">
            The Editorial Team
          </h2>
          <div className="w-20 h-px bg-gold mt-6" />
        </div>

        <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, index) => (
            <div key={index} className="team-card group">
              <div className="relative aspect-square mb-6 overflow-hidden border border-gold/30">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-gold mb-1">
                {member.name}
              </h3>
              <p className="font-sans text-sm text-warmgray uppercase tracking-wider">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
