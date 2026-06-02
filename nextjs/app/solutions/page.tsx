import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ソリューションズ | 株式会社ファンリアル",
};

export default function SolutionsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-label">Solutions</div>
        <h1>ソリューションズ</h1>
        <p className="page-hero-sub">
          受託開発から自社プロダクトまで。企画構想からシステム開発・<br />
          運用保守を一貫して手がけ、ビジネスの成長を支えます。
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Overview</div>
        <h2 className="section-title fade-up">ソリューションズについて</h2>
        <div className={`${styles.msgGrid} fade-up`}>
          <div className={styles.msgText}>
            <p>ファンリアルのソリューションズ事業は、システム開発の企画段階から運用保守まで一気通貫で対応するサービスです。お客様のビジネス課題を深く理解し、最適なシステムソリューションを提供します。</p>
            <p>受託開発から自社プロダクト開発まで、幅広い開発ニーズに対応。小規模なWebアプリケーションから大規模な業務システムまで、チームの強みを活かして高品質なシステムを構築します。</p>
          </div>
          <div className={styles.msgVisual}>SERVICE IMAGE</div>
        </div>
      </div>

      <hr className="divider" />

      {/* SERVICE TYPES */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Service Types</div>
        <h2 className="section-title fade-up">サービスの種類</h2>
        <div className={styles.typeGrid}>
          {[
            { icon: "🏗️", en: "Custom Development", title: "受託開発", text: "お客様の業務要件に合わせたカスタムシステム開発。要件定義から設計・開発・テスト・リリースまで一貫して担当します。スケジュールと品質を両立した安定したデリバリーが強みです。" },
            { icon: "📱", en: "Product Development", title: "プロダクト開発", text: "社員のアイデアを事業化するプロダクト開発にも積極的に取り組んでいます。SaaSや業界特化型ツールの開発経験を活かし、マーケットに刺さるプロダクトを共に作ります。" },
            { icon: "🔧", en: "Maintenance & Operation", title: "保守・運用", text: "リリース後の安定稼働を支えるサポート体制。障害対応から機能改修・パフォーマンスチューニングまで、継続的なシステム改善を行います。" },
            { icon: "🌐", en: "Web Solutions", title: "Web制作・CMS", text: "コーポレートサイトから大規模ECまで対応。WordPressをはじめとするCMSの構築・カスタマイズも得意としています。" },
          ].map((t, i) => (
            <div key={t.en} className={`${styles.typeCard} fade-up fade-up-delay-${(i % 2) + 1}`}>
              <div className={styles.typeIcon}>{t.icon}</div>
              <div className={styles.typeEn}>{t.en}</div>
              <div className={styles.typeTitle}>{t.title}</div>
              <p className={styles.typeText}>{t.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div className={styles.processBg} style={{ padding: "100px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label fade-up">Process</div>
          <h2 className="section-title fade-up">開発プロセス</h2>
          <div className={styles.processGrid}>
            {[
              { num: "01", title: "企画・要件定義", text: "ビジネス目標を深く理解し、最適な要件を定義します。" },
              { num: "02", title: "設計・アーキテクチャ", text: "スケーラブルで保守性の高いシステム設計を行います。" },
              { num: "03", title: "開発・実装", text: "アジャイル手法で迅速かつ高品質に実装します。" },
              { num: "04", title: "テスト・QA", text: "多層的なテストで品質を徹底的に担保します。" },
              { num: "05", title: "リリース・導入支援", text: "スムーズな本番移行と初期サポートを提供します。" },
              { num: "06", title: "保守・改善", text: "継続的な改善でシステムの価値を高め続けます。" },
            ].map((p, i) => (
              <div key={p.num} className={`${styles.processStep} fade-up`}>
                <div className={styles.processNum}>{p.num}</div>
                <div className={styles.processStepTitle}>{p.title}</div>
                <p className={styles.processStepText}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WORKS */}
      <section className="section" style={{ background: "var(--gray-light)" }}>
        <div className="fade-up">
          <div className="section-label">Works</div>
          <h2 className="section-title">制作実績</h2>
          <p className="section-lead">さまざまな業界・規模のプロジェクトで、開発パートナーとして成果を出してきました。</p>
        </div>
        {[
          {
            label: "WORK 01", reverse: false,
            title: "不動産企業向け 物件管理SaaS",
            tags: ["不動産", "React / Node.js", "受託開発"],
            text: "物件情報の一元管理と内見予約のオンライン化を実現するSaaSプロダクトを開発。管理工数を大幅に削減し、業務効率化に貢献しました。",
          },
          {
            label: "WORK 02", reverse: true,
            title: "飲食チェーン向け 店舗オペレーション管理アプリ",
            tags: ["飲食", "Flutter / Firebase", "受託開発"],
            text: "全国50店舗の日次業務報告・在庫管理・シフト管理を一元化するモバイルアプリを開発。現場スタッフの業務負荷を軽減しました。",
          },
          {
            label: "WORK 03", reverse: false,
            title: "社内業務効率化ツール（自社プロダクト）",
            tags: ["自社開発", "Next.js / Python", "プロダクト"],
            text: "SE事業での案件管理・エンジニアスキル管理・マッチング支援を自動化する社内ツールを開発。自社課題を起点としたプロダクト開発の第一歩です。",
          },
        ].map((w, i) => (
          <div key={w.label}>
            <div className={`${styles.workItem}${w.reverse ? " reverse" : ""} fade-up`}>
              <div className={styles.workImg}>WORK IMAGE {i + 1}</div>
              <div>
                <div className={styles.workLabel}>{w.label}</div>
                <div className={styles.workTitle}>{w.title}</div>
                <div className={styles.workMeta}>
                  {w.tags.map((t) => <span key={t} className={styles.workMetaTag}>{t}</span>)}
                </div>
                <p className={styles.workText}>{w.text}</p>
              </div>
            </div>
            {i < 2 && <hr className="divider" style={{ marginBottom: "48px" }} />}
          </div>
        ))}
      </section>

      {/* TECHNOLOGY */}
      <div className="section section-narrow">
        <div className="fade-up">
          <div className="section-label">Technology</div>
          <h2 className="section-title">主な使用技術</h2>
          <p className="section-lead">プロジェクトの要件に応じて、最適な技術スタックを選定します。</p>
        </div>
        <div className={`${styles.techGrid} fade-up`}>
          {[
            { title: "フロントエンド", tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
            { title: "バックエンド", tags: ["Node.js", "Python", "Go", "NestJS"] },
            { title: "インフラ", tags: ["AWS", "Vercel", "Docker", "GitHub Actions"] },
            { title: "モバイル", tags: ["Flutter", "React Native", "Swift"] },
            { title: "データベース", tags: ["PostgreSQL", "Firebase", "Redis"] },
            { title: "デザイン", tags: ["Figma", "Storybook", "Design System"] },
          ].map((t) => (
            <div key={t.title} className={styles.techCard}>
              <div className={styles.techCardTitle}>{t.title}</div>
              <div className={styles.techTags}>{t.tags.map((tag) => <span key={tag} className={styles.techTag}>{tag}</span>)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* OTHER SERVICES */}
      <div className="section section-narrow">
        <div className="fade-up">
          <div className="section-label">Other Services</div>
          <h2 className="section-title">その他のサービス</h2>
        </div>
        <div className={`${styles.svcGrid} fade-up`}>
          <Link href="/service/se" className={styles.svcCard}>
            <div className={styles.svcCardIcon}>💻</div>
            <div className={styles.svcCardTitle}>SE — システムエンジニアリング</div>
            <p className={styles.svcCardText}>クライアントの開発現場にエンジニアを送り出すSES事業。成長を前提としたアサインで、技術力と品質を両立します。</p>
            <span className={styles.svcCardLink}>View Detail →</span>
          </Link>
          <Link href="/service/is" className={styles.svcCard}>
            <div className={styles.svcCardIcon}>📞</div>
            <div className={styles.svcCardTitle}>IS — LEAD TECH</div>
            <p className={styles.svcCardText}>インサイドセールスの戦略設計から実行・改善まで。安定した商談創出の仕組みをつくります。</p>
            <span className={styles.svcCardLink}>View Detail →</span>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="section section-narrow" style={{ paddingTop: 0 }}>
        <div className={`${styles.ctaBox} fade-up`}>
          <div className={styles.ctaTitle}>ソリューションズに関するお問い合わせ</div>
          <p className={styles.ctaText}>開発・システム導入についてお気軽にご相談ください。</p>
          <Link href="/contact" className="btn btn-primary">お問い合わせ →</Link>
        </div>
      </div>
    </>
  );
}
