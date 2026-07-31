"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const menuItems = [
  ["PAWU 소개", "#about"],
  ["주요 기능", "#features"],
  ["병원과 보호자", "#together"],
  ["문의", "#contact"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="PAWU 홈">
        <span className="brand-icon">
          <Image src="/images/pawu-symbol.png" alt="" width={34} height={34} priority />
        </span>
        <span className="brand-copy">
          <strong>PAWU</strong>
          <small>반려동물 의료 플랫폼</small>
        </span>
      </a>

      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="메뉴 열기"
        aria-expanded={open}
      >
        <span />
        <span />
      </button>

      <nav className={open ? "nav open" : "nav"}>
        {menuItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-cta"
          href="https://pawu-web.vercel.app"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          PAWU 시작하기
        </a>
      </nav>
    </header>
  );
}
