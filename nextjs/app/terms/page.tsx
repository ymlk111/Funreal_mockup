import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | 株式会社ファンリアル",
};

export default function TermsPage() {
  return (
    <>
      <div className="page-hero" style={{ marginTop: "64px", minHeight: "36vh", padding: "80px 60px 60px" }}>
        <div className="page-hero-label">Legal</div>
        <h1>利用規約</h1>
      </div>

      <div className="legal fade-up">
        <p className="legal-intro">
          本利用規約（以下「本規約」）は、株式会社ファンリアル（以下「当社」）が提供するウェブサイト及びサービス（以下「本サービス」）の利用条件を定めるものです。
          ユーザーの皆さまには、本規約に同意いただいた上で、本サービスをご利用いただきます。
        </p>

        <div className="legal-section">
          <h2>第1条 適用</h2>
          <p>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。</p>
        </div>

        <div className="legal-section">
          <h2>第2条 禁止事項</h2>
          <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
          <ul>
            <li>法令または公序良俗に違反する行為</li>
            <li>当社または第三者の知的財産権を侵害する行為</li>
            <li>当社または第三者を誹謗中傷する行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>第3条 免責事項</h2>
          <p>当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</p>
        </div>

        <div className="legal-section">
          <h2>第4条 サービス内容の変更</h2>
          <p>当社は、ユーザーへの事前通知なく、本サービスの内容を変更または中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。</p>
        </div>

        <div className="legal-section">
          <h2>第5条 利用規約の変更</h2>
          <p>当社は、必要と判断した場合には、ユーザーへの事前通知なく本規約を変更することができるものとします。変更後の利用規約は、本ウェブサイトに掲示した時点から効力を生じるものとします。</p>
        </div>

        <div className="legal-section">
          <h2>第6条 準拠法・裁判管轄</h2>
          <p>本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
        </div>

        <p className="legal-updated">最終更新日: 2026年4月1日</p>
      </div>
    </>
  );
}
