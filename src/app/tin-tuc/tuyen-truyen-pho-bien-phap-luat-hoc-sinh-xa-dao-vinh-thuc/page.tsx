import type { Metadata } from "next";
import TuyenTruyenPhapLuatContent from "./TuyenTruyenPhapLuatContent";

export const metadata: Metadata = {
  title:
    "Trường TH & THCS Vĩnh Thực phối hợp tuyên truyền, phổ biến pháp luật: Xây dựng trường học an toàn nơi biển đảo",
  description:
    "Ngày 06/11/2026, Trường TH & THCS Vĩnh Thực phối hợp cùng Đồn Biên phòng cửa khẩu cảng Vạn Gia và Công an xã Vĩnh Thực tổ chức tuyên truyền phòng chống ma túy và mua bán người cho toàn thể cán bộ, giáo viên và học sinh.",
  openGraph: {
    type: "article",
    siteName: "Trường TH & THCS Vĩnh Thực",
    locale: "vi_VN",
    title:
      "Trường TH & THCS Vĩnh Thực phối hợp tuyên truyền pháp luật: Xây dựng trường học an toàn nơi biển đảo",
    description:
      "Chương trình tuyên truyền phòng chống ma túy, mua bán người hưởng ứng Ngày Pháp luật Việt Nam 9/11 tại Trường TH & THCS Vĩnh Thực, phối hợp cùng Đồn Biên phòng CKC Vạn Gia và Công an xã.",
    url: "https://ththcsvinhthuc.edu.vn/tin-tuc/tuyen-truyen-pho-bien-phap-luat-hoc-sinh-xa-dao-vinh-thuc",
    images: [
      {
        url: "https://ththcsvinhthuc.edu.vn/images/tuyen-truyen-phap-luat-2026/tuyen-truyen-phap-luat-og-1200x630.jpg",
        secureUrl:
          "https://ththcsvinhthuc.edu.vn/images/tuyen-truyen-phap-luat-2026/tuyen-truyen-phap-luat-og-1200x630.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Tuyên truyền phổ biến pháp luật tại Trường TH & THCS Vĩnh Thực",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Trường TH & THCS Vĩnh Thực phối hợp tuyên truyền pháp luật: Xây dựng trường học an toàn nơi biển đảo",
    description:
      "Chương trình tuyên truyền phòng chống ma túy, mua bán người hưởng ứng Ngày Pháp luật Việt Nam 9/11 tại Trường TH & THCS Vĩnh Thực.",
    images: [
      {
        url: "https://ththcsvinhthuc.edu.vn/images/tuyen-truyen-phap-luat-2026/tuyen-truyen-phap-luat-og-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Tuyên truyền phổ biến pháp luật tại Trường TH & THCS Vĩnh Thực",
      },
    ],
  },
};

export default function TuyenTruyenPhapLuatPage() {
  return <TuyenTruyenPhapLuatContent />;
}
