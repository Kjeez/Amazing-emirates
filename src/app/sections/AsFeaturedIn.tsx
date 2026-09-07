
/* ─────────────────────────── publication wordmarks ── */

/*
  Each publication is rendered as a custom mini-typographic logo:
  - "headline" → large serif or bold sans, gold or charcoal
  - "sub"      → small spaced uppercase, warmgray
  - variant    → "gold" | "charcoal"
  - layout     → "stack" (headline + sub below) | "beside" (THE above DAILY)
*/

interface Pub {
  id: string;
  headline: string;
  sub?: string;
  variant: "gold" | "charcoal";
  layout?: "stack" | "compact";
}

const PUBLICATIONS: Pub[] = [
  { id: "fp",  headline: "FINANCIAL", sub: "PUBLICATION", variant: "gold" },
  { id: "gn",  headline: "GLOBAL",    sub: "NEWS",        variant: "charcoal" },
  { id: "br",  headline: "BUSINESS",  sub: "REVIEW",      variant: "gold" },
  { id: "rp",  headline: "REGIONAL",  sub: "POST",        variant: "charcoal" },
  { id: "lj",  headline: "LUXURY",    sub: "JOURNAL",     variant: "gold" },
  { id: "td",  headline: "DAILY",     sub: "THE",         variant: "charcoal", layout: "compact" },
];

/* ────────────────────── single wordmark ── */

function Wordmark({ pub }: { pub: Pub }) {
  const isGold     = pub.variant === "gold";
  const isCompact  = pub.layout === "compact";
  const headlineClx = isGold
    ? "font-serif text-[1.65rem] leading-none tracking-tight text-gold"
    : "font-serif text-[1.65rem] leading-none tracking-tight text-charcoal";

  if (isCompact) {
    /* "THE" sits small above "DAILY" */
    return (
      <div className="flex flex-col items-center leading-none">
        <span className="mb-0.5 text-[8px] font-semibold uppercase tracking-[0.32em] text-warmgray">
          {pub.sub}
        </span>
        <span className={headlineClx}>{pub.headline}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center leading-none">
      <span className={headlineClx}>{pub.headline}</span>
      {pub.sub && (
        <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.32em] text-warmgray">
          {pub.sub}
        </span>
      )}
    </div>
  );
}

/* ────────────────── divider between items ── */

function Divider() {
  return (
    <span
      aria-hidden
      className="mx-10 h-8 w-px shrink-0 bg-gold/25 lg:mx-14"
    />
  );
}

/* ────────── one full set of items (track) ── */

function Track() {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden /* duplicated set is hidden from a11y */
    >
      {PUBLICATIONS.map((pub, i) => (
        <div key={pub.id} className="flex shrink-0 items-center">
          {i > 0 && <Divider />}
          <Wordmark pub={pub} />
        </div>
      ))}
      {/* trailing divider before the loop starts again */}
      <Divider />
    </div>
  );
}

/* ─────────────────────────────── section ── */

export default function AsFeaturedIn() {
  return (
    <section
      className="overflow-hidden bg-ivory py-10 md:py-12"
      aria-label="As featured in"
    >
      {/* Label */}
      <div className="mb-6 flex flex-col items-center gap-2 text-center">
        <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-warmgray">
          As Featured In
        </p>
        <span className="block h-px w-8 bg-gold/55" />
      </div>

      {/* Marquee track — two identical sets side-by-side for seamless loop */}
      <div
        className="flex w-full"
        style={{
          /* pause on hover */
          /* We use a CSS custom-property trick so Tailwind's group-hover can't
             reach inside; instead we use inline style + :hover on the outer div */
        }}
      >
        <div
          className="flex animate-marquee items-center hover:[animation-play-state:paused]"
          style={{ willChange: "transform" }}
        >
          {/* First set — visible */}
          <div className="flex shrink-0 items-center">
            {PUBLICATIONS.map((pub, i) => (
              <div key={pub.id} className="flex shrink-0 items-center">
                {i > 0 && <Divider />}
                <Wordmark pub={pub} />
              </div>
            ))}
            <Divider />
          </div>

          {/* Duplicate set — creates the seamless loop */}
          <Track />
        </div>
      </div>
    </section>
  );
}
