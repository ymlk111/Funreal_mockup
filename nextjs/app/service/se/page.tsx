import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
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

      {/* HERO META */}
      <div className="section section-narrow" style={{ paddingTop: "60px", paddingBottom: "0" }}>
        <div className={`${styles.heroMeta} fade-up`}>
          {[
            { num: <>Web<span>+AI</span></>, label: "CORE DOMAIN" },
            { num: <>Polyglot</>, label: "対応言語 — MULTI-STACK" },
            { num: <>要件<span>→運用</span></>, label: "FULL LIFECYCLE" },
            { num: <>AWS</>, label: "CLOUD NATIVE" },
          ].map((m, i) => (
            <div key={i} className={styles.heroMetaItem}>
              <div className={styles.heroMetaNum}>{m.num}</div>
              <div className={styles.heroMetaLabel}>{m.label}</div>
            </div>
          ))}
        </div>
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.msgVisual} src={asset("/image/service-se.png")} alt="システムエンジニアリング" loading="lazy" />
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
            { icon: "🤖", title: "AI開発 — 生成AI・機械学習", tags: ["生成AI / LLM", "RAG", "AIエージェント", "PyTorch"], text: "生成AI・機械学習を活用した開発に対応。既存システムへのAI組み込みから新規AIプロダクト開発まで伴走します。" },
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

      {/* LANGUAGES MARQUEE */}
      <div className="section section-narrow" style={{ paddingBottom: "40px" }}>
        <div className="section-label fade-up">Languages</div>
        <h2 className="section-title fade-up">最新からレガシーまで、言語を選ばない開発力</h2>
        <p className="section-lead fade-up">プロジェクトの制約や既存資産に応じて、最適な言語を選定。モダンな新規開発から既存資産の保守・刷新まで幅広く対応します。</p>
      </div>
      <div className={styles.langMarquee}>
        <div className={styles.langTrack}>
          {[...Array(2)].flatMap((_, dup) =>
            [
              ["JavaScript", "on"], ["TypeScript", ""], ["Python", "acc"], ["Java", ""],
              ["C#", "on"], ["C", ""], ["C++", ""], ["VB.NET", "acc"], ["Go", ""],
              ["PHP", "on"], ["Ruby", ""], ["Kotlin", ""], ["Swift", "acc"], ["SQL", ""], ["Rust", ""],
            ].map(([name, variant], i) => (
              <span key={`${dup}-${i}`} style={{ display: "inline-flex", alignItems: "center" }}>
                <span className={`${styles.lang}${variant === "on" ? ` ${styles.langOn}` : variant === "acc" ? ` ${styles.langAcc}` : ""}`}>{name}</span>
                <span className={styles.langSep}>◆</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* DOMAINS (得意領域) */}
      <div className="section section-narrow">
        <div className="fade-up">
          <div className="section-label">Domains</div>
          <h2 className="section-title">各企業の「独自アプリ」を、業務の深いところまで</h2>
          <p className="section-lead">パッケージでは解決しきれない、企業ごとの固有の業務課題に向き合うのが私たちの本領。高い信頼性と規制対応が求められる領域で実力を発揮します。</p>
        </div>
        <div className={styles.domains}>
          <div className={styles.domList}>
            {[
              { num: "01", title: "金融", text: "勘定系・周辺システム、トレーディング、フィンテック。高可用性とセキュリティが要となる領域。", tag: "STRENGTH" },
              { num: "02", title: "保険", text: "契約・査定・保全業務システム、顧客向けWebサービス。複雑な業務ロジックへの対応。", tag: "STRENGTH" },
              { num: "03", title: "公共", text: "自治体・官公庁システム、住民向けサービス。厳格な要件と品質基準への対応実績。", tag: "STRENGTH" },
              { num: "04", title: "企業独自アプリ全般", text: "業種を問わず、自社業務に最適化した独自Webアプリ・基幹システムの開発を支援。", tag: "" },
            ].map((d) => (
              <div key={d.num} className={`${styles.dom} fade-up`}>
                <span className={styles.domNum}>{d.num}</span>
                <div>
                  <div className={styles.domTitle}>{d.title}</div>
                  <p className={styles.domText}>{d.text}</p>
                </div>
                {d.tag && <span className={styles.domTag}>{d.tag}</span>}
              </div>
            ))}
          </div>
          <div className={`${styles.domNote} fade-up`}>
            <div className={styles.domNoteTitle}>規制産業で求められる「止まらない・漏らさない」を、設計から。</div>
            <p className={styles.domNoteText}>金融・保険・公共といったミッションクリティカルな領域では、機能だけでなく信頼性そのものが価値になります。下記を前提に設計・実装します。</p>
            <ul className={styles.domNoteList}>
              <li>可用性・冗長性を考慮したアーキテクチャ設計</li>
              <li>認証認可・データ暗号化によるセキュリティ確保</li>
              <li>監査ログ・トレーサビリティの担保</li>
              <li>各種ガイドライン・コンプライアンスへの対応</li>
            </ul>
          </div>
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

      {/* CASE STUDIES */}
      <section className="section" style={{ background: "var(--gray-light)" }}>
        <div className="fade-up">
          <div className="section-label">Case</div>
          <h2 className="section-title">プロジェクト事例</h2>
          <p className="section-lead">業界・規模を問わず、さまざまな開発プロジェクトにエンジニアが参画しています。</p>
        </div>
        {[
          {
            label: "CASE 01", reverse: false,
            title: "大手EC企業 — 基幹システムリプレイス",
            tags: ["EC / リテール", "Java / Spring Boot", "12ヶ月", "3名参画"],
            text: "老朽化した基幹システムのマイクロサービス化プロジェクトにバックエンドエンジニア3名が参画。API設計からテスト自動化まで一貫して担当し、段階的な移行を実現しました。",
          },
          {
            label: "CASE 02", reverse: true,
            title: "フィンテック企業 — モバイルアプリ新規開発",
            tags: ["金融 / フィンテック", "Flutter / Firebase", "8ヶ月", "2名参画"],
            text: "個人向け資産管理アプリの新規開発にモバイルエンジニアが参画。Flutter × Firebaseのクロスプラットフォーム構成で、iOS/Android同時リリースを達成しました。",
          },
          {
            label: "CASE 03", reverse: false,
            title: "SaaS企業 — インフラ基盤のクラウド移行",
            tags: ["SaaS / BtoB", "AWS / Terraform", "6ヶ月", "1名参画"],
            text: "オンプレミス環境からAWSへの全面移行プロジェクトにインフラエンジニアが参画。IaC化とCI/CDパイプラインの構築を推進し、デプロイ時間を大幅に短縮しました。",
          },
        ].map((c, i) => (
          <div key={c.label}>
            <div className={`${styles.caseItem}${c.reverse ? " reverse" : ""} fade-up`}>
              <div className={styles.caseImg}>CASE IMAGE {i + 1}</div>
              <div>
                <div className={styles.caseLabel}>{c.label}</div>
                <div className={styles.caseTitle}>{c.title}</div>
                <div className={styles.caseMeta}>
                  {c.tags.map((t) => <span key={t} className={styles.caseMetaTag}>{t}</span>)}
                </div>
                <p className={styles.caseText}>{c.text}</p>
              </div>
            </div>
            {i < 2 && <hr className="divider" style={{ marginBottom: "48px" }} />}
          </div>
        ))}
      </section>

      {/* NUMBERS */}
      <section className={`section ${styles.numbersBg}`}>
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-label" style={{ justifyContent: "center", color: "rgba(255,255,255,0.9)" }}>
            <span style={{ color: "rgba(255,255,255,0.9)" }}>Numbers</span>
          </div>
          <h2 className="section-title" style={{ color: "var(--white)" }}>数字で見るSE事業</h2>
        </div>
        <div className={`${styles.numbersGrid} fade-up`}>
          {[
            { value: "50", unit: "+", label: "累計参画プロジェクト数" },
            { value: "6", unit: "", label: "対応技術領域" },
            { value: "95", unit: "%", label: "クライアント継続率" },
            { value: "10", unit: "+", label: "業界カバー数" },
            { value: "3", unit: "年", label: "平均プロジェクト継続期間" },
            { value: "100", unit: "%", label: "エンド直案件比率" },
          ].map((n) => (
            <div key={n.label} className={styles.numItem}>
              <div className={styles.numValue}>{n.value}{n.unit && <span className={styles.numUnit}>{n.unit}</span>}</div>
              <div className={styles.numLabel}>{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RECRUIT CTA + OTHER SERVICES */}
      <section className="section">
        <div className="fade-up" style={{ marginBottom: "80px" }}>
          <div className={styles.recruitCta}>
            <div className={styles.recruitCtaTitle}>エンジニアとして、ファンリアルで働く</div>
            <p className={styles.recruitCtaText}>成長を前提としたアサイン、自由で快適な環境、柔軟なキャリアパス。<br />あなたの「次のステップ」を一緒に見つけませんか。</p>
            <Link href="/recruit" className="btn btn-primary">View Recruit →</Link>
          </div>
        </div>
        <div className="fade-up">
          <div className="section-label">Other Services</div>
          <h2 className="section-title">その他のサービス</h2>
          <p className="section-lead">SE事業以外にも、インサイドセールス支援やソリューション開発など、多角的にサービスを展開しています。</p>
        </div>
        <div className={`${styles.svcGrid} fade-up`}>
          <Link href="/service/is" className={styles.svcCard}>
            <div className={styles.svcCardIcon}>📞</div>
            <div className={styles.svcCardTitle}>IS — LEAD TECH</div>
            <p className={styles.svcCardText}>インサイドセールスの戦略設計から実行・改善まで。安定した商談創出の仕組みをつくり、営業成果を最大化します。</p>
            <span className={styles.svcCardLink}>View Detail →</span>
          </Link>
          <Link href="/solutions" className={styles.svcCard}>
            <div className={styles.svcCardIcon}>💡</div>
            <div className={styles.svcCardTitle}>Solutions — ソリューションズ</div>
            <p className={styles.svcCardText}>受託開発から自社プロダクトまで。企画構想からシステム開発・運用保守を一貫して手がけ、ビジネスの成長を支えます。</p>
            <span className={styles.svcCardLink}>View Detail →</span>
          </Link>
        </div>
      </section>

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
