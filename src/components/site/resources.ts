/**
 * Reference data for the BLMC R&D incentives directory.
 *
 * Every record cites an official source. Figures and deadlines are summarised
 * for research purposes and must be confirmed against the issuing agency
 * before a claim is filed.
 *
 * Review dates / shell-facing stats live in directory-meta.ts so the homepage
 * shell does not pull this entire catalog into the critical JS path.
 */

export {
  DIRECTORY_STATS,
  LAST_REVIEWED,
  LAST_REVIEWED_LABEL,
  REVIEW_CADENCE,
  SOURCE_DISCLAIMER,
} from "./directory-meta";

export type Agency = {
  slug: string;
  name: string;
  abbreviation: string;
  role: string;
  summary: string;
  handles: string[];
  documentsRequested: string[];
  source: { name: string; url: string };
};

export const AGENCIES: Agency[] = [
  {
    slug: "bir",
    name: "Bureau of Internal Revenue",
    abbreviation: "BIR",
    role: "Tax administration and audit",
    summary:
      "The BIR administers the National Internal Revenue Code, issues the revenue regulations that operationalise CREATE Act incentives, and audits how deductions — including research and development expenses — were computed and substantiated.",
    handles: [
      "Income tax returns and attachments where R&D deductions are claimed",
      "Revenue regulations and revenue memorandum circulars interpreting CREATE",
      "Assessment and audit of claimed deductions and incentive availment",
      "Certificates of registration and books-of-accounts compliance",
    ],
    documentsRequested: [
      "Annual and quarterly income tax returns with schedules",
      "Audited financial statements and supporting trial balance",
      "Breakdown of research and development expenditure by cost type",
      "Contracts, invoices, and payroll records supporting claimed costs",
      "Technical descriptions of the projects generating the expenditure",
    ],
    source: { name: "bir.gov.ph", url: "https://www.bir.gov.ph/" },
  },
  {
    slug: "boi",
    name: "Board of Investments",
    abbreviation: "BOI",
    role: "Investment promotion agency",
    summary:
      "The BOI registers qualified projects under the Strategic Investment Priority Plan and grants incentives to enterprises operating outside economic zones. Registered business enterprises report annually and must keep registered-activity costs clearly separated.",
    handles: [
      "Registration of projects listed in the Strategic Investment Priority Plan",
      "Certificates of registration and terms of incentive availment",
      "Annual reporting obligations for registered business enterprises",
      "Endorsements required for duty exemption on capital equipment",
    ],
    documentsRequested: [
      "Project feasibility and technical description",
      "Certificate of registration and specific terms and conditions",
      "Annual report on project performance and committed investment",
      "Cost segregation between registered and unregistered activities",
    ],
    source: { name: "boi.gov.ph", url: "https://boi.gov.ph/" },
  },
  {
    slug: "peza",
    name: "Philippine Economic Zone Authority",
    abbreviation: "PEZA",
    role: "Economic zone regulator",
    summary:
      "PEZA registers and supervises enterprises inside proclaimed economic zones, including IT parks and manufacturing zones. PEZA-registered enterprises access incentives tied to their registered activity and file periodic reports with the authority.",
    handles: [
      "Registration and supervision of ecozone locators",
      "Incentive availment tied to the registered export or IT activity",
      "Import permits and VAT zero-rating endorsements",
      "Periodic economic and performance reporting",
    ],
    documentsRequested: [
      "Registration agreement and certificate of registration",
      "Periodic performance and economic reports",
      "Import and equipment records for zone-based assets",
      "Evidence that costs relate to the registered activity",
    ],
    source: { name: "peza.gov.ph", url: "https://www.peza.gov.ph/" },
  },
  {
    slug: "firb",
    name: "Fiscal Incentives Review Board",
    abbreviation: "FIRB",
    role: "Incentive policy oversight",
    summary:
      "The FIRB oversees the grant and administration of tax incentives across investment promotion agencies, approves incentives above delegated thresholds, and consolidates incentive data reported under the Tax Incentives Management and Transparency Act.",
    handles: [
      "Policy oversight of incentives granted by investment promotion agencies",
      "Approval of incentive packages above delegated investment thresholds",
      "Consolidated monitoring of incentive availment and cost to government",
    ],
    documentsRequested: [
      "Investment promotion agency endorsements",
      "Project cost and incentive availment data",
      "Tax incentives reports consolidated under TIMTA",
    ],
    source: { name: "firb.gov.ph", url: "https://firb.gov.ph/" },
  },
  {
    slug: "dost",
    name: "Department of Science and Technology",
    abbreviation: "DOST",
    role: "Research funding and certification",
    summary:
      "DOST and its councils fund research and development programmes, support technology transfer, and provide the scientific context that underpins whether an activity is genuinely experimental. Grant funding sits alongside — not instead of — tax incentives.",
    handles: [
      "Competitive research and development grant programmes",
      "Technology transfer and commercialisation support",
      "Sector research councils including PCIEERD and PCAARRD",
      "Scientific evaluation of proposed research programmes",
    ],
    documentsRequested: [
      "Research proposals with objectives and methodology",
      "Line-item budgets and counterpart funding commitments",
      "Progress and terminal reports for funded projects",
      "Institutional and researcher credentials",
    ],
    source: { name: "dost.gov.ph", url: "https://www.dost.gov.ph/" },
  },
];

export type Incentive = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  agency: string;
  agencySlug: string;
  law: string;
  benefit: string;
  duration: string;
  status: string;
  summary: string;
  detail: string;
  eligibility: string[];
  documentation: string[];
  blmcSupport: string;
  source: { name: string; url: string };
};

