import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, GraduationCap, Trophy } from "lucide-react";
import { SCHOOL_STATS } from "@/data/mock-data";

export default function AboutSection() {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#0867C8]" />;
      case "users":
        return <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#0867C8]" />;
      case "graduation-cap":
        return <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#0867C8]" />;
      case "trophy":
        return <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B]" />;
      default:
        return <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#0867C8]" />;
    }
  };

  return (
    <section id="gioi-thieu" className="bg-[#F8FAFC] py-10 sm:py-14 md:py-20 border-y border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column: Lighthouse Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-md aspect-[4/3] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 sm:border-4 border-white">
              <Image
                src="/images/hai-dang-vinh-thuc.jpg"
                alt="Hải đăng Vĩnh Thực"
                fill
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062D62]/85 via-[#062D62]/20 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-sky-300 font-bold">
                  Hải đăng Vĩnh Thực
                </span>
                <p className="text-xs sm:text-sm text-slate-100 font-medium mt-0.5">
                  Biểu tượng kiên cường nơi hải đảo tiền tiêu
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Stats */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-blue-100/80 text-[#0867C8] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider">
                <span>VỀ CHÚNG TÔI</span>
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#062D62] tracking-tight uppercase">
                NGÔI TRƯỜNG NƠI BIỂN ĐẢO
              </h2>
              <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#0867C8] rounded-full"></div>
            </div>

            <div className="space-y-2 sm:space-y-3 text-xs sm:text-base text-slate-700 leading-relaxed">
              <p>
                Theo Quyết định số 220/QĐ-UBND ngày 15/10/2025 của UBND xã Vĩnh Thực, Trường Tiểu học Vĩnh Thực, Trường Trung học cơ sở Vĩnh Thực và Trường Tiểu học và Trung học cơ sở Vĩnh Trung được sáp nhập thành <strong>Trường Tiểu học và Trung học cơ sở Vĩnh Thực</strong>.
              </p>
              <p>
                Nhà trường là đơn vị sự nghiệp công lập trực thuộc UBND xã Vĩnh Thực. Trụ sở chính đặt tại thôn Vĩnh Thực 2; một điểm trường đặt tại thôn Vĩnh Trung 2, xã Vĩnh Thực, Thành phố Quảng Ninh.
              </p>
            </div>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              {SCHOOL_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 shadow-xs flex flex-col items-center text-center space-y-1 sm:space-y-2 hover:shadow-md transition-shadow"
                >
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-blue-50">
                    {getStatIcon(stat.iconName)}
                  </div>
                  <div className="text-xl sm:text-3xl font-extrabold text-[#062D62] leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-600 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <Link
                href="#gioi-thieu"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-[#062D62] hover:bg-[#0867C8] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all hover:scale-105 active:scale-95 text-center"
              >
                <span>TÌM HIỂU THÊM VỀ NHÀ TRƯỜNG</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <a
                href="/documents/quyet-dinh-220-sap-nhap-truong-th-thcs-vinh-thuc.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full border-2 border-[#0867C8] bg-white text-[#062D62] hover:bg-blue-50 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all text-center"
              >
                <span>XEM QUYẾT ĐỊNH 220/QĐ-UBND</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
