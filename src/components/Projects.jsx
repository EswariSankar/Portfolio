import { light, dark } from "../theme";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/projects";

export default function Projects({ darkMode, registerSection, visible, fadeIn }) {
  const t = darkMode ? dark : light;

  return (
    <>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          margin-top: 40px;
        }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section
        id="projects"
        ref={registerSection("projects")}
        style={{ padding: "60px 20px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader title="Projects" darkMode={darkMode} visible={visible.projects} accent={t.accent} hideLine />

          <div className="projects-grid">
            {projects.map((p, i) => (
              <div
                key={p.title}
                style={{
                  ...fadeIn("projects", i * 0.1),
                  background: t.card,
                  border: `1px solid ${p.highlight ? t.accent : t.border}`,
                  borderRadius: 16,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: p.highlight ? t.shadowLg : t.shadow,
                }}
              >
                {p.highlight && (
                  <div style={{
                    position: "absolute", top: 12, right: 12,
                    background: t.accent, color: "#fff",
                    fontSize: 13, padding: "3px 10px",
                    borderRadius: 20, fontWeight: 600,
                  }}>
                    Major Project
                  </div>
                )}
                <h3 style={{
                  fontSize: 18, lineHeight: 1.3, marginBottom: 10,
                  color: t.text, fontFamily: "'Times New Roman',",
                  marginTop: p.highlight ? 28 : 0,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: 15, color: t.textSecondary, lineHeight: 1.7,
                  flex: 1, textAlign: "justify", margin: 0,
                }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "14px 0 10px" }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: 13, padding: "3px 10px", borderRadius: 20,
                      background: t.accentLight, color: t.accentText,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: 15, color: t.accent, textDecoration: "none",
                      fontWeight: 500, display: "flex", alignItems: "center", gap: 4,
                    }}
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}