import Link from "next/link";

export const metadata = {
  title: "PAWU Hospital 설치 도움말",
  description: "PAWU Hospital Windows 설치 문제 해결 및 고객지원 안내",
};

export default function HospitalInstallHelpPage() {
  return (
    <main style={{maxWidth:920,margin:"0 auto",padding:"48px 24px",fontFamily:"Arial, sans-serif",lineHeight:1.7,color:"#173c35"}}>
      <p style={{fontWeight:800,letterSpacing:2,fontSize:12}}>PAWU HOSPITAL · WINDOWS</p>
      <h1 style={{fontSize:40,margin:"8px 0 12px"}}>설치 문제 해결</h1>
      <p>Microsoft Store 또는 PAWU 공식 다운로드 센터를 통해 PAWU Hospital을 설치할 때 문제가 발생한 경우 아래 내용을 확인해 주세요.</p>
      <hr style={{margin:"32px 0",border:0,borderTop:"1px solid #ddd"}} />
      <h2>일반적인 설치 문제</h2>
      <ul>
        <li><b>사용자가 설치를 취소함:</b> 설치를 다시 시작하고 완료될 때까지 설치 창을 종료하지 마세요.</li>
        <li><b>애플리케이션이 이미 설치됨:</b> 기존 PAWU Hospital을 실행하거나 Windows 앱 설정에서 기존 버전을 제거한 뒤 다시 설치하세요.</li>
        <li><b>다른 설치가 진행 중:</b> 진행 중인 다른 설치를 완료한 뒤 다시 시도하세요.</li>
        <li><b>디스크 공간 부족:</b> 시스템 드라이브의 여유 공간을 확보한 뒤 다시 설치하세요.</li>
        <li><b>재부팅 필요:</b> Windows를 재시작한 뒤 다시 설치하세요.</li>
        <li><b>네트워크 오류:</b> 인터넷 연결을 확인한 뒤 다시 시도하세요.</li>
        <li><b>보안 정책으로 설치 차단:</b> 병원 PC의 관리자 또는 보안 담당자에게 문의하세요.</li>
      </ul>
      <h2 style={{marginTop:32}}>지원</h2>
      <p>문제가 계속되면 아래 고객지원으로 문의해 주세요.</p>
      <p><b>이메일:</b> <a href="mailto:contact@bgkcogito.co.kr">contact@bgkcogito.co.kr</a><br/><b>전화:</b> <a href="tel:+821030152717">010-3015-2717</a></p>
      <p style={{marginTop:32}}><Link href="/hospital-download">PAWU Hospital 다운로드 센터로 돌아가기</Link></p>
    </main>
  );
}
