import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SE（システムエンジニアリング） | 株式会社ファンリアル",
};

export default function ServiceSEPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-label">SE</div>
        <h1>システムエンジニアリング</h1>
        <p className="page-hero-sub">
          クライアントの開発現場にエンジニアを送り出すSES事業。<br />
          成長を前提としたアサインで、技術力と品質を両立します。
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Overview</div>
        <h2 className="section-title fade-up">SE事業について</h2>
        <div className={`${styles.msgGrid} fade-up`}>
          <div className={styles.msgText}>
            <p>ファンリアルのSE事業は、エンジニアの「成長」を最優先に考えたSES（システムエンジニアリングサービス）です。単なる人材派遣ではなく、エンジニア一人ひとりのキャリアビジョンに寄り添いながら、最適な現場へのアサインを実現します。</p>
            <p>私たちは「スキルが止まる現場には行かせない」という強いコミットメントのもと、技術力の向上と働きやすさの両立を追求しています。エンジニアが安心して成長に集中できる環境を、営業担当が全力でサポートします。</p>
          </div>
          <div className={styles.msgVisual}>SERVICE IMAGE</div>
        </div>
      </div>

      <hr className="divider" />

      {/* STRENGTHS */}
      <div className={styles.strengthsBg} style={{ padding: "100px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label fade-up">Strengths</div>
          <h2 className="section-title fade-up">ファンリアルSEの3つの強み</h2>
          <div className={styles.strGrid}>
            {[
              { num: "01", en: "Growth First", title: "成長を最優先に", text: "スキルアップを前提とした現場選びで、エンジニアのキャリアを積極的にサポート。単調な業務だけに偏ることなく、技術力が着実に伸びる環境を提供します。" },
              { num: "02", en: "Trusted Assignment", title: "信頼できるアサイン", text: "エンジニアの希望・スキル・働き方をヒアリングし、最適な現場をマッチング。「行かせてよかった」と思える配属を全力で追求します。" },
              { num: "03", en: "Continuous Support", title: "継続的なフォロー", text: "アサイン後も定期的な面談でコンディションを確認。困ったことがあればすぐに相談できる体制を整え、長期的なキャリア形成を支援します。" },
            ].map((s, i) => (
              <div key={s.num} className={`${styles.strCard} fade-up fade-up-delay-${i + 1}`}>
                <div className={styles.strNum}>{s.num}</div>
                <div className={styles.strEn}>{s.en}</div>
                <div className={styles.strTitle}>{s.title}</div>
                <p className={styles.strText}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TECHNOLOGY */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Technology</div>
        <h2 className="section-title fade-up">取り扱い技術領域</h2>
        <div className={styles.techGrid}>
          {[
            { icon: "🖥️", title: "フロントエンド開発", tags: ["React", "Vue.js", "TypeScript", "Next.js"], text: "モダンなフロントエンド技術スタックに対応。SPAからSSRまで幅広い開発経験を持つエンジニアを提供します。" },
            { icon: "⚙️", title: "バックエンド開発", tags: ["Java", "Python", "Go", "Node.js"], text: "API設計から実装・テストまで対応。マイクロサービスや大規模システムの経験も豊富です。" },
            { icon: "☁️", title: "クラウド・インフラ", tags: ["AWS", "GCP", "Azure", "Docker"], text: "クラウドサービスの設計・構築・運用に対応。インフラ整備からCI/CD構築まで支援します。" },
          ].map((t, i) => (
            <div key={t.title} className={`${styles.techCard} fade-up fade-up-delay-${i + 1}`}>
              <div className={styles.techIcon}>{t.icon}</div>
              <div className={styles.techCardTitle}>{t.title}</div>
              <div className={styles.techTags}>{t.tags.map((tag) => <span key={tag} className={styles.techTag}>{tag}</span>)}</div>
              <p className={styles.techCardText}>{t.text}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* FLOW */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Flow</div>
        <h2 className="section-title fade-up">ご利用の流れ</h2>
        <div className={`${styles.flowGrid} fade-up`}>
          {[
            { num: "01", title: "お問い合わせ", text: "まずはお気軽にご連絡ください。担当者よりご連絡いたします。" },
            { num: "02", title: "ヒアリング", text: "必要なスキルや現場環境などをお聞かせください。" },
            { num: "03", title: "候補者提案", text: "要件にマッチしたエンジニアをご提案いたします。" },
            { num: "04", title: "面談・契約", text: "面談後、詳細条件を確認し契約を締結します。" },
          ].map((s, i) => (
            <div key={s.num} className={styles.flowStep}>
              <div className={styles.flowNum}>{s.num}</div>
              <div className={styles.flowStepTitle}>{s.title}</div>
              <p className={styles.flowStepText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="section section-narrow" style={{ paddingTop: 0 }}>
        <div className={`${styles.ctaBox} fade-up`}>
          <div className={styles.ctaTitle}>SE事業に関するお問い合わせ</div>
          <p className={styles.ctaText}>エンジニアのアサインについて、まずはお気軽にご相談ください。</p>
          <Link href="/contact" className="btn btn-primary">お問い合わせ →</Link>
        </div>
      </div>
    </>
  );
}
