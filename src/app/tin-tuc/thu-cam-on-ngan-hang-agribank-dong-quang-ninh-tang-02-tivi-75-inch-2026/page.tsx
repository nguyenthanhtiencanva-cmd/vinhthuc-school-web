import type { Metadata } from "next";
import ThuCamOnAgribankContent from "./ThuCamOnAgribankContent";

export const metadata: Metadata = {
  title:
    "Thư cảm ơn Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh trao tặng 02 chiếc Tivi 75 inch cho Trường TH & THCS Vĩnh Thực",
  description:
    "Nhân dịp Ngày Nhà giáo Việt Nam 20/11, Trường TH & THCS Vĩnh Thực trân trọng gửi Thư cảm ơn số 48/TH&THCS tới Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh đã quan tâm, sẻ chia và trao tặng 02 chiếc Tivi 75 inch phục vụ giảng dạy nơi xã đảo.",
  openGraph: {
    type: "article",
    siteName: "Trường TH & THCS Vĩnh Thực",
    locale: "vi_VN",
    title:
      "Thư cảm ơn Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh trao tặng 02 chiếc Tivi 75 inch cho Trường TH & THCS Vĩnh Thực",
    description:
      "Món quà thiết thực nhân dịp 20/11 từ Agribank Chi nhánh Đông Quảng Ninh giúp thầy và trò Trường TH & THCS Vĩnh Thực nâng cao chất lượng dạy học hiện đại nơi biển đảo tiền tiêu.",
    url: "https://ththcsvinhthuc.edu.vn/tin-tuc/thu-cam-on-ngan-hang-agribank-dong-quang-ninh-tang-02-tivi-75-inch-2026",
    images: [
      {
        url: "https://ththcsvinhthuc.edu.vn/images/thu-cam-on-agribank-2026/thu-cam-on-agribank-og-1200x630.jpg",
        secureUrl:
          "https://ththcsvinhthuc.edu.vn/images/thu-cam-on-agribank-2026/thu-cam-on-agribank-og-1200x630.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Thư cảm ơn Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh của Trường TH & THCS Vĩnh Thực",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Thư cảm ơn Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh trao tặng 02 chiếc Tivi 75 inch",
    description:
      "Món quà ý nghĩa nhân dịp 20/11 từ Agribank Chi nhánh Đông Quảng Ninh gửi tới thầy và trò Trường TH & THCS Vĩnh Thực.",
    images: [
      {
        url: "https://ththcsvinhthuc.edu.vn/images/thu-cam-on-agribank-2026/thu-cam-on-agribank-og-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Thư cảm ơn Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh của Trường TH & THCS Vĩnh Thực",
      },
    ],
  },
};

export default function ThuCamOnAgribankPage() {
  return <ThuCamOnAgribankContent />;
}
