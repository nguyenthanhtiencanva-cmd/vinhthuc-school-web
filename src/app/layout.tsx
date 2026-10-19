import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TRƯỜNG TH & THCS VĨNH THỰC - Soi đường tri thức – Vững bước tương lai",
  description:
    "Cổng thông tin điện tử Trường Tiểu học và Trung học cơ sở Vĩnh Thực, trực thuộc UBND xã Vĩnh Thực, Thành phố Quảng Ninh.",
  icons: {
    icon: "/brand/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${beVietnamPro.variable} scroll-smooth font-sans`}
    >
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-sky-600 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
