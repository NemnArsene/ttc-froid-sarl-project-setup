import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onAnimationComplete={() => {}}
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-950"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(30,91,168,0.3),transparent_70%)]" />

        {/* Logo image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center"
        >
          <motion.div
            animate={{ 
              filter: [
                "drop-shadow(0 0 8px rgba(30,91,168,0.4))",
                "drop-shadow(0 0 30px rgba(30,91,168,0.8))",
                "drop-shadow(0 0 8px rgba(30,91,168,0.4))"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/images/ttc final.png"
              alt="TTC FROID SARL"
              className="h-40 sm:h-48 w-auto object-contain"
            />
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 w-48 h-px bg-white/10 overflow-hidden rounded-full relative"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 3.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={onComplete}
              className="absolute inset-0 bg-gradient-to-r from-ice-500 via-ice-300 to-flame-500 rounded-full"
            />
          </motion.div>

          {/* Snow particles */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-ice-300/60"
                style={{
                  left: `${15 + i * 10}%`,
                  top: "50%",
                }}
                animate={{
                  y: [0, -60, -120],
                  x: [0, (i % 2 === 0 ? 1 : -1) * 15],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1, 0.3],
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  delay: 0.2 + i * 0.15,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
