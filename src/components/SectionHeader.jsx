import { light, dark } from "../theme";

export default function SectionHeader({ title, darkMode, visible = true, accent, hideLine }) {
  const t = darkMode ? dark : light;
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 8,
    }}>
      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 32,
        letterSpacing: "-0.5px",
        color: t.text,
        margin: 0,
      }}>
        {title}
      </h2>
      {!hideLine && <div style={{ flex: 1, height: 1, background: t.border }} />}
    </div>
  );
}