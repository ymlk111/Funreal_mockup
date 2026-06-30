"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { asset } from "@/lib/asset";
import { useDrawer } from "@/hooks/useDrawer";

export default function Header() {
  const { isOpen, subOpen, openDrawer, closeDrawer, toggleSub } = useDrawer();
  const pathname = usePathname();
  // トップページのみ透過ヒーロー演出。下層ページは常時不透明の白ヘッダー。
  const isTop = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isTop) return;
    const onScroll = () => {
      // トップはヒーロー画像を通過してから不透明化。
      const hero = document.getElementById("hero");
      const threshold = hero ? hero.offsetHeight - 64 : window.innerHeight - 64;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isTop]);

  // トップ以外、またはトップでスクロール後は不透明ヘッダー
  const solid = !isTop || scrolled;
  // IS・リファラルページはダークテーマのため、ヘッダー・ドロワーも各ページの配色に合わせる
  const darkKind = pathname === "/service/is" ? "is" : pathname === "/referral" ? "referral" : "";
  const isDark = darkKind !== "";

  return (
    <>
      <div
        className={`drawer-overlay${isOpen ? " open" : ""}`}
        onClick={closeDrawer}
      />
      <div className={`drawer${isOpen ? " open" : ""}${darkKind ? ` drawer-${darkKind}` : ""}`} id="drawer">
        <button className="drawer-close" onClick={closeDrawer}>&#x2715;</button>
        <nav>
          <ul>
            <li><Link href="/about" onClick={closeDrawer}>About Us（会社概要）</Link></li>
            <li className="has-sub">
              <a href="#" onClick={toggleSub}>サービス</a>
              <ul className={`drawer-sub${subOpen ? " open" : ""}`}>
                <li><Link href="/service/se" onClick={closeDrawer}>SES</Link></li>
                <li><Link href="/service/is" onClick={closeDrawer}>IS（インサイドセールス）</Link></li>
                <li><Link href="/solutions" onClick={closeDrawer}>ソリューションズ</Link></li>
              </ul>
            </li>
            <li className="drawer-recruit"><Link href="/recruit" onClick={closeDrawer}>採用情報</Link></li>
            <li><Link href="/contact" onClick={closeDrawer}>お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
      <header className={`${solid ? "scrolled" : ""}${isDark ? " is-dark" : ""}`}>
        <Link href="/" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-img" src={asset("/logo.png")} alt="株式会社ファンリアル" />
          <span className="logo-text">株式会社ファンリアル</span>
        </Link>
        <div className="header-right">
          <Link href="/recruit" className="header-entry-btn">メンバー募集中</Link>
          <div className="hamburger" onClick={openDrawer} role="button" aria-label="メニューを開く">
            <span /><span /><span />
          </div>
        </div>
      </header>
    </>
  );
}
