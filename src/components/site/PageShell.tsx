import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, ChevronRight, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Reveal } from "./Reveal";
import { BRAND } from "./brand";
import { LAST_REVIEWED_LABEL, REVIEW_CADENCE, SOURCE_DISCLAIMER } from "./directory-meta";

export type Crumb = { label: string; to?: string };

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-primary-foreground/60">
        <li>
          <Link to="/" className="transition-colors hover:text-accent">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <span className="text-primary-foreground/85">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  stats,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumbs: Crumb[];
  stats?: { value: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden surface-navy pt-36 pb-16 sm:pt-40">
      <div className="absolute inset-0 bg-dots-soft opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Breadcrumbs items={crumbs} />
        {/* Not wrapped in Reveal: this is the Largest Contentful Paint element on
            every directory page, so it must paint on the server render. */}
        <div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent-on-navy">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl leading-[1.12] text-primary-foreground sm:text-4xl lg:text-[2.9rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            {intro}
          </p>
        </div>

        {stats ? (
          <Reveal delay={0.1}>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-primary-foreground/10 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-[0.12em] text-primary-foreground/50">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-serif text-2xl text-primary-foreground">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}

        <p className="mt-6 flex flex-wrap items-center gap-2 text-xs text-primary-foreground/50">
          <CalendarCheck className="h-3.5 w-3.5 text-accent-on-navy" aria-hidden="true" />
          Last reviewed {LAST_REVIEWED_LABEL} · {REVIEW_CADENCE}
        </p>
      </div>
    </section>
  );
}

export function SourceNote() {
  return (
    <div className="mx-auto mt-12 flex max-w-6xl gap-3 rounded-2xl border border-border bg-secondary p-5">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
      <p className="text-xs leading-relaxed text-muted-foreground">{SOURCE_DISCLAIMER}</p>
    </div>
  );
}

export function SourceLink({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-opacity hover:opacity-80"
    >
      Official source: {name}
      <ExternalLink className="h-3 w-3" aria-hidden="true" />
    </a>
  );
}

export function ResourceCta({
  title = "Get your R&D documentation reviewed",
  body = "Book a consultation and BLMC will tell you honestly which projects are documented well enough to claim — and which need work first.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden surface-navy py-20">
      <div className="absolute inset-0 bg-dots-soft opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-3xl leading-tight text-primary-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">{body}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="accent" size="xl" asChild>
              <a href={BRAND.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="onNavy" size="xl" asChild>
              <Link to="/incentives">Browse the incentives index</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProseSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl text-primary">{heading}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function DirectoryCard({
  to,
  eyebrow,
  title,
  body,
  meta,
}: {
  to: string;
  eyebrow?: string;
  title: string;
  body: string;
  meta?: string[];
}) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
      ) : null}
      <h3 className="mt-2 text-lg leading-snug text-primary">{title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      {meta?.length ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {meta.map((item) => (
            <li
              key={item}
              className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        View details
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

export function NotFoundBlock({ label, to }: { label: string; to: string }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <h1 className="font-serif text-3xl text-primary">Record not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        That entry is not in the index. It may have been renamed or removed during a review.
      </p>
      <Button variant="accent" size="lg" className="mt-6" asChild>
        <Link to={to}>Back to {label}</Link>
      </Button>
    </section>
  );
}
