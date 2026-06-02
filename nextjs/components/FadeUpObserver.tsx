"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function FadeUpObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".fade-up:not(.visible)")
    );
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => {
      // すでにビューポート内にある要素は即座に表示（遷移直後の取りこぼし防止）
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      } else {
        observer.observe(el);
      }
    });

    // 保険: 万一監視が走らなくても残った要素を一定時間後に必ず表示
    const fallback = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".fade-up:not(.visible)")
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add("visible");
          }
        });
    }, 600);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}
