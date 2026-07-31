"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const items = [
  ["PAWU 소개", "#about"],
  ["핵심 기능", "#features"],
  ["병원·보호자", "#experience"],
  ["운영 원칙", "#principle"],
  ["문의", "#contact"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="PAWU 홈">
        <Image src="/images/pawu-symbol.png" alt="" width={34} height={34} priority />
        <span className="brand-copy">
          <strong>PAWU</strong>
          <small>BY BGK</small>
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
        {items.map(([label, href]) => (
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
          서비스 열기
        </a>
      </nav>
    </header>
  );
}
