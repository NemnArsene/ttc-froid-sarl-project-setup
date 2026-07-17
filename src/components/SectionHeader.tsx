import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  index?: string;
}

export function SectionHeader({ eyebrow, title, description, align = "left", className, index }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
            {index && (
              <span className="font-mono text-[11px] text-flame-500 tracking-widest">[{index}]</span>
            )}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ice-100/90 backdrop-blur">
              <span className="h-1 w-1 rounded-full bg-flame-500" />
              {eyebrow}
            </span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-balance text-gradient">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="text-base sm:text-lg text-ice-100/70 text-pretty max-w-2xl leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
