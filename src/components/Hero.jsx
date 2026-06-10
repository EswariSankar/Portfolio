import { light, dark } from "../theme";
import {
  GITHUB, LINKEDIN, EMAIL
} from "../data/links";
import profilePhoto from "../assets/profile.png";
import ResumeDropdown from "./ResumeDropdown";
export default function Hero({ darkMode, registerSection, fadeIn }) {
  const t = darkMode ? dark : light;

  return (
    <section
      id="about"
      ref={registerSection("about")}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 32px 60px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 0.8fr",
        gap: 40,
        alignItems: "center",
        width: "100%",
        justifyContent: "flex-end",
      }}>
        <div style={fadeIn("about", 0)}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: t.accentLight,
            color: t.accentText,
            fontSize: 26,
            padding: "8px 20px",
            borderRadius: 20,
            marginBottom: 24,
            fontWeight: 500,
          }}>
            <span style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22C55E",
              display: "inline-block",
            }} />
            Open to opportunities
          </div>

          <h1 style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: 52,
            lineHeight: 1.1,
            margin: "0 0 16px",
            letterSpacing: "-1px",
            color: t.text,
          }}>
            Mobile & FullStack Developer<br />

          </h1>

          <p style={{
            fontSize: 24,
            color: t.textSecondary,
            lineHeight: 1.75,
            marginBottom: 32,
            textAlign: "justify",
            maxWidth: 520,
          }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I am Eswari S, a Software Developer with a Bachelor's degree in Information Technology and a strong passion for building
            innovative web and mobile applications and  specialize in developing web applications using Django and cross-platform mobile applications
            using React Native, with a focus on creating intuitive, user-centered experiences.

          </p>

          <div style={{
            display: "flex",
            gap: 12,
            flexWrap: "nowrap",
            marginBottom: 40,
            alignItems: "center",
          }}>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: t.accent,
                color: "#fff",
                padding: "10px 22px",
                borderRadius: 10,
                fontSize: 18,
                textDecoration: "none",
                fontWeight: 500,
                transition: "opacity 0.2s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#0A66C2",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: 10,
                fontSize: 18,
                textDecoration: "none",
                fontWeight: 500,
                transition: "opacity 0.2s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#EA4335",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: 10,
                fontSize: 18,
                textDecoration: "none",
                fontWeight: 500,
                transition: "opacity 0.2s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </a>
            
            <ResumeDropdown darkMode={darkMode} variant="hero" />
          </div>
        </div>

        {/* Profile card */}
        <div style={{
          ...fadeIn("about", 0.2),
          display: "flex",
          justifyContent: "flex-end",
        }}>
          <div style={{ position: "relative", width: 320, height: 460 }}>
            <div style={{
              position: "absolute",
              inset: 0,
              borderRadius: 24,
              background: `linear-gradient(135deg, ${t.accent}22, #3B82F622)`,
              transform: "rotate(3deg)",
            }} />
            <div style={{
              position: "absolute",
              inset: 0,
              borderRadius: 24,
              background: t.card,
              border: `1px solid ${t.border}`,
              boxShadow: t.shadowLg,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <div style={{
                width: "100%",
                height: "100%",
                background: darkMode
                  ? `linear-gradient(135deg, #1e1b4b, #312e81)`
                  : `linear-gradient(135deg, #ede9fe, #c7d2fe, #e0e7ff)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
              }}>
                <div style={{
                  padding: 4,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.accent}, #3B82F6)`,
                  flexShrink: 0,
                }}>
                  <img
                    src={profilePhoto}
                    alt="Eswari S"
                    style={{
                      width: 220,
                      height: 220,
                      borderRadius: "50%",
                      objectFit: "cover",
                      objectPosition: "center 5%",
                      backgroundColor: "transparent",
                      display: "block",
                      border: `4px solid ${t.accent}`,
                    }}
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Times New Roman',",
                    fontSize: 24,
                    color: t.text,
                  }}>
                    Eswari S
                  </div>
                  <div style={{
                    fontSize: 16,
                    color: t.textSecondary,
                    marginTop: 4,
                  }}>
                    B.E. Information Technology
                  </div>
                  <div style={{
                    fontSize: 16,
                    color: t.accentText,
                    marginTop: 4,
                  }}>
                    Annamalai University · 9.4 CGPA
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: "absolute",
              bottom: -12,
              right: -12,
              background: t.accent,
              borderRadius: 12,
              padding: "8px 14px",
              fontSize: 16,
              color: "#fff",
              fontWeight: 500,
              whiteSpace: "nowrap",
              boxShadow: t.shadow,
            }}>
              Cuddalore, Tamil Nadu
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}