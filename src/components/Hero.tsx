import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, ShieldCheck, Snowflake, Star } from "lucide-react";
import { LinkButton } from "./Button";
import { SnowParticles } from "./SnowParticles";
import { Airflow } from "./Airflow";
import { Reveal } from "./Reveal";
import { BRAND } from "../constants/tokens";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  
  // Fixed parallax — proper transform values for visible effect
  const yBg = useTransform(scrollYProgress, [0, 1], ["0px", "200px"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden noise"
    >
      {/* Parallax background layer */}
      <motion.div
        style={reduce ? {} : { scale: scaleBg, y: yBg }}
        className="absolute inset-0 -z-10 origin-center"
      >
        {/* Real installation image as bg */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero section.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/50 to-ink-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_20%,rgba(30,91,168,0.5),transparent_70%)]" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </motion.div>

      <SnowParticles density={reduce ? 0 : 50} />
      <Airflow className="opacity-40" />

      {/* Hero content */}
      <motion.div
        style={reduce ? {} : { y: yText, opacity }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 sm:pt-48 sm:pb-32 lg:pt-52"
      >
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-ice-100/90 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-flame-500" />
            </span>
            Expert HVAC · Douala · Cameroun · Depuis {BRAND.founded}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-4xl font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.95] tracking-tight text-balance">
            <span className="text-gradient">L'excellence du froid</span>
            <br />
            <span className="text-white">au cœur de Douala.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-white font-medium drop-shadow-md leading-relaxed text-pretty">
            TTC FROID SARL conçoit, installe et maintient vos installations de climatisation,
            chambres froides et froid industriel depuis{" "}
            <span className="font-bold">{BRAND.founded}</span>. Expertise
            certifiée, service d'astreinte 24/7, marques premium — Hisense, Nagu, Roch.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
            <LinkButton
              href="#contact"
              size="lg"
              magnetic
              iconRight={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
            >
              Demander une étude gratuite
            </LinkButton>
            <LinkButton
              href={`tel:${BRAND.phoneWork}`}
              variant="secondary"
              size="lg"
              magnetic
              iconLeft={<Phone className="h-4 w-4" />}
            >
              <span className="hidden sm:inline">{BRAND.phoneWorkDisplay}</span>
              <span className="sm:hidden">Appeler</span>
            </LinkButton>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-10 sm:mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white font-medium drop-shadow-md">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-ice-300 shrink-0" />
              Revendeur agréé Hisense, Nagu & Roch
            </span>
            <span className="flex items-center gap-2">
              <Snowflake className="h-4 w-4 text-ice-300 shrink-0" />
              Intervention sous 2h à Douala
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-flame-500 fill-flame-500 shrink-0" />
              Client : Hôpital Laquintinie Douala
            </span>
          </div>
        </Reveal>

        {/* Partner logos */}
        <Reveal delay={0.55}>
          <div className="mt-12 sm:mt-16 flex flex-wrap items-center gap-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white font-bold drop-shadow-md">Partenaires</span>
            {[
              { name: "Hisense", logo: "/images/Hisense_Logo.jpg" },
              { name: "Nagu", logo: "/images/nagu logo.webp" },
              { name: "Roch", logo: "/images/roch logo.webp" },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-center h-10 px-4 rounded-xl glass frost-border"
              >
                <img
                  src={p.logo}
                  alt={`Logo ${p.name}`}
                  className="h-6 w-auto object-contain brightness-110 filter"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ice-100/50"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-ice-300/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
