import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const PRODUCTS = [
  {
    id: "split-mural",
    title: "Climatiseurs Split Muraux",
    category: "Climatisation",
    description: "Systèmes split haute performance pour résidences et bureaux. Technologie Inverter, économie d'énergie maximale.",
    image: "/images/clim 1.jpg",
    specs: ["Puissances : 9 000 à 24 000 BTU", "Technologie Inverter", "Classe énergétique A+++"],
    brands: ["Hisense", "Nagu", "Roch"],
  },
  {
    id: "split-cassette",
    title: "Cassettes Plafonnier",
    category: "Climatisation",
    description: "Diffusion multi-directionnelle pour une couverture thermique optimale des espaces commerciaux et tertiaires.",
    image: "/images/climatiseur-plafonnier-paci-nx-series-standard-6-kwatts-monophase.jpg",
    specs: ["Soufflage 4 directions", "Filtration avancée", "Contrôle WiFi intégré"],
    brands: ["Hisense", "Nagu"],
  },
  {
    id: "split-gainable",
    title: "Climatiseurs Gainables",
    category: "Climatisation",
    description: "Solution discrète intégrée au faux plafond. Idéale pour les projets architecturaux haut de gamme.",
    image: "/images/Climatiseur-Gainable-Fitco.jpg",
    specs: ["Intégration totale", "Bruit ultra-faible", "Multi-zones possible"],
    brands: ["Hisense"],
  },
  {
    id: "machine-a-laver",
    title: "Machines à Laver",
    category: "Électroménager",
    description: "Machines à laver automatiques et semi-automatiques pour un linge toujours impeccable. Grande capacité et économie d'énergie.",
    image: "/images/machine à laver.jpeg",
    specs: ["Capacité : 7kg à 15kg", "Lavage et essorage", "Économie d'énergie"],
    brands: ["Hisense", "Roch"],
  },
  {
    id: "frigot",
    title: "Réfrigérateurs & Congélateurs",
    category: "Réfrigération",
    description: "Gamme complète de réfrigérateurs et congélateurs professionnels pour commerces, restaurants et usage domestique.",
    image: "/images/frigot.jpg",
    specs: ["Capacités 100L à 500L", "Classe A++", "Garantie 2 ans"],
    brands: ["Hisense", "Roch"],
  },
  {
    id: "clim-carton",
    title: "Climatiseurs en Stock",
    category: "Climatisation",
    description: "Large stock disponible immédiatement. Toutes marques et puissances pour livraison et installation rapides.",
    image: "/images/clim cartonné.jpg",
    specs: ["Disponibilité immédiate", "Toutes puissances", "Livraison Douala 24h"],
    brands: ["Hisense", "Nagu", "Roch"],
  },
];

export function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="produits" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(243,146,0,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nos produits"
          index="02"
          title="Équipements premium disponibles à Douala."
          description="TTC FROID SARL est revendeur agréé des meilleures marques. Achat, installation et garantie inclus pour chaque équipement."
        />

        {/* Brands band */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-6 justify-center">
            {[
              { name: "Hisense", logo: "/images/Hisense_Logo.jpg" },
              { name: "Nagu", logo: "/images/nagu logo.webp" },
              { name: "Roch", logo: "/images/roch logo.webp" },
            ].map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center h-14 px-6 rounded-xl glass frost-border"
              >
                <img
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  className="h-8 w-auto object-contain brightness-110"
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Products grid */}
        <div ref={ref} className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl glass frost-border overflow-hidden h-full"
              >
                {/* Product image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-[0.2em] text-ice-100/90 backdrop-blur-md bg-black/30 px-2.5 py-1 rounded-full border border-white/10">
                    <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-flame-500 align-middle" />
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-white leading-tight">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-ice-100/60 leading-relaxed text-pretty">
                    {product.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-xs text-ice-100/70">
                        <span className="h-1 w-1 rounded-full bg-flame-500 shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  {/* Brands */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-1 flex-wrap">
                      {product.brands.map((b) => (
                        <span key={b} className="text-[10px] font-mono uppercase tracking-wider text-ice-100/40 border border-white/10 rounded px-1.5 py-0.5">
                          {b}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="text-xs text-ice-300 hover:text-white transition-colors font-medium"
                    >
                      Demander prix →
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-ice-100/80 hover:bg-white/10 hover:text-white transition-all"
            >
              Consulter tout notre catalogue
              <span className="text-flame-500">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
