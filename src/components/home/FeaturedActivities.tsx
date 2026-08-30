"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FEATURED_ACTIVITIES } from "@/data/mock-data";

export default function FeaturedActivities() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 6;
  const total = FEATURED_ACTIVITIES.length;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Reorder items starting from startIndex
  const visibleActivities = Array.from({ length: visibleCount }).map(
    (_, i) => FEATURED_ACTIVITIES[(startIndex + i) % total]
  );

  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3 sm:pb-4 mb-5 sm:mb-8">
        <h2 className="text-lg sm:text-2xl font-extrabold text-[#062D62] tracking-tight uppercase flex items-center gap-2">
          <span className="w-2 sm:w-2.5 h-5 sm:h-6 bg-[#0867C8] rounded-full inline-block"></span>
          <span>HOẠT ĐỘNG NỔI BẬT</span>
        </h2>

        {/* Carousel arrows */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={prevSlide}
            className="p-1.5 sm:p-2 rounded-full border border-slate-200 text-[#062D62] hover:bg-blue-50 hover:border-blue-300 transition-colors focus:outline-none active:scale-95"
            aria-label="Xem trước"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-1.5 sm:p-2 rounded-full border border-slate-200 text-[#062D62] hover:bg-blue-50 hover:border-blue-300 transition-colors focus:outline-none active:scale-95"
            aria-label="Xem tiếp theo"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Activities Grid / Carousel */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
        {visibleActivities.map((act, index) => (
          <div
            key={`${act.id}-${index}`}
            className="group relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-slate-100"
          >
            <Image
              src={act.image}
              alt={act.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#062D62]/95 via-[#062D62]/35 to-transparent"></div>

            {/* Content text bottom */}
            <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-3.5 flex flex-col justify-end text-white">
              <span className="text-[9px] sm:text-[10px] font-bold text-sky-300 uppercase tracking-wider mb-0.5">
                {act.category}
              </span>
              <h3 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2 text-white group-hover:text-amber-300 transition-colors">
                {act.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
