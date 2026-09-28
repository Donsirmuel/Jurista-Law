export type PageRoute =
  | { type: 'home' }
  | { type: 'our-firm' }
  | { type: 'practice-areas' }
  | { type: 'practice-detail'; slug: PracticeSlug }
  | { type: 'attorneys'; filter?: string }
  | { type: 'attorney-detail'; id: string }
  | { type: 'case-studies'; filter?: string }
  | { type: 'case-study-detail'; id: string }
  | { type: 'blog'; category?: string }
  | { type: 'blog-detail'; slug: string }
  | { type: 'contact' };

export type PracticeSlug =
  | 'corporate-law'
  | 'immigration-law'
  | 'real-estate-law'
  | 'criminal-law'
  | 'medical-law'
  | 'family-law';

export interface PracticeArea {
  id: PracticeSlug;
  name: string;
  shortDesc: string;
  tagline: string;
  heroCopy: string;
  overview: string[];
  capabilities: string[];
  approachSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  leadAttorneyId: string;
  feeStructure: string;
  relatedCaseStudyIds: string[];
  iconType: 'corporate' | 'immigration' | 'real-estate' | 'criminal' | 'medical' | 'family';
}

export interface Attorney {
  id: string;
  name: string;
  role: string;
  shortSpecialty: string;
  portraitStyle: 'founder' | 'associate-priya' | 'associate-daniel' | 'partner-elena' | 'associate-marcus' | 'associate-sophia';
  credentials: string[];
  bio: string[];
  philosophyQuote: string;
  practices: PracticeSlug[];
  email: string;
  phone: string;
  barAdmissions: string[];
  education: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  practiceSlug: PracticeSlug;
  outcomeSummary: string;
  summaryStats: {
    timeline: string;
    outcome: string;
    practice: string;
  };
  clientContext: string;
  situation: string[];
  approach: string[];
  outcome: string[];
  clientQuote?: {
    quote: string;
    author: string;
    roleOrTitle: string;
  };
  leadAttorneyId: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  practiceSlug: PracticeSlug;
  authorId: string;
  isFeatured?: boolean;
  content: {
    heading?: string;
    paragraphs: string[];
  }[];
  keyTakeaways: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface FirmValue {
  title: string;
  description: string;
  icon: 'scale' | 'shield' | 'check' | 'users';
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
