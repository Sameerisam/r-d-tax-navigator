import { lazy, Suspense, useEffect, useState } from "react";

const Toaster = lazy(() =>
  import("@/components/ui/sonner").then((module) => ({ default: module.Toaster })),
);

let arm: (() => void) | undefined;

/**
 * Mounts the toast UI on first use. The toast library ships ~12 kB of gzipped
 * JavaScript and injects ~15 kB of CSS the moment it mounts, which is wasted on
 * every visitor who never submits the contact form.
 *
 * Callers do not need to arm the host before raising a toast: the library
 * replays still-active toasts to each new subscriber, so a toast fired while
 * this chunk is still downloading is shown once the host subscribes.
 */
export function armToaster() {
  arm?.();
}

export function ToastHost() {
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    arm = () => setArmed(true);
    return () => {
      arm = undefined;
    };
  }, []);

  if (!armed) return null;

  return (
    <Suspense fallback={null}>
      <Toaster />
    </Suspense>
  );
}
