import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";
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
          <Link href="#entry" className="btn btn-primary" style={{ fontSize: "13px", padding: "14px 40px" }}>Entry →</Link>
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
              <div className={styles.numCardValue}>10<span className={styles.numCardUnit}>h</span></div>
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
          <p style={{ textAlign: "center", marginTop: "32px", fontSize: "11px", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-en)" }}>
            ※ 数値はすべてダミーです。実データに差し替え予定（2026年◯月時点）
          </p>
        </div>
      </div>

      {/* INTERVIEW */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Interview</div>
        <h2 className="section-title fade-up flow-title">社員インタビュー</h2>
        <p className="section-lead fade-up">ファンリアルで働く仲間のリアルな声をお届けします。</p>

        <div className={`${styles.interviewItem} fade-up`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.interviewPhoto} src={asset("/image/member-1.png")} alt="社員インタビュー1" loading="lazy" />
          <div>
            <div className={styles.interviewMeta}>Engineer / 入社2年目</div>
            <div className={styles.interviewTitle}>前の環境で消耗していた私が、<br />自分のペースと新しい目標を見つけるまで</div>
            <div className={styles.interviewQ}>入社のきっかけ</div>
            <p className={styles.interviewA}>以前は規模の大きい企業にいたのですが、希望とは全く違う単調な現場に配属され、残業も多く心身ともにすり減っていました。ファンリアルの面接では、無理に自分を良く見せようとしなくても自然体で話せたこと、「まずは自分のペースで働きなよ」という言葉に惹かれ、入社を決めました。</p>
            <div className={styles.interviewQ}>ファンリアルでの働き方</div>
            <p className={styles.interviewA}>劇的に変わったのは、残業が減りプライベートの時間がしっかり取れるようになったことです。現場配属の際も、「どんなスキルを身につけたいか」「どんな環境なら働きやすいか」を親身にヒアリングしてくれ、先のステップに繋がる現場を任せてもらえています。</p>
          </div>
        </div>

        <div className={`${styles.interviewItem} ${styles.reverse} fade-up`}>
          <div>
            <div className={styles.interviewMeta}>Sales / 入社3年目</div>
            <div className={styles.interviewTitle}>社員インタビュー 2</div>
            <div className={styles.interviewQ}>入社のきっかけ</div>
            <p className={styles.interviewA}>インタビュー内容は取材後に差し替え予定です。</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.interviewPhoto} src={asset("/image/member-2.png")} alt="社員インタビュー2" loading="lazy" />
        </div>
      </div>

      <hr className="divider" />

      {/* JOB */}
      <div className="section section-narrow">
        <div className="section-label">Job</div>
        <h2 className="section-title flow-title">募集職種・条件</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <span className={styles.cardTag}>OPEN</span>
              <div style={{ fontSize: "18px", fontWeight: 700, margin: "8px 0 20px" }}>エンジニア職</div>
              <table className={styles.jobTable}>
                <tbody>
                  <tr><th>雇用形態</th><td>正社員 / 契約社員 / 業務委託 / SES</td></tr>
                  <tr><th>給与</th><td>内容は後日</td></tr>
                  <tr><th>勤務地</th><td>東京都新宿区（リモート相談可）</td></tr>
                  <tr><th>特徴</th><td>未経験歓迎 / キャリアチェンジ可</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <span className={styles.cardTag}>OPEN</span>
              <div style={{ fontSize: "18px", fontWeight: 700, margin: "8px 0 20px" }}>営業職</div>
              <table className={styles.jobTable}>
                <tbody>
                  <tr><th>雇用形態</th><td>正社員</td></tr>
                  <tr><th>給与</th><td>内容は後日</td></tr>
                  <tr><th>勤務地</th><td>東京都新宿区</td></tr>
                  <tr><th>特徴</th><td>エンジニア経験者歓迎</td></tr>
                </tbody>
              </table>
            </div>
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
            現在、様々なポジションで積極採用を行っています。<br />
            少しでも興味をお持ちいただけたら、まずはカジュアルにお話ししましょう。
          </p>
          <a href="#" className="btn btn-primary" style={{ fontSize: "15px", padding: "18px 56px" }}>Entry →</a>
          <p style={{ color: "#555", fontSize: "11px", marginTop: "16px", fontFamily: "var(--font-en)" }}>* Google フォームに遷移します</p>
        </div>
      </div>
    </>
  );
}
