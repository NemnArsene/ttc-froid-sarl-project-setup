import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { LinkButton } from "./Button";
import { Reveal } from "./Reveal";
import { BRAND } from "../constants/tokens";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl glass-strong frost-border p-8 sm:p-12 lg:p-16 xl:p-20">
            {/* Background accents */}
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-ice-500/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-flame-500/15 blur-3xl" />
            <div className="absolute inset-0 grid-bg opacity-40" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ice-100/90 backdrop-blur">
                  <span className="h-1 w-1 rounded-full bg-flame-500" />
                  Prêt à démarrer ?
                </div>
                <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight text-balance text-gradient">
                  Étudions votre projet. <br />
                  <span className="text-white">Sans engagement.</span>
                </h2>
                <p className="mt-6 text-base sm:text-lg text-ice-100/70 leading-relaxed text-pretty max-w-xl">
                  Un technicien qualifié vous rappelle sous 2 heures, à Douala et partout au Cameroun.
                  Étude thermique offerte, devis détaillé sous 48h.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                  <LinkButton
                    href="#contact"
                    size="lg"
                    magnetic
                    iconRight={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                  >
                    Demander mon étude gratuite
                  </LinkButton>
                  <LinkButton
                    href={`tel:${BRAND.phoneWork}`}
                    variant="secondary"
                    size="lg"
                    magnetic
                    iconLeft={<Phone className="h-4 w-4" />}
                  >
                    <span className="hidden sm:inline">{BRAND.phoneWorkDisplay}</span>
                    <span className="sm:hidden">Appeler maintenant</span>
                  </LinkButton>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: Phone,
                    label: "Ligne professionnelle (WhatsApp)",
                    value: BRAND.phoneWorkDisplay,
                    href: `tel:${BRAND.phoneWork}`,
                  },
                  {
                    icon: Phone,
                    label: "Ligne personnelle",
                    value: BRAND.phoneDisplay,
                    href: `tel:${BRAND.phone}`,
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp Entreprise",
                    value: BRAND.phoneWorkDisplay,
                    href: `https://wa.me/${BRAND.whatsapp}`,
                  },
                  {
                    icon: Mail,
                    label: "Email commercial",
                    value: BRAND.email,
                    href: `mailto:${BRAND.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Siège & atelier",
                    value: "Douala — Cameroun",
                    href: "#contact",
                  },
                ].map((it) => (
                  <a
                    key={it.label}
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl glass frost-border hover:bg-white/5 transition-colors group"
                  >
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-ice-500/20 border border-white/10 flex items-center justify-center shrink-0">
                      <it.icon className="h-4 w-4 sm:h-5 sm:w-5 text-ice-100" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-ice-100/50">{it.label}</div>
                      <div className="font-display text-sm sm:text-base text-white truncate group-hover:text-ice-200 transition-colors">{it.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
