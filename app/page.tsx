import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

const features = [
  {
    number: "01",
    title: "전국 병원 검색",
    text: "전국 동물병원 데이터를 기반으로 병원명, 주소, 지역과 전화번호를 빠르게 검색합니다.",
  },
  {
    number: "02",
    title: "간편한 진료 예약",
    text: "보호자의 반려동물 정보와 병원의 예약 가능 시간을 연결해 예약 과정을 단순화합니다.",
  },
  {
    number: "03",
    title: "병원 운영 관리",
    text: "예약 현황, 환자 정보, 진료 기록과 업무 흐름을 병원용 화면에서 통합 관리합니다.",
  },
  {
    number: "04",
    title: "입원 경과 공유",
    text: "병원이 공유한 입원 경과와 처치 내용을 보호자가 편리하게 확인할 수 있습니다.",
  },
  {
    number: "05",
    title: "건강 기록 연결",
    text: "사료, 급여, 특이사항, 처방과 진료 이력을 반려동물 단위로 지속 관리합니다.",
  },
  {
    number: "06",
    title: "AI 진료보조",
    text: "의료진의 판단을 대신하지 않고 기록 정리와 참고 정보 제공을 지원합니다.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-a" aria-hidden="true" />
        <div className="hero-glow hero-glow-b" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow">PET MEDICAL PLATFORM</p>
          <h1>
            반려동물 의료의
            <br />
            <span>새로운 연결.</span>
          </h1>
          <p className="hero-description">
            PAWU는 병원의 운영과 보호자의 경험을 하나의 흐름으로 연결합니다.
            복잡한 의료 현장에 실제로 필요한 기능부터 차근차근 만듭니다.
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
              서비스 알아보기
            </a>
          </div>

          <div className="hero-labels">
            <span>HOSPITAL</span>
            <span>GUARDIAN</span>
            <span>AI SUPPORT</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="symbol-stage">
            <div className="symbol-ring ring-one" />
            <div className="symbol-ring ring-two" />
            <Image
              src="/images/pawu-symbol.png"
              alt="PAWU 로고"
              width={420}
              height={420}
              priority
            />
          </div>

          <div className="float-card float-card-top">
            <strong>10,000+</strong>
            <span>전국 병원 데이터 기반</span>
          </div>
          <div className="float-card float-card-bottom">
            <strong>ONE FLOW</strong>
            <span>검색부터 진료 기록까지</span>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <Reveal>
          <p className="eyebrow">ABOUT PAWU</p>
          <div className="split">
            <h2>
              기능을 늘리는 것보다,
              <br />
              현장에서 작동하는 것.
            </h2>
            <div className="body-copy">
              <p>
                PAWU는 동물병원과 보호자가 매일 겪는 불편을 줄이기 위해
                시작했습니다.
              </p>
              <p>
                병원 검색과 예약에서 시작해 전자차트, 입원 경과 공유, 건강
                기록과 AI 보조까지 실제 업무 흐름을 기준으로 확장합니다.
              </p>
              <p className="highlight">
                의료진의 전문성을 존중하고, 기술은 더 정확하고 편리한 운영을
                돕는 역할에 집중합니다.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section features" id="features">
        <Reveal>
          <p className="eyebrow">CORE EXPERIENCE</p>
          <h2>
            하나의 플랫폼,
            <br />
            이어지는 의료 경험.
          </h2>
        </Reveal>

        <div className="feature-grid">
          {features.map((feature) => (
            <Reveal key={feature.number} className="feature-card">
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <Reveal>
          <div className="section-heading split">
            <div>
              <p className="eyebrow">TWO EXPERIENCES, ONE PLATFORM</p>
              <h2>
                병원에는 효율을,
                <br />
                보호자에게는 안심을.
              </h2>
            </div>
            <p>
              어느 한쪽만을 위한 프로그램이 아닙니다. 병원의 업무와 보호자의
              정보 경험이 자연스럽게 이어질 때 더 나은 반려동물 의료가
              가능하다고 믿습니다.
            </p>
          </div>
        </Reveal>

        <div className="experience-grid">
          <Reveal className="experience-card hospital-card">
            <span className="card-label">FOR HOSPITAL</span>
            <h3>
              반복 업무는 줄이고
              <br />
              환자에게 더 집중합니다.
            </h3>
            <ul>
              <li>예약 및 진료 흐름 관리</li>
              <li>환자별 통합 의료 기록</li>
              <li>입원 경과와 처방 공유</li>
              <li>병원 데이터 관리 도구</li>
            </ul>
          </Reveal>

          <Reveal className="experience-card guardian-card">
            <span className="card-label">FOR GUARDIAN</span>
            <h3>
              필요한 의료 정보를
              <br />
              놓치지 않고 확인합니다.
            </h3>
            <ul>
              <li>지역별 병원 검색과 예약</li>
              <li>반려동물 정보 관리</li>
              <li>진료·처방 기록 확인</li>
              <li>입원 중 경과 확인</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="principle" id="principle">
        <Reveal>
          <p className="eyebrow">OUR PRINCIPLE</p>
          <blockquote>
            기술이 의료를 대신하는 것이 아니라,
            <br />
            <span>더 나은 의료를 돕도록.</span>
          </blockquote>
          <p>
            PAWU의 AI는 의료진의 전문적인 판단을 존중하며 기록과 정보 정리를
            지원하는 보조 도구를 목표로 합니다.
          </p>
        </Reveal>
      </section>

      <section className="section contact" id="contact">
        <Reveal>
          <div className="contact-panel">
            <p className="eyebrow">PARTNERSHIP & EARLY ACCESS</p>
            <h2>
              PAWU를 함께 만들어갈
              <br />
              병원과 파트너를 기다립니다.
            </h2>
            <p>
              병원 운영 현장의 의견, 협업, 초기 도입과 서비스 문의를
              환영합니다.
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
          <Image
            src="/images/pawu-symbol.png"
            alt=""
            width={34}
            height={34}
          />
          <div>
            <strong>PAWU</strong>
            <span>BY BGK</span>
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
