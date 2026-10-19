import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Share2,
  ThumbsUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="lien-he" className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 py-12 sm:py-14 border-b border-slate-800/80">
          {/* Col 1: Brand & Logo (5 cols) */}
          <div className="md:col-span-2 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-slate-700 bg-white p-1 shadow-md shrink-0">
                <Image
                  src="/brand/logo.jpeg"
                  alt="Logo Trường TH & THCS Vĩnh Thực"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] sm:text-[11px] font-semibold text-sky-400 uppercase tracking-wider leading-none truncate">
                  UBND XÃ VĨNH THỰC
                </span>
                <span className="text-sm sm:text-base xl:text-lg font-extrabold text-white tracking-tight mt-1 leading-tight truncate">
                  TRƯỜNG TH &amp; THCS VĨNH THỰC
                </span>
              </div>
            </div>

            <p className="text-xs text-amber-400 font-semibold italic">
              Soi đường tri thức – Vững bước tương lai
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Trường học hạnh phúc nơi biển đảo quê hương. Chắp cánh ước mơ cho các thế hệ mầm non tương lai đất nước.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.facebook.com/ththcsvinhthuc"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500 hover:bg-[#FF0000] text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-400 hover:bg-[#0068FF] text-slate-300 hover:text-white flex items-center justify-center font-bold text-[11px] transition-all"
                aria-label="Zalo"
              >
                Zalo
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-500 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center font-bold text-[11px] transition-all"
                aria-label="TikTok"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Col 2: Liên hệ (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              LIÊN HỆ
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Trụ sở chính: thôn Vĩnh Thực 2, xã Vĩnh Thực, TP. Quảng Ninh
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="tel:0903280488"
                  className="font-semibold text-white hover:text-amber-400 transition-colors"
                >
                  0903 280 488
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="mailto:c12vinhthuc.vinhthuc@quangninh.edu.vn"
                  className="hover:text-amber-400 transition-colors break-all"
                >
                  c12vinhthuc.vinhthuc@quangninh.edu.vn
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Thứ 2 - Thứ 6: 07:00 - 17:00</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Liên kết nhanh (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              LIÊN KẾT NHANH
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="#gioi-thieu" className="hover:text-amber-400 transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="#tin-tuc" className="hover:text-amber-400 transition-colors">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link href="#thong-bao" className="hover:text-amber-400 transition-colors">
                  Thông báo
                </Link>
              </li>
              <li>
                <Link href="#lich-cong-tac" className="hover:text-amber-400 transition-colors">
                  Lịch công tác
                </Link>
              </li>
              <li>
                <Link href="#thu-vien" className="hover:text-amber-400 transition-colors">
                  Thư viện
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Dành cho phụ huynh & Fanpage (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs sm:text-sm font-bold text-sky-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              DÀNH CHO PHỤ HUYNH
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="#thu-tuc" className="hover:text-amber-400 transition-colors">
                  Hướng dẫn thủ tục
                </Link>
              </li>
              <li>
                <Link href="#thoi-khoa-bieu" className="hover:text-amber-400 transition-colors">
                  Thời khóa biểu
                </Link>
              </li>
              <li>
                <Link href="#bieu-mau" className="hover:text-amber-400 transition-colors">
                  Biểu mẫu
                </Link>
              </li>
              <li>
                <Link href="#tai-lieu" className="hover:text-amber-400 transition-colors">
                  Tài liệu
                </Link>
              </li>
              <li>
                <Link href="#thong-tin" className="hover:text-amber-400 transition-colors">
                  Thông tin cần biết
                </Link>
              </li>
            </ul>

            {/* Fanpage Widget */}
            <div className="pt-2">
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white bg-white shrink-0">
                    <Image
                      src="/brand/logo.jpeg"
                      alt="Avatar Fanpage"
                      fill
                      sizes="32px"
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-white truncate">
                      TH &amp; THCS Vĩnh Thực
                    </div>
                    <div className="text-[10px] text-slate-400">2,2K người theo dõi</div>
                  </div>
                </div>

                <div className="flex gap-1.5 pt-0.5">
                  <button className="flex-1 inline-flex items-center justify-center gap-1 py-1.5 rounded-lg bg-[#1877F2] text-[10px] font-semibold text-white hover:bg-blue-600 transition-colors">
                    <ThumbsUp className="w-3 h-3" />
                    <span>Theo dõi</span>
                  </button>
                  <button
                    className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-[10px] font-semibold text-slate-200 hover:bg-slate-700 transition-colors"
                    aria-label="Chia sẻ fanpage"
                  >
                    <Share2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-400">
          <div>
            © 2026 TRƯỜNG TH &amp; THCS VĨNH THỰC. Bảo lưu mọi quyền.
          </div>
          <div>Thiết kế bởi Vĩnh Thực Team</div>
        </div>
      </div>
    </footer>
  );
}
