"use client";
import { useEffect } from "react";
import styles from "./LegalModal.module.css";

export type LegalType = "privacy" | "terms";

const meta: Record<LegalType, { label: string; title: string }> = {
  privacy: { label: "Privacy Policy", title: "プライバシーポリシー" },
  terms: { label: "Terms of Use", title: "利用規約" },
};

function PrivacyContent() {
  return (
    <>
      <p className={styles.intro}>
        株式会社ファンリアル（以下「当社」という）は、当社が取り扱う個人情報の保護の重要性を認識し、「個人情報の保護に関する法律」（以下「個人情報保護法」という）その他関係法令およびガイドラインを遵守するとともに、本プライバシーポリシー（以下「本ポリシー」という）に従い、個人情報を適切に取り扱います。
      </p>

      <section className={styles.section}>
        <h2><span className={styles.no}>1</span>事業者情報</h2>
        <div className={styles.card}>
          <dl>
            <dt>名称</dt><dd>株式会社ファンリアル</dd>
            <dt>所在地</dt><dd>〒160-0023 東京都新宿区西新宿7丁目5番5号 Plaza西新宿 UCF406</dd>
            <dt>代表者</dt><dd>代表取締役 渡邉 悟／代表取締役 羽田 怜生</dd>
          </dl>
        </div>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>2</span>取得する個人情報</h2>
        <p>当社は、お問い合わせフォームへの入力、お問い合わせ、お取引その他の方法を通じて、以下の個人情報を取得することがあります。</p>
        <ul>
          <li>氏名</li>
          <li>会社名・部署名・役職</li>
          <li>電話番号</li>
          <li>住所</li>
          <li>メールアドレス</li>
          <li>お問い合わせの内容</li>
          <li>その他、利用者が当社に対して提供した情報</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>3</span>個人情報の利用目的</h2>
        <p>当社は、取得した個人情報を、次の目的の達成に必要な範囲内で利用します。</p>
        <ul>
          <li>お問い合わせ、ご相談に対する対応および回答のため</li>
          <li>当社サービス（システムエンジニアリングサービス、受託開発、AI開発・導入支援等）のご案内およびご提案のため</li>
          <li>お見積り、商談、契約の締結およびその履行のため</li>
          <li>当社サービス、セミナー、イベントその他の情報を、電子メールその他の方法によりご案内するため（営業活動を含みます）</li>
          <li>取引先およびご担当者様との連絡・情報共有のため</li>
          <li>当社サービスの品質向上および新たなサービスの企画・開発のため</li>
          <li>上記利用目的の達成に必要な範囲で、業務委託先に対して提供するため</li>
        </ul>
        <p className={styles.note}>取得した個人情報を、上記の利用目的の範囲を超えて利用することはありません。利用目的を変更する場合は、変更前の利用目的と関連性を有すると合理的に認められる範囲で行い、本人に通知または公表します。</p>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>4</span>個人情報の第三者提供</h2>
        <p>当社は、次の場合を除き、あらかじめ本人の同意を得ることなく、取得した個人情報を第三者に提供することはありません。</p>
        <ul>
          <li>法令に基づく場合</li>
          <li>人の生命、身体または財産の保護のために必要があり、本人の同意を得ることが困難な場合</li>
          <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要があり、本人の同意を得ることが困難な場合</li>
          <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要があり、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>5</span>個人情報の取扱いの委託</h2>
        <p>当社は、利用目的の達成に必要な範囲内において、個人情報の取扱いの全部または一部を外部に委託する場合があります。この場合、当社は、委託先について適切な調査を行ったうえで、個人情報の安全管理が図られるよう、委託先に対して必要かつ適切な監督を行います。</p>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>6</span>安全管理措置</h2>
        <p>当社は、取り扱う個人情報の漏えい、滅失またはき損の防止その他の安全管理のために、以下を含む必要かつ適切な措置を講じます。</p>
        <ul>
          <li><strong>組織的安全管理措置</strong>：個人情報の取扱いに関する規程等を整備し、責任者を定め、取扱状況を確認できる体制を構築しています。</li>
          <li><strong>人的安全管理措置</strong>：従業者に対し、個人情報の適正な取扱いに関する教育および監督を行っています。</li>
          <li><strong>物理的安全管理措置</strong>：個人情報を取り扱う区域の管理、機器・電子媒体等の盗難・紛失等の防止のための措置を講じています。</li>
          <li><strong>技術的安全管理措置</strong>：個人情報へのアクセス制御、不正アクセスおよび不正ソフトウェアからの保護、通信の暗号化等の措置を講じています。</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>7</span>Cookie等の利用</h2>
        <p>本サイトでは、利用者の利便性向上およびアクセス状況の把握・分析のために、Cookieおよびアクセス解析ツールを利用する場合があります。これらにより取得される情報には、個人を特定する情報は含まれません。利用者はブラウザの設定によりCookieの利用を拒否することができますが、その場合、本サイトの一部機能が利用できないことがあります。</p>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>8</span>個人情報の開示等の請求</h2>
        <p>利用者は、当社が保有する自己の個人情報について、利用目的の通知、開示、内容の訂正・追加・削除、利用の停止・消去、第三者への提供の停止（以下「開示等」という）を請求することができます。</p>
        <p>開示等の請求を希望される場合は、下記のお問い合わせ窓口までご連絡ください。当社所定の手続により、ご本人またはその代理人であることを確認のうえ、合理的な期間内に対応いたします。なお、利用目的の通知および開示の請求については、所定の手数料を申し受ける場合があります。</p>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>9</span>お問い合わせ窓口</h2>
        <p>個人情報の取扱いに関するお問い合わせ、ご相談、苦情および前項の開示等の請求は、下記の窓口までご連絡ください。</p>
        <div className={styles.card}>
          <dl>
            <dt>窓口</dt><dd>株式会社ファンリアル 個人情報保護お問い合わせ窓口</dd>
            <dt>所在地</dt><dd>〒160-0023 東京都新宿区西新宿7丁目5番5号 Plaza西新宿 UCF406</dd>
            <dt>電話</dt><dd>03-6403-4418（受付時間 9:00〜18:00／土日祝を除く）</dd>
          </dl>
        </div>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>10</span>本ポリシーの変更</h2>
        <p>当社は、法令の改正または事業内容の変更等に応じ、本ポリシーの内容を変更することがあります。変更後の本ポリシーは、本サイトに掲載した時点から効力を生じるものとします。</p>
      </section>

      <p className={styles.updated}>制定日：2022年4月25日 ／ 最終改定日：2026年4月1日</p>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <p className={styles.intro}>
        本利用規約（以下「本規約」という）は、株式会社ファンリアル（以下「当社」という）が運営するウェブサイト（以下「本サイト」という）の利用条件を定めるものです。本サイトをご利用になる方（以下「利用者」という）は、本規約に同意のうえご利用ください。
      </p>

      <section className={styles.section}>
        <h2><span className={styles.no}>第1条</span>適用</h2>
        <p>本規約は、利用者と当社との間の本サイトの利用に関わる一切の関係に適用されます。利用者が本サイトを利用した時点で、本規約に同意したものとみなします。</p>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>第2条</span>知的財産権</h2>
        <p>本サイトに掲載されている文章、画像、ロゴ、デザイン、プログラムその他のコンテンツに関する著作権その他の知的財産権は、当社または正当な権利者に帰属します。利用者は、当社の事前の書面による許可なく、これらを複製、転載、改変、公衆送信、配布その他いかなる方法によっても利用してはなりません。</p>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>第3条</span>禁止事項</h2>
        <p>利用者は、本サイトの利用にあたり、以下の行為を行ってはなりません。</p>
        <ul>
          <li>法令または公序良俗に違反する行為</li>
          <li>当社または第三者の知的財産権、プライバシー、名誉、信用その他の権利または利益を侵害する行為</li>
          <li>本サイトの運営を妨害し、またはそのおそれのある行為</li>
          <li>当社のサーバーまたはネットワークに対する不正アクセス、過度な負荷を与える行為</li>
          <li>本サイトを通じて、虚偽の情報を登録または送信する行為</li>
          <li>営業、宣伝、勧誘その他本来の利用目的と異なる目的で本サイトを利用する行為</li>
          <li>その他、当社が不適切と判断する行為</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>第4条</span>免責事項</h2>
        <ul>
          <li>当社は、本サイトに掲載する情報の正確性、完全性、有用性、最新性等について可能な限り注意を払いますが、これらを保証するものではありません。</li>
          <li>当社は、本サイトの利用または利用できなかったことによって利用者に生じた損害について、当社に故意または重大な過失がある場合を除き、一切の責任を負いません。</li>
          <li>本サイトからリンクされた外部のウェブサイトは当社の管理下にないものであり、当社はその内容について一切の責任を負いません。</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>第5条</span>本サイトの変更・中断・終了</h2>
        <p>当社は、利用者に事前の通知をすることなく、本サイトの内容を変更し、または本サイトの提供を中断もしくは終了することができるものとします。これによって利用者に生じた損害について、当社は責任を負いません。</p>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>第6条</span>本規約の変更</h2>
        <p>当社は、必要と判断した場合には、利用者に事前の通知をすることなく、本規約を変更することができるものとします。変更後の本規約は、本サイトに掲載した時点から効力を生じるものとします。</p>
      </section>

      <section className={styles.section}>
        <h2><span className={styles.no}>第7条</span>準拠法・管轄裁判所</h2>
        <p>本規約の解釈にあたっては日本法を準拠法とします。本サイトの利用に関して当社と利用者との間で紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
      </section>

      <p className={styles.updated}>制定日：2022年4月25日 ／ 最終改定日：2026年4月1日</p>
    </>
  );
}

export default function LegalModal({ type, onClose }: { type: LegalType | null; onClose: () => void }) {
  useEffect(() => {
    if (!type) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [type, onClose]);

  if (!type) return null;
  const { label, title } = meta[type];

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.head}>
          <div>
            <div className={styles.headLabel}>{label}</div>
            <div className={styles.title}>{title}</div>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="閉じる">×</button>
        </div>
        <div className={styles.body}>
          {type === "privacy" ? <PrivacyContent /> : <TermsContent />}
        </div>
      </div>
    </div>
  );
}
