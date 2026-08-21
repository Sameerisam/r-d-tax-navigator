import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "./brand";
import { Reveal, SectionHeading } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="R&D tax credit questions for Philippine businesses"
          intro="Straight answers on CREATE Act incentives, BOI/PEZA eligibility, BIR documentation, and how BLMC supports your claim."
        />
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-6 shadow-soft"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
