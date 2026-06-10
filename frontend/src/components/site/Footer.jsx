import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#1E4D8C] text-[#FDFBF7]/80 border-t border-[#FDFBF7]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 grid md:grid-cols-3 gap-10 items-center">
        <div>
          <span className="font-display text-4xl font-bold text-[#FDFBF7]">Dhvani</span>
          <p className="text-xs uppercase tracking-[0.22em] text-[#F5C518] mt-4">Amplify. Engage. Succeed.</p>
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
