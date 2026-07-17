import {
  Wind, Factory, Snowflake, Refrigerator, Wrench, Siren, ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { SERVICES } from "../constants/tokens";

const iconMap = {
  wind: Wind,
  factory: Factory,
  snowflake: Snowflake,
  refrigerator: Refrigerator,
  wrench: Wrench,
  siren: Siren,
};

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nos expertises"
          index="01"
          title="Une expertise complète du froid résidentiel à l'industriel."
          description="Six pôles de compétences complémentaires, pilotés par des techniciens certifiés et outillés des meilleures marques. Hisense, Nagu, Roch — chaque solution est sur-mesure."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Reveal key={service.id} delay={i * 0.05}>
                <motion.a
                  href="#contact"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="group relative block overflow-hidden rounded-2xl glass frost-border p-7 h-full transition-all duration-500 hover:bg-white/[0.04]"
                >
                  {/* Hover gradient */}
                  <motion.div
                    variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                    transition={{ duration: 0.5 }}
                    className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-ice-500/10 via-transparent to-flame-500/10"
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className="absolute -inset-3 bg-ice-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ice-500/30 to-ice-700/30 border border-white/10">
                          <Icon className="h-5 w-5 text-ice-100" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ice-100/40">
                          {service.metric.label}
                        </div>
                        <div className="font-display text-2xl font-semibold text-white">
                          {service.metric.value}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-white leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-ice-100/60 leading-relaxed text-pretty">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-ice-100/70">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-flame-500 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex items-center gap-2 text-sm text-ice-100/80 font-medium mt-auto pt-6 border-t border-white/5">
                      <span>En savoir plus</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
