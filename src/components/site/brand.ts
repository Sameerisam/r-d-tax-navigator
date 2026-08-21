/**
 * Brand + copy used across the shell and SEO helpers.
 * Kept free of lucide-react so critical routes do not pay for icon modules.
 */

export const BRAND = {
  name: "BLMC",
  legalName: "BLMC — Levina and Associates",
  fullName: "BLMC — R&D Tax Credit · Audit Specialists",
  tagline: "R&D Tax Credit · Audit Specialists",
  description:
    "BLMC helps Philippine businesses, CPAs, and tax consultants prepare audit-ready R&D tax credit documentation under the CREATE Act — including BOI, PEZA, and BIR-aligned claim support.",
  phone: "1-800-986-4725",
  phoneHref: "tel:+18009864725",
  email: "hello@blmc.com",
  location: "Philippines",
  bookingUrl:
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2w7qE5FNQMio5Pl2Tn03ShqL_TRu45q14ce1VVTAECFo0c05JXc7Iry0ctzwA92WhlaOQQ8r1R",
  url: "https://blmc.com",
  logo: "/logo-mark.svg",
  ogImage: "/og-image.jpg",
};

/**
 * Postal address used for the footer and the Organization schema.
 *
 * Leave `street` empty until a real address is available — Google cross-checks
 * addresses against other listings, so a placeholder is worse than omitting it.
 * When `street` is empty the PostalAddress block is left out of the schema.
 */
export const ADDRESS = {
  street: "",
  locality: "",
  region: "",
  postalCode: "",
  country: "PH",
  countryName: "Philippines",
};

/**
 * External profiles that prove BLMC is a real entity. Google uses `sameAs` to
 * link the site to verified listings, so only add URLs that genuinely exist.
 */
export const SAME_AS: string[] = [];

export const KNOWS_ABOUT = [
  "R&D tax credits",
  "CREATE Act incentives",
  "BOI registration",
  "PEZA registration",
  "BIR compliance",
  "R&D documentation",
  "Tax incentive audit support",
];

export const SEO = {
  title: "BLMC | R&D Tax Credit & Audit Specialists Philippines",
  description:
    "BLMC provides R&D tax credit documentation and audit support for Philippine businesses. CREATE Act incentives, BOI & PEZA claims, BIR-aligned evidence packs, and virtual assistant claim preparation.",
  keywords:
    "R&D tax credit Philippines, CREATE Act R&D incentives, BOI PEZA R&D tax, BIR R&D documentation, R&D tax credit virtual assistant, audit specialists Philippines",
};

