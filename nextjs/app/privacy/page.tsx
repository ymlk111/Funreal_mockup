import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 株式会社ファンリアル",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero" style={{ minHeight: "36vh", padding: "80px 60px 60px" }}>
        <div className="page-hero-label">Legal</div>
        <h1>プライバシーポリシー</h1>
      </div>

      <div className="legal fade-up">
        <p className="legal-intro">
          株式会社ファンリアル（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下のとおりプライバシーポリシーを定めます。
        </p>

        <div className="legal-section">
          <h2>第1条 個人情報の収集について</h2>
          <p>当社は、サービスの提供にあたり、以下の個人情報を適法かつ公正な手段で収集いたします。</p>
          <ul>
            <li>氏名、メールアドレス、電話番号等の連絡先情報</li>
            <li>お問い合わせ内容</li>
            <li>採用応募に関する情報</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>第2条 個人情報の利用目的</h2>
          <p>収集した個人情報は、以下の目的で利用いたします。</p>
          <ul>
            <li>サービスの提供・運営</li>
            <li>お問い合わせへの回答</li>
            <li>採用選考の実施</li>
            <li>サービスの改善および新サービスの開発</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>第3条 個人情報の第三者提供</h2>
          <p>当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。</p>
        </div>

        <div className="legal-section">
          <h2>第4条 個人情報の管理</h2>
          <p>当社は、個人情報の漏洩、紛失、改ざん等を防止するため、適切な安全管理措置を講じます。</p>
        </div>

        <div className="legal-section">
          <h2>第5条 お問い合わせ</h2>
          <p>個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。</p>
          <p>株式会社ファンリアル<br />TEL: 03-6403-4418<br />所在地: 〒160-0023 東京都新宿区西新宿7-5-5 Plaza西新宿 UCF406</p>
        </div>

        <p className="legal-updated">最終更新日: 2026年4月1日</p>
      </div>
    </>
  );
}
