import { SERVICES } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="py-24 sm:py-32 lg:py-40 bg-[#F3F0EA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-6">
            <p className="overline mb-6">◆ 04 — Our Services</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#0A192F]">
              Four disciplines. <br />
              <span className="italic">One studio.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-base text-[#4A5568] leading-relaxed">
            We pair editorial craft with rigorous performance marketing — so the
            work feels beautiful and the numbers behave.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              data-testid={`service-card-${s.id}`}
              className={`group relative bg-[#FDFBF7] border border-[#0A192F]/10 p-8 sm:p-10 transition-all duration-300 hover:bg-[#0A192F] hover:text-[#FDFBF7] hover:-translate-y-1 ${
                i < 3 ? "lg:border-r-0" : ""
              } ${i > 0 ? "sm:border-l-0 lg:border-l-0" : ""}`}
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-display italic text-xl text-[#D4AF37]">{s.no}</span>
                <ArrowUpRight size={20} className="text-[#0A192F]/40 group-hover:text-[#D4AF37] group-hover:rotate-45 transition" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl leading-tight text-[#0A192F] group-hover:text-[#FDFBF7] transition">
                {s.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-[#4A5568] group-hover:text-[#FDFBF7]/75 transition">
                {s.body}
              </p>
              <ul className="mt-8 space-y-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="text-xs uppercase tracking-[0.16em] text-[#0A192F]/60 group-hover:text-[#D4AF37] transition">
                    — {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
