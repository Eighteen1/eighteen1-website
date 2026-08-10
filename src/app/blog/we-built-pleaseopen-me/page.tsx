import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPostDate, getPost } from "@/lib/blog/posts";

const SLUG = "we-built-pleaseopen-me";

export const metadata: Metadata = {
  title:
    "We built pleaseopen.me — a free fix for App Store links blocked on TikTok and Instagram",
  description:
    "eighteen1 launched pleaseopen.me: a free bio-link tool that gets App Store and Play Store links past TikTok and Instagram blocks — as a simple redirect, a multi-button social page, or on your own custom domain.",
  alternates: {
    canonical: `https://eighteen1.com/blog/${SLUG}`,
  },
  openGraph: {
    title:
      "We built pleaseopen.me — a free fix for App Store links blocked on TikTok and Instagram",
    description:
      "eighteen1 launched pleaseopen.me: a free bio-link tool that gets App Store and Play Store links past TikTok and Instagram blocks — as a simple redirect, a multi-button social page, or on your own custom domain.",
    type: "article",
    url: `https://eighteen1.com/blog/${SLUG}`,
    publishedTime: "2026-08-10",
  },
};

export default function WeBuiltPleaseOpenMePage() {
  const post = getPost(SLUG);
  if (!post) notFound();

  return (
    <article className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          &larr; Blog
        </Link>

        <header className="mt-8 border-b border-border pb-10">
          <time
            dateTime={post.date}
            className="text-xs font-medium uppercase tracking-wider text-muted"
          >
            {formatPostDate(post.date)}
          </time>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {post.description}
          </p>
        </header>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
          <p>
            At eighteen1 we build small products when we hit a real wall.{" "}
            <strong className="font-semibold text-foreground">
              pleaseopen.me
            </strong>{" "}
            started that way: App Store and Google Play links that look fine in
            Safari, but fail when someone opens them from a TikTok or Instagram
            bio. This is also discussed a lot on Reddit and creator forums —
            usually after install campaigns underperform for no obvious reason.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            The problem
          </h2>
          <p>
            TikTok, Instagram, and Facebook don&apos;t open links in the
            phone&apos;s normal browser. They use an in-app browser. Regular
            websites mostly work.{" "}
            <strong className="font-semibold text-foreground">
              Direct App Store / Play Store URLs often don&apos;t.
            </strong>
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              On <strong className="font-semibold text-foreground">TikTok</strong>
              , people may see{" "}
              <strong className="font-semibold text-foreground">
                &ldquo;Action could not be completed&rdquo;
              </strong>{" "}
              — with no clear next step.
            </li>
            <li>
              On{" "}
              <strong className="font-semibold text-foreground">
                Instagram
              </strong>{" "}
              (and Facebook), store links are increasingly blocked; visitors
              never reach the listing.
            </li>
            <li>
              The same failure hits{" "}
              <strong className="font-semibold text-foreground">
                Linktree, Beacons, and your own website
              </strong>{" "}
              if that page was opened from a bio. Swapping bio-link tools
              doesn&apos;t fix it — the block is in the in-app browser.
            </li>
          </ul>
          <p>
            From the marketer&apos;s side it just looks like &ldquo;low
            conversion.&rdquo;
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            What we shipped
          </h2>
          <p>
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me
            </a>{" "}
            is more than a one-shot redirect. At the core it still solves the
            store-link problem — but it can also be your full bio / social page.
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong className="font-semibold text-foreground">
                Instagram / Facebook
              </strong>{" "}
              — try to escape the in-app browser automatically, then send people
              to the right store. No tutorial on the happy path.
            </li>
            <li>
              <strong className="font-semibold text-foreground">TikTok</strong> —
              show a short open-in-browser tutorial (auto-escape isn&apos;t
              reliable there), then redirect once they&apos;re in a real browser.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Normal browsers
              </strong>{" "}
              — go straight to the correct App Store or Play Store for the
              device.
            </li>
          </ul>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            Not only a redirect
          </h2>
          <p>
            You can drop a pleaseopen.me link into Linktree or Beacons in place
            of a broken store button — that works. You can also skip the extra
            layer entirely and run{" "}
            <strong className="font-semibold text-foreground">
              pleaseopen.me as your own multi-button social page
            </strong>
            : store buttons, socials, website, and whatever else you need on one
            branded page.
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong className="font-semibold text-foreground">
                Multi-button pages
              </strong>{" "}
              — Linktree-style layouts with per-button destinations (including
              store routing that still respects TikTok / Instagram blocks).
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Custom domains
              </strong>{" "}
              — point your own domain at your page so visitors never have to
              land on pleaseopen.me at all.
            </li>
            <li>
              Themes, branding, analytics, and translations so the page feels
              like yours, not a generic bio tool.
            </li>
          </ul>
          <p>
            Simple setup either way: create a slug, add your store URLs (and
            optional buttons), then share the link in your bio — or connect a
            custom domain and make it the homepage for your app installs.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            Why it&apos;s on eighteen1.com
          </h2>
          <p>
            pleaseopen.me is a product from eighteen1 — our company site is for
            projects and legal/context; the product domain owns the how-to guides
            and the tool itself.
          </p>
          <p>If you want the deep dives (errors, Instagram vs TikTok, FAQ):</p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <a
                href="https://pleaseopen.me/blog/appstore-links-broken-tiktok-instagram"
                className="font-medium text-accent hover:underline"
              >
                App Store links failing on TikTok and Instagram
              </a>
            </li>
            <li>
              <a
                href="https://pleaseopen.me/blog/instagram-appstore-links-blocked"
                className="font-medium text-accent hover:underline"
              >
                Instagram blocking App Store links
              </a>
            </li>
            <li>
              <a
                href="https://pleaseopen.me/blog/tiktok-bio-link-appstore-broken"
                className="font-medium text-accent hover:underline"
              >
                TikTok bio link to the App Store not working
              </a>
            </li>
          </ul>

          <h2 className="pt-4 text-2xl font-bold text-foreground">Try it</h2>
          <p>
            Create a free link at{" "}
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me
            </a>
            . If you use it in production, feedback is welcome — we&apos;re
            iterating from real TikTok / Instagram install traffic.
          </p>
        </div>

        <footer className="mt-14 flex flex-wrap items-center gap-4 border-t border-border pt-8">
          <Link
            href="/projects"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
          >
            See our projects
          </Link>
          <a
            href="https://pleaseopen.me"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Open pleaseopen.me
          </a>
        </footer>
      </div>
    </article>
  );
}
