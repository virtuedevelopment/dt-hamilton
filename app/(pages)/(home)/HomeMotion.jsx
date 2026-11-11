"use client";

import { useEffect } from "react";

export default function HomeMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sections = document.querySelectorAll("#main [data-home-reveal]");
    const observer = new IntersectionObserver((entries) => {
      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting) continue;
        target.dataset.homeReveal = "visible";
        observer.unobserve(target);
      }
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.08 });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
