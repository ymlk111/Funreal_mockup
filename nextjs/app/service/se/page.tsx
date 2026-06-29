import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SES事業（システムエンジニアリング） | 株式会社ファンリアル",
  description:
    "最新のWeb技術とAI開発に強みを持つエンジニアが、要件定義から運用保守まで一貫して伴走するSES事業。",
};

export default function ServiceSEPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={`${styles.eyebrow} fade-up`}>SES / Engineering Partner</div>
          <h1 className={`${styles.heroTitle} fade-up`}>
            企業ごとの「独自課題」を、<br />
            <em>Web × AI</em> の技術力で解決する<br />
            エンジニアリングパートナー。
          </h1>
          <p className={`${styles.heroLead} fade-up`}>
            最新の Web 技術と AI 開発に強みを持つエンジニアが、要件定義から運用保守まで一貫して伴走。金融・保険・公共をはじめとする、止められないシステムの現場で力を発揮します。
          </p>
          <div className={`${styles.heroCta} fade-up`}>
            <Link href="/contact" className={styles.btnPrimary}>お問い合わせ <span className={styles.arr}>→</span></Link>
            <a href="#stack" className={styles.btnGhost}>技術スタックを見る</a>
          </div>
        </div>
      </section>

      {/* ===== SERVICE / VALUE ===== */}
      <section className={`${styles.sec} ${styles.secAlt}`} id="service">
        <div className={styles.secInner}>
          <div className={`${styles.secHead} fade-up`}>
            <div className={styles.eyebrow}>Service</div>
            <h2 className={styles.secTitle}>準委任契約による、技術力の継続的なご提供。</h2>
            <p className={styles.secLead}>受託開発と派遣の中間にある SES（システムエンジニアリングサービス）として、必要なフェーズに、必要なスキルのエンジニアを柔軟にアサイン。チームに溶け込み、成果に貢献します。</p>
          </div>
          <div className={styles.valueGrid}>
            {[
              { vn: "VALUE / 01", title: "Web開発に特化した即戦力", text: "モダンフロントエンドからクラウドネイティブなバックエンドまで、Webアプリ開発の現場経験が豊富なエンジニアをご提供します。" },
              { vn: "VALUE / 02", title: "AI開発まで踏み込める技術幅", text: "生成AI・機械学習を活用した開発に対応。既存システムへのAI組み込みから新規のAIプロダクト開発まで伴走します。" },
              { vn: "VALUE / 03", title: "全フェーズを一気通貫で", text: "要件定義・設計・実装・テスト・運用保守まで、プロジェクトのどの局面でも参画可能。長期の信頼関係を前提に支援します。" },
            ].map((v) => (
              <div key={v.vn} className={`${styles.vcard} fade-up`}>
                <div className={styles.vn}>{v.vn}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className={styles.sec} id="stack">
        <div className={styles.secInner}>
          <div className={`${styles.secHead} fade-up`}>
            <div className={styles.eyebrow}>Tech Stack</div>
            <h2 className={styles.secTitle}>対応領域・技術スタック</h2>
            <p className={styles.secLead}>Web系を中心に、最新技術にも積極的にチャレンジ。型安全性・セキュリティ・信頼性を重視した、堅牢でモダンな技術選定を得意とします。</p>
          </div>
          <div className={styles.stack}>
            {[
              { no: "01", title: "AI開発 — 生成AI・機械学習", feature: true, chips: ["生成AI / LLM活用", "RAG", "AIエージェント", "OpenAI", "Azure OpenAI", "Anthropic Claude", "PyTorch", "TensorFlow", "scikit-learn", "自然言語処理", "画像認識", "MLOps"] },
              { no: "02", title: "フロントエンド", chips: ["React", "Vue.js", "TypeScript", "Next.js", "Nuxt", "Tailwind CSS"] },
              { no: "03", title: "バックエンド", chips: ["Python", "FastAPI / Django", "Java", "Spring Boot", "C#", ".NET / ASP.NET Core", "REST / GraphQL"] },
              { no: "04", title: "インフラ / クラウド", chips: ["ECS / EKS", "Lambda", "RDS", "S3", "API Gateway", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
              { no: "05", title: "品質・セキュリティ", chips: ["認証認可 / 暗号化", "脆弱性診断", "高可用性設計", "監査ログ", "コンプライアンス対応"] },
            ].map((s) => (
              <div key={s.no} className={`${styles.stackcard}${s.feature ? ` ${styles.feature}` : ""} fade-up`}>
                <div className={styles.scHead}>
                  <span className={styles.scNo}>{s.no}</span>
                  <span className={styles.scTitle}>{s.title}</span>
                </div>
                <div className={styles.chips}>
                  {s.chips.map((c) => <span key={c} className={styles.chip}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LANGUAGES ===== */}
      <section className={`${styles.sec} ${styles.secAlt}`} id="lang" style={{ paddingBottom: "60px" }}>
        <div className={styles.secInner}>
          <div className={`${styles.secHead} fade-up`}>
            <div className={styles.eyebrow}>Languages</div>
            <h2 className={styles.secTitle}>最新からレガシーまで、<br />言語を選ばない開発力。</h2>
            <p className={styles.secLead}>プロジェクトの制約や既存資産に応じて、最適な言語を選定。モダンな新規開発はもちろん、金融・公共に多いレガシー資産の保守・刷新まで、幅広い言語に対応します。</p>
          </div>
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
      </section>

      {/* ===== DOMAINS ===== */}
      <section className={styles.sec} id="domains">
        <div className={styles.secInner}>
          <div className={`${styles.secHead} fade-up`}>
            <div className={styles.eyebrow}>Domains</div>
            <h2 className={styles.secTitle}>各企業の「独自アプリ」を、業務の深いところまで。</h2>
            <p className={styles.secLead}>パッケージでは解決しきれない、企業ごとの固有の業務課題に向き合うのが私たちの本領。とりわけ高い信頼性と規制対応が求められる領域で実力を発揮します。</p>
          </div>
          <div className={styles.domains}>
            <div className={styles.domList}>
              {[
                { num: "01", title: "金融", text: "勘定系・周辺システム、トレーディング、フィンテック。高可用性とセキュリティが要となる領域。" },
                { num: "02", title: "保険", text: "契約・査定・保全業務システム、顧客向けWebサービス、業務効率化。複雑な業務ロジックへの対応。" },
                { num: "03", title: "公共", text: "自治体・官公庁システム、住民向けサービス。厳格な要件と品質基準への対応実績。" },
                { num: "04", title: "企業独自アプリ全般", text: "業種を問わず、自社業務に最適化した独自Webアプリ・基幹システムの開発を支援。" },
              ].map((d) => (
                <div key={d.num} className={`${styles.dom} fade-up`}>
                  <span className={styles.domNum}>{d.num}</span>
                  <div>
                    <div className={styles.domTitle}>{d.title}</div>
                    <p className={styles.domText}>{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${styles.domNote} fade-up`}>
              <div className={styles.domNoteTitle}>規制産業で求められる「止まらない・漏らさない」を、設計から。</div>
              <p className={styles.domNoteText}>金融・保険・公共といったミッションクリティカルな領域では、機能だけでなく信頼性そのものが価値になります。私たちは下記を前提に設計・実装します。</p>
              <ul className={styles.domNoteList}>
                <li>可用性・冗長性を考慮したアーキテクチャ設計</li>
                <li>認証認可・データ暗号化によるセキュリティ確保</li>
                <li>監査ログ・トレーサビリティの担保</li>
                <li>各種ガイドライン・コンプライアンスへの対応</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHASES ===== */}
      <section className={`${styles.sec} ${styles.secAlt}`} id="phase">
        <div className={styles.secInner}>
          <div className={`${styles.secHead} fade-up`}>
            <div className={styles.eyebrow}>Phase</div>
            <h2 className={styles.secTitle}>要件定義から運用保守まで、全フェーズに対応。</h2>
            <p className={styles.secLead}>どの工程からでも参画可能。スポットでの技術支援も、長期の開発体制構築も、ご状況に合わせて柔軟に対応します。</p>
          </div>
          <div className={`${styles.phases} fade-up`}>
            {[
              { no: "PH.01", title: "要件定義", text: "業務理解・課題整理・要求仕様の策定を支援。" },
              { no: "PH.02", title: "設計", text: "アーキテクチャ・DB・UI/UXの基本〜詳細設計。" },
              { no: "PH.03", title: "実装", text: "フロント・バック・AI・インフラ構築。" },
              { no: "PH.04", title: "テスト", text: "単体〜総合・セキュリティ試験と品質担保。" },
              { no: "PH.05", title: "運用保守", text: "監視・改善・機能追加まで継続的に伴走。" },
            ].map((p) => (
              <div key={p.no} className={styles.phase}>
                <div className={styles.pno}>{p.no}</div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
                <div className={styles.phaseBar} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STRENGTHS ===== */}
      <section className={styles.sec} id="strength">
        <div className={styles.secInner}>
          <div className={`${styles.secHead} fade-up`}>
            <div className={styles.eyebrow}>Strength</div>
            <h2 className={styles.secTitle}>選ばれる理由</h2>
          </div>
          <div className={styles.strGrid}>
            {[
              { si: "// 01", title: "最新技術への積極投資", text: "生成AIをはじめとする新技術を継続的にキャッチアップ。レガシーに留まらず、最適な技術選定を提案できます。" },
              { si: "// 02", title: "規制産業での信頼性", text: "金融・保険・公共で培った、止められない／漏らせないシステムへの設計思想を、あらゆる案件に還元します。" },
              { si: "// 03", title: "上流から運用まで一気通貫", text: "要件定義の議論から運用改善まで対応できる技術幅で、フェーズをまたいだ価値提供が可能です。" },
              { si: "// 04", title: "Web × AI のかけ算", text: "WebアプリにAIを自然に組み込む実装力。両方を理解するエンジニアだからこその提案ができます。" },
              { si: "// 05", title: "チームへの溶け込み", text: "準委任の枠を超え、プロジェクト成功にコミット。既存チームと一体になって動きます。" },
              { si: "// 06", title: "柔軟な稼働形態", text: "リモート／常駐／ハイブリッド、稼働量もご状況に合わせて柔軟に調整いたします。" },
            ].map((s) => (
              <div key={s.si} className={`${styles.str} fade-up`}>
                <div className={styles.si}>{s.si}</div>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FLOW ===== */}
      <section className={`${styles.sec} ${styles.secAlt}`} id="flow">
        <div className={styles.secInner}>
          <div className={`${styles.secHead} fade-up`}>
            <div className={styles.eyebrow}>Flow</div>
            <h2 className={styles.secTitle}>ご支援の流れ</h2>
            <p className={styles.secLead}>お問い合わせから最短数日でのアサインも可能です。まずはお気軽にご相談ください。</p>
          </div>
          <div className={styles.flow}>
            {[
              { no: "01", title: "お問い合わせ・ヒアリング", text: "必要なスキル・体制・期間・ご予算などをお伺いします。", days: "目安：即日〜" },
              { no: "02", title: "エンジニアのご提案", text: "ご要件に合致するエンジニアのスキルシートをご提示します。", days: "目安：2〜5営業日" },
              { no: "03", title: "面談", text: "スキル・カルチャーフィットをオンライン等でご確認いただきます。", days: "目安：1週間以内" },
              { no: "04", title: "ご契約", text: "準委任契約を締結。条件・精算幅・指揮命令の範囲を明確にします。", days: "—" },
              { no: "05", title: "アサイン・稼働開始", text: "プロジェクトに参画し、継続的に伴走します。", days: "—" },
            ].map((s) => (
              <div key={s.no} className={`${styles.step} fade-up`}>
                <div className={styles.sno}>{s.no}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                  <span className={styles.days}>{s.days}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaSec} id="contact">
        <div className={`${styles.ctaBox} fade-up`}>
          <div className={styles.eyebrow} style={{ justifyContent: "center", color: "rgba(255,255,255,0.9)" }}>Contact</div>
          <h2>Web・AI 開発の体制づくり、<br />まずはご相談ください。</h2>
          <p>「こんなエンジニアはいる？」というご質問だけでも歓迎です。貴社の課題に合わせて、最適なご提案をいたします。</p>
          <div className={styles.heroCta}>
            <Link href="/contact" className={styles.btnOnDark}>お問い合わせ <span className={styles.arr}>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
