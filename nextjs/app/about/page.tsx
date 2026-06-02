import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | 株式会社ファンリアル",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-label">About Us</div>
        <h1>人の力が、社会を動かす。</h1>
        <p className="page-hero-sub">
          ITの進化が加速するいま、私たちは「人」の可能性を最大化することに全力を注いでいます。<br />
          個々の「やりたいこと」を実現し、心身ともに豊かなエンジニアが生み出す力で、社会とお客様の発展に貢献します。
        </p>
      </div>

      {/* MISSION */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Mission</div>
        <h2 className="section-title fade-up">私たちの使命</h2>
        <div className={styles.missionGrid}>
          <div className={`${styles.missionText} fade-up`}>
            <p>株式会社ファンリアルは、「自由に、そして楽しく」を合言葉に、エンジニアが本来の力を発揮できる環境づくりを追求しています。</p>
            <p>画一的なキャリアパスに縛られず、一人ひとりの個性と希望に寄り添いながら、技術力と人間力の両面で成長できる場を提供すること。それが私たちの使命です。</p>
            <p>まだ小さな会社ですが、だからこそ一人ひとりの声が届き、一人ひとりの挑戦が会社を動かす。その手触り感を大切にしながら、お客様と社員の双方に価値ある未来を創っていきます。</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={`${styles.missionVisual} fade-up fade-up-delay-1`} src={asset("/image/mission.png")} alt="私たちの使命" loading="lazy" />
        </div>
      </div>

      <hr className="divider" />

      {/* VALUES */}
      <div className={styles.valuesBg} style={{ padding: "100px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label fade-up">Values</div>
          <h2 className="section-title fade-up">私たちが大切にする3つの価値観</h2>
          <p className="section-lead fade-up">これらの価値観は、採用・評価・日々のコミュニケーション、<br />すべての判断基準の土台になっています。</p>
          <div className={styles.valuesGrid}>
            {[
              { num: "01", en: "Freedom", title: "自由であること", text: "画一的なルールに縛られず、個々の裁量を最大限に尊重します。働き方も、キャリアの描き方も、あなた自身が選べる環境であり続けます。" },
              { num: "02", en: "Growth", title: "成長を楽しむこと", text: "強制ではなく、自然と挑戦したくなる環境をつくります。心に余裕があるからこそ芽生える「もっとやってみたい」を、全力で後押しします。" },
              { num: "03", en: "Respect", title: "人を大切にすること", text: "経歴や背景に関わらず、すべての人の可能性を信じます。年齢も社歴も関係ない、フラットで風通しの良い関係性を大切にしています。" },
            ].map((v, i) => (
              <div key={v.num} className={`${styles.valueCard} fade-up fade-up-delay-${i + 1}`}>
                <div className={styles.valueNum}>{v.num}</div>
                <div className={styles.valueEn}>{v.en}</div>
                <div className={styles.valueTitle}>{v.title}</div>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
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

      {/* HISTORY */}
      <div className="section section-narrow">
        <div className="section-label fade-up">History</div>
        <h2 className="section-title fade-up">沿革</h2>
        <p className="section-lead fade-up">設立から現在まで、着実に成長を続けています。</p>
        <div className={styles.historyLine}>
          {[
            { year: "2022.04", text: "株式会社ファンリアル 設立" },
            { year: "2022.XX", text: "初案件獲得（マイルストーン内容は後日）" },
            { year: "2023.XX", text: "社員数◯名突破（マイルストーン内容は後日）" },
            { year: "2024.XX", text: "ソリューション事業開始（マイルストーン内容は後日）" },
            { year: "2025.XX", text: "マイルストーン内容は後日" },
            { year: "2026", text: "採用強化フェーズ開始 — 30名体制を目指して", highlight: true },
          ].map((h) => (
            <div key={h.year} className={`${styles.historyItem} fade-up`}>
              <div className={styles.historyDot} />
              <div className={styles.historyYear}>{h.year}</div>
              <div className={styles.historyText} style={h.highlight ? { color: "var(--blue)", fontWeight: 700 } : undefined}>{h.text}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* ACCESS */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Access</div>
        <h2 className="section-title fade-up">アクセス</h2>
        <div className={`${styles.mapWrapper} fade-up`}>
          <iframe
            src="MAP_EMBED_SRC_HERE"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="株式会社ファンリアル 所在地 — 東京都新宿区西新宿7丁目5番5号"
          />
        </div>
        <p className={`${styles.accessInfo} fade-up`}>
          〒160-0023 東京都新宿区西新宿7丁目5番5号 Plaza西新宿 UCF406<br />
          Tel: 03-6403-4418
        </p>
      </div>

      <hr className="divider" />

      {/* SERVICE LINKS */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Service</div>
        <h2 className="section-title fade-up">私たちのサービス</h2>
        <div className={styles.svcGrid}>
          {[
            { href: "/service/se", icon: "💻", title: "SE事業", text: "お客様のプロジェクトに最適なエンジニアをアサイン。成長を重視した配属で、エンジニアとクライアント双方に価値を提供します。" },
            { href: "/service/is", icon: "📈", title: "IS事業 — LEAD TECH", text: "インサイドセールスの戦略設計から実行・改善まで。安定した商談創出の仕組みをつくり、営業成果を最大化します。" },
            { href: "/solutions", icon: "💡", title: "ソリューションズ", text: "受託開発から自社プロダクトまで。企画構想からシステム開発・運用保守を一貫して手がけ、ビジネスの成長を支えます。" },
          ].map((s, i) => (
            <Link key={s.href} href={s.href} className={`${styles.svcCard} fade-up fade-up-delay-${i + 1}`}>
              <div className={styles.svcCardIcon}>{s.icon}</div>
              <div className={styles.svcCardTitle}>{s.title}</div>
              <p className={styles.svcCardText}>{s.text}</p>
              <span className={styles.svcCardLink}>View More →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* RECRUIT CTA */}
      <div className="section section-narrow" style={{ paddingTop: 0 }}>
        <div className={`${styles.recruitCta} fade-up`}>
          <div className={styles.recruitCtaTitle}>一緒に働きませんか？</div>
          <p className={styles.recruitCtaText}>
            ファンリアルでは、様々なポジションで仲間を募集しています。<br />
            完璧な経歴は必要ありません。まずはお気軽にご連絡ください。
          </p>
          <Link href="/recruit" className="btn btn-primary">採用情報を見る →</Link>
        </div>
      </div>
    </>
  );
}
