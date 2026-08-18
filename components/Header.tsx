"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const KAKAO_CHANNEL_URL = "http://pf.kakao.com/_PxfkBX";
const menuItems = [
  ["PAWU 소개", "/#about"],
  ["병원", "/#hospital"],
  ["보호자", "/#guardian"],
  ["진료 흐름", "/#journey"],
  ["병원 프로그램", "/hospital-download"],
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
    <header className={`pawu-header ${scrolled ? "scrolled" : ""}`}>
      <div className="pawu-shell pawu-header-inner">
        <a className="pawu-brand" href="/" aria-label="PAWU 홈">
          <span><Image src="/images/pawu-symbol.png" alt="" width={34} height={34} priority /></span>
          <div><strong>PAWU</strong><small>반려동물 의료 플랫폼</small></div>
        </a>
        <button className="pawu-menu-button" type="button" onClick={() => setOpen(!open)} aria-label="메뉴 열기" aria-expanded={open}><span/><span/></button>
        <nav className={open ? "pawu-nav open" : "pawu-nav"}>
          {menuItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a href={KAKAO_CHANNEL_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>고객센터</a>
          <a className="pawu-nav-cta" href="/#trial" onClick={() => setOpen(false)}>무료 체험</a>
        </nav>
      </div>
    </header>
  );
}
