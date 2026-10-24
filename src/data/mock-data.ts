import { NewsItem, EventItem, QuickCardItem, StatItem, ActivityItem } from "@/types";

export const QUICK_CARDS: QuickCardItem[] = [
  {
    id: "card-1",
    title: "THÔNG BÁO",
    description: "Cập nhật nhanh chóng các thông tin quan trọng",
    iconName: "megaphone",
    bgColor: "bg-[#EBF3FC]",
    iconColor: "text-[#0867C8]",
    arrowColor: "bg-[#0867C8] text-white",
    href: "#thong-bao",
  },
  {
    id: "card-2",
    title: "LỊCH CÔNG TÁC",
    description: "Xem lịch tuần, lịch tháng và sự kiện sắp diễn ra",
    iconName: "calendar",
    bgColor: "bg-[#FEF7EA]",
    iconColor: "text-[#E58A00]",
    arrowColor: "bg-[#E58A00] text-white",
    href: "#lich-cong-tac",
  },
  {
    id: "card-3",
    title: "CÔNG KHAI",
    description: "Thông tin công khai theo quy định của ngành",
    iconName: "file-text",
    bgColor: "bg-[#EEFAF2]",
    iconColor: "text-[#10B981]",
    arrowColor: "bg-[#10B981] text-white",
    href: "/tin-tuc/cong-khai-chi-ngan-sach-quy-3-nam-2026",
  },
  {
    id: "card-4",
    title: "THƯ VIỆN",
    description: "Album ảnh, video, reels và tài liệu học tập",
    iconName: "image",
    bgColor: "bg-[#F8EEFB]",
    iconColor: "text-[#A855F7]",
    arrowColor: "bg-[#A855F7] text-white",
    href: "#thu-vien",
  },
];

export const FEATURED_NEWS: NewsItem = {
  id: "news-stem-khtn7-nha-cach-am",
  title: "Sôi nổi tiết học STEM Khoa học tự nhiên 7: Chế tạo mô hình nhà cách âm",
  category: "CHUYÊN MÔN & STEM",
  date: "23/10/2026",
  summary:
    "Học sinh khối 7 Trường TH&THCS Vĩnh Thực biến kiến thức sóng âm và phản xạ âm thanh thành những mô hình nhà cách âm độc đáo, sáng tạo từ vật liệu tái chế.",
  image: "/images/stem-khtn7-nha-cach-am-1.jpg",
  slug: "tiet-hoc-stem-khoa-hoc-tu-nhien-7-mo-hinh-nha-cach-am",
  featured: true,
};

export const RECENT_NEWS: NewsItem[] = [
  {
    id: "news-stem-khtn7-nha-cach-am",
    title: "Sôi nổi tiết học STEM Khoa học tự nhiên 7: Chế tạo mô hình nhà cách âm",
    category: "CHUYÊN MÔN & STEM",
    date: "23/10/2026",
    image: "/images/stem-khtn7-nha-cach-am-1.jpg",
    slug: "tiet-hoc-stem-khoa-hoc-tu-nhien-7-mo-hinh-nha-cach-am",
  },
  {
    id: "news-tong-ket-hoat-dong-he-2026",
    title: "Hội nghị tổng kết các hoạt động quản lý, giáo dục thanh thiếu nhi, học sinh hè năm 2026",
    category: "HOẠT ĐỘNG HÈ",
    date: "04/09/2026",
    summary:
      "Ban Chỉ đạo hoạt động hè xã Vĩnh Thực tổng kết công tác quản lý, chăm sóc và giáo dục thanh thiếu nhi, học sinh hè năm 2026.",
    image: "/images/tong-ket-hoat-dong-he-2026.jpg",
    slug: "tong-ket-hoat-dong-quan-ly-giao-duc-thanh-thieu-nhi-he-2026",
  },
  {
    id: "news-cong-khai-thu-chi-quy-3-2026",
    title: "Công khai số liệu dự toán và tình hình thực chi ngân sách nhà nước Quý III năm 2026",
    category: "CÔNG KHAI NGÂN SÁCH",
    date: "31/08/2026",
    image: "/images/cong-khai-quy-3-cover.jpg",
    slug: "cong-khai-chi-ngan-sach-quy-3-nam-2026",
  },
  {
    id: "news-cong-khai-thu-chi-quy-2-2026",
    title: "Công khai số liệu dự toán và tình hình thực chi ngân sách nhà nước Quý II năm 2026",
    category: "CÔNG KHAI NGÂN SÁCH",
    date: "06/07/2026",
    image: "/images/cong-khai-quy-2-cover.jpg",
    slug: "cong-khai-chi-ngan-sach-quy-2-nam-2026",
  },
  {
    id: "news-cong-khai-thu-chi-quy-1-2026",
    title: "Công khai quyết toán thu – chi ngân sách nhà nước Quý I năm 2026 theo Quyết định số 29/QĐ-TH&THCS",
    category: "CÔNG KHAI NGÂN SÁCH",
    date: "06/04/2026",
    image: "/images/quyet-dinh-29-cover.jpg",
    slug: "cong-khai-quyet-toan-thu-chi-ngan-sach-quy-1-nam-2026",
  },
  {
    id: "news-tong-ket-2025-2026",
    title: "Tổng kết năm học 2025–2026 – Nhìn lại dấu ấn, mở ra những nhiệm vụ mới",
    category: "TỔNG KẾT & SỰ KIỆN",
    date: "03/09/2026",
    image: "/images/tong-ket-nam-hoc-2025-2026.jpg",
    slug: "tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  },
  {
    id: "news-1",
    title: "Học sinh khối 6 trải nghiệm tham quan di tích lịch sử",
    category: "HOẠT ĐỘNG TRẢI NGHIỆM",
    date: "24/05/2024",
    image: "/images/news-1.svg",
    slug: "hoc-sinh-khoi-6-trai-nghiem",
  },
  {
    id: "news-2",
    title: "Liên đội tổ chức chương trình “Kế hoạch nhỏ”",
    category: "HOẠT ĐỘNG ĐOÀN - ĐỘI",
    date: "22/05/2024",
    image: "/images/news-2.svg",
    slug: "lien-doi-to-chuc-ke-hoach-nho",
  },
  {
    id: "news-3",
    title: "Tổ Toán – Tin ứng dụng CNTT trong dạy học",
    category: "CHUYÊN MÔN",
    date: "20/05/2024",
    image: "/images/news-3.svg",
    slug: "to-toan-tin-ung-dung-cntt",
  },
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "evt-1",
    day: "05",
    month: "THÁNG 9",
    title: "Khai giảng năm học 2026 – 2027",
    time: "05/09/2026",
    location: "Trường TH & THCS Vĩnh Thực",
    slug: "khai-giang-nam-hoc-2026-2027",
  },
  {
    id: "evt-2",
    day: "--",
    month: "THÁNG 9",
    title: "Họp phụ huynh đầu năm",
    time: "Thời gian sẽ thông báo",
    location: "Trường TH & THCS Vĩnh Thực",
    slug: "hop-phu-huynh-dau-nam-2026-2027",
  },
];

