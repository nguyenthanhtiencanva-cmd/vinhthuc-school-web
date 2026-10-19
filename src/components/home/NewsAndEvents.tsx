import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  ChevronRight,
  FileText,
  Download,
  ShieldCheck,
} from "lucide-react";
import { FEATURED_NEWS, RECENT_NEWS, UPCOMING_EVENTS } from "@/data/mock-data";

export default function NewsAndEvents() {
  return (
    <section id="tin-tuc" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 py-10 sm:py-14 md:py-18 xl:py-20">
      {/* 1. Official Notice Card: Văn bản / Quyết định công khai */}
      <div className="mb-10 sm:mb-12">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-sky-200/80 bg-gradient-to-r from-blue-50/90 via-white to-sky-50/70 p-5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md hover:border-sky-300 transition-all group">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
            {/* Left: Document Icon Badge */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white flex flex-col items-center justify-center shadow-lg shadow-red-500/20 group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="text-[9px] font-black tracking-wider uppercase mt-0.5">PDF</span>
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100/80 text-red-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>VĂN BẢN CÔNG KHAI</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">
                  Số hiệu: 220/QĐ-UBND • Ngày ban hành: 15/10/2025
                </div>
              </div>
            </div>

            {/* Middle: Document Title & Details */}
            <div className="flex-1 min-w-0 space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                Quyết định số 220/QĐ-UBND của Ủy ban nhân dân xã Vĩnh Thực
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                Về việc thành lập Trường Tiểu học và Trung học cơ sở Vĩnh Thực trên cơ sở sáp nhập Trường Tiểu học Vĩnh Thực, Trường Trung học cơ sở Vĩnh Thực và Trường Tiểu học &amp; THCS Vĩnh Trung.
              </p>
            </div>

            {/* Right: Download / View Action */}
            <div className="w-full lg:w-auto shrink-0 pt-2 lg:pt-0">
              <a
                href="/documents/quyet-dinh-220-sap-nhap-truong-th-thcs-vinh-thuc.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-sky-700 hover:bg-sky-800 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-md shadow-sky-700/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>XEM &amp; TẢI QUYẾT ĐỊNH (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Grid: Tin tức (Left) & Sự kiện (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left Column (8-9 cols): Asymmetric Editorial Grid */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-6">
          {/* Section Header */}
          <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight uppercase flex items-center gap-2.5">
              <span className="w-2.5 h-6 bg-sky-700 rounded-full inline-block"></span>
              <span>TIN TỨC &amp; HOẠT ĐỘNG</span>
            </h2>
            <Link
              href="#tin-tuc"
              className="text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 transition-colors"
            >
              <span>Xem tất cả</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Editorial Grid: 1 Big Featured + Secondary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Big Featured Article (7 cols) */}
            <div className="md:col-span-7 flex flex-col group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={FEATURED_NEWS.image}
                  alt={FEATURED_NEWS.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-sky-700/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {FEATURED_NEWS.category}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="bg-sky-50 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-700" />
                      <span>{FEATURED_NEWS.date}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug line-clamp-2">
                    <Link href={`/tin-tuc/${FEATURED_NEWS.slug}`}>
                      {FEATURED_NEWS.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {FEATURED_NEWS.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={`/tin-tuc/${FEATURED_NEWS.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 group/btn"
                  >
                    <span>Xem chi tiết bài viết</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* List of Secondary News (5 cols) */}
            <div className="md:col-span-5 flex flex-col space-y-4">
              {RECENT_NEWS.map((item) => {
                const isSvg = item.image.endsWith(".svg");
                return (
                  <div
                    key={item.id}
                    className="group bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-3.5 shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex gap-3.5 items-stretch"
                  >
                    <div
                      className={`relative w-20 sm:w-24 aspect-square rounded-xl overflow-hidden shrink-0 ${
                        isSvg
                          ? "bg-gradient-to-br from-slate-50 via-sky-50/50 to-blue-50/40 ring-1 ring-inset ring-slate-900/5 p-2 flex items-center justify-center"
                          : "bg-slate-100"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="96px"
                        className={
                          isSvg
                            ? "object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                            : "object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                        }
                      />
                    </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className="bg-sky-50 text-sky-700 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full truncate max-w-[120px]">
                          {item.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium shrink-0">
                          {item.date}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug line-clamp-2">
                        {item.slug.startsWith("tong-ket") ? (
                          <Link href={`/tin-tuc/${item.slug}`}>{item.title}</Link>
                        ) : (
                          <Link href={`#tin-tuc/${item.slug}`}>{item.title}</Link>
                        )}
                      </h4>
                    </div>

                    <div className="pt-1">
                      {item.slug.startsWith("tong-ket") ? (
                        <Link
                          href={`/tin-tuc/${item.slug}`}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-700 hover:text-sky-900"
                        >
                          <span>Xem bài viết</span>
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      ) : (
                        <span className="text-[10px] text-slate-400 font-medium">Bản tin nội bộ</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>

        {/* Right Column (4-3 cols): Lịch Sự kiện trang trọng */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-6">
          <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight uppercase flex items-center gap-2.5 whitespace-nowrap">
              <span className="w-2.5 h-6 bg-amber-500 rounded-full inline-block"></span>
              <span>SỰ KIỆN SẮP TỚI</span>
            </h2>
            <Link
              href="#su-kien"
              className="text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {UPCOMING_EVENTS.map((evt) => (
              <div
                key={evt.id}
                className="group bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-4.5 shadow-xs hover:shadow-lg hover:border-amber-200 hover:-translate-y-0.5 transition-all duration-300 flex items-stretch gap-3.5"
              >
                {/* Date block */}
                <div className="w-16 rounded-xl bg-gradient-to-b from-sky-50 to-blue-50/80 border border-sky-100 flex flex-col items-center justify-center p-2 text-center shrink-0 group-hover:border-amber-300 transition-colors">
                  <span className="text-xl sm:text-2xl font-black text-slate-900 leading-none">
                    {evt.day}
                  </span>
                  <span className="text-[10px] font-bold text-sky-700 uppercase mt-1 leading-none">
                    {evt.month}
                  </span>
                </div>

                {/* Event info */}
                <div className="flex-1 min-w-0 flex flex-col justify-center space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug line-clamp-2">
                    <Link href={`#su-kien/${evt.slug}`}>{evt.title}</Link>
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 truncate">
                    <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
