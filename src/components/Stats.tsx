import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { STATS } from "../constants/tokens";
import { Reveal } from "./Reveal";

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const n = useCountUp(value, 1800, start);
  return (
    <div className="relative flex flex-col">
      <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gradient">
        {n.toLocaleString("fr-FR")}
        <span className="text-flame-500">{suffix}</span>
      </div>
      <div className="mt-3 text-sm text-ice-100/60 max-w-[16ch]">{label}</div>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section className="relative py-24 border-y border-white/5 bg-gradient-to-b from-ink-900/50 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <StatItem value={s.value} suffix={s.suffix} label={s.label} start={inView} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
