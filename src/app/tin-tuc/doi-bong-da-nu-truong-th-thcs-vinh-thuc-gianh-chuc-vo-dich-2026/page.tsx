import type { Metadata } from "next";
import GiaiBongDaNu2026Content from "./GiaiBongDaNu2026Content";

export const metadata: Metadata = {
  title:
    "Vỡ òa niềm vui: Đội bóng đá nữ Trường TH & THCS Vĩnh Thực xuất sắc giành chức Vô địch Giải Bóng đá nữ năm 2026",
  description:
    "Ngày 17/11/2026, hướng tới chào mừng Ngày Văn hóa Việt Nam, Ngày hội Đại đoàn kết toàn dân tộc và Ngày Nhà giáo Việt Nam 20/11, đội bóng đá nữ cán bộ, giáo viên Trường TH & THCS Vĩnh Thực đã thi đấu bùng nổ và xuất sắc giành chức Vô địch Giải Bóng đá nữ xã Vĩnh Thực năm 2026.",
  openGraph: {
    type: "article",
    siteName: "Trường TH & THCS Vĩnh Thực",
    locale: "vi_VN",
    title:
      "Đội bóng đá nữ Trường TH & THCS Vĩnh Thực xuất sắc giành chức Vô địch Giải Bóng đá nữ xã Vĩnh Thực năm 2026",
    description:
      "Món quà tinh thần đầy tự hào chào mừng Ngày Nhà giáo Việt Nam 20/11: Đội bóng đá nữ Trường TH & THCS Vĩnh Thực lên ngôi Vô địch giải đấu xã Vĩnh Thực năm 2026.",
    url: "https://ththcsvinhthuc.edu.vn/tin-tuc/doi-bong-da-nu-truong-th-thcs-vinh-thuc-gianh-chuc-vo-dich-2026",
    images: [
      {
        url: "https://ththcsvinhthuc.edu.vn/images/giai-bong-da-nu-2026/giai-bong-da-nu-2026-og-1200x630.jpg",
        secureUrl:
          "https://ththcsvinhthuc.edu.vn/images/giai-bong-da-nu-2026/giai-bong-da-nu-2026-og-1200x630.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Đội bóng đá nữ Trường TH & THCS Vĩnh Thực giành chức Vô địch Giải Bóng đá nữ năm 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Đội bóng đá nữ Trường TH & THCS Vĩnh Thực xuất sắc giành chức Vô địch Giải Bóng đá nữ năm 2026",
    description:
      "Món quà ý nghĩa chào mừng Ngày Nhà giáo Việt Nam 20/11: Các cô giáo Trường TH & THCS Vĩnh Thực xuất sắc vô địch Giải Bóng đá nữ xã Vĩnh Thực 2026.",
    images: [
      {
        url: "https://ththcsvinhthuc.edu.vn/images/giai-bong-da-nu-2026/giai-bong-da-nu-2026-og-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Đội bóng đá nữ Trường TH & THCS Vĩnh Thực giành chức Vô địch Giải Bóng đá nữ năm 2026",
      },
    ],
  },
};

export default function GiaiBongDaNu2026Page() {
  return <GiaiBongDaNu2026Content />;
}
