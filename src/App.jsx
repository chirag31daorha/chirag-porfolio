import "./styles/globals.css";
import Loader from "./components/Loader.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

function Footer() {
  return (
    <footer style={{
      padding: "2rem", textAlign: "center",
      borderTop: "1px solid var(--border)",
    }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
        Designed & Built by{" "}
        <span style={{
          background: "linear-gradient(90deg, var(--cyan), var(--pink))",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>Chirag Daorha</span>
        {" · "}© {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
