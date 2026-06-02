import type { NextConfig } from "next";

// GitHub Pages はサブパス (/Funreal_mockup) 配信のため basePath が必要。
// 本番ビルド(GitHub Actions)では NEXT_PUBLIC_BASE_PATH を設定し、
// ローカル開発(next dev)では空("")にしてルートで動かす。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
