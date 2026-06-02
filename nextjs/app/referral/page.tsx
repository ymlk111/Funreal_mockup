import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ファンリアルの素顔 | 株式会社ファンリアル",
};

export default function ReferralPage() {
  return (
    <>
      {/* HERO */}
      <div className={styles.refHero}>
        <div className={styles.refHeroBg} />
        <div className={styles.refHeroParticles} />
        <div className={styles.refHeroContent}>
          <div className={styles.refHeroBadge}>🎮 For Friends</div>
          <h1 className={styles.refHeroCatch}>ファンリアルの<em>素顔</em>へようこそ。</h1>
          <p className={styles.refHeroSub}>仕事の話の前に、まずは私たちのことを知ってほしい。</p>
        </div>
      </div>

      {/* GAMING */}
      <div className={styles.gamingBg} style={{ padding: "100px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label fade-up" style={{ color: "var(--blue)" }}>Gaming</div>
          <h2 className="section-title fade-up" style={{ color: "var(--white)" }}>ゲーム好きが集まる会社</h2>
          <p className="section-lead fade-up" style={{ color: "rgba(255,255,255,0.6)" }}>
            ファンリアルには、ゲームが大好きなメンバーが多く在籍しています。<br />
            FPS、RPG、ボードゲーム——ジャンルは様々ですが、共通の趣味で盛り上がれる環境です。
          </p>
          <div className={`${styles.gameStatBar} fade-up`}>
            <div className={styles.gameStat}>
              <div className={styles.gameStatNum}>80%</div>
              <div className={styles.gameStatLabel}>ゲーマー率</div>
            </div>
            <div className={styles.gameStat}>
              <div className={styles.gameStatNum}>10+</div>
              <div className={styles.gameStatLabel}>共有タイトル</div>
            </div>
            <div className={styles.gameStat}>
              <div className={styles.gameStatNum}>月1</div>
              <div className={styles.gameStatLabel}>ゲーム会頻度</div>
            </div>
          </div>
          <div className={styles.gameGrid}>
            {[
              { title: "FPS・シューター", genre: "FPS / TPS", players: "複数メンバー参加" },
              { title: "MOBA", genre: "MOBA", players: "チームで連携プレイ" },
              { title: "ボードゲーム", genre: "Board Game", players: "オフライン開催" },
              { title: "オンラインゲーム", genre: "Online", players: "チーム戦" },
            ].map((g) => (
              <div key={g.title} className={`${styles.gameCard} fade-up`}>
                <div className={styles.gameCardImg}>GAME IMAGE</div>
                <div className={styles.gameCardBody}>
                  <div className={styles.gameCardTitle}>{g.title}</div>
                  <div className={styles.gameCardGenre}>{g.genre}</div>
                  <div className={styles.gameCardPlayers}>{g.players}</div>
                </div>
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
          {[
            { month: "不定期", title: "ゲーム会", text: "オンライン・オフライン問わず、みんなでゲームを楽しむ時間。初心者も大歓迎です。" },
            { month: "定期開催", title: "ボードゲームナイト", text: "ボドゲ好きが集まる会。新作から名作まで幅広くプレイしています。" },
            { month: "年1〜2回", title: "チームビルディング", text: "チームの絆を深めるイベント。内容は毎回メンバーのアイデアで決まります。" },
            { month: "随時", title: "ランチ・飲み会", text: "気軽に誘える雰囲気がファンリアルの魅力。強制参加はなし。" },
          ].map((e) => (
            <div key={e.title} className={styles.eventItem}>
              <div className={styles.eventDot} />
              <div className={styles.eventDate}>{e.month}</div>
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
          <h2 className="section-title fade-up">メンバーの趣味いろいろ</h2>
          <p className="section-lead fade-up">
            入社してから新しい趣味が増えた、という声も多数。<br />
            共通点が見つかると、一気に距離が縮まります。
          </p>
          <div className={styles.hobbyGrid}>
            {[
              { emoji: "🎮", name: "ゲーム全般", who: "社内人気 No.1", text: "FPS、MOBA、格ゲー、ソシャゲまで。ジャンル不問で盛り上がれます" },
              { emoji: "🎲", name: "ボードゲーム", who: "月1定期開催", text: "カタン、ドミニオン、人狼etc. 毎回新作を持ち込む猛者も" },
              { emoji: "📺", name: "アニメ・漫画", who: "布教活動が活発", text: "今期のアニメから名作まで。Slackの雑談チャンネルが一番賑やか" },
              { emoji: "🏋", name: "筋トレ・運動", who: "じわじわ増加中", text: "ジム仲間を募集中。リモートワーク太り対策で始めた人多数" },
              { emoji: "☕", name: "カフェ巡り", who: "おすすめマップあり", text: "新宿周辺のカフェ情報はメンバーに聞けば間違いない" },
              { emoji: "💻", name: "個人開発", who: "会社支援あり", text: "趣味の開発が会社のプロジェクトになった事例も。持ち込み企画歓迎" },
            ].map((h) => (
              <div key={h.name} className={`${styles.hobbyCard} fade-up`}>
                <div className={styles.hobbyEmoji}>{h.emoji}</div>
                <div className={styles.hobbyName}>{h.name}</div>
                <div className={styles.hobbyWho}>{h.who}</div>
                <div className={styles.hobbyText}>{h.text}</div>
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
            { text: "前職ではゲームの話なんてできなかったけど、ここは趣味の話で盛り上がれるのがマジで嬉しい。仕事の相談もしやすくなった。", meta: "エンジニア / 20代", year: "入社1年目" },
            { text: "「残業少ないよ」って聞いてたけど、本当に少なくてびっくりした。定時で帰ってランクマ回す生活、最高です。", meta: "エンジニア / 20代", year: "入社2年目" },
            { text: "ボドゲ会がきっかけで、全然違うプロジェクトの先輩と仲良くなれた。縦のつながりがフラットなのはガチ。", meta: "エンジニア / 20代", year: "入社1年目" },
            { text: "未経験で入って不安だったけど、自分のペースでいいよって言ってくれる環境で、気づいたら楽しく仕事してた。", meta: "エンジニア / 20代", year: "入社3年目" },
          ].map((v, i) => (
            <div key={i} className={`${styles.voiceCard} fade-up`}>
              <p className={styles.voiceText}>{v.text}</p>
              <div className={styles.voiceMeta}><strong>{v.meta}</strong> — {v.year}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: "24px", fontSize: "12px", color: "#aaa", fontFamily: "var(--font-en)" }}>※ Voice内容はすべてダミーです</p>
      </div>

      {/* CTA */}
      <div className="section section-narrow" style={{ paddingTop: 0 }}>
        <div className={`${styles.ctaBox} fade-up`}>
          <div className={styles.ctaTitle}>気になったら、まずは話してみよう。</div>
          <p className={styles.ctaText}>
            堅苦しい雰囲気は一切ありません。<br />
            ゲームの話でも、キャリアの話でも、お気軽にどうぞ。
          </p>
          <Link href="/recruit" className="btn btn-primary">採用情報を見る →</Link>
        </div>
      </div>
    </>
  );
}
