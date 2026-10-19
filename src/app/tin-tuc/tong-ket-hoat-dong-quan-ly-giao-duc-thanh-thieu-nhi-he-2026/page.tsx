import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Hội nghị tổng kết các hoạt động quản lý, giáo dục thanh thiếu nhi, học sinh hè năm 2026",
  description:
    "Ban Chỉ đạo hoạt động hè xã Vĩnh Thực tổng kết công tác quản lý, chăm sóc và giáo dục thanh thiếu nhi, học sinh hè năm 2026.",
};

const GALLERY = [
  {
    src: "/images/tong-ket-hoat-dong-he-2026/anh-tap-the-01.jpg",
    alt: "Đại biểu và học sinh chụp ảnh tập thể tại hội nghị tổng kết hoạt động hè năm 2026",
  },
];

export default function TongKetHoatDongHePage() {
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
              src="/images/tong-ket-hoat-dong-he-2026.jpg"
              alt="Hội nghị tổng kết hoạt động quản lý, giáo dục thanh thiếu nhi, học sinh hè năm 2026"
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover object-[center_20%]"
            />
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <span className="inline-flex rounded-full bg-sky-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-700">
              Hoạt động hè
            </span>

            <h1 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Hội nghị tổng kết các hoạt động quản lý, giáo dục thanh thiếu nhi, học sinh hè năm 2026
            </h1>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-b border-slate-200/80 pb-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-sky-700" />
                04/09/2026
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-700" />
                Xã Vĩnh Thực
              </span>
            </div>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                Nhằm đánh giá kết quả công tác quản lý, giáo dục thanh thiếu nhi, học sinh trong dịp hè năm 2026, <strong>Ban Chỉ đạo hoạt động hè thuộc Ủy ban nhân dân xã Vĩnh Thực</strong> đã tổ chức Hội nghị tổng kết các hoạt động quản lý, giáo dục thanh thiếu nhi, học sinh hè năm 2026.
              </p>
              <p>
                Hội nghị là dịp để các đơn vị, tổ chức và lực lượng tham gia công tác hè cùng nhìn lại quá trình triển khai các hoạt động dành cho thanh thiếu nhi, học sinh trên địa bàn; đánh giá những kết quả đạt được, trao đổi những khó khăn, hạn chế và rút ra kinh nghiệm trong công tác phối hợp quản lý, giáo dục các em trong thời gian nghỉ hè.
              </p>
              <p>
                Trong hè năm 2026, các hoạt động dành cho thanh thiếu nhi, học sinh được quan tâm triển khai theo hướng thiết thực, an toàn và phù hợp với điều kiện thực tế của địa phương. Thông qua các hoạt động sinh hoạt, tuyên truyền, giáo dục kỹ năng, văn hóa, văn nghệ, thể dục thể thao và các hoạt động cộng đồng, các em có thêm môi trường rèn luyện, giao lưu, phát triển kỹ năng và nâng cao ý thức trách nhiệm đối với bản thân, gia đình và xã hội.
              </p>
              <p>
                Bên cạnh việc đánh giá kết quả, Hội nghị cũng tập trung trao đổi về công tác phối hợp giữa gia đình, nhà trường, các tổ chức đoàn thể và địa phương trong việc quản lý, chăm sóc và giáo dục thanh thiếu nhi, học sinh; đồng thời đề xuất những giải pháp nhằm nâng cao hiệu quả hoạt động hè trong những năm tiếp theo.
              </p>
              <p>
                Việc tổ chức tổng kết hoạt động hè không chỉ góp phần ghi nhận những kết quả đã đạt được mà còn là cơ sở để tiếp tục nâng cao chất lượng công tác chăm sóc, giáo dục thanh thiếu nhi, học sinh trên địa bàn xã Vĩnh Thực, tạo điều kiện để các em được phát triển trong môi trường <strong>an toàn, lành mạnh và giàu tính giáo dục</strong>.
              </p>
              <p>
                Khép lại một mùa hè với nhiều hoạt động ý nghĩa, các em học sinh tiếp tục chuẩn bị tâm thế bước vào năm học mới với tinh thần vui tươi, tự tin và quyết tâm học tập, rèn luyện tốt.
              </p>
              <blockquote className="rounded-2xl border-l-4 border-sky-600 bg-sky-50 px-5 py-4 font-medium text-sky-950">
                Ban Chỉ đạo hoạt động hè xã Vĩnh Thực tiếp tục khẳng định vai trò phối hợp, đồng hành cùng gia đình và nhà trường trong công tác chăm sóc, quản lý và giáo dục thế hệ trẻ.
              </blockquote>
            </div>

            <section className="mt-10 border-t border-slate-200/80 pt-7" aria-labelledby="thu-vien-anh-hoat-dong-he">
              <h2 id="thu-vien-anh-hoat-dong-he" className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                Hình ảnh tại hội nghị
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {GALLERY.map((photo) => (
                  <figure
                    key={photo.src}
                    className="group relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 sm:col-span-2 shadow-xs border border-slate-200/70"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 800px"
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
              {["Hoạt động hè", "Thanh thiếu nhi", "Học sinh", "Giáo dục Vĩnh Thực"].map((tag) => (
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
