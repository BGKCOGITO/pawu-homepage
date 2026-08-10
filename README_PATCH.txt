PAWU 홈페이지 V14.1.5 배포 운영센터 연동 패치

GitHub BGKCOGITO/pawu-homepage에 같은 경로로 덮어쓰기:
- app/hospital-download/page.tsx

page.module.css는 기존 다운로드센터 스타일과 동일합니다. 이미 존재한다면 교체하지 않아도 됩니다.

이제 버전/다운로드 URL/업데이트 내역은 pawu-web 관리자 > 프로그램 배포에서 자동으로 읽어옵니다.
매 버전마다 GitHub나 Vercel 환경변수를 수정할 필요가 없습니다.
