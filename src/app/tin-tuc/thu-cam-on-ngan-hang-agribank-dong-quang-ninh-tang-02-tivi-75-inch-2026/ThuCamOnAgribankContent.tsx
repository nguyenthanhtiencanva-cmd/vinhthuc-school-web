"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Sparkles,
  HeartHandshake,
  Tv,
  FileText,
  Download,
  Eye,
  ExternalLink,
  X,
  Maximize2,
  Share2,
  Printer,
  Award,
  Heart,
} from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  aspect?: "card" | "photo43" | "wide169";
}

const PDF_URL = "/documents/thu-cam-on-so-48-agribank-dong-quang-ninh.pdf";

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/thu-cam-on-agribank-2026/thu-cam-on-agribank-dong-quang-ninh-banner.jpg",
    alt: "Thư cảm ơn Trường TH & THCS Vĩnh Thực gửi Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh",
    caption:
      "Thư cảm ơn trang trọng của Trường TH & THCS Vĩnh Thực gửi Ban Giám đốc cùng toàn thể cán bộ, nhân viên Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh nhân dịp trao tặng 02 chiếc Tivi 75 inch.",
    aspect: "card",
  },
  {
    src: "/images/thu-cam-on-agribank-2026/trao-tang-02-tivi-75-inch-agribank.jpg",
    alt: "Đại diện Ngân hàng Agribank Chi nhánh Đông Quảng Ninh trao biển tượng trưng 02 Tivi 75 inch",
    caption:
      "Đại diện Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh trao biển tượng trưng tặng 02 chiếc Tivi 75 inch cho Trường TH & THCS Vĩnh Thực.",
    aspect: "photo43",
  },
  {
    src: "/images/thu-cam-on-agribank-2026/agribank-tang-hoa-chuc-mung-20-11.jpg",
    alt: "Đại diện Agribank Chi nhánh Đông Quảng Ninh trao lẵng hoa chúc mừng Ngày Nhà giáo Việt Nam 20/11",
    caption:
      "Đại diện Agribank – Chi nhánh Đông Quảng Ninh trao lẵng hoa tươi thắm chúc mừng thầy và trò nhà trường nhân dịp Ngày Nhà giáo Việt Nam 20/11.",
    aspect: "photo43",
  },
  {
    src: "/images/thu-cam-on-agribank-2026/tiet-hoc-tieng-viet-su-dung-tivi-75-inch.jpg",
    alt: "Tiết học Tiếng Việt ngày 19/11/2026 sử dụng Tivi 75 inch mới lắp đặt",
    caption:
      "Chiếc Tivi 75 inch mới được lắp đặt khang trang tại lớp học, phục vụ trực quan, sinh động tiết Tiếng Việt ngày 19/11/2026 với bài đọc &ldquo;Khổ luyện thành tài&rdquo;.",
    aspect: "wide169",
  },
  {
    src: "/images/thu-cam-on-agribank-2026/hoc-sinh-phat-bieu-tren-tivi-moi.jpg",
    alt: "Học sinh hào hứng phát biểu xây dựng bài bên màn hình Tivi 75 inch mới",
    caption:
      "Các em học sinh hào hứng phát biểu xây dựng bài bên màn hình Tivi 75 inch sắc nét – động lực giúp đổi mới phương pháp dạy học nơi xã đảo.",
    aspect: "wide169",
  },
];

interface ArticleFigureProps {
  image: GalleryImage;
  onSelect: (img: GalleryImage) => void;
  sizes?: string;
  objectPosition?: string;
  compactCaption?: boolean;
}

function ArticleFigure({
  image,
  onSelect,
  sizes = "(max-width: 896px) 100vw, 896px",
  objectPosition = "object-center",
  compactCaption = false,
}: ArticleFigureProps) {
  const aspectClass =
    image.aspect === "card"
      ? "aspect-[3/2]"
      : image.aspect === "wide169"
        ? "aspect-video"
        : "aspect-[4/3]";

  return (
    <figure className="space-y-2.5">
      <div
        className={`relative ${aspectClass} w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group cursor-pointer shadow-xs`}
        onClick={() => onSelect(image)}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className={`object-cover ${objectPosition} group-hover:scale-102 transition-transform duration-300`}
        />
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5" /> Xem ảnh lớn
          </span>
        </div>
      </div>
      <figcaption
        className={`text-center ${compactCaption ? "text-xs" : "text-xs sm:text-sm"} text-slate-500 italic px-2`}
      >
        {image.caption.replace(/&ldquo;|&rdquo;/g, '"')}
      </figcaption>
    </figure>
  );
}

