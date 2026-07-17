import { Logo } from "./Logo";
import { BRAND, NAV, SERVICES } from "../constants/tokens";
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 mt-12">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(30,91,168,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <Logo size="lg" />
            <p className="mt-5 text-sm text-ice-100/60 leading-relaxed max-w-sm text-pretty">
              {BRAND.description} Depuis {BRAND.founded}, nous accompagnons les entreprises
              camerounaises dans la conception, l'installation et la maintenance de leurs
              installations de froid.
            </p>
            <div className="mt-4 text-xs text-ice-100/50">
              Fondateur & DG : <span className="text-ice-100/70">{BRAND.ceo}</span>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Facebook TTC FROID SARL"
              >
                {/* Facebook SVG icon */}
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-ice-100/70 fill-current">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="WhatsApp TTC FROID SARL"
              >
                <MessageCircle className="h-4 w-4 text-ice-100/70" />
              </a>
            </div>

            {/* Partner logos */}
            <div className="mt-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-ice-100/40 mb-3">Partenaires</div>
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { name: "Hisense", logo: "/images/Hisense_Logo.jpg" },
                  { name: "Nagu", logo: "/images/nagu logo.webp" },
                  { name: "Roch", logo: "/images/roch logo.webp" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="h-9 px-3 rounded-lg glass frost-border flex items-center justify-center"
                  >
                    <img
                      src={p.logo}
                      alt={`Logo partenaire ${p.name}`}
                      className="h-5 w-auto object-contain brightness-90"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ice-100/50">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-ice-100/70 hover:text-white transition-colors inline-flex items-center gap-1 group">
                    {n.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ice-100/50">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-ice-100/70 hover:text-white transition-colors">
                    {s.short}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ice-100/50">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-ice-100/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-flame-500 mt-0.5 shrink-0" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-flame-500 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a href={`tel:${BRAND.phoneWork}`} className="block hover:text-white transition-colors">
                    {BRAND.phoneWorkDisplay} <span className="text-[10px] text-flame-500/70">(Pro & WhatsApp)</span>
                  </a>
                  <a href={`tel:${BRAND.phone}`} className="block hover:text-white transition-colors">
                    {BRAND.phoneDisplay} <span className="text-[10px] text-ice-100/40">(Personnel)</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-flame-500 mt-0.5 shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors break-all">
                  {BRAND.email}
                </a>
              </li>
              {/* Key client */}
              <li className="pt-2 border-t border-white/5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-ice-100/40 mb-2">Client de référence</div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white/90 flex items-center justify-center shrink-0 p-1">
                    <img
                      src="/images/la quitinie logo.webp"
                      alt="Hôpital Laquintinie"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-ice-100/60">Hôpital Laquintinie<br />de Douala</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-14 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ice-100/40 text-center sm:text-left">
            © {year} TTC FROID SARL — Tous droits réservés. Fondée en {BRAND.founded}.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-xs text-ice-100/40">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
