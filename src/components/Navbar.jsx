import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = ["about", "skills", "projects", "education", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 2.5, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "1rem 2rem",
        background: scrolled ? "rgba(2,7,18,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,245,255,0.08)" : "none",
        transition: "all 0.4s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        style={{
          fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.3rem",
          background: "linear-gradient(135deg, var(--cyan), var(--pink))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          cursor: "pointer",
        }}
      >
        CD.
      </motion.div>

      {/* Desktop Links */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="desktop-nav">
        {navLinks.map((link) => (
          <NavLink key={link} to={link} />
        ))}
        <motion.a
          href="https://github.com/chirag31daorha"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "0.5rem 1.25rem",
            border: "1px solid var(--cyan)",
            borderRadius: "8px",
            color: "var(--cyan)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            textDecoration: "none",
            letterSpacing: "0.08em",
            boxShadow: "0 0 12px rgba(0,245,255,0.15)",
          }}
        >
          GitHub
        </motion.a>
      </div>

      {/* Mobile Menu */}
      <button
        onClick={() => setOpen(!open)}
        className="mobile-menu-btn"
        style={{ background: "none", border: "none", color: "var(--cyan)", fontSize: "1.5rem", cursor: "none" }}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "rgba(8,15,31,0.97)", backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.5rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth duration={600}
              offset={-80}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-heading)", fontWeight: 600,
                fontSize: "1.1rem", textTransform: "capitalize",
                color: "var(--text)", cursor: "pointer", textDecoration: "none",
              }}
            >
              {link}
            </Link>
          ))}
        </motion.div>
      )}

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: block; }
        }
      `}</style>
    </motion.nav>
  );
}

function NavLink({ to }) {
  return (
    <Link
      to={to}
      smooth
      duration={600}
      offset={-80}
      style={{ position: "relative", cursor: "pointer" }}
    >
      <motion.span
        whileHover="hover"
        style={{
          fontFamily: "var(--font-heading)", fontWeight: 600,
          fontSize: "0.88rem", textTransform: "capitalize",
          color: "var(--text-muted)", letterSpacing: "0.05em",
          display: "block", textDecoration: "none",
        }}
      >
        {to}
        <motion.span
          variants={{ hover: { scaleX: 1 } }}
          initial={{ scaleX: 0 }}
          style={{
            position: "absolute", bottom: -3, left: 0, right: 0,
            height: 1.5, background: "linear-gradient(90deg, var(--cyan), var(--pink))",
            transformOrigin: "left", borderRadius: 1,
          }}
          transition={{ duration: 0.25 }}
        />
      </motion.span>
    </Link>
  );
}