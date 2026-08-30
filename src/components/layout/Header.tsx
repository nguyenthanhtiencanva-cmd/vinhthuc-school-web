"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  GraduationCap,
  Search,
  Menu,
  X,
  ChevronDown,
  Home as HomeIcon,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { name: "TRANG CHỦ", href: "/" },
  {
    name: "GIỚI THIỆU",
    href: "#gioi-thieu",
    children: [
      { name: "Giới thiệu chung", href: "#" },
      { name: "Lịch sử hình thành", href: "#" },
      { name: "Tầm nhìn - Sứ mệnh", href: "#" },
      { name: "Ban giám hiệu & Đội ngũ", href: "#" },
      { name: "Cơ sở vật chất", href: "#" },
      { name: "Thành tích nhà trường", href: "#" },
    ],
  },
  {
    name: "TIN TỨC",
    href: "#tin-tuc",
    children: [
      { name: "Tin nhà trường", href: "#" },
      { name: "Tổ 1 + 2 + 3", href: "#to-1-2-3" },
      { name: "Tổ 4 + 5", href: "#to-4-5" },
      { name: "Tổ Khoa học tự nhiên", href: "#to-khtn" },
      { name: "Tổ Khoa học xã hội", href: "#to-khxh" },
      { name: "Hoạt động Đoàn - Đội", href: "#" },
      { name: "Văn nghệ - Thể thao", href: "#" },
    ],
  },
  {
    name: "THÔNG BÁO",
    href: "#thong-bao",
    children: [
      { name: "Thông báo chung", href: "#" },
      { name: "Lịch học - Lịch thi", href: "#" },
      { name: "Tuyển sinh", href: "https://quangninh.tsdc.edu.vn/" },
      { name: "Thông báo phụ huynh", href: "#" },
    ],
  },
  {
    name: "HỌC SINH",
    href: "#hoc-sinh",
    children: [
      { name: "Gương mặt tiêu biểu", href: "#" },
      { name: "Góc sáng tạo", href: "#" },
      { name: "Câu lạc bộ", href: "#" },
    ],
  },
  {
    name: "THƯ VIỆN",
    href: "#thu-vien",
    children: [
      { name: "Album ảnh", href: "#" },
      { name: "Video & Reels", href: "#" },
      { name: "Tài liệu học tập", href: "#" },
    ],
  },
  {
    name: "CÔNG KHAI",
    href: "#cong-khai",
    children: [
      { name: "Kế hoạch giáo dục", href: "#" },
      { name: "Báo cáo thường niên", href: "#" },
      { name: "Công khai tài chính", href: "#" },
    ],
  },
  { name: "LIÊN HỆ", href: "#lien-he" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Utility Bar */}
      <div className="bg-[#062D62] text-white text-xs py-2 px-4 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-200 font-medium tracking-wide">
            <span className="hidden md:inline text-amber-400 font-semibold">★</span>
            <span>Soi đường tri thức – Vững bước tương lai</span>
          </div>

          <div className="flex items-center gap-4 text-slate-200 text-xs flex-wrap justify-center">
            <a
              href="mailto:c12vinhthuc.vinhthuc@quangninh.edu.vn"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>Thư điện tử</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="tel:0903280488"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold">0903 280 488</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://quangninh.tsdc.edu.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tuyển sinh</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & School Name */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#062D62] bg-white p-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <Image
                src="/brand/logo.jpeg"
                alt="Logo Trường TH & THCS Vĩnh Thực"
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest leading-none">
                UBND XÃ VĨNH THỰC
              </span>
              <span className="text-base sm:text-lg font-bold text-[#062D62] tracking-tight mt-0.5 leading-tight">
                TRƯỜNG TH &amp; THCS VĨNH THỰC
              </span>
              <span className="text-[11px] font-medium text-amber-600 italic leading-none mt-0.5">
                Soi đường tri thức – Vững bước tương lai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const isHome = item.name === "TRANG CHỦ";
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-xs font-bold transition-all ${
                      isHome
                        ? "text-[#0867C8] bg-blue-50/80 font-extrabold"
                        : "text-[#062D62] hover:text-[#0867C8] hover:bg-slate-50"
                    }`}
                  >
                    {isHome && <HomeIcon className="w-3.5 h-3.5" />}
                    <span>{item.name}</span>
                    {hasChildren && (
                      <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-[#0867C8] transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasChildren && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-0.5 w-56 rounded-lg bg-white shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      {item.children?.map((subItem) => {
                        const isExternal = subItem.href.startsWith("http");
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0867C8] transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Search & Mobile Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full bg-[#0867C8] text-white hover:bg-[#062D62] transition-colors shadow-sm focus:outline-none"
              title="Tìm kiếm"
              aria-label="Tìm kiếm"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#062D62] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar Collapsible */}
        {searchOpen && (
          <div className="py-3 border-t border-slate-100 pb-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Tìm kiếm: ${searchQuery}`);
              }}
              className="flex items-center gap-2 max-w-xl mx-auto"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nhập thông tin cần tìm: tuyển sinh, lịch công tác, tin tức..."
                className="flex-1 px-4 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0867C8] text-slate-800"
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#0867C8] text-white text-sm font-semibold rounded-lg hover:bg-[#062D62] transition-colors"
              >
                Tìm
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="py-1">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold text-[#062D62] hover:bg-blue-50 hover:text-[#0867C8]"
                >
                  <span>{item.name}</span>
                  {item.children && (
                    <span className="text-xs text-slate-400 font-normal">
                      ({item.children.length})
                    </span>
                  )}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-1 border-l-2 border-slate-100 ml-3 my-1">
                    {item.children.map((sub) => {
                      const isExternal = sub.href.startsWith("http");
                      return (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="block py-1.5 text-xs text-slate-600 hover:text-[#0867C8]"
                        >
                          {sub.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
