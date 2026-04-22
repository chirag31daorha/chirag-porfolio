import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMapPin, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo, summary } from "../data/portfolioData.js";

const highlights = [
  { icon: "☕", label: "Backend Focus", desc: "Spring Boot, Security, JWT, Hibernate" },
  { icon: "⚛️", label: "Frontend Skills", desc: "React, Vite, Axios, Responsive UI" },
  { icon: "🗄️", label: "Database", desc: "PostgreSQL, MySQL, custom JPQL queries" },
  { icon: "🔒", label: "Security", desc: "JWT, BCrypt, role-based auth" },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" ref={ref} style={{ padding: "7rem 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">// who i am</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "4rem", alignItems: "start",
        }} className="about-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p style={{
              color: "var(--text-muted)", lineHeight: 1.85,
              fontSize: "1.05rem", marginBottom: "2rem",
            }}>
              {summary}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              {[
                { icon: <FiMapPin />, text: personalInfo.location },
                { icon: <FiMail />, text: personalInfo.email },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ color: "var(--cyan)" }}>{icon}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-muted)" }}>{text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                { icon: <FiGithub />, href: personalInfo.github, label: "GitHub" },
                { icon: <FiLinkedin />, href: personalInfo.linkedin, label: "LinkedIn" },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label} href={href} target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.05, borderColor: "var(--cyan)", color: "var(--cyan)" }}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.6rem 1.25rem",
                    border: "1px solid var(--border)", borderRadius: "10px",
                    color: "var(--text-muted)", textDecoration: "none",
                    fontSize: "0.85rem", fontFamily: "var(--font-heading)", fontWeight: 600,
                    transition: "all 0.3s",
                  }}
                >
                  {icon} {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
          >
            {highlights.map(({ icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, borderColor: "rgba(0,245,255,0.3)" }}
                className="glass-card"
                style={{ padding: "1.25rem", transition: "all 0.3s" }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{icon}</div>
                <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.4rem" }}>{label}</p>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}