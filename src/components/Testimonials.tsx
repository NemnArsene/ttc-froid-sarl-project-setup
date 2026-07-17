import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "../constants/tokens";
import { useState } from "react";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setCount(emblaApi.scrollSnapList().length);
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_30%,rgba(243,146,0,0.06),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="Témoignages"
            index="04"
            title="Ils nous font confiance à Douala, Yaoundé et au-delà."
            description="Trois voix parmi des centaines de clients qui renouvellent leur partenariat saison après saison."
          />
          <div className="flex items-center gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_80%] lg:flex-[0_0_60%] min-w-0 pr-6">
                <Reveal>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-full rounded-2xl glass-strong frost-border p-8 sm:p-10"
                  >
                    <Quote className="absolute top-6 right-6 h-10 w-10 text-ice-500/30 fill-ice-500/10" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="h-4 w-4 text-flame-500 fill-flame-500" viewBox="0 0 20 20">
                          <path d="M10 1l2.928 6.035 6.572.955-4.75 4.628 1.122 6.535L10 16.13l-5.872 3.023 1.122-6.535-4.75-4.628 6.572-.955z" />
                        </svg>
                      ))}
                    </div>
                    <p className="font-display text-2xl sm:text-3xl text-white leading-snug text-balance">
                      {t.text}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-ice-500 to-ice-700 flex items-center justify-center font-display font-semibold text-white">
                        {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-medium text-white">{t.name}</div>
                        <div className="text-sm text-ice-100/60">{t.role}</div>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1 transition-all rounded-full ${i === selected ? "w-8 bg-flame-500" : "w-4 bg-white/15"}`}
              aria-label={`Aller au témoignage ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
