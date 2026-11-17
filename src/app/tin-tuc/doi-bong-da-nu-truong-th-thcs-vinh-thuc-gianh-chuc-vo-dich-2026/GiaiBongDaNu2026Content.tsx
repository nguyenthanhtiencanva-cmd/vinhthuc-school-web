"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Sparkles,
  Trophy,
  Users,
  Heart,
  Flame,
  X,
  Maximize2,
  Share2,
  Printer,
  Award,
} from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  aspect?: "portrait" | "landscape" | "wide";
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/giai-bong-da-nu-2026/khai-mac-giai-bong-da-nu-2026.jpg",
    alt: "Đại diện Ban Tổ chức phát biểu khai mạc Giải bóng đá nữ xã Vĩnh Thực năm 2026",
    caption:
      "Đại diện Ban Tổ chức phát biểu khai mạc Giải bóng đá nữ xã Vĩnh Thực năm 2026 chào mừng Ngày Nhà giáo Việt Nam 20/11 và Ngày hội Đại đoàn kết.",
    aspect: "portrait",
  },
  {
    src: "/images/giai-bong-da-nu-2026/trao-co-luu-niem-va-hoa-chuc-mung.jpg",
    alt: "Ban Tổ chức và đại diện lãnh đạo trao hoa tươi, Cờ lưu niệm cho các đội bóng",
    caption:
      "Ban Tổ chức và đại diện lãnh đạo trao hoa tươi, Cờ lưu niệm chúc mừng các đội bóng tham dự giải.",
    aspect: "landscape",
  },
  {
    src: "/images/giai-bong-da-nu-2026/tap-the-cac-doi-bong-nu-vinh-thuc.jpg",
    alt: "Tập thể các đội bóng nữ xã Vĩnh Thực chụp ảnh lưu niệm trước phông giải đấu",
    caption:
      "Các đội bóng nữ trên địa bàn xã Vĩnh Thực chụp ảnh lưu niệm, lan tỏa tinh thần đoàn kết trước giờ khai cuộc.",
    aspect: "landscape",
  },
  {
    src: "/images/giai-bong-da-nu-2026/doi-bong-da-nu-truong-th-thcs-vinh-thuc-truoc-phong.jpg",
    alt: "Đội bóng đá nữ cán bộ, giáo viên Trường TH & THCS Vĩnh Thực trước phông nền giải đấu",
    caption:
      "Đội bóng đá nữ cán bộ, giáo viên Trường TH & THCS Vĩnh Thực rạng rỡ trong màu áo truyền thống trước phông nền giải đấu.",
    aspect: "landscape",
  },
  {
    src: "/images/giai-bong-da-nu-2026/nu-giao-vien-vinh-thuc-tha-tim-quyet-tam.jpg",
    alt: "Các cô giáo Trường TH & THCS Vĩnh Thực thả tim và giơ nắm tay quyết tâm",
    caption:
      "Những trái tim và nắm tay quyết tâm đầy nhiệt huyết của các cô giáo Trường TH & THCS Vĩnh Thực trên sân cỏ.",
    aspect: "landscape",
  },
  {
    src: "/images/giai-bong-da-nu-2026/doi-hinh-ra-san-giai-bong-da-nu.jpg",
    alt: "Đội hình ra sân xếp hàng chéo cùng trái bóng trên sân cỏ",
    caption:
      "Đội hình ra quân ngay ngắn, tự tin sẵn sàng cho những trận cầu sôi nổi.",
    aspect: "landscape",
  },
  {
    src: "/images/giai-bong-da-nu-2026/khoanh-khac-bat-nhay-an-mung-chien-thang.jpg",
    alt: "Khoảnh khắc bật nhảy ăn mừng đầy phấn khích của các nữ cầu thủ",
    caption:
      "Khoảnh khắc bật nhảy vỡ òa niềm vui và năng lượng tích cực của các nữ cầu thủ nhà trường.",
    aspect: "landscape",
  },
  {
    src: "/images/giai-bong-da-nu-2026/giao-luu-huu-nghi-giua-cac-doi-bong.jpg",
    alt: "Không khí giao lưu thân tình giữa các đội bóng nữ trên sân cỏ",
    caption:
      "Không khí giao lưu thân tình, cởi mở giữa các đội bóng tham dự giải trên tinh thần thể thao cao thượng.",
    aspect: "wide",
  },
  {
    src: "/images/giai-bong-da-nu-2026/tinh-huong-dut-diem-truoc-khung-thanh.jpg",
    alt: "Tình huống lên bóng và dứt điểm kịch tính trước khung thành",
    caption:
      "Một tình huống lên bóng và dứt điểm đầy kịch tính trước khung thành trong tiếng hò reo cổ vũ của khán giả.",
    aspect: "landscape",
  },
  {
    src: "/images/giai-bong-da-nu-2026/tinh-dong-doi-nu-cau-thu-vinh-thuc.jpg",
    alt: "Hai nữ cầu thủ Trường TH & THCS Vĩnh Thực đứng tựa lưng tự tin giữa sân cỏ",
    caption:
      "Nét đẹp khỏe khoắn, tự tin và tình cảm gắn bó keo sơn của các nữ cán bộ, giáo viên nơi xã đảo.",
    aspect: "portrait",
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
    image.aspect === "portrait"
      ? "aspect-[3/4]"
      : image.aspect === "wide"
        ? "aspect-video"
        : "aspect-[16/11] sm:aspect-[16/10]";

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
        {image.caption}
      </figcaption>
    </figure>
  );
}

