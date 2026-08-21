import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle, Minus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BRAND } from "./brand";

type Fields = { name: string; email: string; phone: string; message: string };
const empty: Fields = { name: "", email: "", phone: "", message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;

function validate(values: Fields): Partial<Fields> {
  const next: Partial<Fields> = {};
  if (values.name.trim().length < 2) next.name = "Please enter your full name.";
  if (!EMAIL_RE.test(values.email.trim())) next.email = "Enter a valid email address.";
  if (!PHONE_RE.test(values.phone.trim()))
    next.phone = "Enter a valid phone number (7+ digits).";
  if (values.message.trim().length < 10)
    next.message = "Please leave a short message (10+ characters).";
  return next;
}

export function HelpWidget() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);
  const panelId = useId();
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const set = (key: keyof Fields, v: string) => {
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open]);

  useEffect(() => {
    if (open) return;
    triggerRef.current?.blur();
  }, [open]);

  const close = () => {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSent(true);
    setValues(empty);
  };

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="pointer-events-auto flex max-h-[min(36rem,calc(100dvh-6.5rem))] w-[min(22.5rem,calc(100vw-2rem))] animate-fade-in-up flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-lift"
        >
          <header className="flex shrink-0 items-center justify-between gap-3 bg-primary px-4 py-3.5 text-primary-foreground">
            <h2 id={titleId} className="text-sm font-semibold tracking-tight sm:text-[0.95rem]">
              {BRAND.name} — Prefer to talk to us?
            </h2>
            <button
              type="button"
              onClick={close}
              className="rounded-md p-1 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              aria-label="Minimize message form"
            >
              <Minus className="h-4 w-4" aria-hidden="true" />
            </button>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
            {sent ? (
              <div className="flex animate-fade-in-up flex-col items-center py-10 text-center">
                <span className="flex h-14 w-14 animate-pop-in items-center justify-center rounded-full bg-accent-soft">
                  <CheckCircle2 className="h-7 w-7 text-accent" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-primary">Message received</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Thank you. We&apos;ll get back to you as soon as we are back online.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Sorry, all of our specialists are busy at the moment. Please leave a message
                  and we&apos;ll get back to you as soon as we are back online.
                </p>

                <form onSubmit={onSubmit} noValidate className="mt-4 space-y-3.5">
                  <div className="space-y-1.5">
                    <Label htmlFor="help-name">Name</Label>
                    <Input
                      ref={firstFieldRef}
                      id="help-name"
                      name="name"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Enter your full name"
                      aria-invalid={Boolean(errors.name)}
                      className="h-10"
                    />
                    {errors.name ? (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    ) : null}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="help-email">Email</Label>
                    <Input
                      id="help-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="you@company.ph"
                      aria-invalid={Boolean(errors.email)}
                      className="h-10"
                    />
                    {errors.email ? (
                      <p className="text-xs text-destructive">{errors.email}</p>
                    ) : null}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="help-phone">Phone Number</Label>
                    <Input
                      id="help-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="+63 912 345 6789"
                      aria-invalid={Boolean(errors.phone)}
                      className="h-10"
                    />
                    {errors.phone ? (
                      <p className="text-xs text-destructive">{errors.phone}</p>
                    ) : null}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="help-message">Message</Label>
                    <Textarea
                      id="help-message"
                      name="message"
                      value={values.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="How can we help with your R&D tax claim?"
                      rows={4}
                      aria-invalid={Boolean(errors.message)}
                    />
                    {errors.message ? (
                      <p className="text-xs text-destructive">{errors.message}</p>
                    ) : null}
                  </div>

                  <div className="flex items-center justify-end pt-1">
                    <Button type="submit" variant="default" size="default">
                      Send message
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      ) : null}

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? "Close help form" : "Open help form"}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105 hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
