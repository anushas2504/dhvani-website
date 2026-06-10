export default function VisionMission() {
  return (
    <section id="vision" data-testid="vision-section" className="py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <article
          data-testid="vision-card"
          className="bg-[#0A192F] text-[#FDFBF7] p-10 sm:p-14 relative"
        >
          <p className="overline mb-8" style={{ color: "#D4AF37" }}>◆ 02 — Our Vision</p>
          <h3 className="font-display text-4xl sm:text-5xl leading-[1.1] text-[#FDFBF7]">
            To be the studio where <span className="italic text-[#D4AF37]">creativity meets strategy</span>
            — and every brand finds its voice.
          </h3>
          <p className="mt-8 text-base leading-relaxed text-[#FDFBF7]/75 max-w-xl">
            We empower businesses of every size to reach their potential through
            innovative, customised digital marketing — building meaningful
            connections between brands and the audiences they care about.
          </p>
          <div className="absolute top-6 right-6 text-[#D4AF37] font-display italic text-5xl opacity-30 select-none">02</div>
        </article>

        <article
          data-testid="mission-card"
          className="bg-[#FDFBF7] border border-[#0A192F]/10 p-10 sm:p-14 relative"
        >
          <p className="overline mb-8">◆ 03 — Our Mission</p>
          <h3 className="font-display text-4xl sm:text-5xl leading-[1.1] text-[#0A192F]">
            Personalised, impactful campaigns that <span className="italic">drive measurable success.</span>
          </h3>
          <p className="mt-8 text-base leading-relaxed text-[#4A5568] max-w-xl">
            Through collaboration, creativity and data-driven insight we elevate
            brands, sharpen their online presence and deliver outcomes you can
            put on a dashboard. Long-term partnerships, always.
          </p>
          <div className="absolute top-6 right-6 text-[#D4AF37] font-display italic text-5xl opacity-30 select-none">03</div>
        </article>
      </div>
    </section>
  );
}
