"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Sparkles,
  ShieldCheck,
  Users,
  AlertTriangle,
  CheckCircle2,
  X,
  Maximize2,
  ExternalLink,
  Share2,
  Printer,
  HeartHandshake,
  Award,
} from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/tuyen-truyen-phap-luat-2026/dai-bieu-tham-du.jpg",
    alt: "Đại biểu Đồn Biên phòng cửa khẩu cảng Vạn Gia, Công an xã Vĩnh Thực và Ban Giám hiệu nhà trường",
    caption:
      "Đại biểu Đồn Biên phòng cửa khẩu cảng Vạn Gia, Công an xã Vĩnh Thực và Ban Giám hiệu nhà trường tham dự chương trình.",
  },
  {
    src: "/images/tuyen-truyen-phap-luat-2026/toan-canh-hoi-truong.jpg",
    alt: "Toàn cảnh buổi sinh hoạt chuyên đề tuyên truyền pháp luật",
    caption:
      "Toàn cảnh buổi sinh hoạt chuyên đề tuyên truyền pháp luật về phòng, chống ma túy và mua bán người tại hội trường.",
  },
  {
    src: "/images/tuyen-truyen-phap-luat-2026/hieu-truong-khong-duy-phong-phat-to-roi.jpg",
    alt: "Thầy Hiệu trưởng Khổng Duy Phong ân cần phát cẩm nang pháp luật cho học sinh",
    caption:
      "Thầy Hiệu trưởng Khổng Duy Phong ân cần phát cẩm nang pháp luật và trực tiếp hướng dẫn, nhắc nhở các em học sinh.",
  },
  {
    src: "/images/tuyen-truyen-phap-luat-2026/cong-an-xa-vinh-thuc-tuyen-truyen.jpg",
    alt: "Cán bộ Công an xã Vĩnh Thực phát tờ rơi và cảnh báo thủ đoạn tội phạm",
    caption:
      "Cán bộ Công an xã Vĩnh Thực phát tờ rơi và cảnh báo các thủ đoạn lừa đảo, lôi kéo qua không gian mạng tới học sinh.",
  },
  {
    src: "/images/tuyen-truyen-phap-luat-2026/hoc-sinh-huong-ung-phong-chong-ma-tuy.jpg",
    alt: "Học sinh toàn trường hào hứng hưởng ứng thông điệp Hãy hành động vì cộng đồng không ma túy",
    caption:
      "Các em học sinh toàn trường hào hứng hưởng ứng thông điệp \"Hãy hành động vì cộng đồng không ma túy\".",
  },
  {
    src: "/images/tuyen-truyen-phap-luat-2026/hoc-sinh-vinh-thuc-rang-ro.jpg",
    alt: "Nụ cười rạng rỡ, tự tin của các em học sinh Trường TH & THCS Vĩnh Thực",
    caption:
      "Nụ cười rạng rỡ, tự tin của các em học sinh Trường TH & THCS Vĩnh Thực sau buổi học ngoại khóa bổ ích.",
  },
  {
    src: "/images/tuyen-truyen-phap-luat-2026/trao-qua-luu-niem-bien-phong-cong-an-truong.jpg",
    alt: "Đại diện Đồn Biên phòng CKC Vạn Gia và Công an xã trao quà lưu niệm cho nhà trường",
    caption:
      "Đại diện Đồn Biên phòng cửa khẩu cảng Vạn Gia và Công an xã Vĩnh Thực trao tặng quà lưu niệm cho Trường TH & THCS Vĩnh Thực.",
  },
];