export const INCENTIVES: Incentive[] = [
  {
    slug: "additional-deduction-research-development",
    name: "Additional Deduction on Research and Development Expenses",
    shortName: "Additional R&D deduction",
    category: "Tax deduction",
    agency: "BIR · Investment promotion agency",
    agencySlug: "bir",
    law: "CREATE Act (RA 11534), as amended",
    benefit: "Up to 100% additional deduction on qualified R&D expense",
    duration: "For the duration of the enhanced deductions regime",
    status: "Ongoing",
    summary:
      "Registered business enterprises availing of the enhanced deductions regime may claim an additional deduction on research and development expenditure directly related to the registered project, on top of the ordinary deduction already recorded in the books.",
    detail:
      "This is the headline research and development incentive under the CREATE framework. The additional deduction applies to qualified R&D expenses incurred for the registered project — commonly salaries of personnel directly engaged in the research, consumable materials and supplies, and payments for services rendered by local research institutions. Because the deduction sits on top of the ordinary expense already booked, the effective benefit depends on your applicable corporate income tax rate and on how cleanly the qualifying expenditure can be separated from routine operating cost. Expenditure that cannot be traced to the registered activity, or that relates to routine testing and quality control rather than genuine experimentation, is the most common exclusion on review.",
    eligibility: [
      "Registered business enterprise with an investment promotion agency",
      "Availing of the enhanced deductions regime rather than the special corporate income tax",
      "Expenditure directly related to the registered project or activity",
      "Research undertaken in the Philippines, or with local research institutions where required",
    ],
    documentation: [
      "Project-level description of the technological objective and uncertainty",
      "Timesheets or time-allocation records for personnel engaged in the research",
      "Cost schedule reconciling qualifying expenditure to the general ledger",
      "Supplier invoices for consumables, prototypes, and testing services",
      "Contracts with local research institutions where services were outsourced",
    ],
    blmcSupport:
      "BLMC builds the qualifying-expenditure schedule, drafts the project narratives that justify each cost line, and keeps the evidence reconciled to your books so your accountant can sign off without rebuilding the file.",
    source: {
      name: "Official Gazette — RA 11534",
      url: "https://www.officialgazette.gov.ph/2021/03/26/republic-act-no-11534/",
    },
  },
  {
    slug: "general-research-development-deduction",
    name: "General Deduction for Research and Development Expenditure",
    shortName: "General R&D deduction",
    category: "Tax deduction",
    agency: "BIR",
    agencySlug: "bir",
    law: "National Internal Revenue Code, Section 34(A)",
    benefit: "Full deduction as ordinary expense, or amortisation over not less than 60 months",
    duration: "Ongoing",
    status: "Ongoing",
    summary:
      "Outside the registered-project incentive regimes, the Tax Code allows research and development expenditure to be treated as an ordinary and necessary business expense in the year paid or incurred, or deferred and amortised over a period of not less than sixty months.",
    detail:
      "This provision matters for companies that are not registered with an investment promotion agency but still carry out genuine development work. The election between immediate deduction and deferral is a planning decision: immediate deduction helps profitable entities reduce current tax, while deferral can suit companies whose commercial revenue from the research arrives in later periods. Expenditure for the acquisition or improvement of land or depreciable property, and costs incurred to ascertain the existence of natural resources, fall outside the provision and are treated under the ordinary capital allowance rules instead.",
    eligibility: [
      "Philippine taxpayer incurring research or development expenditure in trade or business",
      "Expenditure not chargeable to a capital account for land or depreciable property",
      "Consistent treatment applied once the deferral election is made",
    ],
    documentation: [
      "General ledger mapping of research and development cost accounts",
      "Supporting invoices, payroll records, and contracts",
      "Written basis for the election between expensing and deferral",
      "Amortisation schedule where deferral is elected",
    ],
    blmcSupport:
      "BLMC organises the cost trail and prepares the schedules your CPA needs to support either treatment, including the amortisation working papers where deferral is elected.",
    source: {
      name: "bir.gov.ph — Tax Code",
      url: "https://www.bir.gov.ph/",
    },
  },
  {
    slug: "income-tax-holiday",
    name: "Income Tax Holiday for Registered Projects",
    shortName: "Income Tax Holiday",
    category: "Tax holiday",
    agency: "BOI · PEZA",
    agencySlug: "boi",
    law: "CREATE Act (RA 11534), as amended",
    benefit: "Exemption from corporate income tax on the registered activity",
    duration: "Typically four to seven years, based on industry tier and location",
    status: "Ongoing",
    summary:
      "Projects registered under the Strategic Investment Priority Plan may receive an income tax holiday on income derived from the registered activity, with the period determined by the activity tier and whether the project is located outside congested urban areas.",
    detail:
      "The income tax holiday is granted first in the incentive sequence and is followed by either the special corporate income tax or the enhanced deductions regime, depending on classification and election. Two practical points drive most disputes. First, the exemption covers income from the registered activity only, so revenue from unregistered lines must be separately accounted for. Second, the holiday clock starts from the date of actual commercial operations stated in the certificate of registration, not from incorporation or from first revenue. Research-intensive companies often find that documentation built for the holiday period becomes the base file for later R&D deduction claims.",
    eligibility: [
      "Project listed in the Strategic Investment Priority Plan",
      "Registered with the Board of Investments, PEZA, or another investment promotion agency",
      "Compliance with the terms in the certificate of registration",
      "Separate accounting for registered and unregistered activities",
    ],
    documentation: [
      "Certificate of registration and specific terms and conditions",
      "Evidence of the start of commercial operations",
      "Segregated revenue and cost reporting by activity",
      "Annual reports filed with the investment promotion agency",
    ],
    blmcSupport:
      "BLMC maintains the activity segregation workbook and the annual reporting pack so the holiday period is defensible and the transition into the enhanced deductions regime is not a scramble.",
    source: {
      name: "boi.gov.ph",
      url: "https://boi.gov.ph/",
    },
  },
  {
    slug: "special-corporate-income-tax",
    name: "Special Corporate Income Tax on Gross Income Earned",
    shortName: "Special corporate income tax",
    category: "Preferential rate",
    agency: "BOI · PEZA",
    agencySlug: "peza",
    law: "CREATE Act (RA 11534), as amended",
    benefit: "Five percent tax on gross income earned in lieu of most national and local taxes",
    duration: "Up to ten years following the income tax holiday",
    status: "Ongoing",
    summary:
      "After the income tax holiday, qualified registered business enterprises may elect a special rate computed on gross income earned from the registered activity, which replaces most national and local taxes for the covered period.",
    detail:
      "Electing this regime is a trade-off. The rate is simple and predictable, but enterprises under it cannot also claim the enhanced deductions — including the additional research and development deduction. Companies with heavy, well-documented research spending frequently model both paths before electing, because a strong R&D cost base can make the enhanced deductions regime the better outcome. The election is also constrained by the terms of the registration, so the modelling should happen with your accountant well before the holiday expires rather than in the filing month.",
    eligibility: [
      "Registered business enterprise that has completed or waived the income tax holiday",
      "Qualified classification under the applicable investment promotion agency rules",
      "Gross income properly attributable to the registered activity",
    ],
    documentation: [
      "Certificate of registration and election documentation",
      "Gross income computation with allowable direct cost schedule",
      "Reconciliation between financial statements and the tax computation",
      "Local tax exemption support where applicable",
    ],
    blmcSupport:
      "BLMC prepares the comparative documentation pack — the R&D cost base under enhanced deductions against the gross income computation — so the election is an informed decision rather than a default.",
    source: {
      name: "peza.gov.ph",
      url: "https://www.peza.gov.ph/",
    },
  },
  {
    slug: "enhanced-deductions-regime",
    name: "Enhanced Deductions Regime",
    shortName: "Enhanced deductions",
    category: "Tax deduction",
    agency: "BOI · PEZA · BIR",
    agencySlug: "boi",
    law: "CREATE Act (RA 11534), as amended",
    benefit: "Bundle of additional deductions including R&D, training, labour, and power",
    duration: "Up to ten years following the income tax holiday",
    status: "Ongoing",
    summary:
      "The enhanced deductions regime is the alternative to the special corporate income tax. It layers a set of additional deductions on top of ordinary business expenses, with research and development among the most valuable for technology-driven enterprises.",
    detail:
      "The regime is best understood as a package rather than a single line. Alongside the additional research and development deduction, it typically includes additional depreciation on qualifying assets, additional deductions for training and for direct local labour, relief on power expense, and an extended carry-over period for net operating losses incurred during the first years of commercial operation. The regime rewards companies that keep granular cost records, because every additional deduction is only as strong as the schedule supporting it. Enterprises that treat documentation as a year-end exercise routinely leave portions of the package unclaimed simply because the underlying data was never captured at the transaction level.",
    eligibility: [
      "Registered business enterprise eligible to elect enhanced deductions",
      "Costs traceable to the registered project and its direct activities",
      "Accounting system capable of segregating each additional deduction category",
    ],
    documentation: [
      "Separate schedules for each additional deduction claimed",
      "Fixed asset register supporting additional depreciation",
      "Payroll analysis identifying direct local labour",
      "Training records and R&D project documentation",
      "Utility records supporting power expense claims",
    ],
    blmcSupport:
      "BLMC sets up the schedule structure once, then maintains it each period so every category in the package is supported rather than only the easy ones.",
    source: {
      name: "Official Gazette — RA 11534",
      url: "https://www.officialgazette.gov.ph/2021/03/26/republic-act-no-11534/",
    },
  },
  {
    slug: "accelerated-depreciation-rd-assets",
    name: "Additional Depreciation on Research Assets and Facilities",
    shortName: "Additional depreciation",
    category: "Tax deduction",
    agency: "BOI · PEZA",
    agencySlug: "boi",
    law: "CREATE Act (RA 11534), enhanced deductions regime",
    benefit: "Additional depreciation allowance on qualifying buildings and machinery",
    duration: "Over the useful life of the qualifying asset",
    status: "Ongoing",
    summary:
      "Enterprises under the enhanced deductions regime may claim an additional depreciation allowance on buildings and on machinery and equipment used directly in the registered activity, including laboratory and testing assets.",
    detail:
      "The additional allowance is expressed as a percentage uplift on the depreciation already recognised, with a higher rate typically applied to machinery and equipment than to buildings. For research-intensive operations the practical constraint is asset tagging: a testing rig used across both registered and unregistered production has to be apportioned on a documented basis, and a fixed asset register that records only cost and useful life will not support the claim. Capturing location, function, and registered-activity usage at the point of acquisition avoids reconstructing the analysis years later.",
    eligibility: [
      "Registered business enterprise under the enhanced deductions regime",
      "Asset used directly and exclusively in the registered activity, or apportioned on a documented basis",
      "Asset properly capitalised and depreciated under the applicable standards",
    ],
    documentation: [
      "Fixed asset register with function and location tagging",
      "Purchase invoices and import documents for qualifying assets",
      "Depreciation schedules showing the base and the additional allowance",
      "Usage basis for assets shared across activities",
    ],
    blmcSupport:
      "BLMC reviews the fixed asset register against the registered activity, flags assets missing the tagging needed to claim, and prepares the depreciation schedules.",
    source: {
      name: "boi.gov.ph",
      url: "https://boi.gov.ph/",
    },
  },
  {
    slug: "duty-exemption-capital-equipment",
    name: "Customs Duty Exemption on Capital Equipment and Materials",
    shortName: "Duty exemption",
    category: "Duty and VAT relief",
    agency: "BOI · PEZA · Bureau of Customs",
    agencySlug: "peza",
    law: "CREATE Act (RA 11534), as amended",
    benefit: "Exemption from customs duty on qualifying imported equipment and inputs",
    duration: "Within the incentive period stated in the registration",
    status: "Ongoing",
    summary:
      "Registered enterprises may import capital equipment, raw materials, spare parts, and accessories used directly in the registered activity free of customs duty, subject to endorsement by the investment promotion agency.",
    detail:
      "Laboratory instruments, pilot-line machinery, and test equipment for a registered research programme commonly fall within scope where the import is endorsed and the equipment is demonstrably used in the registered activity. The exemption carries a tail: disposal, transfer, or change of use within the prescribed retention period can trigger repayment of the duty foregone. Enterprises that maintain a simple disposal log linked to the import records avoid unpleasant surprises when equipment is retired or moved between sites.",
    eligibility: [
      "Registered business enterprise with a valid certificate of registration",
      "Equipment or inputs directly and reasonably needed for the registered activity",
      "Prior endorsement or approval from the investment promotion agency",
      "Compliance with retention and use conditions after importation",
    ],
    documentation: [
      "Import entry documents and agency endorsement",
      "Equipment specification and intended use statement",
      "Asset register entries linking imports to the registered activity",
      "Disposal or transfer log covering the retention period",
    ],
    blmcSupport:
      "BLMC maintains the import-to-asset traceability file so each duty-exempt item can be matched to its endorsement, its location, and its use in the registered activity.",
    source: {
      name: "peza.gov.ph",
      url: "https://www.peza.gov.ph/",
    },
  },
  {
    slug: "vat-zero-rating-local-purchases",
    name: "VAT Zero-Rating on Local Purchases",
    shortName: "VAT zero-rating",
    category: "Duty and VAT relief",
    agency: "BIR · Investment promotion agency",
    agencySlug: "bir",
    law: "CREATE Act (RA 11534), as amended",
    benefit: "Zero-rated VAT treatment on qualifying local purchases",
    duration: "Within the incentive period stated in the registration",
    status: "Ongoing",
    summary:
      "Local purchases of goods and services directly attributable to the registered activity may qualify for VAT zero-rating, improving working capital for enterprises that would otherwise accumulate input VAT.",
    detail:
      "The operative test is direct attribution to the registered project. Contracted laboratory services, prototype fabrication, and specialised testing performed by local suppliers commonly qualify where the connection is documented, while general administrative purchases usually do not. Because the benefit is claimed at the supplier level, most of the practical work is administrative: keeping certifications current, briefing suppliers, and holding the evidence that ties each invoice to the registered activity.",
    eligibility: [
      "Registered business enterprise entitled to VAT incentives",
      "Purchase directly and exclusively attributable to the registered activity",
      "Supporting certification provided to the local supplier",
    ],
    documentation: [
      "Investment promotion agency certification of entitlement",
      "Supplier invoices annotated to the registered activity",
      "Purchase-to-project mapping for contracted research services",
      "Records supporting direct attribution rather than general use",
    ],
    blmcSupport:
      "BLMC keeps the purchase-to-project mapping current and prepares the supporting file so the direct attribution test can be evidenced on request.",
    source: {
      name: "bir.gov.ph",
      url: "https://www.bir.gov.ph/",
    },
  },
  {
    slug: "training-expense-deduction",
    name: "Additional Deduction for Training Expenses",
    shortName: "Training deduction",
    category: "Tax deduction",
    agency: "BOI · PEZA",
    agencySlug: "boi",
    law: "CREATE Act (RA 11534), enhanced deductions regime",
    benefit: "Additional deduction on qualifying training expenditure",
    duration: "For the duration of the enhanced deductions regime",
    status: "Ongoing",
    summary:
      "Training costs incurred to upskill Filipino employees engaged in the registered activity attract an additional deduction under the enhanced deductions regime, subject to the applicable certification requirements.",
    detail:
      "For research-driven companies this deduction often runs alongside the R&D claim, because the same engineers receiving specialised instrument or methodology training are the ones charging time to development projects. The two claims draw on overlapping records but are evidenced differently: training needs attendance and provider documentation, while R&D needs project and time allocation. Capturing both at the same time is far easier than separating them retrospectively.",
    eligibility: [
      "Registered business enterprise under the enhanced deductions regime",
      "Training provided to Filipino employees engaged in the registered activity",
      "Compliance with applicable certification or accreditation requirements",
    ],
    documentation: [
      "Training programme outlines and provider details",
      "Attendance records tied to named employees",
      "Invoices and proof of payment for training delivered",
      "Link between trained personnel and the registered activity",
    ],
    blmcSupport:
      "BLMC captures training and research evidence in one intake so the two deductions are supported without duplicating effort or double-counting cost.",
    source: {
      name: "boi.gov.ph",
      url: "https://boi.gov.ph/",
    },
  },
  {
    slug: "dost-research-grant-programmes",
    name: "DOST Research and Development Grant Programmes",
    shortName: "DOST grants",
    category: "Grant",
    agency: "DOST",
    agencySlug: "dost",
    law: "DOST council programme guidelines",
    benefit: "Competitive grant funding for qualified research programmes",
    duration: "Per programme cycle",
    status: "Rolling and cyclical calls",
    summary:
      "DOST councils fund research and development across industry, energy, emerging technology, agriculture, and health. Grant funding is separate from tax incentives and is awarded through competitive calls with their own reporting obligations.",
    detail:
      "Grants and tax incentives are often pursued together, but they are evaluated on different criteria and require different files. A grant application is judged on scientific merit, capability, and expected impact, while a tax claim is judged on substantiation. There is also an interaction point worth planning for: expenditure funded by a grant may need to be identified separately when computing deductions, so the cost accounting should distinguish grant-funded from self-funded work from the start rather than after both files are built.",
    eligibility: [
      "Qualified institution, enterprise, or consortium under the programme guidelines",
      "Research aligned with the priority areas of the funding council",
      "Capability and counterpart funding as required by the call",
    ],
    documentation: [
      "Research proposal with objectives, methodology, and milestones",
      "Detailed line-item budget and counterpart commitment",
      "Institutional and researcher credentials",
      "Progress and terminal reports during implementation",
    ],
    blmcSupport:
      "BLMC organises proposal annexes, budget schedules, and progress reporting, and keeps grant-funded costs separately identified so the tax position stays clean.",
    source: {
      name: "dost.gov.ph",
      url: "https://www.dost.gov.ph/",
    },
  },
];

