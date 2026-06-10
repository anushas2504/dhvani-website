import { WORK, CONCERT_POSTERS, CLIENTS, KAVITHA_ADS } from "@/lib/data";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";

export default function Work() {
  return (
    <section id="work" data-testid="work-section" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="overline mb-6">◆ 05 — Our Work Reference</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E4D8C]">
              Selected campaigns <br />
              <span className="italic">that moved the needle.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-base text-[#4A5568] leading-relaxed">
            From sold-out USA concert tours to bridal couture funnels and
            local-service showrooms — actual numbers from real campaigns.
          </p>
        </div>

        {/* Concert posters strip */}
        <div className="mb-24">
          <p className="overline mb-6">◆ Concert Marketing — USA</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CONCERT_POSTERS.map((p) => (
              <article
                key={p.artist}
                data-testid={`concert-poster-${p.artist.toLowerCase().replace(/\s+/g, "-")}`}
                className={`group relative aspect-[3/4] overflow-hidden border border-[#1E4D8C]/20 hover:-translate-y-1 transition ${
                  p.image ? "bg-[#0F2A50]" : `bg-gradient-to-br ${p.accent} text-[#FDFBF7] p-5 flex flex-col justify-between`
                }`}
              >
                {p.image ? (
                  <>
                    <img
                      src={p.image}
                      alt={`${p.artist} concert poster`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#0F2A50]/0 group-hover:bg-[#0F2A50]/30 transition" />
                  </>
                ) : (
                  <>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-[#F5C518]">Live in Concert</span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl leading-tight">{p.artist}</h3>
                      <p className="font-display italic text-xs text-[#F5C518] mt-1">{p.tour}</p>
                      <div className="mt-4 space-y-1.5 text-[10px] sm:text-xs text-[#FDFBF7]/85">
                        <p className="flex items-start gap-1.5"><Calendar size={11} className="mt-0.5 text-[#F5C518]" /><span>{p.date}</span></p>
                        <p className="flex items-start gap-1.5"><MapPin size={11} className="mt-0.5 text-[#F5C518]" /><span>{p.venue}</span></p>
                      </div>
                    </div>
                  </>
                )}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#FDFBF7]/15 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight size={13} className="text-[#F5C518]" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Case studies with exact metrics */}
        <div className="space-y-20">
          <p className="overline">◆ Campaign Case Studies — Actual Reported Metrics</p>
          {WORK.map((w, idx) => (
            <article
              key={w.id}
              data-testid={`work-item-${w.id}`}
              className={`grid lg:grid-cols-12 gap-8 items-center ${idx % 2 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className="lg:col-span-7 [direction:ltr]">
                <div className="aspect-[4/3] overflow-hidden border border-[#1E4D8C]/15 bg-[#F3F0EA]">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 [direction:ltr]">
                <p className="overline mb-4">{w.category}</p>
                <h3 className="font-display text-3xl sm:text-4xl text-[#1E4D8C] leading-tight">
                  {w.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-[#4A5568]">
                  {w.summary}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#1E4D8C]/15 pt-6">
                  {w.metrics.map((m) => (
                    <div key={m.k}>
                      <p className="font-display text-2xl sm:text-3xl text-[#F5C518]">{m.v}</p>
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.16em] text-[#1E4D8C]/60 mt-1">
                        {m.k}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  data-testid={`work-cta-${w.id}`}
                  className="mt-8 inline-flex items-center gap-2 link-underline text-sm font-medium tracking-wide text-[#1E4D8C]"
                >
                  Run a similar campaign <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Kavitha Gutta — Meta sales funnel ads gallery */}
        <div className="mt-24 border-t border-[#1E4D8C]/15 pt-16">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
            <div className="lg:col-span-7">
              <p className="overline mb-4">◆ Kavitha Gutta — Meta Sales Funnel</p>
              <h3 className="font-display text-3xl sm:text-4xl text-[#1E4D8C] leading-tight">
                Bridal couture, <span className="italic">scaled on Meta.</span>
              </h3>
            </div>
            <p className="lg:col-span-4 lg:col-start-9 text-base text-[#4A5568] leading-relaxed">
              A multi-stage Meta funnel for designer Kavitha Gutta — awareness,
              consideration and conversion creatives running side-by-side.
              Below: actual sponsored ads served to the audience.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {KAVITHA_ADS.map((a, i) => (
              <figure
                key={i}
                data-testid={`kavitha-ad-${i}`}
                className="group bg-[#FDFBF7] border border-[#1E4D8C]/10 overflow-hidden"
              >
                <div className="aspect-[9/16] overflow-hidden bg-[#F3F0EA]">
                  <img
                    src={a.src}
                    alt={`Kavitha Gutta Meta ad ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#1E4D8C]/70 border-t border-[#1E4D8C]/10">
                  {a.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Client logos / collaborators */}
        <div className="mt-24 border-t border-[#1E4D8C]/15 pt-10">
          <p className="overline mb-6">◆ Clients & Collaborations</p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {CLIENTS.map((c) => (
              <span
                key={c}
                className="font-display italic text-2xl sm:text-3xl text-[#1E4D8C]/85 hover:text-[#F5C518] transition cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
