"use client";
import Link from "next/link";
import { useDrawer } from "@/hooks/useDrawer";

export default function Header() {
  const { isOpen, subOpen, openDrawer, closeDrawer, toggleSub } = useDrawer();

  return (
    <>
      <div
        className={`drawer-overlay${isOpen ? " open" : ""}`}
        onClick={closeDrawer}
      />
      <div className={`drawer${isOpen ? " open" : ""}`} id="drawer">
        <button className="drawer-close" onClick={closeDrawer}>&#x2715;</button>
        <nav>
          <ul>
            <li><Link href="/about" onClick={closeDrawer}>About Us（会社概要）</Link></li>
            <li className="has-sub">
              <a href="#" onClick={toggleSub}>サービス</a>
              <ul className={`drawer-sub${subOpen ? " open" : ""}`}>
                <li><Link href="/service/se" onClick={closeDrawer}>SE</Link></li>
                <li><Link href="/service/is" onClick={closeDrawer}>IS</Link></li>
                <li><Link href="/solutions" onClick={closeDrawer}>ソリューションズ</Link></li>
              </ul>
            </li>
            <li><Link href="/recruit" onClick={closeDrawer}>採用情報</Link></li>
            <li><Link href="/contact" onClick={closeDrawer}>お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
      <header>
        <Link href="/" className="logo">
          <div className="logo-ph"><span>LOGO</span></div>
          <span className="logo-text">株式会社ファンリアル</span>
        </Link>
        <div className="header-right">
          <Link href="/recruit#entry" className="header-entry-btn">Entry</Link>
          <div className="hamburger" onClick={openDrawer} role="button" aria-label="メニューを開く">
            <span /><span /><span />
          </div>
        </div>
      </header>
    </>
  );
}
