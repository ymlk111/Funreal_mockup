import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import HeroSamples from "@/components/HeroSamples";
import styles from "./page.module.css";
import rc from "../recruit/page.module.css";

export const metadata: Metadata = {
  title: "デザイン比較サンプル（検討用）",
  robots: { index: false, follow: false },
};

const ENTRY = asset("/image/ToEntry.png");
const REFERRAL = asset("/image/ToReferral.png");
const TOKYO = asset("/image/ToRecruit.png"); // 窓の外に東京タワーが写る素材

// 現行の採用ページ(app/recruit)と同じ構成・同じCSSクラス(rc)を再利用し、
// アイコンの左右配置(mode)だけを差し替えて比較する。
function CredoRow({ reversed, icon, children }: { reversed: boolean; icon: string; children: React.ReactNode }) {
  const visual = (
    <div className={rc.pillarVisualWrap}>
      <div className={rc.pillarVisualCircle} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(icon)} alt="" loading="lazy" />
      </div>
    </div>
  );
  const body = <div className={rc.credoBody}>{children}</div>;
  return (
    <div className={rc.pillarRow}>
      <div className={rc.pillarRowInner}>
        {reversed ? <>{body}{visual}</> : <>{visual}{body}</>}
      </div>
    </div>
  );
}

function CredoFull({ mode }: { mode: "alt" | "right" | "left" }) {
  const rev = (i: number) => (mode === "right" ? true : mode === "left" ? false : i === 1);
  const titleCls = `section-title flow-title ${rc.credoTitle}`;
  return (
    <div className={styles.credoRealWrap}>
      <CredoRow reversed={rev(0)} icon="/image/RecruitIcon1.png">
        <div className={rc.credoNum}>01</div>
        <h3 className={titleCls}>余計なことで評価しない。現場の仕事で、まっすぐ昇給。</h3>
        <p>ファンリアルでは、エンジニアとしての日々の仕事を一番大切に評価します。</p>
        <p>自社業務の多さ、飲み会への参加、上司へのアピール、少しのミスだけで評価を下げるようなことはしません。</p>
        <p>現場で誠実に働き、任された仕事に向き合ってくれたら、それが一番の評価対象です。</p>
        <p className={rc.credoEmph}>「現場で毎日働いているのに、なぜか評価されない」<br />そんな状態をなくしたいと考えています。</p>
      </CredoRow>
      <CredoRow reversed={rev(1)} icon="/image/RecruitIcon2.png">
        <div className={rc.credoNum}>02</div>
        <h3 className={titleCls}>案件・技術・働き方の相談は、いつでも歓迎。</h3>
        <ul className={rc.credoQuotes}>
          <li>「この技術を使う案件に挑戦したい」</li>
          <li>「今の案件が合わない」</li>
          <li>「リモートを増やしたい」</li>
          <li>「将来的に単価を上げたい」</li>
        </ul>
        <p>そういう相談は、遠慮なくしてください。</p>
        <p>すぐに希望通りにできないこともあります。でもその場合も、「無理」で終わらせず、どうすれば近づけるのかを一緒に考えます。</p>
        <p className={rc.credoEmph}>ファンリアルは、エンジニアの希望を会社都合で押しつぶすのではなく、キャリアに近づけるための伴走をします。</p>
      </CredoRow>
      <CredoRow reversed={rev(2)} icon="/image/RecruitIcon3.png">
        <div className={rc.credoNum}>03</div>
        <h3 className={titleCls}>上下関係ではなく、対等な相談関係をつくる。</h3>
        <p>ファンリアルでは、必要以上の上下関係をつくりたくありません。</p>
        <p>SESにおいて大切なのは、社内の役職よりも、現場でどう働き、どう成長していくかだと考えています。</p>
        <ul className={rc.credoQuotes}>
          <li>技術スタックが違う人から的外れな指示をされる。</li>
          <li>なぜこの人の言うことを聞かなければいけないのか分からない。</li>
          <li>上司の機嫌で評価や働き方が変わる。</li>
        </ul>
        <p className={rc.credoEmph}>そういったストレスをできるだけ減らし、エンジニアが対等に相談できる組織を目指します。</p>
      </CredoRow>
    </div>
  );
}

const BLUE_GRAD = "linear-gradient(135deg, #00AACC, #006E8A)";

