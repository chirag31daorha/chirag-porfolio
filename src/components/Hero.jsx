import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import HeroScene from "../three/HeroScene.jsx";
import { personalInfo } from "../data/portfolioData.js";

const stats = [
  { label: "Projects Built", value: "4+" },
  { label: "Tech Stack", value: "15+" },
  { label: "API Endpoints", value: "50+" },
];

export default function Hero() {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <HeroScene />

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        backgroundImage: `
          linear-gradient(rgba(0,245,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,245,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "4rem",
          alignItems: "center",
        }} className="hero-grid">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.25)",
                borderRadius: "100px", padding: "0.4rem 1rem", marginBottom: "1.5rem",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--cyan)", letterSpacing: "0.1em" }}>
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.75, duration: 0.7 }}
              style={{
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                lineHeight: 1.02, marginBottom: "0.5rem",
                background: "linear-gradient(135deg, #fff 30%, var(--cyan) 60%, var(--pink) 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                animation: "shimmer 4s linear infinite",
              }}
            >
              Chirag<br />Daorha
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.6 }}
              style={{
                fontFamily: "var(--font-mono)", fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
                color: "var(--cyan)", letterSpacing: "0.08em", marginBottom: "1.25rem",
              }}
            >
              &gt; Java Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.6 }}
              style={{
                color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7,
                maxWidth: 520, marginBottom: "2.5rem",
              }}
            >
              Building secure, scalable & production-ready applications with Spring Boot, JWT, Hibernate
              and React. Ready to join a professional dev team in Bengaluru.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1, duration: 0.6 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}
            >
              <Link to="projects" smooth duration={600} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,245,255,0.4)" }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    padding: "0.8rem 2rem",
                    background: "linear-gradient(135deg, var(--cyan), var(--purple))",
                    border: "none", borderRadius: "10px",
                    color: "#000", fontFamily: "var(--font-heading)",
                    fontWeight: 700, fontSize: "0.9rem",
                    letterSpacing: "0.05em", cursor: "none",
                  }}
                >
                  View Projects
                </motion.button>
              </Link>
              <Link to="contact" smooth duration={600} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "var(--pink)", color: "var(--pink)" }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    padding: "0.8rem 2rem",
                    background: "transparent",
                    border: "1px solid var(--border)",
                    borderRadius: "10px", color: "var(--text)",
                    fontFamily: "var(--font-heading)", fontWeight: 600,
                    fontSize: "0.9rem", cursor: "none",
                    transition: "all 0.3s",
                  }}
                >
                  Contact Me
                </motion.button>
              </Link>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  { icon: <FiGithub />, href: personalInfo.github },
                  { icon: <FiLinkedin />, href: personalInfo.linkedin },
                ].map(({ icon, href }, i) => (
                  <motion.a
                    key={i} href={href} target="_blank" rel="noreferrer"
                    whileHover={{ scale: 1.15, color: "var(--cyan)" }}
                    style={{
                      width: 42, height: 42, borderRadius: "10px",
                      border: "1px solid var(--border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--text-muted)", fontSize: "1.1rem", textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 0.7 }}
            style={{ position: "relative" }}
            className="hero-card-wrap"
          >
            {/* Glow orb */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: 220, height: 220, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,245,255,0.18) 0%, transparent 70%)",
              filter: "blur(20px)", pointerEvents: "none",
            }} />

            {/* Spinning dashed ring */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: 240, height: 240, borderRadius: "50%",
              border: "1.5px dashed rgba(0,245,255,0.3)",
              animation: "spin-slow 12s linear infinite",
            }} />

            {/* Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{
                width: 240,
                background: "rgba(8,15,31,0.8)",
                border: "1px solid rgba(0,245,255,0.2)",
                borderRadius: "20px",
                backdropFilter: "blur(24px)",
                padding: "2rem",
                textAlign: "center",
                boxShadow: "0 0 40px rgba(0,245,255,0.1), inset 0 1px 0 rgba(255,255,255,0.06)",
                position: "relative", zIndex: 1,
              }}
            >
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--cyan), var(--pink))",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1rem",
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "1.5rem", color: "#000",
                boxShadow: "var(--glow-cyan)",
              }}>CD</div>

              <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>
                Chirag Daorha
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--cyan)", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>
                FULL STACK DEVELOPER
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {stats.map(({ label, value }) => (
                  <div key={label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "0.5rem 0.75rem",
                    background: "rgba(0,245,255,0.05)",
                    borderRadius: "8px", border: "1px solid rgba(0,245,255,0.08)",
                  }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{label}</span>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--cyan)", fontSize: "0.9rem" }}>{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.15em" }}>SCROLL</span>
        <FiArrowDown style={{ color: "var(--cyan)", fontSize: "1rem" }} />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-card-wrap { display: none; }
        }
      `}</style>
    </section>
  );
}