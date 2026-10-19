import React from "react";
import Link from "next/link";
import { Megaphone, Calendar, FileText, Image as ImageIcon, ArrowRight } from "lucide-react";
import { QUICK_CARDS } from "@/data/mock-data";

export default function QuickCards() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "megaphone":
        return <Megaphone className="w-6 h-6 sm:w-7 sm:h-7 text-sky-700" />;
      case "calendar":
        return <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" />;
      case "file-text":
        return <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />;
      case "image":
        return <ImageIcon className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />;
      default:
        return <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-sky-700" />;
    }
  };

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 md:-mt-14 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
        {QUICK_CARDS.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            className="bg-white rounded-2xl p-4 sm:p-6 min-h-[160px] sm:min-h-[180px] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between border border-slate-200/80 group"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="p-2.5 sm:p-3 bg-slate-50 rounded-xl group-hover:bg-sky-50 transition-colors">
                {getIcon(card.iconName)}
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 group-hover:bg-sky-700 text-slate-500 group-hover:text-white flex items-center justify-center transition-all shadow-2xs shrink-0">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            <div className="mt-3 sm:mt-4">
              <h2 className="text-xs sm:text-base md:text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors leading-tight">
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
