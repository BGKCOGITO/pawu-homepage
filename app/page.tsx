"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const journey = [
  {
    step: "01",
    label: "예약",
    icon: "calendar",
    headline: "보호자가 예약하면,\n병원은 필요한 정보를 먼저 확인합니다.",
    hospital: [
      "날짜·시간·증상과 반려동물 정보를 한 화면에서 확인",
      "예약 승인·거절과 사유 전달",
      "예약 현황을 일정별로 정리",
    ],
    guardian: [
      "반려동물을 선택해 간편하게 예약",
      "처음부터 정보를 반복 입력할 필요 없음",
      "예약 결과를 알림으로 확인",
    ],
  },
  {
    step: "02",
    label: "내원",
    icon: "paw",
    headline: "진료 전에 알아야 할 내용을\n찾지 않아도 바로 볼 수 있습니다.",
    hospital: [
      "보호자·반려동물 기본정보 자동 연결",
      "품종·체중·복용약·특이사항 확인",
      "이전 진료와 처방 기록 확인",
    ],
    guardian: [
      "미리 기록한 생활 정보와 특이사항 전달",
      "예약 내용이 병원으로 그대로 연결",
      "접수 과정의 반복 설명 감소",
    ],
  },
  {
    step: "03",
    label: "진료",
    icon: "medical",
    headline: "진료 기록과 보호자 소통을\n하나의 흐름 안에서 이어갑니다.",
    hospital: [
      "전자차트에 진료 내용과 처방 기록",
      "필요한 사진과 안내를 채팅으로 공유",
      "입원 환자의 경과를 보호자에게 전달",
    ],
    guardian: [
      "진료 관련 안내와 요청사항 확인",
      "입원 중인 아이의 경과와 사진 확인",
      "전화가 어려운 순간에도 병원과 소통",
    ],
  },
  {
    step: "04",
    label: "진료 완료",
    icon: "heart",
    headline: "진료가 끝난 뒤에도\n기록과 관계는 계속 이어집니다.",
    hospital: [
      "진료·처방 내역을 반려동물별로 보관",
      "진료 완료 상태와 기록을 체계적으로 관리",
      "다음 예약과 후속 안내로 연결",
    ],
    guardian: [
      "지난 진료와 처방 내용을 언제든 확인",
      "반려동물별 건강기록을 한곳에서 관리",
      "다음 진료 때 이어지는 정보 제공",
    ],
  },
];

const featureGroups = [
  {
    icon: "chat",
    title: "병원·보호자 채팅",
    text: "예약 전 문의부터 진료 후 안내까지 필요한 대화를 기록과 함께 이어갑니다.",
  },
  {
    icon: "chart",
    title: "전자차트와 처방",
    text: "진료 내용과 처방을 반려동물별로 저장하고 필요한 기록을 빠르게 확인합니다.",
  },
  {
    icon: "hospital",
    title: "입원 경과 공유",
    text: "입원 중인 아이의 상태와 사진을 보호자에게 전달해 불안과 반복 문의를 줄입니다.",
  },
  {
    icon: "bell",
    title: "예약·안내 알림",
    text: "예약 결과와 병원 안내가 보호자에게 전달되어 중요한 내용을 놓치지 않도록 돕습니다.",
  },
  {
    icon: "pet",
    title: "반려동물 정보",
    text: "품종, 체중, 복용약, 사료와 특이사항을 진료 전에 미리 확인할 수 있습니다.",
  },
  {
    icon: "history",
    title: "진료 후 기록 연결",
    text: "보호자는 지난 진료와 처방을 확인하고 병원은 다음 진료에 필요한 정보를 이어봅니다.",
  },
];

