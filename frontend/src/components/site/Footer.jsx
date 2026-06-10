import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0A192F] text-[#FDFBF7]/80 border-t border-[#FDFBF7]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 grid md:grid-cols-3 gap-10 items-center">
        <div>
          <p className="font-display text-3xl text-[#FDFBF7]">Dhvani</p>
          <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37] mt-2">Amplify. Engage. Succeed.</p>
        </div>
        <div className="md:text-center text-sm">
          <p>{SITE.address}</p>
          <p className="mt-1">{SITE.email} · {SITE.phone}</p>
        </div>
        <div className="md:text-right text-xs uppercase tracking-[0.2em] text-[#FDFBF7]/50">
          © {new Date().getFullYear()} Dhvani Studio
        </div>
      </div>
    </footer>
  );
}
