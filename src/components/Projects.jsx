import { light, dark } from "../theme";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/projects";


export default function Projects({ darkMode, registerSection, visible, fadeIn }) {
  const t = darkMode ? dark : light;

  return (
    <section
      id="projects"
      ref={registerSection("projects")}
      style={{ padding: "80px 32px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          title="Projects"
          darkMode={darkMode}
          visible={visible.projects}
          accent={t.accent}
          hideLine
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
          marginTop: 40,
        }}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              style={{
                ...fadeIn("projects", i * 0.1),
                background: t.card,
                border: `1px solid ${p.highlight ? t.accent : t.border}`,
                borderRadius: 16,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                boxShadow: p.highlight ? t.shadowLg : t.shadow,
                transition: "box-shadow 0.3s, transform 0.3s",
              }}
            >
              {p.highlight && (
                <div style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: t.accent,
                  color: "#fff",
                  fontSize:18,
                  padding: "3px 10px",
                  borderRadius: 20,
                  fontWeight: 600,
                }}>
                  Major Project
                </div>
              )}
              <h3 style={{
                fontSize: 24,
                lineHeight: 1.3,
                marginBottom: 10,
                color: t.text,
                fontFamily: "'Times New Roman', ",
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: 18,
                color: t.textSecondary,
                lineHeight: 1.7,
                flex: 1,
                textAlign: "justify",
                margin: 0,
              }}>
                {p.desc}
              </p>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                margin: "16px 0 12px",
              }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 16,
                      padding: "3px 10px",
                      borderRadius: 20,
                      background: t.accentLight,
                      color: t.accentText,
                    }}
                  >
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
                  fontSize: 18,
                  color: t.accent,
                  textDecoration: "none",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
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
  );
}