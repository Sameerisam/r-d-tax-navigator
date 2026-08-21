import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/components/site/brand";
import {
  DirectoryCard,
  PageHero,
  PageLayout,
  ResourceCta,
  SourceNote,
} from "@/components/site/PageShell";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { AGENCIES, INCENTIVES, LAST_REVIEWED } from "@/components/site/resources";
import { breadcrumbSchema, dataCatalogSchema, itemListSchema, pageMeta } from "@/lib/seo";

const path = "/incentives";
const title = "Philippine R&D Tax Incentives Index | BLMC";
const description =
  "Directory of Philippine research and development tax incentives — CREATE Act deductions, income tax holiday, special corporate income tax, duty relief, and DOST grants. Benefit, eligibility, documentation, and official source for every record.";

export const Route = createFileRoute("/incentives/")({
  head: () =>
    pageMeta({
      title,
      description,
      path,
      keywords:
        "R&D tax incentives Philippines, CREATE Act incentives list, BOI PEZA incentives, income tax holiday, enhanced deductions regime, R&D deduction Philippines",
      jsonLd: [
        dataCatalogSchema(),
        itemListSchema({
          name: "Philippine R&D tax incentives index",
          description,
          items: INCENTIVES.map((incentive) => ({
            name: incentive.name,
            url: `${BRAND.url}/incentives/${incentive.slug}`,
          })),
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Incentives", path },
        ]),
      ],
    }),
  component: IncentivesIndex,
});

function IncentivesIndex() {
  const categories = [...new Set(INCENTIVES.map((item) => item.category))];

  return (
    <PageLayout>
      <PageHero
        eyebrow="Incentives index"
        title="Philippine R&D tax incentives — one directory"
        intro="Every research and development incentive available to Philippine businesses, with the governing law, administering agency, benefit, eligibility, and the official source for each record. Maintained by the BLMC research desk."
        crumbs={[{ label: "Incentives" }]}
        stats={[
          { value: String(INCENTIVES.length), label: "Incentives indexed" },
          { value: String(AGENCIES.length), label: "Agencies covered" },
          { value: String(categories.length), label: "Benefit categories" },
          { value: LAST_REVIEWED, label: "Last reviewed" },
        ]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {category} · {INCENTIVES.filter((i) => i.category === category).length}
              </span>
            ))}
          </div>

          <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INCENTIVES.map((incentive) => (
              <StaggerItem key={incentive.slug}>
                <DirectoryCard
                  to={`/incentives/${incentive.slug}`}
                  eyebrow={incentive.category}
                  title={incentive.name}
                  body={incentive.summary}
                  meta={[incentive.agency, incentive.benefit]}
                />
              </StaggerItem>
            ))}
          </Stagger>

          <SourceNote />
        </div>
      </section>

      <ResourceCta />
    </PageLayout>
  );
}
