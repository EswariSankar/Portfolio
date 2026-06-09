import { useState } from "react";
import { light, dark } from "./theme";
import useScrollAnimation from "./hooks/useScrollAnimation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const { visible, active, setActive, registerSection, fadeIn, scrollTo } = useScrollAnimation();
  const t = darkMode ? dark : light;
  return (
    <div style={{
      background: t.bg,
      color: t.text,
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      minHeight: "100vh",
      transition: "background 0.3s, color 0.3s",
    }}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        active={active}
        scrollTo={scrollTo}
      />

      <Hero
        darkMode={darkMode}
        registerSection={registerSection}
        fadeIn={fadeIn}
      />

      <Skills
        darkMode={darkMode}
        registerSection={registerSection}
        visible={visible}
        fadeIn={fadeIn}
      />

      <Projects
        darkMode={darkMode}
        registerSection={registerSection}
        visible={visible}
        fadeIn={fadeIn}
      />

      <Experience
        darkMode={darkMode}
        registerSection={registerSection}
        visible={visible}
        fadeIn={fadeIn}
      />

      <Certifications
        darkMode={darkMode}
        registerSection={registerSection}
        visible={visible}
        fadeIn={fadeIn}
      />

      <Achievements
        darkMode={darkMode}
        registerSection={registerSection}
        visible={visible}
        fadeIn={fadeIn}
      />

      <Contact
        darkMode={darkMode}
        registerSection={registerSection}
        fadeIn={fadeIn}
      />

      <Footer darkMode={darkMode} />
    </div>
  );
}