import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckList,
  NotFoundBlock,
  PageHero,
  PageLayout,
  ResourceCta,
  SourceNote,
} from "@/components/site/PageShell";
import { getGuide, GUIDES } from "@/components/site/resources";
import { articleSchema, breadcrumbSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/guides/$slug")({
  head: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) {
      return pageMeta({
        title: "Guide not found | BLMC",
        description: "This guide is not available.",
        path: `/guides/${params.slug}`,
      });
    }

    return pageMeta({
      title: `${guide.title} | BLMC`,
      description: guide.description,
      path: `/guides/${guide.slug}`,
      keywords: `${guide.title}, R&D tax credit Philippines, CREATE Act, BIR documentation`,
      jsonLd: [
        articleSchema({
          headline: guide.title,
          description: guide.description,
          path: `/guides/${guide.slug}`,
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ]),
      ],
    });
  },
  component: GuideDetail,
});

function GuideDetail() {
  const { slug } = Route.useParams();
  const guide = getGuide(slug);

  if (!guide) {
    return (
      <PageLayout>
        <NotFoundBlock label="all guides" to="/guides" />
      </PageLayout>
    );
  }

  const otherGuides = GUIDES.filter((item) => item.slug !== guide.slug);

  return (
    <PageLayout>
      <PageHero
        eyebrow={`Guide · ${guide.readTime}`}
        title={guide.title}
        intro={guide.description}
        crumbs={[{ label: "Guides", to: "/guides" }, { label: guide.title }]}
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-start">
            <article>
              {guide.sections.map((section) => (
                <section key={section.heading} className="mb-12 last:mb-0">
                  <h2 className="font-serif text-2xl text-primary">{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mt-4 text-sm leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.list ? (
                    <div className="mt-4">
                      <CheckList items={section.list} />
                    </div>
                  ) : null}
                </section>
              ))}
            </article>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <nav
                aria-label="On this page"
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <h2 className="text-sm font-semibold text-primary">On this page</h2>
                <ul className="mt-3 space-y-2">
                  {guide.sections.map((section) => (
                    <li key={section.heading} className="text-sm text-muted-foreground">
                      {section.heading}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h2 className="text-sm font-semibold text-primary">More guides</h2>
                <ul className="mt-3 space-y-2">
                  {otherGuides.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/guides/${item.slug}`}
                        className="text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-accent/30 bg-accent-soft p-6">
                <h2 className="text-sm font-semibold text-primary">Check the incentives index</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every Philippine R&amp;D incentive with benefit, eligibility, and official source.
                </p>
                <Link
                  to="/incentives"
                  className="mt-3 inline-block text-xs font-medium text-accent hover:opacity-80"
                >
                  Open the index
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
