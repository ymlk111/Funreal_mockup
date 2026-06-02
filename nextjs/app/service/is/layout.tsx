import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IS — LEAD TECH | 株式会社ファンリアル",
  description:
    "ファンリアルのIS事業「LEAD TECH」。インサイドセールスの戦略設計から実行・改善まで、安定した商談創出の仕組みづくりを支援します。",
};

export default function ServiceISLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