export default function ThuCamOnAgribankContent() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setIsPdfModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleShareFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Đã sao chép liên kết bài viết vào bộ nhớ tạm!");
  };

  return (
    <main className="bg-slate-50 min-h-screen py-8 sm:py-12 lg:py-16">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#tin-tuc"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-700 transition-colors hover:text-sky-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Quay lại Tin tức &amp; Hoạt động</span>
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200">
            <Heart className="w-3.5 h-3.5 text-rose-600" />
            <span>Tri ân &amp; Kết nối cộng đồng 20/11</span>
          </span>
        </div>

        {/* Main Article Container */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
          {/* Cover Hero Banner: Designed Thư Cảm Ơn card (3:2 uncropped) */}
          <div
            className="relative aspect-[3/2] w-full bg-amber-50/40 overflow-hidden group cursor-pointer border-b border-slate-100"
            onClick={() => setSelectedImage(GALLERY_IMAGES[0])}
          >
            <Image
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].alt}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover group-hover:scale-101 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="bg-slate-900/75 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/20 inline-flex items-center gap-1.5 shadow-sm">
                <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Phóng to Thư cảm ơn</span>
              </span>
            </div>
          </div>

          {/* Article Header */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider border border-rose-200">
                <HeartHandshake className="w-3.5 h-3.5" />
                THƯ CẢM ƠN &amp; ĐỒNG HÀNH GIÁO DỤC
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold border border-sky-200">
                <Tv className="w-3.5 h-3.5" />
                Agribank Đông Quảng Ninh trao tặng 02 Tivi 75 inch
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug tracking-tight">
              Thư cảm ơn Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh trao tặng 02 chiếc Tivi 75 inch cho Trường TH &amp; THCS Vĩnh Thực nhân dịp 20/11
            </h1>

            {/* Meta info row */}
            <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 border-t border-slate-100 pt-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-sky-600" />
                <span>Ngày 20/11/2026</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span>Trường TH &amp; THCS Vĩnh Thực, xã Vĩnh Thực</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <Award className="h-4 w-4 text-emerald-600" />
                <span>Văn bản số 48/TH&amp;THCS</span>
              </span>
            </div>
          </div>

          {/* Sapo Box */}
          <div className="px-6 sm:px-8 lg:px-10 pt-6 sm:pt-8">
            <div className="rounded-2xl bg-sky-50/80 border border-sky-100 p-4 sm:p-6 text-slate-700 text-sm sm:text-base leading-relaxed font-medium italic border-l-4 border-l-sky-600">
              Nhân dịp kỷ niệm Ngày Nhà giáo Việt Nam 20/11, Trường TH &amp; THCS Vĩnh Thực trân trọng gửi Thư cảm ơn số 48/TH&amp;THCS tới Ban Giám đốc cùng toàn thể cán bộ, nhân viên Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh đã quan tâm, sẻ chia và trao tặng món quà thiết thực gồm 02 chiếc Tivi 75 inch phục vụ công tác giảng dạy nơi xã đảo.
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            {/* Section 1: Món quà ý nghĩa */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-6 bg-rose-600 rounded-full inline-block"></span>
                1. Món quà ý nghĩa gửi gắm niềm tin vào sự nghiệp &ldquo;trồng người&rdquo; nơi biển đảo
              </h2>
              <p>
                Vĩnh Thực là một xã đảo tiền tiêu còn nhiều khó khăn, điều kiện cơ sở vật chất phục vụ công tác giảng dạy và học tập của thầy và trò nhà trường vẫn còn nhiều thiếu thốn. Trong không khí ấm áp tri ân hướng tới kỷ niệm Ngày Nhà giáo Việt Nam 20/11, tập thể sư phạm và học sinh <strong>Trường TH &amp; THCS Vĩnh Thực</strong> vô cùng phấn khởi và xúc động khi đón nhận tình cảm, sự sẻ chia quý báu từ <strong>Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam (Agribank) – Chi nhánh Đông Quảng Ninh</strong>.
              </p>
              <p>
                Tại buổi gặp mặt thân tình, đại diện Quý Ngân hàng đã trực tiếp trao tặng nhà trường món quà thiết thực gồm <strong>02 chiếc Tivi 75 inch</strong> cùng lẵng hoa tươi thắm chúc mừng đội ngũ thầy cô giáo nhân Ngày Hiến chương Nhà giáo Việt Nam 20/11.
              </p>

              {/* Paired Photos 2 & 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <ArticleFigure
                  image={GALLERY_IMAGES[1]}
                  onSelect={setSelectedImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                  objectPosition="object-[center_20%]"
                  compactCaption
                />
                <ArticleFigure
                  image={GALLERY_IMAGES[2]}
                  onSelect={setSelectedImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                  objectPosition="object-[center_20%]"
                  compactCaption
                />
              </div>
            </div>

            {/* Section 2: Hiệu quả thực tế trên bục giảng */}
            <div className="space-y-4 pt-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-6 bg-sky-600 rounded-full inline-block"></span>
                2. Nhanh chóng đưa vào giảng dạy – Đổi mới từng giờ học của thầy và trò
              </h2>
              <p>
                Không chỉ là sự hỗ trợ to lớn về mặt vật chất giúp nhà trường đẩy mạnh ứng dụng công nghệ thông tin và đổi mới phương pháp dạy học hiện đại, món quà từ Agribank – Chi nhánh Đông Quảng Ninh còn là nguồn động viên tinh thần vô giá đối với đội ngũ thầy cô giáo đang ngày đêm bám đảo, bám trường.
              </p>
              <p>
                Ngay sau khi tiếp nhận, nhà trường đã nhanh chóng lắp đặt khang trang và đưa thiết bị vào sử dụng trực tiếp tại lớp học. Trong tiết học Tiếng Việt ngày 19/11/2026 (bài <em>&ldquo;Khổ luyện thành tài&rdquo;</em>), hình ảnh và tư liệu bài giảng hiển thị sắc nét trên màn hình lớn 75 inch đã mang lại bầu không khí học tập sôi nổi, giúp các em học sinh tiếp thu bài trực quan và tự tin phát biểu xây dựng bài.
              </p>

              {/* Photos 4 & 5 */}
              <div className="space-y-6 pt-2">
                <ArticleFigure image={GALLERY_IMAGES[3]} onSelect={setSelectedImage} />
                <ArticleFigure image={GALLERY_IMAGES[4]} onSelect={setSelectedImage} />
              </div>
            </div>

            {/* Section 3: Toàn văn Thư cảm ơn & Văn bản dấu đỏ */}
            <div className="space-y-5 pt-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
                3. Toàn văn Thư cảm ơn số 48/TH&amp;THCS (Văn bản chính thức)
              </h2>

              <div className="rounded-2xl bg-amber-50/60 border border-amber-200/80 p-5 sm:p-7 space-y-3 text-slate-800 text-xs sm:text-sm leading-relaxed shadow-2xs">
                <div className="text-center space-y-1 border-b border-amber-200/80 pb-3">
                  <div className="font-bold uppercase text-slate-900">
                    UBND XÃ VĨNH THỰC – TRƯỜNG TH &amp; THCS VĨNH THỰC
                  </div>
                  <div className="text-xs text-slate-500">
                    Số: 48/TH&amp;THCS • Vĩnh Thực, ngày 18 tháng 11 năm 2026
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-rose-700 pt-1">
                    THƯ CẢM ƠN
                  </div>
                </div>
                <p>
                  <strong>Kính gửi:</strong> Ban Giám đốc cùng toàn thể cán bộ, nhân viên Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam (Agribank) – Chi nhánh Đông Quảng Ninh.
                </p>
                <p>
                  Lời đầu tiên, Ban Giám hiệu cùng toàn thể cán bộ, giáo viên, nhân viên và học sinh Trường TH&amp;THCS Vĩnh Thực xin gửi tới Ban Giám đốc cùng toàn thể cán bộ, nhân viên Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh lời chúc sức khỏe, hạnh phúc và lời chào trân trọng nhất!
                </p>
                <p>
                  Tập thể sư phạm Trường TH&amp;THCS Vĩnh Thực xin cam kết sẽ bảo quản, khai thác và sử dụng hiệu quả tối đa trang thiết bị được trao tặng (<strong>02 chiếc Tivi 75 inch</strong>) để phục vụ tốt nhất cho công tác dạy và học, xứng đáng với niềm tin yêu và sự kỳ vọng của Quý Ngân hàng.
                </p>
                <p>
                  Kính chúc Ngân hàng Agribank – Chi nhánh Đông Quảng Ninh ngày càng phát triển vững mạnh, gặt hái được nhiều thành công hơn nữa và tiếp tục có nhiều hoạt động an sinh xã hội ý nghĩa hướng về cộng đồng.
                </p>
                <div className="text-right pt-2 font-semibold text-slate-900">
                  <div>HIỆU TRƯỞNG</div>
                  <div className="text-rose-700 font-bold mt-1">Khổng Duy Phong</div>
                </div>
              </div>

              {/* Official Signed PDF Action Card */}
              <div className="rounded-2xl bg-slate-100/90 border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-rose-700 uppercase tracking-wider">
                      Văn bản ký số chính thức (Dấu đỏ)
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      Thư cảm ơn số 48/TH&amp;THCS ngày 18/11/2026 (PDF)
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setIsPdfModalOpen(true)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold transition-colors shadow-xs cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Xem trực tiếp</span>
                  </button>
                  <a
                    href={PDF_URL}
                    download="Thu-cam-on-so-48-THTHCS-Vinh-Thuc-Agribank.pdf"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold transition-colors shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Tải PDF</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Signature & Share Bar */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
              <div>
                <p className="font-bold text-slate-800">BAN BIÊN TẬP TRƯỜNG TH &amp; THCS VĨNH THỰC</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Thôn Đầu Đông, xã Vĩnh Thực, TP. Quảng Ninh • Ngày 20/11/2026
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareFacebook}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1877F2] text-white text-xs font-semibold hover:bg-blue-600 transition-colors shadow-2xs cursor-pointer"
                  title="Chia sẻ lên Facebook"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Chia sẻ</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  title="Sao chép liên kết"
                >
                  <span>Copy Link</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                  title="In bài viết"
                  aria-label="In bài viết"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related News Section */}
        <div className="mt-10 sm:mt-12">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-sky-600 rounded-full inline-block"></span>
            TIN TỨC &amp; HOẠT ĐỘNG KHÁC
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/tin-tuc/doi-bong-da-nu-truong-th-thcs-vinh-thuc-gianh-chuc-vo-dich-2026"
              className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                  VĂN HÓA – THỂ THAO 20/11
                </span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 mt-1">
                  Đội bóng đá nữ Trường TH &amp; THCS Vĩnh Thực xuất sắc giành chức Vô địch Giải Bóng đá nữ năm 2026
                </h4>
              </div>
              <span className="text-xs text-slate-400 mt-3 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> 17/11/2026
              </span>
            </Link>

            <Link
              href="/tin-tuc/tuyen-truyen-pho-bien-phap-luat-hoc-sinh-xa-dao-vinh-thuc"
              className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                  AN TOÀN HỌC ĐƯỜNG &amp; PHÁP LUẬT
                </span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 mt-1">
                  Trường TH &amp; THCS Vĩnh Thực phối hợp tuyên truyền, phổ biến pháp luật cho học sinh nơi xã đảo
                </h4>
              </div>
              <span className="text-xs text-slate-400 mt-3 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> 06/11/2026
              </span>
            </Link>
          </div>
        </div>
      </article>

      {/* Lightbox Modal for Images */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-[72vh] sm:h-[78vh] rounded-2xl overflow-hidden border border-white/20 bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-3 text-center text-xs sm:text-sm text-slate-200 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 max-w-2xl flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{selectedImage.caption.replace(/&ldquo;|&rdquo;/g, '"')}</span>
            </div>
          </div>
        </div>
      )}

      {/* PDF Viewer Modal */}
      {isPdfModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-6 animate-in fade-in duration-200"
          onClick={() => setIsPdfModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Xem toàn văn Thư cảm ơn số 48"
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[88vh] border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900 text-white border-b border-slate-800 gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold truncate">
                    Thư cảm ơn số 48/TH&amp;THCS – Agribank Chi nhánh Đông Quảng Ninh
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Ký ngày 18/11/2026 • Hiệu trưởng Khổng Duy Phong
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mở tab mới</span>
                </a>
                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-rose-600 text-white transition-colors cursor-pointer"
                  aria-label="Đóng cửa sổ PDF"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <iframe
              src={PDF_URL}
              title="Thư cảm ơn số 48/TH&THCS"
              className="w-full flex-1 bg-slate-200"
            />
          </div>
        </div>
      )}
    </main>
  );
}
