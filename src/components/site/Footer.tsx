import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Mail, Phone, Sparkle } from "lucide-react";
import { ADDRESS, BRAND, FOOTER_LINK_GROUPS } from "./brand";
import { LAST_REVIEWED_LABEL } from "./directory-meta";

const isHashLink = (href: string) => href.includes("#");

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Sparkle className="h-4.5 w-4.5 text-accent" aria-hidden="true" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-semibold text-primary">{BRAND.name}</span>
                <span className="text-[10px] font-medium tracking-[0.04em] text-muted-foreground">
                  {BRAND.tagline}
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {BRAND.description}
            </p>

            <address className="mt-5 space-y-2 border-l-2 border-accent/40 pl-3 text-sm not-italic leading-relaxed text-muted-foreground">
              <p className="font-semibold text-primary">{BRAND.legalName}</p>
              {ADDRESS.street ? (
                <>
                  <p>{ADDRESS.street}</p>
                  <p>
                    {ADDRESS.locality}
                    {ADDRESS.region ? `, ${ADDRESS.region}` : ""}{" "}
                    {ADDRESS.postalCode}
                  </p>
                </>
              ) : null}
              <p>{ADDRESS.countryName}</p>
              <p>
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {BRAND.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {BRAND.email}
                </a>
              </p>
            </address>

            <p className="mt-4 text-xs text-muted-foreground">
              Directory data last reviewed {LAST_REVIEWED_LABEL}
            </p>

            <div className="mt-5 flex gap-2">
              <a
                href={BRAND.url}
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={BRAND.url}
                aria-label="Facebook page"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="text-sm font-semibold text-primary">{group.heading}</h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    {isHashLink(link.href) ? (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Disclaimer: {BRAND.name} provides documentation, research, and coordination support for
            R&amp;D tax incentive claims. This does not constitute tax, accounting, or legal advice.
            Incentive details are summarised from official sources for research purposes and must be
            confirmed with the issuing agency. Filing decisions remain with your licensed accountant
            or tax counsel.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. Directory last reviewed{" "}
            {LAST_REVIEWED_LABEL}.
          </p>
        </div>
      </div>
    </footer>
  );
}
