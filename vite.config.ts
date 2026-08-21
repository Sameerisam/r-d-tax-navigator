// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Avoid eager modulepreload of the whole router graph so CSS/HTML win the
  // network race on slow mobile (modulepreload was competing with first paint).
  vite: {
    build: {
      modulePreload: false,
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: {
      entry: "server",
      // Inline matched-route CSS so first paint is not blocked on a second
      // stylesheet round-trip. CSS is already trimmed (~44KB) via narrow @source.
      build: { inlineCss: true },
    },
  },
});
