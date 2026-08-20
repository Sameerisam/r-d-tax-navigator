import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/components/site/data";
import { PageHero, PageLayout, ProseSection } from "@/components/site/PageShell";
import { LAST_REVIEWED_LABEL } from "@/components/site/resources";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

const path = "/privacy";
const title = "Privacy Policy | BLMC";
const description =
  "How BLMC collects, uses, stores, and protects the business and financial information shared during R&D tax credit documentation engagements.";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageMeta({
      title,
      description,
      path,
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy policy", path },
        ]),
      ],
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="R&D claim work involves commercially sensitive technical and financial records. This policy sets out what we collect, why, and how it is protected."
        crumbs={[{ label: "Privacy policy" }]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <ProseSection heading="Information we collect">
            <p>
              We collect the information you provide directly — your name, business email, company
              name, and the details you share about your projects through the enquiry form or during
              an engagement. Where an engagement proceeds, this extends to the records needed to
              prepare a claim: project descriptions, cost schedules, payroll allocations, supplier
              invoices, and registration documents.
            </p>
            <p>
              We do not collect payment card details through this website, and we do not purchase or
              scrape contact data from third parties.
            </p>
          </ProseSection>

          <ProseSection heading="How we use it">
            <p>
              Enquiry information is used only to respond to you and assess whether we can help.
              Engagement information is used solely to prepare, review, and coordinate the
              documentation you have asked us to produce, and to communicate with the advisers you
              nominate — typically your accountant, tax counsel, or agency contact.
            </p>
            <p>
              We do not sell your information, and we do not use your project details in marketing
              material or case studies without your written consent.
            </p>
          </ProseSection>

          <ProseSection heading="Storage and security">
            <p>
              Where possible, engagement files are held in access-controlled storage that you own
              and administer, so control of the records stays with you. Where we hold copies, access
              is limited to the personnel assigned to your engagement. Engagements can be run under
              a signed non-disclosure agreement on request.
            </p>
          </ProseSection>

          <ProseSection heading="Sharing with third parties">
            <p>
              We share information only with parties you have identified — your accountant, tax
              counsel, or the relevant agency — and only to the extent needed to progress the work.
              We may disclose information where required by law or lawful request from a regulatory
              authority.
            </p>
          </ProseSection>

          <ProseSection heading="Retention">
            <p>
              Claim documentation is retained for the period required to support the relevant tax
              position, or as agreed in your engagement terms, after which copies held by us are
              deleted on request. Enquiry records from prospects who do not proceed are removed
              periodically.
            </p>
          </ProseSection>

          <ProseSection heading="Your rights">
            <p>
              You may request access to the information we hold about you, ask for corrections, or
              request deletion where we are not required to retain it. Contact us at{" "}
              <a href={`mailto:${BRAND.email}`} className="text-accent hover:opacity-80">
                {BRAND.email}
              </a>{" "}
              and we will respond within a reasonable period.
            </p>
          </ProseSection>

          <ProseSection heading="Cookies and analytics">
            <p>
              This site uses only what is necessary to serve pages. If analytics are introduced in
              future, this policy will be updated before collection begins.
            </p>
          </ProseSection>

          <ProseSection heading="Contact">
            <p>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${BRAND.email}`} className="text-accent hover:opacity-80">
                {BRAND.email}
              </a>{" "}
              or {BRAND.phone}.
            </p>
            <p className="text-xs">Last updated {LAST_REVIEWED_LABEL}.</p>
          </ProseSection>
        </div>
      </section>
    </PageLayout>
  );
}
