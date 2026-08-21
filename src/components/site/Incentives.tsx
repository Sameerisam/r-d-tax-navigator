import { INCENTIVE_BENEFITS } from "./data";
import { INCENTIVES_INTRO } from "./brand";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "./Reveal";

export function Incentives() {
  return (
    <section id="incentives" className="relative bg-background py-24">
      <div className="absolute inset-0 bg-grid-soft opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={INCENTIVES_INTRO.eyebrow}
          title={INCENTIVES_INTRO.title}
          intro={INCENTIVES_INTRO.body[0]}
        />

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            {INCENTIVES_INTRO.body[1]}
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {INCENTIVE_BENEFITS.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-primary">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
