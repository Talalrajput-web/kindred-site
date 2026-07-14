export interface ProjectUpdate {
  id: string;
  date: string;
  title: string;
  content: string;
  author: string;
  image?: string;
}

export interface ProjectComment {
  id: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  date: string;
  amount?: number;
}

export interface TransparencyReportBreakdown {
  item: string;
  percentage: number;
  amount: number;
}

export interface TransparencyDocument {
  name: string;
  url: string;
  size: string;
}

export interface TransparencyReport {
  verified: boolean;
  breakdown: TransparencyReportBreakdown[];
  documents: TransparencyDocument[];
}

export interface Project {
  id: string;
  title: string;
  organization: string;
  orgId: string;
  description: string;
  longStory: string;
  category: string;
  location: string;
  image: string;
  gallery: string[];
  raised: number;
  goal: number;
  donorsCount: number;
  daysLeft: number;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  updates: ProjectUpdate[];
  comments: ProjectComment[];
  transparencyReport: TransparencyReport;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  verificationLevel: 'Bronze' | 'Silver' | 'Gold';
  impactLives: number;
  totalDonated: number;
  recurringDonations: number;
}

export interface OrgStat {
  label: string;
  value: string;
}

export interface Organization {
  id: string;
  name: string;
  logo: string;
  bannerImage: string;
  rating: string;
  verified: boolean;
  description: string;
  mission: string;
  followers: number;
  impactStats: OrgStat[];
  verifiedCredentials: string[];
}

export interface Contribution {
  id: string;
  projectTitle: string;
  projectId: string;
  amount: number;
  date: string;
  status: 'Completed' | 'Processing';
  receiptUrl: string;
}
