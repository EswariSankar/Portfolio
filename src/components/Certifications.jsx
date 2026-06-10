import { light, dark } from "../theme";
import SectionHeader from "./SectionHeader";

const certifications = [
  {
    title: "Introduction to Industry 4.0 & Industrial IoT",
    org: "NPTEL · IIT Kharagpur",
    // Circuit board icon
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <line x1="9" y1="7" x2="9" y2="4" /><line x1="12" y1="7" x2="12" y2="4" /><line x1="15" y1="7" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="17" /><line x1="12" y1="20" x2="12" y2="17" /><line x1="15" y1="20" x2="15" y2="17" />
        <line x1="7" y1="9" x2="4" y2="9" /><line x1="7" y1="12" x2="4" y2="12" /><line x1="7" y1="15" x2="4" y2="15" />
        <line x1="20" y1="9" x2="17" y2="9" /><line x1="20" y1="12" x2="17" y2="12" /><line x1="20" y1="15" x2="17" y2="15" />
      </svg>
    ),
  },
  {
    title: "Privacy & Security in Online Social Media",
    org: "NPTEL · IIIT Hyderabad",
    // Fingerprint icon
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
        <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
        <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
        <path d="M2 12a10 10 0 0 1 18-6" />
        <path d="M2 17c1 .5 2.5 1 4 1" />
        <path d="M22 12c0 .34-.03.67-.08 1" />
        <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
        <path d="M17.5 10c.7 1.1 1 2.3 1 3.5" />
        <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
      </svg>
    ),
  },
  {
    title: "AI for Early Detection of Non-Communicable Diseases",
    org: "IFET College of Engineering · ICMR Sponsored",
    // Heart + pulse (medical AI) icon
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h5.27" />
      </svg>
    ),
  },
  {
    title: "Employability Enhancement Training Programme",
    org: "Dept. of CSE, FEAT Annamalai University · Reutter CSR",
    // People/team growth icon
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Certifications({ darkMode, registerSection, visible, fadeIn }) {
  const t = darkMode ? dark : light;

  return (
    <section
      id="certifications"
      ref={registerSection("certifications")}
      style={{
        padding: "80px 32px",
        background: t.surface,
        borderTop: `1px solid ${t.border}`,
        borderBottom: `1px solid ${t.border}`,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Certifications ── */}
        <SectionHeader
          title="Certifications"
          darkMode={darkMode}
          visible={visible.certifications}
          accent={t.accent}
          hideLine
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginTop: 32,
        }}>
          {certifications.map((c, i) => (
            <div
              key={c.title}
              style={{
                ...fadeIn("certifications", i * 0.1),
                display: "flex",
                gap: 16,
                background: t.card,
                border: `1px solid ${t.border}`,
                borderRadius: 14,
                padding: 20,
                boxShadow: t.shadow,
                transition: "box-shadow 0.3s",
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: t.accentLight,
                color: t.accentText,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                {c.icon}
              </div>
              <div>
                <div style={{
                  fontSize: 26,
                  fontWeight: 600,
                  color: t.text,
                  marginBottom: 4,
                  lineHeight: 1.4,
                }}>
                  {c.title}
                </div>
                <div style={{
                  fontSize: 18,
                  color: t.textSecondary,
                }}>
                  {c.org}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}