function CtaSample({
  img, overlay, overlayOpacity, textColor, btn, extraClass, hint,
}: {
  img: string; overlay: string; overlayOpacity: number; textColor: string;
  btn: { bg: string; color: string; border?: string }; extraClass?: string; hint?: string;
}) {
  return (
    <div className={`${styles.cta} ${extraClass ?? ""}`}>
      <div className={styles.ctaImg} style={{ backgroundImage: `url(${img})` }} />
      <div className={styles.ctaOverlay} style={{ background: overlay, opacity: overlayOpacity }} />
      <div className={styles.ctaBody}>
        <h4 style={{ color: textColor }}>私たちと一緒に、新しいスタートを</h4>
        <p style={{ color: textColor === "#fff" ? "rgba(255,255,255,0.9)" : "#274b57" }}>
          少しでも興味をお持ちいただけたら、まずはカジュアルにお話ししましょう。
        </p>
        <a href="#" className={styles.ctaBtn} style={{ background: btn.bg, color: btn.color, border: btn.border ?? "none" }}>
          エントリーする →
        </a>
        {hint ? <div className={styles.hoverHint}>{hint}</div> : null}
      </div>
    </div>
  );
}

function RcBand({
  size, position, minHeight, bg,
}: { size: string; position: string; minHeight: number; bg?: string }) {
  return (
    <div className={styles.rcBand} style={{ minHeight, padding: "56px 48px", background: bg ?? "#062a38" }}>
      <div className={styles.rcImg} style={{ backgroundImage: `url(${TOKYO})`, backgroundSize: size, backgroundPosition: position }} />
      <div className={styles.rcOverlay} />
      <div className={styles.rcInner}>
        <h2 className={styles.rcTitle}>一緒に、未来をつくろう。</h2>
        <p className={styles.rcDesc}>成長を前提としたアサイン、自由で快適な環境、柔軟なキャリアパス。</p>
      </div>
      <a href="#" className={styles.rcBtn}>採用情報を見る →</a>
    </div>
  );
}

