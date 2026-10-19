import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Tổng kết năm học 2025–2026 – Nhìn lại dấu ấn, mở ra những nhiệm vụ mới",
  description:
    "Hội nghị tổng kết năm học 2025–2026 và triển khai phương hướng, nhiệm vụ năm học 2026–2027 tại xã Vĩnh Thực.",
};

const GALLERY = [
  { src: "/images/tong-ket-2025-2026/trao-giay-khen-01.jpg", alt: "Trao giấy khen thành tích xuất sắc tại hội nghị tổng kết năm học" },
  { src: "/images/tong-ket-2025-2026/anh-01.jpg", alt: "Toàn cảnh hội nghị tổng kết năm học 2025–2026 tại Nhà văn hóa xã Vĩnh Thực" },
  { src: "/images/tong-ket-2025-2026/anh-02.jpg", alt: "Toàn cảnh đại biểu phát biểu chỉ đạo tại hội nghị tổng kết năm học" },
  { src: "/images/tong-ket-2025-2026/anh-03.jpg", alt: "Đại biểu và cán bộ giáo viên tham dự hội nghị tại Nhà văn hóa xã Vĩnh Thực" },
  { src: "/images/tong-ket-2025-2026/anh-04.jpg", alt: "Toàn cảnh đại biểu dự hội nghị tổng kết năm học tại Nhà văn hóa xã Vĩnh Thực" },
  { src: "/images/tong-ket-2025-2026/anh-05.jpg", alt: "Tốp ca học sinh biểu diễn văn nghệ chào mừng hội nghị" },
  { src: "/images/tong-ket-2025-2026/anh-06.jpg", alt: "Tiết mục múa của học sinh trên sân khấu hội nghị" },
  { src: "/images/tong-ket-2025-2026/anh-07.jpg", alt: "Tiết mục văn nghệ áo dài truyền thống tại hội nghị" },
  { src: "/images/tong-ket-2025-2026/anh-08.jpg", alt: "Tiết mục văn nghệ chào mừng năm học mới" },
  { src: "/images/tong-ket-2025-2026/anh-09.jpg", alt: "Tiết mục múa trên sân khấu hội nghị tổng kết" },
  { src: "/images/tong-ket-2025-2026/anh-10.jpg", alt: "Trao tặng giấy khen tại hội nghị tổng kết năm học 2025–2026" },
];

export default function TongKetNamHocPage() {
  return (
    <main className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <article className="mx-auto max-w-4xl px-4 sm:px-6">
        <Link
          href="/#tin-tuc"
          className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại tin tức
        </Link>

        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white shadow-xs">
          <div className="relative aspect-[16/9] w-full bg-slate-100">
            <Image
              src="/images/tong-ket-nam-hoc-2025-2026.jpg"
              alt="Hội nghị tổng kết năm học 2025–2026 tại xã Vĩnh Thực"
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover object-[center_20%]"
            />
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <span className="inline-flex rounded-full bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-700">
              Tổng kết &amp; sự kiện
            </span>

            <h1 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Tổng kết năm học 2025–2026 – Nhìn lại dấu ấn, mở ra những nhiệm vụ mới
            </h1>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-b border-slate-200/80 pb-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-sky-700" />
                03/09/2026
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-700" />
                Nhà văn hóa xã Vĩnh Thực
              </span>
            </div>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                Chiều ngày 03/9/2026, tại Nhà văn hóa xã Vĩnh Thực, UBND xã Vĩnh Thực tổ chức Hội nghị tổng kết năm học 2025–2026 và triển khai phương hướng, nhiệm vụ năm học 2026–2027.
              </p>
              <p>
                Hội nghị là dịp nhìn lại những kết quả nổi bật của giáo dục địa phương trong năm học vừa qua, thẳng thắn chỉ ra những tồn tại, khó khăn; đồng thời xác định các nhiệm vụ trọng tâm cho năm học mới với tinh thần <strong>“Đổi mới tư duy, chuyển biến mạnh mẽ, kết quả thực chất”</strong>.
              </p>
              <p>
                Tại hội nghị, Trường TH &amp; THCS Vĩnh Thực tham gia hai nội dung tham luận về duy trì, nâng cao chất lượng giáo dục mũi nhọn và thúc đẩy chuyển đổi số thực chất, vận hành hiệu quả phòng thực hành STEM trong nhà trường.
              </p>
              <p>
                Cũng trong chương trình, nhiều tập thể, cán bộ, giáo viên và học sinh có thành tích xuất sắc trong năm học 2025–2026 đã được biểu dương, khen thưởng.
              </p>

              <blockquote className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4 font-medium text-emerald-950">
                Một năm học khép lại với nhiều dấu ấn đáng trân trọng; một năm học mới mở ra với những mục tiêu, trách nhiệm và quyết tâm mới.
              </blockquote>

              <p className="font-medium text-slate-900">
                Với tinh thần đổi mới, đoàn kết và trách nhiệm, thầy và trò Trường TH &amp; THCS Vĩnh Thực quyết tâm tiếp tục nỗ lực, góp phần nâng cao chất lượng giáo dục, hướng tới sự tiến bộ và hạnh phúc của học sinh.
              </p>
            </div>

            <section className="mt-10 border-t border-slate-200/80 pt-7" aria-labelledby="thu-vien-anh">
              <h2 id="thu-vien-anh" className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                Một số hình ảnh tại hội nghị
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {GALLERY.map((photo, index) => (
                  <figure
                    key={photo.src}
                    className={`group relative overflow-hidden rounded-2xl bg-slate-100 shadow-xs border border-slate-200/70 ${index === 0 || index === 4 || index === 10 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={index === 0 || index === 4 || index === 10 ? "(max-width: 640px) 100vw, 800px" : "(max-width: 640px) 100vw, 400px"}
                      className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white text-xs font-medium">
                      {photo.alt}
                    </div>
                  </figure>
                ))}
              </div>
            </section>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-200/80 pt-6">
              {["Trường TH & THCS Vĩnh Thực", "Tổng kết năm học", "Năm học 2026–2027", "Chuyển đổi số", "STEM"].map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  #{tag.replaceAll(" ", "")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
