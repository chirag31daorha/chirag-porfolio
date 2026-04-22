import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolioData.js";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      style={{
        position: "relative", overflow: "hidden",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "18px",
        padding: "1.75rem",
        transition: "box-shadow 0.3s",
        cursor: "default",
      }}
      onHoverStart={(e) => {
        e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 20px ${project.color}22`;
      }}
      onHoverEnd={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Gradient top border sweep on hover */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${project.color}, var(--pink))`,
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
        <span style={{ fontSize: "2rem" }}>{project.emoji}</span>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <motion.a
            href={project.github} target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.15, color: project.color }}
            style={{
              width: 34, height: 34, borderRadius: "8px",
              border: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--text-muted)", textDecoration: "none", fontSize: "0.9rem",
              transition: "color 0.3s",
            }}
          >
            <FiGithub />
          </motion.a>
        </div>
      </div>

      <h3 style={{
        fontFamily: "var(--font-heading)", fontWeight: 700,
        fontSize: "1.1rem", marginBottom: "0.75rem", lineHeight: 1.3,
      }}>{project.title}</h3>

      <p style={{
        fontSize: "0.85rem", color: "var(--text-muted)",
        lineHeight: 1.7, marginBottom: "1rem",
      }}>{project.description}</p>

      {/* Highlights */}
      <ul style={{ marginBottom: "1.25rem", paddingLeft: 0, listStyle: "none" }}>
        {project.highlights.slice(0, 2).map((h) => (
          <li key={h} style={{
            fontSize: "0.78rem", color: "var(--text-muted)",
            lineHeight: 1.6, paddingLeft: "1rem", position: "relative", marginBottom: "0.3rem",
          }}>
            <span style={{ position: "absolute", left: 0, color: project.color }}>▸</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tech.map((t) => (
          <span key={t} style={{
            padding: "0.2rem 0.6rem",
            borderRadius: "100px",
            background: `${project.color}14`,
            border: `1px solid ${project.color}30`,
            fontFamily: "var(--font-mono)", fontSize: "0.65rem",
            color: project.color,
          }}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

// Marquee of companies/tools
const marqueeItems = ["Spring Boot", "React", "PostgreSQL", "JWT", "Hibernate", "Postman", "Git", "GitHub", "JSpiders", "CodeHelp", "WebSocket", "STOMP", "Vite", "Axios", "BCrypt", "Maven", "pgAdmin"];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" ref={ref} style={{ padding: "7rem 0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">// what i've built</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 500, marginTop: "0.75rem" }}>
            End-to-end full stack applications — from database design to secured APIs to responsive frontends.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Infinite marquee */}
      <div style={{
        marginTop: "5rem", overflow: "hidden",
        borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
        padding: "1rem 0",
      }}>
        <div style={{ display: "flex", animation: "marquee 25s linear infinite", width: "max-content" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              fontFamily: "var(--font-mono)", fontSize: "0.75rem",
              color: "var(--text-muted)", padding: "0 2rem",
              borderRight: "1px solid var(--border)", whiteSpace: "nowrap",
            }}>
              <span style={{ color: "var(--cyan)", marginRight: "0.5rem" }}>✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
