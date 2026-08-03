"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const journey = [
  {
    step: "01",
    icon: "📅",
    title: "예약",
    subtitle: "보호자의 신청부터 병원의 확정까지",
    points: [
      "보호자가 반려동물 정보를 선택해 예약을 신청합니다.",
      "병원은 날짜·시간·증상을 한눈에 확인합니다.",
      "승인 또는 거절 결과가 보호자에게 바로 전달됩니다.",
    ],
  },
  {
    step: "02",
    icon: "🐾",
    title: "내원",
    subtitle: "진료 전 필요한 정보를 미리 확인",
    points: [
      "예약된 보호자와 반려동물 정보가 자동으로 연결됩니다.",
      "품종·체중·복용약·특이사항을 빠르게 확인합니다.",
      "이전 진료와 처방 기록을 이어서 살펴볼 수 있습니다.",
    ],
  },
  {
    step: "03",
    icon: "🩺",
    title: "진료",
    subtitle: "기록과 소통을 하나의 화면에서",
    points: [
      "전자차트에 진료 내용과 처방을 기록합니다.",
      "필요한 경우 보호자와 채팅하고 사진을 공유합니다.",
      "입원 환자의 경과도 보호자에게 편리하게 전달합니다.",
    ],
  },
  {
    step: "04",
    icon: "💙",
    title: "진료 완료",
    subtitle: "진료가 끝나도 기록은 계속 연결",
    points: [
      "진료와 처방 내역이 반려동물별로 저장됩니다.",
      "보호자는 앱에서 지난 기록을 언제든 확인합니다.",
      "다음 예약과 일상 건강관리까지 자연스럽게 이어집니다.",
    ],
  },
];

const features = [
  ["💬", "병원·보호자 채팅", "전화가 어려운 순간에도 필요한 내용을 빠르게 주고받습니다."],
  ["📋", "전자차트", "진료와 처방 기록을 반려동물별로 체계적으로 관리합니다."],
  ["🏥", "입원 경과 공유", "사진과 함께 입원 중인 아이의 상태를 보호자에게 전합니다."],
  ["🔔", "알림", "예약 결과와 병원 안내를 놓치지 않도록 전달합니다."],
  ["🐶", "반려동물 정보", "품종, 체중, 복용약과 특이사항을 진료 전 확인합니다."],
  ["💊", "처방 기록", "보호자가 지난 처방과 진료내역을 다시 확인할 수 있습니다."],
];

