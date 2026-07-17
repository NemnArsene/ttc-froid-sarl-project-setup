import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function SnowParticles({ density = 60, className = "" }: { density?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number; tw: number };
    const N = reduce ? 0 : density;
    const particles: P[] = Array.from({ length: N }).map(() => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      r: 0.6 + Math.random() * 2.4,
      vx: -0.15 + Math.random() * 0.3,
      vy: 0.2 + Math.random() * 0.6,
      a: 0.3 + Math.random() * 0.6,
      tw: Math.random() * Math.PI * 2,
    }));

    let raf = 0;
    let mx = 0;
    let my = 0;
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.tw += 0.02;

        // gentle mouse parallax
        const dx = mx - p.x;
        const dy = my - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14000) {
          const f = (1 - d2 / 14000) * 0.4;
          p.x -= (dx / Math.sqrt(d2 + 1)) * f;
          p.y -= (dy / Math.sqrt(d2 + 1)) * f;
        }

        if (p.y > h + 10) { p.y = -10; p.x = Math.random() * w; }
        if (p.x > w + 10) p.x = -10;
        if (p.x < -10) p.x = w + 10;

        const twinkle = 0.7 + Math.sin(p.tw) * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(207, 227, 255, ${p.a * twinkle})`;
        ctx.fill();

        // 6-point crystal for the larger ones
        if (p.r > 1.6) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(twinkle);
          ctx.strokeStyle = `rgba(159, 199, 255, ${0.25 * twinkle})`;
          ctx.lineWidth = 0.6;
          for (let i = 0; i < 3; i++) {
            const a = (i * Math.PI) / 3;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * p.r * 2.2, Math.sin(a) * p.r * 2.2);
            ctx.lineTo(Math.cos(a + Math.PI) * p.r * 2.2, Math.sin(a + Math.PI) * p.r * 2.2);
            ctx.stroke();
          }
          ctx.restore();
        }
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, [density, reduce]);

  return <canvas ref={ref} className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true" />;
}
