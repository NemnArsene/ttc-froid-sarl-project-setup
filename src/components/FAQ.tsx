import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { FAQ as FAQ_DATA } from "../constants/tokens";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  // JSON-LD FAQ schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Questions fréquentes"
              index="05"
              title="Tout ce que vous devez savoir avant de nous confier votre projet."
              description="Notre équipe reste disponible pour toute question technique ou commerciale — par téléphone, WhatsApp ou via le formulaire de contact."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {FAQ_DATA.map((item, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div
                    className={`group rounded-2xl glass frost-border overflow-hidden transition-all duration-500 ${
                      open === i ? "bg-white/[0.05]" : ""
                    }`}
                  >
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left"
                      aria-expanded={open === i}
                    >
                      <span className="font-display text-lg sm:text-xl font-medium text-white leading-snug pr-4">
                        {item.q}
                      </span>
                      <span
                        className={`shrink-0 mt-1 h-8 w-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${
                          open === i ? "bg-flame-500 text-ink-900 border-flame-500 rotate-180" : "bg-white/5 text-ice-100"
                        }`}
                      >
                        {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 text-ice-100/70 leading-relaxed text-pretty">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
