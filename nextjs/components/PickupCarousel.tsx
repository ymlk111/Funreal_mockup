"use client";
import Link from "next/link";
import { useRef } from "react";
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

function PickupCard({ card, ariaHidden }: { card: Card; ariaHidden?: boolean }) {
  const tagClass = `${styles.tag}${card.tagVariant ? ` ${styles[`tag_${card.tagVariant}`]}` : ""}`;
  return (
    <Link
      href={card.href}
      className={styles.card}
      aria-hidden={ariaHidden || undefined}
      tabIndex={ariaHidden ? -1 : undefined}
    >
      <span className={tagClass}>{card.tag}</span>
      <div className={styles.cardTitle}>{card.title}</div>
      <div className={styles.cardDesc}>{card.desc}</div>
    </Link>
  );
}

export default function PickupCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };
  const handleTouchEnd = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <section className={styles.sec}>
      <div className={styles.head}>
        <div className="section-label fade-up">Pick Up</div>
        <h2 className="section-title fade-up">各ページへ</h2>
      </div>
      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {cards.map((c) => <PickupCard key={c.href} card={c} />)}
          {cards.map((c) => <PickupCard key={`dup-${c.href}`} card={c} ariaHidden />)}
        </div>
      </div>
    </section>
  );
}
