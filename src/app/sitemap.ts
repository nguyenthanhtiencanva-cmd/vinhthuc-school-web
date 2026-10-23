import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ththcsvinhthuc.edu.vn";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tin-tuc/tiet-hoc-stem-khoa-hoc-tu-nhien-7-mo-hinh-nha-cach-am`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tin-tuc/cong-khai-chi-ngan-sach-quy-3-nam-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tin-tuc/cong-khai-chi-ngan-sach-quy-2-nam-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tin-tuc/cong-khai-quyet-toan-thu-chi-ngan-sach-quy-1-nam-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tin-tuc/tong-ket-hoat-dong-quan-ly-giao-duc-thanh-thieu-nhi-he-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tin-tuc/tong-ket-nam-hoc-2025-2026-nhiem-vu-nam-hoc-moi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
