import { useState } from "react";
import { light, dark } from "../theme";
import ResumeDropdown from "./ResumeDropdown";

const navItems = ["about", "skills", "projects", "experience", "certifications", "achievements", "contact"];

export default function Navbar({ darkMode, setDarkMode, active, scrollTo }) {
  const t = darkMode ? dark : light;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { 
          display: flex !important; 
          flex-direction: column !important;
          }
        }
        @media (min-width: 769px) {
          .nav-mobile-menu { display: none !important; }
          .nav-hamburger { display: none !important; }
        }
        @media (max-width: 768px) {
          .nav-inner { flex-direction: row-reverse !important; }
        }
      `}</style>

      <nav className="nav-inner" style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: darkMode ? "rgba(11,15,25,0.95)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${t.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        height: 60,
      }}>
        <div style={{
          fontFamily: "'Times New Roman'",
          fontSize: 24,
          letterSpacing: "-0.5px",
          color: '#000000',
          cursor: "default",
        }}>
          Eswari&nbsp;&nbsp;S
        </div>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "nowrap" }}>
          {navItems.map((n) => (
            <button
              key={n}
              onClick={() => handleClick(n)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Times New Roman'",
                fontSize: 18,
                color: active === n ? '#000000' : t.textSecondary,
                fontWeight: active === n ? 600 : 400,
                transition: "color 0.2s",
                padding: "4px 0",
                textTransform: "capitalize",
                letterSpacing: "0.3px",
                position: "relative",
              }}
            >
              {n}
              {active === n && (
                <div style={{
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: '#000000',
                  borderRadius: 2,
                }} />
              )}
            </button>
          ))}
          <ResumeDropdown darkMode={darkMode} variant="nav" />
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: t.text,
            flexDirection: "column",
            gap: 5,
            width: 40,
            alignItems: "center",
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: 24, minWidth: 24, height: 2, flexShrink: 0, background: t.text, borderRadius: 2, transition: "transform 0.2s, opacity 0.2s", transformOrigin: "center", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: 24, minWidth: 24, height: 2, flexShrink: 0, background: t.text, borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: 24, minWidth: 24, height: 2, flexShrink: 0, background: t.text, borderRadius: 2, transition: "transform 0.2s, opacity 0.2s", transformOrigin: "center", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="nav-mobile-menu"
        style={{
          display: menuOpen ? "flex" : "none",
          position: "fixed",
          top: 60,
          left: 0,
          right: 0,
          zIndex: 99,
          background: darkMode ? "rgba(11,15,25,0.98)" : "rgba(255,255,255,0.98)",
          backdropFilter: "blur(16px)",
          flexDirection: "column",
          padding: "16px 20px 24px",
          borderBottom: `1px solid ${t.border}`,
          gap: 4,
        }}
      >
        {navItems.map((n) => (
          <button
            key={n}
            onClick={() => handleClick(n)}
            style={{
              background: active === n ? t.accentLight : "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Times New Roman'",
              fontSize: 20,
              color: active === n ? t.accentText : t.text,
              fontWeight: active === n ? 600 : 400,
              textAlign: "left",
              padding: "12px 16px",
              borderRadius: 10,
              textTransform: "capitalize",
              width: "100%",
            }}
          >
            {n}
          </button>
        ))}
        <div style={{ marginTop: 12, paddingLeft: 16 }}>
          <ResumeDropdown darkMode={darkMode} variant="nav" />
        </div>
      </div>
    </>
  );
}