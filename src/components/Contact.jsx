import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData.js";

const API_BASE = "http://localhost:8080";

const contactInfo = [
  { icon: <FiMail />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <FiPhone />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: <FiMapPin />, label: "Location", value: personalInfo.location, href: null },
];

function Input({ label, name, value, onChange, placeholder, type = "text", style = {} }) {
  return (
    <div style={style}>
      <label style={{
        fontFamily: "var(--font-mono)", fontSize: "0.7rem",
        color: "var(--cyan)", letterSpacing: "0.1em",
        display: "block", marginBottom: "0.5rem",
      }}>{label.toUpperCase()}</label>
      <input
        type={type} name={name} value={value}
        onChange={onChange} placeholder={placeholder}
        style={{
          width: "100%", padding: "0.85rem 1rem",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid var(--border)", borderRadius: "10px",
          color: "var(--text)", fontFamily: "var(--font-body)",
          fontSize: "0.9rem", outline: "none",
          transition: "border-color 0.3s",
        }}
        onFocus={(e) => e.target.style.borderColor = "rgba(0,245,255,0.5)"}
        onBlur={(e) => e.target.style.borderColor = "var(--border)"}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      await axios.post(`${API_BASE}/api/contact`, form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" style={{ padding: "7rem 0", background: "rgba(8,15,31,0.4)" }}>
      <div className="container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">// get in touch</p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 480, marginTop: "0.75rem" }}>
            Looking for Java Backend or Full Stack Developer roles in Bengaluru. Open to full-time opportunities.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "3rem",
          alignItems: "start",
        }} className="contact-grid">

          {/* LEFT — Info + Ripple avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Ripple avatar */}
            <div style={{ position: "relative", width: 110, height: 110, marginBottom: "2.5rem" }}>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  style={{
                    position: "absolute", inset: 0, borderRadius: "50%",
                    border: "1px solid rgba(0,245,255,0.35)",
                  }}
                  animate={{ scale: [1, 1.6 + i * 0.35], opacity: [0.7, 0] }}
                  transition={{
                    repeat: Infinity, duration: 2.4,
                    delay: i * 0.6, ease: "easeOut",
                  }}
                />
              ))}
              <div style={{
                position: "relative", zIndex: 1,
                width: "100%", height: "100%", borderRadius: "50%",
                background: "linear-gradient(135deg, var(--cyan), var(--pink))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-heading)", fontWeight: 800,
                fontSize: "1.9rem", color: "#000",
                boxShadow: "0 0 30px rgba(0,245,255,0.4)",
              }}>CD</div>
            </div>

            {/* Contact info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              {contactInfo.map(({ icon, label, value, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  style={{
                    padding: "0.9rem 1.1rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    backdropFilter: "blur(12px)",
                    transition: "border-color 0.3s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ color: "var(--cyan)", fontSize: "1rem", flexShrink: 0 }}>{icon}</span>
                    <div>
                      <p style={{
                        fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                        color: "var(--text-muted)", marginBottom: "0.15rem",
                      }}>{label}</p>
                      {href ? (
                        <a href={href} style={{
                          color: "var(--text)", fontSize: "0.82rem",
                          textDecoration: "none",
                          fontFamily: "var(--font-heading)", fontWeight: 600,
                        }}>{value}</a>
                      ) : (
                        <p style={{
                          color: "var(--text)", fontSize: "0.82rem",
                          fontFamily: "var(--font-heading)", fontWeight: 600,
                        }}>{value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { icon: <FiGithub />, href: personalInfo.github },
                { icon: <FiLinkedin />, href: personalInfo.linkedin },
              ].map(({ icon, href }, i) => (
                <motion.a
                  key={i} href={href} target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.12, borderColor: "var(--cyan)", color: "var(--cyan)" }}
                  style={{
                    width: 42, height: 42, borderRadius: "10px",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-muted)", fontSize: "1.1rem",
                    textDecoration: "none", transition: "all 0.3s",
                  }}
                >{icon}</motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              padding: "2rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              backdropFilter: "blur(12px)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <Input label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Chirag" />
              <Input label="Email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" type="email" />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <Input label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Job opportunity / Collaboration" />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{
                fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                color: "var(--cyan)", letterSpacing: "0.1em",
                display: "block", marginBottom: "0.5rem",
              }}>MESSAGE</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Tell me about the role or project..."
                rows={5}
                style={{
                  width: "100%", padding: "0.85rem 1rem",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)", borderRadius: "10px",
                  color: "var(--text)", fontFamily: "var(--font-body)",
                  fontSize: "0.9rem", resize: "vertical", outline: "none",
                  transition: "border-color 0.3s",
                }}
                onFocus={(e) => e.target.style.borderColor = "rgba(0,245,255,0.5)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"}
              />
            </div>

            <motion.button
              onClick={handleSubmit}
              disabled={status === "loading"}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,245,255,0.3)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "100%", padding: "0.9rem",
                background:
                  status === "success" ? "linear-gradient(135deg, #22c55e, #16a34a)" :
                  status === "error"   ? "linear-gradient(135deg, #ef4444, #dc2626)" :
                                        "linear-gradient(135deg, var(--cyan), var(--purple))",
                border: "none", borderRadius: "10px",
                color: status === "loading" ? "rgba(0,0,0,0.6)" : "#000",
                fontFamily: "var(--font-heading)", fontWeight: 700,
                fontSize: "0.9rem", letterSpacing: "0.03em",
                display: "flex", alignItems: "center",
                justifyContent: "center", gap: "0.5rem",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "background 0.3s",
              }}
            >
              {status === "loading" ? "Sending..." :
               status === "success" ? "✓ Message Sent!" :
               status === "error"   ? "Failed — Try Again" :
               <><FiSend /> Send Message</>}
            </motion.button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
