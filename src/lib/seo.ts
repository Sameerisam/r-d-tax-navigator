import { ADDRESS, BRAND, KNOWS_ABOUT, SAME_AS } from "@/components/site/brand";
import { DIRECTORY_STATS, LAST_REVIEWED } from "@/components/site/directory-meta";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  /** Structured data objects rendered as ld+json inside <head>. */
  jsonLd?: unknown[];
};

export function pageMeta({ title, description, path, keywords, jsonLd }: PageMetaInput) {
  const canonical = `${BRAND.url}${path}`;
  const image = `${BRAND.url}${BRAND.ogImage}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(keywords ? [{ name: "keywords", content: keywords }] : []),
      { name: "author", content: BRAND.name },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: BRAND.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_PH" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: (jsonLd ?? []).map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}

function postalAddress() {
  if (!ADDRESS.street) return undefined;

  return {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  };
}

export function organizationSchema() {
  const address = postalAddress();

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BRAND.url}/#organization`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: BRAND.url,
    logo: {
      "@type": "ImageObject",
      url: `${BRAND.url}${BRAND.logo}`,
    },
    image: `${BRAND.url}${BRAND.ogImage}`,
    description: BRAND.description,
    email: BRAND.email,
    telephone: BRAND.phone,
    ...(address ? { address } : {}),
    areaServed: {
      "@type": "Country",
      name: ADDRESS.countryName,
    },
    knowsAbout: KNOWS_ABOUT,
    serviceType: [
      "R&D tax credit documentation",
      "CREATE Act claim support",
      "Audit-ready report preparation",
    ],
    ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
  };
}

export function dataCatalogSchema() {
  const address = postalAddress();

  return {
    "@context": "https://schema.org",
    "@type": "DataCatalog",
    "@id": `${BRAND.url}/#datacatalog`,
    name: "BLMC Philippine R&D Incentives Index",
    description: `Directory of Philippine research and development tax incentives, administering agencies, industry eligibility, and compliance deadlines. ${DIRECTORY_STATS.incentives} incentive records maintained by the BLMC research desk.`,
    url: `${BRAND.url}/incentives`,
    dateModified: LAST_REVIEWED,
    isAccessibleForFree: true,
    provider: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.url,
      telephone: BRAND.phone,
      ...(address ? { address } : {}),
    },
    spatialCoverage: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: ADDRESS.country,
      },
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BRAND.url}${item.path}`,
    })),
  };
}

export function itemListSchema({
  name,
  description,
  items,
}: {
  name: string;
  description: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function articleSchema({
  headline,
  description,
  path,
}: {
  headline: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    dateModified: LAST_REVIEWED,
    author: { "@type": "Organization", name: BRAND.name, url: BRAND.url },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.url,
      logo: { "@type": "ImageObject", url: `${BRAND.url}${BRAND.logo}` },
    },
    mainEntityOfPage: `${BRAND.url}${path}`,
  };
}
