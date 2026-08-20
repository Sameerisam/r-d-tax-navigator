import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Clock, FileCheck2, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.jpg";

const trustMarkers = [
  { icon: ShieldCheck, label: "BIR-aligned process" },
  { icon: FileCheck2, label: "CREATE Act compliant" },
  { icon: Lock, label: "Confidential & secure" },
  { icon: Clock, label: "Fast turnaround" },
];

const checklist = [
  "Project eligibility notes",
  "Qualifying cost schedule",
  "Technical narrative draft",
  "Agency correspondence log",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden surface-navy pt-32 pb-16 sm:pt-40">
      <div className="absolute inset-0 bg-dots-soft opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              R&amp;D Tax Credit Specialists — Philippines
            </p>
            <h1 className="mt-6 text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
              Maximize your R&amp;D tax incentives — without the paperwork headache
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
              Documentation and coordination support for BOI and PEZA-registered companies and their
              accountants claiming CREATE Act R&amp;D incentives. You keep building; the evidence
              pack stays audit-ready.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="accent" size="xl" asChild>
                <a href="#contact">
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="onNavy" size="xl" asChild>
                <a href="#process">See How It Works</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="overflow-hidden rounded-3xl border border-primary-foreground/10 shadow-lift">
                <img
                  src={heroIllustration}
                  alt="Line-art illustration of R&D claim documents, a checklist and a growth chart"
                  width={1024}
                  height={1024}
                  className="h-auto w-full"
                />
              </div>
              <div className="absolute -bottom-8 -left-4 w-[17rem] rounded-2xl border border-border/60 bg-card p-5 shadow-lift sm:-left-10">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Claim readiness
                </p>
                <p className="mt-1 font-serif text-3xl text-primary">₱4.2M</p>
                <p className="text-xs text-muted-foreground">
                  Sample qualifying expenditure documented
                </p>
                <ul className="mt-4 space-y-2">
                  {checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-card-foreground"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.ul
          className="mt-28 grid grid-cols-2 gap-4 border-t border-primary-foreground/10 pt-8 sm:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {trustMarkers.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm text-primary-foreground/70">
              <Icon className="h-4.5 w-4.5 shrink-0 text-accent" aria-hidden="true" />
              {label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
