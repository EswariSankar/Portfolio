import { light, dark } from "../theme";
import { EMAIL, PHONE, GITHUB, LINKEDIN } from "../data/links";

export default function Contact({ darkMode, registerSection, fadeIn }) {
  const t = darkMode ? dark : light;

  const socials = [
    {
      label: "LinkedIn",
      href: LINKEDIN,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: GITHUB,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: `mailto:${EMAIL}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/eswarisankar9/",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Phone",
      href: `tel:+91${PHONE}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      ref={registerSection("contact")}
      style={{
        padding: "100px 32px",
        background: darkMode ? "#0b0f19" : t.surface,
        borderTop: `1px solid ${t.border}`,
        textAlign: "center",
      }}
    >
      <div style={{ ...fadeIn("contact", 0), maxWidth: 700, margin: "0 auto" }}>

        {/* Eyebrow */}
        <div style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: t.accent,
          marginBottom: 24,
        }}>
        </div>

        {/* Big headline */}
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(48px, 8vw, 80px)",
          lineHeight: 1.1,
          color: t.text,
          margin: "0 0 28px",
          letterSpacing: "-2px",
        }}>
          Let's Connect and Create Something Amazing Together!
        </h2>

        {/* Subtext */}
        <p style={{
          fontSize: 16,
          color: t.textSecondary,
          lineHeight: 1.75,
          marginBottom: 44,
          maxWidth: 450,
          margin: "0 auto 44px",
        }}>
          I'm actively looking for opportunities. Whether it's a job, internship,
          project, or freelance work, feel free to reach out. I'm open to discussing new ideas, collaborations, or <br/>just having a chat
          about tech and innovation!
        </p>

        {/* Say Hello button */}
        <a
          href={`mailto:${EMAIL}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: t.accent,
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            padding: "16px 40px",
            borderRadius: 14,
            textDecoration: "none",
            marginBottom: 56,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
          Say Hello
        </a>

        {/* Social icon row */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 14,
        }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: t.card,
                border: `1px solid ${t.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: t.text,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.accent;
                e.currentTarget.style.color = t.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = t.border;
                e.currentTarget.style.color = t.text;
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}