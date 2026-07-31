import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const features = [
  {
    icon: "🏥",
    title: "우리 아이에게 맞는 병원 찾기",
    text: "지역과 병원 정보를 한눈에 확인하고, 필요한 진료를 편리하게 예약할 수 있습니다.",
  },
  {
    icon: "📅",
    title: "간편한 진료 예약",
    text: "반려동물 정보를 매번 다시 적지 않고 예약부터 방문까지 자연스럽게 이어집니다.",
  },
  {
    icon: "🩺",
    title: "진료 기록을 한곳에",
    text: "진료, 처방, 특이사항과 건강 기록을 반려동물별로 안전하게 모아 확인합니다.",
  },
  {
    icon: "💬",
    title: "입원 중에도 안심",
    text: "병원이 공유한 입원 경과와 처치 내용을 보호자가 편리하게 확인할 수 있습니다.",
  },
  {
    icon: "🥣",
    title: "일상의 건강관리",
    text: "사료, 급여 횟수, 체중과 생활 특이사항을 꾸준히 기록하고 관리합니다.",
  },
  {
    icon: "✨",
    title: "의료진을 돕는 AI",
    text: "의료진의 판단을 대신하지 않고, 기록 정리와 참고 정보 제공을 돕습니다.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero">
        <div className="hero-blob blob-one" aria-hidden="true" />
        <div className="hero-blob blob-two" aria-hidden="true" />
        <div className="paw-pattern" aria-hidden="true">🐾</div>

        <div className="hero-content">
          <p className="eyebrow">FOR EVERY PRECIOUS PAW</p>
          <h1>
            함께한 모든 날이
            <br />
            <span>더 건강하도록.</span>
          </h1>
          <p className="hero-description">
            PAWU는 병원과 보호자를 연결해 우리 아이의 진료와 건강기록을
            더 쉽고 따뜻하게 관리하는 반려동물 의료 플랫폼입니다.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={site.serviceUrl}
              target="_blank"
              rel="noreferrer"
            >
              PAWU 서비스 열기
            </a>
            <a className="button button-secondary" href="#about">
              PAWU 알아보기
            </a>
          </div>

          <div className="trust-row">
            <div><strong>10,000+</strong><span>전국 병원 정보 기반</span></div>
            <div><strong>ONE APP</strong><span>예약부터 건강기록까지</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="강아지와 고양이를 위한 PAWU">
          <div className="pet-scene">
            <div className="sun-shape" />
            <div className="pet-card dog-card">
              <span className="pet-emoji">🐶</span>
              <div>
                <strong>우리 강아지</strong>
                <small>건강 기록을 한눈에</small>
              </div>
            </div>
            <div className="pet-card cat-card">
              <span className="pet-emoji">🐱</span>
              <div>
                <strong>우리 고양이</strong>
                <small>진료와 처방을 편리하게</small>
              </div>
            </div>
            <div className="heart-bubble">♥</div>
            <div className="care-badge">
              <Image src="/images/pawu-symbol.png" alt="PAWU" width={72} height={72} />
              <span>PAWU CARE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <Reveal>
          <div className="section-label">PAWU가 시작된 이유</div>
          <div className="about-grid">
            <h2>
              반려동물의 하루와
              <br />
              병원의 진료가
              <br />
              자연스럽게 이어지도록.
            </h2>
            <div className="about-copy">
              <p>
                보호자는 우리 아이의 지난 진료와 건강 변화를 놓치지 않고 싶고,
                병원은 더 정확한 정보로 진료에 집중하고 싶습니다.
              </p>
              <p>
                PAWU는 예약, 진료기록, 처방, 입원 경과와 일상 건강관리를 하나로
                연결해 병원과 보호자 모두의 불편을 줄입니다.
              </p>
              <div className="warm-note">
                <span>🐾</span>
                <p>기술보다 먼저, 반려동물과 보호자의 마음을 생각합니다.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section features" id="features">
        <Reveal>
          <div className="center-heading">
            <p className="section-label">PAWU의 주요 기능</p>
            <h2>
              우리 아이의 건강을 위한
              <br />
              필요한 기능만 담았습니다.
            </h2>
            <p>
              복잡한 기능보다 실제 병원과 보호자가 자주 사용하는 흐름을
              쉽고 편리하게 만들었습니다.
            </p>
          </div>
        </Reveal>

        <div className="feature-grid">
          {features.map((feature) => (
            <Reveal key={feature.title} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section together" id="together">
        <Reveal>
          <div className="together-heading">
            <p className="section-label">병원과 보호자를 함께</p>
            <h2>
              더 편안한 진료,
              <br />
              더 안심되는 돌봄.
            </h2>
          </div>
        </Reveal>

        <div className="together-grid">
          <Reveal className="audience-card hospital-card">
            <div className="audience-art">🧑‍⚕️</div>
            <span className="audience-label">FOR HOSPITAL</span>
            <h3>진료에 더 집중할 수 있도록</h3>
            <p>
              예약, 환자정보, 진료기록과 입원 경과를 하나의 흐름으로 관리해
              반복 업무를 줄입니다.
            </p>
            <ul>
              <li>예약 및 환자 관리</li>
              <li>전자차트와 처방 기록</li>
              <li>입원 경과 공유</li>
              <li>병원 데이터 관리</li>
            </ul>
          </Reveal>

          <Reveal className="audience-card guardian-card">
            <div className="audience-art">👩‍🦰🐕</div>
            <span className="audience-label">FOR GUARDIAN</span>
            <h3>우리 아이의 건강을 놓치지 않도록</h3>
            <p>
              병원 검색과 예약부터 진료·처방 기록, 입원 경과와 일상 건강정보를
              한곳에서 확인합니다.
            </p>
            <ul>
              <li>병원 검색과 간편 예약</li>
              <li>반려동물 정보 관리</li>
              <li>진료·처방 기록 확인</li>
              <li>건강 변화와 특이사항 기록</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="promise">
        <Reveal>
          <div className="promise-icon">♥</div>
          <p className="section-label">PAWU의 약속</p>
          <blockquote>
            의료진의 전문성을 존중하고,
            <br />
            <span>반려동물의 더 건강한 삶을 돕겠습니다.</span>
          </blockquote>
          <p>
            PAWU의 기술과 AI는 의료진의 판단을 대신하지 않습니다.
            더 정확한 기록과 편리한 소통을 돕는 따뜻한 도구가 되겠습니다.
          </p>
        </Reveal>
      </section>

      <section className="section contact" id="contact">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-pets" aria-hidden="true">🐶 🐱</div>
            <p className="section-label">PARTNERSHIP & EARLY ACCESS</p>
            <h2>
              PAWU와 함께할
              <br />
              병원과 파트너를 기다립니다.
            </h2>
            <p>
              병원 운영 현장의 의견, 협업, 초기 도입과 서비스 문의를 환영합니다.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${site.email}`}>
                이메일 문의
              </a>
              <a
                className="button button-secondary"
                href={`tel:${site.phone.replaceAll("-", "")}`}
              >
                {site.phone}
              </a>
            </div>
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
          <a href={site.companyUrl} target="_blank" rel="noreferrer">
            BGK 공식 홈페이지
          </a>
          <a href="/privacy">개인정보처리방침</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </nav>

        <p className="copyright">
          © {new Date().getFullYear()} BGK. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
