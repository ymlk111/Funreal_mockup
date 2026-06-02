import type { Metadata } from "next";
import Link from "next/link";
import styles from "../se/page.module.css";

export const metadata: Metadata = {
  title: "IS — LEAD TECH | 株式会社ファンリアル",
};

export default function ServiceISPage() {
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
          <div className={styles.msgVisual}>SERVICE IMAGE</div>
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
