import { SERVICES } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="py-24 sm:py-32 lg:py-40 bg-[#F3F0EA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-6">
            <p className="overline mb-6">◆ 04 — Our Services</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E4D8C]">
              Seven disciplines. <br />
              <span className="italic">One studio.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-base text-[#4A5568] leading-relaxed">
            From paid media and SEO to graphic design, VFX and full-funnel
            performance marketing — every brand asset, under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              data-testid={`service-card-${s.id}`}
              className="group relative bg-[#FDFBF7] border border-[#1E4D8C]/10 -ml-px -mt-px p-8 sm:p-10 transition-all duration-300 hover:bg-[#1E4D8C] hover:text-[#FDFBF7] hover:-translate-y-1 hover:z-10"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-display italic text-xl text-[#F5C518]">{s.no}</span>
                <ArrowUpRight size={20} className="text-[#1E4D8C]/40 group-hover:text-[#F5C518] group-hover:rotate-45 transition" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl leading-tight text-[#1E4D8C] group-hover:text-[#FDFBF7] transition">
                {s.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-[#4A5568] group-hover:text-[#FDFBF7]/75 transition">
                {s.body}
              </p>
              <ul className="mt-8 space-y-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="text-xs uppercase tracking-[0.16em] text-[#1E4D8C]/60 group-hover:text-[#F5C518] transition">
                    — {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          {/* 8th cell — CTA filler */}
          <article
            data-testid="service-card-cta"
            className="relative bg-[#1E4D8C] text-[#FDFBF7] -ml-px -mt-px p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <span className="font-display italic text-xl text-[#F5C518]">★</span>
              <h3 className="font-display text-2xl sm:text-3xl leading-tight mt-10 text-[#FDFBF7]">
                Need a custom <span className="italic text-[#F5C518]">brand sprint?</span>
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-[#FDFBF7]/75">
                Mix any of our seven disciplines into a single retainer engineered around your business goals.
              </p>
            </div>
            <a
              href="#contact"
              data-testid="services-cta"
              className="mt-8 inline-flex items-center gap-2 text-[#F5C518] text-sm font-medium link-underline"
            >
              Talk to us <ArrowUpRight size={16} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
