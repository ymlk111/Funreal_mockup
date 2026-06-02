import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | 株式会社ファンリアル",
  description:
    "株式会社ファンリアルへのお問い合わせ。SE・IS・ソリューションズ各サービスに関するご質問・ご相談、採用に関するお問い合わせはこちらから。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
