import Image from "next/image";

interface FeaturedProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  screenshot: string;
  appStoreUrl: string;
  websiteUrl: string;
}

export default function FeaturedProjectCard({
  title,
  tagline,
  description,
  icon,
  screenshot,
  appStoreUrl,
  websiteUrl,
}: FeaturedProjectCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-accent/50 bg-surface">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

      <div className="relative grid gap-8 p-8 lg:grid-cols-2 lg:p-10">
        {/* Left: info */}
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-block w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            New Release
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

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Download on the App Store
            </a>
            <a
              href={`https://${websiteUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              {websiteUrl} &rarr;
            </a>
          </div>
        </div>

        {/* Right: screenshot */}
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
      </div>
    </div>
  );
}