function Icon({ name }: { name: string }) {
  const icons: Record<string, string> = {
    calendar: "▣",
    paw: "●",
    medical: "✚",
    heart: "♥",
    chat: "◌",
    chart: "▤",
    hospital: "⌂",
    bell: "♢",
    pet: "●",
    history: "↻",
  };
  return <span aria-hidden="true">{icons[name] ?? "•"}</span>;
}

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

    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <main id="top">
      <Header />

      <section className="hospital-hero">
        <div className="hero-glow glow-a" />
        <div className="hero-glow glow-b" />
        <div className="floating-paw paw-a">●</div>
        <div className="floating-paw paw-b">●</div>

        <div className="hospital-hero-copy">
          <p className="eyebrow">PAWU FOR VETERINARY HOSPITALS</p>
          <h1>
            예약부터 진료 완료까지,
            <br />
            <span>병원의 하루를 하나로.</span>
          </h1>
          <p className="hero-description">
            PAWU는 병원과 보호자가 필요한 정보를 따로 찾고 반복해서 전달하는
            과정을 줄이고, 예약부터 진료 후 관리까지 자연스럽게 연결합니다.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#journey">
              실제 흐름 살펴보기
            </a>
            <a className="button button-secondary" href="#trial">
              무료 체험 신청
            </a>
          </div>

          <div className="hero-proof">
            <div>
              <strong>예약</strong>
              <span>보호자 신청과 병원 승인</span>
            </div>
            <i>→</i>
            <div>
              <strong>진료</strong>
              <span>차트·처방·소통 연결</span>
            </div>
            <i>→</i>
            <div>
              <strong>완료</strong>
              <span>기록과 사후관리 유지</span>
            </div>
          </div>
        </div>

        <div className="hospital-hero-art">
          <div className="brand-orbit orbit-one" />
          <div className="brand-orbit orbit-two" />
          <div className="hero-pet dog">
            <span>🐶</span>
            <small>보호자 앱</small>
          </div>
          <div className="hero-pet cat">
            <span>🐱</span>
            <small>병원과 연결</small>
          </div>
          <div className="hero-logo-card">
            <Image
              src="/images/pawu-logo.png"
              alt="PAWU"
              width={270}
              height={140}
              priority
            />
            <p>반려동물 의료의 모든 순간을 연결합니다.</p>
          </div>
          <div className="floating-status status-reservation">
            <b>예약 승인</b>
            <span>보호자에게 즉시 전달</span>
          </div>
          <div className="floating-status status-record">
            <b>진료기록 저장</b>
            <span>다음 진료까지 연결</span>
          </div>
        </div>
      </section>

      <section className="quick-nav">
        <a href="#about"><span>01</span><b>PAWU란?</b><small>서비스의 시작과 방향</small></a>
        <a href="#journey"><span>02</span><b>진료 흐름</b><small>예약부터 완료까지</small></a>
        <a href="#features"><span>03</span><b>핵심 기능</b><small>병원과 보호자의 연결</small></a>
        <a href="#trial"><span>04</span><b>무료 체험</b><small>대표가 직접 안내</small></a>
      </section>

      <section className="section story-section" id="about">
        <Reveal>
          <div className="story-layout">
            <div>
              <p className="section-label">WHAT IS PAWU?</p>
              <h2>
                프로그램을 하나 더
                <br />
                추가하는 것이 아니라,
                <br />
                <em>끊어진 흐름을 연결합니다.</em>
              </h2>
            </div>
            <div className="story-copy">
              <p>
                PAWU는 병원의 기존 프로그램을 당장 바꾸도록 요구하는 서비스가
                아닙니다. 현재의 운영 방식을 존중하면서 병원과 보호자 사이에
                흩어져 있던 예약, 정보, 진료기록과 소통을 연결합니다.
              </p>
              <p>
                실제 수의사분들과 대화하며 현장에서 필요한 부분을 보완했고,
                기존 시스템과 병행해 부담 없이 경험할 수 있도록 개발하고 있습니다.
              </p>
              <div className="story-callout">
                <strong>“기능이 많다는 설명보다, 병원의 하루가 어떻게 달라지는지를 보여드리겠습니다.”</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="journey-stage" id="journey">
        <div className="journey-intro">
          <Reveal>
            <p className="section-label">ONE CONNECTED JOURNEY</p>
            <h2>
              예약 → 내원 → 진료 → 완료
              <br />
              <span>각 단계가 다음 단계의 정보가 됩니다.</span>
            </h2>
            <p>
              기능을 따로 배우는 것이 아니라, 병원이 매일 반복하는 실제 흐름 안에서
              PAWU를 사용합니다.
            </p>
          </Reveal>
        </div>

        <div className="journey-timeline">
          {journey.map((item, index) => (
            <Reveal className={`journey-panel panel-${index + 1}`} key={item.step}>
              <div className="journey-number">{item.step}</div>
              <div className="journey-panel-icon"><Icon name={item.icon} /></div>

              <div className="journey-panel-copy">
                <p>{item.label}</p>
                <h3>
                  {item.headline.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>

                <div className="journey-role-grid">
                  <div>
                    <b>병원에서는</b>
                    <ul>
                      {item.hospital.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                  <div>
                    <b>보호자는</b>
                    <ul>
                      {item.guardian.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {index < journey.length - 1 && (
                <div className="timeline-link" aria-hidden="true">
                  <span />
                  <i>↓</i>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section connected-result">
        <Reveal>
          <p className="section-label">THE RESULT</p>
          <h2>
            같은 정보를 다시 묻지 않고,
            <br />
            다음 업무가 자연스럽게 이어집니다.
          </h2>
        </Reveal>
        <div className="result-flow">
          <Reveal className="result-card">
            <span>01</span><b>보호자가 입력한 정보</b><p>예약과 반려동물 정보가 병원으로 연결됩니다.</p>
          </Reveal>
          <div className="result-arrow">→</div>
          <Reveal className="result-card">
            <span>02</span><b>병원이 남긴 기록</b><p>진료와 처방이 보호자의 건강기록으로 이어집니다.</p>
          </Reveal>
          <div className="result-arrow">→</div>
          <Reveal className="result-card">
            <span>03</span><b>다음 진료의 정보</b><p>지난 기록이 다시 병원의 판단을 돕는 정보가 됩니다.</p>
          </Reveal>
        </div>
      </section>

      <section className="feature-showcase" id="features">
        <div className="section">
          <Reveal>
            <div className="feature-heading">
              <div>
                <p className="section-label">CORE FEATURES</p>
                <h2>하나의 흐름을 완성하는<br />PAWU의 핵심 기능</h2>
              </div>
              <p>
                기능을 많이 보여주기보다 병원과 보호자가 실제로 자주 사용하는
                연결을 중심으로 구성했습니다.
              </p>
            </div>
          </Reveal>

          <div className="feature-showcase-grid">
            {featureGroups.map((feature, index) => (
              <Reveal className={`showcase-card showcase-${index + 1}`} key={feature.title}>
                <div className="showcase-icon"><Icon name={feature.icon} /></div>
                <span>0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-message">
        <div className="partner-light light-one" />
        <div className="partner-light light-two" />
        <Reveal>
          <div className="partner-inner">
            <div className="promise-icon">♥</div>
            <p className="section-label">BUILT WITH VETERINARIANS</p>
            <blockquote>
              PAWU는 아직 완성된 프로그램이 아닙니다.
              <br />
              <span>원장님의 의견으로 계속 발전하는 서비스입니다.</span>
            </blockquote>
            <p>
              잠시 함께 사용해 보시고 좋았던 점보다 부족했던 점을 더 많이
              말씀해 주세요. 처음 함께해 주시는 병원의 의견을 다음 개선에
              가장 먼저 담겠습니다.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section trial-section" id="trial">
        <Reveal>
          <div className="trial-layout">
            <div className="trial-copy">
              <p className="section-label">FREE EXPERIENCE</p>
              <h2>
                직접 보시면
                <br />
                더 빠르게 이해됩니다.
              </h2>
              <p>
                체험을 희망하시는 병원에는 BGK 대표 장수빈이 직접 연락드리고,
                필요한 경우 병원에 방문해 설치와 사용 방법을 안내하겠습니다.
                기존 프로그램을 유지한 채 부담 없이 병행해 보실 수 있습니다.
              </p>

              <div className="trial-benefits">
                <div><b>01</b><span>기존 프로그램과 병행 사용</span></div>
                <div><b>02</b><span>대표가 직접 설치·안내</span></div>
                <div><b>03</b><span>현장 의견을 개발에 반영</span></div>
              </div>

              <div className="contact-mini">
                <strong>BGK 대표 장수빈</strong>
                <a href="tel:01030152717">010-3015-2717</a>
                <a href="mailto:bgkcogito@naver.com">bgkcogito@naver.com</a>
              </div>
            </div>

            <form className="trial-form" onSubmit={submitTrial}>
              <div className="form-title">
                <span>PAWU</span>
                <h3>무료 체험 신청</h3>
                <p>남겨주신 내용을 확인한 뒤 직접 연락드리겠습니다.</p>
              </div>
              <label>성함<input name="name" required placeholder="성함을 입력해 주세요" /></label>
              <label>병원명<input name="hospital" required placeholder="병원명을 입력해 주세요" /></label>
              <label>연락처<input name="phone" required inputMode="tel" placeholder="연락 가능한 번호" /></label>
              <label>이메일<input name="email" required type="email" placeholder="이메일 주소" /></label>
              <label>문의사항<textarea name="note" rows={4} placeholder="궁금한 점이나 방문 희망 내용을 남겨 주세요" /></label>
              <button className="button button-primary form-button" type="submit">
                무료 체험 신청하기
              </button>
              <small>
                신청 버튼을 누르면 작성 내용이 이메일로 연결됩니다.
                {sent ? " 이메일 앱에서 전송을 완료해 주세요." : ""}
              </small>
            </form>
          </div>
        </Reveal>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-icon small">
            <Image src="/images/pawu-symbol.png" alt="" width={32} height={32} />
          </span>
          <div>
            <strong>PAWU</strong>
            <span>우리 아이의 건강을 연결합니다.</span>
          </div>
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
