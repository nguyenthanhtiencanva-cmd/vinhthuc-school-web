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
    href: "#cong-khai",
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
  id: "news-tong-ket-2025-2026",
  title: "Tổng kết năm học 2025–2026 – Nhìn lại dấu ấn, mở ra những nhiệm vụ mới",
  category: "TỔNG KẾT & SỰ KIỆN",
  date: "03/09/2026",
  summary:
    "UBND xã Vĩnh Thực tổ chức Hội nghị tổng kết năm học 2025–2026 và triển khai nhiệm vụ năm học 2026–2027; biểu dương khen thưởng các tập thể, cá nhân xuất sắc và thúc đẩy chuyển đổi số, STEM.",
  image: "/images/tong-ket-nam-hoc-2025-2026.jpg",
  slug: "tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  featured: true,
};

export const RECENT_NEWS: NewsItem[] = [
  {
    id: "news-featured-old",
    title: "Quyết định sáp nhập thành Trường Tiểu học và Trung học cơ sở Vĩnh Thực",
    category: "VĂN BẢN NHÀ TRƯỜNG",
    date: "15/10/2025",
    image: "/images/news-featured.svg",
    slug: "quyet-dinh-220-sap-nhap-truong-th-thcs-vinh-thuc",
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
    label: "Trụ sở chính tại thôn Vĩnh Thực 2",
    iconName: "graduation-cap",
  },
  {
    value: "01",
    label: "Điểm trường tại thôn Vĩnh Trung 2",
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
