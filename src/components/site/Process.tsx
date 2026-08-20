import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { STEPS } from "./data";
import { SectionHeading, Stagger, StaggerItem } from "./Reveal";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "center 45%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = scaleX;

  return (
    <section id="process" className="relative overflow-hidden surface-navy py-24">
      <div className="absolute inset-0 bg-dots-soft opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="A four-step path from first call to closed claim"
          intro="Clear ownership at every stage, with you looped in only where your input actually matters."
          tone="dark"
        />

        <div ref={ref} className="relative mt-16">
          <div
            className="absolute top-6 right-0 left-0 hidden h-px bg-primary-foreground/15 lg:block"
            aria-hidden="true"
          >
            <motion.div className="h-px origin-left bg-accent" style={{ scaleX }} />
          </div>
          <div
            className="absolute top-0 bottom-0 left-6 w-px bg-primary-foreground/15 lg:hidden"
            aria-hidden="true"
          >
            <motion.div className="h-full w-px origin-top bg-accent" style={{ scaleY }} />
          </div>

          <Stagger className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="relative pl-20 lg:pl-0">
                  <span className="absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-[oklch(0.22_0.05_260)] font-serif text-lg text-accent lg:relative lg:mb-6">
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
