export default function About() {
  return (
    <section id="about" data-testid="about-section" className="py-24 sm:py-32 lg:py-40 bg-[#F3F0EA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <p className="overline mb-6">◆ 01 — About Us</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E4D8C]">
            A small team. <br />
            <span className="italic">Outsized impact.</span>
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <p className="text-lg sm:text-xl text-[#1E4D8C]/80 leading-relaxed">
            Welcome to Dhvani — your dedicated digital marketing partner. We are a
            collective of seasoned freelancers who craft strategy, creative and
            campaigns end-to-end. We work close, ship fast, and stay relentlessly
            focused on the numbers that matter to your business.
          </p>
          <p className="mt-6 text-base text-[#4A5568] leading-relaxed">
            What started with concert promotions for Indian singers touring the
            USA has grown into a multi-disciplinary studio shipping work for
            couture designers, showrooms, and entertainers — through referrals
            alone. Every engagement is personal. Every result, measurable.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-[#1E4D8C]/15 pt-10">
            {[
              { k: "Years in market", v: "4+" },
              { k: "Concert tours", v: "40+" },
              { k: "Avg ROAS", v: "5×" },
              { k: "Client referrals", v: "60%" },
            ].map((s) => (
              <div key={s.k} data-testid={`about-stat-${s.k}`}>
                <p className="font-display text-3xl sm:text-4xl text-[#F5C518]">{s.v}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-[#1E4D8C]/60 mt-2">{s.k}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
