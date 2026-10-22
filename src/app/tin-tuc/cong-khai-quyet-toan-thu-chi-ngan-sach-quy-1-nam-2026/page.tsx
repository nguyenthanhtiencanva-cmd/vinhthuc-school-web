import type { Metadata } from "next";
import CongKhaiQuy1Content from "./CongKhaiQuy1Content";

export const metadata: Metadata = {
  title: "Công khai quyết toán thu - chi ngân sách nhà nước Quý I năm 2026 - Trường TH & THCS Vĩnh Thực",
  description:
    "Công khai số liệu quyết toán thu chi ngân sách nhà nước Quý I năm 2026 của Trường TH&THCS Vĩnh Thực theo Quyết định số 29/QĐ-TH&THCS có xác nhận của Kho bạc Nhà nước.",
  openGraph: {
    title: "Công khai quyết toán thu - chi ngân sách nhà nước Quý I năm 2026 - Trường TH&THCS Vĩnh Thực",
    description:
      "Công khai số liệu quyết toán thu chi ngân sách Quý I năm 2026 theo Quyết định số 29/QĐ-TH&THCS kèm đầy đủ 4 biểu mẫu xác nhận của Kho bạc Nhà nước.",
    url: "https://ththcsvinhthuc.edu.vn/tin-tuc/cong-khai-quyet-toan-thu-chi-ngan-sach-quy-1-nam-2026",
    images: [
      {
        url: "/images/quyet-dinh-29-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Quyết định công khai tài chính ngân sách Quý I/2026 Trường TH&THCS Vĩnh Thực",
      },
    ],
  },
};

export default function CongKhaiQuy1Page() {
  return <CongKhaiQuy1Content />;
}
