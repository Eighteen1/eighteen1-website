interface StoreLink {
  label: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  highlight?: string;
  storeLinks?: StoreLink[];
}

export default function ProjectCard({
  title,
  description,
  highlight,
  storeLinks,
}: ProjectCardProps) {
  return (
    <div className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/40 hover:bg-surface-hover">
      {highlight && (
        <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {highlight}
        </span>
      )}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

      {storeLinks && storeLinks.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {storeLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
