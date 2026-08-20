import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions about CREATE Act R&D claims"
          intro="Straight answers to what business owners and accountants ask first."
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
