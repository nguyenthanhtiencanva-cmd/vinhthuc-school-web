import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

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
  metadataBase: new URL("https://ththcsvinhthuc.edu.vn"),
  title: "TRƯỜNG TH & THCS VĨNH THỰC - Soi đường tri thức – Vững bước tương lai",
  description:
    "Cổng thông tin điện tử chính thức Trường Tiểu học và Trung học cơ sở Vĩnh Thực, trực thuộc UBND xã Vĩnh Thực, Thành phố Quảng Ninh.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/brand/logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/brand/logo.jpeg" },
    ],
  },
  openGraph: {
    title: "TRƯỜNG TH & THCS VĨNH THỰC - Cổng thông tin điện tử chính thức",
    description:
      "Soi đường tri thức – Vững bước tương lai. Trường TH & THCS Vĩnh Thực, xã Vĩnh Thực, TP. Quảng Ninh.",
    url: "https://ththcsvinhthuc.edu.vn",
    siteName: "Trường TH & THCS Vĩnh Thực",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/anh-hoc-sinh-vinh-thuc-v3.jpg",
        width: 1200,
        height: 630,
        alt: "Trường Tiểu học và Trung học cơ sở Vĩnh Thực",
      },
    ],
  },
  verification: {
    google: "google793a578b87f9f860",
    other: {
      "google-site-verification": [
        "google793a578b87f9f860",
        "google793a578b87f9f860.html",
      ],
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Trường Tiểu học và Trung học cơ sở Vĩnh Thực",
  alternateName: ["Trường TH & THCS Vĩnh Thực", "Trường TH&THCS Vĩnh Thực"],
  url: "https://ththcsvinhthuc.edu.vn",
  logo: "https://ththcsvinhthuc.edu.vn/brand/logo.jpeg",
  image: "https://ththcsvinhthuc.edu.vn/images/anh-hoc-sinh-vinh-thuc-v3.jpg",
  description:
    "Cổng thông tin điện tử chính thức Trường Tiểu học và Trung học cơ sở Vĩnh Thực, trực thuộc UBND xã Vĩnh Thực, Thành phố Quảng Ninh.",
  telephone: "0903280488",
  email: "c12vinhthuc.vinhthuc@quangninh.edu.vn",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Thôn Đầu Đông",
    addressLocality: "Xã Vĩnh Thực",
    addressRegion: "Quảng Ninh",
    addressCountry: "VN",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-sky-600 selection:text-white overflow-x-hidden w-full relative">
        <Header />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
