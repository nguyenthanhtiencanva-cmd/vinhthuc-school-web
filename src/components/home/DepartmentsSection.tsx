import React from "react";
import { BookOpen, Sparkles, Binary, Globe, Users, ArrowRight } from "lucide-react";
import { DEPARTMENTS } from "@/data/mock-data";

export default function DepartmentsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "to-1-2-3":
        return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-sky-700" />;
      case "to-4-5":
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />;
      case "to-khtn":
        return <Binary className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />;
      case "to-khxh":
        return <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />;
      default:
        return <Users className="w-5 h-5 sm:w-6 sm:h-6 text-sky-700" />;
    }
  };

  return (
    <section id="to-chuyen-mon" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 py-10 sm:py-14 md:py-18 xl:py-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-slate-100 pb-4 mb-6 sm:mb-8 gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
            <span>CƠ CẤU TỔ CHỨC</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight uppercase flex items-center gap-2.5">
            <span className="w-2.5 h-6 bg-sky-700 rounded-full inline-block"></span>
            <span>4 TỔ CHUYÊN MÔN NHÀ TRƯỜNG</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md">
          Đội ngũ giáo viên tâm huyết, phân bổ đồng bộ theo cấp học và nhóm môn chuyên môn
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {DEPARTMENTS.map((dept) => (
          <div
            key={dept.id}
            id={dept.id}
            className="bg-white rounded-2xl p-5 sm:p-6 min-h-[280px] border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-slate-50 group-hover:scale-110 group-hover:bg-sky-50 transition-all">
                  {getIcon(dept.id)}
                </div>
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 uppercase">
                  {dept.level}
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {dept.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {dept.description}
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700">
              <span>Kế hoạch &amp; Hoạt động</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
