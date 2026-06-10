export const SITE = {
  brand: "Dhvani",
  tagline: "Amplify. Engage. Succeed.",
  phone: "+91 90592 94740",
  phoneRaw: "919059294740",
  email: "anushas2504@gmail.com",
  address: "27, Kota Nageshwar Rao Road, RR Nagar, Kabela, Vijayawada",
  logo: "https://customer-assets.emergentagent.com/job_project-gallery-267/artifacts/t197r3yt_Dhvani%20Brand%20Logo%20Design.png",
};

export const SERVICES = [
  {
    id: "sem",
    no: "01",
    title: "Search Engine Marketing",
    short: "SEM",
    body:
      "High-intent Google Ads with rigorous keyword research, ad copy testing and conversion-focused landing pages.",
    deliverables: ["Keyword Strategy", "Google Ads", "Landing Pages", "Conversion Tracking"],
  },
  {
    id: "smm",
    no: "02",
    title: "Social Media Marketing",
    short: "SMM",
    body:
      "Targeted Meta & Instagram campaigns, content calendars and community engagement that build a loyal audience.",
    deliverables: ["Meta Ads", "Content Calendar", "Creatives", "Community"],
  },
  {
    id: "seo",
    no: "03",
    title: "Search Engine Optimization",
    short: "SEO",
    body:
      "On-page, technical and content SEO that compounds — turning your website into a long-term acquisition engine.",
    deliverables: ["Tech Audit", "On-page", "Content", "Backlinks"],
  },
  {
    id: "web",
    no: "04",
    title: "Website Designing",
    short: "WEB",
    body:
      "Editorial, fast and conversion-tuned websites with intuitive navigation and a seamless user experience.",
    deliverables: ["UX & UI", "Development", "Performance", "CMS"],
  },
  {
    id: "graphic",
    no: "05",
    title: "Graphic Design",
    short: "GFX",
    body:
      "Posters, social creatives, brand collateral and print — crafted to make every campaign instantly recognisable.",
    deliverables: ["Brand Kits", "Posters", "Social Creatives", "Print"],
  },
  {
    id: "vfx",
    no: "06",
    title: "VFX & Motion",
    short: "VFX",
    body:
      "Reel cuts, motion graphics and post-production VFX for concert promos, brand films and high-impact reels.",
    deliverables: ["Reel Edits", "Motion Graphics", "Compositing", "Color"],
  },
  {
    id: "performance",
    no: "07",
    title: "Performance Marketing",
    short: "PERF",
    body:
      "Full-funnel paid campaigns across Meta, Google and YouTube — relentlessly optimised against CAC and ROAS.",
    deliverables: ["Media Planning", "A/B Creative", "Attribution", "Scaling"],
  },
];

// Exact concert posters from the portfolio PDF
export const CONCERT_POSTERS = [
  {
    artist: "Sid Sriram",
    tour: "USA Tour 2023",
    date: "September 2023",
    venue: "Multi-City USA",
    accent: "from-[#1E4D8C] to-[#0F2A50]",
  },
  {
    artist: "B Praak",
    tour: "Live in Concert",
    date: "Sat · Sept 16, 2023",
    venue: "NJPAC, Newark, NJ",
    accent: "from-[#0F2A50] to-[#1E4D8C]",
  },
  {
    artist: "Richa Sharma",
    tour: "Live in Concert",
    date: "Sun · Nov 19, 2023 · 5:30 PM",
    venue: "Beverly O'Neill Theater, Long Beach CA",
    accent: "from-[#1E4D8C] to-[#163C70]",
  },
  {
    artist: "Atif Aslam",
    tour: "Live in Dallas",
    date: "Sat · Oct 28",
    venue: "Curtis Culwell Center, Dallas",
    accent: "from-[#0F2A50] to-[#1E4D8C]",
  },
  {
    artist: "Jubin Nautiyal",
    tour: "Live in Concert",
    date: "Fri · Mar 08, 2024 · 8:30 PM",
    venue: "Hard Rock Live at Etess Arena, Atlantic City NJ",
    accent: "from-[#1E4D8C] to-[#0F2A50]",
  },
  {
    artist: "The Sonu Nigam Show",
    tour: "Live in Concert",
    date: "Sat · Sept 9, 2023 · 6:30 PM",
    venue: "Long Beach Arena, Long Beach CA",
    accent: "from-[#163C70] to-[#1E4D8C]",
  },
];

// Exact work-reference case studies from the portfolio PDF
export const WORK = [
  {
    id: "sid-sriram",
    title: "Sid Sriram — Live Concert (USA Tour)",
    category: "Google Display Ads",
    summary:
      "Multi-state ticket awareness and conversion campaign for the Sid Sriram USA Tour 2023 across Google Display network. Reported metrics extrapolated from a 1-week tracking window to a 4-week campaign average.",
    metrics: [
      { k: "Impressions", v: "2.88M" },
      { k: "Clicks", v: "2.52K" },
      { k: "Conversions (4w avg)", v: "4.52K" },
      { k: "Spend", v: "₹81.2K" },
    ],
    image: "/portfolio/sidsriram-ad.png",
  },
  {
    id: "car-care",
    title: "Chennai Car Care — Local Service Showroom",
    category: "Google Display Ads · Jun – Oct 2023",
    summary:
      "Hyper-local Google Display campaign delivering volume traffic to a premium Chennai car-care studio at an exceptional cost-per-click.",
    metrics: [
      { k: "Impressions", v: "929K" },
      { k: "Clicks", v: "20.3K" },
      { k: "Avg. CPC", v: "₹0.63" },
      { k: "Spend", v: "₹12.8K" },
    ],
    image: "/portfolio/carcare-ad.png",
  },
  {
    id: "arka-bridals",
    title: "ARKA Bridals — Divya Kanigalupula",
    category: "Meta Ads · May – Jun 2024 · 30-day window",
    summary:
      "Meta advertising sprint for ARKA Bridals (Designer Divya Kanigalupula) — 7 creatives delivering reach, engagement and inbound conversations for the couture house.",
    metrics: [
      { k: "Reach", v: "146.4K" },
      { k: "Engagements", v: "46,993" },
      { k: "Link Clicks", v: "1,549" },
      { k: "Spend", v: "₹7.72K" },
    ],
    image: "/portfolio/arka-insights.png",
  },
  {
    id: "shilpa",
    title: "Bride Shilpa for ARKA — Reel Boost",
    category: "Meta Reel + Boost · Jun 2024",
    summary:
      "Single high-performing reel for bridal house ARKA, amplified with paid promotion to reach over half a million viewers.",
    metrics: [
      { k: "Reach", v: "557,801" },
      { k: "Interactions", v: "11,336" },
      { k: "Profile Visits", v: "542" },
      { k: "Format", v: "Reel + Ad" },
    ],
    image: "/portfolio/arka-reel.png",
  },
];

// Real Kavitha Gutta Meta sales-funnel ads extracted from the portfolio
export const KAVITHA_ADS = [
  { src: "/portfolio/kavitha-1.png", caption: "Sponsored · Brand Awareness" },
  { src: "/portfolio/kavitha-2.png", caption: "Sponsored · Catalogue Retargeting" },
  { src: "/portfolio/kavitha-3.png", caption: "Sponsored · Lookbook Carousel" },
  { src: "/portfolio/kavitha-4.png", caption: "Sponsored · Conversion Ad" },
];

// Exact client logos referenced in the portfolio
export const CLIENTS = [
  "Bhavyaa Designer Boutique",
  "ARKA Bridals",
  "Chennai Car Care",
  "RS Entertainment",
  "Kavitha Gutta",
  "Divya Kanigalupula",
];
