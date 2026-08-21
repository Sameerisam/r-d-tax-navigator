import { EXPERIENCE } from "./brand";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why BLMC fits"
          title="Built for documentation-heavy claim work"
          intro="Background in administrative support, claims processing, reporting, and auditing — the same skills R&D tax credit preparation demands day to day."
        />

        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            A dedicated specialist helps companies and tax professionals save time, reduce errors,
            and stay compliant. By handling repetitive, documentation-heavy steps of R&amp;D tax
            claims, technical experts and finance teams stay focused on strategy — while you
            maximize incentives and keep the claims process moving.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
          {EXPERIENCE.map((item) => (
            <StaggerItem key={item.role}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h3 className="text-base font-semibold text-primary">{item.role}</h3>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
