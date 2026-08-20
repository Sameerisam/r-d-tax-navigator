import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Lock, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BRAND } from "./data";
import { Reveal } from "./Reveal";
import { armToaster } from "./ToastHost";

type Fields = { name: string; email: string; company: string; message: string };
const empty: Fields = { name: "", email: "", company: "", message: "" };

async function confirmSubmission() {
  armToaster();
  const { toast } = await import("sonner");
  toast.success("Request received", {
    description: "We'll reply within one business day to schedule your consultation.",
  });
}

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields, v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Partial<Fields> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Enter a valid email address.";
    if (values.message.trim().length < 10)
      next.message = "Tell us a little about your claim (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSent(true);
    setValues(empty);
    window.open(BRAND.bookingUrl, "_blank", "noopener,noreferrer");
    void confirmSubmission();
  };

  return (
    <section id="contact" className="relative overflow-hidden surface-navy py-24">
      <div className="absolute inset-0 bg-dots-soft opacity-35" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-on-navy">
              Need a virtual assistant for R&amp;D claims?
            </p>
            <h2 className="mt-3 text-3xl leading-tight text-primary-foreground sm:text-4xl">
              Ready to maximize your Philippine R&amp;D tax incentives?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/70">
              Share a few details about your projects, BOI or PEZA registration, and current
              records. BLMC will give an honest read on documentation readiness before any
              engagement begins.
            </p>

            <ul className="mt-9 space-y-4">
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent-on-navy"
                >
                  <Phone className="h-4.5 w-4.5 text-accent-on-navy" aria-hidden="true" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent-on-navy"
                >
                  <Mail className="h-4.5 w-4.5 text-accent-on-navy" aria-hidden="true" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Clock className="h-4.5 w-4.5 text-accent-on-navy" aria-hidden="true" />
                Replies within one business day
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Lock className="h-4.5 w-4.5 text-accent-on-navy" aria-hidden="true" />
                NDA-backed, confidential handling of all records
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-lift sm:p-9">
              {sent ? (
                <div className="flex animate-fade-in-up flex-col items-center py-12 text-center">
                  <span className="flex h-16 w-16 animate-pop-in items-center justify-center rounded-full bg-accent-soft">
                    <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl text-primary">Request received</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thank you. You will hear back within one business day with consultation times
                    and a short pre-call checklist.
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="mt-7"
                    onClick={() => setSent(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input
                        id="name"
                        value={values.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Juan Dela Cruz"
                        className="h-11"
                      />
                      {errors.name ? (
                        <p className="text-xs text-destructive">{errors.name}</p>
                      ) : null}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="you@company.ph"
                        className="h-11"
                      />
                      {errors.email ? (
                        <p className="text-xs text-destructive">{errors.email}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input
                      id="company"
                      value={values.company}
                      onChange={(e) => set("company", e.target.value)}
                      placeholder="Company name and registration (BOI / PEZA)"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Claim details</Label>
                    <Textarea
                      id="message"
                      value={values.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Briefly describe your R&D projects, timeline, and where you need support."
                      rows={5}
                    />
                    {errors.message ? (
                      <p className="text-xs text-destructive">{errors.message}</p>
                    ) : null}
                  </div>
                  <Button variant="accent" size="xl" className="w-full" asChild>
                    <a href={BRAND.bookingUrl} target="_blank" rel="noopener noreferrer">
                      Book Free Consultation
                    </a>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    No obligation. Your details are never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
