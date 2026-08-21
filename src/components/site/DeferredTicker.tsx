import { lazy, Suspense, useEffect, useState } from "react";

/**
 * Defers the top ticker until after first paint so its duplicated DOM and
 * continuous animation are not part of the critical rendering path.
 */
const Ticker = lazy(() => import("./Ticker").then((m) => ({ default: m.Ticker })));

export function DeferredTicker() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(enable, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(enable, 800);
    return () => window.clearTimeout(t);
  }, []);

  if (!ready) {
    return (
      <div
        className="fixed inset-x-0 top-0 z-50 h-7 border-b border-primary-foreground/10 bg-primary"
        aria-hidden="true"
      />
    );
  }

  return (
    <Suspense
      fallback={
        <div
          className="fixed inset-x-0 top-0 z-50 h-7 border-b border-primary-foreground/10 bg-primary"
          aria-hidden="true"
        />
      }
    >
      <Ticker />
    </Suspense>
  );
}
