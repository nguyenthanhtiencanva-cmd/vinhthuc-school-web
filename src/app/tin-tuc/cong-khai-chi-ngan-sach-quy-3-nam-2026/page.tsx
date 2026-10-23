import type { Metadata } from "next";
import CongKhaiQuy3Content from "./CongKhaiQuy3Content";

export const metadata: Metadata = {
  title: "Công khai số liệu dự toán và thực chi ngân sách nhà nước Quý III năm 2026 - Trường TH & THCS Vĩnh Thực",
  description:
    "Công khai số liệu dự toán và tình hình thực chi ngân sách nhà nước Quý III năm 2026 của Trường TH&THCS Vĩnh Thực kèm 4 biểu mẫu và Biên bản niêm yết có dấu xác nhận của Kho bạc Nhà nước.",
  openGraph: {
    title: "Công khai số liệu dự toán và thực chi ngân sách nhà nước Quý III năm 2026 - Trường TH&THCS Vĩnh Thực",
    description:
      "Công khai số liệu dự toán và thực chi ngân sách Quý III năm 2026 theo Biên bản niêm yết Hội đồng nhà trường kèm đầy đủ 4 biểu mẫu đối chiếu có xác nhận của Kho bạc Nhà nước.",
    url: "https://ththcsvinhthuc.edu.vn/tin-tuc/cong-khai-chi-ngan-sach-quy-3-nam-2026",
    images: [
      {
        url: "/images/cong-khai-quy-3-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Biên bản công khai tài chính ngân sách Quý III/2026 Trường TH&THCS Vĩnh Thực",
      },
    ],
  },
};

export default function CongKhaiQuy3Page() {
  return <CongKhaiQuy3Content />;
}
