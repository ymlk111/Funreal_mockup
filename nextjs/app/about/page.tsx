import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us（会社概要） | 株式会社ファンリアル",
  description: "株式会社ファンリアルの会社概要・アクセス情報。",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-label">About Us</div>
        <h1>会社概要</h1>
      </div>

      {/* COMPANY PROFILE */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Company Profile</div>
        <h2 className="section-title fade-up">会社概要</h2>
        <table className={`${styles.infoTable} fade-up`}>
          <tbody>
            <tr><th>社名</th><td>株式会社ファンリアル</td></tr>
            <tr><th>英文社名</th><td>Funreal Inc.</td></tr>
            <tr><th>設立日</th><td>2022年（令和4年）4月25日</td></tr>
            <tr><th>資本金</th><td>100万円</td></tr>
            <tr><th>代表者</th><td>代表取締役 渡邉 悟<br />代表取締役 羽田 怜生</td></tr>
            <tr><th>事業内容</th><td>システムの設計・開発・運用<br />ウェブサイトの企画・制作・運営<br />各種映像の企画・制作・販売<br />ITソリューション事業</td></tr>
            <tr><th>所在地</th><td>〒160-0023<br />東京都新宿区西新宿7丁目5番5号 Plaza西新宿 UCF406</td></tr>
            <tr><th>TEL</th><td>03-6403-4418</td></tr>
          </tbody>
        </table>
      </div>

      <hr className="divider" />

      {/* ACCESS */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Access</div>
        <h2 className="section-title fade-up">アクセス</h2>
        <div className={`${styles.mapWrapper} fade-up`}>
          <iframe
            src="https://maps.google.com/maps?q=東京都新宿区西新宿7-5-5&z=17&hl=ja&output=embed"
            title="株式会社ファンリアル 所在地 — 東京都新宿区西新宿7丁目5番5号"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className={`${styles.accessInfo} fade-up`}>
          〒160-0023 東京都新宿区西新宿7丁目5番5号 Plaza西新宿 UCF406<br />
          Tel: 03-6403-4418
        </p>
      </div>

      {/* CONTACT CTA */}
      <div className="section section-narrow" style={{ paddingTop: 0 }}>
        <div className={`${styles.contactCta} fade-up`}>
          <div className={styles.contactCtaTitle}>お問い合わせはこちら</div>
          <p className={styles.contactCtaText}>サービス・採用・その他のご相談はお気軽にどうぞ。</p>
          <Link href="/contact" className="btn btn-primary">お問い合わせ <span className="arr">→</span></Link>
        </div>
      </div>
    </>
  );
}
