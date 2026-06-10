import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <p className="overline mb-6" data-testid="hero-overline">
            ◆ Digital Marketing Studio — est. Vijayawada
          </p>
          <h1
            className="font-display text-5xl sm:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight text-[#1E4D8C]"
            data-testid="hero-title"
          >
            Amplify.
            <br />
            <span className="italic font-medium">Engage.</span>
            <br />
            <span className="text-[#F5C518]">Succeed.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-[#4A5568] leading-relaxed" data-testid="hero-subtitle">
            Dhvani is a boutique team of seasoned freelancers building bold,
            measurable digital campaigns for concerts, couture houses, and
            premium brands — across India and the United States.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              data-testid="hero-cta-primary"
              href="#contact"
              className="btn-gold px-7 py-4 inline-flex items-center gap-3 rounded-none"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </a>
            <a
              data-testid="hero-cta-secondary"
              href="#work"
              className="link-underline text-sm font-medium tracking-wide text-[#1E4D8C]"
            >
              See selected work
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative arch-mask aspect-[3/4] border border-[#1E4D8C]/10">
            <img
              src="https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720"
              alt="Concert audience under stage lights"
              className="w-full h-full object-cover"
              data-testid="hero-image"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#1E4D8C] text-[#FDFBF7] px-5 py-4 hidden sm:block">
            <p className="font-display text-3xl text-[#F5C518] leading-none">12M+</p>
            <p className="text-xs uppercase tracking-[0.2em] mt-2">Ad impressions delivered</p>
          </div>
          <div className="absolute -top-4 right-4 sm:right-8 rotate-3 bg-[#FDFBF7] border border-[#1E4D8C]/10 px-4 py-2">
            <p className="text-xs uppercase tracking-[0.2em] text-[#1E4D8C]/70">USA · India</p>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-[#1E4D8C]/10 pt-6">
        <div className="overflow-hidden">
          <div className="marquee-track text-[#1E4D8C]/70 font-display italic text-2xl sm:text-4xl">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-16 pr-16">
                <span>Concert Marketing</span><span className="text-[#F5C518]">✦</span>
                <span>Couture Campaigns</span><span className="text-[#F5C518]">✦</span>
                <span>Local SEO</span><span className="text-[#F5C518]">✦</span>
                <span>Meta & Google Ads</span><span className="text-[#F5C518]">✦</span>
                <span>Editorial Websites</span><span className="text-[#F5C518]">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
