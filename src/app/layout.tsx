import type { Metadata } from "next";
import { Geist, Geist_Mono, Gamja_Flower } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hyeminpark9105.github.io/k-invitation"), // 배포 도메인(절대경로!)
  title: "최연아 🎉돌잔치🎉에 초대합니다.",
  description: "아빠 : 최동현 ♡ 엄마 : 박혜민 \n일시 : 2025년 9월 20일 토요일 오전 11시 30분",
  openGraph: {
    title: "최연아 🎉돌잔치🎉에 초대합니다.",
    description: "아빠 : 최동현 ♡ 엄마 : 박혜민 \n일시 : 2025년 9월 20일 토요일 오전 11시 30분",
    url: "/", // 공유할 대표 URL
    images: [
      {
        url: "/og.jpg",       // metadataBase와 합쳐져 절대경로가 됨
        width: 1200,
        height: 630,
        alt: "초대장 썸네일"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "최연아 🎉돌잔치🎉에 초대합니다.",
    description: "아빠 : 최동현 ♡ 엄마 : 박혜민 \n일시 : 2025년 9월 20일 토요일 오전 11시 30분",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