export type Industry = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  qualifyingActivities: string[];
  commonCosts: string[];
  documentationFocus: string[];
  watchOuts: string[];
  relatedIncentives: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    headline: "R&D tax incentives for Philippine manufacturers",
    summary:
      "Manufacturing generates more qualifying activity than most operators realise. Process trials, tooling development, and material substitution work frequently meet the experimentation test — but the evidence lives on the production floor rather than in a research department, which is where claims usually break down.",
    qualifyingActivities: [
      "Developing new production processes or significantly improving existing ones",
      "Trialling alternative raw materials to meet cost, supply, or performance targets",
      "Designing and testing new tooling, jigs, or fixtures where the outcome is uncertain",
      "Scaling a laboratory-proven process to pilot or full production line",
      "Reducing defect rates through systematic experimentation rather than routine adjustment",
    ],
    commonCosts: [
      "Salaries of process and production engineers assigned to trial work",
      "Materials consumed and scrapped during experimental runs",
      "Depreciation on pilot lines and test equipment",
      "External laboratory testing and certification services",
      "Utilities consumed by trial production runs where separately measurable",
    ],
    documentationFocus: [
      "Trial run logs recording parameters, hypotheses, and outcomes",
      "Time allocation for engineers split between production and development",
      "Scrap and consumption records tied to specific trials",
      "Engineering change notices linked to the underlying development work",
    ],
    watchOuts: [
      "Routine quality control and calibration are not experimentation",
      "Cosmetic or styling changes without technical uncertainty usually fail the test",
      "Trial materials charged to general production accounts are hard to recover later",
    ],
    relatedIncentives: [
      "additional-deduction-research-development",
      "accelerated-depreciation-rd-assets",
      "duty-exemption-capital-equipment",
    ],
  },
  {
    slug: "software-it",
    name: "Software and IT",
    headline: "R&D tax incentives for software and IT companies",
    summary:
      "Software claims succeed or fail on the uncertainty test. Building a feature with known techniques is not research; building one where the technical approach is genuinely unproven can be. The distinction has to be documented while the work is happening, because commit history alone rarely explains why an approach was uncertain.",
    qualifyingActivities: [
      "Developing algorithms where the technical approach is not established practice",
      "Architecting systems to meet performance or scale constraints with no known solution",
      "Building novel integrations where interoperability outcomes are uncertain",
      "Applied machine learning work involving genuine experimentation, not model reuse",
      "Developing new data processing methods where existing tooling is inadequate",
    ],
    commonCosts: [
      "Salaries of engineers, data scientists, and technical leads on qualifying work",
      "Cloud compute and infrastructure consumed by experimentation",
      "Contracted specialist development services",
      "Depreciation on development hardware and test environments",
    ],
    documentationFocus: [
      "Technical design documents stating the uncertainty at the outset",
      "Sprint or project records that separate research spikes from delivery work",
      "Time allocation by engineer across qualifying and non-qualifying projects",
      "Records of approaches attempted and discarded, which evidence experimentation",
    ],
    watchOuts: [
      "Routine bug fixing, maintenance, and UI work do not qualify",
      "Configuring or integrating off-the-shelf software is generally excluded",
      "Time tracked only at the client-billing level rarely supports a claim",
    ],
    relatedIncentives: [
      "additional-deduction-research-development",
      "special-corporate-income-tax",
      "enhanced-deductions-regime",
    ],
  },
  {
    slug: "electronics-semiconductors",
    name: "Electronics and Semiconductors",
    headline: "R&D tax incentives for electronics and semiconductor firms",
    summary:
      "Electronics manufacturing services and semiconductor assembly operations carry some of the clearest qualifying activity in the country — process development, yield improvement, and test engineering are experimental by nature. The documentation challenge is volume, not eligibility.",
    qualifyingActivities: [
      "Developing assembly or packaging processes for new device geometries",
      "Yield improvement programmes involving controlled experimentation",
      "Designing and validating new test methodologies and fixtures",
      "Qualifying new materials, substrates, or bonding techniques",
      "Reliability engineering to resolve failure modes with unknown causes",
    ],
    commonCosts: [
      "Process, test, and reliability engineering salaries",
      "Wafers, substrates, and materials consumed in qualification runs",
      "Depreciation on metrology, test, and characterisation equipment",
      "External failure analysis and certification services",
    ],
    documentationFocus: [
      "Design of experiments records with hypotheses and measured outcomes",
      "Qualification run reports and failure analysis findings",
      "Engineer time allocation across production support and development",
      "Equipment usage logs supporting apportioned depreciation",
    ],
    watchOuts: [
      "Routine production monitoring and statistical process control are not R&D",
      "Customer-directed work may raise questions about who bears the technical risk",
      "High trial volume makes retrospective reconstruction impractical — capture as you go",
    ],
    relatedIncentives: [
      "additional-deduction-research-development",
      "accelerated-depreciation-rd-assets",
      "duty-exemption-capital-equipment",
      "special-corporate-income-tax",
    ],
  },
  {
    slug: "food-beverage",
    name: "Food and Beverage",
    headline: "R&D tax incentives for food and beverage manufacturers",
    summary:
      "Reformulation, shelf-life extension, and processing improvements often involve real technical uncertainty, particularly where nutritional, safety, or stability targets must be met simultaneously. Recipe variation on its own, without a technological problem to solve, generally does not qualify.",
    qualifyingActivities: [
      "Reformulating products to meet nutritional or regulatory targets while preserving stability",
      "Developing processing methods that extend shelf life without additives",
      "Substituting ingredients where functional performance is uncertain",
      "Developing packaging systems that measurably change product preservation",
      "Scaling laboratory formulations to continuous production",
    ],
    commonCosts: [
      "Food technologist and process engineer salaries",
      "Ingredients and packaging consumed in development batches",
      "Laboratory analysis, microbiological, and shelf-life testing",
      "Depreciation on pilot plant and laboratory equipment",
    ],
    documentationFocus: [
      "Formulation trial records with variables and measured results",
      "Shelf-life and stability study reports",
      "Batch records distinguishing development runs from commercial production",
      "Technologist time allocation across projects",
    ],
    watchOuts: [
      "Flavour variants without a technological problem generally do not qualify",
      "Routine sensory panels and market testing are excluded",
      "Development batches sold commercially need careful cost treatment",
    ],
    relatedIncentives: [
      "additional-deduction-research-development",
      "accelerated-depreciation-rd-assets",
      "training-expense-deduction",
    ],
  },
  {
    slug: "agriculture-agritech",
    name: "Agriculture and Agritech",
    headline: "R&D tax incentives for agriculture and agritech ventures",
    summary:
      "Field trials, post-harvest technology, and precision agriculture systems all generate qualifying activity. Agricultural research often runs across seasons, which makes consistent multi-period documentation more important here than in most sectors.",
    qualifyingActivities: [
      "Field trials testing cultivation methods under controlled comparison",
      "Developing post-harvest handling or storage technologies to reduce losses",
      "Building and validating precision agriculture sensing or analytics systems",
      "Developing feed, input, or treatment formulations with uncertain outcomes",
      "Adapting proven techniques to local soil, climate, or pest conditions where results are unknown",
    ],
    commonCosts: [
      "Agronomist, technician, and field staff time on trial work",
      "Inputs consumed in trial plots and controlled comparisons",
      "Laboratory soil, tissue, and residue analysis",
      "Depreciation on sensing, monitoring, and trial equipment",
    ],
    documentationFocus: [
      "Trial protocols with control and treatment design",
      "Season-by-season measurement records and yield data",
      "Cost allocation between commercial production and trial plots",
      "Analysis reports supporting conclusions drawn",
    ],
    watchOuts: [
      "Ordinary commercial farming operations are not research",
      "Multi-season projects need continuity in documentation and staff records",
      "Trial output sold commercially must be accounted for separately",
    ],
    relatedIncentives: [
      "additional-deduction-research-development",
      "dost-research-grant-programmes",
      "accelerated-depreciation-rd-assets",
    ],
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics and Supply Chain",
    headline: "R&D tax incentives for logistics and supply chain operators",
    summary:
      "Logistics claims usually centre on technology rather than transport. Routing algorithms, warehouse automation, and tracking systems built in-house can qualify where the technical approach was genuinely uncertain, while operational improvement on its own does not.",
    qualifyingActivities: [
      "Developing routing or scheduling algorithms beyond established methods",
      "Building warehouse automation or robotics integration with uncertain outcomes",
      "Developing tracking, telemetry, or cold-chain monitoring systems in-house",
      "Creating predictive models for demand or capacity where existing tools are inadequate",
    ],
    commonCosts: [
      "In-house software and systems engineering salaries",
      "Hardware and sensors consumed in prototyping",
      "Cloud infrastructure used for model development and testing",
      "Contracted specialist engineering services",
    ],
    documentationFocus: [
      "Technical specifications stating the problem and why it was uncertain",
      "Development records separating research from configuration work",
      "Engineer time allocation across qualifying projects",
      "Test results comparing approaches attempted",
    ],
    watchOuts: [
      "Process reorganisation without technological development does not qualify",
      "Implementing purchased systems is generally excluded",
      "Efficiency gains alone are not evidence of experimentation",
    ],
    relatedIncentives: [
      "additional-deduction-research-development",
      "general-research-development-deduction",
      "enhanced-deductions-regime",
    ],
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare and Life Sciences",
    headline: "R&D tax incentives for healthcare and life sciences organisations",
    summary:
      "Clinical research, diagnostic development, and medical device work are well suited to incentive claims because the sector already documents heavily for regulatory reasons. The task is usually mapping existing regulatory records onto the tax evidence requirements rather than creating new documentation.",
    qualifyingActivities: [
      "Developing diagnostic assays or testing methodologies",
      "Medical device design and validation work",
      "Clinical study work where the outcome is scientifically uncertain",
      "Developing formulations, delivery methods, or biologic processes",
      "Health informatics development involving novel technical approaches",
    ],
    commonCosts: [
      "Research staff, clinician, and technician time on qualifying work",
      "Reagents, consumables, and study materials",
      "Depreciation on laboratory and diagnostic equipment",
      "Contracted research organisation and laboratory services",
      "Ethics, regulatory, and validation costs tied to the research",
    ],
    documentationFocus: [
      "Study protocols and ethics approvals",
      "Laboratory notebooks and validation reports",
      "Staff time allocation across clinical service and research",
      "Mapping between regulatory submissions and the tax evidence file",
    ],
    watchOuts: [
      "Routine diagnostic service delivery is not research",
      "Clinical staff time must be split credibly between care and research",
      "Externally funded studies need clear treatment of who bears the cost",
    ],
    relatedIncentives: [
      "additional-deduction-research-development",
      "dost-research-grant-programmes",
      "accelerated-depreciation-rd-assets",
    ],
  },
  {
    slug: "engineering-construction",
    name: "Engineering and Construction",
    headline: "R&D tax incentives for engineering and construction firms",
    summary:
      "Qualifying work in construction is project-embedded, which makes it easy to miss. Structural solutions developed for unprecedented conditions, new materials applications, and methods engineering can qualify where the outcome was genuinely uncertain at the outset.",
    qualifyingActivities: [
      "Developing structural or geotechnical solutions for conditions without precedent",
      "Testing new materials or composite systems in application",
      "Methods engineering where the constructability outcome is uncertain",
      "Developing seismic, wind, or environmental performance improvements",
      "Building digital engineering tools in-house to solve unsolved modelling problems",
    ],
    commonCosts: [
      "Design and site engineer time on development work",
      "Materials consumed in mock-ups and physical testing",
      "External structural testing and modelling services",
      "Depreciation on testing and monitoring equipment",
    ],
    documentationFocus: [
      "Design iteration records showing the problem and alternatives considered",
      "Test and mock-up reports with measured results",
      "Time allocation separating routine design from development",
      "Project correspondence establishing the uncertainty at tender or design stage",
    ],
    watchOuts: [
      "Applying standard engineering practice to a new site is not research",
      "Cost or schedule optimisation alone does not qualify",
      "Client-funded development raises questions about who bears the technical risk",
    ],
    relatedIncentives: [
      "additional-deduction-research-development",
      "general-research-development-deduction",
      "accelerated-depreciation-rd-assets",
    ],
  },
];

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  sections: GuideSection[];
};

