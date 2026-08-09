import Link from "next/link";
import styles from "./page.module.css";

const installerUrl = process.env.NEXT_PUBLIC_HOSPITAL_INSTALLER_URL?.trim() || "";
const installerVersion = process.env.NEXT_PUBLIC_HOSPITAL_INSTALLER_VERSION?.trim() || "준비 중";

const faqs = [
  ["기존 병원 프로그램을 중단해야 하나요?", "아닙니다. PAWU는 기존 프로그램을 유지한 상태에서 병행해 체험할 수 있도록 운영하고 있습니다."],
  ["설치가 어렵지는 않나요?", "Windows 설치파일을 내려받아 실행한 뒤 안내에 따라 설치하면 됩니다. 설치 과정에서 도움이 필요하면 BGK에 문의해 주세요."],
  ["프로그램 업데이트는 어떻게 하나요?", "새 버전이 배포되면 이 다운로드 센터에서 최신 설치파일과 변경 내용을 안내합니다."],
  ["무료 체험 병원도 프로그램을 받을 수 있나요?", "네. 무료 체험 신청 후 안내받은 병원은 동일한 병원 프로그램을 사용할 수 있습니다."],
  ["Windows 보안 경고가 나오면 어떻게 하나요?", "초기 배포 버전에서는 Windows SmartScreen 안내가 표시될 수 있습니다. 반드시 PAWU 공식 홈페이지에서 받은 설치파일인지 확인한 뒤 진행해 주세요."],
];

export default function HospitalDownloadPage() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.brand}>PAWU</Link>
        <div className={styles.topActions}>
          <Link href="/#trial" className={styles.textLink}>무료 체험 신청</Link>
          <Link href="/" className={styles.homeButton}>홈으로</Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlowA} />
        <div className={styles.heroGlowB} />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>PAWU HOSPITAL FOR WINDOWS</p>
          <h1>병원 프로그램<br /><span>다운로드 센터</span></h1>
          <p className={styles.lead}>
            PAWU 병원 프로그램의 최신 버전을 내려받고 설치 방법과 업데이트 내용을 한곳에서 확인하세요.
          </p>
          <div className={styles.badges}>
            <span>Windows 10/11</span><span>64-bit</span><span>병원용</span>
          </div>
        </div>

        <div className={styles.downloadCard}>
          <div className={styles.cardHead}>
            <div>
              <small>CURRENT VERSION</small>
              <strong>{installerVersion}</strong>
            </div>
            <span className={styles.windowsMark}>⊞</span>
          </div>
          <h2>PAWU Hospital</h2>
          <p>Windows 병원 프로그램 설치파일</p>
          {installerUrl ? (
            <a className={styles.downloadButton} href={installerUrl} target="_blank" rel="noreferrer">
              Windows 다운로드
            </a>
          ) : (
            <div className={`${styles.downloadButton} ${styles.disabled}`}>설치파일 준비 중</div>
          )}
          <small className={styles.safeNote}>공식 주소 pawu.bgkcogito.co.kr에서만 설치파일을 받아 주세요.</small>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p>INSTALL GUIDE</p>
          <h2>설치는 3단계면 끝납니다.</h2>
        </div>
        <div className={styles.steps}>
          <article><span>01</span><h3>다운로드</h3><p>위의 Windows 다운로드 버튼으로 최신 설치파일을 받습니다.</p></article>
          <article><span>02</span><h3>설치</h3><p>받은 설치파일을 실행하고 화면 안내에 따라 설치합니다.</p></article>
          <article><span>03</span><h3>로그인</h3><p>설치된 PAWU Hospital을 실행하고 병원 계정으로 로그인합니다.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.updateSection}`}>
        <div className={styles.sectionHeading}>
          <p>UPDATE</p>
          <h2>최근 업데이트</h2>
        </div>
        <div className={styles.updateCard}>
          <div className={styles.versionBlock}><small>LATEST</small><strong>{installerVersion}</strong></div>
          <ul>
            <li>병원 프로그램 전체 UX 및 메뉴 체계 정리</li>
            <li>진료기록 반려동물 검색 및 날짜별 조회 개선</li>
            <li>처방관리 환자 선택 및 처방 입력 방식 개선</li>
            <li>병원 프로그램 Windows 설치 배포 준비</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p>FAQ</p>
          <h2>설치 전 자주 묻는 질문</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map(([question, answer]) => (
            <details key={question} className={styles.faq}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.support}>
        <div><p>NEED HELP?</p><h2>설치가 어려우면<br />직접 도와드리겠습니다.</h2></div>
        <div className={styles.supportCard}>
          <strong>BGK · PAWU</strong>
          <p>병원 프로그램 설치 및 무료 체험 문의</p>
          <a href="tel:01030152717">010-3015-2717</a>
          <a href="mailto:bgkcogito@naver.com">bgkcogito@naver.com</a>
          <Link href="/#trial" className={styles.supportButton}>무료 체험 신청</Link>
        </div>
      </section>

      <footer className={styles.footer}>© {new Date().getFullYear()} BGK. PAWU Hospital.</footer>
    </main>
  );
}