export const SCHOOL_STATS: StatItem[] = [
  {
    value: "2025",
    label: "Năm sáp nhập theo Quyết định 220/QĐ-UBND",
    iconName: "award",
  },
  {
    value: "03",
    label: "Cơ sở giáo dục được sáp nhập",
    iconName: "users",
  },
  {
    value: "01",
    label: "Điểm trường trung tâm: Thôn Đầu Đông",
    iconName: "graduation-cap",
  },
  {
    value: "01",
    label: "Phân hiệu Vĩnh Trung: Thôn Vĩnh Trung",
    iconName: "trophy",
  },
];

export interface DepartmentItem {
  id: string;
  name: string;
  level: string;
  description: string;
  color: string;
}

export const DEPARTMENTS: DepartmentItem[] = [
  {
    id: "to-1-2-3",
    name: "Tổ 1 + 2 + 3",
    level: "Cấp Tiểu học",
    description: "Phụ trách chuyên môn khối lớp 1, 2 và 3; chú trọng rèn luyện nền nếp và kỹ năng học tập ban đầu.",
    color: "bg-blue-50 text-[#0867C8] border-blue-200",
  },
  {
    id: "to-4-5",
    name: "Tổ 4 + 5",
    level: "Cấp Tiểu học",
    description: "Phụ trách chuyên môn khối lớp 4 và 5; củng cố kiến thức nền tảng và chuẩn bị chuyển cấp vững chắc.",
    color: "bg-amber-50 text-[#D97706] border-amber-200",
  },
  {
    id: "to-khtn",
    name: "Tổ Khoa học tự nhiên",
    level: "Cấp THCS",
    description: "Giảng dạy các môn Toán, KHTN (Vật lý, Hóa học, Sinh học), Tin học, Công nghệ; đẩy mạnh giáo dục STEM.",
    color: "bg-emerald-50 text-[#059669] border-emerald-200",
  },
  {
    id: "to-khxh",
    name: "Tổ Khoa học xã hội",
    level: "Cấp THCS",
    description: "Giảng dạy Ngữ văn, Lịch sử - Địa lý, Ngoại ngữ, GDCD; bồi dưỡng phẩm chất, kỹ năng và bản sắc văn hóa biển đảo.",
    color: "bg-purple-50 text-[#7C3AED] border-purple-200",
  },
];

export const FEATURED_ACTIVITIES: ActivityItem[] = [
  {
    id: "act-1",
    title: "Ngày tựu trường",
    category: "Lễ hội",
    image: "/images/act-1.svg",
  },
  {
    id: "act-2",
    title: "Hoạt động trải nghiệm",
    category: "Kỹ năng sống",
    image: "/images/act-2.svg",
  },
  {
    id: "act-3",
    title: "Văn nghệ - Thể thao",
    category: "Phong trào",
    image: "/images/act-3.svg",
  },
  {
    id: "act-4",
    title: "STEM – Sáng tạo",
    category: "Khoa học",
    image: "/images/act-4.svg",
  },
  {
    id: "act-5",
    title: "Ngoại khóa",
    category: "Thực tế",
    image: "/images/act-5.svg",
  },
  {
    id: "act-6",
    title: "Chấm điểm thi đua",
    category: "Đoàn - Đội",
    image: "/images/act-6.svg",
  },
];
