import Link from "next/link";
import { APP_STORE_LINK_POST_ALTERNATES } from "@/lib/blog/posts";

const LABELS = {
  en: "English",
  de: "Deutsch",
  ko: "한국어",
  es: "Español",
} as const;

interface LanguageSwitcherProps {
  current: keyof typeof APP_STORE_LINK_POST_ALTERNATES;
  label?: string;
}

export default function LanguageSwitcher({
  current,
  label = "Also available in",
}: LanguageSwitcherProps) {
  return (
    <nav
      aria-label="Language versions"
      className="mt-6 flex flex-wrap items-center gap-2 text-sm"
    >
      <span className="text-muted">{label}:</span>
      {(
        Object.keys(APP_STORE_LINK_POST_ALTERNATES) as Array<
          keyof typeof APP_STORE_LINK_POST_ALTERNATES
        >
      ).map((locale) =>
        locale === current ? (
          <span
            key={locale}
            className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent"
          >
            {LABELS[locale]}
          </span>
        ) : (
          <Link
            key={locale}
            href={APP_STORE_LINK_POST_ALTERNATES[locale]}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {LABELS[locale]}
          </Link>
        )
      )}
    </nav>
  );
}