export default function TuyenTruyenPhapLuatContent() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Hưởng ứng Ngày Pháp luật Việt Nam 9/11</span>
          </span>
        </div>

        {/* Main Article Container */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
          {/* Cover Hero Banner */}
          <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden group cursor-pointer"
               onClick={() => setSelectedImage(GALLERY_IMAGES[6])}>
            <Image
              src="/images/tuyen-truyen-phap-luat-2026/trao-qua-luu-niem-bien-phong-cong-an-truong.jpg"
              alt="Đại diện Đồn Biên phòng CKC Vạn Gia và Công an xã Vĩnh Thực tặng quà cho Trường TH&THCS Vĩnh Thực"
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover object-[center_35%] group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm drop-shadow-md">
              <span className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 inline-flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Gắn kết nghĩa tình quân – dân và trách nhiệm bảo vệ an toàn thế hệ trẻ nơi hải đảo</span>
              </span>
            </div>
          </div>

          {/* Article Header */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                AN TOÀN HỌC ĐƯỜNG &amp; PHÁP LUẬT
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                <Users className="w-3.5 h-3.5" />
                Phối hợp Biên phòng &amp; Công an xã
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug tracking-tight">
              Trường TH &amp; THCS Vĩnh Thực phối hợp tuyên truyền, phổ biến pháp luật: Xây dựng trường học an toàn nơi biển đảo tiền tiêu
            </h1>

            {/* Meta info row */}
            <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 border-t border-slate-100 pt-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-sky-600" />
                <span>Ngày 06/11/2026</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span>Hội trường Trường TH &amp; THCS Vĩnh Thực</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <Award className="h-4 w-4 text-emerald-600" />
                <span>Ban Biên tập Vĩnh Thực</span>
              </span>
            </div>
          </div>

          {/* Sapo Box */}
          <div className="px-6 sm:px-8 lg:px-10 pt-6 sm:pt-8">
            <div className="rounded-2xl bg-sky-50/80 border border-sky-100 p-4 sm:p-6 text-slate-700 text-sm sm:text-base leading-relaxed font-medium italic border-l-4 border-l-sky-600">
              Nhằm thiết thực hưởng ứng Ngày Pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam (09/11), ngày 06/11/2026, Trường TH &amp; THCS Vĩnh Thực đã phối hợp cùng Đồn Biên phòng cửa khẩu cảng Vạn Gia và Công an xã Vĩnh Thực tổ chức chương trình tuyên truyền, phổ biến giáo dục pháp luật về phòng, chống ma túy và mua bán người cho toàn thể cán bộ, giáo viên và học sinh nhà trường.
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            {/* Image 1: Bàn đại biểu */}
            <figure className="space-y-2.5">
              <div
                className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group cursor-pointer shadow-xs"
                onClick={() => setSelectedImage(GALLERY_IMAGES[0])}
              >
                <Image
                  src={GALLERY_IMAGES[0].src}
                  alt={GALLERY_IMAGES[0].alt}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" /> Xem ảnh lớn
                  </span>
                </div>
              </div>
              <figcaption className="text-center text-xs sm:text-sm text-slate-500 italic px-2">
                {GALLERY_IMAGES[0].caption}
              </figcaption>
            </figure>

            <p>
              Tham dự buổi tuyên truyền có đại diện chỉ huy, cán bộ, chiến sĩ <strong>Đồn Biên phòng cửa khẩu cảng Vạn Gia</strong> (Bộ đội Biên phòng tỉnh Quảng Ninh); lãnh đạo <strong>Công an xã Vĩnh Thực</strong>; cùng thầy <strong>Khổng Duy Phong</strong> – Bí thư Chi bộ, Hiệu trưởng nhà trường, Ban Giám hiệu, tập thể thầy cô giáo và đông đảo các em học sinh Trường TH &amp; THCS Vĩnh Thực.
            </p>

            {/* Image 2: Toàn cảnh */}
            <figure className="space-y-2.5">
              <div
                className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group cursor-pointer shadow-xs"
                onClick={() => setSelectedImage(GALLERY_IMAGES[1])}
              >
                <Image
                  src={GALLERY_IMAGES[1].src}
                  alt={GALLERY_IMAGES[1].alt}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" /> Xem ảnh lớn
                  </span>
                </div>
              </div>
              <figcaption className="text-center text-xs sm:text-sm text-slate-500 italic px-2">
                {GALLERY_IMAGES[1].caption}
              </figcaption>
            </figure>

            {/* Section 1 */}
            <div className="space-y-4 pt-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-6 bg-sky-600 rounded-full inline-block"></span>
                1. Nhận diện và kiên quyết bài trừ hiểm họa ma túy học đường
              </h2>
              <p>
                Tại buổi sinh hoạt chuyên đề, báo cáo viên của Đồn Biên phòng cửa khẩu cảng Vạn Gia và Công an xã Vĩnh Thực đã tập trung phổ biến các nội dung cơ bản về tác hại khôn lường của ma túy đối với sức khỏe thể chất, trí tuệ và tương lai của lứa tuổi học sinh; đồng thời phân tích những hệ lụy đau lòng mà ma túy gây ra cho gia đình và xã hội.
              </p>

              {/* Warning box */}
              <div className="rounded-2xl bg-amber-50/80 border border-amber-200 p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Cảnh báo đặc biệt về các dạng ma túy mới "núp bóng"</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                  Lực lượng chức năng nhấn mạnh nguy cơ các loại ma túy mới ngụy trang tinh vi dưới dạng bánh kẹo, nước ngọt, thực phẩm chức năng, tinh dầu thuốc lá điện tử... được mua bán trôi nổi trên thị trường. Học sinh cần giữ vững nguyên tắc: <strong>Tuyệt đối không thử, không tò mò, không sử dụng đồ ăn thức uống từ người lạ</strong>.
                </p>
              </div>

              {/* Image 3: Thầy Hiệu trưởng phát tờ rơi */}
              <figure className="space-y-2.5 pt-2">
                <div
                  className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group cursor-pointer shadow-xs"
                  onClick={() => setSelectedImage(GALLERY_IMAGES[2])}
                >
                  <Image
                    src={GALLERY_IMAGES[2].src}
                    alt={GALLERY_IMAGES[2].alt}
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" /> Xem ảnh lớn
                    </span>
                  </div>
                </div>
                <figcaption className="text-center text-xs sm:text-sm text-slate-500 italic px-2">
                  {GALLERY_IMAGES[2].caption}
                </figcaption>
              </figure>
            </div>

            {/* Section 2 */}
            <div className="space-y-4 pt-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-6 bg-sky-600 rounded-full inline-block"></span>
                2. Nâng cao cảnh giác trước thủ đoạn của tội phạm mua bán người qua không gian mạng
              </h2>
              <p>
                Xã đảo Vĩnh Thực giữ vị trí chiến lược nơi vùng biển đảo tiền tiêu, có tuyến đường thủy và cửa khẩu cảng tiếp giáp biên giới. Vì vậy, việc trang bị kỹ năng phòng ngừa tội phạm mua bán người cho thế hệ thanh thiếu niên là vô cùng cấp thiết.
              </p>
              <p>
                Đại diện Công an xã Vĩnh Thực đã phân tích cụ thể các thủ đoạn tinh vi của tội phạm: <em>lợi dụng mạng xã hội (Facebook, TikTok, Zalo) và các hội nhóm game trực tuyến</em> để tiếp cận, làm quen, dụ dỗ học sinh bằng những lời mời chào hấp dẫn như "việc nhẹ lương cao", tặng quà giá trị hoặc rủ đi chơi xa.
              </p>

              {/* Image 4: Công an tuyên truyền */}
              <figure className="space-y-2.5 pt-2">
                <div
                  className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group cursor-pointer shadow-xs"
                  onClick={() => setSelectedImage(GALLERY_IMAGES[3])}
                >
                  <Image
                    src={GALLERY_IMAGES[3].src}
                    alt={GALLERY_IMAGES[3].alt}
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" /> Xem ảnh lớn
                    </span>
                  </div>
                </div>
                <figcaption className="text-center text-xs sm:text-sm text-slate-500 italic px-2">
                  {GALLERY_IMAGES[3].caption}
                </figcaption>
              </figure>
            </div>

            {/* Section 3 */}
            <div className="space-y-4 pt-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-6 bg-sky-600 rounded-full inline-block"></span>
                3. Đổi mới hình thức trực quan – Học sinh hào hứng tiếp thu kiến thức
              </h2>
              <p>
                Chương trình tuyên truyền được tổ chức khoa học, kết hợp hài hòa giữa chiếu video phóng sự thực tế, phát tờ rơi thông tin pháp luật và giao lưu hỏi – đáp trực tiếp. Không khí hội trường luôn sôi nổi với những cánh tay giơ cao xung phong trả lời câu hỏi và nhận quà khích lệ từ ban tổ chức.
              </p>

              {/* 2-column photos: 5 & 6 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <figure className="space-y-2">
                  <div
                    className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group cursor-pointer shadow-xs"
                    onClick={() => setSelectedImage(GALLERY_IMAGES[4])}
                  >
                    <Image
                      src={GALLERY_IMAGES[4].src}
                      alt={GALLERY_IMAGES[4].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-slate-900/80 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Maximize2 className="w-3 h-3" /> Xem ảnh
                      </span>
                    </div>
                  </div>
                  <figcaption className="text-center text-xs text-slate-500 italic">
                    {GALLERY_IMAGES[4].caption}
                  </figcaption>
                </figure>

                <figure className="space-y-2">
                  <div
                    className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group cursor-pointer shadow-xs"
                    onClick={() => setSelectedImage(GALLERY_IMAGES[5])}
                  >
                    <Image
                      src={GALLERY_IMAGES[5].src}
                      alt={GALLERY_IMAGES[5].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-slate-900/80 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Maximize2 className="w-3 h-3" /> Xem ảnh
                      </span>
                    </div>
                  </div>
                  <figcaption className="text-center text-xs text-slate-500 italic">
                    {GALLERY_IMAGES[5].caption}
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4 pt-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-6 bg-sky-600 rounded-full inline-block"></span>
                4. Thắm đượm nghĩa tình quân – dân và trách nhiệm bảo vệ biển đảo quê hương
              </h2>
              <p>
                Nhân dịp này, nhằm kịp thời động viên phong trào thi đua dạy tốt – học tốt tại địa bàn hải đảo, <strong>Đồn Biên phòng cửa khẩu cảng Vạn Gia và Công an xã Vĩnh Thực đã trao tặng những phần quà ý nghĩa</strong> cho Trường TH &amp; THCS Vĩnh Thực.
              </p>
              <p>
                Hoạt động thiết thực này không chỉ góp phần nâng cao hiểu biết pháp luật mà còn thắt chặt hơn nữa mối quan hệ gắn bó máu thịt giữa cán bộ, chiến sĩ lực lượng vũ trang với thầy và trò nhà trường, chung tay giữ gìn sự bình yên cho từng nóc nhà, từng lớp học nơi hải đảo tiền tiêu.
              </p>
            </div>

            {/* Press Source Box */}
            <div className="mt-8 rounded-2xl bg-slate-100/80 border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  BQN
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tin tức trên báo chí</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Báo Quảng Ninh điện tử đưa tin về sự kiện
                  </div>
                </div>
              </div>
              <a
                href="https://baoquangninh.vn/tuyen-truyen-pho-bien-phap-luat-cho-hoc-sinh-xa-dao-vinh-thuc-post3426282.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 hover:underline shrink-0"
              >
                <span>Xem bài viết gốc trên Báo Quảng Ninh</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Signature */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
              <div>
                <p className="font-bold text-slate-800">BAN BIÊN TẬP TRƯỜNG TH &amp; THCS VĨNH THỰC</p>
                <p className="text-xs text-slate-500 mt-0.5">Nguồn: Đồn BP CKC Vạn Gia – Công an xã Vĩnh Thực – Báo Quảng Ninh</p>
              </div>

              {/* Action Buttons */}
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
              href="/tin-tuc/tiet-hoc-stem-khoa-hoc-tu-nhien-7-mo-hinh-nha-cach-am"
              className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">CHUYÊN MÔN &amp; STEM</span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 mt-1">
                  Sôi nổi tiết học STEM Khoa học tự nhiên 7: Chế tạo mô hình nhà cách âm
                </h4>
              </div>
              <span className="text-xs text-slate-400 mt-3 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> 23/10/2026
              </span>
            </Link>

            <Link
              href="/tin-tuc/tong-ket-hoat-dong-quan-ly-giao-duc-thanh-thieu-nhi-he-2026"
              className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">HOẠT ĐỘNG HÈ</span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 mt-1">
                  Hội nghị tổng kết hoạt động quản lý, giáo dục thanh thiếu nhi hè năm 2026
                </h4>
              </div>
              <span className="text-xs text-slate-400 mt-3 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> 04/09/2026
              </span>
            </Link>
          </div>
        </div>
      </article>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
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
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden border border-white/20 bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-3 text-center text-xs sm:text-sm text-slate-200 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 max-w-2xl">
              {selectedImage.caption}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
