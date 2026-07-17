import { Reveal } from "./Reveal";
import { BRAND } from "../constants/tokens";

export function SEOContent() {
  return (
    <section className="relative py-16 sm:py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ice-100/90 backdrop-blur">
              <span className="h-1 w-1 rounded-full bg-flame-500" />
              Référencement local
            </div>
            <h2 className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.1] tracking-tight text-gradient text-balance">
              Climatisation Douala — votre partenaire HVAC de référence depuis 2022.
            </h2>
            <div className="mt-8 space-y-5 text-ice-100/65 text-pretty leading-relaxed text-left sm:text-center text-sm sm:text-base">
              <p>
                <strong className="text-white">TTC FROID SARL</strong> est le spécialiste du froid et de la
                climatisation à <strong className="text-white">Douala</strong>, fondée en 2022 par{" "}
                <strong className="text-white">{BRAND.ceo}</strong>. Intervenant sur l'ensemble du{" "}
                <strong className="text-white">Cameroun</strong> : Yaoundé, Kribi, Limbé, Bafoussam, Bertoua,
                Garoua et au-delà. Notre expertise couvre l'installation de climatisation, la maintenance HVAC,
                le froid industriel, les chambres froides et la réfrigération commerciale.
              </p>
              <p>
                Revendeur agréé <strong className="text-white">Hisense, Nagu et Roch</strong>, TTC FROID SARL
                garantit des équipements de qualité à des prix compétitifs. Notre plus grand client de référence
                est l'<strong className="text-white">Hôpital Laquintinie de Douala</strong>, gage de notre
                fiabilité sur des installations critiques en milieu médical.
              </p>
              <p>
                Notre service d'astreinte <strong className="text-white">24/7</strong> assure la continuité
                de vos opérations. Appelez-nous au{" "}
                <a href={`tel:${BRAND.phoneWork}`} className="text-white hover:text-ice-300 transition-colors">
                  {BRAND.phoneWorkDisplay}
                </a>{" "}
                (Pro & WhatsApp) ou au{" "}
                <a href={`tel:${BRAND.phone}`} className="text-white hover:text-ice-300 transition-colors">
                  {BRAND.phoneDisplay}
                </a>.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
