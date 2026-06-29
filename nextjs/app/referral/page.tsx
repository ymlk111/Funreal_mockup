import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ファンリアルの素顔 | 株式会社ファンリアル",
};

const games = [
  { icon: "🎮", title: "League of Legends", desc: "5v5のチーム連携ゲー。社内でも人気で、一緒にランクを回すことも。" },
  { icon: "🔫", title: "VALORANT", desc: "エイムと連携が試される対戦FPS。ランクマを回すメンバーが複数在籍。" },
  { icon: "🛡️", title: "Apex Legends", desc: "スピード感あるバトロワFPS。パーティを組んで一緒に遊ぶ定番タイトル。" },
  { icon: "🎯", title: "ポケモン対戦", desc: "構築・選出・読み合いの三位一体。レーティング戦に本気で挑む人も。" },
  { icon: "⚔️", title: "Eternal Return", desc: "頭脳戦が熱いバトルロイヤルMOBA。立ち回りの総合力が問われる。" },
  { icon: "🕹️", title: "その他いろいろ", desc: "格ゲー・スマホゲー・新作まで。話せばきっと被るタイトルが見つかる。" },
];

const events = [
  { month: "不定期", title: "ゲーム会", text: "オンライン・オフライン問わず、メンバー同士でゲームを楽しむ時間。初心者も大歓迎です。" },
  { month: "定期開催", title: "ボードゲーム会", text: "カタン・ドミニオン・人狼など。毎回誰かが新作を持ち込んで盛り上がります。" },
  { month: "随時", title: "チームビルディング", text: "テーマを決めて、みんなで意見を出し合う場。働き方やイベントの企画まで、会社のことを一緒に考えます。" },
  { month: "随時", title: "ランチ・飲み会", text: "気軽に誘える雰囲気がファンリアルの魅力。もちろん強制参加はなし。" },
];

const hobbies = [
  { emoji: "🎬", name: "映画鑑賞", text: "話題作から名作まで。週末に観た映画の感想で盛り上がることもしばしば。" },
  { emoji: "🖼️", name: "美術鑑賞", text: "美術館・展示巡りが好きなメンバーも。気になる展示情報の共有が活発です。" },
  { emoji: "✈️", name: "旅行", text: "国内外問わずフットワーク軽め。おすすめスポットの話が尽きません。" },
  { emoji: "📣", name: "スポーツ観戦", text: "野球・サッカー・格闘技など。試合の翌日は感想戦で盛り上がります。" },
  { emoji: "📺", name: "アニメ・漫画", text: "今期アニメから名作まで。雑談チャンネルが一番賑わうジャンルです。" },
  { emoji: "💻", name: "個人開発", text: "趣味で何か作るのが好きな人多数。会社のプロジェクトに発展した例も。" },
  { emoji: "💖", name: "推し活", text: "ライブやイベント、グッズ集めまで。推しの話で一気に距離が縮まることもあります。" },
  { emoji: "🎵", name: "音楽", text: "邦楽から洋楽、フェス好きまで。おすすめの一曲を教え合うのが定番です。" },
  { emoji: "🍶", name: "お酒", text: "仕事終わりの一杯を楽しむメンバーも。お酒好き同士、気軽に飲みに行きます。" },
];

const supports = [
  { emoji: "🧭", name: "キャリア・技術", text: "「次に何を学ぶべきか」の道筋を会社が一緒に考えます。現場で困ったときも、先輩エンジニアが気軽に相談に乗ってくれます。" },
  { emoji: "🤝", name: "人間関係", text: "職場やプライベートの人間関係の悩みも、気兼ねなく話せる雰囲気。先輩たちが親身に話を聞いてくれます。" },
  { emoji: "📦", name: "引越し", text: "物件探しのコツや手続きの注意点など。東京での暮らしに詳しいメンバーが、新生活のスタートをサポートします。" },
  { emoji: "🗺️", name: "旅行", text: "行き先選びから穴場スポットまで。旅好きなメンバーが、おすすめの旅行プランの相談に乗ります。" },
  { emoji: "🌱", name: "体調・コンディション", text: "体やメンタルの不調に気づいたら、無理せず相談できる雰囲気。みんなで気にかけ合える環境です。" },
  { emoji: "🗨️", name: "その他（よろず相談）", text: "「ちょっと聞いてほしい」くらいの雑談から、どんな内容でも歓迎。気軽に声をかけてください。" },
];

