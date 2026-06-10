import { useState } from "react";
import { Phone, Mail, MapPin, ArrowUpRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/lib/api";
import { SITE, SERVICES } from "@/lib/data";

const initial = { name: "", email: "", phone: "", service: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    try {
      setLoading(true);
      await api.post("/leads", form);
      toast.success("Thanks! We'll be in touch within 24 hours.");
      setForm(initial);
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 sm:py-32 lg:py-40 bg-[#0A192F] text-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="overline mb-6" style={{ color: "#D4AF37" }}>◆ 06 — Contact Us</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Let's build <br /> <span className="italic text-[#D4AF37]">something loud.</span>
          </h2>
          <p className="mt-6 text-base text-[#FDFBF7]/70 leading-relaxed max-w-md">
            Tell us about your brand, your campaign, or your tour. We respond
            personally within one business day.
          </p>

          <div className="mt-12 space-y-6">
            <a
              href={`tel:${SITE.phoneRaw}`}
              data-testid="contact-phone"
              className="flex items-start gap-4 group"
            >
              <Phone size={20} className="text-[#D4AF37] mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#FDFBF7]/50">Phone</p>
                <p className="font-display text-xl group-hover:text-[#D4AF37] transition">{SITE.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              data-testid="contact-email"
              className="flex items-start gap-4 group"
            >
              <Mail size={20} className="text-[#D4AF37] mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#FDFBF7]/50">Email</p>
                <p className="font-display text-xl group-hover:text-[#D4AF37] transition break-all">{SITE.email}</p>
              </div>
            </a>
            <div className="flex items-start gap-4" data-testid="contact-address">
              <MapPin size={20} className="text-[#D4AF37] mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#FDFBF7]/50">Studio</p>
                <p className="text-base text-[#FDFBF7]/90 max-w-xs">{SITE.address}</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          data-testid="contact-form"
          className="lg:col-span-6 lg:col-start-7 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[#FDFBF7]/50">Your Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                data-testid="form-name"
                className="line-input text-[#FDFBF7]"
                style={{ borderColor: "rgba(253,251,247,0.25)", color: "#FDFBF7" }}
                placeholder="Anusha Sripathi"
                required
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[#FDFBF7]/50">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                data-testid="form-email"
                className="line-input"
                style={{ borderColor: "rgba(253,251,247,0.25)", color: "#FDFBF7" }}
                placeholder="you@brand.com"
                required
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[#FDFBF7]/50">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                data-testid="form-phone"
                className="line-input"
                style={{ borderColor: "rgba(253,251,247,0.25)", color: "#FDFBF7" }}
                placeholder="+91 ..."
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-[#FDFBF7]/50">Service</label>
              <select
                name="service"
                value={form.service}
                onChange={onChange}
                data-testid="form-service"
                className="line-input bg-transparent"
                style={{ borderColor: "rgba(253,251,247,0.25)", color: "#FDFBF7" }}
              >
                <option value="" className="text-[#0A192F]">Choose a service…</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title} className="text-[#0A192F]">{s.title}</option>
                ))}
                <option value="Full-Funnel Campaign" className="text-[#0A192F]">Full-Funnel Campaign</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-[#FDFBF7]/50">Tell us about your project</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              data-testid="form-message"
              className="line-input"
              style={{ borderColor: "rgba(253,251,247,0.25)", color: "#FDFBF7" }}
              rows={4}
              placeholder="Brand, goals, timelines…"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            data-testid="contact-submit-button"
            className="btn-gold w-full sm:w-auto px-10 py-4 inline-flex items-center justify-center gap-3 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Sending…
              </>
            ) : (
              <>
                Send Enquiry <ArrowUpRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
