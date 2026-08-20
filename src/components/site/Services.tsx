import { useState } from "react";
import { motion } from "motion/react";
import { SERVICE_GROUPS } from "./data";
import { SectionHeading, Stagger, StaggerItem } from "./Reveal";

export function Services() {
  const [activeTab, setActiveTab] = useState<string>(SERVICE_GROUPS[0]!.id);
  const visible =
    SERVICE_GROUPS.find((g) => g.id === activeTab)?.services ?? SERVICE_GROUPS[0]!.services;

  return (
    <section id="services" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our services"
          title="What I handle for you"
          intro="End-to-end support for R&D claim documentation, so your team contributes knowledge instead of chasing files."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {SERVICE_GROUPS.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`min-h-11 rounded-full px-5 text-sm font-medium transition-all ${
                activeTab === group.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "border border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-primary"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2">
            {visible.map(({ icon: Icon, title, body }) => (
              <StaggerItem key={title}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-accent-soft">
                    <Icon className="h-5 w-5 text-primary transition-colors group-hover:text-accent" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl text-primary">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </motion.div>
      </div>
    </section>
  );
}
