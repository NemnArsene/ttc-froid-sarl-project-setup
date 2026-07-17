import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const REALIZATIONS = [
  {
    title: "Hôpital Laquintinie de Douala",
    location: "Douala, Cameroun",
    scope: "Installation complète climatisation & chambre froide médicale",
    tag: "Médical",
    image: "/images/installation reuissis.jpg",
    logo: "/images/la quitinie logo.webp",
    description: "Équipement de l'hôpital de référence de Douala — chambres froides pharmaceutiques, climatisation des blocs et service de maintenance permanent.",
    isKeyClient: true,
  },
  {
    title: "Installation Professionnelle — Bureaux",
    location: "Douala, Littoral",
    scope: "Système multi-split gainable, 12 unités",
    tag: "Tertiaire",
    image: "/images/installation.jpg",
    description: "Installation d'un système de climatisation centralisée pour des espaces de bureaux haut de gamme à Douala.",
  },
  {
    title: "Réalisation industrielle",
    location: "Bonaberi, Douala",
    scope: "Froid industriel & chambres froides process",
    tag: "Industrie",
    image: "/images/IMG-20260717-WA0043.jpg",
    description: "Mise en place d'une solution complète de réfrigération industrielle pour site de production alimentaire.",
  },
  {
    title: "Complexe Commercial",
    location: "Douala Centre",
    scope: "Climatisation tertiaire + maintenance",
    tag: "Commerce",
    image: "/images/IMG-20260717-WA0048.jpg",
    description: "Équipement complet d'un complexe commercial avec systèmes split, maintenance préventive trimestrielle.",
  },
  {
    title: "Hôtellerie de standing",
    location: "Kribi, Cameroun",
    scope: "30 chambres VRV + restauration froide",
    tag: "Hôtellerie",
    image: "/images/IMG-20260717-WA0049.jpg",
    description: "Projet hôtelier complet incluant climatisation VRV et équipements de réfrigération pour la restauration.",
  },
  {
    title: "Dépannage & Réparation",
    location: "Douala et environs",
    scope: "Intervention urgente — remise en service express",
    tag: "SAV",
    image: "/images/reparation.jpg",
    description: "Service de dépannage 24/7 avec diagnostic précis et remise en service rapide garantie.",
  },
];

export function Realisations() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="projects" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="Réalisations"
            index="04"
            title="Nos projets à Douala et au-delà."
            description="De l'hôpital Laquintinie aux complexes industriels — chaque réalisation témoigne de notre exigence."
          />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-ice-100/70 hover:text-white transition-colors group shrink-0"
          >
            Discuter de votre projet
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Key client highlight */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong frost-border p-8 sm:p-12">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-ice-500/10 blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-flame-500/30 bg-flame-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-flame-400 backdrop-blur mb-4">
                  <span className="h-1 w-1 rounded-full bg-flame-500" />
                  Client phare
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight">
                  Hôpital Laquintinie de Douala
                </h3>
                <p className="mt-4 text-ice-100/70 leading-relaxed">
                  Notre partenariat avec l'hôpital de référence du Littoral illustre notre capacité à gérer
                  des installations critiques : climatisation des blocs opératoires, chambres froides pharmaceutiques
                  et maintenance préventive en milieu hospitalier exigeant.
                </p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm text-ice-300 hover:text-white transition-colors">
                  En savoir plus sur nos références médicales
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src="/images/installation reuissis.jpg"
                    alt="Installation à l'Hôpital Laquintinie de Douala"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
                  {/* Hospital logo overlay */}
                  <div className="absolute bottom-4 right-4 bg-white/90 rounded-xl p-3 backdrop-blur">
                    <img
                      src="/images/la quitinie logo.webp"
                      alt="Hôpital Laquintinie"
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Horizontal scroll gallery */}
      <div ref={ref} className="relative overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 pl-4 sm:pl-12 lg:pl-24 will-change-transform">
          {[...REALIZATIONS.slice(1), ...REALIZATIONS.slice(1, 3)].map((p, i) => (
            <RealizationCard key={i} project={p} />
          ))}
        </motion.div>
      </div>

      <Reveal delay={0.2}>
        <p className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-ice-100/40 font-mono">
          Glissez · Faites défiler
        </p>
      </Reveal>
    </section>
  );
}

function RealizationCard({ project }: { project: typeof REALIZATIONS[number] }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[85vw] sm:w-[460px] shrink-0 group"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl glass frost-border">
        {/* Project image */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={`${project.title} — ${project.location}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
        </div>

        {/* Tag */}
        <div className="absolute top-4 right-4 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-ice-100/90 backdrop-blur-md bg-black/30 px-2 py-1 rounded-full border border-white/10">
          <span className="h-1 w-1 rounded-full bg-flame-500" />
          {project.tag}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ice-100/70">
            {project.location}
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white leading-tight tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-ice-100/80 leading-relaxed">{project.scope}</p>

          <div className="mt-5 flex items-center gap-2 text-sm text-ice-100 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Voir les détails
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
