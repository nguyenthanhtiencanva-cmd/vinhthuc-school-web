"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  FileText,
  Download,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Building,
  DollarSign,
  TrendingUp,
  CreditCard,
  PieChart,
  X,
  ExternalLink,
  Layers,
  Wrench,
} from "lucide-react";

interface DocumentItem {
  id: string;
  title: string;
  code: string;
  date: string;
  agency: string;
  description: string;
  fileUrl: string;
  badge: string;
  badgeColor: string;
  pageCount: string;
}

const DOCUMENTS_QUY_3: DocumentItem[] = [
  {
    id: "doc-bb-niem-yet-q3",
    title: "Biên bản niêm yết công khai Quyết định số 598/QĐ-UBND ngày 26/08/2026 của UBND Xã Vĩnh Thực",
    code: "QĐ số 598/QĐ-UBND • Lập ngày: 31/08/2026",
    date: "31/08/2026",
    agency: "UBND Xã Vĩnh Thực – Trường TH&THCS Vĩnh Thực",
    description:
      "Công khai Quyết định số 598/QĐ-UBND về việc bổ sung dự toán chi NSNN năm 2026 thực hiện nhiệm vụ mua sắm, lắp đặt thiết bị điều hòa nhiệt độ cho các phòng học. Biên bản có dấu đỏ của Hiệu trưởng Khổng Duy Phong và đầy đủ 9 chữ ký của Hội đồng nhà trường, thời gian niêm yết 90 ngày (31/08/2026 - 30/11/2026).",
    fileUrl: "/documents/bien-ban-niem-yet-cong-khai-chi-nsnn-quy-3-nam-2026.pdf",
    badge: "BIÊN BẢN & QUYẾT ĐỊNH GỐC",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    pageCount: "02 trang có dấu mộc đỏ",
  },
  {
    id: "doc-mau-26-q3",
    title: "Bảng đối chiếu dự toán kinh phí ngân sách bằng hình thức rút dự toán Quý 3/2026",
    code: "Mẫu số 26 • Ký hiệu: 01a-SDKP/ĐVDT",
    date: "05/10/2026",
    agency: "Kho bạc Nhà nước Khu vực III - PGD số 17",
    description:
      "Tổng hợp dự toán và thực chi 9 tháng: Dự toán giao đầu năm 16.087.000.000 đ; Bổ sung trong Quý III là 2.911.654.000 đ; Tổng dự toán năm 23.056.487.608 đ; Thực chi Quý III là 5.203.111.466 đ; Lũy kế 9 tháng là 14.127.466.474 đ (đạt 61,27%); Dự toán còn lại chuyển Quý IV là 8.929.021.134 đ.",
    fileUrl: "/documents/bang-doi-chieu-du-toan-kinh-phi-kho-bac-mau-26-quy-3-2026.pdf",
    badge: "XÁC NHẬN CHỮ KÝ SỐ KHO BẠC",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    pageCount: "02 trang",
  },
  {
    id: "doc-mau-28-q3",
    title: "Bảng đối chiếu tình hình sử dụng kinh phí ngân sách chi tiết Quý 3/2026",
    code: "Mẫu số 28 • Ký hiệu: 02a-SDKP/ĐVDT",
    date: "05/10/2026",
    agency: "Kho bạc Nhà nước Khu vực III - PGD số 17",
    description:
      "Chi tiết toàn bộ mục chi thực tế Quý III và lũy kế 9 tháng: Lương ngạch bậc, phụ cấp đứng lớp, phụ cấp hải đảo, sửa chữa nâng cấp nhà cửa học đường, đường điện cấp thoát nước, mua sắm thiết bị chuyên dùng, cấp bù học phí, công tác phí đi lại bồi dưỡng chuyên môn hè.",
    fileUrl: "/documents/bang-doi-chieu-su-dung-kinh-phi-chi-tiet-kho-bac-mau-28-quy-3-2026.pdf",
    badge: "CHI TIẾT MỤC LỤC CHI",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    pageCount: "04 trang",
  },
  {
    id: "doc-mau-32-q3",
    title: "Bảng xác nhận số dư tài khoản tiền gửi tại Kho bạc Nhà nước tháng 8 năm 2026",
    code: "Mẫu số 32 • Ký hiệu: 06-ĐCSDTK/KBNN",
    date: "08/09/2026",
    agency: "Kho bạc Nhà nước Khu vực III - PGD số 17",
    description:
      "Xác nhận số dư tài khoản tiền gửi số 3716.4.1166598.00000 của Trường TH&THCS Vĩnh Thực tại Kho bạc Nhà nước đến thời điểm 31/08/2026 là 170.733.140 đồng (chênh lệch: 0 đồng, KBNN đã đóng dấu ký duyệt ngày 08/09/2026).",
    fileUrl: "/documents/bang-xac-nhan-so-du-tai-khoan-tien-gui-kho-bac-mau-32-thang-8-2026.pdf",
    badge: "XÁC NHẬN TIỀN GỬI",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    pageCount: "01 trang",
  },
];

