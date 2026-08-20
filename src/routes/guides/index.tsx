import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/components/site/data";
import { DirectoryCard, PageHero, PageLayout, ResourceCta } from "@/components/site/PageShell";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { GUIDES, LAST_REVIEWED } from "@/components/site/resources";
import { breadcrumbSchema, itemListSchema, pageMeta } from "@/lib/seo";

const path = "/guides";
const title = "R&D Tax Credit Guides — Philippines | BLMC";
const description =
  "Practical guides to Philippine R&D tax incentives: CREATE Act explained, eligibility checklist, qualifying costs, documentation requirements, BIR review preparation, and BOI versus PEZA registration.";

export const Route = createFileRoute("/guides/")({
  head: () =>
    pageMeta({
      title,
      description,
      path,
      keywords:
        "R&D tax credit guide Philippines, CREATE Act guide, R&D eligibility checklist, qualifying R&D costs, BIR audit R&D",
      jsonLd: [
        itemListSchema({
          name: "BLMC R&D tax credit guides",
          description,
          items: GUIDES.map((guide) => ({
            name: guide.title,
            url: `${BRAND.url}/guides/${guide.slug}`,
          })),
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path },
        ]),
      ],
    }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Guides"
        title="R&D tax credit guides for Philippine businesses"
        intro="Reference material written for the people who actually assemble the claim — finance leads, CPAs, and the engineers whose time and trials become the evidence."
        crumbs={[{ label: "Guides" }]}
        stats={[
          { value: String(GUIDES.length), label: "Guides published" },
          { value: "Philippines", label: "Jurisdiction" },
          { value: LAST_REVIEWED, label: "Last reviewed" },
        ]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((guide) => (
              <StaggerItem key={guide.slug}>
                <DirectoryCard
                  to={`/guides/${guide.slug}`}
                  eyebrow="Guide"
                  title={guide.title}
                  body={guide.description}
                  meta={[guide.readTime, `${guide.sections.length} sections`]}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ResourceCta />
    </PageLayout>
  );
}
