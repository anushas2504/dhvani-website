import { useEffect } from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import VisionMission from "@/components/site/VisionMission";
import Services from "@/components/site/Services";
import Work from "@/components/site/Work";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
    }
  }, []);

  return (
    <div data-testid="home-page" className="bg-[#FDFBF7] text-[#0A192F]">
      <Header />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
