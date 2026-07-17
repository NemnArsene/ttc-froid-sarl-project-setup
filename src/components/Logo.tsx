import { cn } from "../utils/cn";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

// Uses the real TTC FROID logo image — ttc final.png
export function Logo({ className = "full", size = "md" }: LogoProps) {
  const sizeMap = {
    sm: "h-16",
    md: "h-28",
    lg: "h-40",
  };

  return (
    <div
      className={cn("flex items-center gap-2.5 shrink-0", className)}
      aria-label="TTC FROID SARL — Climatisation, Réfrigération, Dépannage"
    >
      <img
        src="/images/ttc final.png"
        alt="Logo TTC FROID SARL"
        className={cn("w-auto object-contain", sizeMap[size])}
        loading="eager"
      />
    </div>
  );
}
