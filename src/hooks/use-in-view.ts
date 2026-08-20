import { useEffect, useRef, useState } from "react";

/**
 * Reports the first time an element scrolls into view, then stops observing.
 * Replaces the equivalent helper from the animation library so scroll-triggered
 * reveals cost nothing beyond an IntersectionObserver.
 */
export function useInViewOnce<T extends HTMLElement>(rootMargin = "-80px 0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView };
}
