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

      {/* CREDO */}
      <div className={styles.credoSec}>
        <div className={styles.credoHead}>
          <div className="section-label fade-up" style={{ justifyContent: "center" }}>Our Credo</div>
          <h2 className={`section-title fade-up flow-title`} style={{ fontSize: "clamp(22px,2.8vw,32px)" }}>ファンリアルの3つの信条</h2>
        </div>

        <div className={`${styles.credoIntro} fade-up`}>
          <p className={styles.credoLead}>SESの「めんどくさい」を、できるだけ会社側で消します。</p>
          <p>エンジニアに必要なのは、無駄な社内作業でも、飲み会参加でも、上司へのご機嫌取りでもありません。</p>
          <p>ファンリアルが大事にするのは、現場での仕事、キャリアの希望、そして将来の収入です。</p>
          <p>20代・30代が無理なく成長し、ちゃんと昇給できる会社を目指しています。</p>
        </div>

        <div className={styles.credoList}>
          {/* 信条 1 */}
          <div className={`${styles.credoBlock} fade-up`}>
            <div className={styles.credoNum}>01</div>
            <div className={styles.credoBody}>
              <h3 className={styles.credoTitle}>余計なことで評価しない。現場の仕事で、まっすぐ昇給。</h3>
              <p>ファンリアルでは、エンジニアとしての日々の仕事を一番大切に評価します。</p>
              <p>自社業務の多さ、飲み会への参加、上司へのアピール、少しのミスだけで評価を下げるようなことはしません。</p>
              <p>現場で誠実に働き、任された仕事に向き合ってくれたら、それが一番の評価対象です。</p>
              <p className={styles.credoEmph}>「現場で毎日働いているのに、なぜか評価されない」<br />そんな状態をなくしたいと考えています。</p>
            </div>
          </div>

          {/* 信条 2 */}
          <div className={`${styles.credoBlock} fade-up`}>
            <div className={styles.credoNum}>02</div>
            <div className={styles.credoBody}>
              <h3 className={styles.credoTitle}>案件・技術・働き方の相談は、いつでも歓迎。</h3>
              <ul className={styles.credoQuotes}>
                <li>「この技術を使う案件に挑戦したい」</li>
                <li>「今の案件が合わない」</li>
                <li>「リモートを増やしたい」</li>
                <li>「将来的に単価を上げたい」</li>
              </ul>
              <p>そういう相談は、遠慮なくしてください。</p>
              <p>すぐに希望通りにできないこともあります。でもその場合も、「無理」で終わらせず、どうすれば近づけるのかを一緒に考えます。</p>
              <p>ファンリアルは、エンジニアの希望を会社都合で押しつぶすのではなく、キャリアに近づけるための伴走をします。</p>
            </div>
          </div>

          {/* 信条 3 */}
          <div className={`${styles.credoBlock} fade-up`}>
            <div className={styles.credoNum}>03</div>
            <div className={styles.credoBody}>
              <h3 className={styles.credoTitle}>上下関係ではなく、対等な相談関係をつくる。</h3>
              <p>ファンリアルでは、必要以上の上下関係をつくりたくありません。</p>
              <p>SESにおいて大切なのは、社内の役職よりも、現場でどう働き、どう成長していくかだと考えています。</p>
              <ul className={styles.credoQuotes}>
                <li>技術スタックが違う人から的外れな指示をされる。</li>
                <li>なぜこの人の言うことを聞かなければいけないのか分からない。</li>
                <li>上司の機嫌で評価や働き方が変わる。</li>
              </ul>
              <p>そういったストレスをできるだけ減らし、エンジニアが対等に相談できる組織を目指します。</p>
            </div>
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
        <h2 className="section-title flow-title">募集要項</h2>
        <div className={styles.card} style={{ marginBottom: "48px" }}>
          <div className={styles.cardBody}>
            <div style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 20px" }}>エンジニア（システムエンジニア／プログラマー）</div>
            <table className={styles.jobTable}>
              <tbody>
                <tr><th>仕事内容</th><td>ソフトウェアまたはハードウェア開発における業務全般</td></tr>
                <tr><th>応募資格・求める人材</th><td>システムエンジニア・運用エンジニア・プログラマーの経験者<br />※保有技術・経験年数は不問</td></tr>
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
