import type { Metadata } from "next";
import StemKhtn7Content from "./StemKhtn7Content";

export const metadata: Metadata = {
  title: "Sôi nổi tiết học STEM Khoa học tự nhiên 7: Chế tạo mô hình nhà cách âm - Trường TH & THCS Vĩnh Thực",
  description:
    "Tiết học STEM môn Khoa học tự nhiên 7 đầy hào hứng và sáng tạo của các em học sinh Trường TH&THCS Vĩnh Thực với chủ đề Chế tạo mô hình nhà cách âm từ vật liệu tái chế.",
  openGraph: {
    title: "Tiết học STEM Khoa học tự nhiên 7: Chế tạo mô hình nhà cách âm - Trường TH&THCS Vĩnh Thực",
    description:
      "Học sinh lớp 7 Trường TH&THCS Vĩnh Thực sáng tạo chế tạo mô hình nhà cách âm từ vật liệu tái chế, vận dụng kiến thức sóng âm và phản xạ âm thanh.",
    url: "https://ththcsvinhthuc.edu.vn/tin-tuc/tiet-hoc-stem-khoa-hoc-tu-nhien-7-mo-hinh-nha-cach-am",
    images: [
      {
        url: "/images/stem-khtn7-nha-cach-am-1.jpg",
        width: 1200,
        height: 630,
        alt: "Tiết học STEM Khoa học tự nhiên 7 Trường TH&THCS Vĩnh Thực",
      },
    ],
  },
};

export default function StemKhtn7Page() {
  return <StemKhtn7Content />;
}
