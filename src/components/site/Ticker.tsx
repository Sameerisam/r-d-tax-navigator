import { DIRECTORY_STATS, LAST_REVIEWED_LABEL } from "./directory-meta";

const items = [
  `${DIRECTORY_STATS.incentives} indexed incentive records`,
  `${DIRECTORY_STATS.industries} industry directories`,
  `${DIRECTORY_STATS.agencies} agencies covered`,
  `${DIRECTORY_STATS.guides} claim guides`,
  `reviewed ${LAST_REVIEWED_LABEL}`,
  "every record cites its official source",
];

export function Ticker() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-50 h-7 overflow-hidden border-b border-primary-foreground/10 bg-primary"
      aria-hidden="true"
    >
      <div className="flex w-max animate-ticker items-center whitespace-nowrap py-1.5">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {items.map((item) => (
              <div key={item} className="flex items-center">
                <span className="px-4 text-[10px] font-medium uppercase tracking-[0.14em] text-primary-foreground/60">
                  {item}
                </span>
                <span className="text-accent-on-navy" aria-hidden="true">
                  ·
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
