export interface Story {
  slug: string;
  category: string;
  badge: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  author: {
    name: string;
    role?: string;
    bio?: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  imageCaption?: string;
  imageCredit?: string;
  profile?: {
    name: string;
    role: string;
    company: string;
    location: string;
    industry: string;
    website: string;
    image: string;
  };
  tags?: string[];
}

export const CATEGORIES_DATA = [
  { id: "business", label: "Business", count: 84 },
  { id: "culture", label: "Culture", count: 42 },
  { id: "health", label: "Health", count: 36 },
  { id: "lifestyle", label: "Lifestyle", count: 51 },
  { id: "tech", label: "Tech", count: 48 },
  { id: "events", label: "Events", count: 29 },
  { id: "awards", label: "Awards", count: 18 },
];

export const SUB_PILLARS = [
  { label: "STARTUPS & INNOVATION", icon: "rocket" },
  { label: "FINANCE & INVESTMENT", icon: "trending-up" },
  { label: "TRADE & LOGISTICS", icon: "globe" },
  { label: "REAL ESTATE & CONSTRUCTION", icon: "building" },
  { label: "SMES & FAMILY BUSINESS", icon: "store" },
  { label: "SUSTAINABILITY & GREEN ECONOMY", icon: "leaf" },
];

export const CATEGORY_FILTERS = [
  "All",
  "Entrepreneurship",
  "Real Estate",
  "Startups",
  "Finance",
  "Trade & Logistics",
  "Tourism & Hospitality",
  "Sustainability",
  "SMEs",
  "Leadership",
];

export const STORIES_DATA: Story[] = [
  {
    slug: "dubai-fashion-economy",
    category: "Business",
    badge: "BUSINESS",
    title: "Building the Infrastructure Behind Dubai's Fashion Economy",
    subtitle: "How Emirati entrepreneur Manal Al Mansoori is creating opportunities for regional talent and putting Dubai on the global fashion map.",
    excerpt: "How Emirati entrepreneur Manal Al Mansoori is creating opportunities for regional talent and putting Dubai on the global fashion map.",
    author: {
      name: "Sara Khan",
      role: "Senior Editorial Writer",
      bio: "Sara is a senior writer at Amazing Emiratis, covering business, innovation and the people shaping the future of the UAE.",
      avatar: "/images/profiles/layla-al-marri.png",
    },
    date: "13 October 2026",
    readTime: "8 min read",
    image: "/images/editorial/hero-fashion.jpg",
    imageCaption: "Manal Al Mansoori, Founder and CEO of Maison 88, at Dubai Design District, where she is building a new ecosystem for regional fashion talent.",
    imageCredit: "Photo by Ahmad Al Qasimi",
    profile: {
      name: "Manal Al Mansoori",
      role: "Founder & CEO",
      company: "Maison 88",
      location: "Based in Dubai, UAE",
      industry: "Fashion & Creative Economy",
      website: "www.maison88.ae",
      image: "/images/editorial/hero-fashion.jpg",
    },
    tags: ["Fashion", "Entrepreneurship", "Dubai", "Women Leaders", "Creative Economy"],
  },
  {
    slug: "sustainable-construction",
    category: "Business",
    badge: "ENTREPRENEURSHIP",
    title: "How a Dubai Startup Is Redefining Sustainable Construction",
    subtitle: "Al Nuaimi's journey from a small trading firm to a regional leader in green infrastructure.",
    excerpt: "Al Nuaimi's journey from a small trading firm to a regional leader in green infrastructure.",
    author: {
      name: "Ahmed Raza",
      avatar: "/images/editorial/hero-construction.jpg",
    },
    date: "13 Oct 2026",
    readTime: "6 min read",
    image: "/images/editorial/hero-construction.jpg",
  },
  {
    slug: "tech-talent-uae",
    category: "Business",
    badge: "STARTUPS",
    title: "Empowering a New Generation of Tech Talent in the UAE",
    subtitle: "Noura Al Falasi on building Aurea Tech and creating opportunities for young Emiratis.",
    excerpt: "Noura Al Falasi on building Aurea Tech and creating opportunities for young Emiratis.",
    author: {
      name: "Fatima Noor",
      avatar: "/images/profiles/noor-al-suwaidi.png",
    },
    date: "12 Oct 2026",
    readTime: "5 min read",
    image: "/images/profiles/noor-al-suwaidi.png",
  },
  {
    slug: "urban-living-dubai",
    category: "Business",
    badge: "REAL ESTATE",
    title: "The Future of Urban Living in Dubai's Next Decade",
    subtitle: "Khalid Al Marzooqi on innovation, community and the evolving real estate landscape.",
    excerpt: "Khalid Al Marzooqi on innovation, community and the evolving real estate landscape.",
    author: {
      name: "Daniel Martin",
      avatar: "/images/editorial/business-fintech.jpg",
    },
    date: "11 Oct 2026",
    readTime: "7 min read",
    image: "/images/editorial/business-fintech.jpg",
  },
  {
    slug: "making-investment-accessible",
    category: "Business",
    badge: "FINANCE",
    title: "Making Investment More Accessible in the Region",
    subtitle: "Layla Hassan on building a financial platform that empowers first-time investors.",
    excerpt: "Layla Hassan on building a financial platform that empowers first-time investors.",
    author: {
      name: "Sara Khan",
      avatar: "/images/profiles/layla-al-marri.png",
    },
    date: "10 Oct 2026",
    readTime: "5 min read",
    image: "/images/editorial/curated-mental-health.jpg",
  },
  {
    slug: "people-first-companies",
    category: "Business",
    badge: "LEADERSHIP",
    title: "Building People-First Companies in a Fast-Changing World",
    subtitle: "Rohit Mehta on leadership, culture and the future of work in the UAE.",
    excerpt: "Rohit Mehta on leadership, culture and the future of work in the UAE.",
    author: {
      name: "James Cooper",
      avatar: "/images/editorial/doctor-cardiologist.jpg",
    },
    date: "9 Oct 2026",
    readTime: "6 min read",
    image: "/images/editorial/doctor-cardiologist.jpg",
  },
  {
    slug: "home-kitchen-brand",
    category: "Business",
    badge: "SMES",
    title: "From Home Kitchen to a UAE-Wide Brand",
    subtitle: "Aisha Al Hammadi's inspiring journey of turning a small idea into a thriving business.",
    excerpt: "Aisha Al Hammadi's inspiring journey of turning a small idea into a thriving business.",
    author: {
      name: "Aisha Rahman",
      avatar: "/images/profiles/aisha-al-mansoori.png",
    },
    date: "8 Oct 2026",
    readTime: "5 min read",
    image: "/images/profiles/aisha-al-mansoori.png",
  },
  {
    slug: "global-trade-hub",
    category: "Business",
    badge: "TRADE & LOGISTICS",
    title: "Strengthening the UAE's Position as a Global Trade Hub",
    subtitle: "How innovation and strategic partnerships are shaping the next chapter of trade in the region.",
    excerpt: "How innovation and strategic partnerships are shaping the next chapter of trade in the region.",
    author: {
      name: "Ahmed Raza",
      avatar: "/images/editorial/hero-construction.jpg",
    },
    date: "7 Oct 2026",
    readTime: "6 min read",
    image: "/images/profiles/khalid-al-falasi.png",
  },
  {
    slug: "sustainable-uae-design",
    category: "Business",
    badge: "SUSTAINABILITY",
    title: "Designing a Greener, More Sustainable UAE",
    subtitle: "Mariam Al Qasimi on sustainable design, conscious living and the role of business in climate action.",
    excerpt: "Mariam Al Qasimi on sustainable design, conscious living and the role of business in climate action.",
    author: {
      name: "Fatima Noor",
      avatar: "/images/profiles/noor-al-suwaidi.png",
    },
    date: "6 Oct 2026",
    readTime: "5 min read",
    image: "/images/profiles/layla-al-marri.png",
  },
];

export const MOST_READ_BUSINESS = [
  { rank: 1, title: "The Emiratis Making AI Work for Everyone", readTime: "5 min read" },
  { rank: 2, title: "Inside the UAE's Booming Creator Economy", readTime: "4 min read" },
  { rank: 3, title: "How Dubai is Shaping the Future of Global Trade", readTime: "6 min read" },
  { rank: 4, title: "The Power of Community in a Changing World", readTime: "5 min read" },
  { rank: 5, title: "UAE's Next Generation of Women Leaders", readTime: "4 min read" },
];
