/**
 * Lightweight directory metadata used by the site shell (ticker, footer, SEO).
 * Keep this file free of the large resources catalog so the homepage JS stays small.
 */

export const LAST_REVIEWED = "2026-08-20";
export const LAST_REVIEWED_LABEL = "August 20, 2026";
export const REVIEW_CADENCE = "Reviewed monthly by the BLMC research desk";

export const SOURCE_DISCLAIMER =
  "Details are summarised for research purposes. Always confirm current rates, eligibility, and deadlines with the official source before filing.";

/**
 * Counts mirror the arrays in resources.ts. Update both when records change.
 * Shell components import from here instead of resources.ts to avoid a ~70KB payload.
 */
export const DIRECTORY_STATS = {
  incentives: 10,
  industries: 8,
  agencies: 5,
  guides: 6,
  glossary: 20,
};
