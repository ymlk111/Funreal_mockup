import type { Metadata } from "next";
import Link from "next/link";
import PickupCarousel from "@/components/PickupCarousel";
import { asset } from "@/lib/asset";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "株式会社ファンリアル | ITで人と企業の未来を拓く",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className={styles.heroValuesWrap}>
        <div
          className={styles.heroValuesBg}
          style={{ backgroundImage: `url(${asset("/image/hero-image.png")})` }}
        />
        <div className={styles.heroValuesOverlay} />
        <div className={styles.heroValuesAccent} />
        <div className={styles.hero} id="hero">
          <div className={styles.heroContent}>
            <h1 className={styles.heroCatch}>自由に、そして楽しく。</h1>
          </div>
          <div className={styles.heroScroll}>
            <div className={styles.heroScrollLine} />
          </div>
        </div>
      </div>

      {/* PICKUP CAROUSEL */}
      <PickupCarousel />

      {/* ABOUT US */}
      <section className="section fade-up" id="about-sec">
        <div className={styles.aboutInner}>
          <div>
            <div className="section-label">About Us</div>
            <h2 className="section-title">人の力が、社会を動かす。</h2>
            <p className={styles.aboutBody}>
              ITの進化が加速するいま、私たちは「人」の可能性を最大化することに全力を注いでいます。
              個々の「やりたいこと」を実現し、心身ともに豊かなエンジニアが生み出す力で、
              社会とお客様の発展に貢献します。
            </p>
            <Link href="/about" className="btn-outline-sm">会社概要を見る →</Link>
          </div>
          <div className={styles.aboutVisual}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/image/human-image.png")} alt="About Us" loading="lazy" style={{ width: "100%", borderRadius: "8px", display: "block" }} />
            <div className={styles.aboutVisualAccent} />
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section className={styles.servicesBg} id="services-sec">
        <div className="section" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <div className="fade-up">
            <div className="section-label">Service</div>
            <h2 className="section-title">私たちのサービス</h2>
          </div>
          <div className={styles.servicesGrid}>
            <Link href="/service/se" className={`${styles.serviceCard} fade-up fade-up-delay-1`}>
              <div className={styles.svcAccent} style={{ background: "var(--red)" }} />
              <div className={styles.svcIcon} style={{ background: "rgba(204,34,0,0.08)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CC2200" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <div className={styles.svcLabel} style={{ color: "var(--red)" }}>SE</div>
              <div className={styles.svcName}>システムエンジニアリング</div>
              <div className={styles.svcDesc}>クライアントの開発現場にエンジニアを送り出すSES事業。成長を前提としたアサインで、技術力と品質を両立します。</div>
              <div className={styles.svcArrow} style={{ color: "var(--red)" }}>詳しく見る →</div>
            </Link>
            <Link href="/service/is" className={`${styles.serviceCard} fade-up fade-up-delay-2`}>
              <div className={styles.svcAccent} style={{ background: "var(--blue)" }} />
              <div className={styles.svcIcon} style={{ background: "rgba(0,170,204,0.08)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AACC" strokeWidth="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className={styles.svcLabel} style={{ color: "var(--blue)" }}>IS — LEAD TECH</div>
              <div className={styles.svcName}>インサイドセールス</div>
              <div className={styles.svcDesc}>インサイドセールスの戦略設計から実行・改善まで。安定した商談創出の仕組みをつくり、営業成果を最大化します。</div>
              <div className={styles.svcArrow} style={{ color: "var(--blue)" }}>詳しく見る →</div>
            </Link>
            <Link href="/solutions" className={`${styles.serviceCard} fade-up fade-up-delay-3`}>
              <div className={styles.svcAccent} style={{ background: "var(--yellow)" }} />
              <div className={styles.svcIcon} style={{ background: "rgba(204,170,0,0.08)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CCAA00" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <div className={styles.svcLabel} style={{ color: "var(--yellow)" }}>Solutions</div>
              <div className={styles.svcName}>ソリューションズ</div>
              <div className={styles.svcDesc}>受託開発から自社プロダクトまで。企画構想からシステム開発・運用保守を一貫して手がけ、ビジネスの成長を支えます。</div>
              <div className={styles.svcArrow} style={{ color: "var(--yellow)" }}>詳しく見る →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CEO QUOTE */}
      <section className={styles.ceoQuoteSec}>
        <div className={`${styles.ceoQuoteCard} fade-up`}>
          <p className={styles.ceoQuoteText}>
            これまでの働く環境で、ご自身のキャリアや会社のルールにミスマッチを感じたことはありませんか？<br />
            株式会社ファンリアルが大切にしているのは、社員一人ひとりが「自然体で、長く安心して働けること」です。
          </p>
          <div className={styles.ceoQuoteMeta}>株式会社ファンリアル 代表取締役</div>
          <Link href="/recruit" className={styles.ceoQuoteLink}>代表メッセージ全文を読む →</Link>
        </div>
      </section>

      {/* RECRUIT CTA */}
      <section className={styles.recruitBg}>
        <div className={`${styles.recruitInner} fade-up`}>
          <div>
            <div className="section-label" style={{ color: "var(--yellow)" }}>Recruit</div>
            <h2 className={styles.recruitTitle}>一緒に、未来をつくろう。</h2>
            <p className={styles.recruitDesc}>
              成長を前提としたアサイン、自由で快適な環境、柔軟なキャリアパス。<br />
              あなたの「次のステップ」を一緒に見つけませんか。
            </p>
          </div>
          <Link href="/recruit" className={styles.btnRecruit}>採用情報を見る →</Link>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className={styles.contactBg}>
        <div className={`${styles.contactInner} fade-up`}>
          <div className="section-label" style={{ justifyContent: "center" }}>Contact</div>
          <h2 className={styles.contactTitle}>サービスに関するお問い合わせ</h2>
          <p className={styles.contactDesc}>
            ご質問・ご相談はお気軽にどうぞ。<br />
            担当者より2営業日以内にご連絡いたします。
          </p>
          <Link href="/contact" className={styles.btnContact}>お問い合わせ <span className={styles.arr}>→</span></Link>
        </div>
      </section>
    </>
  );
}
