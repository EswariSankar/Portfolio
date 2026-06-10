import { light, dark } from "../theme";
import { GITHUB, LINKEDIN } from "../data/links";

export default function Footer({ darkMode }) {
  const t = darkMode ? dark : light;

  return (
    <footer style={{
      borderTop: `1px solid ${t.border}`,
      padding: "24px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: t.bg,
    }}>
      <div style={{
        fontFamily: "'Times New Roman', ",
        fontSize: 24,
        color: '#000000',
      }}>
      Eswari&nbsp;&nbsp;S
      </div>
      <div style={{ fontSize: 16, color: t.muted }}>
        © 2026 Eswari S · B.E. IT, Annamalai University
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: 18,
            color: t.accent,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
        >
          GitHub
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: 18,
            color: "#0A66C2",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}