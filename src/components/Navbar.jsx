import { light, dark } from "../theme";
import ResumeDropdown from "./ResumeDropdown";
const navItems = ["about", "skills", "projects", "experience", "certifications", "achievements", "contact"];

export default function Navbar({ darkMode, setDarkMode, active, scrollTo }) {
  const t = darkMode ? dark : light;

  const handleClick = (id) => {
    scrollTo(id);
  };

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: darkMode
        ? "rgba(11,15,25,0.92)"
        : "rgba(255,255,255,0.92)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: `1px solid ${t.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 32px",
      height: 60,
    }}>
      <div style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 30,
        letterSpacing: "-0.5px",
        color: '#000000',
        cursor: "default",
      }}>
        Eswari&nbsp;&nbsp;S
      </div>

      {/* Desktop nav */}
      <div style={{
        display: "flex",
        gap: 32,
        alignItems: "center",
      }}>
        {navItems.map((n) => (
          <button
            key={n}
            onClick={() => handleClick(n)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 15,
              color: active === n ? t.accent : t.textSecondary,
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
                background: t.accent,
                borderRadius: 2,
              }} />
            )}
          </button>
        ))}
        <ResumeDropdown darkMode={darkMode} variant="nav" />
      </div>
    </nav>
  );
}