PAWU Homepage - Hospital Download Center Patch

변경 파일:
1) components/Header.tsx
   - 상단 메뉴에 '병원 프로그램' 추가
   - 다른 페이지에서도 홈 섹션 링크가 정상 동작하도록 /#... 경로 사용

2) app/hospital-download/page.tsx
3) app/hospital-download/page.module.css
   - 병원 프로그램 다운로드 센터 신규 페이지
   - 설치방법 / 최근 업데이트 / FAQ / 문의 영역
   - 프로그램 스크린샷은 포함하지 않음

GitHub 적용:
- 압축을 풀고 저장소 루트에 그대로 덮어쓰기
- GitHub에 Commit changes
- Vercel 자동 배포 확인

설치파일 연결:
Vercel pawu-homepage > Settings > Environment Variables
NEXT_PUBLIC_HOSPITAL_INSTALLER_URL = 실제 setup.exe 다운로드 URL
NEXT_PUBLIC_HOSPITAL_INSTALLER_VERSION = 표시할 버전 (예: V14.1.1)

환경변수 추가/변경 후 반드시 재배포해야 합니다.
