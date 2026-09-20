import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPostDate, getPost } from "@/lib/blog/posts";

const SLUG = "os-specific-landing-pages-pleaseopen-me";

export const metadata: Metadata = {
  title:
    "We added coming-soon landing pages for stores you haven't shipped to yet",
  description:
    "pleaseopen.me now detects the visitor's OS and shows a dedicated landing state for platforms you haven't shipped to — protecting store conversion data and capturing demand.",
  alternates: {
    canonical: `https://eighteen1.com/blog/${SLUG}`,
  },
  openGraph: {
    title:
      "We added coming-soon landing pages for stores you haven't shipped to yet",
    description:
      "pleaseopen.me now detects the visitor's OS and shows a dedicated landing state for platforms you haven't shipped to — protecting store conversion data and capturing demand.",
    type: "article",
    url: `https://eighteen1.com/blog/${SLUG}`,
    publishedTime: "2026-09-11",
  },
};

export default function OsSpecificLandingPagesPleaseOpenMePage() {
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
            Here&apos;s a problem that&apos;s easy to miss until you actually
            hit it: if your redirect link sends every visitor to the same store
            listing regardless of what device they&apos;re on, you&apos;re
            quietly breaking your own data — even if you only ship to one
            platform.
          </p>
          <p>
            We ran into this ourselves promoting one of our own apps, and
            it&apos;s why we added OS-specific landing states to{" "}
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me
            </a>
            .
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            The problem, concretely
          </h2>
          <p>
            Say your app is iOS-only. Your bio link, your ad, your QR code —
            wherever people are clicking from — points at one redirect, which
            sends everyone straight to your App Store listing. That&apos;s fine
            for iPhone users. For Android users, it&apos;s a dead end: they land
            on a page they literally cannot install from, bounce immediately, and
            that visit still counts as a pageview on your store listing.
          </p>
          <p>
            That last part is the part that actually costs you. Your App Store
            listing&apos;s most important number — view-to-install conversion
            rate — is now being diluted by traffic that was never going to
            convert, for reasons that have nothing to do with your listing, your
            screenshots, or your app description. You end up second-guessing a
            conversion rate that isn&apos;t actually telling you what you think
            it&apos;s telling you.
          </p>
          <p>
            And it&apos;s not just noisy data — it&apos;s a missed signal. Every
            one of those Android clicks was a person who wanted your app and
            couldn&apos;t get it. Sent to a dead end, that interest just
            evaporates. You never find out it existed.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            What&apos;s new
          </h2>
          <p>
            pleaseopen.me now detects the visitor&apos;s OS and, if you
            haven&apos;t shipped to that platform yet, shows a dedicated landing
            state instead of forcing them onto a store listing they can&apos;t
            use. You choose what it shows:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong className="font-semibold text-foreground">
                A demand counter
              </strong>{" "}
              — see how many people have actually hit that &ldquo;not available
              yet&rdquo; wall, so &ldquo;should we build an Android
              version&rdquo; stops being a guess
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Email capture
              </strong>{" "}
              — collect addresses to notify people at launch, or send a coupon
              code when you ship
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Custom link
              </strong>{" "}
              — send them somewhere else entirely: your socials, your website, a
              different product
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                A plain placeholder
              </strong>{" "}
              — if you don&apos;t need any of the above yet, it just quietly does
              its job
            </li>
          </ul>
          <p>
            It&apos;s free to set up alongside the redirect, same as the rest of
            pleaseopen.me.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            Why this matters even if you only serve one store
          </h2>
          <p>
            This is the part that&apos;s easy to underestimate: you don&apos;t
            need to be planning a second platform for this to matter. The moment
            you have{" "}
            <em className="italic text-foreground">any</em> redirect link
            circulating publicly — in a bio, an ad, a QR code on packaging — you
            have no control over who clicks it. Some fraction of that traffic will
            always be on a platform you don&apos;t support, whether you ever build
            for it or not.
          </p>
          <p>
            Without OS-specific handling, that traffic silently corrupts the one
            metric you&apos;re actually trying to optimize: how well your store
            listing converts. You might be running A/B tests on your screenshots,
            rewriting your description, tweaking your icon — all while a chunk of
            your &ldquo;views&rdquo; were structurally incapable of becoming
            installs. You&apos;re optimizing against noise without knowing it.
          </p>
          <p>
            Separating that traffic out doesn&apos;t just protect your data — it
            turns a leak into an asset. Instead of losing every off-platform click
            for nothing, you get a real number for demand on a platform you
            haven&apos;t built for yet, and optionally a list of people to reach
            out to the moment you do.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">Try it</h2>
          <p>
            If you&apos;re running a redirect link for an app that only lives on
            one platform right now, this closes a gap you probably didn&apos;t
            know you had. Set it up alongside your existing redirect — free, same
            as everything else.
          </p>
          <p>
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              Set up your redirect + coming-soon pages &rarr;
            </a>
          </p>
        </div>

        <aside className="mt-14 border-t border-border pt-10">
          <h2 className="text-xl font-bold text-foreground">Further reading</h2>
          <p className="mt-2 text-sm text-muted">
            Related guides on pleaseopen.me:
          </p>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href="https://www.pleaseopen.me/blog/appstore-links-broken-tiktok-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  pleaseopen.me
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  App Store links failing on TikTok and Instagram
                </span>
                <span className="mt-3 inline-block text-sm font-medium text-accent group-hover:underline">
                  Read more &rarr;
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.pleaseopen.me/blog/privacy-policy-for-indie-app-developers"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  pleaseopen.me
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  Privacy policy for indie app developers
                </span>
                <span className="mt-3 inline-block text-sm font-medium text-accent group-hover:underline">
                  Read more &rarr;
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.pleaseopen.me/blog/app-ads-txt-explained"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  pleaseopen.me
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  app-ads.txt explained
                </span>
                <span className="mt-3 inline-block text-sm font-medium text-accent group-hover:underline">
                  Read more &rarr;
                </span>
              </a>
            </li>
          </ul>
        </aside>

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
