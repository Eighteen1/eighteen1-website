import Image from "next/image";

interface CtaLink {
  label: string;
  url: string;
}

interface FeaturedProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  screenshot?: string;
  badge?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  tags?: string[];
}

export default function FeaturedProjectCard({
  title,
  tagline,
  description,
  icon,
  screenshot,
  badge = "New Release",
  primaryCta,
  secondaryCta,
  tags,
}: FeaturedProjectCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-accent/50 bg-surface">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

      <div
        className={`relative grid gap-8 p-8 lg:p-10 ${screenshot ? "lg:grid-cols-2" : ""}`}
      >
        {/* Left: info */}
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-block w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {badge}
          </span>

          <div className="flex items-center gap-4">
            <Image
              src={icon}
              alt={`${title} icon`}
              width={64}
              height={64}
              className="rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-extrabold">{title}</h3>
              <p className="text-sm text-muted">{tagline}</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted">
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border px-2.5 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {primaryCta && (
              <a
                href={primaryCta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent hover:underline"
              >
                {secondaryCta.label} &rarr;
              </a>
            )}
          </div>
        </div>

        {/* Right: screenshot */}
        {screenshot && (
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[280px]">
              <Image
                src={screenshot}
                alt={`${title} screenshot`}
                width={280}
                height={560}
                className="rounded-2xl border border-border shadow-2xl shadow-accent/10"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
