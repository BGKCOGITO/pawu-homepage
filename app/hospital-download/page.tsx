import Link from "next/link";
import styles from "./page.module.css";

const GITHUB_LATEST_RELEASE_API = "https://api.github.com/repos/BGKCOGITO/pawu-homepage/releases/latest";
const KAKAO_CHANNEL_URL = "http://pf.kakao.com/_PxfkBX";
const MICROSOFT_STORE_URL = "https://apps.microsoft.com/store/detail/XP89QMZ7DN8J77";

type GitHubReleaseAsset = { name: string; browser_download_url: string; size: number; digest?: string | null };
type GitHubRelease = { tag_name: string; body: string | null; published_at: string | null; assets: GitHubReleaseAsset[] };
type Release = { version: string; notes: string[]; published_at: string; sha256: string | null };

function parseReleaseNotes(body: string | null) {
  if (!body) return [];
  return Array.from(new Set(body.split(/\r?\n/).map((line) => line.trim()).filter((line) => /^[-*•]\s+/.test(line)).map((line) => line.replace(/^[-*•]\s+/, "").trim()).filter(Boolean))).slice(0, 8);
}

async function getRelease(): Promise<Release | null> {
  try {
    const response = await fetch(GITHUB_LATEST_RELEASE_API, {
      headers: { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", "User-Agent": "PAWU-Hospital-Homepage" },
      next: { revalidate: 300 },
    });
    if (!response.ok) return null;
    const release = (await response.json()) as GitHubRelease;
    const installer = release.assets?.find((asset) => asset.name.toLowerCase().endsWith(".exe"));
    return {
      version: "0.1.7",
      notes: parseReleaseNotes(release.body),
      published_at: release.published_at || "",
      sha256: installer?.digest?.replace(/^sha256:/i, "") || null,
    };
  } catch {
    return null;
  }
}

const faqs = [
  ["기존 병원 프로그램을 중단해야 하나요?", "아닙니다. 기존 프로그램을 유지한 상태에서 PAWU를 병행해 체험할 수 있습니다."],
  ["병원 프로그램은 어디에서 설치하나요?", "PAWU Hospital은 Microsoft Store를 통해 안전하게 설치할 수 있습니다."],
  ["설치가 어려우면 도움을 받을 수 있나요?", "카카오톡 고객센터를 통해 설치 과정과 병원 계정 이용 방법을 안내받을 수 있습니다."],
  ["업데이트는 어떻게 받나요?", "Microsoft Store를 통해 PAWU Hospital의 최신 버전을 설치하고 업데이트할 수 있습니다."],
  ["무료 체험도 같은 프로그램을 사용하나요?", "네. 체험 병원도 실제 운영 프로그램을 사용하고 병원의 의견을 제품 개선에 반영합니다."],
];

export default async function HospitalDownloadPage() {
  const release = await getRelease();
  const version = "0.1.7";
  const notes = release?.notes?.length ? release.notes : [
    "병원 프로그램 메뉴와 화면 사용성 개선",
    "진료기록 환자 검색 및 날짜별 조회 보완",
    "처방관리 입력 흐름과 환자 선택 개선",
    "공식 다운로드 센터와 업데이트 배포 구조 정리",
  ];

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>PAWU <span>HOSPITAL</span></Link>
        <nav>
          <Link href="/">PAWU 소개</Link>
          <Link href="/#trial">무료 체험</Link>
          <a href={KAKAO_CHANNEL_URL} target="_blank" rel="noreferrer">고객센터</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p>PAWU HOSPITAL · WINDOWS</p>
          <h1>병원 프로그램을<br /><span>안전하게 내려받으세요.</span></h1>
          <p className={styles.lead}>Microsoft Store 설치 방법, 업데이트 내용과 자주 묻는 질문을 한곳에서 확인할 수 있습니다.</p>
          <div className={styles.heroPoints}><span>Windows 10/11</span><span>64-bit</span><span>기존 시스템과 병행</span><span>무료 체험 가능</span></div>
        </div>

        <div className={styles.downloadCard}>
          <div className={styles.cardTop}><div><small>CURRENT VERSION</small><strong>V{version}</strong></div><span>⊞</span></div>
          <h2>PAWU Hospital</h2>
          <p>동물병원용 Windows 프로그램</p>
          <a className={styles.downloadButton} href={MICROSOFT_STORE_URL} target="_blank" rel="noreferrer">Microsoft Store에서 설치</a>
          <div className={styles.fileInfo}><span>Microsoft Store 공식 배포</span><span>Windows 10/11</span></div>
          <small>PAWU Hospital은 Microsoft Store를 통해 안전하게 설치 및 업데이트할 수 있습니다.</small>
        </div>
      </section>

      <section className={styles.trustBar}>
        <article><span>01</span><b>공식 Store 설치</b><p>Microsoft Store를 통한 안전한 설치</p></article>
        <article><span>02</span><b>기존 프로그램 병행</b><p>당장 교체하지 않고 먼저 체험</p></article>
        <article><span>03</span><b>설치 지원</b><p>필요하면 고객센터에서 안내</p></article>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}><p>BEFORE DOWNLOAD</p><h2>다운로드 전에 확인해 주세요.</h2></div>
        <div className={styles.checkGrid}>
          <article><b>운영체제</b><p>Windows 10 또는 Windows 11, 64-bit PC에서 사용합니다.</p></article>
          <article><b>병원 계정</b><p>체험 또는 병원 계정 안내를 받은 뒤 로그인할 수 있습니다.</p></article>
          <article><b>공식 배포</b><p>Microsoft Store의 PAWU Hospital 페이지에서 설치해 주세요.</p></article>
          <article><b>기존 업무</b><p>기존 병원 프로그램을 유지한 상태에서 병행할 수 있습니다.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.installSection}`}>
        <div className={styles.heading}><p>INSTALL GUIDE</p><h2>설치는 세 단계면 끝납니다.</h2></div>
        <div className={styles.steps}>
          <article><span>01</span><h3>Store 열기</h3><p>상단 버튼으로 Microsoft Store의 PAWU Hospital 페이지를 엽니다.</p></article>
          <article><span>02</span><h3>설치</h3><p>Microsoft Store에서 설치 버튼을 눌러 설치를 완료합니다.</p></article>
          <article><span>03</span><h3>로그인</h3><p>PAWU Hospital을 실행하고 안내받은 병원 계정으로 로그인합니다.</p></article>
        </div>
        <Link className={styles.helpLink} href="/hospital-install-help">설치 문제 해결 안내 보기 →</Link>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}><p>AFTER INSTALL</p><h2>설치 후 병원에서 확인할 수 있는 것</h2></div>
        <div className={styles.afterGrid}>
          <article><span>예약관리</span><p>보호자 예약 요청과 증상·환자정보 확인</p></article>
          <article><span>보호자 채팅</span><p>반려동물 정보를 함께 보며 병원과 보호자가 소통</p></article>
          <article><span>전자차트·처방</span><p>진료기록과 처방을 환자별로 연결</p></article>
          <article><span>입원관리</span><p>입원 경과와 사진을 보호자에게 전달</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.updateSection}`}>
        <div className={styles.heading}><p>RELEASE NOTE</p><h2>최근 업데이트</h2></div>
        <div className={styles.updateCard}>
          <div><small>LATEST</small><strong>V{version}</strong>{release?.published_at && <span>{release.published_at.slice(0,10)}</span>}</div>
          <ul>{notes.map((note) => <li key={note}>{note}</li>)}</ul>
        </div>
        {release?.sha256 && <div className={styles.hash}><b>SHA256</b><code>{release.sha256}</code></div>}
      </section>

      <section className={styles.section}>
        <div className={styles.heading}><p>FAQ</p><h2>설치 전 자주 묻는 질문</h2></div>
        <div className={styles.faqList}>{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </section>

      <section className={styles.support}>
        <div><p>NEED HELP?</p><h2>설치부터 체험까지<br />PAWU가 안내합니다.</h2><span>프로그램을 먼저 받아보고 병원 환경에 맞는지 확인해 보세요.</span></div>
        <div><a href={MICROSOFT_STORE_URL} target="_blank" rel="noreferrer">Microsoft Store에서 설치</a><a href={KAKAO_CHANNEL_URL} target="_blank" rel="noreferrer">카카오톡 고객센터</a><Link href="/#trial">무료 체험 신청</Link></div>
      </section>

      <footer className={styles.footer}><Link href="/">PAWU</Link><span>© {new Date().getFullYear()} BGK. All rights reserved.</span></footer>
    </main>
  );
}
