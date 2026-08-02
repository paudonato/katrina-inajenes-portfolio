export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Accounts Receivable Reconciliation Officer",
    company: "Microsourcing Philippines",
    period: "May 2025 — Present",
    bullets: [
      "Owns the end-to-end accounts receivable lifecycle — invoicing, payment posting, cash application, and account and bank reconciliation — across a high-volume client portfolio.",
      "Drives collections through proactive outbound calls and structured email follow-up with travel agency clients, resolving billing issues and accelerating recovery of overdue invoices.",
      "Investigates and resolves payment discrepancies, reconciles customer accounts, and supports month-end close while keeping financial records audit-ready.",
      "Partners cross-functionally with internal teams and clients to resolve payment issues, deliver AR reporting, and consistently meet productivity and accuracy targets.",
    ],
  },
  {
    role: "Accounts Receivable / Collections Analyst",
    company: "Accenture Inc. — Microsoft Account",
    period: "June 2020 — May 2025",
    bullets: [
      "Managed billing and collections research for accounts under the Microsoft engagement, reviewing credit history and contract terms to resolve payment disputes.",
      "Monitored aging accounts and reduced outstanding balances through structured inbound and outbound collection efforts across calls, email, and multiple channels.",
      "Processed high volumes of customer payments — ACH, wire transfers, checks, credit cards, and EFTs — while issuing invoices, credit memos, and debit memos with precision.",
      "Maintained audit-ready collection records and documentation supporting compliance, reporting, and timely account resolution at enterprise scale.",
    ],
  },
  {
    role: "Visa Processing Officer",
    company: "Visa & Travel Documentation Services",
    period: "February 2018 — March 2020",
    bullets: [
      "Verified supporting documentation for visa applications, ensuring accuracy and full compliance with embassy requirements.",
      "Supported applicants across phone, email, and in-person channels while managing passport collection, release, and tracking.",
      "Processed payments and maintained meticulous daily transaction records — foundational experience in high-accuracy financial documentation.",
    ],
  },
];

export const education = {
  school: "ICCT Colleges Inc.",
  degree: "Bachelor of Science in Tourism Management",
  period: "May 2014 — December 2017",
};

export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Technical Skills",
    items: [
      "AR Management",
      "Billing & Collections",
      "Cash Application",
      "Invoice Processing",
      "Bank Reconciliation",
      "Financial Reporting",
      "Dispute Resolution",
      "Month-end Close",
    ],
  },
  {
    title: "Financial Systems & ERP",
    items: ["Oracle", "SAP / ERP Systems", "Microsoft Dynamics 365", "Opera Cloud"],
  },
  {
    title: "Payment Platforms",
    items: ["Braintree", "Stripe", "American Express (AMEX)", "Global Blue", "ACH & Wire Transfers", "EFT"],
  },
  {
    title: "Microsoft Office",
    items: ["Excel — PivotTables", "Excel — XLOOKUP & Formulas", "Word", "PowerPoint", "Outlook"],
  },
  {
    title: "Soft Skills",
    items: [
      "Client Communication",
      "Cross-functional Collaboration",
      "Analytical Thinking",
      "Problem Solving",
      "Organization",
      "Attention to Detail",
    ],
  },
  {
    title: "Accounting & Compliance",
    items: ["Account Reconciliation", "Compliance Documentation", "Credit & Debit Memos", "Aging Analysis"],
  },
];

export const coreCompetencyLevels = [
  { name: "Accounts Receivable Management", level: 96 },
  { name: "Bank & Account Reconciliation", level: 95 },
  { name: "Collections & Dispute Resolution", level: 94 },
  { name: "Cash Application & Payment Posting", level: 94 },
  { name: "Advanced Excel (PivotTables, XLOOKUP)", level: 92 },
  { name: "ERP Systems (Oracle, SAP, Dynamics 365)", level: 88 },
];

export interface ExpertiseCard {
  icon: string;
  title: string;
  description: string;
}

