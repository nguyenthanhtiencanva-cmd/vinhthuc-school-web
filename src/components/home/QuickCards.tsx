import React from "react";
import Link from "next/link";
import { Megaphone, Calendar, FileText, Image as ImageIcon, ArrowRight } from "lucide-react";
import { QUICK_CARDS } from "@/data/mock-data";

export default function QuickCards() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "megaphone":
        return <Megaphone className="w-6 h-6 sm:w-7 sm:h-7 text-[#0867C8]" />;
      case "calendar":
        return <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-[#E58A00]" />;
      case "file-text":
        return <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-[#10B981]" />;
      case "image":
        return <ImageIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#A855F7]" />;
      default:
        return <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-[#0867C8]" />;
    }
  };

  const getCardStyle = (id: string) => {
    switch (id) {
      case "card-1":
        return "bg-[#EBF3FC] hover:bg-[#E2EDFA] border-white/80 shadow-blue-900/5";
      case "card-2":
        return "bg-[#FEF7EA] hover:bg-[#FDF0DB] border-white/80 shadow-amber-900/5";
      case "card-3":
        return "bg-[#EEFAF2] hover:bg-[#E2F6E8] border-white/80 shadow-emerald-900/5";
      case "card-4":
        return "bg-[#F8EEFB] hover:bg-[#F2E1F7] border-white/80 shadow-purple-900/5";
      default:
        return "bg-white hover:bg-slate-50 border-slate-200/80";
    }
  };

  const getArrowStyle = (id: string) => {
    switch (id) {
      case "card-1":
        return "bg-[#0867C8] text-white";
      case "card-2":
        return "bg-[#E58A00] text-white";
      case "card-3":
        return "bg-[#10B981] text-white";
      case "card-4":
        return "bg-[#A855F7] text-white";
      default:
        return "bg-sky-700 text-white";
    }
  };

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 md:-mt-14 max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
        {QUICK_CARDS.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            className={`${getCardStyle(
              card.id
            )} rounded-2xl p-3.5 sm:p-5 lg:p-6 min-h-[145px] sm:min-h-[165px] lg:min-h-[180px] shadow-sm hover:shadow-xl transition-all duration-300 transform lg:hover:-translate-y-1.5 active:scale-[0.98] flex flex-col justify-between border group backdrop-blur-xs`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="p-2.5 sm:p-3 bg-white/90 backdrop-blur-xs rounded-xl shadow-2xs group-hover:scale-105 group-hover:bg-white transition-all">
                {getIcon(card.iconName)}
              </div>
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${getArrowStyle(
                  card.id
                )} flex items-center justify-center transition-all shadow-2xs shrink-0 group-hover:scale-110 group-hover:shadow-md`}
              >
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            <div className="mt-3 sm:mt-4">
              <h2 className="text-xs sm:text-base md:text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-slate-950 transition-colors leading-tight">
                {card.title}
              </h2>
              <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 mt-1 leading-relaxed line-clamp-2 hidden xs:block sm:block font-medium">
                {card.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
