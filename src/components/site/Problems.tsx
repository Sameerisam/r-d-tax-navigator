import { PAIN_POINTS } from "./data";
import { SectionHeading, Stagger, StaggerItem } from "./Reveal";

export function Problems() {
  return (
    <section id="problems" className="relative bg-background py-24">
      <div className="absolute inset-0 bg-grid-soft opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The reality"
          title="Why R&D claims are hard to get right"
          intro="Most claims fail on evidence, not on merit. These are the four places momentum is usually lost."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
