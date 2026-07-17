import { motion, useReducedMotion } from "framer-motion";

export function Airflow({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const lines = Array.from({ length: 14 });

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="air" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9FC7FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#9FC7FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#9FC7FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="air2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F39200" stopOpacity="0" />
            <stop offset="50%" stopColor="#F39200" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F39200" stopOpacity="0" />
          </linearGradient>
        </defs>
        {lines.map((_, i) => {
          const y = 60 + i * 50;
          const delay = (i % 5) * 0.7;
          const dur = 6 + (i % 4);
          return (
            <motion.path
              key={i}
              d={`M -200 ${y} Q 300 ${y - 30 + (i % 3) * 20}, 600 ${y + 20} T 1400 ${y - 10}`}
              stroke={i % 4 === 0 ? "url(#air2)" : "url(#air)"}
              strokeWidth={i % 5 === 0 ? 1.2 : 0.6}
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={reduce ? {} : { pathLength: [0, 1, 1, 0], opacity: [0, 0.7, 0.5, 0], x: [-200, -100, 0, 200] }}
              transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}
      </svg>
    </div>
  );
}
