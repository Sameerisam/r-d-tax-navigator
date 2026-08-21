import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/components/site/brand";
import { PageHero, PageLayout, ProseSection } from "@/components/site/PageShell";
import { LAST_REVIEWED_LABEL } from "@/components/site/directory-meta";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

const path = "/terms";
const title = "Terms of Use | BLMC";
const description =
  "Terms governing use of the BLMC website and the R&D incentives directory, including the scope of the information provided and the limits of the services offered.";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageMeta({
      title,
      description,
      path,
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of use", path },
        ]),
      ],
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        intro="What this website is, what it is not, and the basis on which the incentives directory is published."
        crumbs={[{ label: "Terms of use" }]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <ProseSection heading="Acceptance">
            <p>
              By using this website you accept these terms. If you do not accept them, please do not
              use the site.
            </p>
          </ProseSection>

          <ProseSection heading="Nature of the information provided">
            <p>
              The incentives index, industry directories, agency pages, guides, glossary, and
              compliance calendar are summarised from official sources for research purposes. Tax
              law changes, and implementing regulations are amended and reinterpreted over time.
              Figures, rates, eligibility criteria, and deadlines published here may not reflect the
              current position at the time you read them.
            </p>
            <p>
              Always confirm details with the issuing agency and the current text of the applicable
              law or revenue issuance before acting. Each record links to its official source for
              this purpose.
            </p>
          </ProseSection>

          <ProseSection heading="Not professional advice">
            <p>
              Nothing on this website constitutes tax, accounting, legal, or financial advice, and
              no client relationship is created by reading it or by submitting an enquiry. {BRAND.name}{" "}
              provides documentation, research, and coordination support. Filing positions,
              representations to authorities, and professional opinions remain the responsibility of
              your licensed accountant or tax counsel, who are the parties of record.
            </p>
          </ProseSection>

          <ProseSection heading="Scope of services">
            <p>
              Engagements cover the preparation and maintenance of claim documentation, research
              monitoring, and coordination with the advisers you nominate. We do not represent
              clients before the Bureau of Internal Revenue or any investment promotion agency, and
              we do not sign or lodge returns.
            </p>
          </ProseSection>

          <ProseSection heading="External links">
            <p>
              Links to agency websites and other third-party resources are provided for
              verification. We do not control that content and are not responsible for its accuracy
              or availability.
            </p>
          </ProseSection>

          <ProseSection heading="Limitation of liability">
            <p>
              To the extent permitted by law, {BRAND.name} is not liable for loss arising from
              reliance on information published on this website. Liability in respect of engaged
              services is governed by the written engagement terms agreed with you.
            </p>
          </ProseSection>

          <ProseSection heading="Intellectual property">
            <p>
              The written content, structure, and presentation of this website belong to{" "}
              {BRAND.name}. You may reference and link to it. Republishing substantial portions
              without permission is not permitted.
            </p>
          </ProseSection>

          <ProseSection heading="Changes and contact">
            <p>
              These terms may be updated as the site and services develop. Questions can be sent to{" "}
              <a href={`mailto:${BRAND.email}`} className="text-accent hover:opacity-80">
                {BRAND.email}
              </a>
              .
            </p>
            <p className="text-xs">Last updated {LAST_REVIEWED_LABEL}.</p>
          </ProseSection>
        </div>
      </section>
    </PageLayout>
  );
}
