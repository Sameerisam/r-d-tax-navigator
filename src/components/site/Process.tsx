import { STEPS } from "./data";
import { SectionHeading, Stagger, StaggerItem } from "./Reveal";
import { useInViewOnce } from "@/hooks/use-in-view";

export function Process() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>("-120px 0px");
  const progressTransition = "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <section id="process" className="relative overflow-hidden surface-navy py-24">
      <div className="absolute inset-0 bg-dots-soft opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From consultation to audit-ready R&D claim pack"
          intro="Clear ownership at every stage of CREATE Act documentation — you are looped in only where your technical or financial input actually matters."
          tone="dark"
        />

        <div ref={ref} className="relative mt-16">
          <div
            className="absolute top-6 right-0 left-0 hidden h-px bg-primary-foreground/15 lg:block"
            aria-hidden="true"
          >
            <div
              className="h-px origin-left bg-accent-on-navy"
              style={{
                transform: `scaleX(${inView ? 1 : 0})`,
                transition: progressTransition,
              }}
            />
          </div>
          <div
            className="absolute top-0 bottom-0 left-6 w-px bg-primary-foreground/15 lg:hidden"
            aria-hidden="true"
          >
            <div
              className="h-full w-px origin-top bg-accent-on-navy"
              style={{
                transform: `scaleY(${inView ? 1 : 0})`,
                transition: progressTransition,
              }}
            />
          </div>

          <Stagger className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="relative pl-20 lg:pl-0">
                  <span className="absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-full border border-accent-on-navy/50 bg-[oklch(0.22_0.05_260)] font-serif text-lg text-accent-on-navy lg:relative lg:mb-6">
                    {i + 1}
                  </span>
                  <h3 className="text-xl text-primary-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
