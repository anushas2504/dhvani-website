import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE } from "@/lib/data";

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
        scrolled ? "backdrop-blur-xl bg-[#FDFBF7]/80 border-b border-[#0A192F]/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" data-testid="logo-link" className="flex items-center gap-2 group">
          <span className="font-display text-3xl font-bold tracking-tight text-[#0A192F]">
            Dhvani
          </span>
          <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#D4AF37] group-hover:scale-150 transition" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}`}
              onClick={() => goTo(n.id)}
              className="link-underline text-sm tracking-wide text-[#0A192F]/80 hover:text-[#0A192F]"
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
