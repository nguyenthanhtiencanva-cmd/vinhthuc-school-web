import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Newspaper, Sparkles, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#062D62] via-[#084C94] to-[#0A60B4] text-white pt-6 pb-20 sm:pt-10 sm:pb-28 md:pt-14 md:pb-36 lg:pt-12 lg:pb-32 xl:pt-14 overflow-hidden">
      {/* Background illustration & wave overlay */}
      <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none">
        <Image
          src="/images/hero-bg.svg"
          alt="Hình nền Hải đăng Vĩnh Thực"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Hero Content (7 cols) */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5 xl:space-y-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-bold tracking-wider text-sky-200 uppercase">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Đảo Tiền Tiêu Vĩnh Thực</span>
              <span>•</span>
              <span>TP. Quảng Ninh</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] 2xl:text-[56px] font-extrabold tracking-tight leading-[1.12] uppercase text-white drop-shadow-md max-w-4xl">
              TRƯỜNG TH &amp; THCS VĨNH THỰC
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
              <p className="text-lg sm:text-2xl md:text-3xl xl:text-[32px] font-extrabold text-[#F5C542] drop-shadow-md">
                Soi đường tri thức – Vững bước tương lai
              </p>
            </div>

            <p className="text-xs sm:text-base xl:text-[17px] text-slate-100 max-w-2xl xl:max-w-3xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Môi trường giáo dục thân thiện, kỷ cương và hiện đại nơi hải đảo Đông Bắc Tổ quốc. Nơi ươm mầm tri thức, rèn luyện nhân cách, chắp cánh ước mơ cho các thế hệ học sinh.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3.5 justify-center lg:justify-start">
              <Link
                href="#gioi-thieu"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-[#062D62] hover:bg-[#041E42] text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-sky-400/50 shadow-lg shadow-blue-950/40 transition-all hover:scale-105 active:scale-95"
              >
                <Compass className="w-4 h-4 text-sky-300" />
                <span>KHÁM PHÁ NHÀ TRƯỜNG</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#tin-tuc"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white text-[#062D62] hover:bg-sky-50 font-bold text-xs sm:text-sm tracking-wider uppercase border-2 border-white shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <Newspaper className="w-4 h-4 text-[#0867C8]" />
                <span>TIN TỨC MỚI NHẤT</span>
                <ArrowRight className="w-4 h-4 text-[#0867C8]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Student Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center z-10 mt-2 lg:mt-0">
            <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-[390px] xl:max-w-[420px]">
              {/* Outer decorative glow / borders */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 to-sky-400 rounded-3xl blur-md opacity-40"></div>

              <div className="relative rounded-3xl overflow-hidden border-4 border-white/80 bg-[#062D62] shadow-2xl aspect-[3/4]">
                <Image
                  src="/images/hoc-sinh-chuan.jpg"
                  alt="Học sinh Trường TH & THCS Vĩnh Thực"
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 100vw, 480px"
                  className="object-cover object-top"
                  priority
                />

                {/* Subtle bottom shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062D62]/85 via-transparent to-transparent"></div>

                {/* Top Badge: Logo Mini */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md border border-white">
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/brand/logo.jpeg"
                      alt="Logo"
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-extrabold text-[#062D62] uppercase tracking-wide">
                    TH &amp; THCS VĨNH THỰC
                  </span>
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-5 text-white flex flex-col justify-end">
                  <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 uppercase tracking-widest">
                    Ươm mầm tương lai
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight mt-0.5">
                    Học sinh chăm ngoan, tiến bước tương lai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-14 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-full text-[#F8FAFC] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
