"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LegalModal, { type LegalType } from "./LegalModal";
import { asset } from "@/lib/asset";

export default function Footer() {
  const [legal, setLegal] = useState<LegalType | null>(null);
  const pathname = usePathname();
  const variant =
    pathname === "/service/is" ? "footer-dark" :
    pathname === "/referral" ? "footer-night" : "";

  return (
    <footer className={variant}>
      <div className="footer-top">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="footer-logo-img" src={asset("/logo.png")} alt="株式会社ファンリアル" />
          <span className="footer-logo-name">株式会社ファンリアル</span>
        </div>
        <div className="footer-links">
          <button type="button" className="footer-link-btn" onClick={() => setLegal("privacy")}>プライバシーポリシー</button>
          <button type="button" className="footer-link-btn" onClick={() => setLegal("terms")}>利用規約</button>
        </div>
      </div>
      <div className="footer-copy">&#169; 2026 Funreal Inc. All Rights Reserved.</div>
      <LegalModal type={legal} onClose={() => setLegal(null)} />
    </footer>
  );
}
