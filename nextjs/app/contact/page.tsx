"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import LegalModal from "../../components/LegalModal";

// お問い合わせ用 Google フォーム（フィールドIDは実フォームに対応済み）
const CONTACT_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdncENwTN68A4Kw_FCCByJBYIFm5m4c9JH3ZvKuieh610COuw/formResponse";
// 採用応募用 Google フォーム（採用ページのエントリーフォームを統合）。
// フィールドID(entry.*)は実フォームに対応済み：
//   1269213289=お名前 / 842213987=フリガナ / 319198680=生年月日(年月日分割)
//   1230833638=メール / 1717321313=電話 / 556935590=希望職種 / 2003474394=その他
const RECRUIT_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSeyChjpTrCOZUJYFkMui0hjmTtX3Hnt3YPEBsYoZigtMn_IDA/formResponse";

type Mode = "contact" | "recruit";

// 上部3カード（フォーム種別で切り替え）
const CONTACT_TYPES = [
  { icon: "💬", title: "サービスについて", text: "SES・IS・各種ソリューションについてのご質問・お見積り" },
  { icon: "🚫", title: "ご遠慮事項", text: "営業目的のポスティング・飛び込み営業はご遠慮ください" },
  { icon: "📋", title: "その他", text: "取材・協業・その他のお問い合わせ" },
];
const RECRUIT_TYPES = [
  { icon: "✉️", title: "まずは気軽にご連絡", text: "応募のハードルは高くありません。少しでも興味があれば、お気軽にご連絡ください。" },
  { icon: "☕", title: "カジュアル面談から", text: "ご連絡後は、まずカジュアル面談。会社のことや働き方を、リラックスした雰囲気でお話しします。" },
  { icon: "💬", title: "やりたいことを一緒に", text: "キャリアの希望や、やってみたいことなど、気になることは何でもお聞かせください。" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("contact");
  const [dob, setDob] = useState(""); // 生年月日（YYYY-MM-DD）。Googleフォームへは年/月/日を分割送信する。

  // 採用ページの「応募」ボタンから /contact#apply で来た場合は採用応募モードで開く
  useEffect(() => {
    const applyHash = () => {
      if (window.location.hash === "#apply") setMode("recruit");
    };
    applyHash();
    // クロスルート遷移直後のハッシュ反映漏れに備えて次tickでも確認
    const t = setTimeout(applyHash, 0);
    window.addEventListener("hashchange", applyHash);
    return () => {
      clearTimeout(t);
      window.removeEventListener("hashchange", applyHash);
    };
  }, []);

  function handleSubmit() {
    // 隠しiframeへ送信されるため、ここでは完了表示のみ行う。
    // ※ クロスオリジンのため実際の成否は取得できない点に留意。
    setTimeout(() => setSubmitted(true), 600);
  }

  return (
    <>
      <div className="page-hero page-hero-slim" data-hero>
        <div className="page-hero-label">Contact</div>
        <h1>お問い合わせ</h1>
        <p className="page-hero-sub">
          ご質問・ご相談はお気軽にどうぞ。<br />
          担当者より5営業日以内にご連絡いたします。
        </p>
      </div>

      {/* INQUIRY TYPES */}
      <section className="section" style={{ maxWidth: "780px" }}>
        <div className="fade-up">
          <div className={styles.typeGrid}>
            {(mode === "recruit" ? RECRUIT_TYPES : CONTACT_TYPES).map((t) => (
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
          <h2 className="section-title">{mode === "recruit" ? "採用応募フォーム" : "お問い合わせフォーム"}</h2>

          {/* お問い合わせ / 採用応募 の切替 */}
          <div className={styles.modeToggle} role="tablist" aria-label="フォーム種別">
            <button type="button" role="tab" aria-selected={mode === "contact"} className={`${styles.modeBtn}${mode === "contact" ? ` ${styles.modeBtnActive}` : ""}`} onClick={() => setMode("contact")}>お問い合わせ</button>
            <button type="button" role="tab" aria-selected={mode === "recruit"} className={`${styles.modeBtn}${mode === "recruit" ? ` ${styles.modeBtnActive}` : ""}`} onClick={() => setMode("recruit")}>採用応募</button>
          </div>

          <p className="section-lead" style={{ marginBottom: "32px" }}>
            <span style={{ color: "var(--red)" }}>*</span> は必須項目です。
          </p>

          <iframe name="form_hidden_target" style={{ display: "none" }} aria-hidden />

          {!submitted ? (
            mode === "contact" ? (
            <form
              id="contactForm"
              action={CONTACT_ACTION}
              method="POST"
              target="form_hidden_target"
              onSubmit={handleSubmit}
            >
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>お問い合わせ種別<span className={styles.required}>*</span></label>
                <select className={styles.formSelect} name="entry.818957223" required defaultValue="">
                  <option value="" disabled>選択してください</option>
                  <option>SESに関するご相談</option>
                  <option>IS・各種ソリューションに関するご相談</option>
                  <option>お見積りのご依頼</option>
                  <option>取材・メディア関連</option>
                  <option>協業・パートナーシップ</option>
                  <option>その他</option>
                </select>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>会社名</label>
                  <input type="text" className={styles.formInput} name="entry.113174893" placeholder="株式会社〇〇" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>部署名</label>
                  <input type="text" className={styles.formInput} name="entry.840725714" placeholder="営業部" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>お名前<span className={styles.required}>*</span></label>
                  <input type="text" className={styles.formInput} name="entry.1238159954" placeholder="山田 太郎" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>フリガナ<span className={styles.required}>*</span></label>
                  <input type="text" className={styles.formInput} name="entry.1599495687" placeholder="ヤマダ タロウ" required />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>メールアドレス<span className={styles.required}>*</span></label>
                  <input type="email" className={styles.formInput} name="entry.96942490" placeholder="example@company.co.jp" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>電話番号<span className={styles.required}>*</span></label>
                  <input type="tel" className={styles.formInput} name="entry.996403375" placeholder="03-0000-0000" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>お問い合わせ内容<span className={styles.required}>*</span></label>
                <textarea className={styles.formTextarea} name="entry.1138150142" placeholder="お問い合わせ内容をご記入ください。" required />
              </div>
              <div className={styles.formSubmit}>
                <button type="submit" className="btn btn-primary">送信する →</button>
              </div>
              <div className={styles.formPrivacy}>
                送信することで、<button type="button" className={styles.privacyLink} onClick={() => setLegalOpen(true)}>プライバシーポリシー</button>に同意したものとみなします。
              </div>
            </form>
            ) : (
            <form
              id="recruitForm"
              action={RECRUIT_ACTION}
              method="POST"
              target="form_hidden_target"
              onSubmit={handleSubmit}
            >
              {/* ▼ 採用応募フィールド：実際の採用Googleフォームの entry ID に対応済み */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>お名前<span className={styles.required}>*</span></label>
                  <input type="text" className={styles.formInput} name="entry.1269213289" placeholder="山田 太郎" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>フリガナ<span className={styles.required}>*</span></label>
                  <input type="text" className={styles.formInput} name="entry.842213987" placeholder="ヤマダ タロウ" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>生年月日<span className={styles.required}>*</span></label>
                <input type="date" className={styles.formInput} value={dob} onChange={(e) => setDob(e.target.value)} required aria-label="生年月日" />
                {/* Googleフォームの日付項目は 年 / 月 / 日 を個別に送信する（月・日は先頭ゼロを除く） */}
                <input type="hidden" name="entry.319198680_year" value={dob ? dob.split("-")[0] : ""} readOnly />
                <input type="hidden" name="entry.319198680_month" value={dob ? String(Number(dob.split("-")[1])) : ""} readOnly />
                <input type="hidden" name="entry.319198680_day" value={dob ? String(Number(dob.split("-")[2])) : ""} readOnly />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>メールアドレス<span className={styles.required}>*</span></label>
                  <input type="email" className={styles.formInput} name="entry.1230833638" placeholder="example@company.co.jp" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>電話番号<span className={styles.required}>*</span></label>
                  <input type="tel" className={styles.formInput} name="entry.1717321313" placeholder="03-0000-0000" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>希望職種<span className={styles.required}>*</span></label>
                <select className={styles.formSelect} name="entry.556935590" required defaultValue="">
                  <option value="" disabled>選択してください</option>
                  <option>エンジニア（SE／プログラマー）</option>
                  <option>運用・保守エンジニア</option>
                  <option>その他</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>その他（ご質問・自己PRなど）</label>
                <textarea className={styles.formTextarea} name="entry.2003474394" placeholder="ご経験や気になること、ご質問などがあればご記入ください。" />
              </div>
              <div className={styles.formSubmit}>
                <button type="submit" className="btn btn-primary">応募する →</button>
              </div>
              <div className={styles.formPrivacy}>
                送信することで、<button type="button" className={styles.privacyLink} onClick={() => setLegalOpen(true)}>プライバシーポリシー</button>に同意したものとみなします。
              </div>
            </form>
            )
          ) : (
            <div style={{ textAlign: "center", padding: "60px 24px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(0,170,204,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00AACC" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>送信しました</div>
              <p style={{ fontSize: "14px", color: "var(--gray-text)", lineHeight: 2 }}>
                {mode === "recruit" ? (
                  <>ご応募ありがとうございます。<br />追って採用担当よりご連絡いたします。</>
                ) : (
                  <>お問い合わせいただきありがとうございます。<br />担当者より5営業日以内にご連絡いたします。</>
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      <hr className="divider" />

      {/* FAQ */}
      <section className="section" style={{ maxWidth: "780px" }}>
        <div className="fade-up">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">よくあるご質問</h2>
        </div>
        <FaqList />
      </section>

      <LegalModal type={legalOpen ? "privacy" : null} onClose={() => setLegalOpen(false)} />
    </>
  );
}

function FaqList() {
  const items = [
    { q: "返信までどのくらいかかりますか？", a: "通常、5営業日以内にご連絡いたします。但し、内容によって返信が不要と判断した場合は、返信いたしかねますのでご了承ください。" },
    { q: "対応可能なエリアはどこですか？", a: "SE事業・IS事業ともに、基本的に首都圏（東京・神奈川・千葉・埼玉）を中心に対応しています。リモート対応が可能な案件については、全国からのご相談も承ります。" },
    { q: "お見積りだけでも相談できますか？", a: "もちろんです。ご検討段階でのお見積り・ご相談も歓迎しております。まずはお気軽にお問い合わせください。" },
    { q: "採用に関する問い合わせもここからできますか？", a: "はい。上部のフォームで「採用応募」に切り替えると、そのままご応募いただけます。ご質問だけの場合も「お問い合わせ」からお気軽にどうぞ。" },
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
