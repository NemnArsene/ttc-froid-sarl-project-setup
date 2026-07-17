import { motion, useReducedMotion } from "framer-motion";

const items = [
  "Climatisation",
  "Froid Industriel",
  "Chambres Froides",
  "Réfrigération",
  "HVAC",
  "Dépannage 24/7",
  "Maintenance",
  "Études Thermiques",
  "Hisense",
  "Nagu",
  "Roch",
  "HACCP",
  "Hôpital Laquintinie",
  "Douala · Cameroun",
];

export function Marquee({ label = "Expertises" }: { label?: string }) {
  const reduce = useReducedMotion();
  const list = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-ink-900/50 py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4 flex items-center gap-3">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-ice-100/50">{label}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>
      <motion.div
        animate={reduce ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 whitespace-nowrap px-6"
        aria-hidden
      >
        {list.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-2xl sm:text-3xl font-display font-medium text-ice-100/40">
            <span className="h-1.5 w-1.5 rounded-full bg-flame-500/70" />
            {item}
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-900 to-transparent" />
    </div>
  );
}
