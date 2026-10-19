import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, GraduationCap, Trophy, Sparkles } from "lucide-react";
import { SCHOOL_STATS } from "@/data/mock-data";

export default function AboutSection() {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="w-6 h-6 text-sky-700" />;
      case "users":
        return <Users className="w-6 h-6 text-sky-700" />;
      case "graduation-cap":
        return <GraduationCap className="w-6 h-6 text-sky-700" />;
      case "trophy":
        return <Trophy className="w-6 h-6 text-amber-500" />;
      default:
        return <Award className="w-6 h-6 text-sky-700" />;
    }
  };

  return (
    <section id="gioi-thieu" className="bg-slate-50 py-12 sm:py-16 md:py-20 border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 relative z-10">
        {/* Bento Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Bento Card 1: Giới thiệu nhà trường & Sứ mệnh (Chiếm 7 cols) */}
          <div className="md:col-span-2 lg:col-span-7 xl:col-span-8 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden group hover:border-sky-300/60 transition-all">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>VỀ CHÚNG TÔI</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
                NGÔI TRƯỜNG NƠI BIỂN ĐẢO
              </h2>
              <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-sky-700 rounded-full mt-3 mb-6"></div>

              {/* Description Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Theo Quyết định số 220/QĐ-UBND ngày 15/10/2025 của UBND xã Vĩnh Thực, Trường Tiểu học Vĩnh Thực, Trường Trung học cơ sở Vĩnh Thực và Trường Tiểu học và Trung học cơ sở Vĩnh Trung được sáp nhập thành <strong className="text-slate-900 font-semibold">Trường Tiểu học và Trung học cơ sở Vĩnh Thực</strong>.
                </p>
                <p>
                  Nhà trường là đơn vị sự nghiệp công lập trực thuộc UBND xã Vĩnh Thực. Trụ sở chính đặt tại thôn Vĩnh Thực 2; một điểm trường đặt tại thôn Vĩnh Trung 2, xã Vĩnh Thực, Thành phố Quảng Ninh.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="#gioi-thieu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-700 hover:bg-sky-800 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-md shadow-sky-700/20 transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>TÌM HIỂU THÊM VỀ NHÀ TRƯỜNG</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <a
                href="/documents/quyet-dinh-220-sap-nhap-truong-th-thcs-vinh-thuc.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all hover:-translate-y-0.5 active:translate-y-0 text-center shadow-2xs"
              >
                <span>XEM QUYẾT ĐỊNH 220/QĐ-UBND</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-sky-700" />
              </a>
            </div>
          </div>

          {/* Bento Card 2: Khối điểm nhấn Hải đăng Vĩnh Thực (Chiếm 5 cols) */}
          <div className="md:col-span-2 lg:col-span-5 xl:col-span-4 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group">
            {/* Subtle Decorative SVG Watermark */}
            <div className="absolute right-0 top-0 w-44 h-44 opacity-10 pointer-events-none mix-blend-screen">
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

          {/* Bento Cards 3, 4, 5, 6: Khối 4 Thẻ Số liệu thống kê (Stats Grid) */}
          {SCHOOL_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="col-span-1 md:col-span-1 lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-sky-300/60 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sky-100 transition-all">
                {getStatIcon(stat.iconName)}
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-extrabold text-sky-700 tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500 mt-2 leading-snug">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
