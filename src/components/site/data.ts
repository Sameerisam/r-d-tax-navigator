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
} from "lucide-react";

export const BRAND = {
  name: "Levina & Associates",
  tagline: "R&D tax credit documentation support for Philippine businesses.",
  phone: "+63 917 555 0142",
  phoneHref: "tel:+639175550142",
  email: "hello@levina-associates.ph",
};

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const PAIN_POINTS = [
  {
    icon: Search,
    title: "Spotting qualifying activities",
    body: "Not every project counts. Misjudging eligibility means leaving incentives on the table — or facing questions later.",
  },
  {
    icon: Receipt,
    title: "Tracking eligible costs",
    body: "Salaries, materials, and utilities sit in different systems and rarely reconcile without a dedicated cost trail.",
  },
  {
    icon: FileSpreadsheet,
    title: "Building the report pack",
    body: "Technical narratives and financial schedules must tell one consistent story before anything is filed.",
  },
  {
    icon: Landmark,
    title: "Coordinating with agencies",
    body: "BIR, BOI, and PEZA each want their own formats and follow-ups, on their own timelines.",
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
        body: "Structured intake of project logs, timesheets, and cost records into one audit-ready workspace.",
      },
      {
        icon: FileText,
        title: "Documentation & Report Support",
        body: "Draft technical narratives and financial schedules that match what reviewers expect to see.",
      },
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    services: [
      {
        icon: ShieldCheck,
        title: "Research & Compliance Monitoring",
        body: "Track CREATE Act rules, BIR issuances, and agency circulars so your claim reflects current requirements.",
      },
      {
        icon: Calculator,
        title: "Financial & Cost Tracking Support",
        body: "Maintain qualifying-expenditure schedules that reconcile cleanly to your books each period.",
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
        body: "One owner for deadlines, checklists, and status — so nothing stalls waiting on an email.",
      },
      {
        icon: MessagesSquare,
        title: "Advisor & Agency Communication",
        body: "Liaison work with your CPA, tax counsel, and agency contacts, with every thread documented.",
      },
    ],
  },
];

export const STEPS = [
  {
    title: "Free Consultation",
    body: "A 30-minute review of your projects, registrations, and current documentation gaps.",
  },
  {
    title: "Document & Data Collection",
    body: "A tailored checklist and secure intake so evidence is gathered once, correctly.",
  },
  {
    title: "Report Preparation & Review",
    body: "Draft narratives and cost schedules prepared for your accountant's sign-off.",
  },
  {
    title: "Submission & Follow-up",
    body: "Filing coordination and tracking of agency queries until the claim is closed out.",
  },
];

export const CAPABILITIES = [
  {
    title: "Claims processing & reporting",
    body: "5+ years preparing claim files, reconciliations, and status reporting across automotive and logistics operations.",
  },
  {
    title: "Compliance coordination",
    body: "Service administration and advisory support work built on strict documentation and deadline discipline.",
  },
  {
    title: "Financial data handling",
    body: "Audit background applied to cost tracking, variance checks, and evidence trails that survive review.",
  },
  {
    title: "Stakeholder communication",
    body: "Client-facing experience keeping accountants, agencies, and internal teams aligned on one timeline.",
  },
];

export const STATS = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 120, suffix: "+", label: "Reports prepared" },
  { value: 8, suffix: "", label: "Industries served" },
  { value: 24, suffix: "h", label: "Typical response time" },
];

export const AUDIENCES = [
  {
    icon: Building2,
    title: "Business Owners",
    body: "BOI or PEZA-registered? Keep your R&D evidence claim-ready without pulling engineers off delivery work.",
  },
  {
    icon: CalcIcon,
    title: "Accountants & CPAs",
    body: "Hand off the collection and drafting load. You review and sign off on a complete, reconciled pack.",
  },
  {
    icon: Briefcase,
    title: "Tax Consultants",
    body: "Add documented R&D claim capacity for your clients without adding headcount to your practice.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The documentation pack arrived complete and reconciled. Our review time dropped from weeks to a couple of days.",
    name: "Marisol Reyes",
    role: "Managing Partner, Reyes & Co. CPAs",
  },
  {
    quote:
      "Our engineers stopped chasing spreadsheets. Everything for the claim was gathered once and kept current.",
    name: "Daniel Uy",
    role: "Operations Director, PEZA-registered manufacturer",
  },
  {
    quote:
      "Clear checklists, fast replies, and a real handle on CREATE Act requirements. Easy to work alongside.",
    name: "Anna Villaruel",
    role: "Tax Consultant, Metro Manila",
  },
];

export const FAQS = [
  {
    q: "What qualifies as R&D under the CREATE Act?",
    a: "Broadly, systematic work aimed at resolving scientific or technological uncertainty — new or improved products, processes, materials, or software. Eligibility depends on your registration and the incentive you are claiming, which is exactly what the consultation clarifies before any documentation work begins.",
  },
  {
    q: "What documents do I need to get started?",
    a: "Typically project descriptions, staff time allocations, payroll and materials cost records, supplier invoices, and your BOI or PEZA registration papers. You receive a tailored checklist after the consultation so nothing is gathered twice.",
  },
  {
    q: "How long does the process take?",
    a: "A first documentation cycle usually runs four to eight weeks depending on record quality and the number of projects. Ongoing quarterly maintenance is considerably faster once the structure is in place.",
  },
  {
    q: "Do you work directly with the BIR?",
    a: "Coordination and correspondence support is provided alongside your accountant or tax counsel, who remain the filing parties of record. This is documentation and coordination support, not tax representation.",
  },
  {
    q: "Is my data kept confidential?",
    a: "Yes. Work runs under a signed NDA, files stay in access-controlled storage you own where possible, and access is limited to the specific engagement.",
  },
  {
    q: "Which industries do you support?",
    a: "Manufacturing, electronics, food and beverage, logistics, agriculture, IT and software, healthcare services, and engineering firms — anywhere technical improvement work is happening.",
  },
];
