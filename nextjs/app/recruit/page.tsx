import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
import RecruitInterviews from "@/components/RecruitInterviews";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "採用情報 | 株式会社ファンリアル",
};

export default function RecruitPage() {
  return (
    <>
      {/* HERO */}
      <div className={styles.recruitHero}>
        <div
          className={styles.recruitHeroBg}
          style={{ backgroundImage: `url(${asset("/image/hero-image.png")})` }}
        />
        <div className={styles.recruitHeroContent}>
          <h1 className={styles.recruitHeroCatch}>自由に、そして楽しく。</h1>
          <p className={styles.recruitHeroSub}>
            完璧な経歴も、飾った言葉も必要ありません。<br />
            ファンリアルは、あなたらしく息ができる場所です。
          </p>
        </div>
      </div>

      {/* MESSAGE */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Message</div>
        <h2 className={`section-title fade-up flow-title`}>会社からのひとこと</h2>
        <div className={`${styles.messageText} fade-up`}>
          <p>これまでの働く環境で、ご自身のキャリアや会社のルールにミスマッチを感じたことはありませんか？<br />株式会社ファンリアルが大切にしているのは、社員一人ひとりが<span className="hl-flow">「自然体で、長く安心して働けること」</span>です。</p>
          <p>私たちは、画一的なモチベーションの高さを求めたり、過度なプレッシャーをかけたりすることはありません。これまでの枠組みが合わず一度立ち止まってしまった方や、不器用でもコツコツと取り組める方にこそ、当社の柔軟な環境が活きると考えています。</p>
          <p>社内は若手メンバーが多く、年齢や社歴に関わらず<span className="hl-flow">フラットに会話ができる風通しの良さ</span>があります。<br />まずはしっかりと腰を据え、<span className="hl-flow">残業の少ない環境</span>でご自身のペースを取り戻してください。心に余裕が生まれてから、次のステップや新しいやりがいを一緒に見つけていきましょう。</p>
        </div>
        <div className={`${styles.messageName} fade-up`}>株式会社ファンリアル</div>
      </div>

      <hr className="divider" />

      {/* CULTURE HEADER */}
      <div className={styles.cultureHeader}>
        <div className={styles.cultureHeaderInner}>
          <div className="section-label fade-up" style={{ justifyContent: "center" }}>Culture &amp; Environment</div>
          <h2 className={`section-title fade-up flow-title`} style={{ fontSize: "clamp(22px,2.8vw,32px)" }}>ファンリアルの3つの約束</h2>
          <p className="section-lead fade-up" style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            エンゲージメントは、押し付けるものではなく自然と生まれるもの。<br />
            安心して働ける環境の先に、やりがいや挑戦が待っています。
          </p>
        </div>
      </div>

      {/* PILLAR 1 */}
      <div className={styles.pillarRow} style={{ background: "var(--white)" }}>
        <div className={styles.pillarRowInner}>
          <div className={`${styles.pillarVisualWrap} fade-up`}>
            <div className={styles.pillarVisualCircle}>📈</div>
          </div>
          <div className="fade-up fade-up-delay-1">
            <div className={styles.pillarSub}>Growth Assignment</div>
            <h3 className={styles.pillarTitleLg}>エンジニアの「成長」を<br />第一に考えたアサイン</h3>
            <p className={styles.pillarText}>「キャリアが停滞するアサイン」はいたしません。今のあなたにとって最適な働き方と成長のバランスを、営業担当が二人三脚で一緒に見つけていきます。</p>
            <p className={styles.pillarExtra}><span className="hl-flow">「スキルが止まる現場には行かせない」</span>——それが私たちの約束です。現場の状況や技術トレンドを定期的にヒアリングしながら、あなたが確実に前進できる環境を整えます。</p>
          </div>
        </div>
      </div>

      {/* PILLAR 2 */}
      <div className={styles.pillarRow} style={{ background: "#E5F4F9" }}>
        <div className={styles.pillarRowInner}>
          <div className="fade-up">
            <div className={styles.pillarSub}>Freedom &amp; Comfort</div>
            <h3 className={styles.pillarTitleLg}>肩の力を抜いて働ける<br />「圧倒的な自由度」</h3>
            <p className={styles.pillarText}>定着率の高さが証明する居心地の良さは、過度な干渉や厳しすぎるルールのないフラットな社風にあります。残業も少なく、オンとオフを両立させて働くことができます。</p>
            <p className={styles.pillarExtra}>フラットな組織で<span className="hl-flow">上司への気遣いや空気を読んだ残業は不要</span>。好きなゲームや趣味の話で盛り上がれる仲間がいる職場で、ストレスなく自分らしく働けます。</p>
          </div>
          <div className={`${styles.pillarVisualWrap} fade-up fade-up-delay-1`} style={{ order: 1 }}>
            <div className={styles.pillarVisualCircle} style={{ background: "rgba(0,170,204,0.08)" }}>☕</div>
          </div>
        </div>
      </div>

      {/* PILLAR 3 */}
      <div className={styles.pillarRow} style={{ background: "var(--white)" }}>
        <div className={styles.pillarRowInner}>
          <div className={`${styles.pillarVisualWrap} fade-up`}>
            <div className={styles.pillarVisualCircle}>🚩</div>
          </div>
          <div className="fade-up fade-up-delay-1">
            <div className={styles.pillarSub}>Flexible Career Path</div>
            <h3 className={styles.pillarTitleLg}>「やってみたい」を<br />形にできるキャリアパス</h3>
            <p className={styles.pillarText}>やりがいは、強制されるものではなく「選ぶ」もの。個人やチームでの開発プロジェクトを会社の事業として持ち込むことも大歓迎。幅広い雇用形態にも対応しています。</p>
            <p className={styles.pillarExtra}><span className="hl-flow">あなたの「やってみたい」に応える多彩なキャリアパス</span>を用意しています。副業や週3日勤務など、柔軟な雇用形態との組み合わせも可能です。</p>
          </div>
        </div>
      </div>

      {/* MID CTA */}
      <div className={styles.cultureCta}>
        <div className={`${styles.midCta} fade-up`}>
          <p>少しでも気になった方は、まずはカジュアルにお話ししましょう。</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyChjpTrCOZUJYFkMui0hjmTtX3Hnt3YPEBsYoZigtMn_IDA/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: "13px", padding: "14px 40px" }}>エントリーする →</a>
        </div>
      </div>

      {/* NUMBERS */}
      <div className={styles.numbersBg} style={{ padding: "100px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label fade-up" style={{ justifyContent: "center", color: "rgba(255,255,255,0.7)" }}>Numbers</div>
          <h2 className="section-title fade-up" style={{ textAlign: "center", color: "var(--white)", marginBottom: "60px" }}>数字で見るファンリアル</h2>
          <div className={`${styles.numGrid} fade-up`}>
            <div className={styles.numCard}>
              <div className={styles.numCardTitle}>過去5年の成長率</div>
              <svg className={styles.numSvgChart} viewBox="0 0 160 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="62" x2="152" y2="62" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <polygon points="8,54 36,44 64,32 96,18 124,8 152,2 152,62 8,62" fill="rgba(255,255,255,0.08)"/>
                <polyline points="8,54 36,44 64,32 96,18 124,8 152,2" stroke="rgba(255,255,255,0.85)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
                <circle cx="152" cy="2" r="4.5" fill="white"/>
              </svg>
              <div className={styles.numCardValue}>200<span className={styles.numCardUnit}>%</span></div>
            </div>
            <div className={styles.numCard}>
              <div className={styles.numCardTitle}>月平均残業時間</div>
              <svg className={styles.numSvgChart} viewBox="0 0 160 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="62" x2="152" y2="62" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <rect x="14" y="44" width="20" height="18" rx="2" fill="rgba(255,255,255,0.65)"/>
                <rect x="42" y="38" width="20" height="24" rx="2" fill="rgba(255,255,255,0.55)"/>
                <rect x="70" y="42" width="20" height="20" rx="2" fill="rgba(255,255,255,0.75)"/>
                <rect x="98" y="40" width="20" height="22" rx="2" fill="rgba(255,255,255,0.6)"/>
                <rect x="126" y="44" width="20" height="18" rx="2" fill="rgba(255,255,255,0.8)"/>
              </svg>
              <div className={styles.numCardValue}>10<span className={styles.numCardUnit}>h以下</span></div>
            </div>
            <div className={styles.numCard}>
              <div className={styles.numCardTitle}>平均年齢</div>
              <svg className={styles.numSvgChart} viewBox="0 0 160 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="62" x2="152" y2="62" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <rect x="70" y="16" width="20" height="46" rx="2" fill="rgba(255,255,255,0.9)"/>
                <rect x="42" y="38" width="20" height="24" rx="2" fill="rgba(255,255,255,0.55)"/>
                <rect x="98" y="38" width="20" height="24" rx="2" fill="rgba(255,255,255,0.55)"/>
              </svg>
              <div className={styles.numCardValue}>27<span className={styles.numCardUnit}>歳</span></div>
            </div>
            <div className={styles.numCard}>
              <div className={styles.numCardTitle}>未経験入社率</div>
              <svg className={styles.numSvgChart} viewBox="0 0 80 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="38" r="26" stroke="rgba(255,255,255,0.18)" strokeWidth="9" fill="none"/>
                <circle cx="40" cy="38" r="26" stroke="white" strokeWidth="9" fill="none" strokeDasharray="98.0 65.3" strokeLinecap="round" transform="rotate(-90 40 38)"/>
              </svg>
              <div className={styles.numCardValue}>60<span className={styles.numCardUnit}>%</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* INTERVIEW */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Interview</div>
        <h2 className="section-title fade-up flow-title">社員インタビュー</h2>
        <p className="section-lead fade-up">ファンリアルで働く仲間のリアルな声をお届けします。</p>
        <RecruitInterviews />
      </div>

      <hr className="divider" />

      {/* JOB */}
      <div className="section section-narrow">
        <div className="section-label">Recruit</div>
        <h2 className="section-title flow-title">募集職種・条件</h2>
        <div className={styles.card} style={{ marginBottom: "48px" }}>
          <div className={styles.cardBody}>
            <div style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 20px" }}>エンジニア（システムエンジニア／プログラマー）</div>
            <table className={styles.jobTable}>
              <tbody>
                <tr><th>仕事内容</th><td>ソフトウェアまたはハードウェア開発における業務全般</td></tr>
                <tr><th>応募資格・求める人材</th><td>システムエンジニアまたはプログラマーの経験者<br />※保有技術・経験年数は不問</td></tr>
                <tr><th>雇用形態・試用期間</th><td>正社員　※3ヵ月間の試用期間あり</td></tr>
                <tr><th>給与</th><td>月給 30〜50万円（年俸制）<br />基本給にみなし残業分を含む<br />残業が多い場合は別途手当を支給</td></tr>
                <tr><th>勤務地</th><td>首都圏　※参画案件に準ずる</td></tr>
                <tr><th>勤務時間</th><td>9:00〜18:00　※参画案件に準ずる</td></tr>
                <tr><th>昇給</th><td>年1回（4月）</td></tr>
                <tr><th>休日・休暇</th><td>完全週休二日制／祝日休／夏季休暇／年末年始休暇<br />初年度有給15日付与　※4月入社を基準</td></tr>
                <tr><th>待遇・福利厚生</th><td>リモートワーク推進／社員紹介手当あり<br />有給休暇を取得しやすい環境です</td></tr>
                <tr><th>選考プロセス</th><td>下記のフォームより応募の意思をお送りいただいた後、メールにて以降のプロセスを折り返しご連絡いたします。</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* REFERRAL BANNER */}
      <div className="section section-narrow" style={{ paddingBottom: 0 }}>
        <div className={`${styles.referralBanner} fade-up`}>
          <div className={styles.referralBannerTitle}>🎮 友達に紹介されましたか？</div>
          <p className={styles.referralBannerText}>ゲーム好き・ボドゲ好き必見。ファンリアルの「素顔」を覗いてみてください。</p>
          <Link href="/referral" className={styles.referralBannerLink}>ファンリアルの素顔を見る →</Link>
        </div>
      </div>

      {/* ENTRY CTA */}
      <div className="section section-narrow" id="entry" style={{ paddingTop: "48px" }}>
        <div className={`${styles.entryCta} fade-up`}>
          <div className={styles.entryCtaTitle}>私たちと一緒に、新しいスタートを切りませんか？</div>
          <p className={styles.entryCtaText}>
            現在、新しいメンバーの積極採用を行っております。<br />
            少しでも興味をお持ちいただけたら、まずはカジュアルにお話ししましょう。
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyChjpTrCOZUJYFkMui0hjmTtX3Hnt3YPEBsYoZigtMn_IDA/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: "15px", padding: "18px 56px" }}>エントリーする →</a>
          <p style={{ color: "#555", fontSize: "11px", marginTop: "16px", fontFamily: "var(--font-en)" }}>* Google フォームに遷移します</p>
        </div>
      </div>
    </>
  );
}
