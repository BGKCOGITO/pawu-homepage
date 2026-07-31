import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pawu.bgkcogito.co.kr"),
  title: {
    default: "PAWU | 우리 아이의 건강을 연결합니다",
    template: "%s | PAWU",
  },
  description:
    "병원과 보호자를 연결해 우리 아이의 진료와 건강기록을 더 쉽고 따뜻하게 관리하는 반려동물 의료 플랫폼 PAWU.",
  keywords: [
    "PAWU",
    "포우",
    "동물병원 예약",
    "동물병원 프로그램",
    "반려동물 의료 플랫폼",
    "전자차트",
    "AI 진료보조",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "PAWU | 함께한 모든 날이 더 건강하도록",
    description:
      "우리 아이의 진료와 건강기록을 병원과 보호자가 함께 관리하는 반려동물 의료 플랫폼",
    url: "https://pawu.bgkcogito.co.kr",
    siteName: "PAWU",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "PAWU 반려동물 병원 통합 플랫폼",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAWU | 함께한 모든 날이 더 건강하도록",
    description: "병원과 보호자를 연결하는 반려동물 의료 플랫폼",
    images: ["/twitter-image.png"],
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PAWU",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: "https://pawu.bgkcogito.co.kr",
  creator: {
    "@type": "Organization",
    name: "BGK",
    url: "https://www.bgkcogito.co.kr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
