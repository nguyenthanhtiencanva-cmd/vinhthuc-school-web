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
    <section className="relative z-20 -mt-14 sm:-mt-16 md:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {QUICK_CARDS.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            className={`${card.bgColor} rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between border border-white/60 group`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="p-3 bg-white/80 rounded-xl shadow-xs">
                {getIcon(card.iconName)}
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${card.arrowColor} group-hover:scale-110 transition-transform shadow-xs`}
              >
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-base sm:text-lg font-bold text-[#062D62] tracking-tight group-hover:text-[#0867C8] transition-colors">
                {card.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed line-clamp-2">
                {card.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
