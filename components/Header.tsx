"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const KAKAO_CHANNEL_URL = "http://pf.kakao.com/_PxfkBX";

const menuItems = [
  ["PAWU 소개", "/#about"],
  ["진료 흐름", "/#journey"],
  ["핵심 기능", "/#features"],
  ["병원 프로그램", "/hospital-download"],
  ["무료 체험", "/#trial"],
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
      <a className="brand" href="/" aria-label="PAWU 홈">
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
          href={KAKAO_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          고객센터
        </a>
        <a className="nav-cta" href="/#trial" onClick={() => setOpen(false)}>
          무료 체험 신청
        </a>
      </nav>
    </header>
  );
}
