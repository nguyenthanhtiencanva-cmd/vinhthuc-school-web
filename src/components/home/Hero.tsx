import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Newspaper, Sparkles, MapPin, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-sky-50/70 via-white to-slate-50 text-slate-800 py-12 lg:py-20 xl:py-24 overflow-hidden border-b border-slate-200/80">
      {/* Background illustration & wave overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none">
        <Image
          src="/images/hero-bg.svg"
          alt="Hình nền Hải đăng Vĩnh Thực"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Hero Content (7 cols) */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Top decorative badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/80 text-xs font-bold tracking-wider text-sky-800 uppercase shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Đảo Tiền Tiêu Vĩnh Thực</span>
              <span className="text-sky-300">•</span>
              <span>TP. Quảng Ninh</span>
            </div>

            {/* Main Headline H1 with prominent gradient */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 uppercase">
              TRƯỜNG TH &amp; THCS{" "}
              <span className="bg-gradient-to-r from-blue-800 to-sky-600 bg-clip-text text-transparent">
                VĨNH THỰC
              </span>
            </h1>

            {/* Slogan */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
              <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-amber-500 tracking-tight">
                Soi đường tri thức – Vững bước tương lai
              </p>
            </div>

            {/* School Introduction Text */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Môi trường giáo dục thân thiện, kỷ cương và hiện đại nơi hải đảo Đông Bắc Tổ quốc. Nơi ươm mầm tri thức, rèn luyện nhân cách, chắp cánh ước mơ cho các thế hệ học sinh.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              {/* Primary CTA */}
              <Link
                href="#gioi-thieu"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 bg-sky-700 hover:bg-sky-800 text-white shadow-lg shadow-sky-700/25 rounded-2xl px-6 py-3.5 font-semibold text-sm tracking-wider uppercase transition-all lg:hover:-translate-y-1 active:translate-y-0"
              >
                <Compass className="w-4 h-4 text-sky-200" />
                <span>KHÁM PHÁ NHÀ TRƯỜNG</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#tin-tuc"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm tracking-wider uppercase border border-slate-300 shadow-sm transition-all lg:hover:-translate-y-1 active:translate-y-0"
              >
                <Newspaper className="w-4 h-4 text-sky-700" />
                <span>TIN TỨC MỚI NHẤT</span>
                <ArrowRight className="w-4 h-4 text-sky-700" />
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Student Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center z-10 mt-4 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-md lg:max-w-[420px] xl:max-w-[450px]">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-400/30 to-amber-300/30 rounded-[32px] blur-xl opacity-60"></div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[3/4] group">
                <Image
                  src="/images/hoc-sinh-chuan.jpg"
                  alt="Học sinh Trường TH & THCS Vĩnh Thực"
                  fill
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 100vw, 450px"
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                  priority
                />

                {/* Subtle bottom shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none"></div>

                {/* Top Floating Badge: Logo & School Tag */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-lg border border-slate-200/80">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-slate-200">
                    <Image
                      src="/brand/logo.jpeg"
                      alt="Logo"
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-extrabold text-slate-900 uppercase tracking-wide">
                    TH &amp; THCS VĨNH THỰC
                  </span>
                </div>

                {/* Floating Stat Badge (Top Right) */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 flex items-center gap-1.5 bg-amber-500/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-lg text-slate-950 font-bold text-xs">
                  <Award className="w-3.5 h-3.5" />
                  <span>Chuẩn Quốc Gia</span>
                </div>

                {/* Bottom Floating Card */}
                <div className="absolute bottom-3.5 inset-x-3.5 sm:bottom-4 sm:inset-x-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/20 text-white shadow-xl">
                  <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider block">
                    Ươm mầm tương lai
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white leading-snug mt-0.5">
                    Học sinh chăm ngoan, tiến bước tương lai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 overflow-hidden leading-none pointer-events-none opacity-40">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-full text-slate-200/60 fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
