export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "youtube" | "mail" | "external";
}

export interface EducationEntry {
  degree: string;
  institution: string;
  start: string;
  end: string;
  status: "In progress" | "Completed";
  focus: string;
}

export interface ExperienceEntry {
  slug: string;
  role: string;
  org: string;
  location: string;
  start: string;
  end: string | "Present";
  bullets: string[];
  tech?: string[];
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0-100
  years: number;
  projects?: string[]; // project slugs
  related?: string[];
}

export interface SkillCategory {
  category: string;
  blurb: string;
  items: SkillItem[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  methods: string[];
  tech: string[];
  metrics?: ProjectMetric[];
  lessons?: string;
  future?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  category: "Data Science" | "AI / ML" | "Finance" | "Analytics & BI" | "Security" | "Leadership & Business";
  honors?: boolean;
  featured?: boolean;
  issued?: string;
  skills?: string[];
}

export interface ResearchInterest {
  title: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  draft?: boolean;
}
