import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Audience } from "@/components/site/Audience";
import { Contact } from "@/components/site/Contact";
import { FAQS, SEO } from "@/components/site/data";
import { Directory } from "@/components/site/Directory";
import { Experience } from "@/components/site/Experience";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Incentives } from "@/components/site/Incentives";
import { Nav } from "@/components/site/Nav";
import { Problems } from "@/components/site/Problems";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";
import { dataCatalogSchema, faqSchema, organizationSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: SEO.title,
      description: SEO.description,
      path: "/",
      keywords: SEO.keywords,
      jsonLd: [organizationSchema(), dataCatalogSchema(), faqSchema(FAQS)],
    }),
  component: Index,
});

/** Lets the browser skip styling and layout for a section until it nears the viewport. */
function Deferred({ children }: { children: ReactNode }) {
  return <div className="defer-offscreen">{children}</div>;
}

function Index() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Deferred>
          <Incentives />
        </Deferred>
        <Deferred>
          <Directory />
        </Deferred>
        <Deferred>
          <Problems />
        </Deferred>
        <Deferred>
          <Services />
        </Deferred>
        <Deferred>
          <Process />
        </Deferred>
        <Deferred>
          <WhyUs />
        </Deferred>
        <Deferred>
          <Experience />
        </Deferred>
        <Deferred>
          <Audience />
        </Deferred>
        <Deferred>
          <Testimonials />
        </Deferred>
        <Deferred>
          <Faq />
        </Deferred>
        <Deferred>
          <Contact />
        </Deferred>
      </main>
      <Deferred>
        <Footer />
      </Deferred>
    </>
  );
}