export default function ReferralPage() {
  return (
    <div className={styles.referral}>
      {/* HERO */}
      <div className={styles.refHero}>
        <div className={styles.refHeroBg} />
        <div className={styles.refHeroParticles} />
        <div className={styles.refHeroContent}>
          <div className={styles.refHeroBadge}>★ For Friends</div>
          <h1 className={styles.refHeroCatch}>ファンリアルの<em>素顔</em>へようこそ。</h1>
          <p className={styles.refHeroSub}>仕事の話の前に、まずは私たちのことを知ってほしい。</p>
        </div>
      </div>

      {/* GAMING */}
      <div className={styles.gamingBg} style={{ padding: "100px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label fade-up">Gaming</div>
          <h2 className="section-title fade-up">ゲームも仕事も、本気の仲間。</h2>
          <p className="section-lead fade-up">
            FPSからMOBA、対戦ゲームまで——いろんなタイトルを遊ぶメンバーが在籍しています。<br />
            仕事の合間や終業後に、メンバー同士でランクを回したり一緒に遊ぶこともよくあります。
          </p>
          <div className={styles.gameGrid}>
            {games.map((g) => (
              <div key={g.title} className={`${styles.gameCard} fade-up`}>
                <div className={styles.gameCardIcon} aria-hidden="true">{g.icon}</div>
                <div className={styles.gameCardTitle}>{g.title}</div>
                <div className={styles.gameCardPlayers}>{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EVENTS */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Events</div>
        <h2 className="section-title fade-up">社内イベント</h2>
        <p className="section-lead fade-up">仕事を離れて、一緒に楽しむ時間を大切にしています。</p>
        <div className={`${styles.eventTimeline} fade-up`}>
          {events.map((e) => (
            <div key={e.title} className={styles.eventItem}>
              <div className={styles.eventDot} />
              <div className={styles.eventTitle}>{e.title}</div>
              <p className={styles.eventText}>{e.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HOBBY */}
      <div className={styles.hobbyBg} style={{ padding: "100px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label fade-up">Hobby &amp; Interest</div>
          <h2 className="section-title fade-up">オフの日も、それぞれ本気。</h2>
          <p className="section-lead fade-up">
            インドアもアウトドアも。オフの過ごし方は人それぞれですが、<br />
            共通の趣味が見つかると、一気に距離が縮まります。
          </p>
          <div className={styles.hobbyGrid}>
            {hobbies.map((h) => (
              <div key={h.name} className={`${styles.hobbyCard} fade-up`}>
                <div className={styles.hobbyEmoji}>{h.emoji}</div>
                <div className={styles.hobbyName}>{h.name}</div>
                <div className={styles.hobbyText}>{h.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUPPORT */}
      <div className={styles.supportBg} style={{ padding: "100px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label fade-up">Support</div>
          <h2 className="section-title fade-up">困ったときは、頼れる仲間がいる。</h2>
          <p className="section-lead fade-up">
            仕事の技術的な壁から、プライベートのちょっとした迷いまで。<br />
            経験豊富な仲間が、気軽に相談に乗ります。ひとりで抱え込まず、いつでも頼ってください。
          </p>
          <div className={styles.hobbyGrid}>
            {supports.map((s) => (
              <div key={s.name} className={`${styles.hobbyCard} fade-up`}>
                <div className={styles.hobbyEmoji}>{s.emoji}</div>
                <div className={styles.hobbyName}>{s.name}</div>
                <p className={styles.supportText}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VOICE */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Voice</div>
        <h2 className="section-title fade-up">メンバーのひとこと</h2>
        <p className="section-lead fade-up">友達に紹介するなら、こう言います。</p>
        <div className={styles.voiceGrid}>
          {[
            { text: "頑張った分だけ正当に評価してもらえるのが一番のやりがい。メンタル面や家庭環境にも配慮があって、土日はしっかり休んで趣味も楽しめています。", name: "R.O さん", role: "開発エンジニア" },
            { text: "社内の距離がとても近くて、人柄の良いメンバーばかり。仕事のこともプライベートのことも、気兼ねなく相談できる環境があります。", name: "J.N さん", role: "運用保守エンジニア" },
            { text: "多趣味な人が多くて共通の話題を見つけやすいし、人間関係がフレンドリー。在宅で浮いた時間を趣味にフル活用できるのも嬉しいです。", name: "K.H さん", role: "開発エンジニア" },
            { text: "週末にメンバーとボードゲームをしたり、オンラインで一緒にゲームをしたり、仕事を離れても仲が良いです。お酒好きな仲間と楽しく飲める時間も、自分にとっては大事なリフレッシュになっています。", name: "T.F さん", role: "開発エンジニア" },
          ].map((v, i) => (
            <div key={i} className={`${styles.voiceCard} fade-up`}>
              <p className={styles.voiceText}>{v.text}</p>
              <div className={styles.voiceMeta}><strong>{v.name}</strong> — {v.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="section section-narrow" style={{ paddingTop: 0 }}>
        <div className={`${styles.ctaBox} fade-up`}>
          <div className={styles.ctaTitle}>気になったら、まずは話してみよう。</div>
          <p className={styles.ctaText}>
            堅苦しい雰囲気は一切ありません。<br />
            趣味の話でも、キャリアの話でも、お気軽にどうぞ。
          </p>
          <div className={styles.ctaActions}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyChjpTrCOZUJYFkMui0hjmTtX3Hnt3YPEBsYoZigtMn_IDA/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-primary">エントリーする →</a>
            <Link href="/recruit" className={styles.ctaSecondary}>採用情報を見る →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
