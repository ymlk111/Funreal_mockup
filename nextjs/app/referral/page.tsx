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
      <div className={styles.refHero} style={{ marginTop: "64px" }}>
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
              { title: "RPG・ARPG", genre: "RPG", players: "個人プレイ共有" },
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
