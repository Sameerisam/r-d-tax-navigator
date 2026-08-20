import { Linkedin, Facebook, Mail, Phone, Sparkle } from "lucide-react";
import { BRAND, NAV_LINKS } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Sparkle className="h-4.5 w-4.5 text-accent" aria-hidden="true" />
              </span>
              <span className="font-serif text-lg font-semibold text-primary">{BRAND.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {BRAND.tagline} Supporting BOI and PEZA-registered companies, accountants, and tax
              consultants across the Philippines.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="#top"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#top"
                aria-label="Facebook page"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold text-primary">Quick links</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-primary">Contact</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {BRAND.email}
                </a>
              </li>
              <li className="text-sm text-muted-foreground">Metro Manila, Philippines</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Disclaimer: {BRAND.name} provides documentation, research, and coordination support for
            R&amp;D tax incentive claims. This does not constitute tax, accounting, or legal advice.
            Filing decisions remain with your licensed accountant or tax counsel.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