export const GUIDES: Guide[] = [
  {
    slug: "create-act-rd-incentives-explained",
    title: "CREATE Act R&D incentives explained",
    description:
      "How the CREATE Act framework treats research and development, how the incentive sequence works, and where the additional R&D deduction fits.",
    readTime: "8 min read",
    sections: [
      {
        heading: "What CREATE changed",
        paragraphs: [
          "The Corporate Recovery and Tax Incentives for Enterprises Act rebuilt the Philippine incentive system around a single principle: incentives are performance-based, time-bound, targeted, and transparent. Instead of open-ended entitlements tied to registration status, enterprises now receive a defined sequence of benefits linked to a registered project and reported centrally.",
          "For research-intensive companies the most consequential change was the creation of the enhanced deductions regime, which packages an additional deduction on research and development expenditure alongside relief for training, labour, depreciation, and power. Subsequent amendments have refined rates and administration, so the current text of the implementing regulations always governs.",
        ],
      },
      {
        heading: "The incentive sequence",
        paragraphs: [
          "Registered projects generally begin with an income tax holiday, whose length depends on the activity tier and location. When the holiday ends, the enterprise moves to either the special corporate income tax computed on gross income earned, or the enhanced deductions regime.",
          "This election is the single most important decision for a company with meaningful research spending, because the additional R&D deduction is only available under enhanced deductions. Modelling both paths requires a credible estimate of your qualifying expenditure — which in turn requires the documentation to exist before the decision point, not after.",
        ],
      },
      {
        heading: "What counts as research and development",
        paragraphs: [
          "The common thread across incentive regimes is systematic work directed at resolving scientific or technological uncertainty. Two tests matter in practice. First, was there a genuine technical unknown at the outset that a competent professional in the field could not resolve from existing knowledge? Second, was the work systematic — a structured attempt to resolve that unknown, rather than trial and error without method?",
        ],
        list: [
          "Development of new or significantly improved products, processes, or materials",
          "Work to overcome a technical obstacle where the solution was not readily deducible",
          "Systematic experimentation with recorded hypotheses and outcomes",
          "Scaling and validation work where the outcome remained uncertain",
        ],
      },
      {
        heading: "What generally does not count",
        list: [
          "Routine quality control, testing, and calibration",
          "Cosmetic, styling, or market-driven changes without technical uncertainty",
          "Market research, feasibility studies, and commercial planning",
          "Routine software maintenance, configuration, and bug fixing",
          "Adoption of established technology without adaptation problems",
        ],
      },
      {
        heading: "Where claims actually fail",
        paragraphs: [
          "In our experience the technical merit of the work is rarely the issue. Claims fail because the cost trail cannot be reconstructed, because engineer time was never allocated to projects, or because the technical narrative was written a year after the fact by someone who was not in the room. The remedy is unglamorous: capture the evidence in the period it arises and reconcile it to the ledger each quarter.",
        ],
      },
    ],
  },
  {
    slug: "rd-tax-credit-eligibility-checklist",
    title: "R&D tax credit eligibility checklist",
    description:
      "A practical checklist to assess whether your projects and your records can support a Philippine R&D incentive claim.",
    readTime: "6 min read",
    sections: [
      {
        heading: "Start with the project, not the cost",
        paragraphs: [
          "Eligibility is decided at the project level. Before touching the ledger, list every initiative from the period where the technical outcome was uncertain when work began. If a project cannot be described in terms of an unknown that had to be resolved, no amount of cost analysis will save it.",
        ],
      },
      {
        heading: "Project eligibility questions",
        list: [
          "Was there a specific scientific or technological uncertainty at the outset?",
          "Could a competent professional in the field have resolved it from published knowledge?",
          "Was the work systematic, with a method and recorded outcomes?",
          "Did the project aim at a new or significantly improved product, process, or material?",
          "Can you name the people who did the work and the period they did it in?",
          "Do contemporaneous records exist — designs, trial logs, test results, or code history?",
        ],
      },
      {
        heading: "Cost eligibility questions",
        list: [
          "Can qualifying salaries be isolated by person and by time period?",
          "Are materials consumed in experimentation distinguishable from production inputs?",
          "Are contracted research services documented with scope and deliverables?",
          "Can equipment used in the research be identified in the fixed asset register?",
          "Does the total reconcile to accounts in the general ledger without adjustment?",
        ],
      },
      {
        heading: "Registration and regime questions",
        list: [
          "Is the enterprise registered with BOI, PEZA, or another investment promotion agency?",
          "Which incentive regime currently applies, and when does it change?",
          "If the special corporate income tax applies, has the enhanced deductions alternative been modelled?",
          "Are registered and unregistered activities separately accounted for?",
          "Are annual reporting obligations to the agency current?",
        ],
      },
      {
        heading: "Reading your result",
        paragraphs: [
          "If the project questions are strong but the cost questions are weak, the claim is usually recoverable with focused documentation work in the current period. If the project questions themselves are weak, the honest answer is that the activity may not qualify — and identifying that early is far cheaper than defending it later.",
        ],
      },
    ],
  },
  {
    slug: "qualifying-rd-costs-philippines",
    title: "Qualifying R&D costs in the Philippines",
    description:
      "Which cost categories typically support a research and development claim, how to apportion shared costs, and what to exclude.",
    readTime: "7 min read",
    sections: [
      {
        heading: "Personnel costs",
        paragraphs: [
          "Staff cost is normally the largest component and the one most often understated. The requirement is attribution: you need to show which individuals worked on qualifying projects and for what proportion of their time. A monthly allocation supported by project records is generally workable; an annual estimate produced at filing time is not.",
          "Supervisory and directly supporting time can often be included where the connection to the research is real. Purely administrative and commercial time is excluded.",
        ],
      },
      {
        heading: "Materials and consumables",
        paragraphs: [
          "Materials consumed or transformed in experimentation typically qualify. The practical difficulty is that trial materials are usually drawn from the same inventory as production stock, so unless issues are coded to a project at the point of withdrawal, the cost is effectively invisible by year end.",
        ],
        list: [
          "Raw materials consumed in trial and qualification runs",
          "Prototype components and fabrication costs",
          "Scrap and rework generated by experimental runs",
          "Laboratory consumables and reagents",
        ],
      },
      {
        heading: "Contracted services",
        paragraphs: [
          "Payments to third parties for research services, testing, and analysis are commonly claimable, subject to the rules of the specific incentive regime — some require the provider to be a local research institution. Contracts should state the technical scope, not just a fee, because the scope is what evidences the nature of the work.",
        ],
      },
      {
        heading: "Equipment and facilities",
        paragraphs: [
          "Equipment used in research is generally relieved through depreciation rather than immediate deduction, with an additional allowance available under the enhanced deductions regime. Assets shared between research and production need a documented apportionment basis — usage hours, dedicated capacity, or another measure you can evidence consistently.",
        ],
      },
      {
        heading: "Commonly excluded",
        list: [
          "Land and buildings acquisition cost",
          "General administrative overhead not attributable to the research",
          "Market research, advertising, and commercial launch costs",
          "Patent filing and legal protection costs, in most regimes",
          "Interest and financing charges",
        ],
      },
      {
        heading: "The reconciliation discipline",
        paragraphs: [
          "Whatever categories you claim, the total must tie back to the general ledger. A schedule that cannot be reconciled to the books is the fastest route to a disallowed claim, because the reviewer's first step is almost always to trace the total to the accounts.",
        ],
      },
    ],
  },
  {
    slug: "rd-documentation-requirements",
    title: "R&D documentation requirements",
    description:
      "The evidence pack that supports a Philippine R&D incentive claim, and how to keep it current without disrupting delivery work.",
    readTime: "7 min read",
    sections: [
      {
        heading: "Two files, one story",
        paragraphs: [
          "Every defensible claim consists of a technical file and a financial file that tell the same story. The technical file explains what was uncertain and how the work addressed it. The financial file shows what it cost and where that cost sits in the accounts. Reviewers move between the two, so inconsistencies between them are what draw questions.",
        ],
      },
      {
        heading: "The technical file",
        list: [
          "Project register listing each qualifying project with start and end dates",
          "Statement of the technological uncertainty for each project",
          "Description of the systematic approach taken to resolve it",
          "Contemporaneous evidence: trial logs, test reports, design iterations, commit history",
          "Record of approaches attempted and abandoned",
          "Named personnel and their role in the work",
        ],
      },
      {
        heading: "The financial file",
        list: [
          "Qualifying expenditure schedule by project and cost category",
          "Time allocation records supporting claimed personnel cost",
          "Materials issue records coded to projects",
          "Contracts and invoices for external services",
          "Fixed asset register extract with usage basis for shared assets",
          "Reconciliation from the schedule to the general ledger",
        ],
      },
      {
        heading: "Compliance and registration records",
        list: [
          "Certificate of registration and terms of the incentive granted",
          "Segregation of registered and unregistered activity",
          "Annual reports filed with the investment promotion agency",
          "Correspondence log with BIR and the agency",
        ],
      },
      {
        heading: "Keeping it current",
        paragraphs: [
          "The realistic cadence is quarterly. Each quarter, refresh the time allocations, code the materials, update the project narratives with what actually happened, and reconcile to the trial balance. This takes hours per quarter when done routinely, and weeks when deferred to year end — which is the single clearest predictor of whether a claim survives review intact.",
        ],
      },
    ],
  },
  {
    slug: "preparing-for-a-bir-audit",
    title: "Preparing for a BIR review of your R&D claim",
    description:
      "What examiners typically ask for, how to structure the response, and how to keep the audit trail intact from the start.",
    readTime: "6 min read",
    sections: [
      {
        heading: "Assume the file will be read by a stranger",
        paragraphs: [
          "The person reviewing your claim will not have met your engineers and will not know your product. Everything they need has to be legible from the file itself. That standard — could a competent outsider follow this without asking us anything — is the right test to apply before a claim is filed rather than after a notice arrives.",
        ],
      },
      {
        heading: "What is typically requested",
        list: [
          "Breakdown of research and development expenditure by cost type and project",
          "Reconciliation of the claim to the audited financial statements",
          "Payroll records and evidence of time allocation",
          "Contracts and invoices for external research services",
          "Technical descriptions of the projects claimed",
          "Certificate of registration and incentive terms where applicable",
        ],
      },
      {
        heading: "How to structure the response",
        paragraphs: [
          "Lead with the reconciliation. If the reviewer can see immediately that the claimed total ties to the accounts, the rest of the review is about substance rather than arithmetic. Then present project by project, with the technical narrative and its cost schedule together rather than in separate annexes the reader has to cross-reference.",
        ],
      },
      {
        heading: "The three recurring weak points",
        list: [
          "Time allocation produced retrospectively with no contemporaneous support",
          "Materials cost estimated as a percentage rather than traced to trials",
          "Technical narratives written in marketing language rather than describing uncertainty",
        ],
      },
      {
        heading: "Where BLMC fits",
        paragraphs: [
          "BLMC maintains the file in a review-ready state throughout the year and handles the compilation and correspondence tracking when a request arrives. Filing positions and representations remain with your accountant or tax counsel, who are the parties of record.",
        ],
      },
    ],
  },
  {
    slug: "boi-vs-peza-registration",
    title: "BOI and PEZA registration compared",
    description:
      "How the two main investment promotion agencies differ in scope, location requirements, and what each expects from registered enterprises.",
    readTime: "6 min read",
    sections: [
      {
        heading: "The basic distinction",
        paragraphs: [
          "PEZA registration is tied to location: the enterprise operates inside a proclaimed economic zone, whether a manufacturing zone or an IT park. BOI registration is not location-bound in the same way and covers projects listed in the Strategic Investment Priority Plan operating outside the zones, with additional benefits available for projects in less developed areas.",
          "Both routes can lead to broadly comparable incentive packages under the CREATE framework. The practical differences show up in administration, reporting rhythm, and the physical constraints of zone operation.",
        ],
      },
      {
        heading: "Where PEZA tends to suit",
        list: [
          "Export-oriented manufacturing needing zone infrastructure and customs facilitation",
          "IT and business services operating from registered IT parks and buildings",
          "Operations that benefit from consolidated zone-level administration",
        ],
      },
      {
        heading: "Where BOI tends to suit",
        list: [
          "Projects that must operate outside economic zones for supply chain or resource reasons",
          "Activities listed in the Strategic Investment Priority Plan serving the domestic market",
          "Projects locating in less developed areas where additional benefits apply",
        ],
      },
      {
        heading: "What both expect",
        list: [
          "Clear separation between registered and unregistered activity",
          "Annual reporting on project performance against commitments",
          "Records supporting each incentive actually availed",
          "Compliance with the specific terms in the certificate of registration",
        ],
      },
      {
        heading: "The R&D angle",
        paragraphs: [
          "Registration route matters less for research claims than the regime election that follows. Under either agency, the additional R&D deduction becomes available only under the enhanced deductions regime, so a research-intensive enterprise should be building its qualifying expenditure evidence well before that election is due — regardless of which agency holds the registration.",
        ],
      },
    ],
  },
];

