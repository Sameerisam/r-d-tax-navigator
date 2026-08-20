import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import {
  CheckList,
  NotFoundBlock,
  PageHero,
  PageLayout,
  ResourceCta,
  SourceNote,
} from "@/components/site/PageShell";
import { getIncentive, getIndustry, INDUSTRIES } from "@/components/site/resources";
import { articleSchema, breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/industries/$slug")({
  head: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) {
      return pageMeta({
        title: "Industry not found | BLMC",
        description: "This industry directory is not available.",
        path: `/industries/${params.slug}`,
      });
    }

    return pageMeta({
      title: `${industry.headline} | BLMC`,
      description: industry.summary,
      path: `/industries/${industry.slug}`,
      keywords: `${industry.name} R&D tax incentive Philippines, qualifying R&D activities ${industry.name}, CREATE Act ${industry.name}`,
      jsonLd: [
        articleSchema({
          headline: industry.headline,
          description: industry.summary,
          path: `/industries/${industry.slug}`,
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ]),
      ],
    });
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { slug } = Route.useParams();
  const industry = getIndustry(slug);

  if (!industry) {
    return (
      <PageLayout>
        <NotFoundBlock label="the industry directory" to="/industries" />
      </PageLayout>
    );
  }

  const related = industry.relatedIncentives
    .map((incentiveSlug) => getIncentive(incentiveSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const otherIndustries = INDUSTRIES.filter((item) => item.slug !== industry.slug).slice(0, 4);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Industry directory"
        title={industry.headline}
        intro={industry.summary}
        crumbs={[{ label: "Industries", to: "/industries" }, { label: industry.name }]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-start">
            <div>
              <h2 className="font-serif text-2xl text-primary">
                Activities that typically qualify
              </h2>
              <div className="mt-4">
                <CheckList items={industry.qualifyingActivities} />
              </div>

              <h2 className="mt-12 font-serif text-2xl text-primary">Costs that support a claim</h2>
              <div className="mt-4">
                <CheckList items={industry.commonCosts} />
              </div>

              <h2 className="mt-12 font-serif text-2xl text-primary">
                What your documentation must show
              </h2>
              <div className="mt-4">
                <CheckList items={industry.documentationFocus} />
              </div>

              <div className="mt-12 rounded-2xl border border-border bg-secondary p-7">
                <h2 className="flex items-center gap-2 font-serif text-xl text-primary">
                  <AlertTriangle className="h-4.5 w-4.5 text-accent" aria-hidden="true" />
                  Common exclusions in this sector
                </h2>
                <div className="mt-4">
                  <CheckList items={industry.watchOuts} />
                </div>
              </div>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              {related.length ? (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h2 className="text-sm font-semibold text-primary">
                    Incentives commonly claimed here
                  </h2>
                  <ul className="mt-3 space-y-3">
                    {related.map((incentive) => (
                      <li key={incentive.slug}>
                        <Link
                          to={`/incentives/${incentive.slug}`}
                          className="text-sm font-medium text-card-foreground transition-colors hover:text-accent"
                        >
                          {incentive.shortName}
                        </Link>
                        <p className="mt-0.5 text-xs text-muted-foreground">{incentive.benefit}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-sm font-semibold text-primary">Other industries</h2>
                <ul className="mt-3 space-y-2">
                  {otherIndustries.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/industries/${item.slug}`}
                        className="text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-accent/30 bg-accent-soft p-6">
                <h2 className="text-sm font-semibold text-primary">Not sure what qualifies?</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Work through the eligibility checklist before committing time to a claim file.
                </p>
                <Link
                  to="/guides/rd-tax-credit-eligibility-checklist"
                  className="mt-3 inline-block text-xs font-medium text-accent hover:opacity-80"
                >
                  Open the eligibility checklist
                </Link>
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
