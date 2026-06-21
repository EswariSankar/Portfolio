import { light, dark } from "../theme";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    title: "UI/UX Design",
    org: "AIIRF-EDII, Annamalai University & Yazhi Software Solution",
    desc: "Completed intensive hands-on training in UI/UX design principles, covering wireframing, prototyping, and user-centered design methodologies. Gained practical experience with industry-standard design tools and developed skills in crafting intuitive, accessible interfaces that drive user engagement.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="16" cy="16" r="3" />
        <path d="M16 13v-1" /><path d="M16 22v-1" />
        <path d="M13 16h-1" /><path d="M20 16h-1" />
        <path d="M14.05 14.05l-.707-.707" /><path d="M18.657 18.657l-.707-.707" />
        <path d="M14.05 17.95l-.707.707" /><path d="M18.657 13.343l-.707.707" />
        <line x1="9" y1="7" x2="15" y2="7" />
      </svg>
    ),
  },
  {
    title: "Blockchain Technology & Unreal Engine Development",
    org: "Esteem E Technologies Chennai Pvt. Ltd",
    desc: "Acquired practical expertise in blockchain fundamentals including smart contract development, decentralized application (dApp) architecture, and Web3 integration. Concurrently developed proficiency in Unreal Engine for real-time 3D development, bridging emerging technologies across decentralized systems and immersive digital experiences.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

export default function Experience({ darkMode, registerSection, visible, fadeIn }) {
  const t = darkMode ? dark : light;

  return (
    <section
      id="experience"
      ref={registerSection("experience")}
      style={{
        padding: "60px 20px",
        borderTop: `1px solid ${t.border}`,
        borderBottom: `1px solid ${t.border}`,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader title="Experience" darkMode={darkMode} visible={visible.experience} accent={t.accent} hideLine />

        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 32 }}>
          {experiences.map((e, i) => (
            <div
              key={e.title}
              style={{
                ...fadeIn("experience", i * 0.15),
                display: "flex",
                gap: 16,
                background: t.card,
                border: `1px solid ${t.border}`,
                borderRadius: 16,
                padding: 20,
                boxShadow: t.shadow,
                flexWrap: "wrap",
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: t.accentLight, color: t.accentText,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: 2,
              }}>
                {e.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 20, fontWeight: 600, color: t.text, marginBottom: 4 }}>{e.title}</div>
                <div style={{
                  fontSize: 18, color: t.accentText, background: t.accentLight,
                  display: "inline-block", padding: "2px 10px", borderRadius: 20,
                  marginBottom: 10, fontWeight: 500,
                }}>
                  {e.org}
                </div>
                <p style={{ fontSize: 18, color: t.textSecondary, lineHeight: 1.75, margin: 0, textAlign: "justify" }}>
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}