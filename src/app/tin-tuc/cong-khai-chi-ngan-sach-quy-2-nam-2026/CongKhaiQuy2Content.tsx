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
  Award,
  Layers,
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

const DOCUMENTS_QUY_2: DocumentItem[] = [
  {
    id: "doc-bb-niem-yet-q2",
    title: "Biên bản niêm yết công khai & Biên bản kết thúc niêm yết chi NSNN Quý II năm 2026",
    code: "Lập ngày: 06/07/2026 & 06/10/2026",
    date: "06/07/2026",
    agency: "Hội đồng công khai Trường TH&THCS Vĩnh Thực",
    description:
      "Gồm toàn văn Biên bản mở niêm yết công khai ngày 06/07/2026 và Biên bản kết thúc niêm yết ngày 06/10/2026 có dấu đỏ của Hiệu trưởng Khổng Duy Phong và chữ ký xác nhận của đầy đủ 9 thành viên Hội đồng nhà trường. Thời hạn niêm yết 90 ngày liên tục, tài liệu bảo quản nguyên vẹn, không có ý kiến khiếu nại phát sinh.",
    fileUrl: "/documents/bien-ban-niem-yet-cong-khai-chi-nsnn-quy-2-nam-2026.pdf",
    badge: "BIÊN BẢN CÔNG KHAI GỐC",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    pageCount: "04 trang có dấu mộc đỏ",
  },
  {
    id: "doc-mau-26",
    title: "Bảng đối chiếu dự toán kinh phí ngân sách tại Kho bạc Nhà nước Quý II/2026",
    code: "Mẫu số 26 • Ký hiệu: 01a-SDKP/ĐVDT",
    date: "03/07/2026",
    agency: "Kho bạc Nhà nước Khu vực III - PGD số 17",
    description:
      "Đối chiếu tổng hợp kinh phí ngân sách: Dự toán giao đầu năm 16.087.000.000 đ; Dự toán được sử dụng đến hết Quý II là 20.210.833.608 đ; Thực chi Quý II là 4.759.229.537 đ; Lũy kế 6 tháng đầu năm là 8.924.355.008 đ; Dự toán còn lại chuyển 6 tháng cuối năm là 11.286.478.600 đ.",
    fileUrl: "/documents/bang-doi-chieu-du-toan-kinh-phi-kho-bac-mau-26-quy-2-2026.pdf",
    badge: "XÁC NHẬN CHỮ KÝ SỐ KHO BẠC",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    pageCount: "02 trang",
  },
  {
    id: "doc-mau-28",
    title: "Bảng đối chiếu tình hình sử dụng kinh phí ngân sách chi tiết Quý II/2026",
    code: "Mẫu số 28 • Ký hiệu: 02a-SDKP/ĐVDT",
    date: "03/07/2026",
    agency: "Kho bạc Nhà nước Khu vực III - PGD số 17",
    description:
      "Bảng kê chi tiết từng nội dung chi thực tế theo mục lục NSNN: Lương ngạch bậc, phụ cấp ưu đãi nghề, phụ cấp thâm niên, phụ cấp khu vực hải đảo, làm thêm giờ bồi dưỡng học sinh, đóng bảo hiểm, tiền điện, nước, internet, công cụ giảng dạy, công tác phí tàu xe ra đảo, sửa chữa cơ sở vật chất.",
    fileUrl: "/documents/bang-doi-chieu-su-dung-kinh-phi-chi-tiet-kho-bac-mau-28-quy-2-2026.pdf",
    badge: "CHI TIẾT MỤC LỤC CHI",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    pageCount: "03 trang",
  },
  {
    id: "doc-mau-19-q2",
    title: "Bảng xác nhận số dư tài khoản tiền gửi tại Kho bạc Nhà nước tháng 6 năm 2026",
    code: "Mẫu số 19 • Ký hiệu: 06-ĐCSDTK/KBNN",
    date: "03/07/2026",
    agency: "Kho bạc Nhà nước Khu vực III - PGD số 17",
    description:
      "Xác nhận số dư tài khoản tiền gửi số 3716.4.1166598 của Trường TH&THCS Vĩnh Thực tại Kho bạc Nhà nước đến thời điểm 30/06/2026 là 18.366.094 đồng (chênh lệch: 0 đồng, KBNN đã đóng dấu ký duyệt ngày 03/07/2026).",
    fileUrl: "/documents/bang-xac-nhan-so-du-tai-khoan-tien-gui-kho-bac-mau-19-thang-6-2026.pdf",
    badge: "XÁC NHẬN TIỀN GỬI",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    pageCount: "01 trang",
  },
];