export const NAV_LINKS = [
  { label: "Incentives", href: "/incentives" },
  { label: "Industries", href: "/industries" },
  { label: "Guides", href: "/guides" },
  { label: "Services", href: "/#services" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const FOOTER_LINK_GROUPS = [
  {
    heading: "Directory",
    links: [
      { label: "Incentives index", href: "/incentives" },
      { label: "Industry guides", href: "/industries" },
      { label: "Agencies", href: "/agencies" },
      { label: "Compliance deadlines", href: "/deadlines" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "All guides", href: "/guides" },
      { label: "CREATE Act explained", href: "/guides/create-act-rd-incentives-explained" },
      { label: "Eligibility checklist", href: "/guides/rd-tax-credit-eligibility-checklist" },
      { label: "Qualifying R&D costs", href: "/guides/qualifying-rd-costs-philippines" },
      { label: "Documentation requirements", href: "/guides/rd-documentation-requirements" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Services", href: "/#services" },
      { label: "How it works", href: "/#process" },
      { label: "Why BLMC", href: "/#why-us" },
      { label: "Contact", href: "/#contact" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
];

export const INCENTIVES_INTRO = {
  eyebrow: "CREATE Act · Philippines",
  title: "R&D tax credits and incentives in the Philippines",
  body: [
    "The Philippine government offers tax incentives to encourage innovation, technology advancement, and scientific research. Companies engaged in research and development — especially those registered with the Board of Investments (BOI) or the Philippine Economic Zone Authority (PEZA) — may qualify for R&D tax deductions and related incentives under the Corporate Recovery and Tax Incentives for Enterprises (CREATE) Act and BIR revenue regulations.",
    "These programs support businesses investing in new products, systems, or processes that strengthen competitiveness and economic growth. BLMC helps you organize the documentation so eligible work is visible, traceable, and ready for review.",
  ],
};

export const STEPS = [
  {
    title: "Free Consultation",
    body: "A focused review of your projects, BOI or PEZA registrations, and current documentation gaps for CREATE Act R&D incentives.",
  },
  {
    title: "Document & Data Collection",
    body: "A tailored checklist and secure intake for project logs, timesheets, cost records, and registration papers — gathered once, correctly.",
  },
  {
    title: "Report Preparation & Review",
    body: "Technical narratives and cost schedules drafted for your accountant’s sign-off, aligned to what BIR and investment agencies expect.",
  },
  {
    title: "Submission & Follow-up",
    body: "Filing coordination and tracking of agency queries until the R&D claim documentation cycle is closed out.",
  },
];

export const CAPABILITIES = [
  {
    title: "Claims processing & reporting",
    body: "Years of preparing claim files, reconciliations, and status reports across logistics, automotive, and operations — applied to R&D tax credit packs.",
  },
  {
    title: "Compliance coordination",
    body: "Service administration discipline: deadlines, document control, and follow-through that keep BIR-, BOI-, and PEZA-facing files moving.",
  },
  {
    title: "Financial data & audit trails",
    body: "Auditor background applied to cost tracking, variance checks, inventory-style encoding accuracy, and evidence that survives review.",
  },
  {
    title: "Stakeholder communication",
    body: "Client-facing experience keeping accountants, agencies, engineers, and internal teams aligned on one claim timeline.",
  },
];

export const STATS = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 120, suffix: "+", label: "Reports prepared" },
  { value: 8, suffix: "", label: "Industries served" },
  { value: 24, suffix: "h", label: "Typical response time" },
];

export const EXPERIENCE = [
  {
    role: "Virtual Assistant — Logistics Company (US)",
    points: [
      "Administrative and operational support for daily workflow",
      "Documentation, scheduling, communication, and follow-ups",
      "Accurate record-keeping for multi-party logistics activities",
    ],
  },
  {
    role: "Geely Lipa City — Service Administrator / BRP Advisor",
    points: [
      "Daily, weekly, and monthly after-sales performance reports",
      "Body Repair and Paint (BRP) and insurance claim processing",
      "End-to-end unit receive-and-release coordination",
    ],
  },
  {
    role: "Hyundai Batangas City — Claims & Telemarketing",
    points: [
      "Document collation and insurance claim follow-ups",
      "Preventive maintenance scheduling and customer callbacks",
      "Maintained structured customer interaction records",
    ],
  },
  {
    role: "CDO Foodsphere Inc. — Auditor",
    points: [
      "Audited receiving and dispatching across departments",
      "Accurate daily inventory encoding and exception reporting",
    ],
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
      "Our engineers stopped chasing spreadsheets. Everything for the CREATE Act claim was gathered once and kept current.",
    name: "Daniel Uy",
    role: "Operations Director, PEZA-registered manufacturer",
  },
  {
    quote:
      "Clear checklists, fast replies, and a real handle on BIR and CREATE Act requirements. Easy to work alongside.",
    name: "Anna Villaruel",
    role: "Tax Consultant, Metro Manila",
  },
];

export const FAQS = [
  {
    q: "What are R&D tax credits in the Philippines?",
    a: "Under the CREATE Act and related BIR rules, qualified research and development can unlock additional deductions, preferential tax treatment, accelerated depreciation, and in some cases customs relief. Benefits depend on registration (often BOI or PEZA), the nature of the work, and how well costs and technical evidence are documented.",
  },
  {
    q: "What qualifies as R&D under the CREATE Act?",
    a: "Broadly, systematic work aimed at resolving scientific or technological uncertainty — new or improved products, processes, materials, or software. Routine quality control or cosmetic changes usually do not qualify. Eligibility depends on your registration and incentive type, which we clarify in consultation before documentation begins.",
  },
  {
    q: "Who can claim R&D incentives — BOI and PEZA companies?",
    a: "Enterprises registered with BOI or PEZA that undertake qualifying innovation or technology projects are common claimants. Other entities may still have deductible R&D under general tax rules. BLMC focuses on documentation support so your CPA can determine the correct filing path.",
  },
  {
    q: "What documents do I need for an R&D tax credit claim?",
    a: "Typically: project descriptions and timelines, staff time allocations, payroll and materials cost records, subcontractor and testing invoices, supplier receipts, technical notes showing uncertainty and experimentation, and BOI or PEZA registration papers. You receive a tailored checklist after consultation.",
  },
  {
    q: "How does a virtual assistant help with R&D tax credit preparation?",
    a: "BLMC handles the documentation-heavy work: data collection, folder organization, draft narratives and schedules, compliance research monitoring, deadline tracking, and liaison with your CPA. Technical and filing judgments remain with licensed professionals; we make the evidence pack audit-ready.",
  },
  {
    q: "How long does R&D claim documentation take?",
    a: "A first documentation cycle usually runs four to eight weeks depending on record quality and project count. Ongoing quarterly maintenance is faster once the structure, naming conventions, and cost mapping are in place.",
  },
  {
    q: "Do you file directly with the BIR?",
    a: "No. BLMC provides documentation, research, and coordination support. Your accountant or tax counsel remains the filing party of record. We prepare materials and track correspondence so their submission is complete and consistent.",
  },
  {
    q: "Is my R&D and financial data confidential?",
    a: "Yes. Engagements run under NDA where requested, files stay in access-controlled storage you own where possible, and access is limited to the specific claim team.",
  },
  {
    q: "Which industries does BLMC support?",
    a: "Manufacturing, electronics, food and beverage, logistics, agriculture, IT and software, healthcare services, and engineering — anywhere systematic technical improvement work is happening and CREATE Act or related R&D incentives may apply.",
  },
];
