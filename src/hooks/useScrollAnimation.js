import { useState, useEffect, useRef, useCallback } from "react";

export default function useScrollAnimation() {
  const [visible, setVisible] = useState({});
  const [active, setActive] = useState("about");
  const sectionRefs = useRef({});

  // For visible/fadeIn — generous margin so animations trigger early
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible((v) => ({ ...v, [e.target.id]: true }));
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const refs = Object.values(sectionRefs.current);
    refs.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // For active nav — picks whichever section is closest to top of viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.entries(sectionRefs.current);
      let closest = null;
      let closestDist = Infinity;

      sections.forEach(([id, el]) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - 80); // 80 = navbar height
        if (rect.top <= window.innerHeight && rect.bottom >= 0 && dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      });

      if (closest) setActive(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const registerSection = useCallback((id) => (el) => {
    if (el) sectionRefs.current[id] = el;
  }, []);

  const fadeIn = (id, delay = 0) => ({
    opacity: visible[id] ? 1 : 0,
    transform: visible[id] ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return { visible, active, setActive, registerSection, fadeIn, scrollTo };
}