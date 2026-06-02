"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./PickupCarousel.module.css";

type Card = {
  href: string;
  tag: string;
  tagVariant?: "red" | "yellow" | "dark";
  title: string;
  desc: string;
};

const cards: Card[] = [
  { href: "/about", tag: "About", title: "私たちについて", desc: "ITで人と企業の未来を拓く。ファンリアルのビジョンと想いをご紹介します。" },
  { href: "/service/se", tag: "SE", tagVariant: "red", title: "システムエンジニアリング", desc: "成長を前提とした現場アサインで、エンジニアの可能性を最大化します。" },
  { href: "/solutions", tag: "Solutions", tagVariant: "yellow", title: "ソリューションズ", desc: "企画構想から開発・運用まで一気通貫。ビジネスの成長をサポートします。" },
  { href: "/recruit", tag: "Recruit", title: "一緒に、未来をつくろう。", desc: "2026年度エントリー受付中。あなたのペースで成長できる環境があります。" },
  { href: "/contact", tag: "Contact", tagVariant: "dark", title: "お問い合わせ", desc: "サービスへのご相談・ご質問はお気軽にどうぞ。2営業日以内にご連絡します。" },
];

const VISIBLE = 3;
const GAP = 24;

export default function PickupCarousel() {
  const total = cards.length;
  const maxIdx = Math.max(0, total - VISIBLE);
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const applyTransform = (idx: number) => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return;
    const cardW = (track.children[0] as HTMLElement).offsetWidth;
    track.style.transform = `translateX(-${idx * (cardW + GAP)}px)`;
  };

  useEffect(() => {
    applyTransform(current);
    const onResize = () => applyTransform(current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [current]);

  const goTo = (idx: number) => setCurrent(Math.max(0, Math.min(idx, maxIdx)));

  return (
    <section className={styles.sec}>
      <div className={`${styles.head} fade-up`}>
        <div className="section-label">Pick Up</div>
      </div>
      <div className={styles.stage}>
        <div className={styles.viewport}>
          <div className={styles.track} ref={trackRef}>
            {cards.map((c) => {
              const tagClass = `${styles.tag}${c.tagVariant ? ` ${styles[`tag_${c.tagVariant}`]}` : ""}`;
              return (
                <Link key={c.href} href={c.href} className={styles.card}>
                  <span className={tagClass}>{c.tag}</span>
                  <div className={styles.cardTitle}>{c.title}</div>
                  <div className={styles.cardDesc}>{c.desc}</div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.controls}>
          <button
            className={styles.btn}
            aria-label="前へ"
            disabled={current === 0}
            onClick={() => goTo(current - 1)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className={styles.dots}>
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot}${i === current ? ` ${styles.dotActive}` : ""}`}
                aria-label={`${i + 1}番目へ`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <div className={styles.counter}>
            {current + 1}–{Math.min(current + VISIBLE, total)} / {total}
          </div>
          <button
            className={styles.btn}
            aria-label="次へ"
            disabled={current === maxIdx}
            onClick={() => goTo(current + 1)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
