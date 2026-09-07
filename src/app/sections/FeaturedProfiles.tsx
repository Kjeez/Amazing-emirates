import Image from "next/image";
import Link from "next/link";
import StaggerIn from "@/components/motion/StaggerIn";

const PROFILES = [
  {
    name: "Faisal M. Alfaqee",
    title: "Chairman & CEO",
    category: "BUSINESS",
    image: "/images/profiles/khalid-al-falasi.png", // reusing existing placeholder
    href: "/profiles/faisal-m-alfaqee",
  },
  {
    name: "Reem Al Hashimy",
    title: "Minister of State",
    category: "GOVERNMENT",
    image: "/images/profiles/aisha-al-mansoori.png",
    href: "/profiles/reem-al-hashimy",
  },
  {
    name: "Ahmad Al Shamsi",
    title: "Olympic Champion",
    category: "SPORT",
    image: "/images/profiles/omar-al-nuaimi.png",
    href: "/profiles/ahmad-al-shamsi",
  },
  {
    name: "Salem Al Qassimi",
    title: "Founder & CEO",
    category: "BUSINESS",
    image: "/images/profiles/hamdan-al-kaabi.png",
    href: "/profiles/salem-al-qassimi",
  },
  {
    name: "Latifa Al Maktoum",
    title: "Artist & Cultural Icon",
    category: "ARTS",
    image: "/images/profiles/layla-al-marri.png",
    href: "/profiles/latifa-al-maktoum",
  },
];

const CATEGORIES = ["ALL", "BUSINESS", "ARTS", "SPORT", "TECHNOLOGY", "PHILANTHROPY"];

function StarDiamond() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="h-2.5 w-2.5 fill-[#cdae86]">
      <path d="M8 0 9.4 6.6 16 8 9.4 9.4 8 16 6.6 9.4 0 8l6.6-1.4Z" />
    </svg>
  );
}

function ProfileCard({
  name,
  title,
  category,
  image,
  href,
  index,
}: (typeof PROFILES)[number] & { index: number }) {
  // Top row (index 0, 1, 2) are vertical cards (span 2 cols in a 6-col grid).
  // Bottom row (index 3, 4) are horizontal cards (span 3 cols in a 6-col grid).
  const isVertical = index < 3;

  return (
    <Link 
      href={href} 
      className={`group flex overflow-hidden border border-[#e5d8c6] bg-[#fefdfc] transition-shadow duration-300 hover:shadow-xl ${
        isVertical ? "flex-col lg:col-span-2" : "flex-col sm:flex-row lg:col-span-3 items-stretch"
      }`}
    >
      {/* Image Container */}
      <div className={`relative shrink-0 overflow-hidden ${
        isVertical ? "aspect-[4/5] w-full" : "aspect-[4/5] w-full sm:aspect-square sm:w-[45%]"
      }`}>
        <Image
          src={image}
          alt={name}
          fill
          sizes={isVertical ? "(max-width: 1024px) 100vw, 33vw" : "(max-width: 1024px) 100vw, 50vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      {/* Text Area */}
      <div className={`flex flex-[1] flex-col justify-between bg-[#fefdfc] ${
        isVertical ? "p-6 lg:p-7" : "p-6 lg:p-8"
      }`}>
        <div className="flex flex-col">
          <h3 className={`font-serif leading-[1.15] text-[#b68d53] ${
            isVertical ? "text-2xl xl:text-[1.65rem]" : "text-2xl xl:text-[1.75rem]"
          }`}>
            {name}
          </h3>
          <p className="mt-3 text-[9.5px] font-bold uppercase leading-relaxed tracking-widest text-charcoal/60">
            {title}
          </p>
        </div>
        
        <div className="mt-8 flex flex-col items-start gap-4">
          <span className="rounded-full bg-[#0e5944] px-3.5 py-1.5 text-[8.5px] font-bold uppercase tracking-[0.2em] text-white">
            {category}
          </span>
          
          {/* Read Profile indicator (reserves space to keep vertical cards equal height) */}
          {isVertical && (
            <span className={`text-[10px] font-bold uppercase tracking-[0.15em] text-[#0e5944] transition-opacity duration-300 ${
              index === 1 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}>
              Read Profile <span className="ml-1">→</span>
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedProfiles() {
  return (
    <section className="bg-[#f5f3ef] px-6 pb-24 pt-12 md:px-12 lg:px-16 xl:px-20">
      
      {/* Top Filter Navigation (Replacing the standalone Categories component) */}
      <div className="mb-16 flex w-full justify-center">
        <ul className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {CATEGORIES.map((category, index) => (
            <li key={category} className="relative flex flex-col items-center">
              <button 
                className={`pb-2 text-[10px] font-bold uppercase tracking-[0.25em] transition-colors ${
                  index === 0 ? "text-[#0e5944]" : "text-charcoal/50 hover:text-charcoal/80"
                }`}
              >
                {category}
              </button>
              {/* Active Underline */}
              {index === 0 && (
                <span className="absolute bottom-0 h-0.5 w-full bg-[#0e5944]" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Layout Grid */}
      <div className="flex items-stretch gap-8 lg:gap-12 xl:gap-16">
        
        {/* Left Side: Vertical "Featured" Title & Decorative Line */}
        <div className="hidden shrink-0 flex-col items-center lg:flex">
          <p
            className="font-serif text-[6.5rem] font-light leading-none text-[#cdae86] xl:text-[7.5rem]"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Featured
          </p>
          <span className="my-6 w-px flex-1 bg-[#cdae86]/50" />
          <StarDiamond />
        </div>

        {/* Right Side: Profiles Grid (6-column layout) */}
        <StaggerIn
          stagger={0.15}
          duration={1}
          className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-6 xl:gap-8"
        >
          {PROFILES.map((profile, idx) => (
            <ProfileCard key={profile.name} index={idx} {...profile} />
          ))}
        </StaggerIn>
      </div>

    </section>
  );
}
