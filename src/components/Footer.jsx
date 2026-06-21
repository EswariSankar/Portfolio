import { light, dark } from "../theme";
import { GITHUB, LINKEDIN } from "../data/links";

export default function Footer({ darkMode }) {
  const t = darkMode ? dark : light;

  return (
    <>
      <style>{`
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        @media (max-width: 600px) {
          .footer-inner {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }
        }
      `}</style>

      <footer style={{
        borderTop: `1px solid ${t.border}`,
        padding: "20px 20px",
        background: t.bg,
      }}>
        <div className="footer-inner">
          <div style={{ fontFamily: "'Times New Roman',", fontSize: 20, color: '#000000' }}>
            Eswari&nbsp;&nbsp;S
          </div>
          <div style={{ fontSize: 18, color: t.muted }}>
            © 2026 Eswari S · B.E. IT, Annamalai University
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <a href={GITHUB} target="_blank" rel="noreferrer"
              style={{ fontSize: 18, color: t.accent, textDecoration: "none" }}>
              GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer"
              style={{ fontSize: 18, color: "#0A66C2", textDecoration: "none" }}>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}