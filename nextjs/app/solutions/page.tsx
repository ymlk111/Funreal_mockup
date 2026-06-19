import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ソリューションズ | 株式会社ファンリアル",
  description:
    "株式会社ファンリアルのソリューションズ事業。これまでに手がけた成果物をご紹介します。",
};

const works = [
  {
    tag: "Web / SaaS",
    title: "物件管理SaaS",
    desc: "不動産企業向けに、物件情報の一元管理と内見予約のオンライン化を実現するSaaSを開発。管理工数を大幅に削減しました。",
  },
  {
    tag: "Mobile App",
    title: "店舗オペレーション管理アプリ",
    desc: "飲食チェーン向けに、日次報告・在庫・シフト管理を一元化するモバイルアプリを開発。現場の業務負荷を軽減しました。",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-label">Solutions</div>
        <h1>ソリューションズ</h1>
        <p className="page-hero-sub">
          企画から開発・運用まで一貫して手がけた、<br />
          これまでの成果物をご紹介します。
        </p>
      </div>

      {/* WORKS */}
      <section className="section section-narrow">
        <div className="section-label fade-up">Works</div>
        <h2 className="section-title fade-up">成果物</h2>
        <div className={styles.workGrid}>
          {works.map((w) => (
            <div key={w.title} className={`${styles.workCard} fade-up`}>
              <span className={styles.workTag}>{w.tag}</span>
              <h3 className={styles.workTitle}>{w.title}</h3>
              <p className={styles.workDesc}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section section-narrow" style={{ paddingTop: 0 }}>
        <div className={`${styles.ctaBox} fade-up`}>
          <div className={styles.ctaTitle}>開発のご相談はお気軽に</div>
          <p className={styles.ctaText}>企画・開発・運用について、まずはお問い合わせください。</p>
          <Link href="/contact" className="btn btn-primary">お問い合わせ →</Link>
        </div>
      </section>
    </>
  );
}
