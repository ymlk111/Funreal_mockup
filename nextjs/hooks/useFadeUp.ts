"use client";
import { useEffect, useRef } from "react";

export function useFadeUp() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const els = document.querySelectorAll(".fade-up");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
