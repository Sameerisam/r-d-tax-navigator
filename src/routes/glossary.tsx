import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageLayout, ResourceCta } from "@/components/site/PageShell";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { GLOSSARY, LAST_REVIEWED } from "@/components/site/resources";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

const path = "/glossary";
const title = "R&D Tax Incentive Glossary — Philippines | BLMC";
const description =
  "Plain-language definitions of the terms used in Philippine R&D tax incentive claims: CREATE Act, enhanced deductions regime, TIMTA, qualifying expenditure, technological uncertainty, and more.";

export const Route = createFileRoute("/glossary")({
  head: () =>
    pageMeta({
      title,
      description,
      path,
      keywords:
        "R&D tax glossary Philippines, CREATE Act definitions, TIMTA meaning, enhanced deductions regime, qualifying expenditure definition",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Philippine R&D tax incentive glossary",
          description,
          hasDefinedTerm: GLOSSARY.map((entry) => ({
            "@type": "DefinedTerm",
            name: entry.term,
            description: entry.definition,
          })),
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Glossary", path },
        ]),
      ],
    }),
  component: GlossaryPage,
});

function GlossaryPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Glossary"
        title="R&D tax incentive terms, defined"
        intro="The vocabulary that appears in registration documents, revenue regulations, and review letters — explained without the circular definitions."
        crumbs={[{ label: "Glossary" }]}
        stats={[
          { value: String(GLOSSARY.length), label: "Terms defined" },
          { value: "Philippines", label: "Jurisdiction" },
          { value: LAST_REVIEWED, label: "Last reviewed" },
        ]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Stagger className="space-y-4">
            {GLOSSARY.map((entry) => (
              <StaggerItem key={entry.term}>
                <article
                  id={entry.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <h2 className="text-lg text-primary">{entry.term}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {entry.definition}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ResourceCta />
    </PageLayout>
  );
}
