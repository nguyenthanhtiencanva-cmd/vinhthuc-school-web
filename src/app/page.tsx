import Hero from "@/components/home/Hero";
import QuickCards from "@/components/home/QuickCards";
import NewsAndEvents from "@/components/home/NewsAndEvents";
import AboutSection from "@/components/home/AboutSection";
import DepartmentsSection from "@/components/home/DepartmentsSection";
import FeaturedActivities from "@/components/home/FeaturedActivities";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. 4 Quick Access Cards floating on bottom of Hero */}
      <QuickCards />

      {/* 3. Tin tức nổi bật & Sự kiện sắp diễn ra */}
      <NewsAndEvents />

      {/* 4. Giới thiệu / Ngôi trường nơi biển đảo */}
      <AboutSection />

      {/* 5. 4 Tổ chuyên môn */}
      <DepartmentsSection />

      {/* 6. Hoạt động nổi bật Carousel / Grid */}
      <FeaturedActivities />
    </div>
  );
}
