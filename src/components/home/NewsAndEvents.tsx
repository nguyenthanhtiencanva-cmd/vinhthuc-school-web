import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { FEATURED_NEWS, RECENT_NEWS, UPCOMING_EVENTS } from "@/data/mock-data";

export default function NewsAndEvents() {
  return (
    <section id="tin-tuc" className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-10 py-8 sm:py-12 md:py-16 xl:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
        {/* Left 8 columns: Tin tức nổi bật */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2.5 sm:pb-3">
            <h2 className="text-lg sm:text-2xl font-extrabold text-[#062D62] tracking-tight uppercase flex items-center gap-2">
              <span className="w-2 sm:w-2.5 h-5 sm:h-6 bg-[#0867C8] rounded-full inline-block"></span>
              <span>TIN TỨC NỔI BẬT</span>
            </h2>
            <Link
              href="#tin-tuc"
              className="text-xs sm:text-sm font-semibold text-[#0867C8] hover:text-[#062D62] flex items-center gap-1 transition-colors"
            >
              <span>Xem tất cả</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            {/* Big Featured News (7 cols) */}
            <div className="md:col-span-7 flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={FEATURED_NEWS.image}
                  alt={FEATURED_NEWS.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#0867C8] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {FEATURED_NEWS.category}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#0867C8]" />
                    <span>{FEATURED_NEWS.date}</span>
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-[#062D62] group-hover:text-[#0867C8] transition-colors leading-snug line-clamp-2">
                    <Link href={`/tin-tuc/${FEATURED_NEWS.slug}`}>
                      {FEATURED_NEWS.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {FEATURED_NEWS.summary}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 mt-2 border-t border-slate-100">
                  <Link
                    href={`/tin-tuc/${FEATURED_NEWS.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0867C8] hover:text-[#062D62] group/btn"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* List 4 Smaller News (5 cols) */}
            <div className="md:col-span-5 flex flex-col space-y-2.5 sm:space-y-3.5">
              {RECENT_NEWS.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-white hover:bg-blue-50/50 border border-slate-100 hover:border-blue-100 transition-all group"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[9px] sm:text-[10px] font-bold text-[#0867C8] bg-blue-50 px-1.5 py-0.5 rounded truncate max-w-[110px] sm:max-w-[120px]">
                          {item.category}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium shrink-0">
                          {item.date}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-[#062D62] group-hover:text-[#0867C8] transition-colors leading-snug line-clamp-2">
                        <Link href={`#tin-tuc/${item.slug}`}>{item.title}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 4 columns: Sự kiện sắp diễn ra */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2.5 sm:pb-3">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-extrabold text-[#062D62] tracking-tight uppercase flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 sm:w-2.5 h-5 sm:h-6 bg-[#E58A00] rounded-full inline-block"></span>
              <span>SỰ KIỆN SẮP DIỄN RA</span>
            </h2>
            <Link
              href="#su-kien"
              className="text-xs sm:text-sm font-semibold text-[#0867C8] hover:text-[#062D62] flex items-center gap-1 transition-colors"
            >
              <span className="hidden 2xl:inline">Xem tất cả</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3.5">
            {UPCOMING_EVENTS.map((evt) => (
              <div
                key={evt.id}
                className="flex items-stretch gap-2.5 sm:gap-3.5 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md hover:border-amber-100 transition-all group"
              >
                {/* Date badge */}
                <div className="w-14 sm:w-16 rounded-lg sm:rounded-xl bg-gradient-to-b from-[#EBF3FC] to-[#D9EAFB] border border-blue-200/60 flex flex-col items-center justify-center p-1.5 sm:p-2 text-center shrink-0">
                  <span className="text-lg sm:text-xl font-extrabold text-[#062D62] leading-none">
                    {evt.day}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#0867C8] uppercase mt-1 leading-none">
                    {evt.month}
                  </span>
                </div>

                {/* Event info */}
                <div className="flex-1 min-w-0 flex flex-col justify-center space-y-0.5 sm:space-y-1">
                  <h3 className="text-xs sm:text-sm font-bold text-[#062D62] group-hover:text-[#0867C8] transition-colors leading-snug line-clamp-2">
                    <Link href={`#su-kien/${evt.slug}`}>{evt.title}</Link>
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500 shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-500 truncate">
                    <MapPin className="w-3 h-3 text-red-400 shrink-0" />
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
