import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "PAWU 개인정보처리방침",
  description: "PAWU 서비스의 개인정보 수집·이용·보관·삭제 및 이용자 권리를 안내합니다.",
};

const effectiveDate = "2026년 8월 11일";

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.brand}>PAWU</Link>
        <Link href="/" className={styles.home}>홈으로</Link>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>PRIVACY POLICY</p>
        <h1>개인정보처리방침</h1>
        <p>
          BGK(이하 “회사”)는 PAWU 서비스를 이용하는 보호자와 병원 관계자의
          개인정보를 중요하게 생각하며, 개인정보 보호 관련 법령과 Google Play
          정책에 따라 개인정보를 처리합니다.
        </p>
        <div className={styles.date}>시행일 {effectiveDate}</div>
      </section>

      <section className={styles.content}>
        <article>
          <h2>1. 개인정보의 수집 항목</h2>
          <p>회사는 서비스 제공 과정에서 다음 정보를 처리할 수 있습니다.</p>

          <h3>가. 회원 및 계정 정보</h3>
          <ul>
            <li>이름 또는 표시 이름, 이메일 주소, 로그인 식별정보</li>
            <li>Google·Kakao·Naver 등 소셜 로그인 제공자가 전달하는 계정 식별정보</li>
            <li>사용자가 직접 입력하는 연락처, 프로필 사진 등 선택 정보</li>
          </ul>

          <h3>나. 반려동물 및 서비스 이용 정보</h3>
          <ul>
            <li>반려동물 이름, 종, 품종, 생년월일, 성별, 체중, 사진, 특이사항</li>
            <li>사료, 복용약, 생활정보 등 사용자가 직접 등록한 반려동물 관리 정보</li>
            <li>동물병원 예약 날짜·시간·증상·요청사항 및 예약 상태</li>
            <li>병원과 보호자 사이의 채팅 내용 및 사용자가 첨부한 사진·파일</li>
            <li>병원이 PAWU를 통해 제공한 진료·처방·검사·예방접종·입원 경과 관련 정보</li>
          </ul>

          <h3>다. 위치정보</h3>
          <ul>
            <li>
              사용자가 위치 권한을 허용한 경우 가까운 동물병원 검색 및 거리 정렬을 위해
              단말의 현재 위치를 사용할 수 있습니다.
            </li>
            <li>
              PAWU는 가까운 병원 검색을 위해 필요한 범위에서 위치를 이용하며,
              지속적인 백그라운드 위치 추적을 목적으로 하지 않습니다.
            </li>
          </ul>

          <h3>라. 기기 및 서비스 운영 정보</h3>
          <ul>
            <li>푸시 알림 전송을 위한 기기 토큰</li>
            <li>접속 기록, 오류 기록, 서비스 이용 기록 등 서비스 안정성에 필요한 정보</li>
          </ul>
        </article>

        <article>
          <h2>2. 개인정보의 이용 목적</h2>
          <ul>
            <li>회원 가입, 로그인, 본인 계정 식별 및 서비스 이용자 관리</li>
            <li>반려동물 등록 및 건강·생활 기록 관리</li>
            <li>동물병원 검색, 예약 신청·승인·취소 및 예약 관련 알림 제공</li>
            <li>병원과 보호자 간 채팅 및 진료 관련 정보 전달</li>
            <li>처방·검사·예방접종·입원 경과 등의 기록 확인 기능 제공</li>
            <li>푸시 알림, 서비스 공지 및 중요한 이용 안내 제공</li>
            <li>오류 분석, 서비스 보안, 부정 이용 방지 및 서비스 품질 개선</li>
            <li>고객 문의 및 계정 삭제 요청 처리</li>
          </ul>
        </article>

        <article>
          <h2>3. 개인정보의 보유 및 이용기간</h2>
          <p>
            개인정보는 원칙적으로 수집·이용 목적이 달성되거나 회원이 계정 삭제를
            요청하여 삭제 절차가 완료되면 지체 없이 삭제합니다.
          </p>
          <p>
            다만 관계 법령에 따라 일정 기간 보관이 필요한 거래·분쟁·진료 관련 기록 등이
            있는 경우에는 해당 법령에서 정한 기간 동안 다른 정보와 분리하여 보관한 뒤 삭제할 수 있습니다.
          </p>
          <p>
            계정 삭제 방법과 삭제 요청 절차는
            {" "}
            <Link href="/account-deletion">계정 삭제 안내</Link>
            {" "}페이지에서 확인할 수 있습니다.
          </p>
        </article>

        <article>
          <h2>4. 개인정보의 제3자 제공</h2>
          <p>
            회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            다만 PAWU의 핵심 기능을 이용하기 위해 사용자가 특정 동물병원에 예약하거나
            진료·상담·입원 관련 서비스를 이용하는 경우, 서비스 제공에 필요한 범위에서
            해당 병원과 보호자·반려동물 정보를 연결할 수 있습니다.
          </p>
          <p>
            또한 이용자가 별도로 동의한 경우 또는 법령에 특별한 규정이 있는 경우에는
            필요한 범위에서 정보를 제공할 수 있습니다.
          </p>
        </article>

        <article>
          <h2>5. 외부 서비스 및 처리 인프라</h2>
          <p>PAWU는 서비스 제공을 위해 다음과 같은 외부 서비스 또는 클라우드 인프라를 사용할 수 있습니다.</p>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr><th>서비스</th><th>주요 이용 목적</th></tr>
              </thead>
              <tbody>
                <tr><td>Supabase</td><td>회원 인증, 데이터베이스, 파일 저장 등 서비스 백엔드 운영</td></tr>
                <tr><td>Google Firebase</td><td>푸시 알림 전송 및 앱 운영 지원</td></tr>
                <tr><td>Google</td><td>Google 계정 로그인</td></tr>
                <tr><td>Kakao</td><td>Kakao 계정 로그인 및 고객센터 연결</td></tr>
                <tr><td>Naver</td><td>Naver 계정 로그인 및 지도 기능</td></tr>
              </tbody>
            </table>
          </div>
          <p className={styles.note}>
            위 서비스의 서버 또는 처리 인프라가 대한민국 외 지역에 위치할 수 있습니다.
            회사는 실제 운영 설정과 각 제공자의 정책을 확인하여 개인정보가 안전하게 처리되도록 관리합니다.
          </p>
        </article>

        <article>
          <h2>6. 위치정보 이용 안내</h2>
          <p>
            사용자가 병원 찾기 기능에서 위치 사용을 허용하면 현재 위치를 기준으로 가까운
            병원을 보여줄 수 있습니다. 위치 권한을 허용하지 않아도 병원명·주소 등을 이용한
            검색 기능을 사용할 수 있습니다.
          </p>
        </article>

        <article>
          <h2>7. 계정 및 개인정보 삭제</h2>
          <p>
            PAWU에서 계정을 생성한 이용자는 앱 또는 웹의 내 정보 화면에서 계정 삭제를
            요청할 수 있습니다. 로그인할 수 없는 경우에도 공개된 계정 삭제 안내 페이지 또는
            고객센터를 통해 삭제를 요청할 수 있습니다.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/account-deletion">계정 삭제 안내</Link>
            <a
              className={styles.secondary}
              href="http://pf.kakao.com/_PxfkBX"
              target="_blank"
              rel="noopener noreferrer"
            >
              PAWU 고객센터
            </a>
          </div>
        </article>

        <article>
          <h2>8. 이용자의 권리와 행사 방법</h2>
          <p>
            이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지 및 계정 삭제를
            요청할 수 있습니다. 회사는 본인 확인 후 관련 법령에 따라 필요한 조치를 합니다.
          </p>
          <p>
            문의는 아래 개인정보 보호 담당자 이메일 또는 PAWU 고객센터를 이용해 주세요.
          </p>
        </article>

        <article>
          <h2>9. 개인정보의 안전성 확보 조치</h2>
          <ul>
            <li>인증된 사용자와 권한에 따른 데이터 접근 제한</li>
            <li>전송 구간의 암호화 통신 사용</li>
            <li>서비스 운영 권한 최소화 및 관리자 접근 통제</li>
            <li>데이터베이스 접근정책 및 서비스 로그를 이용한 보안 관리</li>
          </ul>
        </article>

        <article>
          <h2>10. 만 14세 미만 이용자</h2>
          <p>
            PAWU는 만 14세 미만 아동을 주요 대상으로 제공하는 서비스가 아닙니다.
            만 14세 미만 이용자가 법정대리인의 적법한 동의 없이 개인정보를 제공한 사실이
            확인되는 경우 회사는 확인 후 필요한 보호조치를 진행합니다.
          </p>
        </article>

        <article>
          <h2>11. 반려동물 의료정보 및 서비스 성격</h2>
          <p>
            PAWU는 동물병원과 보호자 사이의 예약, 기록 및 정보 전달을 지원하는 플랫폼입니다.
            PAWU 자체는 수의학적 진단·처방 또는 치료를 제공하지 않으며,
            반려동물의 의료적 판단은 반드시 수의사와 상담하시기 바랍니다.
          </p>
        </article>

        <article>
          <h2>12. 개인정보 보호 담당자 및 문의처</h2>
          <dl className={styles.contact}>
            <div><dt>사업자</dt><dd>BGK(비지케이)</dd></div>
            <div><dt>대표 및 개인정보 보호 담당자</dt><dd>장수빈</dd></div>
            <div><dt>이메일</dt><dd><a href="mailto:bgkcogito@naver.com">bgkcogito@naver.com</a></dd></div>
            <div><dt>전화</dt><dd><a href="tel:01030152717">010-3015-2717</a></dd></div>
            <div><dt>카카오톡 고객센터</dt><dd><a href="http://pf.kakao.com/_PxfkBX" target="_blank" rel="noopener noreferrer">PAWU 고객센터</a></dd></div>
          </dl>
        </article>

        <article>
          <h2>13. 개인정보처리방침의 변경</h2>
          <p>
            본 개인정보처리방침의 내용이 변경되는 경우 회사는 시행 전에 PAWU 홈페이지 또는
            서비스 내 공지를 통해 변경 내용을 안내합니다.
          </p>
          <p><strong>시행일: {effectiveDate}</strong></p>
        </article>
      </section>

      <footer className={styles.footer}>
        <Link href="/">PAWU 홈</Link>
        <Link href="/account-deletion">계정 삭제</Link>
        <a href="http://pf.kakao.com/_PxfkBX" target="_blank" rel="noopener noreferrer">고객센터</a>
      </footer>
    </main>
  );
}
