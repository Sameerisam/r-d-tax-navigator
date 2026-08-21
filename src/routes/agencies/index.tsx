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
import { AGENCIES, LAST_REVIEWED } from "@/components/site/resources";
import { breadcrumbSchema, itemListSchema, pageMeta } from "@/lib/seo";

const path = "/agencies";
const title = "BIR, BOI, PEZA, FIRB & DOST — R&D Incentive Agencies | BLMC";
const description =
  "The Philippine agencies that administer research and development incentives: what each body handles, the documents they request, and the official source for each. BIR, BOI, PEZA, FIRB, and DOST.";

export const Route = createFileRoute("/agencies/")({
  head: () =>
    pageMeta({
      title,
      description,
      path,
      keywords:
        "BIR R&D incentives, BOI registration Philippines, PEZA incentives, FIRB, DOST research grants, Philippine tax incentive agencies",
      jsonLd: [
        itemListSchema({
          name: "Philippine R&D incentive agencies",
          description,
          items: AGENCIES.map((agency) => ({
            name: agency.name,
            url: `${BRAND.url}/agencies/${agency.slug}`,
          })),
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Agencies", path },
        ]),
      ],
    }),
  component: AgenciesIndex,
});

function AgenciesIndex() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Agency directory"
        title="Who administers R&D incentives in the Philippines"
        intro="Five bodies shape how a research and development claim is registered, reported, and reviewed. Each entry sets out what the agency handles and the documents it typically requests."
        crumbs={[{ label: "Agencies" }]}
        stats={[
          { value: String(AGENCIES.length), label: "Agencies covered" },
          { value: "Official", label: "Sources only" },
          { value: LAST_REVIEWED, label: "Last reviewed" },
        ]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {AGENCIES.map((agency) => (
              <StaggerItem key={agency.slug}>
                <DirectoryCard
                  to={`/agencies/${agency.slug}`}
                  eyebrow={agency.abbreviation}
                  title={agency.name}
                  body={agency.summary}
                  meta={[agency.role]}
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