export default function CongKhaiQuy2Content() {
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
                Công khai số liệu dự toán và tình hình thực chi ngân sách nhà nước Quý II năm 2026 của Trường TH&amp;THCS Vĩnh Thực
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-300 pt-2 border-t border-white/10">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Ngày niêm yết: 06/07/2026 (Kết thúc: 06/10/2026)</span>
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
                  Căn cứ <strong>Luật Ngân sách Nhà nước</strong> số 83/2015/QH13 ngày 25/06/2015;
                </li>
                <li>
                  Căn cứ Nghị định số <strong>163/2016/NĐ-CP</strong> ngày 21/12/2016 của Chính phủ quy định chi tiết thi hành một số điều của Luật Ngân sách nhà nước;
                </li>
                <li>
                  Căn cứ Thông tư số <strong>61/2017/TT-BTC</strong> ngày 15/06/2017 và Thông tư số <strong>90/2018/TT-BTC</strong> ngày 28/09/2018 của Bộ Tài chính hướng dẫn thực hiện công khai ngân sách đối với đơn vị dự toán ngân sách;
                </li>
                <li>
                  Căn cứ Quyết định giao dự toán và bổ sung dự toán thu – chi ngân sách nhà nước năm 2026 của UBND thành phố Móng Cái;
                </li>
                <li>
                  Căn cứ <strong>Biên bản niêm yết công khai chi NSNN Quý II/2026</strong> lập ngày 06/07/2026 và <strong>Biên bản kết thúc niêm yết công khai</strong> lập ngày 06/10/2026 của Hội đồng công khai Trường TH&amp;THCS Vĩnh Thực;
                </li>
                <li>
                  Căn cứ các Bảng xác nhận số dư tài khoản tiền gửi (Mẫu số 19) và Bảng đối chiếu dự toán, tình hình sử dụng kinh phí ngân sách (Mẫu số 26, Mẫu số 28) đã được Kho bạc Nhà nước Khu vực III phê duyệt và xác nhận.
                </li>
              </ul>
            </div>

            {/* 4 Stat Cards Dashboard */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-sky-700" />
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight uppercase">
                  Tổng quan ngân sách Quý II và lũy kế 6 tháng đầu năm 2026
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-5 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-500 mb-2">
                    <span>Tổng dự toán cả năm</span>
                    <DollarSign className="w-4 h-4 text-sky-700" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    20.210.833.608 <span className="text-xs font-semibold text-slate-500">đ</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Đầu năm: 16,087 tỷ • Bổ sung: 4,123 tỷ</p>
                </div>

                <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-bold uppercase text-sky-800 mb-2">
                    <span>Thực chi Quý II/2026</span>
                    <TrendingUp className="w-4 h-4 text-sky-700" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-sky-700 tracking-tight">
                    4.759.229.537 <span className="text-xs font-semibold text-sky-700">đ</span>
                  </div>
                  <p className="text-[11px] text-sky-800 font-semibold mt-1">Lũy kế 6 tháng: 8.924.355.008 đ (44,16%)</p>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-bold uppercase text-emerald-800 mb-2">
                    <span>Dự toán 6 tháng cuối năm</span>
                    <PieChart className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-700 tracking-tight">
                    11.286.478.600 <span className="text-xs font-semibold text-emerald-700">đ</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 font-semibold mt-1">Tỷ lệ còn lại: 55,84% dự toán</p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 shadow-2xs">
                  <div className="flex items-center justify-between text-xs font-bold uppercase text-amber-800 mb-2">
                    <span>Số dư tiền gửi tại KBNN</span>
                    <CreditCard className="w-4 h-4 text-amber-700" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-800 tracking-tight">
                    18.366.094 <span className="text-xs font-semibold text-amber-800">đ</span>
                  </div>
                  <p className="text-[11px] text-amber-800 font-medium mt-1">TK: 3716.4.1166598 (Khớp đúng 100%)</p>
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
                {DOCUMENTS_QUY_2.map((doc) => (
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
                <span>Bảng phân bổ chi tiết kinh phí theo nguồn Quý II/2026 (Mẫu 26 KBNN)</span>
              </h2>

              {/* Table 1: Theo nguồn kinh phí */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Mã nguồn</th>
                      <th className="py-3 px-4">Nội dung nguồn kinh phí</th>
                      <th className="py-3 px-4 text-right">Dự toán cả năm (Đ)</th>
                      <th className="py-3 px-4 text-right">Thực chi Quý II (Đ)</th>
                      <th className="py-3 px-4 text-right">Lũy kế 6 tháng (Đ)</th>
                      <th className="py-3 px-4 text-right">Dự toán còn lại (Đ)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-3 px-4 font-bold text-sky-700">Nguồn 12</td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Kinh phí theo vị trí việc làm hợp đồng, thuê khoán và hỗ trợ học tập
                      </td>
                      <td className="py-3 px-4 text-right font-bold">5.754.833.608</td>
                      <td className="py-3 px-4 text-right font-bold text-sky-700">1.107.398.603</td>
                      <td className="py-3 px-4 text-right font-semibold text-slate-800">2.343.714.505</td>
                      <td className="py-3 px-4 text-right text-emerald-700">3.411.119.103</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-3 px-4 font-bold text-sky-700">Nguồn 13</td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Chi lương ngạch bậc, phụ cấp nghề giáo hải đảo &amp; hoạt động giảng dạy chuyên môn
                      </td>
                      <td className="py-3 px-4 text-right font-bold">13.909.000.000</td>
                      <td className="py-3 px-4 text-right font-bold text-sky-700">3.640.130.934</td>
                      <td className="py-3 px-4 text-right font-semibold text-slate-800">6.568.940.503</td>
                      <td className="py-3 px-4 text-right text-emerald-700">7.340.059.497</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-3 px-4 font-bold text-sky-700">Nguồn 18</td>
                      <td className="py-3 px-4 font-semibold text-slate-900">
                        Kinh phí nhiệm vụ đặc thù, khen thưởng giáo viên và học sinh đạt thành tích
                      </td>
                      <td className="py-3 px-4 text-right font-bold">547.000.000</td>
                      <td className="py-3 px-4 text-right font-bold text-sky-700">11.700.000</td>
                      <td className="py-3 px-4 text-right font-semibold text-slate-800">11.700.000</td>
                      <td className="py-3 px-4 text-right text-emerald-700">535.300.000</td>
                    </tr>
                    <tr className="bg-sky-50/80 font-black text-slate-900 border-t-2 border-slate-200">
                      <td colSpan={2} className="py-3.5 px-4 uppercase text-sky-900">
                        Tổng cộng toàn trường
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-900 font-extrabold">20.210.833.608</td>
                      <td className="py-3.5 px-4 text-right text-sky-800 font-extrabold text-sm sm:text-base">
                        4.759.229.537
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-900 font-extrabold">
                        8.924.355.008
                      </td>
                      <td className="py-3.5 px-4 text-right text-emerald-800 font-extrabold">11.286.478.600</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 2: Chi tiết các mục chi phục vụ con người & vận hành nhà trường */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 space-y-4 shadow-2xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 uppercase flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-700" />
                  <span>Chi tiết các nội dung chi trọng tâm theo Mẫu 28 (Kho bạc phê duyệt):</span>
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
                      <strong className="text-slate-900">1.215.000.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Phụ cấp ưu đãi đứng lớp (Mã 6112):</span>
                      <strong className="text-slate-900">512.210.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Làm đêm, thêm giờ, bồi dưỡng ôn thi (Mã 6051):</span>
                      <strong className="text-slate-900">418.390.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Phụ cấp khác theo quy định (Mã 6149):</span>
                      <strong className="text-slate-900">371.050.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Phụ cấp khu vực hải đảo (Mã 6102):</span>
                      <strong className="text-slate-900">169.650.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Phụ cấp thâm niên nghề &amp; vượt khung (Mã 6115):</span>
                      <strong className="text-slate-900">162.890.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Phụ cấp chức vụ lãnh đạo (Mã 6101):</span>
                      <strong className="text-slate-900">21.760.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Phụ cấp trách nhiệm &amp; độc hại (Mã 6107, 6108):</span>
                      <strong className="text-slate-900">4.910.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Trích nộp BHXH, BHYT, BHTN, KPCĐ đơn vị nộp:</span>
                      <strong className="text-slate-900">300.940.000 đ</strong>
                    </div>
                  </div>

                  {/* Cột 2: Giảng dạy, Vận hành trường & Hợp đồng lao động */}
                  <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 space-y-2">
                    <span className="font-bold text-emerald-900 block text-xs uppercase border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      2. Hoạt động giảng dạy, vận hành cơ sở &amp; Nguồn hợp đồng
                    </span>
                    <div className="flex justify-between py-1">
                      <span>Tiền điện trường học &amp; phòng máy vi tính:</span>
                      <strong className="text-slate-900">34.700.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Nước sinh hoạt học đường:</span>
                      <strong className="text-slate-900">3.030.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Mạng Internet cáp quang chuyển đổi số:</span>
                      <strong className="text-slate-900">25.190.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Văn phòng phẩm, sách vở, đề thi kiểm tra:</span>
                      <strong className="text-slate-900">67.420.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Công tác phí, vé tàu đò ra vào đất liền:</span>
                      <strong className="text-slate-900">41.360.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Mua sắm vật tư &amp; sửa chữa nhỏ điện nước:</span>
                      <strong className="text-slate-900">43.010.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Tiền công &amp; phụ cấp vị trí việc làm HĐ (Nguồn 12):</span>
                      <strong className="text-slate-900">315.710.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Hỗ trợ chính sách học sinh &amp; thuê khoán (Nguồn 12):</span>
                      <strong className="text-slate-900">147.000.000 đ</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="flex items-center gap-1 text-amber-900 font-semibold">
                        <Award className="w-3.5 h-3.5 text-amber-600" />
                        Khen thưởng đột xuất GV &amp; HS (Nguồn 18):
                      </span>
                      <strong className="text-amber-800">11.700.000 đ</strong>
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
                Toàn bộ hồ sơ số liệu dự toán và thực chi ngân sách Quý II năm 2026 đã được Hội đồng công khai Trường TH&amp;THCS Vĩnh Thực niêm yết công khai tại Bảng thông báo cơ quan và đăng tải trực tuyến trên Cổng thông tin điện tử của nhà trường (từ 06/07/2026 đến 05/10/2026, kết thúc niêm yết ngày 06/10/2026). Các tập thể, cán bộ giáo viên, nhân viên và phụ huynh học sinh có ý kiến đóng góp xin liên hệ trực tiếp:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="rounded-xl bg-white p-3.5 border border-amber-200/80 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900">Thầy Khổng Duy Phong</div>
                  <div className="text-[11px] text-slate-500">Bí thư Đảng ủy, Hiệu trưởng nhà trường (Chủ tọa Hội đồng)</div>
                  <div className="text-xs font-semibold text-sky-700 mt-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>0903.280.488</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-3.5 border border-amber-200/80 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900">Thầy Đinh Công Thép</div>
                  <div className="text-[11px] text-slate-500">Phó Chủ nhiệm UBKT Đảng ủy, Phó Hiệu trưởng (Điểm trường Vĩnh Thực 2)</div>
                  <div className="text-xs font-semibold text-sky-700 mt-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>0374.127.332</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-3.5 border border-amber-200/80 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900">Thầy Nguyễn Văn Thỏa</div>
                  <div className="text-[11px] text-slate-500">Chủ tịch Công đoàn, Phó Hiệu trưởng, Trưởng ban TTND</div>
                  <div className="text-xs font-semibold text-sky-700 mt-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>0964.033.965</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-3.5 border border-amber-200/80 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900">Cô Nguyễn Thị Huế</div>
                  <div className="text-[11px] text-slate-500">Phó Bí thư Đảng ủy, Phó Hiệu trưởng (Điểm trường Vĩnh Trung 2)</div>
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
