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
import { getAgency, getIncentive, INCENTIVES, INDUSTRIES } from "@/components/site/resources";
import { articleSchema, breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/incentives/$slug")({
  head: ({ params }) => {
    const incentive = getIncentive(params.slug);
    if (!incentive) {
      return pageMeta({
        title: "Incentive not found | BLMC",
        description: "This record is not in the BLMC incentives index.",
        path: `/incentives/${params.slug}`,
      });
    }

    return pageMeta({
      title: `${incentive.name} | Philippine R&D Incentives | BLMC`,
      description: incentive.summary,
      path: `/incentives/${incentive.slug}`,
      keywords: `${incentive.shortName}, ${incentive.law}, ${incentive.agency}, R&D tax incentive Philippines`,
      jsonLd: [
        articleSchema({
          headline: incentive.name,
          description: incentive.summary,
          path: `/incentives/${incentive.slug}`,
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Incentives", path: "/incentives" },
          { name: incentive.shortName, path: `/incentives/${incentive.slug}` },
        ]),
      ],
    });
  },
  component: IncentiveDetail,
});

function IncentiveDetail() {
  const { slug } = Route.useParams();
  const incentive = getIncentive(slug);

  if (!incentive) {
    return (
      <PageLayout>
        <NotFoundBlock label="the incentives index" to="/incentives" />
      </PageLayout>
    );
  }

  const agency = getAgency(incentive.agencySlug);
  const relatedIndustries = INDUSTRIES.filter((industry) =>
    industry.relatedIncentives.includes(incentive.slug),
  );
  const otherIncentives = INCENTIVES.filter(
    (item) => item.slug !== incentive.slug && item.category === incentive.category,
  ).slice(0, 3);

  const facts = [
    { label: "Category", value: incentive.category },
    { label: "Administering body", value: incentive.agency },
    { label: "Governing law", value: incentive.law },
    { label: "Benefit", value: incentive.benefit },
    { label: "Duration", value: incentive.duration },
    { label: "Status", value: incentive.status },
  ];

  return (
    <PageLayout>
      <PageHero
        eyebrow={incentive.category}
        title={incentive.name}
        intro={incentive.summary}
        crumbs={[{ label: "Incentives", to: "/incentives" }, { label: incentive.shortName }]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-start">
            <div>
              <h2 className="font-serif text-2xl text-primary">How this incentive works</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {incentive.detail}
              </p>

              <h2 className="mt-12 font-serif text-2xl text-primary">Eligibility</h2>
              <div className="mt-4">
                <CheckList items={incentive.eligibility} />
              </div>

              <h2 className="mt-12 font-serif text-2xl text-primary">Documentation required</h2>
              <div className="mt-4">
                <CheckList items={incentive.documentation} />
              </div>

              <div className="mt-12 rounded-2xl border border-accent/30 bg-accent-soft p-7">
                <h2 className="font-serif text-xl text-primary">How BLMC supports this claim</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {incentive.blmcSupport}
                </p>
              </div>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-sm font-semibold text-primary">Record summary</h2>
                <dl className="mt-4 space-y-3.5">
                  {facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        {fact.label}
                      </dt>
                      <dd className="mt-0.5 text-sm text-card-foreground">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 border-t border-border pt-4">
                  <SourceLink name={incentive.source.name} url={incentive.source.url} />
                </div>
              </div>

              {agency ? (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h2 className="text-sm font-semibold text-primary">Primary agency</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {agency.name} ({agency.abbreviation}) — {agency.role}.
                  </p>
                  <Link
                    to={`/agencies/${agency.slug}`}
                    className="mt-3 inline-block text-xs font-medium text-accent hover:opacity-80"
                  >
                    View agency requirements
                  </Link>
                </div>
              ) : null}

              {relatedIndustries.length ? (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h2 className="text-sm font-semibold text-primary">Common in these industries</h2>
                  <ul className="mt-3 space-y-2">
                    {relatedIndustries.map((industry) => (
                      <li key={industry.slug}>
                        <Link
                          to={`/industries/${industry.slug}`}
                          className="text-sm text-muted-foreground transition-colors hover:text-accent"
                        >
                          {industry.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {otherIncentives.length ? (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h2 className="text-sm font-semibold text-primary">Related records</h2>
                  <ul className="mt-3 space-y-2">
                    {otherIncentives.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`/incentives/${item.slug}`}
                          className="text-sm text-muted-foreground transition-colors hover:text-accent"
                        >
                          {item.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>
          </div>

          <SourceNote />
        </div>
      </section>

      <ResourceCta />
    </PageLayout>
  );
}
