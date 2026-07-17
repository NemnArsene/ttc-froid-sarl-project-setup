import { ShieldCheck, Award, Gauge, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: ShieldCheck, k: "Revendeur agréé", v: "Hisense · Nagu · Roch" },
  { icon: Award, k: "Client phare", v: "Hôpital Laquintinie Douala" },
  { icon: Gauge, k: "Depuis", v: "2022 — Startup d'excellence" },
  { icon: Wrench, k: "SAV 24/7", v: "Dépannage express Douala" },
];

export function TrustBand() {
  return (
    <section className="relative border-y border-white/5 bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-6">
          {items.map((it, i) => (
            <Reveal key={it.k} delay={i * 0.08}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl glass frost-border flex items-center justify-center shrink-0">
                  <it.icon className="h-4 w-4 sm:h-5 sm:w-5 text-ice-100" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-ice-100/50 leading-tight">{it.k}</div>
                  <div className="mt-1 font-display text-sm sm:text-base lg:text-lg text-white leading-tight">{it.v}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