export const coreExpertise: ExpertiseCard[] = [
  { icon: "Landmark", title: "Accounts Receivable Management", description: "End-to-end ownership of the AR cycle, from invoicing through payment resolution." },
  { icon: "Receipt", title: "Billing & Collections", description: "Proactive collections strategy that recovers overdue balances while preserving client relationships." },
  { icon: "RefreshCcw", title: "Bank Reconciliation", description: "Precise matching of bank and account records to eliminate discrepancies before they compound." },
  { icon: "CreditCard", title: "Cash Application", description: "Accurate, timely posting of incoming payments across multiple platforms and currencies." },
  { icon: "FileText", title: "Invoice Processing", description: "High-volume invoice generation and processing with a track record of near-zero error rates." },
  { icon: "Send", title: "Payment Posting", description: "Structured processing of ACH, wire, credit card, and EFT payments with full audit trails." },
  { icon: "BarChart3", title: "Financial Reporting", description: "Clear, accurate AR reporting that gives finance leadership visibility into portfolio health." },
  { icon: "ShieldCheck", title: "Dispute Resolution", description: "Calm, methodical resolution of billing disputes that protects both revenue and relationships." },
  { icon: "Database", title: "Microsoft Dynamics 365", description: "Confident daily use for account management, reconciliation, and reporting workflows." },
  { icon: "Layers", title: "Oracle & SAP ERP", description: "Comfortable navigating enterprise ERP environments for research, posting, and reporting." },
  { icon: "Calculator", title: "Advanced Excel Analysis", description: "PivotTables, XLOOKUP, and formula-driven analysis that turns raw data into decisions." },
  { icon: "Users", title: "Customer Communication", description: "Clear, professional client-facing communication across calls, email, and in-person channels." },
  { icon: "ClipboardCheck", title: "Month-end Closing", description: "Reliable support for close cycles with accurate reconciliations and timely reporting." },
  { icon: "Handshake", title: "Payment Platform Operations", description: "Hands-on experience across Braintree, Stripe, AMEX, and Global Blue payment ecosystems." },
];

export interface Achievement {
  icon: string;
  value: number | null;
  suffix: string;
  display?: string;
  label: string;
}

export const achievements: Achievement[] = [
  { icon: "Clock", value: 6, suffix: "+", label: "Years in AR, Collections & Reconciliation" },
  { icon: "Receipt", value: 1000, suffix: "+", label: "Invoices & Payments Processed with Accuracy" },
  { icon: "Building2", value: null, suffix: "", display: "Enterprise-Scale", label: "Supported Microsoft's Global Account via Accenture" },
  { icon: "Layers", value: 4, suffix: "+", label: "ERP & Payment Systems Fluently Operated" },
];

export interface Strength {
  icon: string;
  title: string;
  description: string;
}

export const strengths: Strength[] = [
  { icon: "Target", title: "Attention to Detail", description: "Catches the discrepancy others miss — every reconciliation is checked, every invoice verified before it moves forward." },
  { icon: "LineChart", title: "Analytical Thinking", description: "Breaks down complex aging portfolios and payment histories into clear, actionable next steps." },
  { icon: "Users", title: "Strong Communication", description: "Builds trust with clients and internal teams alike, turning difficult billing conversations into resolved accounts." },
  { icon: "ShieldCheck", title: "Financial Accuracy", description: "Six-plus years of maintaining error-resistant records across high-volume, multi-currency environments." },
  { icon: "Lightbulb", title: "Problem Solving", description: "Investigates root causes of payment discrepancies rather than settling for surface-level fixes." },
  { icon: "Clock", title: "Time Management", description: "Balances competing deadlines — month-end close, collections targets, and client requests — without dropping accuracy." },
  { icon: "TrendingUp", title: "Continuous Improvement", description: "Always looking for the tighter process, the faster reconciliation, the cleaner report." },
];

export const contactInfo = {
  name: "Katrina Paula Vasquez Inajenes",
  email: "inajeneskatrinapaula@gmail.com",
  phone: "+63 920 717 7487",
  linkedin: "https://www.linkedin.com/in/katrina-paula-inajenes-7a1274255",
  location: "Philippines",
};
