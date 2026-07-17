import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";
import { BRAND } from "../constants/tokens";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-40"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-16 right-0 w-[280px] sm:w-80 rounded-2xl glass-strong frost-border shadow-2xl overflow-hidden"
              >
                <div className="bg-gradient-to-br from-ice-500 to-ice-700 p-4 sm:p-5 text-white">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center shrink-0">
                      <img
                        src="/images/ttc final.png"
                        alt="TTC FROID"
                        className="h-7 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-sm sm:text-base">TTC FROID SARL</div>
                      <div className="text-xs text-ice-100/80 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                        En ligne · Réponse en ~2 min
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-5 space-y-3">
                  <p className="text-sm text-ice-100/80 leading-relaxed">
                    Bonjour 👋 Besoin d'un devis, d'une intervention urgente ou d'un conseil technique ?
                    Contactez-nous sur WhatsApp, nous répondons immédiatement.
                  </p>
                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Bonjour TTC FROID, je souhaite un devis pour un projet HVAC.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white text-sm font-medium h-11 leading-[44px] transition-colors"
                  >
                    Démarrer la conversation
                  </a>
                  <a
                    href={`tel:${BRAND.phoneWork}`}
                    className="flex items-center justify-center gap-2 text-xs text-ice-100/60 hover:text-white transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Ou appeler {BRAND.phoneWorkDisplay}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setOpen((v) => !v)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-shadow"
            aria-label={open ? "Fermer" : "Discuter sur WhatsApp"}
          >
            {!open && (
              <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping" />
            )}
            {open ? <X className="h-6 w-6 relative z-10" /> : <MessageCircle className="h-6 w-6 relative z-10" />}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
