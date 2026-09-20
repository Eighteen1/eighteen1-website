import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPostDate, getPost } from "@/lib/blog/posts";

const SLUG = "privacy-policy-generation-pleaseopen-me";

export const metadata: Metadata = {
  title: "We added privacy policy generation + hosting to pleaseopen.me",
  description:
    "pleaseopen.me now generates and hosts an app-specific privacy policy URL you can drop into App Store Connect or Play Console — no developer website required.",
  alternates: {
    canonical: `https://eighteen1.com/blog/${SLUG}`,
  },
  openGraph: {
    title: "We added privacy policy generation + hosting to pleaseopen.me",
    description:
      "pleaseopen.me now generates and hosts an app-specific privacy policy URL you can drop into App Store Connect or Play Console — no developer website required.",
    type: "article",
    url: `https://eighteen1.com/blog/${SLUG}`,
    publishedTime: "2026-08-15",
  },
};

export default function PrivacyPolicyGenerationPleaseOpenMePage() {
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
            If you&apos;ve shipped an app before, you know the drill: you get to
            the App Store or Play Store submission screen, it asks for a privacy
            policy URL, and if you don&apos;t already have a website, you&apos;re
            suddenly building one just to host a single page you&apos;ll probably
            never look at again.
          </p>
          <p>
            We ran into this ourselves enough times that we decided to build it
            into{" "}
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me
            </a>{" "}
            directly.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            What&apos;s new
          </h2>
          <p>
            pleaseopen.me now includes a guided privacy policy generator and
            hosting, alongside the TikTok/Instagram in-app-browser bounce page
            the tool started out as.
          </p>
          <p>
            Instead of a blank text box or a generic one-size-fits-all template,
            the generator walks you through the actual data practices of your
            app:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              App info — name, platform, category, contact details
            </li>
            <li>
              What data you collect (if any) — personal info, location, analytics
            </li>
            <li>
              Which third-party SDKs you use — analytics tools, ad networks,
              crash reporting — and generates the right disclosure language for
              each
            </li>
            <li>
              Ads and monetization setup, in-app purchases, subscriptions
            </li>
            <li>
              A flag (not an auto-generated clause) if your app is directed at
              children, since that space has stricter requirements than a
              standard policy can safely cover
            </li>
          </ul>
          <p>
            You get an editable preview before anything goes live, and the
            finished policy is hosted at{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 text-sm text-foreground">
              pleaseopen.me/yourslug/privacy
            </code>{" "}
            — a URL you can drop straight into your App Store Connect or Play
            Console listing.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            Why we built it this way
          </h2>
          <p>
            Most free privacy policy tools are built for websites, not apps —
            they don&apos;t ask about ad SDKs, mediation platforms, or
            app-specific data flows, so developers end up with a policy that
            technically exists but doesn&apos;t actually describe what their app
            does. We wanted something that&apos;s fast to fill out but still asks
            the right questions for an app specifically.
          </p>
          <p>
            To be clear about scope: this generates a solid, template-based
            starting point, not a substitute for legal advice. It&apos;s not
            built by a law firm, and if your app has more complex compliance
            needs — significant EU/international traffic, sensitive data
            categories, or anything aimed at children — that&apos;s a case for
            reading up on the specifics or talking to someone who specializes in
            it. For the average indie app collecting standard analytics and
            running ads, it should cover what stores and users actually expect to
            see.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            Versioning, so store review doesn&apos;t break on you
          </h2>
          <p>
            One detail we cared about: app stores sometimes cache your privacy
            policy URL&apos;s content at review time, so if you silently change
            what&apos;s published at that URL later, it can create a mismatch
            between what was reviewed and what&apos;s live. pleaseopen.me keeps
            version history for your policy so a URL that was already submitted
            stays consistent, and you can see exactly what changed and when if
            you do need to update it.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">Try it</h2>
          <p>
            If you&apos;re building an app solo or with a small team and
            don&apos;t have a developer website, this should save you the step of
            standing one up just to host a legal page. It&apos;s part of the
            free tier — one app, generation, hosting, and unlimited edits, no
            account required to get started. Multiple apps under one account and
            a custom domain are part of the paid plan for studios managing more
            than one app.
          </p>
          <p>
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              Generate and host your privacy policy free &rarr;
            </a>
          </p>
          <p>
            We&apos;re also working on ads.txt hosting as a companion feature,
            for anyone running ads through AdMob, AppLovin, or similar — more on
            that soon.
          </p>
        </div>

        <aside className="mt-14 border-t border-border pt-10">
          <h2 className="text-xl font-bold text-foreground">Further reading</h2>
          <p className="mt-2 text-sm text-muted">
            More from eighteen1 on privacy policies and ads.txt:
          </p>
          <ul className="mt-6 space-y-4">
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
            <li>
              <a
                href="https://medium.com/@eighteen1.studios/what-indie-developers-actually-need-in-a-privacy-policy-025635b66e2a"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  Medium
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  What indie developers actually need in a privacy policy
                </span>
                <span className="mt-3 inline-block text-sm font-medium text-accent group-hover:underline">
                  Read more &rarr;
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@eighteen1.studios/ads-txt-explained-why-your-app-needs-one-even-without-a-website-4c448a5a0122"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  Medium
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  ads.txt explained: why your app needs one even without a
                  website
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
