import { ArrowRight, CheckCircle2, Clock, FileCheck2, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFallback from "@/assets/hero-illustration.jpg";
import hero480 from "@/assets/hero-illustration-480.webp";
import hero768 from "@/assets/hero-illustration-768.webp";
import hero1024 from "@/assets/hero-illustration-1024.webp";
import { BRAND } from "./data";

const heroSrcSet = `${hero480} 480w, ${hero768} 768w, ${hero1024} 1024w`;
const heroSizes = "(min-width: 1024px) 480px, (min-width: 640px) 600px, 90vw";

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
    <section id="top" className="relative overflow-hidden surface-navy pt-36 pb-16 sm:pt-44">
      <div className="absolute inset-0 bg-dots-soft opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Above-the-fold content is intentionally not animated in: starting at
              opacity 0 delays the Largest Contentful Paint by the animation duration. */}
          <div>
            <p className="inline-flex items-center rounded-full border border-accent-on-navy/40 bg-accent-on-navy/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-on-navy">
              BLMC · R&amp;D Tax Credit · Audit Specialists
            </p>
            <h1 className="mt-6 text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
              R&amp;D tax credit documentation for Philippine businesses
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
              BLMC prepares audit-ready CREATE Act claim packs for BOI- and PEZA-registered
              companies and their accountants — data collection, technical reports, cost trails, and
              BIR-aligned coordination. You keep building; the evidence stays claim-ready.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="accent" size="xl" asChild>
                <a href={BRAND.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="onNavy" size="xl" asChild>
                <a href="#process">See How It Works</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="animate-float">
              <div className="overflow-hidden rounded-3xl border border-primary-foreground/10 shadow-lift">
                <img
                  src={heroFallback}
                  srcSet={heroSrcSet}
                  sizes={heroSizes}
                  alt="BLMC R&D tax credit documentation and audit specialists — claim checklists and growth chart illustration"
                  width={1024}
                  height={1024}
                  fetchPriority="high"
                  decoding="async"
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
                    <li key={item} className="flex items-center gap-2 text-xs text-card-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-28 grid grid-cols-2 gap-4 border-t border-primary-foreground/10 pt-8 sm:grid-cols-4">
          {trustMarkers.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 text-sm text-primary-foreground/70"
            >
              <Icon className="h-4.5 w-4.5 shrink-0 text-accent-on-navy" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
