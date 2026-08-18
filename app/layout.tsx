import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pawu.bgkcogito.co.kr"),
  title: {
    default: "PAWU | 병원과 보호자의 진료 흐름을 연결합니다",
    template: "%s | PAWU",
  },
  description:
    "예약부터 진료, 처방, 입원경과와 사후관리까지 병원 프로그램과 보호자 서비스를 연결하는 반려동물 의료 플랫폼 PAWU.",
  keywords: [
    "PAWU",
    "포우",
    "동물병원 예약",
    "동물병원 프로그램",
    "반려동물 의료 플랫폼",
    "전자차트",
      ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "PAWU | 예약부터 진료 완료까지 하나의 흐름으로",
    description:
      "예약부터 진료 완료와 사후관리까지 병원과 보호자를 연결하는 반려동물 의료 플랫폼",
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
    title: "PAWU | 예약부터 진료 완료까지 하나의 흐름으로",
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
