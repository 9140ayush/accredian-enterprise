// ─── Stats Data ─────────────────────────────────────────────────────────────────

export interface Stat {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export const statsData: Stat[] = [
  { id: "clients", value: "200+", numericValue: 200, suffix: "+", label: "Enterprise Clients" },
  { id: "learners", value: "50K+", numericValue: 50, suffix: "K+", label: "Learners Upskilled" },
  { id: "satisfaction", value: "98%", numericValue: 98, suffix: "%", label: "Satisfaction Rate" },
  { id: "programs", value: "500+", numericValue: 500, suffix: "+", label: "Curated Programs" },
  { id: "completion", value: "94%", numericValue: 94, suffix: "%", label: "Completion Rate" },
  { id: "partners", value: "50+", numericValue: 50, suffix: "+", label: "University Partners" },
];

// ─── Features Data ────────────────────────────────────────────────────────────────

export type FeatureCategory = "All" | "Learning" | "Analytics" | "Integration";

export interface Feature {
  id: string;
  emoji: string;
  title: string;
  description: string;
  category: Exclude<FeatureCategory, "All">;
  isPopular?: boolean;
}

export const featuresData: Feature[] = [
  {
    id: "curriculum",
    emoji: "🎓",
    title: "World-Class Curriculum",
    description: "Programs co-designed with IITs, IIMs, and global institutions to deliver industry-relevant, future-proof skills.",
    category: "Learning",
    isPopular: true,
  },
  {
    id: "dashboard",
    emoji: "📊",
    title: "Enterprise L&D Dashboard",
    description: "Real-time analytics on learner progress, completion rates, engagement scores, and ROI across every team.",
    category: "Analytics",
  },
  {
    id: "mentors",
    emoji: "👨‍🏫",
    title: "Expert Mentor Network",
    description: "1:1 live sessions with 500+ industry mentors and IIT/IIM faculty — all verified domain experts.",
    category: "Learning",
  },
  {
    id: "cohorts",
    emoji: "👥",
    title: "Live Cohort Learning",
    description: "Structured cohorts drive accountability and collaboration with 94% completion rates across all programs.",
    category: "Learning",
    isPopular: true,
  },
  {
    id: "paths",
    emoji: "🗺️",
    title: "Custom Learning Paths",
    description: "Tailor programs to your organization's domains, roles, and strategic goals from a library of 500+ courses.",
    category: "Learning",
  },
  {
    id: "certificates",
    emoji: "🏆",
    title: "Accredited Certificates",
    description: "Globally recognized credentials from IITs, IIMs, and partner universities that employees are proud to display.",
    category: "Learning",
  },
  {
    id: "ai",
    emoji: "🤖",
    title: "AI-Powered Personalization",
    description: "Adaptive learning engine continuously adjusts content difficulty, pace, and recommendations based on learner behavior.",
    category: "Analytics",
  },
  {
    id: "integrations",
    emoji: "🔗",
    title: "Seamless HR Integration",
    description: "Native integrations with Workday, SAP SuccessFactors, Darwinbox, and all major HRMS platforms via REST APIs.",
    category: "Integration",
  },
];

// ─── Steps Data ───────────────────────────────────────────────────────────────────

export interface Step {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export const stepsData: Step[] = [
  {
    id: "assessment",
    number: "01",
    title: "Needs Assessment",
    summary: "We start with a deep-dive audit of your team's skill gaps and strategic goals.",
    detail:
      "Our L&D consultants conduct structured interviews, skills benchmarking, and role-based gap analysis to map a precise learning agenda. You receive a detailed capability heat-map and prioritized skills roadmap before a single module is assigned.",
  },
  {
    id: "design",
    number: "02",
    title: "Program Design",
    summary: "Custom learning paths architected with your domain in mind.",
    detail:
      "From curriculum selection to cohort composition and mentor matching — every program is built to your specifications. We blend synchronous live sessions, async micro-learning, and project-based assessments for maximum retention.",
  },
  {
    id: "deployment",
    number: "03",
    title: "Deployment & Onboarding",
    summary: "Seamless rollout with zero disruption to your operations.",
    detail:
      "White-glove onboarding, SSO integration, HRMS sync, and dedicated account management ensure a day-one-ready launch. Your learners receive a guided orientation and managers get a live admin console within 14 days of signing.",
  },
  {
    id: "optimize",
    number: "04",
    title: "Track & Optimize",
    summary: "Live dashboards surface progress, risks, and ROI in real time.",
    detail:
      "Monthly business reviews, completion nudges, and adaptive content recommendations keep engagement high throughout the program lifecycle. You always know exactly where every learner stands and the business impact they've generated.",
  },
];

// ─── Testimonials Data ────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  avatarColor: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "priya",
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%. The ROI is undeniable.",
    name: "Priya Sharma",
    title: "Chief People Officer",
    company: "Razorpay",
    initials: "PS",
    avatarColor: "bg-blue-500",
    rating: 5,
  },
  {
    id: "vikram",
    quote:
      "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    name: "Vikram Nair",
    title: "VP of Engineering",
    company: "PhonePe",
    initials: "VN",
    avatarColor: "bg-emerald-500",
    rating: 5,
  },
  {
    id: "ananya",
    quote:
      "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.",
    name: "Ananya Krishnan",
    title: "Head of L&D",
    company: "Infosys BPM",
    initials: "AK",
    avatarColor: "bg-purple-500",
    rating: 5,
  },
];

// ─── Partners Data ────────────────────────────────────────────────────────────────

export type PartnerCategory = "IIT" | "IIM" | "Global" | "Industry";

export interface Partner {
  id: string;
  shortName: string;
  fullName: string;
  category: PartnerCategory;
}

export const partnersData: Partner[] = [
  { id: "iitd", shortName: "IIT D", fullName: "IIT Delhi", category: "IIT" },
  { id: "iitb", shortName: "IIT B", fullName: "IIT Bombay", category: "IIT" },
  { id: "iitk", shortName: "IIT K", fullName: "IIT Kanpur", category: "IIT" },
  { id: "iitm", shortName: "IIT M", fullName: "IIT Madras", category: "IIT" },
  { id: "iitr", shortName: "IIT R", fullName: "IIT Roorkee", category: "IIT" },
  { id: "iimb", shortName: "IIM B", fullName: "IIM Bangalore", category: "IIM" },
  { id: "iimk", shortName: "IIM K", fullName: "IIM Kozhikode", category: "IIM" },
  { id: "iiml", shortName: "IIM L", fullName: "IIM Lucknow", category: "IIM" },
  { id: "gl", shortName: "GL", fullName: "Great Lakes", category: "Global" },
  { id: "nus", shortName: "NUS", fullName: "NUS Singapore", category: "Global" },
  { id: "mitx", shortName: "MITx", fullName: "MIT xPRO", category: "Global" },
  { id: "google", shortName: "Google", fullName: "Google Cloud", category: "Industry" },
  { id: "msft", shortName: "MSFT", fullName: "Microsoft", category: "Industry" },
  { id: "aws", shortName: "AWS", fullName: "Amazon AWS", category: "Industry" },
  { id: "ibm", shortName: "IBM", fullName: "IBM", category: "Industry" },
  { id: "tableau", shortName: "Tableau", fullName: "Tableau", category: "Industry" },
];

export const partnerCategoryColors: Record<PartnerCategory, string> = {
  IIT: "bg-blue-100 text-blue-700 border-blue-200",
  IIM: "bg-indigo-100 text-indigo-700 border-indigo-200",
  Global: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Industry: "bg-amber-100 text-amber-700 border-amber-200",
};
