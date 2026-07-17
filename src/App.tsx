import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "./hooks/useLenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { Stats } from "./components/Stats";
import { TrustBand } from "./components/TrustBand";
import { Timeline } from "./components/Timeline";
import { Realisations } from "./components/Projects";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { TrustBand as Partners } from "./components/TrustBand";
import { SEOContent } from "./components/SEOContent";
import { Loader } from "./components/Loader";

export default function App() {
  useLenis();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      document.documentElement.classList.add("loaded");
      window.scrollTo(0, 0);
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen overflow-hidden">
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Services />
            <Stats />
            <TrustBand />
            <Products />
            <Timeline />
            <Realisations />
            <About />
            <Testimonials />
            <FAQ />
            <SEOContent />
            <CTA />
            <Contact />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      )}
    </>
  );
}
