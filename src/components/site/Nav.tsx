import { useEffect, useState } from "react";
import { Menu, Phone, X, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BRAND, NAV_LINKS } from "./data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.01, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const onNavy = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
              onNavy ? "bg-primary-foreground/10" : "bg-primary"
            }`}
          >
            <Sparkle
              className={`h-4.5 w-4.5 ${onNavy ? "text-accent" : "text-accent"}`}
              aria-hidden="true"
            />
          </span>
          <span
            className={`font-serif text-lg font-semibold tracking-tight ${
              onNavy ? "text-primary-foreground" : "text-primary"
            }`}
          >
            {BRAND.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${
                onNavy
                  ? "text-primary-foreground/75 hover:text-primary-foreground"
                  : "text-muted-foreground hover:text-primary"
              } ${active === link.href ? (onNavy ? "text-primary-foreground" : "text-primary") : ""}`}
            >
              {link.label}
              {active === link.href ? (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-accent" />
              ) : null}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={BRAND.phoneHref}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              onNavy
                ? "text-primary-foreground/80 hover:text-primary-foreground"
                : "text-primary hover:text-accent"
            }`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {BRAND.phone}
          </a>
          <Button variant="accent" size="lg" asChild>
            <a href="#contact">Book Free Consultation</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className={`flex h-11 w-11 items-center justify-center rounded-lg lg:hidden ${
                onNavy
                  ? "text-primary-foreground hover:bg-primary-foreground/10"
                  : "text-primary hover:bg-secondary"
              }`}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[86%] max-w-sm border-l-0 p-0 surface-navy">
            <div className="flex h-full flex-col p-7">
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg text-primary-foreground">{BRAND.name}</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-primary-foreground/80 hover:bg-primary-foreground/10"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-10 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3.5 text-base font-medium text-primary-foreground/85 hover:bg-primary-foreground/10"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto space-y-4">
                <a
                  href={BRAND.phoneHref}
                  className="flex items-center gap-2 px-3 text-sm text-primary-foreground/80"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {BRAND.phone}
                </a>
                <Button variant="accent" size="xl" className="w-full" asChild>
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Book Free Consultation
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