export default function SamplesPage() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>デザイン比較サンプル</h1>
      <p className={styles.note}>
        検討用の一時ページ
      </p>

      {/* ============ 1. 信条レイアウト ============ */}
      <section className={styles.sec}>
        <h2 className={styles.secTitle}>1. 3つの信条 — 白背景 + レイアウト</h2>
        <p className={styles.secDesc}>
         
        </p>

        <div className={styles.whiteStage}>
          <div className={styles.introPrev}>
            <div className={styles.introTitle}>ファンリアルの3つの信条</div>
            <div className={styles.introBox}>
              <p className={styles.introLead}>SESの「めんどくさい」を、できるだけ会社側で消します。</p>
              <p>エンジニアに必要なのは、無駄な社内作業でも、飲み会参加でも、上司へのご機嫌取りでもありません。</p>
              <p>ファンリアルが大事にするのは、現場での仕事、キャリアの希望、そして将来の収入です。</p>
              <p>20代・30代が無理なく成長し、ちゃんと昇給できる会社を目指しています。</p>
            </div>
          </div>
        </div>

        <div className={styles.label}>A. 現状（左右交互）</div>
        <CredoFull mode="alt" />

        <div className={styles.label}>B. 画像を右に統一<span className={styles.labelSub}>文字が左でそろう</span></div>
        <CredoFull mode="right" />

        <div className={styles.label}>C. 画像を左に統一<span className={styles.labelSub}>文字が右でそろう</span></div>
        <CredoFull mode="left" />
      </section>

      {/* ============ 2. 採用 / リファラルCTA ============ */}
      <section className={styles.sec}>
        <h2 className={styles.secTitle}>2. 採用・リファラルCTA — 背景の見せ方</h2>
        <p className={styles.secDesc}>
          背景画像（ここでは <code>ToEntry.png</code>）の上に重ねるオーバーレイの濃さ・色のパターン。
          同じ処理をリファラルバナー（<code>ToReferral.png</code>）にも適用できます。ホバー版はカーソルを乗せてお試しください。
        </p>

        <div className={styles.ctaGrid}>
          <div>
            <div className={styles.label}>B1. 現状（青・濃いめ 0.5）</div>
            <CtaSample img={ENTRY} overlay={BLUE_GRAD} overlayOpacity={0.5} textColor="#fff" btn={{ bg: "#fff", color: "#006E8A" }} />
          </div>
          <div>
            <div className={styles.label}>B2. 青・薄め（0.28）背景がよく見える</div>
            <CtaSample img={ENTRY} overlay={BLUE_GRAD} overlayOpacity={0.28} textColor="#fff" btn={{ bg: "#fff", color: "#006E8A" }} />
          </div>
          <div>
            <div className={styles.label}>B3. 白オーバーレイ（文字は濃色）</div>
            <CtaSample img={ENTRY} overlay="#ffffff" overlayOpacity={0.62} textColor="#0a2b36" btn={{ bg: "#00AACC", color: "#fff" }} />
          </div>
          <div>
            <div className={styles.label}>B4. オーバーレイ無し（モヤ無し）</div>
            <CtaSample img={ENTRY} overlay="linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.05))" overlayOpacity={1} textColor="#fff" btn={{ bg: "#fff", color: "#006E8A" }} />
          </div>
          <div>
            <div className={styles.label}>B5. ホバーで裏の画像が見える</div>
            <CtaSample img={ENTRY} overlay={BLUE_GRAD} overlayOpacity={0.8} textColor="#fff" btn={{ bg: "#fff", color: "#006E8A" }} extraClass={styles.hoverReveal} hint="↑ マウスを乗せると背景がくっきり" />
          </div>
          <div>
            <div className={styles.label}>B6. 逆：通常くっきり→ホバーで青</div>
            <CtaSample img={ENTRY} overlay={BLUE_GRAD} overlayOpacity={0.1} textColor="#fff" btn={{ bg: "#fff", color: "#006E8A" }} extraClass={styles.hoverCover} hint="↑ マウスを乗せると青が濃くなる" />
          </div>
        </div>

        <div className={styles.label}>参考：リファラル素材（B2 相当）<span className={styles.labelSub}>ToReferral.png</span></div>
        <CtaSample img={REFERRAL} overlay={BLUE_GRAD} overlayOpacity={0.3} textColor="#fff" btn={{ bg: "#fff", color: "#006E8A" }} />
      </section>

      {/* ============ 3. トップ RECRUIT CTA フレーミング ============ */}
      <section className={styles.sec}>
        <h2 className={styles.secTitle}>3. トップページ RECRUIT CTA — 画像の引き / 縦</h2>
        <p className={styles.secDesc}>
          素材 <code>ToRecruit.png</code> 
        </p>

        <div className={styles.label}>C1. 現状（cover / 中央 / 低め）</div>
        <RcBand size="cover" position="center" minHeight={200} />

        <div className={styles.label}>C2. 縦を伸ばす（cover / 中央 / 高め）</div>
        <RcBand size="cover" position="center" minHeight={380} />

        <div className={styles.label}>C3. 引き＋上を見せる（cover / 上寄せ）<span className={styles.labelSub}>窓＝東京タワーが上部に入る</span></div>
        <RcBand size="cover" position="center top" minHeight={440} />

        <div className={styles.label}>C4. 全景を収める（contain / 濃い地色）<span className={styles.labelSub}>手紙も窓も切らずに全部見せる</span></div>
        <RcBand size="contain" position="right center" minHeight={420} bg="#04202b" />

        <div className={styles.label}>C5. スプリット（右に実画像・全景）</div>
        <div className={styles.rcSplit}>
          <div className={styles.rcSplitText}>
            <h2 className={styles.rcTitle} style={{ textShadow: "none" }}>一緒に、未来をつくろう。</h2>
            <p className={styles.rcDesc} style={{ textShadow: "none", marginBottom: 24 }}>
              成長を前提としたアサイン、自由で快適な環境、柔軟なキャリアパス。
            </p>
            <a href="#" className={styles.rcBtn}>採用情報を見る →</a>
          </div>
          <div className={styles.rcSplitMedia}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={TOKYO} alt="窓の外に東京タワーが見えるデスク" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ============ 4. トップ ヒーロー モーション / 文字 ============ */}
      <section className={styles.sec}>
        <h2 className={styles.secTitle}>4. トップページ ヒーロー — 画像モーション / 文字</h2>
        <p className={styles.secDesc}>
          ヒーロー画像に動きを付ける案と、キャッチコピーの出方・文字色の案です。
          動きは <strong>「再生 ↻」</strong> か <strong>「▶ すべて再生」</strong>で確認できます（実画像 <code>Hero.png</code> 使用）。
        </p>
        <HeroSamples />
      </section>
    </div>
  );
}
