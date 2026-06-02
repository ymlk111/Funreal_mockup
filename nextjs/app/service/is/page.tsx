"use client";
import Link from "next/link";
import { useState } from "react";
import { asset } from "@/lib/asset";
import styles from "../se/page.module.css";

export default function ServiceISPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-label">IS — LEAD TECH</div>
        <h1>インサイドセールス</h1>
        <p className="page-hero-sub">
          インサイドセールスの戦略設計から実行・改善まで。<br />
          安定した商談創出の仕組みをつくり、営業成果を最大化します。
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Overview</div>
        <h2 className="section-title fade-up">IS事業について</h2>
        <div className={`${styles.msgGrid} fade-up`}>
          <div className={styles.msgText}>
            <p>ファンリアルのIS事業「LEAD TECH」は、インサイドセールスを科学的・戦略的に設計・実行する専門サービスです。単なるコールセンターではなく、データ分析と営業ノウハウを組み合わせた高度なインサイドセールス支援を提供します。</p>
            <p>新規商談の創出から既存顧客のフォローアップまで、貴社の営業組織に最適な形でインサイドセールス機能を構築します。戦略立案から実際の運用・改善サイクルまで、一貫してサポートします。</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.msgVisual} src={asset("/image/service-is.png")} alt="インサイドセールス" loading="lazy" />
        </div>
      </div>

      <hr className="divider" />

      {/* STRENGTHS */}
      <div className={styles.strengthsBg} style={{ padding: "100px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-label fade-up">Strengths</div>
          <h2 className="section-title fade-up">LEAD TECHの3つの強み</h2>
          <div className={styles.strGrid}>
            {[
              { num: "01", en: "Strategy Design", title: "戦略設計から支援", text: "単純な架電代行にとどまらず、ターゲット選定・アプローチ方法・スクリプト設計まで、インサイドセールスの戦略から構築します。" },
              { num: "02", en: "Data-Driven", title: "データドリブンな改善", text: "接触率・商談化率・受注率などのKPIを分析し、PDCAを高速で回します。数字に基づいた継続的な改善で成果を最大化します。" },
              { num: "03", en: "Seamless Handover", title: "シームレスな連携", text: "フィールドセールスとのスムーズな連携を実現。温度感の高いリードを確実に商談につなげる体制を構築します。" },
            ].map((s, i) => (
              <div key={s.num} className={`${styles.strCard} fade-up fade-up-delay-${i + 1}`}>
                <div className={styles.strNum}>{s.num}</div>
                <div className={styles.strEn}>{s.en}</div>
                <div className={styles.strTitle}>{s.title}</div>
                <p className={styles.strText}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE MENU */}
      <div className="section section-narrow">
        <div className="fade-up">
          <div className="section-label">Service Menu</div>
          <h2 className="section-title">提供メニュー</h2>
          <p className="section-lead">課題やフェーズに応じて、最適なメニューを組み合わせてご提案します。</p>
        </div>
        <div className={styles.menuGrid}>
          {[
            { title: "アポイント獲得代行", text: "ターゲットリストに基づき、架電・メールによるアポイント獲得を実行。質の高い商談機会を安定的に創出します。" },
            { title: "リードナーチャリング", text: "獲得済みリードに対して、適切なタイミングでフォローアップ。検討段階を引き上げ、商談化率を最大化します。" },
            { title: "トークスクリプト設計", text: "ターゲットの課題・ペルソナに最適化されたトークスクリプトを設計。再現性の高い営業トークを標準化します。" },
            { title: "営業戦略コンサルティング", text: "ターゲット市場の分析からKPI設計、チーム体制の構築まで。インサイドセールスの立ち上げを包括的に支援します。" },
          ].map((m) => (
            <div key={m.title} className={`${styles.menuCard} fade-up`}>
              <div className={styles.menuCardTitle}>{m.title}</div>
              <div className={styles.menuCardText}>{m.text}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* FLOW */}
      <div className="section section-narrow">
        <div className="section-label fade-up">Flow</div>
        <h2 className="section-title fade-up">サービス導入の流れ</h2>
        <div className={`${styles.flowGrid} fade-up`}>
          {[
            { num: "01", title: "ヒアリング", text: "現状の営業課題・ターゲット・目標をヒアリングします。" },
            { num: "02", title: "戦略設計", text: "最適なインサイドセールス戦略を策定します。" },
            { num: "03", title: "実行・運用", text: "専任チームが施策を実行・PDCAを回します。" },
            { num: "04", title: "改善・報告", text: "定期レポートで成果を確認し、継続改善します。" },
          ].map((s) => (
            <div key={s.num} className={styles.flowStep}>
              <div className={styles.flowNum}>{s.num}</div>
              <div className={styles.flowStepTitle}>{s.title}</div>
              <p className={styles.flowStepText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* NUMBERS */}
      <section className={`section ${styles.numbersBg}`}>
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-label" style={{ justifyContent: "center", color: "rgba(255,255,255,0.9)" }}>
            <span style={{ color: "rgba(255,255,255,0.9)" }}>Numbers</span>
          </div>
          <h2 className="section-title" style={{ color: "var(--white)" }}>数字で見るLEAD TECH</h2>
        </div>
        <div className={`${styles.numbersGrid} fade-up`}>
          {[
            { value: "500", unit: "+", label: "月間商談創出数" },
            { value: "8.5", unit: "%", label: "平均アポイント率" },
            { value: "92", unit: "%", label: "クライアント継続率" },
            { value: "30", unit: "+", label: "支援企業数" },
            { value: "15", unit: "+", label: "対応業界数" },
            { value: "2", unit: "週間", label: "最短稼働開始" },
          ].map((n) => (
            <div key={n.label} className={styles.numItem}>
              <div className={styles.numValue}>{n.value}{n.unit && <span className={styles.numUnit}>{n.unit}</span>}</div>
              <div className={styles.numLabel}>{n.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <div className="section section-narrow">
        <div className="fade-up">
          <div className="section-label">Q &amp; A</div>
          <h2 className="section-title">よくあるご質問</h2>
        </div>
        <div className="fade-up">
          {[
            { q: "最低契約期間はありますか？", a: "最低3ヶ月からのご契約を推奨しています。インサイドセールスは施策の検証・改善サイクルが必要なため、成果を出すために一定期間をいただいています。" },
            { q: "自社の営業チームと連携できますか？", a: "はい、可能です。既存の営業チームとの役割分担を設計し、インサイドセールスが獲得したアポイントをスムーズにフィールドセールスへ引き継ぐ体制を構築します。" },
            { q: "どのような業界に対応していますか？", a: "IT・SaaS、人材、不動産、製造業など幅広い業界に対応実績があります。専門性の高い商材についても、事前トレーニングを通じて対応可能です。" },
            { q: "成果報酬型の料金体系はありますか？", a: "基本は固定報酬型ですが、商材やご要望に応じて成果報酬型や併用型のプランもご提案可能です。詳細はお問い合わせください。" },
          ].map((f, i) => (
            <div key={i} className={`${styles.faqItem}${openFaq === i ? " open" : ""}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className={styles.faqQ}>{f.q}</div>
              <div className={styles.faqA}><div className={styles.faqAInner}>{f.a}</div></div>
            </div>
          ))}
        </div>
      </div>

      {/* RECRUIT CTA + OTHER SERVICES */}
      <section className="section">
        <div className="fade-up" style={{ marginBottom: "80px" }}>
          <div className={styles.recruitCta}>
            <div className={styles.recruitCtaTitle}>まずはお気軽にご相談ください</div>
            <p className={styles.recruitCtaText}>インサイドセールスの導入・改善について、<br />貴社の課題に合わせたご提案をいたします。</p>
            <Link href="/contact" className="btn btn-primary">Contact Us →</Link>
          </div>
        </div>
        <div className="fade-up">
          <div className="section-label">Other Services</div>
          <h2 className="section-title">その他のサービス</h2>
          <p className="section-lead">IS事業以外にも、システムエンジニアリングやソリューション開発など、多角的にサービスを展開しています。</p>
        </div>
        <div className={`${styles.svcGrid} fade-up`}>
          <Link href="/service/se" className={styles.svcCard}>
            <div className={styles.svcCardIcon}>💻</div>
            <div className={styles.svcCardTitle}>SE — システムエンジニアリング</div>
            <p className={styles.svcCardText}>クライアントの開発現場にエンジニアを送り出すSES事業。成長を前提としたアサインで技術力と品質を両立します。</p>
            <span className={styles.svcCardLink}>View Detail →</span>
          </Link>
          <Link href="/solutions" className={styles.svcCard}>
            <div className={styles.svcCardIcon}>💡</div>
            <div className={styles.svcCardTitle}>Solutions — ソリューションズ</div>
            <p className={styles.svcCardText}>受託開発から自社プロダクトまで。企画構想からシステム開発・運用保守を一貫して手がけ、ビジネスの成長を支えます。</p>
            <span className={styles.svcCardLink}>View Detail →</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="section section-narrow" style={{ paddingTop: 0 }}>
        <div className={`${styles.ctaBox} fade-up`}>
          <div className={styles.ctaTitle}>IS事業に関するお問い合わせ</div>
          <p className={styles.ctaText}>インサイドセールスの導入・強化についてお気軽にご相談ください。</p>
          <Link href="/contact" className="btn btn-primary">お問い合わせ →</Link>
        </div>
      </div>
    </>
  );
}