export type Deadline = {
  title: string;
  timing: string;
  applies: string;
  detail: string;
  agencySlug: string;
};

export const DEADLINES: Deadline[] = [
  {
    title: "Annual income tax return",
    timing: "On or before April 15 for calendar-year taxpayers",
    applies: "All corporate taxpayers",
    detail:
      "The annual return is where research and development deductions are claimed and where supporting schedules and audited financial statements are attached. Fiscal-year taxpayers file on the fifteenth day of the fourth month following the close of the fiscal year.",
    agencySlug: "bir",
  },
  {
    title: "Quarterly income tax returns",
    timing: "Within 60 days after the close of each of the first three quarters",
    applies: "All corporate taxpayers",
    detail:
      "Quarterly filings are the natural checkpoint for keeping the research documentation current. Enterprises that refresh time allocations and cost coding at each quarter avoid rebuilding the entire file in April.",
    agencySlug: "bir",
  },
  {
    title: "Annual tax incentives report under TIMTA",
    timing: "Within 30 calendar days from the statutory deadline for filing the annual return",
    applies: "Registered business enterprises availing of incentives",
    detail:
      "The Tax Incentives Management and Transparency Act requires registered enterprises to report incentives availed to their investment promotion agency, which consolidates the data for the Fiscal Incentives Review Board. Figures reported here should agree with the tax return.",
    agencySlug: "firb",
  },
  {
    title: "Investment promotion agency annual report",
    timing: "As prescribed in the certificate of registration, generally annually",
    applies: "BOI and PEZA registered enterprises",
    detail:
      "Registered enterprises report on project performance, employment, investment, and export commitments. Reporting formats and due dates are set by the agency and stated in the registration terms.",
    agencySlug: "boi",
  },
  {
    title: "Audited financial statements",
    timing: "Filed with the annual income tax return, and with the SEC per its schedule",
    applies: "Corporations meeting the audit threshold",
    detail:
      "The audited statements are the anchor for any reconciliation of claimed research expenditure. Where research cost is disclosed or segregated in the notes, the tax schedule should tie to that disclosure without unexplained differences.",
    agencySlug: "bir",
  },
  {
    title: "Registration of books of accounts",
    timing: "Before use, and renewed as required for manual books",
    applies: "All registered taxpayers",
    detail:
      "Properly registered books underpin every substantiation argument. Where project-level cost coding is introduced for research tracking, it should be reflected in the registered chart of accounts rather than kept only in a side spreadsheet.",
    agencySlug: "bir",
  },
  {
    title: "Recommended internal documentation cycle",
    timing: "Quarterly",
    applies: "Any enterprise building an R&D claim",
    detail:
      "Not a statutory deadline, but the cadence that determines whether a claim holds together. Each quarter: refresh time allocations, code materials to projects, update project narratives, and reconcile the qualifying expenditure schedule to the trial balance.",
    agencySlug: "bir",
  },
];

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: "CREATE Act",
    definition:
      "Republic Act 11534, the Corporate Recovery and Tax Incentives for Enterprises Act, which restructured corporate income tax rates and the fiscal incentive system into a performance-based, time-bound, targeted, and transparent framework.",
  },
  {
    term: "Registered business enterprise",
    definition:
      "An entity registered with an investment promotion agency for a specific project or activity, entitled to incentives on income derived from that registered activity only.",
  },
  {
    term: "Income tax holiday",
    definition:
      "A period of exemption from corporate income tax on income from a registered activity, granted first in the incentive sequence and typically running four to seven years depending on tier and location.",
  },
  {
    term: "Special corporate income tax",
    definition:
      "A preferential rate applied to gross income earned from the registered activity, taken in lieu of most national and local taxes. Enterprises under this regime cannot also claim enhanced deductions.",
  },
  {
    term: "Enhanced deductions regime",
    definition:
      "The alternative to the special corporate income tax, providing additional deductions for research and development, training, labour, depreciation, power, and related categories.",
  },
  {
    term: "Qualifying expenditure",
    definition:
      "Cost that meets the tests for inclusion in a research and development claim, traceable to a qualifying project and reconcilable to the general ledger.",
  },
  {
    term: "Technological uncertainty",
    definition:
      "A technical unknown that a competent professional in the field could not resolve from existing published knowledge. Its presence at the outset of a project is the core eligibility test.",
  },
  {
    term: "Systematic investigation",
    definition:
      "Structured work with a method, recorded hypotheses, and measured outcomes, as distinct from unstructured trial and error.",
  },
  {
    term: "TIMTA",
    definition:
      "The Tax Incentives Management and Transparency Act, Republic Act 10708, which requires registered enterprises to report incentives availed so that the cost of incentives to government can be monitored.",
  },
  {
    term: "Strategic Investment Priority Plan",
    definition:
      "The list of activities eligible for incentives, setting the tiers that determine the length of the income tax holiday and the incentive package available.",
  },
  {
    term: "Investment promotion agency",
    definition:
      "A government body authorised to register projects and grant incentives, including the Board of Investments and the Philippine Economic Zone Authority.",
  },
  {
    term: "Fiscal Incentives Review Board",
    definition:
      "The oversight body responsible for policy on the grant and administration of tax incentives across investment promotion agencies.",
  },
  {
    term: "Gross income earned",
    definition:
      "The base for the special corporate income tax, computed as revenue from the registered activity less allowable direct costs as defined by the applicable rules.",
  },
  {
    term: "Certificate of registration",
    definition:
      "The document issued by an investment promotion agency stating the registered activity, the incentives granted, the start of commercial operations, and the conditions attached.",
  },
  {
    term: "Activity segregation",
    definition:
      "Accounting separation of registered from unregistered activities, required so that incentives apply only to income and cost from the registered project.",
  },
  {
    term: "Contemporaneous documentation",
    definition:
      "Evidence created at the time the work was performed rather than reconstructed afterwards. It carries substantially more weight on review than retrospective narratives.",
  },
  {
    term: "Time allocation record",
    definition:
      "The record showing what proportion of each person's time was spent on qualifying projects, and the usual weak point in personnel cost claims.",
  },
  {
    term: "Reconciliation schedule",
    definition:
      "The working paper tying the claimed qualifying expenditure back to accounts in the general ledger and the audited financial statements.",
  },
  {
    term: "Prototype",
    definition:
      "A model built to test whether a technical approach works. Cost of building and testing it usually qualifies; cost of producing it commercially usually does not.",
  },
  {
    term: "Routine testing",
    definition:
      "Quality control, calibration, and conformance checking performed against known standards. It is excluded because no technological uncertainty is being resolved.",
  },
];

export function getIncentive(slug: string) {
  return INCENTIVES.find((item) => item.slug === slug);
}

export function getIndustry(slug: string) {
  return INDUSTRIES.find((item) => item.slug === slug);
}

export function getAgency(slug: string) {
  return AGENCIES.find((item) => item.slug === slug);
}

export function getGuide(slug: string) {
  return GUIDES.find((item) => item.slug === slug);
}
