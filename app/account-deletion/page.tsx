import Link from "next/link";
import styles from "./page.module.css";

const KAKAO_CHANNEL_URL = "http://pf.kakao.com/_PxfkBX";
const PAWU_ACCOUNT_URL = "https://pawu-web.vercel.app/account";

export const metadata = {
  title: "PAWU 계정 삭제 안내",
  description: "PAWU 보호자 계정 및 관련 데이터 삭제 요청 방법을 안내합니다.",
};

export default function AccountDeletionPage() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.brand}>PAWU</Link>
        <Link href="/" className={styles.home}>홈으로</Link>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>ACCOUNT & DATA DELETION</p>
        <h1>PAWU 계정 및 데이터 삭제</h1>
        <p className={styles.lead}>
          PAWU 보호자는 앱 또는 웹의 내 정보 화면에서 직접 회원 탈퇴 및 계정 삭제를 요청할 수 있습니다.
        </p>
      </section>

      <section className={styles.card}>
        <span className={styles.number}>01</span>
        <div>
          <h2>앱·웹에서 직접 요청</h2>
          <p>
            PAWU 로그인 → <strong>내 정보</strong> → <strong>회원 탈퇴 · 계정 삭제</strong>에서
            삭제 요청을 접수해 주세요.
          </p>
          <a href={PAWU_ACCOUNT_URL} className={styles.primary}>계정 삭제 요청하기</a>
        </div>
      </section>

      <section className={styles.card}>
        <span className={styles.number}>02</span>
        <div>
          <h2>로그인할 수 없는 경우</h2>
          <p>
            가입한 이메일 주소와 함께 계정 삭제 요청을 PAWU 고객센터로 보내 주세요.
            본인 확인 후 계정 및 관련 개인정보 삭제 절차를 안내합니다.
          </p>
          <div className={styles.actions}>
            <a
              href={KAKAO_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.kakao}
            >
              카카오톡 고객센터
            </a>
            <a
              href="mailto:bgkcogito@naver.com?subject=PAWU%20계정%20삭제%20요청"
              className={styles.secondary}
            >
              이메일로 요청
            </a>
          </div>
        </div>
      </section>

      <section className={styles.info}>
        <h2>삭제되는 정보</h2>
        <p>
          계정 식별정보, 보호자 프로필 및 서비스 이용을 위해 저장된 관련 개인정보는 삭제 대상에 포함됩니다.
          다만 관계 법령상 보존 의무가 있는 진료·결제·분쟁 관련 기록은 해당 보존기간 동안 분리하여 보관한 뒤 삭제할 수 있습니다.
        </p>
      </section>

      <section className={styles.info}>
        <h2>처리 안내</h2>
        <p>
          삭제 요청이 접수되면 본인 확인 및 데이터 보존 의무를 확인한 뒤 삭제 절차를 진행합니다.
          처리 과정에서 추가 확인이 필요한 경우 가입 이메일 또는 고객센터를 통해 연락드릴 수 있습니다.
        </p>
      </section>

      <footer className={styles.footer}>
        <strong>BGK · PAWU</strong>
        <span>문의: bgkcogito@naver.com</span>
      </footer>
    </main>
  );
}
