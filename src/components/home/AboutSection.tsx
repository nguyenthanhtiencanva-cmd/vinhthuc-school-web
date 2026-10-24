import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="gioi-thieu"
      className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-14 sm:py-18 md:py-24 border-y border-slate-800 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>VỀ CHÚNG TÔI &amp; TRUYỀN THỐNG HẢI ĐẢO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
            NGÔI TRƯỜNG NƠI BIỂN ĐẢO TIỀN TIÊU
          </h2>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-amber-400 to-sky-400 rounded-full mx-auto mt-3 mb-4"></div>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
            Thắp sáng tri thức bên ngọn hải đăng Vĩnh Thực — Vững bước đồng hành cùng thế hệ tương lai
          </p>
        </div>

        {/* Bento Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Bento Card 1: Giới thiệu nhà trường & Sứ mệnh (Chiếm 7 cols) */}
          <div className="md:col-span-2 lg:col-span-7 xl:col-span-8 bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-sky-400/40 transition-all">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>VỀ CHÚNG TÔI</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase">
                NGÔI TRƯỜNG NƠI BIỂN ĐẢO
              </h2>
              <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-sky-500 rounded-full mt-3 mb-6"></div>

              {/* Description Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                <p>
                  Theo Quyết định số 220/QĐ-UBND ngày 15/10/2025 của UBND xã Vĩnh Thực, Trường Tiểu học Vĩnh Thực, Trường Trung học cơ sở Vĩnh Thực và Trường Tiểu học và Trung học cơ sở Vĩnh Trung được sáp nhập thành <strong className="text-white font-semibold">Trường Tiểu học và Trung học cơ sở Vĩnh Thực</strong>.
                </p>
                <p>
                  Nhà trường là đơn vị sự nghiệp công lập trực thuộc UBND xã Vĩnh Thực. Điểm trường trung tâm đặt tại Thôn Đầu Đông; Phân hiệu Vĩnh Trung đặt tại Thôn Vĩnh Trung, xã Vĩnh Thực, TP. Quảng Ninh.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#gioi-thieu"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-sky-600/30 transition-all lg:hover:-translate-y-1 active:translate-y-0 text-center"
              >
                <span>TÌM HIỂU THÊM VỀ NHÀ TRƯỜNG</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <a
                href="/documents/quyet-dinh-220-sap-nhap-truong-th-thcs-vinh-thuc.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all lg:hover:-translate-y-1 active:translate-y-0 text-center shadow-2xs backdrop-blur-xs"
              >
                <span>XEM QUYẾT ĐỊNH 220/QĐ-UBND</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-sky-400" />
              </a>
            </div>
          </div>

          {/* Bento Card 2: Khối điểm nhấn Hải đăng Vĩnh Thực (Chiếm 5 cols) */}
          <div className="md:col-span-2 lg:col-span-5 xl:col-span-4 bg-gradient-to-br from-blue-950/90 to-slate-900/90 backdrop-blur-md text-white rounded-3xl p-6 sm:p-8 lg:p-8 shadow-xl border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-amber-400/40 transition-all">
            {/* Subtle Decorative SVG Watermark */}
            <div className="absolute right-0 top-0 w-44 h-44 opacity-15 pointer-events-none mix-blend-screen">
              <Image
                src="/images/about-lighthouse.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Content Top */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                <span>Hải đăng Vĩnh Thực</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Biểu tượng kiên cường nơi hải đảo tiền tiêu
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal mt-2 leading-relaxed">
                Ngọn hải đăng dẫn lối cho ngư dân biển đảo, cũng như ngôi trường thắp sáng ngọn lửa tri thức cho các thế hệ tương lai.
              </p>
            </div>

            {/* Image Illustration with smooth hover zoom */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-white/10 mt-6 group/img">
              <Image
                src="/images/hai-dang-vinh-thuc.jpg"
                alt="Hải đăng Vĩnh Thực"
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover object-[center_20%] group-hover/img:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
