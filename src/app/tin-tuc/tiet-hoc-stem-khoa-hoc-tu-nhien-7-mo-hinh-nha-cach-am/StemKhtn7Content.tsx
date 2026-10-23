"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Sparkles,
  BookOpen,
  Users,
  Lightbulb,
  CheckCircle2,
  X,
  Maximize2,
  Award,
} from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/stem-khtn7-nha-cach-am-1.jpg",
    alt: "Học sinh say sưa thảo luận nhóm và thử nghiệm mô hình nhà cách âm",
    caption: "Các em học sinh hào hứng thảo luận nhóm và đo đạc khả năng cách âm bằng thiết bị phát âm thanh",
  },
  {
    src: "/images/stem-khtn7-nha-cach-am-5.jpg",
    alt: "Không khí thực hành chế tạo mô hình sôi nổi",
    caption: "Tỉ mỉ lựa chọn mút xốp, bìa carton và cắt dán các lớp vật liệu tiêu âm cho mô hình",
  },
  {
    src: "/images/stem-khtn7-nha-cach-am-2.jpg",
    alt: "Học sinh thuyết trình mô hình trước bảng lớp",
    caption: "Học sinh tự tin trình bày nguyên lý phản xạ và hấp thụ âm thanh của sản phẩm trước lớp",
  },
  {
    src: "/images/stem-khtn7-nha-cach-am-3.jpg",
    alt: "Hai nữ sinh giới thiệu mô hình nhà cách âm",
    caption: "Nụ cười rạng rỡ của các em khi hoàn thành công trình nhà cách âm xinh xắn từ vật liệu tái chế",
  },
  {
    src: "/images/stem-khtn7-nha-cach-am-4.jpg",
    alt: "Cận cảnh mô hình nhà cách âm của Đội 2",
    caption: "Tác phẩm hoàn thiện của Đội 2 với mái ngói đỏ, sân vườn xanh và bảng ghi nhận đầy đủ thành viên",
  },
];

