import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckList,
  NotFoundBlock,
  PageHero,
  PageLayout,
  ResourceCta,
  SourceLink,
  SourceNote,
} from "@/components/site/PageShell";
import {
  AGENCIES,
  DEADLINES,
  getAgency,
  INCENTIVES,
} from "@/components/site/resources";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/agencies/$slug")({
  head: ({ params }) => {
    const agency = getAgency(params.slug);
    if (!agency) {
      return pageMeta({
        title: "Agency not found | BLMC",
        description: "This agency entry is not available.",
        path: `/agencies/${params.slug}`,
      });
    }

    return pageMeta({
      title: `${agency.abbreviation} — ${agency.name} R&D Requirements | BLMC`,
      description: agency.summary,
      path: `/agencies/${agency.slug}`,
      keywords: `${agency.abbreviation} R&D incentives, ${agency.name} requirements, Philippine tax incentive agency`,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "GovernmentOrganization",
          name: agency.name,
          alternateName: agency.abbreviation,
          description: agency.summary,
          url: agency.source.url,
          areaServed: { "@type": "Country", name: "Philippines" },
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Agencies", path: "/agencies" },
          { name: agency.abbreviation, path: `/agencies/${agency.slug}` },
        ]),
      ],
    });
  },
  component: AgencyDetail,
});

function AgencyDetail() {
  const { slug } = Route.useParams();
  const agency = getAgency(slug);

  if (!agency) {
    return (
      <PageLayout>
        <NotFoundBlock label="the agency directory" to="/agencies" />
      </PageLayout>
    );
  }

  const relatedIncentives = INCENTIVES.filter((item) => item.agencySlug === agency.slug);
  const relatedDeadlines = DEADLINES.filter((item) => item.agencySlug === agency.slug);
  const otherAgencies = AGENCIES.filter((item) => item.slug !== agency.slug);

  return (
    <PageLayout>
      <PageHero
        eyebrow={agency.role}
        title={`${agency.name} (${agency.abbreviation})`}
        intro={agency.summary}
        crumbs={[{ label: "Agencies", to: "/agencies" }, { label: agency.abbreviation }]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-start">
            <div>
              <h2 className="font-serif text-2xl text-primary">What this agency handles</h2>
              <div className="mt-4">
                <CheckList items={agency.handles} />
              </div>

              <h2 className="mt-12 font-serif text-2xl text-primary">
                Documents typically requested
              </h2>
              <div className="mt-4">
                <CheckList items={agency.documentsRequested} />
              </div>

              {relatedDeadlines.length ? (
                <>
                  <h2 className="mt-12 font-serif text-2xl text-primary">Related deadlines</h2>
                  <div className="mt-4 space-y-4">
                    {relatedDeadlines.map((deadline) => (
                      <div
                        key={deadline.title}
                        className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                      >
                        <h3 className="text-base font-semibold text-primary">{deadline.title}</h3>
                        <p className="mt-1 text-xs font-medium text-accent">{deadline.timing}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {deadline.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-sm font-semibold text-primary">Official source</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Confirm all requirements directly with the agency before filing.
                </p>
                <div className="mt-3">
                  <SourceLink name={agency.source.name} url={agency.source.url} />
                </div>
              </div>

              {relatedIncentives.length ? (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h2 className="text-sm font-semibold text-primary">Incentives administered</h2>
                  <ul className="mt-3 space-y-2">
                    {relatedIncentives.map((incentive) => (
                      <li key={incentive.slug}>
                        <Link
                          to={`/incentives/${incentive.slug}`}
                          className="text-sm text-muted-foreground transition-colors hover:text-accent"
                        >
                          {incentive.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-sm font-semibold text-primary">Other agencies</h2>
                <ul className="mt-3 space-y-2">
                  {otherAgencies.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/agencies/${item.slug}`}
                        className="text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {item.abbreviation} — {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <SourceNote />
        </div>
      </section>

      <ResourceCta />
    </PageLayout>
  );
}
