import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/components/site/data";
import {
  DirectoryCard,
  PageHero,
  PageLayout,
  ResourceCta,
  SourceNote,
} from "@/components/site/PageShell";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { INDUSTRIES, LAST_REVIEWED } from "@/components/site/resources";
import { breadcrumbSchema, itemListSchema, pageMeta } from "@/lib/seo";

const path = "/industries";
const title = "R&D Tax Incentives by Industry — Philippines | BLMC";
const description =
  "Which activities qualify for Philippine R&D tax incentives in manufacturing, software, electronics, food and beverage, agriculture, logistics, healthcare, and engineering — with the costs and documentation each sector needs.";

export const Route = createFileRoute("/industries/")({
  head: () =>
    pageMeta({
      title,
      description,
      path,
      keywords:
        "R&D tax incentive by industry Philippines, manufacturing R&D claim, software R&D tax credit Philippines, qualifying R&D activities",
      jsonLd: [
        itemListSchema({
          name: "Philippine R&D tax incentives by industry",
          description,
          items: INDUSTRIES.map((industry) => ({
            name: industry.name,
            url: `${BRAND.url}/industries/${industry.slug}`,
          })),
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path },
        ]),
      ],
    }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Industry directory"
        title="R&D tax incentives by industry"
        intro="Qualifying activity looks different in every sector. Each directory entry sets out the work that typically qualifies, the costs that usually support a claim, the documentation reviewers expect, and the exclusions that catch companies out."
        crumbs={[{ label: "Industries" }]}
        stats={[
          { value: String(INDUSTRIES.length), label: "Industry directories" },
          { value: "Philippines", label: "Jurisdiction" },
          { value: LAST_REVIEWED, label: "Last reviewed" },
        ]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <StaggerItem key={industry.slug}>
                <DirectoryCard
                  to={`/industries/${industry.slug}`}
                  eyebrow="Industry directory"
                  title={industry.name}
                  body={industry.summary}
                  meta={[
                    `${industry.qualifyingActivities.length} qualifying activities`,
                    `${industry.commonCosts.length} cost categories`,
                  ]}
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
