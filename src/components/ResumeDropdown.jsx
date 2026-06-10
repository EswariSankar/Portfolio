import { useState, useRef, useEffect } from "react";
import { light, dark } from "../theme";

/**
 * ResumeDropdown
 * variant: "nav" | "hero" | "contact"
 */
export default function ResumeDropdown({ darkMode, variant = "hero" }) {
  const t = darkMode ? dark : light;
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const options = [
    {
      label: "One-Page CV",
      sub: "Quick overview of my skills, internships, projects, and certifications.",
      file: "/resume/one-page-cv.pdf",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="13" y2="17" />
        </svg>
      ),
    },
    {
      label: "Detailed Resume",
      sub: "Comprehensive overview of my education, internships, projects, skills, and certifications.",
      file: "/resume/detailed-resume.pdf",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="15" y2="17" />
          <line x1="9" y1="9" x2="12" y2="9" />
        </svg>
      ),
    },
  ];

  const triggerStyle = (() => {
    const base = {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: "pointer",
      fontFamily: "'Times New Roman', ",
      transition: "opacity 0.2s",
      whiteSpace: "nowrap",
      outline: "none",
    };
    if (variant === "nav") return {
      ...base,
      background: t.accent,
      color: "#fff",
      border: `1.5px solid ${t.accent}`,
      fontSize: 20,
      fontWeight: 400,
      padding: "6px 14px",
      borderRadius: 8,
    };
    if (variant === "contact") return {
      ...base,
      background: t.accent,
      color: "#fff",
      border: `2px solid ${t.accent}`,
      fontSize: 20,
      fontWeight: 600,
      padding: "14px 36px",
      borderRadius: 14,
    };
    return {
      ...base,
      background: t.accent,
      color: "#fff",
      border: `1px solid ${t.accent}`,
      fontSize: 18,
      fontWeight: 500,
      padding: "10px 22px",
      borderRadius: 10,
    };
  })();

  const dropUp = variant === "contact";

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={triggerStyle}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.88)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Resume
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div style={{
          position: "absolute",
          [dropUp ? "bottom" : "top"]: "calc(100% + 8px)",
          left: variant === "nav" ? "auto" : 0,
          right: variant === "nav" ? 0 : "auto",
          minWidth: 230,
          background: t.card,
          border: `1px solid ${t.border}`,
          borderRadius: 12,
          boxShadow: t.shadowLg,
          overflow: "hidden",
          zIndex: 300,
          animation: "rdFadeSlide 0.15s ease",
        }}>
          <style>{`
            @keyframes rdFadeSlide {
              from { opacity:0; transform:translateY(${dropUp ? "6px" : "-6px"}); }
              to   { opacity:1; transform:translateY(0); }
            }
          `}</style>
          <div style={{
            padding: "8px 14px 5px",
            fontSize: 10, fontWeight: 700,
            letterSpacing: "1.5px", textTransform: "uppercase",
            color: t.muted,
          }}>
            Choose format
          </div>
          {options.map((opt) => (
            <a
              key={opt.label}
              href={opt.file}
              download
              onClick={() => setOpen(false)}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "10px 14px", textDecoration: "none",
                color: t.text, transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = t.accentLight)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{
                width: 34, height: 34, borderRadius: 8,
                background: t.accentLight, color: t.accentText,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {opt.icon}
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 2 }}>{opt.label}</div>
                <div style={{ fontSize: 14, color: t.muted }}>{opt.sub}</div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}