export default function GiaiBongDaNu2026Content() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Chào mừng Ngày Nhà giáo Việt Nam 20/11</span>
          </span>
        </div>

        {/* Main Article Container */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
          {/* Cover Hero Banner: Photo 2 (Trao cờ & hoa lưu niệm) */}
          <div
            className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(GALLERY_IMAGES[1])}
          >
            <Image
              src={GALLERY_IMAGES[1].src}
              alt={GALLERY_IMAGES[1].alt}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover object-[center_30%] group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm drop-shadow-md">
              <span className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 inline-flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{GALLERY_IMAGES[1].caption}</span>
              </span>
            </div>
          </div>

          {/* Article Header */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
                <Trophy className="w-3.5 h-3.5 text-amber-600" />
                VÔ ĐỊCH GIẢI BÓNG ĐÁ NỮ 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold border border-sky-200">
                <Users className="w-3.5 h-3.5" />
                Hoạt động Công đoàn &amp; Phong trào
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-snug tracking-tight">
              Rộn ràng ngày hội thể thao nơi xã đảo: Đội bóng đá nữ Trường TH &amp; THCS Vĩnh Thực xuất sắc giành chức Vô địch Giải Bóng đá nữ năm 2026
            </h1>

            {/* Meta info row */}
            <div className="mt-5 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 border-t border-slate-100 pt-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-sky-600" />
                <span>Ngày 17/11/2026</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span>Sân bóng xã Vĩnh Thực, TP. Quảng Ninh</span>
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
              Hướng tới chào mừng Ngày Văn hóa Việt Nam, Ngày hội Đại đoàn kết toàn dân tộc và kỷ niệm 44 năm Ngày Nhà giáo Việt Nam (20/11), ngày 17/11/2026, Giải Bóng đá nữ xã Vĩnh Thực năm 2026 đã diễn ra trong không khí sôi nổi, gắn kết. Vượt qua các đội bạn với tinh thần thi đấu quả cảm, đội bóng đá nữ cán bộ, giáo viên Trường TH &amp; THCS Vĩnh Thực đã xuất sắc giành ngôi Vô địch đầy thuyết phục.
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            {/* Section 1: Khai mạc & Toàn giải (Side-by-side portrait photo #01 + text, then #03) */}
            <div className="space-y-5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-6 bg-sky-600 rounded-full inline-block"></span>
                1. Rộn ràng lễ khai mạc – Sân chơi gắn kết cộng đồng nơi biển đảo
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5">
                  <ArticleFigure
                    image={GALLERY_IMAGES[0]}
                    onSelect={setSelectedImage}
                    sizes="(max-width: 768px) 100vw, 340px"
                    compactCaption
                  />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <p>
                    Dưới bầu trời thu nắng ấm rực rỡ của xã đảo Vĩnh Thực, Giải Bóng đá nữ năm 2026 đã chính thức khai mạc trong sự háo hức của đông đảo cán bộ, đảng viên, giáo viên và nhân dân địa phương. Đây là hoạt động văn hóa – thể thao trọng điểm mang ý nghĩa thiết thực chào mừng <strong>Ngày Văn hóa Việt Nam</strong>, <strong>Ngày hội Đại đoàn kết toàn dân tộc</strong> và hướng tới tri ân <strong>Ngày Nhà giáo Việt Nam 20/11</strong>.
                  </p>
                  <p>
                    Tham dự lễ khai mạc có đại diện Ban Tổ chức, lãnh đạo địa phương, thầy <strong>Khổng Duy Phong</strong> – Bí thư Chi bộ, Hiệu trưởng Trường TH &amp; THCS Vĩnh Thực cùng ban lãnh đạo và các nữ cầu thủ đại diện cho các đội bóng phong trào trên địa bàn xã.
                  </p>
                  <p>
                    Ngay sau phần phát biểu khai mạc đầy khí thế, Ban Tổ chức đã trao những bó hoa tươi thắm và Cờ lưu niệm gửi gắm niềm tin vào một mùa giải đoàn kết, trung thực, cao thượng và an toàn.
                  </p>
                </div>
              </div>

              {/* Photo 3: Tập thể các đội trước phông */}
              <div className="pt-2">
                <ArticleFigure image={GALLERY_IMAGES[2]} onSelect={setSelectedImage} />
              </div>
            </div>

            {/* Section 2: Khí thế của đội bóng nhà trường (#04, #05, #06) */}
            <div className="space-y-4 pt-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-6 bg-sky-600 rounded-full inline-block"></span>
                2. Sắc trắng – xanh tự tin và nguồn năng lượng rực lửa của các cô giáo Vĩnh Thực
              </h2>
              <p>
                Gác lại những giờ lên lớp miệt mài bên trang giáo án, các nữ cán bộ, giáo viên, nhân viên Trường TH &amp; THCS Vĩnh Thực bước ra sân cỏ với diện mạo khỏe khoắn, tràn đầy sức sống trong bộ trang phục truyền thống trắng phối xanh lá đồng bộ. Sự chuẩn bị chu đáo từ đội hình, chiến thuật đến tinh thần đồng đội gắn bó đã tạo nên sức hút đặc biệt cho đội bóng nhà trường ngay từ những phút đầu ra quân.
              </p>

              {/* Photo 4: Toàn đội nhà trường trước phông */}
              <ArticleFigure image={GALLERY_IMAGES[3]} onSelect={setSelectedImage} />

              {/* 2-column paired photos: #05 & #06 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <ArticleFigure
                  image={GALLERY_IMAGES[4]}
                  onSelect={setSelectedImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                  compactCaption
                />
                <ArticleFigure
                  image={GALLERY_IMAGES[5]}
                  onSelect={setSelectedImage}
                  sizes="(max-width: 768px) 100vw, 420px"
                  compactCaption
                />
              </div>
            </div>

            {/* Section 3: Thi đấu & Lên ngôi vô địch (#09, #07) */}
            <div className="space-y-4 pt-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
                3. Bản lĩnh trên sân cỏ và giây phút vỡ òa ngôi Vô địch
              </h2>

              {/* Championship Highlight Box */}
              <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/70 border border-amber-200 p-4 sm:p-6 space-y-2.5 shadow-2xs">
                <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm sm:text-base uppercase tracking-wide">
                  <Trophy className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Chúc mừng Tân Vô địch Giải Bóng đá nữ xã Vĩnh Thực năm 2026!</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950/85 leading-relaxed">
                  Bằng lối chơi gắn kết, bền bỉ và tinh thần thi đấu hết mình vì màu cờ sắc áo, <strong>Đội bóng đá nữ Trường TH &amp; THCS Vĩnh Thực đã xuất sắc giành chức Vô địch chung cuộc</strong>. Thành tích rực rỡ này là món quà tinh thần vô giá mà tập thể nữ công đoàn viên dâng tặng mái trường nhân dịp kỷ niệm Ngày Nhà giáo Việt Nam 20/11.
                </p>
              </div>

              <p>
                Trên mặt sân cỏ nắng gió nơi biển đảo, các trận đấu diễn ra hấp dẫn và kịch tính từ đầu đến cuối. Những pha phối hợp nhịp nhàng, những tình huống áp sát khung thành đầy quyết đoán cùng sự cổ vũ nhiệt tình của đông đảo khán giả và học sinh đã tiếp thêm sức mạnh để các nữ cầu thủ nhà trường tỏa sáng.
              </p>

              {/* Photo 9: Tình huống thi đấu trước khung thành */}
              <ArticleFigure image={GALLERY_IMAGES[8]} onSelect={setSelectedImage} />

              <p>
                Khoảnh khắc chiến thắng vang dội không chỉ đến từ những bàn thắng đẹp mắt trên sân mà còn được thể hiện qua nụ cười giòn tan, những bước nhảy ăn mừng rạng rỡ và cái nắm tay thật chặt của toàn đội sau tiếng còi mãn cuộc.
              </p>

              {/* Photo 7: Bật nhảy ăn mừng */}
              <ArticleFigure image={GALLERY_IMAGES[6]} onSelect={setSelectedImage} />
            </div>

            {/* Section 4: Giao lưu & Nét duyên sân cỏ (#08, #10) */}
            <div className="space-y-5 pt-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-6 bg-emerald-600 rounded-full inline-block"></span>
                4. Vượt lên trên giải thưởng là tình đoàn kết thắm thiết quân – dân xã đảo
              </h2>

              <p>
                Hơn cả ngôi vị cao nhất, giá trị lớn nhất mà giải đấu mang lại chính là cơ hội giao lưu, rèn luyện sức khỏe theo gương Bác Hồ vĩ đại và thắt chặt hơn nữa tình cảm gắn bó giữa đội ngũ nhà giáo với nhân dân, các tổ chức đoàn thể trên địa bàn xã Vĩnh Thực.
              </p>

              {/* Photo 8: Giao lưu hữu nghị 16:9 */}
              <ArticleFigure image={GALLERY_IMAGES[7]} onSelect={setSelectedImage} />

              {/* Paired Closing Block: Text + Portrait #10 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                <div className="md:col-span-7 space-y-4">
                  <div className="rounded-2xl bg-emerald-50/70 border border-emerald-100 p-4 sm:p-5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <Flame className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Lan tỏa khí thế thi đua chào mừng 20/11</span>
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-950/80 leading-relaxed">
                      Chiếc cúp và danh hiệu Vô địch Giải Bóng đá nữ xã Vĩnh Thực 2026 sẽ tiếp tục tiếp thêm nguồn năng lượng tích cực để tập thể cán bộ, giáo viên Trường TH &amp; THCS Vĩnh Thực hăng say công tác, thi đua <em>&ldquo;Dạy tốt – Học tốt&rdquo;</em>, xây dựng ngôi trường biển đảo ngày càng vững mạnh và hạnh phúc.
                    </p>
                  </div>
                  <p className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm">
                    <Heart className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>
                      Xin chúc mừng các cô giáo – những nữ cầu thủ tài năng trên sân cỏ và những người lái đò tận tụy nơi đầu sóng ngọn gió. Chúc toàn thể quý thầy cô một mùa Hiến chương Nhà giáo Việt Nam 20/11 thật nhiều sức khỏe, niềm vui và hạnh phúc!
                    </span>
                  </p>
                </div>
                <div className="md:col-span-5">
                  <ArticleFigure
                    image={GALLERY_IMAGES[9]}
                    onSelect={setSelectedImage}
                    sizes="(max-width: 768px) 100vw, 340px"
                    compactCaption
                  />
                </div>
              </div>
            </div>

            {/* Signature & Share Bar */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
              <div>
                <p className="font-bold text-slate-800">BAN BIÊN TẬP TRƯỜNG TH &amp; THCS VĨNH THỰC</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Ghi nhận tại Giải Bóng đá nữ xã Vĩnh Thực năm 2026 • Thôn Đầu Đông, xã Vĩnh Thực
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

            <Link
              href="/tin-tuc/tiet-hoc-stem-khoa-hoc-tu-nhien-7-mo-hinh-nha-cach-am"
              className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                  CHUYÊN MÔN &amp; STEM
                </span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 mt-1">
                  Sôi nổi tiết học STEM Khoa học tự nhiên 7: Chế tạo mô hình nhà cách âm
                </h4>
              </div>
              <span className="text-xs text-slate-400 mt-3 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> 23/10/2026
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
              <span>{selectedImage.caption}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
