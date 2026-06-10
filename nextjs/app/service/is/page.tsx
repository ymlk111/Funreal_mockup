"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

export default function ServiceISPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const arrow = (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
  );

  return (
    <div className={styles.page}>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroGridBg} />
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />
        <div className={styles.heroInner}>
          <div>
            <div className={`${styles.heroEyebrow} fade-up`}>
              <span className={styles.eyebrowPill}>IS Service — LEAD TECH</span>
              <span className={styles.eyebrowSep} />
              <span className={styles.eyebrowTxt}>Inside Sales</span>
            </div>
            <h1 className={`${styles.heroH1} fade-up`}>
              商談を、<br /><span className={styles.acc}>科学する。</span>
            </h1>
            <p className={`${styles.heroDesc} fade-up`}>
              単なる架電代行ではない。<br />
              データと戦略で設計された、<strong>再現性のある商談創出の仕組み</strong>をつくります。
            </p>
            <div className={`${styles.heroBtns} fade-up`}>
              <Link href="/contact" className={styles.btnPrim}>無料相談はこちら {arrow}</Link>
              <a href="#strength" className={styles.btnGhost}>
                <span className={styles.btnGhostLine} />LEAD TECHの強みを見る
              </a>
            </div>
          </div>
          <div className={`${styles.heroRight} fade-up`}>
            {[
              { val: <>500<em>+</em></>, lbl: "月間商談創出数" },
              { val: <>8.5<em>%</em></>, lbl: "平均アポイント率" },
              { val: <>92<em>%</em></>, lbl: "クライアント継続率" },
              { val: <>2<em style={{ fontSize: "20px" }}>週間</em></>, lbl: "最短稼働開始" },
            ].map((s, i) => (
              <div key={i} className={styles.heroStat}>
                <div className={styles.statVal}>{s.val}</div>
                <div className={styles.statLbl}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <div className={styles.problem}>
        <section className={styles.sec}>
          <div className={`${styles.tagRow} fade-up`}><span className={styles.tagDot} /><span className={styles.tagTxt}>こんな課題はありませんか</span></div>
          <h2 className={`${styles.secTtl} fade-up`}>インサイドセールスの<br />&quot;よくある失敗&quot;</h2>
          <div className={styles.probGrid}>
            {[
              { num: "01", title: "架電数だけを追い続けている", desc: "量をこなすだけで質が伴わず、商談化率が低いまま。コストだけが積み重なる状況に陥っていませんか？" },
              { num: "02", title: "データに基づいた改善ができない", desc: "KPIが整備されておらず、何が効いて何が効いていないか分からない。感覚頼りの営業から抜け出せない。" },
              { num: "03", title: "フィールドセールスとの連携が悪い", desc: "アポを取っても引き継ぎがうまくいかず、熱量の低い商談になってしまう。組織の分断が成果を阻んでいる。" },
              { num: "04", title: "外注したが成果が出ない", desc: "代行会社に任せたものの戦略不在のまま実行され、コストだけ発生。自社に知識が残らない状態が続いている。" },
            ].map((p) => (
              <div key={p.num} className={`${styles.probCard} fade-up`}>
                <div className={styles.probNum}>{p.num}</div>
                <div className={styles.probTtl}>{p.title}</div>
                <p className={styles.probDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ===== STRENGTHS ===== */}
      <div className={styles.strengths} id="strength">
        <section className={styles.sec}>
          <div className={`${styles.tagRow} fade-up`}><span className={styles.tagDot} /><span className={styles.tagTxt}>Strengths</span></div>
          <div className={styles.strLayout}>
            <div className={`${styles.strSticky} fade-up`}>
              <h2 className={styles.secTtl}>LEAD TECHが<br />選ばれる<br />3つの理由</h2>
              <p>単なるアポ代行とは根本的に異なります。戦略・実行・改善を一気通貫で担い、貴社の営業組織に本当の変化をもたらします。</p>
            </div>
            <div className={styles.strList}>
              {[
                { num: "01", title: "戦略設計から支援", pill: "Strategy Design", desc: "ターゲット選定・アプローチ方法・スクリプト設計まで、インサイドセールスの戦略から構築。独自のインテントデータを活用し、購買意欲の高い見込み客に絞ってアプローチします。単純な架電代行とは成果の次元が違います。" },
                { num: "02", title: "データドリブンな改善", pill: "Data-Driven", desc: "接触率・商談化率・受注率などのKPIをリアルタイムで分析。感覚ではなく数字でPDCAを高速回転させます。週次レポートで透明性を確保しながら、継続的な改善で成果を積み上げます。" },
                { num: "03", title: "自走できる組織をつくる", pill: "Enablement", desc: "外注で終わらせません。セールスイネーブルメント体制によりノウハウを貴社に移転。将来的に内製化できる強いチームを構築します。フィールドセールスとのシームレスな連携体制も設計します。" },
              ].map((s) => (
                <div key={s.num} className={`${styles.strItem} fade-up`}>
                  <div className={styles.strNum}>{s.num}</div>
                  <div>
                    <div className={styles.strBodyTtl}>{s.title}<span className={styles.strPill}>{s.pill}</span></div>
                    <p className={styles.strBodyDesc}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ===== MENU ===== */}
      <div className={styles.menuSec}>
        <section className={styles.sec}>
          <div className={`${styles.tagRow} fade-up`}><span className={styles.tagDot} /><span className={styles.tagTxt}>Service Menu</span></div>
          <div className={styles.menuHdr}>
            <h2 className={`${styles.secTtl} fade-up`}>提供メニュー</h2>
            <p className={`${styles.secSub} fade-up`}>課題とフェーズに応じて最適な組み合わせをご提案します。</p>
          </div>
          <div className={styles.menuGrid}>
            {[
              { num: "01", title: "アポイント獲得代行", label: "Inside Sales Execution", desc: "ターゲットリストに基づき、架電・メールによるアポイント獲得を実行。インテントデータで絞り込んだ質の高い見込み客に、最適なタイミングでアプローチします。" },
              { num: "02", title: "リードナーチャリング", label: "Lead Nurturing", desc: "既存リードに対して適切なタイミングでフォローアップ。メール・電話・コンテンツを組み合わせたマルチチャネルで検討段階を引き上げ、商談化率を最大化します。" },
              { num: "03", title: "トークスクリプト設計", label: "Script Design", desc: "ターゲットの課題・ペルソナに最適化されたスクリプトを設計。再現性の高い営業トークを標準化し、チーム全体のアポイント率を底上げします。" },
              { num: "04", title: "営業戦略コンサルティング", label: "Strategy Consulting", desc: "ターゲット市場の分析からKPI設計、チーム体制の構築まで。インサイドセールスの立ち上げ・組織化を包括的にサポートします。" },
            ].map((m) => (
              <div key={m.num} className={`${styles.menuCard} fade-up`}>
                <div className={styles.menuNum}>{m.num}</div>
                <div className={styles.menuTtl}>{m.title}</div>
                <p className={styles.menuDesc}>{m.desc}</p>
                <span className={styles.menuLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ===== NUMBERS ===== */}
      <div className={styles.numbers}>
        <section className={styles.sec}>
          <div className={`${styles.tagRow} fade-up`}><span className={styles.tagDot} /><span className={styles.tagTxt}>実績数字</span></div>
          <h2 className={`${styles.secTtl} fade-up`}>数字で見る<br />LEAD TECH</h2>
          <div className={styles.numGrid}>
            {[
              { val: <>500<em>+</em></>, lbl: "月間商談創出数" },
              { val: <>8.5<em>%</em></>, lbl: "平均アポイント率" },
              { val: <>92<em>%</em></>, lbl: "クライアント継続率" },
              { val: <>30<em>+</em></>, lbl: "支援企業数" },
              { val: <>15<em>+</em></>, lbl: "対応業界数" },
              { val: <><em style={{ fontSize: ".5em", verticalAlign: "middle" }}>最短</em>2<em style={{ fontSize: ".4em" }}>週間</em></>, lbl: "稼働開始" },
            ].map((n, i) => (
              <div key={i} className={`${styles.numCell} fade-up`}>
                <div className={styles.numVal}>{n.val}</div>
                <div className={styles.numLbl}>{n.lbl}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ===== FLOW ===== */}
      <div className={styles.flow}>
        <section className={styles.sec}>
          <div className={`${styles.tagRow} fade-up`}><span className={styles.tagDot} /><span className={styles.tagTxt}>導入の流れ</span></div>
          <h2 className={`${styles.secTtl} fade-up`}>最短2週間で<br />稼働開始</h2>
          <div className={styles.flowSteps}>
            {[
              { no: "01", title: "ヒアリング", desc: "営業課題・ターゲット・目標を丁寧にヒアリング。現状の分析から始めます。" },
              { no: "02", title: "戦略設計", desc: "インテントデータを活用した最適戦略を策定。ターゲット・KPI・体制を設計。" },
              { no: "03", title: "実行・運用", desc: "専任チームが施策を実行。週次で進捗を共有しながらPDCAを回します。" },
              { no: "04", title: "改善・定着", desc: "定期レポートで成果確認。改善を継続し、貴社に知識を移転していきます。" },
            ].map((s) => (
              <div key={s.no} className={`${styles.flowStep} fade-up`}>
                <div className={styles.flowCircle}>{s.no}</div>
                <div className={styles.flowTtl}>{s.title}</div>
                <p className={styles.flowDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ===== CTA ===== */}
      <div className={styles.ctaWrap}>
        <div className={`${styles.ctaBox} fade-up`}>
          <div className={styles.ctaPattern} />
          <div className={styles.ctaGlow} />
          <div className={styles.ctaLeft}>
            <div className={styles.ctaEyebrow}>Free Consultation</div>
            <div className={styles.ctaH}>まず、話を<br />聞かせてください。</div>
            <p className={styles.ctaSub}>インサイドセールスの導入・強化について、貴社の課題に合わせた提案をいたします。相談・見積もりは完全無料です。</p>
          </div>
          <div className={styles.ctaRight}>
            <Link href="/contact" className={styles.ctaBtnMain}>
              <span>無料相談を申し込む</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <div className={styles.ctaNotes}>
              {["相談・見積もり完全無料", "2営業日以内にご連絡", "しつこい営業は一切なし"].map((t) => (
                <div key={t} className={styles.ctaNoteRow}>
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>{t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <div className={styles.faq}>
        <section className={styles.sec}>
          <div className={`${styles.tagRow} fade-up`}><span className={styles.tagDot} /><span className={styles.tagTxt}>よくあるご質問</span></div>
          <h2 className={`${styles.secTtl} fade-up`}>FAQ</h2>
          <div className={`${styles.faqList} fade-up`}>
            {[
              { q: "最低契約期間はありますか？", a: "最低3ヶ月からのご契約を推奨しています。インサイドセールスは施策の検証・改善サイクルが必要なため、成果を出すために一定期間をいただいています。まずはお気軽にご相談ください。" },
              { q: "自社の営業チームと連携できますか？", a: "はい、可能です。既存の営業チームとの役割分担を設計し、インサイドセールスが獲得したアポイントをスムーズにフィールドセールスへ引き継ぐ体制を構築します。連携設計もご支援の範囲です。" },
              { q: "どのような業界に対応していますか？", a: "IT・SaaS、人材、不動産、製造業など幅広い業界に対応実績があります。15以上の業界での支援経験を持ち、専門性の高い商材についても事前トレーニングを通じて対応可能です。" },
              { q: "他の代行会社と何が違いますか？", a: "最大の違いは「戦略設計から入る」点と「独自インテントデータを活用できる」点です。多くの代行会社はリストへの架電のみですが、LEAD TECHはターゲット選定・戦略設計から一貫して担い、ノウハウを貴社に残します。" },
            ].map((f, i) => (
              <div key={i} className={`${styles.faqItem}${openFaq === i ? " open" : ""}`}>
                <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className={styles.faqQTxt}>{f.q}</span>
                  <span className={styles.faqIcon}>+</span>
                </button>
                <div className={styles.faqA}><div className={styles.faqAInner}>{f.a}</div></div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ===== FOOTER STRIP ===== */}
      <div className={styles.footerStrip}>
        <div className={styles.footerStripLeft}>インサイドセールスを、<br /><em>次のステージへ。</em></div>
        <Link href="/contact" className={styles.btnPrim}>無料相談を始める {arrow}</Link>
      </div>
    </div>
  );
}
