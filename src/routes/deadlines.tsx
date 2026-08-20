import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarClock } from "lucide-react";
import { PageHero, PageLayout, ResourceCta, SourceNote } from "@/components/site/PageShell";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { AGENCIES, DEADLINES, LAST_REVIEWED } from "@/components/site/resources";
import { BRAND } from "@/components/site/data";
import { breadcrumbSchema, itemListSchema, pageMeta } from "@/lib/seo";

const path = "/deadlines";
const title = "Philippine R&D Tax Compliance Deadlines | BLMC";
const description =
  "Filing and reporting deadlines that affect Philippine R&D tax incentive claims — annual and quarterly income tax returns, TIMTA reporting, investment promotion agency reports, and the documentation cycle that keeps claims defensible.";

export const Route = createFileRoute("/deadlines")({
  head: () =>
    pageMeta({
      title,
      description,
      path,
      keywords:
        "BIR filing deadlines Philippines, TIMTA report deadline, annual income tax return deadline, PEZA BOI annual report, R&D compliance calendar",
      jsonLd: [
        itemListSchema({
          name: "Philippine R&D tax compliance deadlines",
          description,
          items: DEADLINES.map((deadline) => ({
            name: `${deadline.title} — ${deadline.timing}`,
            url: `${BRAND.url}${path}`,
          })),
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Deadlines", path },
        ]),
      ],
    }),
  component: DeadlinesPage,
});

function DeadlinesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Compliance calendar"
        title="R&D tax compliance deadlines in the Philippines"
        intro="The filing and reporting obligations that shape an R&D incentive claim, and the internal cadence that determines whether the supporting evidence still exists when it is needed."
        crumbs={[{ label: "Deadlines" }]}
        stats={[
          { value: String(DEADLINES.length), label: "Obligations tracked" },
          { value: String(AGENCIES.length), label: "Agencies covered" },
          { value: LAST_REVIEWED, label: "Last reviewed" },
        ]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Stagger className="space-y-4">
            {DEADLINES.map((deadline) => {
              const agency = AGENCIES.find((item) => item.slug === deadline.agencySlug);

              return (
                <StaggerItem key={deadline.title}>
                  <article className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:border-accent/50 hover:shadow-lift">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft">
                          <CalendarClock className="h-5 w-5 text-accent" aria-hidden="true" />
                        </span>
                        <div>
                          <h2 className="text-lg text-primary">{deadline.title}</h2>
                          <p className="mt-1 text-sm font-medium text-accent">{deadline.timing}</p>
                        </div>
                      </div>
                      {agency ? (
                        <Link
                          to={`/agencies/${agency.slug}`}
                          className="rounded-full bg-secondary px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-accent"
                        >
                          {agency.abbreviation}
                        </Link>
                      ) : null}
                    </div>
                    <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      Applies to
                    </p>
                    <p className="mt-1 text-sm text-card-foreground">{deadline.applies}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {deadline.detail}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>

          <SourceNote />
        </div>
      </section>

      <ResourceCta
        title="Never rebuild the file in April again"
        body="BLMC keeps time allocations, cost coding, and project narratives current each quarter so filing season is a review rather than a reconstruction."
      />
    </PageLayout>
  );
}
