import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, BRAND } from "../constants/tokens";
import { cn } from "../utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on resize if open
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6"
        )}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 transition-all duration-500",
              scrolled
                ? "glass-strong shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                : "bg-transparent"
            )}
          >
            {/* Logo */}
            <a href="#top" className="shrink-0" aria-label="Retour à l'accueil">
              <Logo size="md" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navigation principale">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 text-sm text-ice-100/80 hover:text-white transition-colors group"
                >
                  {item.label}
                  <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-transparent via-ice-300 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${BRAND.phoneWork}`}
                className="flex items-center gap-1.5 text-sm text-ice-100/70 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden xl:inline">{BRAND.phoneWorkDisplay}</span>
              </a>
              <a
                href="#contact"
                className="rounded-full bg-white text-ink-900 px-4 py-2 text-sm font-medium hover:bg-ice-50 transition-colors"
              >
                Demander un devis
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 -mr-1 text-white rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-ink-950/80 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xs sm:max-w-sm bg-ink-900 border-l border-white/5 shadow-2xl lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <Logo size="sm" />
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1" aria-label="Navigation mobile">
                {NAV.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3.5 text-base font-medium text-ice-100/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors group"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 text-ice-100/30 group-hover:text-ice-300 transition-colors" />
                  </motion.a>
                ))}
              </nav>

              {/* Footer actions */}
              <div className="px-4 py-6 space-y-3 border-t border-white/5">
                <a
                  href={`tel:${BRAND.phoneWork}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl glass text-sm text-ice-100/80 hover:text-white transition-colors"
                >
                  <div className="h-9 w-9 rounded-lg bg-ice-500/20 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-ice-300" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-ice-100/40">Appeler</div>
                    <div>{BRAND.phoneWorkDisplay}</div>
                  </div>
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center rounded-full bg-white text-ink-900 px-4 py-3 text-sm font-semibold hover:bg-ice-50 transition-colors"
                >
                  Demander un devis
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
