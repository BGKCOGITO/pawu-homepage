import Link from "next/link";
import styles from "./page.module.css";

export const metadata = { title: "PAWU Hospital 설치 도움말", description: "PAWU Hospital Windows 설치 문제 해결 및 고객지원 안내" };

const issues = [
  ["설치를 취소했어요", "설치파일을 다시 실행하고 설치가 완료될 때까지 창을 닫지 마세요."],
  ["이미 설치되었다고 나와요", "기존 PAWU Hospital을 실행하거나 Windows 앱 설정에서 기존 버전을 제거한 뒤 다시 설치하세요."],
  ["다른 설치가 진행 중이라고 나와요", "진행 중인 다른 설치를 끝낸 뒤 Windows를 재시작하고 다시 시도하세요."],
  ["Windows 보안 경고가 나와요", "PAWU 공식 홈페이지에서 내려받은 파일인지 확인한 뒤 추가정보 또는 실행을 선택해 진행할 수 있습니다."],
  ["설치 후 로그인이 안 돼요", "무료 체험 또는 병원 계정이 정상 발급되었는지 PAWU 고객센터에 확인해 주세요."],
  ["프로그램이 열리지 않아요", "Windows를 재시작하고 다시 실행해 보세요. 계속되면 오류 화면을 고객센터로 보내 주세요."],
];

export default function HospitalInstallHelpPage() {
  return <main className={styles.page}>
    <header><Link href="/hospital-download">← 다운로드 센터</Link><Link href="/">PAWU 홈</Link></header>
    <section className={styles.hero}><p>PAWU HOSPITAL · SUPPORT</p><h1>설치 문제 해결</h1><span>설치 중 문제가 생겼다면 아래 항목부터 확인해 주세요.</span></section>
    <section className={styles.grid}>{issues.map(([title,text],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className={styles.support}><div><h2>문제가 계속되나요?</h2><p>오류 화면과 사용 중인 Windows 버전을 함께 알려주시면 확인에 도움이 됩니다.</p></div><div><a href="http://pf.kakao.com/_PxfkBX" target="_blank" rel="noreferrer">카카오톡 고객센터</a><a href="mailto:bgkcogito@naver.com">bgkcogito@naver.com</a><a href="tel:01030152717">010-3015-2717</a></div></section>
  </main>;
}
