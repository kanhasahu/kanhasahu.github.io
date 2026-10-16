export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  date: string;
  description?: string;
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  role: string;
  techStack: string[];
  bullets: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  date: string;
  percentage?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface ResumeData {
  name: {
    first: string;
    last: string;
  };
  headline: string;
  address: string;
  phone: string;
  email: string;
  avatarUrl: string;
  bio: string;
  socials: {
    linkedin: string;
    github: string;
    email: string;
  };
  languages: LanguageItem[];
  linkedinHighlights: {
    endorsedSkills: string[];
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  skillCategories: SkillCategory[];
  coreCompetencies: string[];
  workflow: string[];
}
