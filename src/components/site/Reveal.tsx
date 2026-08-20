import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { useInViewOnce } from "@/hooks/use-in-view";

function revealClass(visible: boolean, className?: string) {
  return `reveal${visible ? " reveal-visible" : ""}${className ? ` ${className}` : ""}`;
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={revealClass(inView, className)}
      style={{ "--reveal-delay": `${delay * 1000}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>("-60px 0px");

  // The cascade is driven from the container so the whole group shares one
  // observer and each item only needs its ordinal to compute a delay.
  let ordinal = 0;

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child) => {
        if (!isValidElement<StaggerItemProps>(child) || child.type !== StaggerItem) return child;
        return cloneElement(child, { visible: inView, delay: ordinal++ * 0.1 });
      })}
    </div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  visible?: boolean;
  delay?: number;
};

export function StaggerItem({ children, className, visible = true, delay = 0 }: StaggerItemProps) {
  return (
    <div
      className={revealClass(visible, className)}
      style={{ "--reveal-delay": `${delay * 1000}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
          tone === "dark" ? "text-accent-on-navy" : "text-accent"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl leading-tight sm:text-4xl ${
          tone === "dark" ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            tone === "dark" ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
