import {
  Search,
  Receipt,
  FileSpreadsheet,
  Landmark,
  FolderKanban,
  FileText,
  ShieldCheck,
  ClipboardList,
  Calculator,
  MessagesSquare,
  Building2,
  Calculator as CalcIcon,
  Briefcase,
  Percent,
  BadgePercent,
  Timer,
  Package,
} from "lucide-react";

export {
  ADDRESS,
  BRAND,
  CAPABILITIES,
  EXPERIENCE,
  FAQS,
  FOOTER_LINK_GROUPS,
  INCENTIVES_INTRO,
  KNOWS_ABOUT,
  NAV_LINKS,
  SAME_AS,
  SEO,
  STATS,
  STEPS,
  TESTIMONIALS,
} from "./brand";

export const INCENTIVE_BENEFITS = [
  {
    icon: Percent,
    title: "Additional R&D expense deduction",
    body: "Qualified R&D expenditures may receive an additional deduction from taxable income — in some cases up to 100% extra under applicable conditions — reducing your overall tax burden when properly documented.",
  },
  {
    icon: BadgePercent,
    title: "Preferential rates & exemptions",
    body: "Eligible innovation and technology-driven enterprises may access tax exemptions or preferential rates tied to registered projects and incentive regimes under CREATE.",
  },
  {
    icon: Timer,
    title: "Accelerated depreciation",
    body: "R&D equipment and facilities can often be depreciated faster, improving cash flow when capital spend is clearly linked to qualifying experimental or development work.",
  },
  {
    icon: Package,
    title: "Customs & import duty relief",
    body: "Equipment used in qualified R&D activities may qualify for customs and import duty exemptions when registration and supporting records are in order.",
  },
];

export const PAIN_POINTS = [
  {
    icon: Search,
    title: "Identifying qualifying R&D activities",
    body: "Not every improvement project counts. You must separate routine work from systematic efforts that resolve scientific or technological uncertainty under CREATE Act standards.",
  },
  {
    icon: Receipt,
    title: "Tracking eligible R&D costs",
    body: "Salaries, materials, subcontractors, testing, and utilities sit in different systems. Without a clear cost trail, incentives are understated or challenged on audit.",
  },
  {
    icon: FileSpreadsheet,
    title: "Building technical & financial reports",
    body: "Technical narratives must prove innovation or experimental development, while financial schedules must reconcile to the books — one consistent story for reviewers.",
  },
  {
    icon: Landmark,
    title: "Coordinating with BIR and agencies",
    body: "BIR, BOI, and PEZA each expect specific formats, deadlines, and follow-ups. Missing correspondence or incomplete forms stall otherwise valid claims.",
  },
];

export const SERVICE_GROUPS = [
  {
    id: "documentation",
    label: "Documentation",
    services: [
      {
        icon: FolderKanban,
        title: "Data Collection & Organization",
        body: "Gather and categorize R&D project data, cost summaries, and timesheets. Maintain organized digital folders for receipts, reports, and supporting evidence so nothing is scrambled at filing time.",
      },
      {
        icon: FileText,
        title: "Documentation & Report Support",
        body: "Draft and format technical or financial sections of R&D reports. Prepare templates and checklists, proofread, and compile submission-ready claim packs for CPA review.",
      },
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    services: [
      {
        icon: ShieldCheck,
        title: "Research & Compliance Assistance",
        body: "Monitor BIR and CREATE Act guidelines on R&D incentives, submission requirements, and Philippine tax-law updates. Coordinate with tax advisors or CPAs for compliance review.",
      },
      {
        icon: Calculator,
        title: "Financial & Cost Tracking Support",
        body: "Maintain qualifying-expenditure schedules that reconcile to payroll, AP, and project codes — the audit trail agencies expect when scrutinizing R&D claims.",
      },
    ],
  },
  {
    id: "coordination",
    label: "Coordination",
    services: [
      {
        icon: ClipboardList,
        title: "Project & Claim Coordination",
        body: "Track claim progress, follow-ups, and agency correspondence. Keep checklists, deadlines, and status logs in one place so the file never stalls on an unanswered email.",
      },
      {
        icon: MessagesSquare,
        title: "Advisor & Agency Communication",
        body: "Schedule consultations, maintain communication logs, and liaise with your CPA, tax counsel, and agency contacts while every thread stays documented.",
      },
    ],
  },
];

export const AUDIENCES = [
  {
    icon: Building2,
    title: "Business Owners",
    body: "BOI or PEZA-registered? Keep R&D evidence claim-ready under the CREATE Act without pulling engineers off delivery work.",
  },
  {
    icon: CalcIcon,
    title: "Accountants & CPAs",
    body: "Hand off collection and drafting. You review and sign off on a complete, reconciled R&D documentation pack.",
  },
  {
    icon: Briefcase,
    title: "Tax Consultants",
    body: "Add documented R&D claim capacity for your clients without adding headcount to your practice.",
  },
];
