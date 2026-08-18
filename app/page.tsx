"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const KAKAO_CHANNEL_URL = "http://pf.kakao.com/_PxfkBX";

const hospitalBenefits = [
  ["예약관리", "보호자가 입력한 반려동물·증상·희망시간을 확인하고 승인·거절·완료까지 한곳에서 관리합니다."],
  ["진료기록", "보호자·반려동물 정보와 지난 기록을 연결해 진료 전 필요한 내용을 빠르게 확인합니다."],
  ["처방·입원", "처방과 복약 안내, 입원 중 경과와 사진을 기록하고 보호자에게 전달합니다."],
  ["병원 채팅", "전화가 어려운 순간에도 예약, 진료, 입원과 사후 안내를 기록이 남는 대화로 이어갑니다."],
  ["알림", "예약 결과, 처방, 입원경과와 병원 안내를 보호자에게 놓치지 않도록 전달합니다."],
  ["기존 시스템 병행", "현재 사용하는 병원 프로그램을 유지한 상태에서 PAWU를 함께 사용하며 부담 없이 검증할 수 있습니다."],
];

const guardianBenefits = [
  ["병원 찾기·예약", "반려동물 정보를 반복 입력하지 않고 병원과 시간을 선택해 예약합니다."],
  ["우리 아이 정보", "품종, 체중, 복용약, 사료, 특이사항과 생활정보를 반려동물별로 관리합니다."],
  ["진료·처방 기록", "지난 진료와 처방 내용을 다시 확인하고 다음 진료에 필요한 정보를 이어갑니다."],
  ["병원과 소통", "예약 전 문의, 진료 후 안내와 입원 중 아이의 경과를 병원과 확인합니다."],
  ["생활 알림", "사료·복약·예방접종 등 필요한 일정을 잊지 않도록 관리합니다."],
  ["한 계정으로 연결", "여러 반려동물과 병원 이용기록을 한곳에서 확인합니다."],
];

const journey = [
  ["01", "예약", "보호자가 반려동물과 증상을 선택해 예약하면 병원이 필요한 정보를 먼저 확인합니다."],
  ["02", "내원", "기본정보, 특이사항과 지난 기록이 연결돼 같은 내용을 반복해서 설명하는 시간을 줄입니다."],
  ["03", "진료·입원", "차트, 처방, 사진과 안내를 기록하고 병원과 보호자가 필요한 내용을 함께 확인합니다."],
  ["04", "진료 후", "진료와 처방 기록이 보호자의 건강기록으로 남고 다음 진료의 정보가 됩니다."],
];

