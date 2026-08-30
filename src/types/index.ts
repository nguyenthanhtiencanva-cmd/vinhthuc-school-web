export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  summary?: string;
  image: string;
  slug: string;
  featured?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  day: string;
  month: string;
  time: string;
  location: string;
  slug: string;
}

export interface QuickCardItem {
  id: string;
  title: string;
  description: string;
  iconName: "megaphone" | "calendar" | "file-text" | "image";
  bgColor: string;
  iconColor: string;
  arrowColor: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  iconName: "award" | "users" | "graduation-cap" | "trophy";
}

export interface DepartmentItem {
  id: string;
  name: string;
  level: string;
  subjects: string;
  description: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  image: string;
  category: string;
}
