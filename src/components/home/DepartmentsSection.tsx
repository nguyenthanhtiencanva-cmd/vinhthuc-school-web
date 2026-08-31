import React from "react";
import { BookOpen, Sparkles, Binary, Globe, Users } from "lucide-react";
import { DEPARTMENTS } from "@/data/mock-data";

export default function DepartmentsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "to-1-2-3":
        return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#0867C8]" />;
      case "to-4-5":
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#D97706]" />;
      case "to-khtn":
        return <Binary className="w-5 h-5 sm:w-6 sm:h-6 text-[#059669]" />;
      case "to-khxh":
        return <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#7C3AED]" />;
      default:
        return <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#0867C8]" />;
    }
  };

  return (
    <section id="to-chuyen-mon" className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-10 py-8 sm:py-12 md:py-16 xl:py-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-slate-100 pb-3 sm:pb-4 mb-5 sm:mb-8 gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-blue-50 text-[#0867C8] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mb-1.5 sm:mb-2">
            <span>CƠ CẤU TỔ CHỨC</span>
          </div>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#062D62] tracking-tight uppercase flex items-center gap-2">
            <span className="w-2 sm:w-2.5 h-5 sm:h-6 bg-[#0867C8] rounded-full inline-block"></span>
            <span>4 TỔ CHUYÊN MÔN NHÀ TRƯỜNG</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md">
          Đội ngũ giáo viên tâm huyết, phân bổ đồng bộ theo cấp học và nhóm môn chuyên môn
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
        {DEPARTMENTS.map((dept) => (
          <div
            key={dept.id}
            id={dept.id}
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 xl:p-7 min-h-[280px] border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-slate-50 group-hover:scale-110 transition-transform">
                  {getIcon(dept.id)}
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-100 text-slate-600 uppercase">
                  {dept.level}
                </span>
              </div>

              <div>
                <h3 className="text-sm sm:text-lg font-bold text-[#062D62] group-hover:text-[#0867C8] transition-colors">
                  {dept.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 sm:mt-2 leading-relaxed">
                  {dept.description}
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0867C8]">
              <span>Kế hoạch &amp; Hoạt động</span>
              <span className="group-hover:translate-x-1 transition-transform">➔</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