const tryReasons = [
  ["교체하지 않아도 됩니다", "기존 병원 프로그램을 유지한 채 병행 사용하며 필요한 부분부터 확인할 수 있습니다."],
  ["직접 보고 판단하세요", "기능 설명보다 실제 예약·진료·소통 흐름을 사용해본 뒤 계속 사용할지 결정하세요."],
  ["병원 의견을 먼저 반영합니다", "초기 협력 병원의 불편과 제안을 실제 개선 우선순위에 반영합니다."],
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
    const subject = encodeURIComponent(`[PAWU 병원 체험 신청] ${hospital || name}`);
    const body = encodeURIComponent(`성함: ${name}\n병원명: ${hospital}\n연락처: ${phone}\n이메일: ${email}\n문의사항: ${note}`);
    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <main id="top" className="pawu2-page">
      <Header />

      <section className="pawu2-hero">
        <div className="pawu2-hero-bg" aria-hidden="true" />
        <div className="pawu2-shell pawu2-hero-grid">
          <div className="pawu2-hero-copy">
            <p className="pawu2-kicker">PAWU · VETERINARY CARE CONNECTION</p>
            <h1>병원의 진료와<br /><span>보호자의 일상을 연결합니다.</span></h1>
            <p>
              예약 전에 받은 정보가 진료로 이어지고, 병원이 남긴 기록이 보호자의 건강관리로 이어집니다.
              PAWU는 병원과 보호자가 같은 정보를 함께 확인하도록 만든 반려동물 의료 연결 서비스입니다.
            </p>
            <div className="pawu2-actions">
              <a className="pawu2-btn primary" href="#trial">병원 무료 체험 신청</a>
              <Link className="pawu2-btn light" href="/hospital-download">병원 프로그램 다운로드</Link>
              <a className="pawu2-btn text" href={site.serviceUrl} target="_blank" rel="noreferrer">보호자 서비스 이용 →</a>
            </div>
            <div className="pawu2-trust-row">
              <div><b>기존 프로그램</b><span>그대로 유지</span></div>
              <div><b>병행 체험</b><span>부담 없이 시작</span></div>
              <div><b>병원·보호자</b><span>한 흐름으로 연결</span></div>
            </div>
          </div>

          <div className="pawu2-hero-preview" aria-label="PAWU 서비스 화면 예시">
            <div className="pawu2-preview-brand">
              <Image src="/images/pawu-logo.png" alt="PAWU" width={190} height={150} priority />
              <span>오늘의 진료 흐름</span>
            </div>
            <div className="pawu2-preview-stats">
              <article><small>예약 대기</small><strong>6</strong><span>건</span></article>
              <article><small>오늘 진료</small><strong>18</strong><span>건</span></article>
              <article><small>입원 환자</small><strong>3</strong><span>마리</span></article>
            </div>
            <div className="pawu2-preview-list">
              <div><i>09:30</i><b>몽이 · 피부 상담</b><span>승인완료</span></div>
              <div><i>10:20</i><b>라떼 · 예방접종</b><span>진료대기</span></div>
              <div><i>11:10</i><b>콩이 · 재진</b><span>정보확인</span></div>
            </div>
            <div className="pawu2-phone-card">
              <div className="pawu2-phone-top">PAWU <span>우리 아이</span></div>
              <div className="pawu2-pet-card"><b>몽이</b><small>말티즈 · 4.2kg</small></div>
              <p>예약이 승인되었습니다.</p>
              <p>처방 안내가 도착했습니다.</p>
              <p>입원 경과 사진 2장</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pawu2-proof-bar">
        <div className="pawu2-shell">
          <span>예약</span><i>→</i><span>내원 정보</span><i>→</i><span>진료·처방</span><i>→</i><span>입원·채팅</span><i>→</i><span>건강기록</span>
        </div>
      </section>

      <section id="about" className="pawu2-section pawu2-shell">
        <Reveal>
          <div className="pawu2-heading split">
            <div><p className="pawu2-kicker">WHY PAWU</p><h2>프로그램을 하나 더 늘리는 것이 아니라,<br />흩어진 정보를 이어줍니다.</h2></div>
            <p>병원은 진료에 필요한 정보를 더 빨리 확인하고, 보호자는 우리 아이의 기록을 잃지 않습니다. PAWU의 시작은 거창한 전환이 아니라 기존 업무에 필요한 연결을 하나씩 더하는 것입니다.</p>
          </div>
          <div className="pawu2-reason-grid">
            {tryReasons.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </Reveal>
      </section>

      <section id="journey" className="pawu2-section pawu2-journey-section">
        <div className="pawu2-shell">
          <Reveal>
            <div className="pawu2-heading centered"><p className="pawu2-kicker">ONE CONNECTED JOURNEY</p><h2>예약부터 진료 후 관리까지<br />정보가 끊기지 않습니다.</h2><p>각 단계에서 새로 입력하고 다시 묻는 대신, 앞 단계의 정보가 다음 업무로 자연스럽게 연결됩니다.</p></div>
          </Reveal>
          <div className="pawu2-journey-grid">
            {journey.map(([number, title, text]) => <Reveal className="pawu2-journey-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section id="hospital" className="pawu2-section pawu2-shell">
        <Reveal>
          <div className="pawu2-heading split">
            <div><p className="pawu2-kicker">FOR HOSPITALS</p><h2>병원은 진료에 집중하고,<br />반복 확인은 PAWU가 줄입니다.</h2></div>
            <p>병원 프로그램에서 예약·차트·처방·입원·채팅을 확인하고, 보호자에게 필요한 안내를 같은 기록 안에서 전달합니다.</p>
          </div>
          <div className="pawu2-feature-grid hospital">
            {hospitalBenefits.map(([title, text], index) => <article key={title}><span>H{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="pawu2-download-banner">
            <div><small>PAWU HOSPITAL · WINDOWS</small><h3>병원 프로그램을 먼저 확인해 보세요.</h3><p>최신 설치파일, 설치방법과 업데이트 내용을 다운로드 센터에서 확인할 수 있습니다.</p></div>
            <Link className="pawu2-btn dark" href="/hospital-download">다운로드 센터</Link>
          </div>
        </Reveal>
      </section>

      <section id="guardian" className="pawu2-section pawu2-guardian-section">
        <div className="pawu2-shell">
          <Reveal>
            <div className="pawu2-heading split">
              <div><p className="pawu2-kicker">FOR GUARDIANS</p><h2>보호자는 우리 아이의 정보를<br />필요한 순간에 다시 확인합니다.</h2></div>
              <p>병원 예약부터 진료·처방 기록, 채팅과 생활 알림까지 반려동물별로 연결해 관리합니다.</p>
            </div>
            <div className="pawu2-feature-grid guardian">
              {guardianBenefits.map(([title, text], index) => <article key={title}><span>G{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            <div className="pawu2-guardian-cta"><div><strong>보호자 서비스</strong><p>반려동물 등록, 병원 검색과 예약 기능을 확인하세요.</p></div><a className="pawu2-btn primary" href={site.serviceUrl} target="_blank" rel="noreferrer">PAWU 이용하기</a></div>
          </Reveal>
        </div>
      </section>

      <section className="pawu2-section pawu2-shell">
        <Reveal>
          <div className="pawu2-heading centered"><p className="pawu2-kicker">BEFORE & AFTER</p><h2>PAWU를 사용하면<br />이런 흐름으로 달라집니다.</h2></div>
          <div className="pawu2-compare-grid">
            <article className="before"><span>BEFORE</span><h3>정보가 여러 곳에 흩어짐</h3><ul><li>예약 내용은 전화와 메모</li><li>보호자 정보는 다시 확인</li><li>입원 경과는 반복 문의</li><li>지난 처방은 따로 검색</li></ul></article>
            <div className="pawu2-compare-arrow">→</div>
            <article className="after"><span>WITH PAWU</span><h3>하나의 진료 흐름으로 연결</h3><ul><li>예약정보가 병원으로 연결</li><li>반려동물 정보 자동 확인</li><li>사진과 경과를 기록으로 공유</li><li>진료·처방 기록을 다시 확인</li></ul></article>
          </div>
        </Reveal>
      </section>

      <section id="trial" className="pawu2-trial-section">
        <div className="pawu2-shell pawu2-trial-grid">
          <Reveal className="pawu2-trial-copy">
            <p className="pawu2-kicker light">FREE HOSPITAL EXPERIENCE</p>
            <h2>당장 바꾸지 않아도 됩니다.<br />한번 함께 써보세요.</h2>
            <p>기존 시스템을 유지한 채 PAWU를 병행해 보고, 병원에 실제로 도움이 되는지 확인하세요. 체험을 희망하는 병원에는 사용 흐름과 설치방법을 안내합니다.</p>
            <div className="pawu2-trial-points"><span>기존 프로그램 유지</span><span>병행 사용</span><span>현장 의견 반영</span></div>
            <div className="pawu2-contact"><b>BGK · PAWU</b><a href="tel:01030152717">010-3015-2717</a><a href={`mailto:${site.email}`}>{site.email}</a><a href={KAKAO_CHANNEL_URL} target="_blank" rel="noreferrer">카카오톡 고객센터</a></div>
          </Reveal>

          <Reveal className="pawu2-form-wrap">
            <form className="pawu2-trial-form" onSubmit={submitTrial}>
              <div><small>PAWU HOSPITAL</small><h3>무료 체험 신청</h3><p>신청 내용을 확인한 뒤 체험 방법을 안내드립니다.</p></div>
              <label>성함<input name="name" required placeholder="담당자 성함" /></label>
              <label>병원명<input name="hospital" required placeholder="동물병원명" /></label>
              <label>연락처<input name="phone" required inputMode="tel" placeholder="연락 가능한 번호" /></label>
              <label>이메일<input name="email" required type="email" placeholder="이메일 주소" /></label>
              <label>문의사항<textarea name="note" rows={4} placeholder="현재 불편한 점이나 방문 희망 내용을 남겨 주세요" /></label>
              <button className="pawu2-btn primary full" type="submit">무료 체험 신청하기</button>
              <small className="pawu2-form-note">신청 버튼을 누르면 이메일 작성 화면이 열립니다.{sent ? " 작성 내용을 확인한 뒤 전송해 주세요." : ""}</small>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="pawu2-footer">
        <div className="pawu2-shell pawu2-footer-grid">
          <div className="pawu2-footer-brand"><Image src="/images/pawu-symbol.png" alt="" width={38} height={38} /><div><strong>PAWU</strong><span>우리 아이의 건강을 연결합니다.</span></div></div>
          <nav><a href={site.companyUrl} target="_blank" rel="noreferrer">BGK</a><Link href="/hospital-download">병원 다운로드</Link><Link href="/privacy">개인정보처리방침</Link><Link href="/account-deletion">계정 삭제</Link><a href={KAKAO_CHANNEL_URL} target="_blank" rel="noreferrer">고객센터</a></nav>
          <p>© {new Date().getFullYear()} BGK. PAWU.</p>
        </div>
      </footer>
    </main>
  );
}
