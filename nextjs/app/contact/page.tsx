"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    if (form.action.includes("GOOGLE_FORM_ACTION_URL")) {
      e.preventDefault();
      alert("【開発者向け】\nGoogle Forms の formResponse URL が未設定です。\naction 属性を差し替えてください。");
      return;
    }
    setTimeout(() => setSubmitted(true), 600);
  }

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-label">Contact</div>
        <h1>お問い合わせ</h1>
        <p className="page-hero-sub">
          サービスに関するご質問・ご相談はお気軽にどうぞ。<br />
          担当者より2営業日以内にご連絡いたします。
        </p>
      </div>

      {/* INQUIRY TYPES */}
      <section className="section" style={{ maxWidth: "780px" }}>
        <div className="fade-up">
          <div className={styles.typeGrid}>
            {[
              { icon: "💬", title: "サービスに関する\nご相談", text: "SE・IS・ソリューションズ各サービスについてのご質問・お見積もり" },
              { icon: "📋", title: "その他の\nお問い合わせ", text: "取材・協業・その他のお問い合わせはこちらから" },
            ].map((t) => (
              <div key={t.title} className={styles.typeCard}>
                <div className={styles.typeIcon}>{t.icon}</div>
                <div className={styles.typeCardTitle}>{t.title.split("\n").map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</div>
                <div className={styles.typeCardText}>{t.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="fade-up">
          <div className="section-label">Form</div>
          <h2 className="section-title">お問い合わせフォーム</h2>
          <p className="section-lead" style={{ marginBottom: "32px" }}>
            <span style={{ color: "var(--red)" }}>*</span> は必須項目です。
          </p>

          <iframe name="form_hidden_target" style={{ display: "none" }} aria-hidden />

          {!submitted ? (
            <form
              id="contactForm"
              action="GOOGLE_FORM_ACTION_URL"
              method="POST"
              target="form_hidden_target"
              onSubmit={handleSubmit}
            >
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>お問い合わせ種別<span className={styles.required}>*</span></label>
                <select className={styles.formSelect} name="entry.XXXXX_INQUIRY_TYPE" required defaultValue="">
                  <option value="" disabled>選択してください</option>
                  <option>サービスに関するご相談</option>
                  <option>お見積もりのご依頼</option>
                  <option>取材・メディア関連</option>
                  <option>協業・パートナーシップ</option>
                  <option>その他</option>
                </select>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>会社名<span className={styles.required}>*</span></label>
                  <input type="text" className={styles.formInput} name="entry.XXXXX_COMPANY" placeholder="株式会社〇〇" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>部署名</label>
                  <input type="text" className={styles.formInput} name="entry.XXXXX_DEPT" placeholder="営業部" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>お名前<span className={styles.required}>*</span></label>
                  <input type="text" className={styles.formInput} name="entry.XXXXX_NAME" placeholder="山田 太郎" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>フリガナ<span className={styles.required}>*</span></label>
                  <input type="text" className={styles.formInput} name="entry.XXXXX_NAME_KANA" placeholder="ヤマダ タロウ" required />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>メールアドレス<span className={styles.required}>*</span></label>
                  <input type="email" className={styles.formInput} name="entry.XXXXX_EMAIL" placeholder="example@company.co.jp" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>電話番号</label>
                  <input type="tel" className={styles.formInput} name="entry.XXXXX_PHONE" placeholder="03-0000-0000" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>お問い合わせ内容<span className={styles.required}>*</span></label>
                <textarea className={styles.formTextarea} name="entry.XXXXX_MESSAGE" placeholder="お問い合わせ内容をご記入ください。" required />
              </div>
              <div className={styles.formSubmit}>
                <button type="submit" className="btn btn-primary">送信する →</button>
              </div>
              <div className={styles.formPrivacy}>
                送信することで、<Link href="/privacy">プライバシーポリシー</Link>に同意したものとみなします。
              </div>
              <div className={styles.formMockupNote}>
                ※ Google Forms の action URL と entry ID を差し替えると送信が有効化されます
              </div>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 24px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(0,170,204,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AACC" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>送信しました</div>
              <p style={{ fontSize: "14px", color: "var(--gray-text)", lineHeight: 2 }}>
                お問い合わせいただきありがとうございます。<br />
                担当者より2営業日以内にご連絡いたします。
              </p>
            </div>
          )}
        </div>
      </section>

      <hr className="divider" />

      {/* COMPANY INFO */}
      <section className="section" style={{ maxWidth: "1100px", background: "var(--gray-light)" }}>
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Company Info</div>
          <h2 className="section-title">お電話でのお問い合わせ</h2>
        </div>
        <div className={`${styles.infoGrid} fade-up`}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📞</div>
            <div className={styles.infoCardTitle}>Telephone</div>
            <div className={styles.infoCardValue} style={{ fontFamily: "var(--font-en)", fontSize: "20px", fontWeight: 700 }}>03-6403-4418</div>
            <div style={{ fontSize: "12px", color: "var(--gray-text)", marginTop: "4px" }}>平日 10:00 - 19:00</div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🕐</div>
            <div className={styles.infoCardTitle}>Business Hours</div>
            <div className={styles.infoCardValue}>平日 10:00 - 19:00<br /><span style={{ fontSize: "12px", color: "var(--gray-text)" }}>土日祝日はお休みです</span></div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>🚫</div>
            <div className={styles.infoCardTitle}>Notice</div>
            <div className={styles.infoCardValue}>営業目的のポスティング・<br />飛び込み営業はご遠慮ください</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ maxWidth: "780px" }}>
        <div className="fade-up">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">よくあるご質問</h2>
        </div>
        <FaqList />
      </section>
    </>
  );
}

function FaqList() {
  const items = [
    { q: "返信までどのくらいかかりますか？", a: "通常、2営業日以内にご連絡いたします。お急ぎの場合は、お電話（03-6403-4418）にてお問い合わせください。" },
    { q: "対応可能なエリアはどこですか？", a: "SE事業・IS事業ともに、基本的に首都圏（東京・神奈川・千葉・埼玉）を中心に対応しています。リモート対応が可能な案件については、全国からのご相談も承ります。" },
    { q: "見積もりだけでも相談できますか？", a: "もちろんです。ご検討段階でのお見積もり・ご相談も歓迎しております。まずはお気軽にお問い合わせください。" },
    { q: "採用に関する問い合わせもここからできますか？", a: "採用に関するお問い合わせ・ご応募は、採用ページの専用エントリーフォームより承っております。お手数ですが採用ページからお進みください。" },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="fade-up">
      {items.map((item, i) => (
        <div key={i} className={styles.faqItem + (openIdx === i ? ` ${styles.faqOpen}` : "")} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
          <div className={styles.faqQ}>{item.q}</div>
          <div className={styles.faqA}><div className={styles.faqAInner}>{item.a}</div></div>
        </div>
      ))}
    </div>
  );
}
