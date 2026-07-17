import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Users, Wrench, Sparkles, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { BRAND } from "../constants/tokens";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.04]);

  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(30,91,168,0.12),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <div ref={ref} className="lg:col-span-5 relative">
            <motion.div style={{ y, scale }} className="relative aspect-[4/5] max-w-sm sm:max-w-md mx-auto lg:mx-0">
              {/* Frame layers */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-ice-500/20 via-transparent to-flame-500/10 blur-2xl" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden glass-strong frost-border">
                {/* CEO Portrait */}
                <div className="absolute inset-0">
                  <img
                    src="/images/ceo.jpeg"
                    alt={`Portrait de ${BRAND.ceo}, Directeur Général de TTC FROID SARL`}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />
                </div>

                {/* Name overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ice-100/70">Directeur Général</div>
                  <div className="mt-1 font-display text-lg sm:text-2xl font-semibold text-white leading-tight">
                    {BRAND.ceo}
                  </div>
                  <div className="text-xs text-ice-100/60 mt-0.5">Fondateur · TTC FROID SARL</div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -right-3 top-6 sm:-right-6 sm:top-12"
                >
                  <div className="glass-strong rounded-2xl p-3 sm:p-4 frost-border shadow-2xl">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-flame-500">Depuis</div>
                    <div className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-white">{BRAND.founded}</div>
                    <div className="text-[10px] text-ice-100/60">à Douala</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Real images grid below portrait on mobile */}
            <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
              {["/images/IMG-20260717-WA0053.jpg", "/images/IMG-20260717-WA0055.jpg"].map((src, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img src={src} alt="Réalisation TTC FROID" className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ice-100/90 backdrop-blur">
                <span className="h-1 w-1 rounded-full bg-flame-500" />
                À propos
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight text-balance text-gradient">
                Une startup camerounaise d'excellence.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-base sm:text-lg text-ice-100/70 leading-relaxed text-pretty">
                <p>
                  Fondée à <span className="text-white">Douala en {BRAND.founded}</span> par{" "}
                  <span className="text-white font-medium">{BRAND.ceo}</span>,{" "}
                  <span className="text-white">TTC FROID SARL</span> s'est imposée comme
                  une référence du froid industriel et de la climatisation au Cameroun. Dès ses premières années,
                  la société a décroché des contrats majeurs, dont le partenariat avec l'Hôpital Laquintinie de Douala.
                </p>
                <p>
                  Revendeur agréé des marques <span className="text-white">Hisense, Nagu et Roch</span>,
                  TTC FROID garantit des équipements de qualité à des prix compétitifs.
                  Notre équipe intervient pour l'installation, la maintenance et le dépannage 24/7
                  sur Douala et partout au Cameroun.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: Award, label: "Partenaires", value: "Hisense · Nagu · Roch" },
                  { icon: Users, label: "Équipe", value: "Techniciens certifiés" },
                  { icon: Wrench, label: "SAV", value: "Dépannage 24/7" },
                  { icon: Sparkles, label: "Engagement", value: "Qualité garantie" },
                ].map((it) => (
                  <div
                    key={it.label}
                    className="rounded-2xl glass p-4 frost-border flex items-start gap-3"
                  >
                    <div className="rounded-lg bg-ice-500/20 border border-white/10 p-2.5 shrink-0">
                      <it.icon className="h-4 w-4 text-ice-100" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-ice-100/50 truncate">{it.label}</div>
                      <div className="text-sm font-medium text-white leading-tight mt-0.5">{it.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <blockquote className="mt-10 relative pl-6 border-l-2 border-flame-500/60">
                <Quote className="absolute -left-3 -top-2 h-6 w-6 text-flame-500 fill-flame-500/20" />
                <p className="text-lg sm:text-xl text-white font-display leading-snug italic text-balance">
                  « La qualité du froid, c'est la continuité de votre activité. Nous mettons
                  notre expertise au service de votre réussite. »
                </p>
                <footer className="mt-3 text-sm text-ice-100/60">— {BRAND.ceo}, Fondateur & DG</footer>
              </blockquote>
            </Reveal>

            {/* Image strip — desktop only */}
            <Reveal delay={0.5}>
              <div className="hidden lg:grid grid-cols-3 gap-3 mt-10">
                {[
                  "/images/IMG-20260717-WA0053.jpg",
                  "/images/IMG-20260717-WA0055.jpg",
                  "/images/IMG-20260717-WA0057.jpg",
                ].map((src, i) => (
                  <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={src}
                      alt="Réalisation TTC FROID SARL"
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
