import { useRef, type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  magnetic?: boolean;
  children: ReactNode;
  className?: string;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
}

const baseClasses =
  "relative inline-flex items-center justify-center gap-2 font-medium tracking-tight " +
  "transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ice-300/60 " +
  "rounded-full overflow-hidden group select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-ink-900 hover:bg-ice-50 " +
    "shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_20px_40px_-15px_rgba(62,139,255,0.5)] " +
    "hover:shadow-[0_1px_0_0_rgba(255,255,255,0.8)_inset,0_30px_60px_-15px_rgba(62,139,255,0.7)]",
  secondary:
    "bg-white/5 text-white border border-white/10 backdrop-blur-md " +
    "hover:bg-white/10 hover:border-white/20",
  ghost:
    "bg-transparent text-ice-100 hover:text-white hover:bg-white/5",
  accent:
    "bg-flame-500 text-ink-900 hover:bg-flame-400 " +
    "shadow-[0_0_0_1px_rgba(243,146,0,0.4)_inset,0_20px_50px_-15px_rgba(243,146,0,0.6)] " +
    "hover:shadow-[0_0_0_1px_rgba(243,146,0,0.6)_inset,0_30px_70px_-15px_rgba(243,146,0,0.8)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-[15px]",
};

function MagneticWrapper({ children, magnetic }: { children: ReactNode; magnetic?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  if (!magnetic) return <>{children}</>;
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block transition-transform duration-200 ease-out will-change-transform"
    >
      {children}
    </div>
  );
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({ variant = "primary", size = "md", magnetic, className, children, ...props }: ButtonProps) {
  return (
    <MagneticWrapper magnetic={magnetic}>
      <button className={cn(baseClasses, variants[variant], sizes[size], className)} {...props}>
        <span className="relative z-10 flex items-center gap-2">
          {(props as any).iconLeft}
          {children}
          {(props as any).iconRight}
        </span>
        {variant === "primary" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ice-100/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        )}
      </button>
    </MagneticWrapper>
  );
}

export function LinkButton({ variant = "primary", size = "md", magnetic, className, children, ...props }: LinkProps) {
  return (
    <MagneticWrapper magnetic={magnetic}>
      <a className={cn(baseClasses, variants[variant], sizes[size], className)} {...props}>
        <span className="relative z-10 flex items-center gap-2">
          {(props as any).iconLeft}
          {children}
          {(props as any).iconRight}
        </span>
        {variant === "primary" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ice-100/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        )}
      </a>
    </MagneticWrapper>
  );
}
