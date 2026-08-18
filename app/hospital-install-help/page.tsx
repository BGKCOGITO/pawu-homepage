import Link from "next/link";
import styles from "./page.module.css";

const SUPPORT_EMAIL = "contact@bgkcogito.co.kr";
const SUPPORT_PHONE = "010-3015-2717";

const scenarios = [
  ["설치가 취소된 경우", "설치 창을 닫았거나 취소한 경우입니다. 다시 설치하려면 PAWU Hospital 설치파일을 실행해 주세요."],
  ["이미 설치되어 있는 경우", "기존 PAWU Hospital이 설치되어 있다면 프로그램을 종료한 뒤 최신 설치파일을 다시 실행해 주세요."],
  ["다른 설치가 진행 중인 경우", "Windows에서 다른 프로그램 설치가 진행 중일 수 있습니다. 해당 설치가 끝난 뒤 다시 시도해 주세요."],
  ["디스크 공간이 부족한 경우", "Windows 저장 공간을 확보한 뒤 설치를 다시 진행해 주세요."],
  ["재부팅이 필요한 경우", "Windows를 재시작한 뒤 PAWU Hospital 설치파일을 다시 실행해 주세요."],
  ["네트워크 오류가 발생한 경우", "인터넷 연결 상태를 확인한 뒤 설치파일을 다시 내려받아 실행해 주세요."],
  ["보안 정책으로 설치가 차단된 경우", "병원 PC의 보안 프로그램 또는 Windows 정책에서 설치를 차단했을 수 있습니다. PAWU 공식 다운로드 센터에서 받은 파일인지 확인한 뒤 병원 IT 관리자 또는 PAWU 고객센터에 문의해 주세요."],
  ["그 밖의 설치 오류", "오류 화면이나 오류 코드를 확인한 뒤 PAWU 고객센터로 전달해 주시면 설치를 안내해 드립니다."],
];

export default function HospitalInstallHelpPage() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.brand}>PAWU</Link>
        <div className={styles.links}>
          <Link href="/hospital-download">다운로드 센터</Link>
          <Link href="/">홈으로</Link>
        </div>
      </header>
      <section className={styles.hero}>
        <p>PAWU HOSPITAL · INSTALL SUPPORT</p>
        <h1>PAWU Hospital<br />설치 문제 해결</h1>
        <div>Windows용 PAWU Hospital 설치 중 문제가 발생한 경우 아래 안내를 확인해 주세요.</div>
      </section>
      <section className={styles.notice}>
        <strong>공식 설치파일을 사용해 주세요.</strong>
        <p>PAWU Hospital은 PAWU 공식 다운로드 센터에서 제공되는 최신 Windows 설치파일을 사용해 설치해 주세요.</p>
        <Link href="/hospital-download">공식 다운로드 센터 열기 →</Link>
      </section>
      <section className={styles.section}>
        <div className={styles.heading}><p>INSTALLER SCENARIOS</p><h2>설치 상황별 안내</h2></div>
        <div className={styles.grid}>
          {scenarios.map(([title, body], index) => (
            <article key={title} className={styles.card}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{body}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.heading}><p>RETURN CODE</p><h2>설치 오류 코드가 표시되는 경우</h2></div>
        <div className={styles.codeBox}>
          <p>설치 프로그램 또는 Microsoft Store에서 반환 코드가 표시되면 해당 숫자와 오류 화면을 함께 확인해 주세요. 코드가 이 페이지에 별도로 설명되지 않은 경우 PAWU 고객센터로 전달해 주시면 확인 후 안내해 드립니다.</p>
          <p>정상 설치가 완료된 경우 PAWU Hospital을 실행하여 병원 계정으로 로그인할 수 있습니다.</p>
        </div>
      </section>
      <section className={styles.support}>
        <div><p>SUPPORT</p><h2>설치가 계속되지 않으면<br />PAWU 고객센터로 문의해 주세요.</h2></div>
        <div className={styles.supportCard}>
          <strong>BGK · PAWU 고객지원</strong>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          <a href="tel:01030152717">{SUPPORT_PHONE}</a>
          <small>문의 시 설치 오류 화면과 반환 코드가 있다면 함께 보내 주세요.</small>
        </div>
      </section>
      <footer className={styles.footer}>© {new Date().getFullYear()} BGK. PAWU Hospital.</footer>
    </main>
  );
}
