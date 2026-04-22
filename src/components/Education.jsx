import { motion } from "framer-motion";
import { education, certifications } from "../data/portfolioData.js";

export default function Education() {
  return (
    <section id="education" style={{ padding: "7rem 0" }}>
      <div className="container">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">// background</p>
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }} className="edu-grid">

          {/* LEFT — Degree */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                color: "var(--cyan)", letterSpacing: "0.2em",
                textTransform: "uppercase", marginBottom: "1.5rem",
              }}
            >// degree</motion.h3>

            {education.map(({ degree, institution, location, period, icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ x: 4 }}
                style={{
                  padding: "1.75rem",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  backdropFilter: "blur(12px)",
                  transition: "border-color 0.3s",
                }}
              >
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "12px", flexShrink: 0,
                    background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(124,58,237,0.15))",
                    border: "1px solid rgba(0,245,255,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.6rem",
                  }}>{icon}</div>
                  <div>
                    <p style={{
                      fontFamily: "var(--font-heading)", fontWeight: 700,
                      fontSize: "1rem", color: "var(--text)", marginBottom: "0.4rem",
                    }}>{degree}</p>
                    <p style={{ color: "var(--cyan)", fontSize: "0.85rem", marginBottom: "0.3rem" }}>
                      {institution}
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>
                      {location} &middot; {period}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                color: "var(--pink)", letterSpacing: "0.2em",
                textTransform: "uppercase", marginBottom: "1.5rem",
              }}
            >// training &amp; certs</motion.h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {certifications.map(({ title, issuer, topics, icon }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  whileHover={{ x: -4 }}
                  style={{
                    padding: "1.5rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    backdropFilter: "blur(12px)",
                    transition: "border-color 0.3s",
                  }}
                >
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: "10px", flexShrink: 0,
                      background: "linear-gradient(135deg, rgba(255,0,110,0.15), rgba(255,184,0,0.15))",
                      border: "1px solid rgba(255,0,110,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.4rem",
                    }}>{icon}</div>
                    <div>
                      <p style={{
                        fontFamily: "var(--font-heading)", fontWeight: 700,
                        fontSize: "0.95rem", color: "var(--text)", marginBottom: "0.3rem",
                      }}>{title}</p>
                      <p style={{ color: "var(--pink)", fontSize: "0.8rem" }}>{issuer}</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {topics.map((t) => (
                      <span key={t} style={{
                        padding: "0.25rem 0.65rem",
                        borderRadius: "100px",
                        background: "rgba(255,0,110,0.08)",
                        border: "1px solid rgba(255,0,110,0.2)",
                        fontFamily: "var(--font-mono)", fontSize: "0.65rem",
                        color: "var(--text-muted)",
                      }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
