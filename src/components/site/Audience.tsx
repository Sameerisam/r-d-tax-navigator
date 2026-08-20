import { AUDIENCES } from "./data";
import { SectionHeading, Stagger, StaggerItem } from "./Reveal";

export function Audience() {
  return (
    <section id="who-its-for" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Who this is for"
          title="Built around how you already work"
          intro="Three ways this support slots into an existing team without disrupting it."
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {AUDIENCES.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl text-primary">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
