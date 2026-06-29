import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ソリューションズ | 株式会社ファンリアル",
  description:
    "株式会社ファンリアルが提供するサービスをご紹介します。",
};

// image に画像パス（例: "/image/solution-xxx.png"）を設定すると差し替わります。
// 未設定の場合はプレースホルダーを表示します。
const works = [
  {
    tag: "Web / SaaS",
    title: "物件管理SaaS",
    desc: "不動産企業向けに、物件情報の一元管理と内見予約のオンライン化を実現するSaaS。管理工数を大幅に削減します。",
    image: "",
  },
  {
    tag: "Mobile App",
    title: "店舗オペレーション管理アプリ",
    desc: "飲食チェーン向けに、日次報告・在庫・シフト管理を一元化するモバイルアプリ。現場の業務負荷を軽減します。",
    image: "",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-label">Solutions</div>
        <h1>ソリューションズ</h1>
        <p className="page-hero-sub">
          ファンリアルから提供する、<br />
          サービスをご紹介します。
        </p>
      </div>

      {/* WORKS */}
      <section className="section section-narrow">
        <div className={styles.solutionList}>
          {works.map((w) => (
            <div key={w.title} className={`${styles.solutionRow} fade-up`}>
              <div className={styles.solutionMedia}>
                {w.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={asset(w.image)} alt={w.title} loading="lazy" />
                ) : (
                  <div className={styles.solutionMediaPh}>IMAGE</div>
                )}
              </div>
              <div className={styles.solutionBody}>
                <span className={styles.workTag}>{w.tag}</span>
                <h3 className={styles.workTitle}>{w.title}</h3>
                <p className={styles.workDesc}>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section section-narrow" style={{ paddingTop: 0 }}>
        <div className={`${styles.ctaBox} fade-up`}>
          <div className={styles.ctaTitle}>各種ソリューションのご相談はお気軽に</div>
          <p className={styles.ctaText}>お見積り・導入について、まずはお問い合わせください。</p>
          <Link href="/contact" className="btn btn-primary">お問い合わせ <span className="arr">→</span></Link>
        </div>
      </section>
    </>
  );
}
