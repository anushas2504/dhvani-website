import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE } from "@/lib/data";

// Logo image is on a transparent black bg — show on cream by clipping is handled via image alpha

const navItems = [
  { id: "about", label: "About" },
  { id: "vision", label: "Vision" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[#FDFBF7]/85 border-b border-[#1E4D8C]/15" : "bg-[#FDFBF7]/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-24 flex items-center justify-between">
        <Link to="/" data-testid="logo-link" className="flex items-center gap-3 group">
          <div className="leading-none">
            <span className="block font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1E4D8C]">
              Dhvani
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.22em] text-[#F5C518] mt-1">
              Digital Growth Studio
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}`}
              onClick={() => goTo(n.id)}
              className="link-underline text-sm tracking-wide text-[#0F2A50]/80 hover:text-[#0F2A50]"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <button
          data-testid="header-cta"
          onClick={() => goTo("contact")}
          className="btn-navy px-5 py-2.5 text-sm rounded-none"
        >
          Start a Project →
        </button>
      </div>
    </header>
  );
}
