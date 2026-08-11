PAWU 홈페이지 푸터 - 계정 삭제 링크 추가 패치

목표
홈페이지 하단에 다음 링크를 표시합니다.
개인정보처리방침 | 계정 삭제 | 고객센터

1) components/PolicyFooterLinks.tsx 를 pawu-homepage/components/ 에 업로드합니다.

2) 홈페이지에서 실제 Footer를 렌더링하는 파일을 열고 import를 추가합니다.

import PolicyFooterLinks from "@/components/PolicyFooterLinks";

3) 기존 Footer 안쪽의 가장 아래에 다음 한 줄을 추가합니다.

<PolicyFooterLinks />

4) PATCH.css 내용을 기존 globals.css 또는 Footer용 CSS 맨 아래에 추가합니다.

5) GitHub Commit 후 Vercel 자동 배포를 확인합니다.

계정 삭제 목적지:
/account-deletion
=> https://pawu.bgkcogito.co.kr/account-deletion

주의:
- 기존 홈페이지 섹션/무료체험/다운로드/고객센터 기능은 변경하지 않습니다.
- 개인정보처리방침의 실제 홈페이지 경로가 /policies/privacy 가 아니라면 해당 href만 기존 경로로 바꾸세요.
