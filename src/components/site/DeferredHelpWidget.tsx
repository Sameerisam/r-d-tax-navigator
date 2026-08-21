import { lazy, Suspense, useEffect, useState } from "react";

/**
 * Loads the help form after first paint / idle time so its form controls and
 * validation stay out of the critical homepage JavaScript.
 */
const HelpWidget = lazy(() =>
  import("./HelpWidget").then((module) => ({ default: module.HelpWidget })),
);

export function DeferredHelpWidget() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(enable, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(enable, 1200);
    return () => window.clearTimeout(t);
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <HelpWidget />
    </Suspense>
  );
}
