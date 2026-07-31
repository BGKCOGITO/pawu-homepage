import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "PAWU 공식 홈페이지 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="legal-back" href="/">
          ← PAWU 홈으로
        </Link>
        <p className="eyebrow">PRIVACY POLICY</p>
        <h1>개인정보처리방침</h1>

        <section>
          <h2>1. 적용 범위</h2>
          <p>
            본 방침은 PAWU 서비스 소개 홈페이지에 적용됩니다. 실제 PAWU
            서비스의 개인정보 처리 내용은 서비스 내부의 별도 방침을 따릅니다.
          </p>
        </section>

        <section>
          <h2>2. 문의 과정에서 처리하는 정보</h2>
          <p>
            이메일 또는 전화 문의 시 회신과 상담을 위해 이용자가 제공한 이름,
            연락처, 이메일 주소와 문의 내용을 처리할 수 있습니다.
          </p>
        </section>

        <section>
          <h2>3. 개인정보 보호 문의</h2>
          <p>
            상호: BGK
            <br />
            대표자: {site.representative}
            <br />
            이메일: <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            연락처: {site.phone}
          </p>
        </section>

        <p className="legal-date">시행일: 2026년 7월 31일</p>
      </div>
    </main>
  );
}
