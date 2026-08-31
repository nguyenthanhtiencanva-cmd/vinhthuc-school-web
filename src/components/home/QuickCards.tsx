import React from "react";
import Link from "next/link";
import { Megaphone, Calendar, FileText, Image as ImageIcon, ArrowRight } from "lucide-react";
import { QUICK_CARDS } from "@/data/mock-data";

export default function QuickCards() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "megaphone":
        return <Megaphone className="w-8 h-8 text-[#0867C8]" />;
      case "calendar":
        return <Calendar className="w-8 h-8 text-[#E58A00]" />;
      case "file-text":
        return <FileText className="w-8 h-8 text-[#10B981]" />;
      case "image":
        return <ImageIcon className="w-8 h-8 text-[#A855F7]" />;
      default:
        return <FileText className="w-8 h-8" />;
    }
  };

  return (
    <section className="relative z-20 -mt-10 sm:-mt-16 md:-mt-20 max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {QUICK_CARDS.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            className={`${card.bgColor} rounded-xl sm:rounded-2xl p-3.5 sm:p-6 xl:p-7 min-h-[190px] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between border border-white/70 group`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="p-2 sm:p-3 bg-white/90 rounded-lg sm:rounded-xl shadow-xs">
                {getIcon(card.iconName)}
              </div>
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${card.arrowColor} group-hover:scale-110 transition-transform shadow-xs shrink-0`}
              >
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>

            <div className="mt-3 sm:mt-4">
              <h2 className="text-xs sm:text-base md:text-lg font-extrabold text-[#062D62] tracking-tight group-hover:text-[#0867C8] transition-colors leading-tight">
                {card.title}
              </h2>
              <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 mt-1 leading-relaxed line-clamp-2 hidden xs:block sm:block">
                {card.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
