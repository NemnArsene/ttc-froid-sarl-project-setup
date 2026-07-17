import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { TIMELINE } from "../constants/tokens";

export function Timeline() {
  return (
    <section id="expertise" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Notre histoire"
          index="03"
          title="Une startup fondée en 2022 qui s'impose comme référence."
          description="De la création par Mr TAMEKONG TAGOU CEDRIC en 2022 à nos réalisations majeures — retour sur les étapes qui ont forgé notre excellence."
          className="mb-20"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ice-500/30 to-transparent" />

          <div className="space-y-16 sm:space-y-20">
            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={item.year} delay={i * 0.05}>
                  <div className={`relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 ${isLeft ? "" : "sm:[&>:first-child]:order-2"}`}>
                    {/* Content */}
                    <div className={`pl-12 sm:pl-0 ${isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                      <div className="font-mono text-sm text-flame-500 tracking-widest">{item.year}</div>
                      <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base text-ice-100/65 leading-relaxed max-w-md sm:ml-auto sm:ml-0 text-pretty">
                        {item.text}
                      </p>
                    </div>

                    {/* Marker */}
                    <div className={`hidden sm:flex items-start ${isLeft ? "justify-start pl-12" : "justify-end pr-12"}`}>
                      <div className="relative">
                        <div className="h-3 w-3 rounded-full bg-flame-500 shadow-[0_0_0_6px_rgba(243,146,0,0.15)]" />
                      </div>
                    </div>

                    {/* Mobile dot */}
                    <div className="sm:hidden absolute left-4 top-1.5 -translate-x-1/2 h-2 w-2 rounded-full bg-flame-500" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
