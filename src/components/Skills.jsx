import { light, dark } from "../theme";
import SectionHeader from "./SectionHeader";

export default function Skills({ darkMode, registerSection, visible, fadeIn }) {
  const t = darkMode ? dark : light;

  const skillCategories = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="9" y1="7" x2="15" y2="7" /><line x1="9" y1="11" x2="15" y2="11" />
          <line x1="9" y1="15" x2="12" y2="15" /><circle cx="12" cy="18.5" r="0.5" fill={t.accent} />
        </svg>
      ),
      title: "Mobile Development",
      tags: "React Native, Android, Expo",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
          <line x1="10" y1="6" x2="16" y2="6" /><line x1="10" y1="18" x2="16" y2="18" />
        </svg>
      ),
      title: "Backend",
      tags: "Python, Django, REST APIs, SQLite",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Frontend",
      tags: "React.js, HTML5, CSS3, Leaflet.js",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      title: "Data & Storage",
      tags: "SQLite, Redux, AsyncStorage",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="4" cy="6" r="2" /><circle cx="4" cy="18" r="2" />
          <circle cx="12" cy="12" r="2" /><circle cx="20" cy="6" r="2" /><circle cx="20" cy="18" r="2" />
          <line x1="6" y1="6" x2="10" y2="12" /><line x1="6" y1="18" x2="10" y2="12" />
          <line x1="14" y1="12" x2="18" y2="6" /><line x1="14" y1="12" x2="18" y2="18" />
        </svg>
      ),
      title: "AI & Vision",
      tags: "MediaPipe, OpenCV, SVM, Scikit-Learn, Image Processing",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "IoT & Hardware",
      tags: "ESP32, MQ-3 Sensor, GPS",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Dev Tools",
      tags: "Git, GitHub, VS Code",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      title: "Blockchain",
      tags: "Smart Contracts, Meta mask, Web3 basics",
    },
  ];

  return (
    <>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
        }
      `}</style>

      <section
        id="skills"
        ref={registerSection("skills")}
        style={{
          padding: "60px 20px",
          background: t.surface,
          borderTop: `1px solid ${t.border}`,
          borderBottom: `1px solid ${t.border}`,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader title="Technical Skills" darkMode={darkMode} visible={visible.skills} accent={t.accent} hideLine />

          <div className="skills-grid" style={{ marginTop: 32 }}>
            {skillCategories.map((s, i) => (
              <div
                key={s.title}
                style={{
                  ...fadeIn("skills", i * 0.07),
                  background: t.card,
                  border: `1px solid ${t.border}`,
                  borderRadius: 14,
                  padding: "16px 14px",
                  boxShadow: t.shadow,
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: t.accentLight,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 12,
                }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: 20, fontWeight: 600, color: t.text, marginBottom: 6 }}>{s.title}</div>
                <div style={{ fontSize: 18, color: t.textSecondary, lineHeight: 1.6 }}>{s.tags}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}