export default function StemKhtn7Content() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <main className="bg-slate-50 min-h-screen py-8 sm:py-12 lg:py-16">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/#tin-tuc"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-700 transition-colors hover:text-sky-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Quay lại tin tức &amp; hoạt động</span>
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Chương trình GDPT 2018</span>
          </span>
        </div>

        {/* Main Article Container */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
          {/* Cover Hero Banner */}
          <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden group">
            <Image
              src="/images/stem-khtn7-nha-cach-am-1.jpg"
              alt="Tiết học STEM Khoa học tự nhiên 7: Chế tạo mô hình nhà cách âm"
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover object-[center_35%] group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm drop-shadow-md">
              <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Học sinh lớp 7 say sưa khám phá khoa học trong tiết thực hành STEM
              </span>
            </div>
          </div>

          {/* Article Header */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider border border-sky-200">
                <Lightbulb className="w-3.5 h-3.5" />
                HOẠT ĐỘNG CHUYÊN MÔN • GIÁO DỤC STEM
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                <BookOpen className="w-3.5 h-3.5" />
                Khoa học tự nhiên 7
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight uppercase">
              Sôi nổi và đầy sáng tạo với tiết học STEM Khoa học tự nhiên 7: “Chế tạo mô hình nhà cách âm”
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-500 pt-3 border-t border-slate-100">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>23/10/2026</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="w-4 h-4 text-sky-600" />
                <span>Tổ Khoa học Tự nhiên</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Trường TH&amp;THCS Vĩnh Thực</span>
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8 text-slate-700 leading-relaxed font-normal text-sm sm:text-base">
            {/* Lead paragraph */}
            <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed italic border-l-4 border-sky-600 pl-4 py-1 bg-sky-50/50 rounded-r-2xl">
              Thực hiện mục tiêu đổi mới căn bản, toàn diện phương pháp dạy học theo Chương trình Giáo dục phổ thông 2018, chú trọng phát triển phẩm chất, năng lực người học thông qua giáo dục STEM, vừa qua, tổ Khoa học Tự nhiên Trường TH&amp;THCS Vĩnh Thực đã tổ chức thành công tiết dạy thực nghiệm STEM môn Khoa học tự nhiên 7 với chủ đề: “Chế tạo mô hình nhà cách âm”.
            </p>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-sky-700 shrink-0" />
                <span>1. Từ lý thuyết khoa học đến giải pháp kỹ thuật thực tiễn</span>
              </h2>
              <p>
                Trong chương trình Khoa học tự nhiên 7, chủ đề <strong>Sóng âm</strong> là một trong những nội dung kiến thức gần gũi nhưng đòi hỏi học sinh phải có tư duy vận dụng linh hoạt. Dưới sự hướng dẫn của thầy cô bộ môn, các em đã cùng nhau ôn lại và hệ thống hóa kiến thức cốt lõi:
              </p>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-5 space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-sky-900 shrink-0">• Nguồn âm:</span>
                  <span>Âm thanh được phát ra khi các vật dao động.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-sky-900 shrink-0">• Vật phản xạ âm tốt:</span>
                  <span>Các vật liệu có bề mặt cứng, nhẵn, phẳng (như kính, kim loại, gạch men, tường xi măng phẳng).</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-emerald-800 shrink-0">• Vật hấp thụ âm (cách âm) tốt:</span>
                  <span>Các vật liệu có tính chất mềm, xốp, bề mặt gồ ghề (như xốp bọt biển, bông sợi, vải dạ, len, bìa carton nhiều lớp...).</span>
                </div>
              </div>
              <p>
                Từ câu hỏi gợi mở của giáo viên: <em>“Làm thế nào để xây dựng một ngôi nhà có thể ngăn tiếng ồn giao thông và âm thanh lớn từ bên ngoài lọt vào phòng ngủ, phòng làm việc?”</em>, các nhóm học sinh đã bắt tay vào nhiệm vụ thiết kế mô hình với các tiêu chí kỹ thuật rõ ràng: kết cấu kín, các bức tường được gia cố lớp đệm cách âm, cửa đóng mở linh hoạt và mô hình cân đối, thẩm mỹ.
              </p>
            </div>

            {/* Image Feature 1 */}
            <div className="space-y-2">
              <div
                className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 cursor-pointer group shadow-sm"
                onClick={() => setSelectedImage(GALLERY_IMAGES[1])}
              >
                <Image
                  src="/images/stem-khtn7-nha-cach-am-5.jpg"
                  alt="Không khí thực hành chế tạo mô hình sôi nổi"
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-slate-900/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" /> Nhấp để phóng to ảnh
                  </span>
                </div>
              </div>
              <p className="text-center text-xs text-slate-500 italic">
                Các bạn học sinh cùng nhau cắt dán mút xốp, bố trí các lớp tiêu âm bên trong vách tường mô hình
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-700 shrink-0" />
                <span>2. Bùng nổ sáng tạo và tinh thần làm việc nhóm tuyệt vời</span>
              </h2>
              <p>
                Tại các bàn học, không khí diễn ra vô cùng sôi động và khẩn trương. Các em học sinh đã cùng nhau chuẩn bị chu đáo nhiều loại vật liệu tái chế, sẵn có tại gia đình và trên xã đảo:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-slate-700">
                <li>
                  <strong>Tận dụng vật liệu tái chế:</strong> Vỏ thùng carton đựng hoa quả, hộp bánh kẹo cũ, xốp bọc hàng, giấy vụn, bông gòn... được tái chế thành các chi tiết tường nhà, mái che và vật liệu chống ồn.
                </li>
                <li>
                  <strong>Sáng tạo đa dạng cấu trúc:</strong> Có nhóm thiết kế nhà 1 tầng mái dốc truyền thống, có nhóm mạnh dạn thử nghiệm mô hình nhà 2 tầng hiện đại với nhiều lớp đệm khí cách âm ở giữa.
                </li>
                <li>
                  <strong>Chú trọng cảnh quan xanh:</strong> Không dừng lại ở việc cách âm, các em còn nặn đất màu làm cây xanh, vẽ hoa lá quanh sân vườn, thể hiện ước mơ về những ngôi nhà sinh thái yên bình nơi đảo biển Vĩnh Thực.
                </li>
              </ul>

              {/* Quote box for Team 2 */}
              <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/60 p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm uppercase">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Dấu ấn tinh thần đoàn kết: “Tất cả thành viên đều làm!”</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic">
                  Điểm nhấn đáng yêu và ấn tượng tại tiết học là tấm biển danh dự viết tay của Đội 2 đặt trang trọng bên mô hình: <strong className="text-slate-900 font-bold">“Đội 2: Tất cả thành viên đều làm: Kim, Dũng, Thành, Đức, Q.Trang, B.Trang, Thúy, Trà Quyên, Uyên, Chi”</strong>. Tinh thần trách nhiệm tập thể, sự san sẻ và hỗ trợ lẫn nhau chính là giá trị nhân văn lớn nhất mà giáo dục STEM mang lại.
                </p>
              </div>
            </div>

            {/* 2 Grid Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer group shadow-xs"
                  onClick={() => setSelectedImage(GALLERY_IMAGES[2])}
                >
                  <Image
                    src="/images/stem-khtn7-nha-cach-am-2.jpg"
                    alt="Học sinh nam thuyết trình mô hình nhà cách âm trước bảng"
                    fill
                    sizes="(max-width: 640px) 100vw, 450px"
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" /> Phóng to
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic text-center">
                  Tự tin báo cáo sản phẩm và phân tích nguyên lý phản xạ âm
                </p>
              </div>

              <div className="space-y-1.5">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer group shadow-xs"
                  onClick={() => setSelectedImage(GALLERY_IMAGES[3])}
                >
                  <Image
                    src="/images/stem-khtn7-nha-cach-am-3.jpg"
                    alt="Hai học sinh nữ giới thiệu sản phẩm"
                    fill
                    sizes="(max-width: 640px) 100vw, 450px"
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" /> Phóng to
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic text-center">
                  Nụ cười rạng rỡ bên mô hình nhà 2 tầng cách âm độc đáo
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-sky-700 shrink-0" />
                <span>3. Thử nghiệm thực tế và đánh giá khoa học</span>
              </h2>
              <p>
                Phần gay cấn và hấp dẫn nhất của tiết học là quy trình thử nghiệm độ suy giảm âm thanh:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
                <li>
                  Giáo viên và các nhóm đưa nguồn âm thanh (chuông báo/máy phát tín hiệu âm thanh) vào bên trong mô hình.
                </li>
                <li>
                  Tiến hành so sánh độ lớn của âm thanh khi mở cửa và khi đóng kín cửa mô hình.
                </li>
                <li>
                  Các nhóm cùng thảo luận, phân tích lý do mô hình cách âm tốt hoặc chưa tốt để rút ra kinh nghiệm cải tiến: cần bịt kín các khe hở ở mép cửa, tăng độ dày lớp mút xốp hoặc sử dụng vật liệu nhiều tầng xen kẽ.
                </li>
              </ul>
            </div>

            {/* Image 4: Close up */}
            <div className="space-y-2">
              <div
                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 cursor-pointer group shadow-sm"
                onClick={() => setSelectedImage(GALLERY_IMAGES[4])}
              >
                <Image
                  src="/images/stem-khtn7-nha-cach-am-4.jpg"
                  alt="Cận cảnh mô hình hoàn thiện của Đội 2"
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-slate-900/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" /> Phóng to ảnh
                  </span>
                </div>
              </div>
              <p className="text-center text-xs text-slate-500 italic">
                Cận cảnh mô hình nhà cách âm với cánh cửa mở linh hoạt, khuôn viên cây xanh và bảng danh sách nhóm của Đội 2
              </p>
            </div>

            {/* Conclusion */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                4. Khơi dậy đam mê khoa học nơi mái trường nơi đảo tiền tiêu
              </h2>
              <p>
                Tiết học STEM <strong>“Chế tạo mô hình nhà cách âm”</strong> của khối 7 đã khép lại với nhiều cảm xúc khó quên. Những giờ học trải nghiệm sáng tạo như thế này không chỉ giúp các em học sinh nắm vững kiến thức môn Khoa học tự nhiên mà còn bồi đắp kỹ năng giải quyết vấn đề, tư duy thiết kế, tinh thần đồng đội và ý thức bảo vệ môi trường.
              </p>
              <p>
                Tập thể cán bộ giáo viên Trường TH&amp;THCS Vĩnh Thực sẽ tiếp tục đẩy mạnh các chuyên đề dạy học tích hợp STEM/STEAM trong tất cả các khối lớp, đưa mái trường nơi biển đảo trở thành chiếc nôi ươm mầm tri thức và chắp cánh ước mơ cho các thế hệ học sinh thân yêu!
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Đóng"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>

            <p className="mt-3 text-center text-xs sm:text-sm text-slate-300 px-4">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
