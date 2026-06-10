import { WORK, CLIENTS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  return (
    <section id="work" data-testid="work-section" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="overline mb-6">◆ 05 — Our Work Reference</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#0A192F]">
              Selected campaigns <br />
              <span className="italic">that moved the needle.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-base text-[#4A5568] leading-relaxed">
            From sold-out USA concert tours to couture sales funnels and
            local-service showrooms — a sample of recent engagements.
          </p>
        </div>

        <div className="space-y-20">
          {WORK.map((w, idx) => (
            <article
              key={w.id}
              data-testid={`work-item-${w.id}`}
              className={`grid lg:grid-cols-12 gap-8 items-center ${idx % 2 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className="lg:col-span-7 [direction:ltr]">
                <div className="aspect-[4/3] overflow-hidden border border-[#0A192F]/10">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 [direction:ltr]">
                <p className="overline mb-4">{w.category}</p>
                <h3 className="font-display text-3xl sm:text-4xl text-[#0A192F] leading-tight">
                  {w.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-[#4A5568]">
                  {w.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {w.artists.map((a) => (
                    <span key={a} className="text-xs px-3 py-1 border border-[#0A192F]/15 text-[#0A192F]/70 uppercase tracking-[0.16em]">
                      {a}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#0A192F]/10 pt-6">
                  {w.metrics.map((m) => (
                    <div key={m.k}>
                      <p className="font-display text-2xl sm:text-3xl text-[#D4AF37]">{m.v}</p>
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.16em] text-[#0A192F]/60 mt-1">
                        {m.k}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  data-testid={`work-cta-${w.id}`}
                  className="mt-8 inline-flex items-center gap-2 link-underline text-sm font-medium tracking-wide text-[#0A192F]"
                >
                  Run a similar campaign <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 border-t border-[#0A192F]/15 pt-10">
          <p className="overline mb-6">◆ Clients & Collaborations</p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {CLIENTS.map((c) => (
              <span key={c} className="font-display italic text-2xl sm:text-3xl text-[#0A192F]/80 hover:text-[#D4AF37] transition cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
