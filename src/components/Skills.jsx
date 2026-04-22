import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Backend",
    color: "#00F5FF",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg" },
      { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
    ],
  },
  {
    category: "Frontend",
    color: "#FF006E",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
      { name: "Axios", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" },
    ],
  },
  {
    category: "Database",
    color: "#FFB800",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    ],
  },
  {
    category: "Tools & DevOps",
    color: "#7C3AED",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
    ],
  },
];

function SkillIcon({ skill, color, index }) {
  const floatY = (index % 3) * 4;
  const duration = 2.5 + (index % 4) * 0.5;
  const delay = index * 0.15;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 120 }}
      whileHover={{
        scale: 1.18,
        y: -8,
        boxShadow: `0 12px 32px ${color}40`,
        borderColor: color,
      }}
      animate={{
        y: [0, -floatY, 0],
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.6rem",
        padding: "1.1rem 1rem",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        cursor: "default",
        minWidth: 80,
        transition: "border-color 0.3s, box-shadow 0.3s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow bg on hover */}
      <motion.div
        style={{
          position: "absolute", inset: 0, borderRadius: "16px",
          background: `radial-gradient(circle at center, ${color}10, transparent 70%)`,
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.img
        src={skill.icon}
        alt={skill.name}
        width={40}
        height={40}
        style={{ objectFit: "contain", position: "relative", zIndex: 1 }}
        animate={{ y: [0, -floatY, 0] }}
        transition={{ repeat: Infinity, duration, ease: "easeInOut", delay }}
        onError={(e) => {
          // Fallback to text initial if icon fails to load
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
      {/* Fallback initial badge */}
      <div style={{
        display: "none", width: 40, height: 40,
        borderRadius: "10px", background: `${color}20`,
        border: `1px solid ${color}40`,
        alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-heading)", fontWeight: 800,
        fontSize: "1rem", color: color,
      }}>
        {skill.name[0]}
      </div>

      <span style={{
        fontFamily: "var(--font-mono)", fontSize: "0.65rem",
        color: "var(--text-muted)", textAlign: "center",
        position: "relative", zIndex: 1, whiteSpace: "nowrap",
      }}>{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "7rem 0", background: "rgba(8,15,31,0.4)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-label">// what i work with</p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 480, marginTop: "0.75rem" }}>
            A full stack toolkit — from secured Java backends to reactive frontends and production databases.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {skillCategories.map(({ category, color, skills }, ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
            >
              {/* Category heading */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <span style={{
                  fontFamily: "var(--font-heading)", fontWeight: 700,
                  fontSize: "0.82rem", color: color,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                }}>{category}</span>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${color}40, transparent)` }} />
              </div>

              {/* Floating icons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
                {skills.map((skill, i) => (
                  <SkillIcon key={skill.name} skill={skill} color={color} index={ci * 6 + i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}