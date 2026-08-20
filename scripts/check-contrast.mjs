/**
 * Reports WCAG contrast ratios for the text/background pairs the site actually
 * renders, including the alpha-modified variants Tailwind generates.
 *
 * Run with: node scripts/check-contrast.mjs
 */

function oklchToSrgb(L, C, hDeg) {
  const h = (hDeg * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;

  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;

  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

const luminance = ([r, g, b]) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

const ratio = (fg, bg) => {
  const [a, b] = [luminance(fg), luminance(bg)].sort((x, y) => y - x);
  return (a + 0.05) / (b + 0.05);
};

// Compositing happens in sRGB space, so alpha is applied to the linear values
// the same way the browser blends them after gamma decoding.
const blend = (fg, bg, alpha) => fg.map((c, i) => c * alpha + bg[i] * (1 - alpha));

const c = {
  background: oklchToSrgb(0.978, 0.004, 106),
  foreground: oklchToSrgb(0.34, 0.032, 258),
  card: oklchToSrgb(1, 0, 0),
  cardForeground: oklchToSrgb(0.3, 0.03, 258),
  primary: oklchToSrgb(0.245, 0.062, 262),
  primaryForeground: oklchToSrgb(0.98, 0.005, 106),
  primarySoft: oklchToSrgb(0.32, 0.06, 262),
  muted: oklchToSrgb(0.955, 0.006, 106),
  mutedForeground: oklchToSrgb(0.53, 0.026, 258),
  accent: oklchToSrgb(0.52, 0.11, 163),
  accentForeground: oklchToSrgb(0.99, 0.01, 163),
  accentSoft: oklchToSrgb(0.94, 0.036, 163),
  accentOnNavy: oklchToSrgb(0.68, 0.13, 163),
};

const pairs = [
  ["foreground on background", c.foreground, c.background, 1],
  ["muted-foreground on background", c.mutedForeground, c.background, 1],
  ["muted-foreground on card", c.mutedForeground, c.card, 1],
  ["muted-foreground on muted", c.mutedForeground, c.muted, 1],
  ["card-foreground on card", c.cardForeground, c.card, 1],
  ["accent on background", c.accent, c.background, 1],
  ["accent on card", c.accent, c.card, 1],
  ["accent on secondary/muted", c.accent, c.muted, 1],
  ["accent-foreground on accent", c.accentForeground, c.accent, 1],
  ["accent-on-navy on primary", c.accentOnNavy, c.primary, 1],
  ["accent-on-navy on primary-soft", c.accentOnNavy, c.primarySoft, 1],
  ["primary-foreground on primary", c.primaryForeground, c.primary, 1],
  ["primary-foreground/90 on primary", c.primaryForeground, c.primary, 0.9],
  ["primary-foreground/80 on primary", c.primaryForeground, c.primary, 0.8],
  ["primary-foreground/70 on primary", c.primaryForeground, c.primary, 0.7],
  ["primary-foreground/70 on primary-soft", c.primaryForeground, c.primarySoft, 0.7],
  ["primary-foreground/60 on primary", c.primaryForeground, c.primary, 0.6],
  ["primary-foreground/55 on primary", c.primaryForeground, c.primary, 0.55],
  ["primary-foreground/50 on primary", c.primaryForeground, c.primary, 0.5],
  ["primary on accent-soft", c.primary, c.accentSoft, 1],
];

for (const [label, fg, bg, alpha] of pairs) {
  const value = ratio(alpha === 1 ? fg : blend(fg, bg, alpha), bg);
  const verdict = value >= 4.5 ? "AA" : value >= 3 ? "AA-large-only" : "FAIL";
  console.log(`${value.toFixed(2).padStart(6)}  ${verdict.padEnd(14)} ${label}`);
}
