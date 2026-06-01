import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeUpObserver from "@/components/FadeUpObserver";
import ScrollTop from "@/components/ScrollTop";

export const metadata: Metadata = {
  title: "株式会社ファンリアル | ITで人と企業の未来を拓く",
  description: "株式会社ファンリアルは、SE事業・IS事業・ソリューション事業を通じてITで人と企業の未来を拓くIT企業です。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Inter:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FadeUpObserver />
        <ScrollTop />
      </body>
    </html>
  );
}
