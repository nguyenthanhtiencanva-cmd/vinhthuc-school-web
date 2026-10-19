"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, Sparkles, ChevronRight, ExternalLink } from "lucide-react";
import { FEATURED_ACTIVITIES } from "@/data/mock-data";

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  category: string;
  span?: string;
  aspect?: string;
  link?: string;
}

const ALL_PHOTOS: GalleryPhoto[] = [
  {
    id: "he-1",
    src: "/images/tong-ket-hoat-dong-he-2026/anh-tap-the-01.jpg",
    alt: "Đại biểu và học sinh chụp ảnh tập thể tại hội nghị tổng kết hoạt động hè năm 2026",
    category: "HOẠT ĐỘNG HÈ 2026",
    span: "col-span-1 sm:col-span-2 lg:col-span-2",
    aspect: "aspect-[16/10]",
    link: "/tin-tuc/tong-ket-hoat-dong-quan-ly-giao-duc-thanh-thieu-nhi-he-2026",
  },
  {
    id: "tk-khen",
    src: "/images/tong-ket-2025-2026/trao-giay-khen-01.jpg",
    alt: "Trao giấy khen thành tích xuất sắc tại hội nghị tổng kết năm học",
    category: "KHEN THƯỞNG",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
    link: "/tin-tuc/tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  },
  {
    id: "tk-1",
    src: "/images/tong-ket-2025-2026/anh-01.jpg",
    alt: "Toàn cảnh hội nghị tổng kết năm học 2025–2026 tại Nhà văn hóa xã Vĩnh Thực",
    category: "TỔNG KẾT NĂM HỌC",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
    link: "/tin-tuc/tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  },
  {
    id: "tk-2",
    src: "/images/tong-ket-2025-2026/anh-02.jpg",
    alt: "Đại biểu phát biểu chỉ đạo tại hội nghị tổng kết năm học",
    category: "HỘI NGHỊ",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
    link: "/tin-tuc/tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  },
  {
    id: "tk-3",
    src: "/images/tong-ket-2025-2026/anh-03.jpg",
    alt: "Đại biểu và cán bộ giáo viên tham dự hội nghị tại Nhà văn hóa xã Vĩnh Thực",
    category: "ĐỘI NGŨ",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
    link: "/tin-tuc/tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  },
  {
    id: "tk-4",
    src: "/images/tong-ket-2025-2026/anh-04.jpg",
    alt: "Toàn cảnh đại biểu dự hội nghị tổng kết năm học tại Nhà văn hóa xã Vĩnh Thực",
    category: "HỘI NGHỊ",
    span: "col-span-1 sm:col-span-2 lg:col-span-2",
    aspect: "aspect-[16/10]",
    link: "/tin-tuc/tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  },
  {
    id: "tk-5",
    src: "/images/tong-ket-2025-2026/anh-05.jpg",
    alt: "Tốp ca học sinh biểu diễn văn nghệ chào mừng hội nghị",
    category: "VĂN NGHỆ",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
    link: "/tin-tuc/tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  },
  {
    id: "tk-6",
    src: "/images/tong-ket-2025-2026/anh-06.jpg",
    alt: "Tiết mục múa của học sinh trên sân khấu hội nghị",
    category: "VĂN NGHỆ",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
    link: "/tin-tuc/tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  },
  {
    id: "tk-7",
    src: "/images/tong-ket-2025-2026/anh-07.jpg",
    alt: "Tiết mục văn nghệ áo dài truyền thống tại hội nghị",
    category: "VĂN NGHỆ",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
    link: "/tin-tuc/tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  },
  {
    id: "tk-8",
    src: "/images/tong-ket-2025-2026/anh-08.jpg",
    alt: "Tiết mục văn nghệ chào mừng năm học mới",
    category: "VĂN NGHỆ",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
    link: "/tin-tuc/tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  },
  {
    id: "tk-9",
    src: "/images/tong-ket-2025-2026/anh-09.jpg",
    alt: "Tiết mục múa trên sân khấu hội nghị tổng kết",
    category: "VĂN NGHỆ",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
    link: "/tin-tuc/tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  },
  {
    id: "tk-10",
    src: "/images/tong-ket-2025-2026/anh-10.jpg",
    alt: "Trao tặng giấy khen tại hội nghị tổng kết năm học 2025–2026",
    category: "KHEN THƯỞNG",
    span: "col-span-1",
    aspect: "aspect-[4/3]",
    link: "/tin-tuc/tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi",
  },
];

export default function FeaturedActivities() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredPhotos =
    activeTab === "all"
      ? ALL_PHOTOS
      : activeTab === "he"
      ? ALL_PHOTOS.filter((p) => p.category.includes("HÈ"))
      : activeTab === "tong-ket"
      ? ALL_PHOTOS.filter((p) => !p.category.includes("HÈ"))
      : ALL_PHOTOS;

  return (
    <section id="thu-vien" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 py-10 sm:py-14 md:py-18 xl:py-20 border-t border-slate-200/60">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-slate-100 pb-4 mb-6 sm:mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>THƯ VIỆN HÌNH ẢNH HOẠT ĐỘNG</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight uppercase flex items-center gap-2.5">
            <span className="w-2.5 h-6 bg-sky-700 rounded-full inline-block"></span>
            <span>HÌNH ẢNH HOẠT ĐỘNG &amp; TỔNG KẾT NHÀ TRƯỜNG</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "all"
                ? "bg-sky-700 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Tất cả ({ALL_PHOTOS.length})
          </button>
          <button
            onClick={() => setActiveTab("tong-ket")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "tong-ket"
                ? "bg-sky-700 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Tổng kết năm học (11)
          </button>
          <button
            onClick={() => setActiveTab("he")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "he"
                ? "bg-sky-700 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Hoạt động hè 2026 (1)
          </button>
        </div>
      </div>

      {/* Bento Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className={`group relative ${photo.span || "col-span-1"} ${
              photo.aspect || "aspect-[4/3]"
            } rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 bg-slate-100 border border-slate-200/70 hover:-translate-y-1`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity p-4 sm:p-5 flex flex-col justify-end text-white">
              <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                {photo.category}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-white leading-snug line-clamp-2">
                {photo.alt}
              </p>
              {photo.link && (
                <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-between text-[11px] text-sky-200 font-medium">
                  <Link
                    href={photo.link}
                    className="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <span>Xem bài viết chi tiết</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 6 Core School Themes (Preserve mock data activities) */}
      <div className="mt-10 pt-8 border-t border-slate-100">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>CÁC CHỦ ĐỀ HOẠT ĐỘNG THƯỜNG NIÊN</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {FEATURED_ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="group bg-white rounded-xl border border-slate-200/80 p-3 text-center shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col items-center justify-center gap-2"
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-sky-50 flex items-center justify-center p-1.5">
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold text-sky-700 uppercase block">
                  {act.category}
                </span>
                <span className="text-xs font-bold text-slate-800 group-hover:text-sky-700 transition-colors line-clamp-1">
                  {act.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