export default function CongKhaiQuy3Content() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);

  // Keyboard navigation & body scroll lock for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDoc(null);
      }
    };

    if (selectedDoc) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDoc]);

  return (
    <main className="bg-slate-50 min-h-screen py-8 sm:py-12 lg:py-16">
      <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/#tin-tuc"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-700 transition-colors hover:text-sky-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Quay lại trang chủ</span>
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Đã xác nhận KBNN &amp; Niêm yết 90 ngày</span>
          </span>
        </div>

        {/* Main Article Container */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
          {/* Cover Header Banner */}
          <div className="relative bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-10 lg:p-12 text-white">
            <div className="relative z-10 space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>CÔNG KHAI TÀI CHÍNH • QUẢN LÝ NGÂN SÁCH NHÀ NƯỚC</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white uppercase">
                Công khai số liệu dự toán và tình hình thực chi ngân sách nhà nước Quý III năm 2026 của Trường TH&amp;THCS Vĩnh Thực
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-300 pt-2 border-t border-white/10">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Thời gian niêm yết: 31/08/2026 – 30/11/2026</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-sky-400" />
                  <span>Đơn vị: Trường TH&amp;THCS Vĩnh Thực (Mã ĐVQHNS: 1166598)</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Cơ quan quản lý: KBNN Khu vực III - PGD số 17</span>
                </span>
              </div>
            </div>

            {/* Subtle Watermark Decorative Background */}
            <div className="absolute right-0 top-0 bottom-0 w-80 opacity-10 pointer-events-none hidden md:block">
              <Image
                src="/brand/logo.jpeg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 space-y-10 text-slate-700 leading-relaxed font-normal">
            {/* Legal Basis Callout */}
            <div className="rounded-2xl bg-sky-50/70 border border-sky-200/80 p-5 sm:p-6 space-y-3">
              <h2 className="text-sm sm:text-base font-extrabold text-sky-950 uppercase flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-700 shrink-0" />
                <span>Căn cứ pháp lý thực hiện công khai</span>
              </h2>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside">
                <li>
                  Căn cứ <strong>Luật Ngân sách Nhà nước</strong>;
                </li>
                <li>
                  Căn cứ Nghị định số <strong>73/2026/NĐ-CP</strong> ngày 10/03/2026 của Chính phủ;
                </li>
                <li>
                  Căn cứ Thông tư số <strong>26/2026/TT-BTC</strong> ngày 25/03/2026 của Bộ Tài chính quy định chi tiết và hướng dẫn thi hành một số điều của Nghị định số 73/2026/NĐ-CP;
                </li>
                <li>
                  Căn cứ Thông tư số <strong>09/2024/TT-BGD&amp;ĐT</strong> ngày 03/06/2024 của Bộ Giáo dục và Đào tạo về quy định công khai trong hoạt động của các cơ sở giáo dục thuộc hệ thống giáo dục quốc dân;
                </li>
                <li>
                  Căn cứ Thông tư số <strong>61/2017/TT-BTC</strong> ngày 15/06/2017 và Thông tư số <strong>90/2018/TT-BTC</strong> ngày 28/09/2018 của Bộ Tài chính hướng dẫn thực hiện công khai ngân sách đối với đơn vị dự toán ngân sách;
                </li>
                <li>
                  Căn cứ Quyết định số <strong>598/QĐ-UBND</strong> ngày 26/08/2026 của UBND Xã Vĩnh Thực về việc bổ sung dự toán chi NSNN năm 2026 cho Trường TH&amp;THCS Vĩnh Thực kinh phí thực hiện nhiệm vụ <strong>mua sắm, lắp đặt thiết bị điều hòa nhiệt độ</strong>;
                </li>
                <li>
                  Căn cứ <strong>Biên bản niêm yết công khai</strong> lập ngày 31/08/2026 của Hội đồng công khai Trường TH&amp;THCS Vĩnh Thực;
                </li>
                <li>
                  Căn cứ các Bảng xác nhận số dư tài khoản tiền gửi (Mẫu số 32) và Bảng đối chiếu dự toán, sử dụng kinh phí ngân sách (Mẫu số 26, Mẫu số 28) đã được Kho bạc Nhà nước Khu vực III phê duyệt và xác nhận.
                </li>
              </ul>
            </div>

            {/* 4 Stat Cards Dashboard */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-sky-700" />
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight uppercase">
                  Tổng quan ngân sách Quý III và lũy kế 9 tháng năm 2026
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-5 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-500 mb-2">
                    <span>Tổng dự toán cả năm</span>
                    <DollarSign className="w-4 h-4 text-sky-700" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    23.056.487.608 <span className="text-xs font-semibold text-slate-500">đ</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Đầu năm: 16,087 tỷ • Bổ sung: 2,911 tỷ (Quý III)</p>
                </div>

                <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-bold uppercase text-sky-800 mb-2">
                    <span>Thực chi Quý III/2026</span>
                    <TrendingUp className="w-4 h-4 text-sky-700" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-sky-700 tracking-tight">
                    5.203.111.466 <span className="text-xs font-semibold text-sky-700">đ</span>
                  </div>
                  <p className="text-[11px] text-sky-800 font-semibold mt-1">Lũy kế 9 tháng: 14.127.466.474 đ (61,27%)</p>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-bold uppercase text-emerald-800 mb-2">
                    <span>Dự toán chuyển Quý IV</span>
                    <PieChart className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-700 tracking-tight">
                    8.929.021.134 <span className="text-xs font-semibold text-emerald-700">đ</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 font-semibold mt-1">Tỷ lệ còn lại: 38,73% dự toán</p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-bold uppercase text-amber-800 mb-2">
                    <span>Số dư tiền gửi tại KBNN</span>
                    <CreditCard className="w-4 h-4 text-amber-700" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-800 tracking-tight">
                    170.733.140 <span className="text-xs font-semibold text-amber-800">đ</span>
                  </div>
                  <p className="text-[11px] text-amber-800 font-medium mt-1">TK: 3716.4.1166598 (Mẫu 32 tháng 8/2026)</p>
                </div>
              </div>
            </div>

            {/* SECTION 4 OFFICIAL PDF DOCUMENTS (Interactive Cards) */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight uppercase flex items-center gap-2">
                    <FileText className="w-5 h-5 text-red-600" />
                    <span>Hồ sơ tài liệu đính kèm (Có dấu đỏ &amp; xác nhận KBNN)</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Phụ huynh, nhân dân và cán bộ giáo viên có thể đọc trực tiếp toàn văn hoặc tải file PDF gốc về máy:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {DOCUMENTS_QUY_3.map((doc) => (
                  <div
                    key={doc.id}
                    className="group rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5 hover:border-sky-300"
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white flex flex-col items-center justify-center shrink-0 shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
                        <FileText className="w-6 h-6" />
                        <span className="text-[8px] font-black tracking-wider uppercase mt-0.5">PDF</span>
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${doc.badgeColor}`}
                          >
                            {doc.badge}
                          </span>
                          <span className="text-xs font-semibold text-slate-400">
                            {doc.code} • {doc.pageCount}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                          {doc.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {doc.description}
                        </p>
                      </div>
                    </div>

                    <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2 md:pt-0">
                      <button
                        type="button"
                        onClick={() => setSelectedDoc(doc)}
                        className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-semibold text-xs tracking-wide shadow-sm transition-all cursor-pointer active:scale-95"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Xem văn bản trực tiếp</span>
                      </button>

                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="min-h-[44px] inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs tracking-wide transition-all shadow-2xs"
                        title="Tải văn bản PDF gốc về máy"
                      >
                        <Download className="w-4 h-4 text-sky-700" />
                        <span>Tải PDF gốc</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DETAILED FINANCIAL TABLES */}
            <div className="space-y-6 pt-4 border-t border-slate-100">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight uppercase flex items-center gap-2">
                <Building className="w-5 h-5 text-sky-700" />
                <span>Bảng phân bổ chi tiết kinh phí theo nguồn Quý III/2026 (Mẫu 26 KBNN)</span>
              </h2>

              {/* Table 1: Theo nguồn kinh phí */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Mã nguồn</th>
                      <th className="py-3 px-4">Nội dung nguồn kinh phí</th>
                      <th className="py-3 px-4 text-right">Dự toán cả năm (Đ)</th>
                      <th className="py-3 px-4 text-right">Bổ sung Quý III (Đ)</th>
                      <th className="py-3 px-4 text-right">Thực chi Quý III (Đ)</th>
                      <th className="py-3 px-4 text-right">Lũy kế 9 tháng (Đ)</th>
                      <th className="py-3 px-4 text-right">Dự toán còn lại (Đ)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-3 px-4 font-bold text-sky-700">Nguồn 12</td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Kinh phí theo vị trí việc làm hợp đồng, thuê khoán, sửa chữa CSVC &amp; học sinh
                      </td>
                      <td className="py-3 px-4 text-right font-bold">7.661.207.608</td>
                      <td className="py-3 px-4 text-right text-sky-700">1.906.374.000</td>
                      <td className="py-3 px-4 text-right font-bold text-sky-700">1.675.026.354</td>
                      <td className="py-3 px-4 text-right font-semibold text-slate-800">4.018.740.859</td>
                      <td className="py-3 px-4 text-right text-emerald-700">3.642.466.749</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-3 px-4 font-bold text-sky-700">Nguồn 13</td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Chi lương ngạch bậc, phụ cấp nghề giáo hải đảo &amp; kinh phí hoạt động chuyên môn
                      </td>
                      <td className="py-3 px-4 text-right font-bold">14.840.280.000</td>
                      <td className="py-3 px-4 text-right text-sky-700">997.280.000</td>
                      <td className="py-3 px-4 text-right font-bold text-sky-700">3.528.085.112</td>
                      <td className="py-3 px-4 text-right font-semibold text-slate-800">10.097.025.615</td>
                      <td className="py-3 px-4 text-right text-emerald-700">4.743.254.385</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-3 px-4 font-bold text-sky-700">Nguồn 18</td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Kinh phí nhiệm vụ đặc thù, khen thưởng giáo viên và học sinh đạt thành tích
                      </td>
                      <td className="py-3 px-4 text-right font-bold">555.000.000</td>
                      <td className="py-3 px-4 text-right text-sky-700">8.000.000</td>
                      <td className="py-3 px-4 text-right text-slate-400">0</td>
                      <td className="py-3 px-4 text-right font-semibold text-slate-800">11.700.000</td>
                      <td className="py-3 px-4 text-right text-emerald-700">543.300.000</td>
                    </tr>
                    <tr className="bg-sky-50/80 font-black text-slate-900 border-t-2 border-slate-200">
                      <td colSpan={2} className="py-3.5 px-4 uppercase text-sky-900">
                        Tổng cộng toàn trường
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-900 font-extrabold">23.056.487.608</td>
                      <td className="py-3.5 px-4 text-right text-sky-800 font-extrabold">2.911.654.000</td>
                      <td className="py-3.5 px-4 text-right text-sky-800 font-extrabold text-sm sm:text-base">
                        5.203.111.466
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-900 font-extrabold">
                        14.127.466.474
                      </td>
                      <td className="py-3.5 px-4 text-right text-emerald-800 font-extrabold">8.929.021.134</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 2: Chi tiết các mục chi phục vụ con người & vận hành nhà trường */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 space-y-4 shadow-2xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 uppercase flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-700" />
                  <span>Chi tiết các nội dung chi trọng tâm theo Mẫu 28 (Kho bạc phê duyệt ngày 05/10/2026):</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {/* Cột 1: Chế độ con người Nguồn 13 */}
                  <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 space-y-2">
                    <span className="font-bold text-sky-900 block text-xs uppercase border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-700" />
                      1. Chế độ chính sách cán bộ, giáo viên viên chức (Nguồn 13)
                    </span>
                    <div className="flex justify-between py-1">
                      <span>Lương theo ngạch bậc (Mã 6001):</span>
                      <strong className="text-slate-900">1.289.657.816 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Phụ cấp ưu đãi đứng lớp (Mã 6112):</span>
                      <strong className="text-slate-900">961.341.375 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Phụ cấp khác theo quy định (Mã 6149):</span>
                      <strong className="text-slate-900">393.557.340 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Phụ cấp thâm niên nghề &amp; vượt khung (Mã 6115):</span>
                      <strong className="text-slate-900">179.811.012 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Phụ cấp khu vực hải đảo (Mã 6102):</span>
                      <strong className="text-slate-900">177.600.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Phụ cấp chức vụ lãnh đạo (Mã 6101):</span>
                      <strong className="text-slate-900">22.200.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Phụ cấp trách nhiệm &amp; độc hại (Mã 6113, 6107):</span>
                      <strong className="text-slate-900">5.180.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Trích nộp BHXH, BHYT, BHTN đơn vị nộp:</span>
                      <strong className="text-slate-900">320.708.796 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Công tác phí, vé tàu đò bồi dưỡng hè (Mã 6701, 6702, 6703):</span>
                      <strong className="text-slate-900">68.530.000 đ</strong>
                    </div>
                  </div>

                  {/* Cột 2: Sửa chữa CSVC, Hợp đồng lao động & Chính sách học sinh */}
                  <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 space-y-2">
                    <span className="font-bold text-emerald-900 block text-xs uppercase border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-emerald-700" />
                      2. Sửa chữa cơ sở vật chất, vận hành &amp; Nguồn 12
                    </span>
                    <div className="flex justify-between py-1">
                      <span>Cải tạo, sửa chữa nhà cửa phòng học (Mã 6907):</span>
                      <strong className="text-slate-900">287.050.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Đường điện, cấp thoát nước (Mã 6921):</span>
                      <strong className="text-slate-900">170.050.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Cấp bù học phí theo chế độ (Mã 7766):</span>
                      <strong className="text-slate-900">230.115.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Các khoản hỗ trợ chính sách học sinh (Mã 6199):</span>
                      <strong className="text-slate-900">225.281.250 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Tiền công &amp; thuê khoán vị trí việc làm (Mã 6051, 6757):</span>
                      <strong className="text-slate-900">392.085.630 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Bảo hiểm xã hội lao động hợp đồng:</span>
                      <strong className="text-slate-900">25.194.474 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Mua sắm thiết bị chuyên dùng &amp; văn phòng (Mã 6954, 6552):</span>
                      <strong className="text-slate-900">45.600.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Tiền điện, nước, cước viễn thông Internet:</span>
                      <strong className="text-slate-900">25.253.373 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Mua sắm vật tư khai giảng năm học mới:</span>
                      <strong className="text-slate-900">15.746.000 đ</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Disclosure Notice & Contact Directory */}
            <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/50 p-6 space-y-4">
              <h2 className="text-sm sm:text-base font-extrabold text-amber-950 uppercase flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-700 shrink-0" />
                <span>Tiếp nhận thông tin phản hồi &amp; đóng góp ý kiến</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Toàn bộ hồ sơ số liệu dự toán và tình hình thực chi ngân sách Quý III năm 2026 đã được Hội đồng nhà trường niêm yết công khai tại Bảng thông báo cơ quan và đăng tải trực tuyến trên Cổng thông tin điện tử của nhà trường (từ 31/08/2026 đến hết ngày 30/11/2026). Các tập thể, cán bộ giáo viên, nhân viên và phụ huynh học sinh có ý kiến đóng góp xin liên hệ trực tiếp:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="rounded-xl bg-white p-3.5 border border-amber-200/80 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900">Thầy Khổng Duy Phong</div>
                  <div className="text-[11px] text-slate-500">Hiệu trưởng điểm trường chính Thôn Đầu Đông (Khối THCS)</div>
                  <div className="text-xs font-semibold text-sky-700 mt-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>0903.280.488</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-3.5 border border-amber-200/80 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900">Thầy Đinh Công Thép</div>
                  <div className="text-[11px] text-slate-500">Phó hiệu trưởng Phân hiệu Vĩnh Trung</div>
                  <div className="text-xs font-semibold text-sky-700 mt-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>0374.127.332</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-3.5 border border-amber-200/80 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900">Thầy Nguyễn Văn Thỏa</div>
                  <div className="text-[11px] text-slate-500">Phó hiệu trưởng điểm trường 1 Thôn Đầu Tán (Khối TH)</div>
                  <div className="text-xs font-semibold text-sky-700 mt-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>0964.033.965</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-3.5 border border-amber-200/80 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900">Cô Nguyễn Thị Huế</div>
                  <div className="text-[11px] text-slate-500">Phó Bí thư Đảng bộ, Phó Hiệu trưởng, Chủ nhiệm UBKT Đảng bộ</div>
                  <div className="text-xs font-semibold text-sky-700 mt-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>0903.280.488</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* PDF Modal Viewer */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedDoc(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedDoc.title}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900 text-white border-b border-slate-800 gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase bg-red-500/30 text-red-300 px-2 py-0.5 rounded">
                      {selectedDoc.badge}
                    </span>
                    <span className="text-xs text-slate-400 hidden sm:inline">
                      {selectedDoc.code}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate mt-0.5">
                    {selectedDoc.title}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={selectedDoc.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-700 hover:bg-sky-600 text-white text-xs font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mở tab mới / Tải xuống</span>
                  <span className="sm:hidden">Tải về</span>
                </a>

                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Đóng cửa sổ"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF iframe */}
            <div className="flex-1 w-full bg-slate-100 p-2 sm:p-3 overflow-hidden">
              <iframe
                src={`${selectedDoc.fileUrl}#toolbar=1`}
                className="w-full h-[72vh] sm:h-[80vh] rounded-xl border border-slate-200 shadow-inner bg-white"
                title={selectedDoc.title}
              />
            </div>

            {/* Modal Footer Note */}
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-500">
              Văn bản gốc lưu trữ tại Trường TH&amp;THCS Vĩnh Thực có xác nhận của Kho bạc Nhà nước. Người xem có thể phóng to, thu nhỏ hoặc tải về để lưu trữ.
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
