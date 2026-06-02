"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDrawer } from "@/hooks/useDrawer";

export default function Header() {
  const { isOpen, subOpen, openDrawer, closeDrawer, toggleSub } = useDrawer();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const isTop = pathname === "/";
    const onScroll = () => {
      // トップはヒーロー画像(#hero)を通過してから不透明化。
      // 下層ページはヒーローが短いため少しのスクロールで不透明化。
      let threshold = 40;
      if (isTop) {
        const hero = document.getElementById("hero");
        threshold = hero ? hero.offsetHeight - 64 : window.innerHeight - 64;
      }
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

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
      <header className={scrolled ? "scrolled" : ""}>
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
