PAWU 홈페이지 정책/고객센터 하단 링크 패치

현재 공개 저장소의 app/layout.tsx 구조를 기준으로 작성했습니다.

적용 파일
1) app/layout.tsx
   - GitHub의 기존 app/layout.tsx를 이 파일로 교체

2) APPEND_TO_GLOBALS.css
   - 내용 전체를 GitHub app/globals.css 맨 아래에 붙여넣기

배포 후 모든 페이지 하단에 다음 메뉴가 표시됩니다.

개인정보처리방침 | 계정 삭제 | 고객센터

연결 주소
- 개인정보처리방침: /privacy
- 계정 삭제: /account-deletion
- 고객센터: http://pf.kakao.com/_PxfkBX

기존 메인페이지, 무료 체험, 병원 프로그램 다운로드, GitHub Release 자동연동에는 손대지 않습니다.

기존 components/PolicyFooterLinks.tsx는 더 이상 필요하지 않지만 남아 있어도 동작에는 문제가 없습니다.
