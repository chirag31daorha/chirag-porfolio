import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 40);
    const timer = setTimeout(() => setVisible(false), 2400);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "var(--bg)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "2rem",
          }}
        >
          {/* Initials */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            style={{ position: "relative" }}
          >
            <div style={{
              width: 110, height: 110, borderRadius: "50%",
              background: "linear-gradient(135deg, var(--cyan), var(--pink))",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 60px rgba(0,245,255,0.35)",
            }}>
              <span style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "2.2rem", color: "#000",
              }}>CD</span>
            </div>
            {/* Rings */}
            {[1, 1.5, 2].map((delay, i) => (
              <motion.div
                key={i}
                style={{
                  position: "absolute", inset: -10 - i * 10,
                  borderRadius: "50%", border: "1px solid rgba(0,245,255,0.3)",
                }}
                animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, delay: delay * 0.3, ease: "easeOut" }}
              />
            ))}
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ textAlign: "center" }}
          >
            <p style={{
              fontFamily: "var(--font-heading)", fontWeight: 700,
              fontSize: "1.4rem", letterSpacing: "0.15em",
              background: "linear-gradient(90deg, var(--cyan), var(--pink), var(--cyan))",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              animation: "shimmer 2s linear infinite",
            }}>CHIRAG DAORHA</p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.2em", marginTop: "0.4rem" }}>
              JAVA FULL STACK DEVELOPER
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ width: 260 }}
          >
            <div style={{
              height: 2, background: "rgba(255,255,255,0.07)",
              borderRadius: 2, overflow: "hidden",
            }}>
              <motion.div
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, var(--cyan), var(--pink))",
                  borderRadius: 2,
                  boxShadow: "var(--glow-cyan)",
                }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: "0.65rem",
              color: "var(--text-muted)", marginTop: "0.5rem", textAlign: "right",
            }}>{progress}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}