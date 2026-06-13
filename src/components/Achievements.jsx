import { light, dark } from "../theme";
import SectionHeader from "./SectionHeader";
import { leadership } from "../data/achievements";

export default function Achievements({ darkMode, registerSection, visible, fadeIn }) {
  const t = darkMode ? dark : light;

  return (
    <section
      id="achievements"
      ref={registerSection("achievements")}
      style={{
        padding: "60px 20px",
        background: t.surface,
        borderTop: `1px solid ${t.border}`,
        borderBottom: `1px solid ${t.border}`,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader title="Achievements" darkMode={darkMode} visible={visible.achievements} accent={t.accent} hideLine />

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 40 }}>
          {leadership.map((l, i) => (
            <div
              key={l.role}
              style={{
                ...fadeIn("achievements", i * 0.1),
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: t.card,
                border: `1px solid ${t.border}`,
                borderRadius: 12,
                padding: "14px 16px",
                boxShadow: t.shadow,
                flexWrap: "wrap",
              }}
            >
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: t.accent, flexShrink: 0,
              }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: 17, fontWeight: 600, color: t.text }}>{l.role}</span>
                <span style={{ fontSize: 14, color: t.textSecondary, marginLeft: 8 }}>{l.org}</span>
              </div>
              <div style={{
                fontSize: 14, color: t.accentText, background: t.accentLight,
                padding: "3px 10px", borderRadius: 20, whiteSpace: "nowrap",
              }}>
                {l.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}