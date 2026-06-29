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
  highlight?: boolean;
};

const cards: Card[] = [
  { href: "/about", tag: "About", title: "私たちについて", desc: "ITで人と企業の未来を拓く。ファンリアルのビジョンと想いをご紹介します。" },
  { href: "/service/se", tag: "SES", tagVariant: "red", title: "システムエンジニアリング", desc: "成長を前提とした現場アサインで、エンジニアの可能性を最大化します。" },
  { href: "/solutions", tag: "Solutions", tagVariant: "yellow", title: "ソリューションズ", desc: "企画構想から開発・運用まで一気通貫。ビジネスの成長をサポートします。" },
  { href: "/recruit", tag: "Recruit", title: "一緒に、未来をつくろう。", desc: "2026年度エントリー受付中。あなたのペースで成長できる環境があります。", highlight: true },
  { href: "/contact", tag: "Contact", tagVariant: "dark", title: "お問い合わせ", desc: "サービスへのご相談・ご質問はお気軽にどうぞ。5営業日以内にご連絡します。" },
];

const GAP = 24;

export default function PickupCarousel() {
  const total = cards.length;
  const recruitIndex = cards.findIndex((c) => c.highlight);
  // 前後にクローンを並べてシームレスな無限ループにする
  const loop = [...cards, ...cards, ...cards];
  // 採用カードを初期表示の中央に置く（中央コピー基準）
  const [index, setIndex] = useState(total + Math.max(recruitIndex - 1, 0));
  const [animate, setAnimate] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const stepWidth = () => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return 0;
    return (track.children[0] as HTMLElement).offsetWidth + GAP;
  };

  // transform を適用（animate=false のときはトランジションなしで瞬間移動）
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = animate ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)" : "none";
    track.style.transform = `translateX(-${index * stepWidth()}px)`;
  }, [index, animate]);

  // クローン境界に達したらアニメーションなしで中央へ巻き戻す
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  useEffect(() => {
    const onResize = () => {
      const track = trackRef.current;
      if (!track) return;
      track.style.transition = "none";
      track.style.transform = `translateX(-${index * stepWidth()}px)`;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  const go = (dir: number) => {
    if (!animate) return; // 巻き戻し中の多重クリックを防ぐ
    setIndex((i) => i + dir);
  };

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== trackRef.current) return; // カードのホバー等のバブリングを無視
    if (index >= total * 2) {
      setAnimate(false);
      setIndex(index - total);
    } else if (index < total) {
      setAnimate(false);
      setIndex(index + total);
    }
  };

  const activeDot = ((index % total) + total) % total;

  return (
    <section className={styles.sec}>
      <div className={`${styles.head} fade-up`}>
        <div className="section-label">Pick Up</div>
      </div>
      <div className={styles.stage}>
        <button className={`${styles.btn} ${styles.btnPrev}`} aria-label="前へ" onClick={() => go(-1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <div className={styles.viewport}>
          <div className={styles.track} ref={trackRef} onTransitionEnd={handleTransitionEnd}>
            {loop.map((c, i) => {
              const tagClass = `${styles.tag}${c.tagVariant ? ` ${styles[`tag_${c.tagVariant}`]}` : ""}`;
              return (
                <Link key={i} href={c.href} className={`${styles.card}${c.highlight ? ` ${styles.cardHighlight}` : ""}`}>
                  <span className={tagClass}>{c.tag}</span>
                  <div className={styles.cardTitle}>{c.title}</div>
                  <div className={styles.cardDesc}>{c.desc}</div>
                </Link>
              );
            })}
          </div>
        </div>
        <button className={`${styles.btn} ${styles.btnNext}`} aria-label="次へ" onClick={() => go(1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
      <div className={styles.dots}>
        {cards.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot}${i === activeDot ? ` ${styles.dotActive}` : ""}`}
            aria-label={`${i + 1}番目へ`}
            onClick={() => setIndex(total + i)}
          />
        ))}
      </div>
    </section>
  );
}