export default function Home() {
  const [sent, setSent] = useState(false);

  function submitTrial(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const hospital = String(form.get("hospital") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const note = String(form.get("note") || "");

    const subject = encodeURIComponent(`[PAWU 체험 신청] ${hospital || name}`);
    const body = encodeURIComponent(
      `성함: ${name}\n병원명: ${hospital}\n연락처: ${phone}\n이메일: ${email}\n문의사항: ${note}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main id="top">
      <Header />

      <section className="hero landing-hero">
        <div className="hero-blob blob-one" aria-hidden="true" />
        <div className="hero-blob blob-two" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO PAWU</p>
          <h1>
            병원과 보호자의 하루를
            <br />
            <span>하나의 흐름으로.</span>
          </h1>
          <p className="hero-description">
            우편을 읽고 찾아와 주셔서 감사합니다. PAWU가 무엇인지,
            실제 진료 과정에서 어떻게 사용되는지 확인하고 편하게 체험을 신청해 주세요.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#journey">진료 흐름 보기</a>
            <a className="button button-secondary" href="#trial">무료 체험 신청</a>
          </div>
        </div>

        <div className="hero-visual compact-visual">
          <div className="welcome-card">
            <Image src="/images/pawu-symbol.png" alt="PAWU" width={112} height={112} priority />
            <strong>무엇이 궁금하신가요?</strong>
            <a href="#about"><span>01</span> PAWU란?</a>
            <a href="#journey"><span>02</span> 예약부터 진료 완료까지</a>
            <a href="#trial"><span>03</span> 무료 체험 신청</a>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <Reveal>
          <div className="section-label">PAWU란?</div>
          <div className="about-grid">
            <h2>진료 전부터<br />진료 이후까지,<br />계속 이어지는 연결.</h2>
            <div className="about-copy">
              <p>
                PAWU는 병원의 기존 프로그램을 당장 바꾸기 위해 만들어진 서비스가 아닙니다.
                병원과 보호자가 예약, 진료, 처방, 입원 경과와 건강기록을 더 편리하게 연결하도록 돕습니다.
              </p>
              <p>
                실제 수의사분들과 소통하며 현장의 의견을 반영했고, 현재 사용하는 시스템과 병행하면서
                부담 없이 경험할 수 있도록 만들고 있습니다.
              </p>
              <div className="warm-note">
                <span>🐾</span>
                <p>기능을 보여드리는 것보다, 실제 병원의 하루가 어떻게 편해지는지를 보여드리고 싶습니다.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="journey-section" id="journey">
        <div className="section journey-shell">
          <Reveal>
            <div className="center-heading">
              <p className="section-label">예약 → 내원 → 진료 → 완료</p>
              <h2>PAWU로 이어지는<br />하나의 진료 흐름</h2>
              <p>각 기능이 따로 움직이지 않고, 보호자의 예약부터 진료 완료 후 기록까지 연결됩니다.</p>
            </div>
          </Reveal>

          <div className="journey-grid">
            {journey.map((item, index) => (
              <Reveal className="journey-card" key={item.title}>
                <div className="journey-top">
                  <span className="journey-step">{item.step}</span>
                  <span className="journey-icon">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <strong>{item.subtitle}</strong>
                <ul>
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                {index < journey.length - 1 && <span className="journey-arrow" aria-hidden="true">→</span>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section features" id="features">
        <Reveal>
          <div className="center-heading">
            <p className="section-label">한 흐름을 완성하는 기능</p>
            <h2>병원과 보호자에게<br />필요한 연결만 담았습니다.</h2>
          </div>
        </Reveal>
        <div className="feature-grid landing-features">
          {features.map(([icon, title, text]) => (
            <Reveal className="feature-card" key={title}>
              <span className="feature-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="partner-message">
        <Reveal>
          <div className="partner-inner">
            <div className="promise-icon">♥</div>
            <p className="section-label">PAWU는 계속 발전합니다</p>
            <blockquote>
              PAWU는 아직 완성된 프로그램이 아닙니다.
              <br />
              <span>원장님의 의견으로 계속 발전하는 서비스입니다.</span>
            </blockquote>
            <p>
              잠시 함께 사용해 보시고, 좋았던 점보다 부족했던 점을 더 많이 말씀해 주세요.
              그 의견 하나하나를 다음 개선에 담겠습니다.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section trial-section" id="trial">
        <Reveal>
          <div className="trial-layout">
            <div className="trial-copy">
              <p className="section-label">FREE TRIAL</p>
              <h2>부담 없이<br />직접 경험해 보세요.</h2>
              <p>
                신청 내용을 확인한 뒤 BGK 대표 장수빈이 직접 연락드리겠습니다.
                체험을 원하시는 병원에는 직접 방문해 설치와 사용 방법을 안내하고,
                원장님의 의견을 듣겠습니다.
              </p>
              <div className="contact-mini">
                <strong>장수빈 대표</strong>
                <a href="tel:01030152717">010-3015-2717</a>
                <a href="mailto:bgkcogito@naver.com">bgkcogito@naver.com</a>
              </div>
            </div>

            <form className="trial-form" onSubmit={submitTrial}>
              <label>성함<input name="name" required placeholder="성함을 입력해 주세요" /></label>
              <label>병원명<input name="hospital" required placeholder="병원명을 입력해 주세요" /></label>
              <label>연락처<input name="phone" required inputMode="tel" placeholder="연락 가능한 번호" /></label>
              <label>이메일<input name="email" required type="email" placeholder="이메일 주소" /></label>
              <label>문의사항<textarea name="note" rows={4} placeholder="궁금한 점이나 방문 희망 내용을 남겨 주세요" /></label>
              <button className="button button-primary form-button" type="submit">무료 체험 신청하기</button>
              <small>
                신청 버튼을 누르면 작성한 내용이 이메일로 연결됩니다.
                {sent ? " 이메일 앱에서 전송을 완료해 주세요." : ""}
              </small>
            </form>
          </div>
        </Reveal>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-icon small"><Image src="/images/pawu-symbol.png" alt="" width={32} height={32} /></span>
          <div><strong>PAWU</strong><span>우리 아이의 건강을 연결합니다.</span></div>
        </div>
        <nav className="footer-links">
          <a href={site.companyUrl} target="_blank" rel="noreferrer">BGK 공식 홈페이지</a>
          <a href="/privacy">개인정보처리방침</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} BGK. All rights reserved.</p>
      </footer>
    </main>
  );
}
