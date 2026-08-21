import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CalendarClock, Factory, Landmark, Library } from "lucide-react";
import { SectionHeading, Stagger, StaggerItem } from "./Reveal";
import { DIRECTORY_STATS, LAST_REVIEWED_LABEL } from "./directory-meta";

/** Featured teaser — kept local so this section does not pull the full resources catalog. */
const FEATURED_INCENTIVE = {
  name: "Additional Deduction on Research and Development Expenses",
  benefit: "Up to 100% additional deduction on qualified R&D expense",
  slug: "additional-deduction-research-development",
} as const;

const cards = [
  {
    to: "/incentives",
    icon: Library,
    title: "Incentives index",
    body: "Every Philippine R&D incentive with its governing law, benefit, eligibility, and official source.",
    count: `${DIRECTORY_STATS.incentives} records`,
  },
  {
    to: "/industries",
    icon: Factory,
    title: "Industry directories",
    body: "What qualifies in manufacturing, software, electronics, food, agriculture, logistics, health, and engineering.",
    count: `${DIRECTORY_STATS.industries} sectors`,
  },
  {
    to: "/agencies",
    icon: Landmark,
    title: "Agency requirements",
    body: "What BIR, BOI, PEZA, FIRB, and DOST each handle and the documents they typically request.",
    count: `${DIRECTORY_STATS.agencies} agencies`,
  },
  {
    to: "/guides",
    icon: BookOpen,
    title: "Claim guides",
    body: "CREATE Act explained, eligibility checklist, qualifying costs, documentation, and review preparation.",
    count: `${DIRECTORY_STATS.guides} guides`,
  },
  {
    to: "/deadlines",
    icon: CalendarClock,
    title: "Compliance calendar",
    body: "Filing and reporting dates that shape a claim, plus the quarterly cadence that keeps evidence intact.",
    count: "Updated monthly",
  },
];

export function Directory() {
  return (
    <section id="directory" className="relative bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Research desk"
          title="The Philippine R&D incentives directory"
          intro="A reference index maintained by BLMC — incentives, agencies, industries, and deadlines in one place, with an official source cited for every record."
        />

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {DIRECTORY_STATS.incentives} incentives indexed · {DIRECTORY_STATS.industries} industry
          directories · {DIRECTORY_STATS.glossary} glossary terms · reviewed {LAST_REVIEWED_LABEL}
        </p>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ to, icon: Icon, title, body, count }) => (
            <StaggerItem key={to}>
              <Link
                to={to}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl text-primary">{title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
                <span className="mt-5 flex items-center justify-between text-sm font-medium text-accent">
                  {count}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}

          <StaggerItem>
            <div className="flex h-full flex-col rounded-2xl border border-primary/15 bg-primary p-7 shadow-soft">
              <h3 className="text-xl text-primary-foreground">Most viewed record</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-primary-foreground/70">
                {FEATURED_INCENTIVE.name} — {FEATURED_INCENTIVE.benefit} under the enhanced
                deductions regime.
              </p>
              <Link
                to={`/incentives/${FEATURED_INCENTIVE.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
              >
                Read the record
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
