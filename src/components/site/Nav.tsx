import { useEffect, useId, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, NAV_LINKS } from "./brand";

const bookingLinkProps = {
  href: BRAND.bookingUrl,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

const isHashLink = (href: string) => href.includes("#");

/** Vertical point in the viewport used to decide which section "owns" the nav. */
const SECTION_MARKER = 0.28;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const panelId = useId();

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 24);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    // Hash sections only exist on the homepage. On other routes, clear so a
    // leftover "/#services" underline can't stick while browsing /incentives.
    if (pathname !== "/") {
      setActiveHash("");
      return;
    }

    const ids = NAV_LINKS.filter((l) => isHashLink(l.href)).map((l) => l.href.split("#")[1]!);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    // IntersectionObserver with a thin "band" at SECTION_MARKER avoids
    // getBoundingClientRect() on every scroll (forced reflow).
    const top = -(SECTION_MARKER * 100);
    const bottom = -(100 - SECTION_MARKER * 100);
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }

        let current = "";
        for (const id of ids) {
          if (visible.has(id)) current = `/#${id}`;
        }
        setActiveHash(current);
      },
      {
        root: null,
        rootMargin: `${top}% 0px ${bottom}% 0px`,
        threshold: 0,
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onNavy = !scrolled;

  const isLinkActive = (href: string) => {
    if (isHashLink(href)) return activeHash === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-7 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-8"
      >
        <Link to="/" className="flex items-center gap-2.5">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
              onNavy ? "bg-primary-foreground/10" : "bg-primary"
            }`}
          >
            <Sparkle className="h-4.5 w-4.5 text-accent-on-navy" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`font-serif text-lg font-semibold tracking-tight ${
                onNavy ? "text-primary-foreground" : "text-primary"
              }`}
            >
              {BRAND.name}
            </span>
            <span
              className={`hidden text-[10px] font-medium tracking-[0.04em] sm:block ${
                onNavy ? "text-primary-foreground/55" : "text-muted-foreground"
              }`}
            >
              {BRAND.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            const className = `relative text-sm font-medium whitespace-nowrap transition-colors ${
              onNavy
                ? "text-primary-foreground/75 hover:text-primary-foreground"
                : "text-muted-foreground hover:text-primary"
            } ${active ? (onNavy ? "text-primary-foreground" : "text-primary") : ""}`;

            const underline = active ? (
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full ${
                  onNavy ? "bg-accent-on-navy" : "bg-accent"
                }`}
              />
            ) : null;

            return isHashLink(link.href) ? (
              <a key={link.href} href={link.href} className={className}>
                {link.label}
                {underline}
              </a>
            ) : (
              <Link key={link.href} to={link.href} className={className}>
                {link.label}
                {underline}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="accent" size="lg" asChild>
            <a {...bookingLinkProps}>Book Free Consultation</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(true)}
          className={`flex h-11 w-11 items-center justify-center rounded-lg lg:hidden ${
            onNavy
              ? "text-primary-foreground hover:bg-primary-foreground/10"
              : "text-primary hover:bg-secondary"
          }`}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="presentation">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col border-l-0 p-7 surface-navy shadow-lift"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-serif text-lg text-primary-foreground">{BRAND.name}</span>
                <span className="text-[10px] text-primary-foreground/55">{BRAND.tagline}</span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground/80 hover:bg-primary-foreground/10"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
                isHashLink(link.href) ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3.5 text-base font-medium text-primary-foreground/85 hover:bg-primary-foreground/10"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3.5 text-base font-medium text-primary-foreground/85 hover:bg-primary-foreground/10"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
            <div className="mt-auto">
              <Button variant="accent" size="xl" className="w-full" asChild>
                <a {...bookingLinkProps} onClick={() => setOpen(false)}>
                  Book Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
