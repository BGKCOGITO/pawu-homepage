import Link from "next/link";

export default function PolicyFooterLinks() {
  return (
    <div className="policy-footer-links">
      <Link href="/policies/privacy">개인정보처리방침</Link>
      <span aria-hidden="true">|</span>
      <Link href="/account-deletion">계정 삭제</Link>
      <span aria-hidden="true">|</span>
      <a
        href="http://pf.kakao.com/_PxfkBX"
        target="_blank"
        rel="noopener noreferrer"
      >
        고객센터
      </a>
    </div>
  );
}
