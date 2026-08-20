import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "./data";
import { SectionHeading, Stagger, StaggerItem } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Sample feedback"
          title="What working together looks like"
          intro="Illustrative testimonials shown as sample content while client references are being collected."
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <Quote className="h-6 w-6 text-accent/50" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-card-foreground">
                  “{t.quote}”
                </blockquote>
                <div className="mt-5 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <figcaption className="mt-3 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-primary">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
