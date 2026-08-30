import React from "react";
import { BookOpen, Sparkles, Binary, Globe, Users } from "lucide-react";
import { DEPARTMENTS } from "@/data/mock-data";

export default function DepartmentsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "to-1-2-3":
        return <BookOpen className="w-6 h-6 text-[#0867C8]" />;
      case "to-4-5":
        return <Sparkles className="w-6 h-6 text-[#D97706]" />;
      case "to-khtn":
        return <Binary className="w-6 h-6 text-[#059669]" />;
      case "to-khxh":
        return <Globe className="w-6 h-6 text-[#7C3AED]" />;
      default:
        return <Users className="w-6 h-6 text-[#0867C8]" />;
    }
  };

  return (
    <section id="to-chuyen-mon" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-slate-100 pb-4 mb-8 gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0867C8] text-xs font-extrabold uppercase tracking-wider mb-2">
            <span>CƠ CẤU TỔ CHỨC</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#062D62] tracking-tight uppercase flex items-center gap-2">
            <span className="w-2.5 h-6 bg-[#0867C8] rounded-full inline-block"></span>
            <span>4 TỔ CHUYÊN MÔN NHÀ TRƯỜNG</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md">
          Đội ngũ giáo viên tâm huyết, phân bổ đồng bộ theo cấp học và nhóm môn chuyên môn
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DEPARTMENTS.map((dept) => (
          <div
            key={dept.id}
            id={dept.id}
            className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-slate-50 group-hover:scale-110 transition-transform">
                  {getIcon(dept.id)}
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase">
                  {dept.level}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#062D62] group-hover:text-[#0867C8] transition-colors">
                  {dept.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {dept.description}
                </p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0867C8]">
              <span>Kế hoạch &amp; Hoạt động</span>
              <span className="group-hover:translate-x-1 transition-transform">➔</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
