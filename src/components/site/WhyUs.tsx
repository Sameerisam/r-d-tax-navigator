import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view";
import { CAPABILITIES, STATS } from "./brand";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "./Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>("-60px 0px");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-serif text-4xl text-primary">
      {display}
      {suffix}
    </span>
  );
}

export function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why choose BLMC"
              title="Specialist attention for every R&D claim file"
              align="left"
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  You work directly with the specialist preparing your documentation. Every R&amp;D
                  tax credit file is handled with the same discipline claims processing, auditing,
                  and compliance coordination demand.
                </p>
                <p>
                  The result is CREATE Act–aligned documentation your accountant can sign off on
                  with confidence — and a process that keeps moving without daily chasing from your
                  side.
                </p>
              </div>
            </Reveal>
            <Stagger className="mt-10 grid grid-cols-2 gap-6">
              {STATS.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <Counter value={stat.value} suffix={stat.suffix} />
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Stagger className="space-y-4 lg:pt-4">
            {CAPABILITIES.map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lift">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                    <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-primary">{cap.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {cap.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
