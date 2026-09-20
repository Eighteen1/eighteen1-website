import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AutoplayVideo from "@/components/AutoplayVideo";
import { formatPostDate, getPost } from "@/lib/blog/posts";

const SLUG = "tiktok-instagram-blocking-app-store-links-pleaseopen-me";

export const metadata: Metadata = {
  title:
    "Why TikTok and Instagram block App Store links — and how we fixed it for Byde",
  description:
    "TikTok and Instagram block App Store and Play Store links in their in-app browsers, breaking bio-link installs. Here's why it happens, what \"Action can't be completed\" means, and how we fixed it for Byde with pleaseopen.me.",
  alternates: {
    canonical: `https://eighteen1.com/blog/${SLUG}`,
  },
  openGraph: {
    title:
      "Why TikTok and Instagram block App Store links — and how we fixed it for Byde",
    description:
      "TikTok and Instagram block App Store and Play Store links in their in-app browsers, breaking bio-link installs. Here's why it happens and how we fixed it with pleaseopen.me.",
    type: "article",
    url: `https://eighteen1.com/blog/${SLUG}`,
    publishedTime: "2026-09-20",
  },
  twitter: {
    card: "summary",
    title:
      "Why TikTok and Instagram block App Store links — and how we fixed it for Byde",
    description:
      "TikTok and Instagram block App Store and Play Store links in their in-app browsers, breaking bio-link installs. Here's why it happens and how we fixed it with pleaseopen.me.",
  },
};

export default function TikTokInstagramBlockingAppStoreLinksPage() {
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
            If you&apos;ve put an App Store link in a TikTok or Instagram bio
            and watched your install numbers underperform for no obvious reason,
            you&apos;re not imagining it. TikTok and Instagram both interfere
            with links to the App Store and Play Store inside their built-in
            browsers — and it&apos;s a bigger, quieter problem than most
            creators and app marketers realize.
          </p>
          <p>
            We ran into this ourselves while marketing{" "}
            <a
              href="https://bydeapp.de"
              className="font-medium text-accent hover:underline"
            >
              Byde
            </a>
            , our smart-closet app for men on iOS. This post covers why it
            happens, what it looks like when it does, and the free tool we built
            —{" "}
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me
            </a>{" "}
            — to fix it, both for Byde and for anyone else shipping an app.
          </p>

          <figure className="my-10">
            <Image
              src="/images/blog/fail_screen.png"
              alt="TikTok's &quot;Action can't be completed&quot; error after tapping an App Store link inside TikTok's in-app browser"
              width={1200}
              height={800}
              className="w-full rounded-2xl border border-border"
            />
            <figcaption className="mt-3 text-center text-xs text-muted">
              Bio link without pleaseopen.me — TikTok&apos;s &ldquo;Action
              can&apos;t be completed&rdquo; error after tapping an App Store
              link inside the in-app browser
            </figcaption>
          </figure>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            &ldquo;Action can&apos;t be completed&rdquo; — what&apos;s actually
            happening
          </h2>
          <p>
            If you&apos;ve seen the error{" "}
            <strong className="font-semibold text-foreground">
              &ldquo;Action can&apos;t be completed&rdquo;
            </strong>{" "}
            after tapping a link inside TikTok, that&apos;s TikTok&apos;s
            in-app browser refusing to hand the link off to Safari or Chrome,
            and refusing to load the App Store page itself either. The visitor
            is stuck on a dead end, with no obvious way forward — most just give
            up and leave.
          </p>
          <p>
            This isn&apos;t a bug in your link. It&apos;s deliberate. TikTok,
            Instagram, and Facebook all render links inside their own in-app
            browser rather than the phone&apos;s default one, and each platform
            has its own rules — sometimes shifting week to week — about which
            destinations it lets through cleanly.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            Why TikTok blocks App Store links
          </h2>
          <p>
            TikTok&apos;s in-app browser is a walled garden by design: it keeps
            people inside the TikTok app instead of handing them off to Safari,
            and App Store / Play Store URLs are one of the categories that gets
            caught by it. There&apos;s no reliable auto-redirect that works from
            inside TikTok&apos;s browser — which is why the fix has to be a
            short, visible step: prompt the visitor to tap &ldquo;open in
            browser&rdquo; themselves, then redirect once they&apos;ve actually
            left TikTok&apos;s in-app view.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            Why Instagram and Facebook block App Store links
          </h2>
          <p>
            Meta&apos;s apps behave differently, and the behavior isn&apos;t
            fully static — Instagram and Facebook have both gone through periods
            of blocking App Store / Play Store links directly in their in-app
            browsers, which is where a lot of the &ldquo;my bio link stopped
            converting&rdquo; confusion comes from: nothing changed on your end,
            but the platform&apos;s handling of store links did. Where an
            automatic escape from the in-app browser is possible, it can happen
            without the visitor noticing — no tutorial step needed. Where it
            isn&apos;t, the same open-in-browser handoff TikTok needs becomes
            the fallback.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            It&apos;s not your bio-link tool&apos;s fault
          </h2>
          <p>
            A common troubleshooting step is switching bio-link tools —
            Linktree to Beacons, Beacons to a custom page, and so on — hoping a
            different layout fixes conversion. It usually doesn&apos;t, because
            the block isn&apos;t happening at the bio-link layer. It&apos;s
            happening in the in-app browser itself, before the visitor ever
            reaches your store listing. If your Linktree page opens fine but the
            store button on it still fails, that&apos;s the same underlying
            issue: the browser, not the tool.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            How we fixed this for Byde
          </h2>
          <p>
            At eighteen1, this stopped being a theoretical problem the moment we
            started running TikTok and Instagram traffic to{" "}
            <a
              href="https://bydeapp.de"
              className="font-medium text-accent hover:underline"
            >
              Byde
            </a>
            . Byde is an iOS wardrobe app — you build a digital closet from
            clothes you already own and get outfit suggestions, and most of our
            early audience finds it through short-form video, not search. That
            means almost all of our install traffic starts inside an in-app
            browser, which is exactly the traffic TikTok and Instagram interfere
            with.
          </p>
          <p>We needed a link that would:</p>
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Escape Instagram and Facebook&apos;s in-app browser automatically
              where possible, landing visitors on the App Store with no extra
              steps.
            </li>
            <li>
              Walk TikTok visitors through a short &ldquo;open in
              browser&rdquo; tutorial where auto-escape isn&apos;t reliable,
              then redirect them straight to the store.
            </li>
            <li>
              Detect the visitor&apos;s device and send iOS traffic to the App
              Store and Android traffic to Google Play — from one single link, so
              we didn&apos;t need separate bios or split traffic manually.
            </li>
          </ol>
          <p>
            Nothing free or existing did all three cleanly, so we built{" "}
            <strong className="font-semibold text-foreground">
              pleaseopen.me
            </strong>{" "}
            and pointed Byde&apos;s own &ldquo;Download on the App Store&rdquo;
            button at{" "}
            <a
              href="https://pleaseopen.me/byde"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me/byde
            </a>
            . It&apos;s been running in production on Byde&apos;s TikTok and
            Instagram bios since.
          </p>

          <figure className="my-10">
            <AutoplayVideo
              src="/images/blog/success_video.mp4"
              className="w-full rounded-2xl border border-border"
            />
            <figcaption className="mt-3 text-center text-xs text-muted">
              Bio link with pleaseopen.me — tapping the bio link, short
              open-in-browser tutorial, then landing on the App Store via
              pleaseopen.me/byde
            </figcaption>
          </figure>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            What pleaseopen.me does
          </h2>
          <p>
            The core of the tool is the redirect: one link, in your bio, that
            gets visitors past the in-app browser blocks and onto the correct
            store for their device — App Store for iOS, Play Store for Android,
            no manual splitting.
          </p>
          <p>
            Beyond the redirect, we kept adding pieces we ourselves needed while
            shipping apps without a full marketing site:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong className="font-semibold text-foreground">
                Free privacy policy generation and hosting.
              </strong>{" "}
              App Store Connect and Play Console both require a live privacy
              policy URL before you can submit. Instead of standing up a whole
              website for one page, pleaseopen.me asks a few questions about your
              app — what data you collect, which SDKs you use (analytics, ad
              networks, crash reporting) — and generates and hosts a policy that
              actually matches your app, at{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 text-sm text-foreground">
                pleaseopen.me/yourapp/privacy
              </code>
              .
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Free ads.txt and app-ads.txt hosting.
              </strong>{" "}
              If you&apos;re running ads through AdMob, AppLovin, Meta, or
              similar, those networks crawl your developer domain for an ads.txt
              file, and no file usually means lower fill rates. pleaseopen.me
              hosts it at the domain root crawlers expect — no domain of your
              own required.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                &ldquo;Coming soon&rdquo; pages for platforms you haven&apos;t
                shipped to yet
              </strong>{" "}
              (in progress). If your app is live on iOS but not Android yet, or
              vice versa, you can point your bio link at a page that tells
              visitors it&apos;s on the way for their platform instead of sending
              them to a dead store listing or nothing at all.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Multi-button, Linktree-style pages
              </strong>
              , if you want pleaseopen.me to be your whole bio page rather than
              just the store redirect — with themes, custom branding, and custom
              domains if you want visitors to never see the pleaseopen.me domain
              at all.
            </li>
          </ul>
          <p>
            Everything above the paid tier (custom domains, multiple apps under
            one account) is free, including the redirect itself, the privacy
            policy hosting, and the ads.txt hosting.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            If you&apos;re seeing this on your own app
          </h2>
          <p>
            A few quick things worth checking if App Store or Play Store links
            in your bio aren&apos;t converting the way you&apos;d expect:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              Test the link from inside TikTok and Instagram specifically, not
              just in Safari — the failure only shows up inside the in-app
              browser.
            </li>
            <li>
              If you&apos;re on Linktree, Beacons, or your own site, check
              whether the store{" "}
              <em className="italic text-foreground">button</em> on that page
              fails when the page itself was opened from a bio — that&apos;s the
              same block, one layer deeper.
            </li>
            <li>
              If you don&apos;t have a developer website yet, you&apos;ll hit
              the privacy policy and ads.txt requirements separately from the
              link-blocking issue — worth solving both at once rather than one at
              a time.
            </li>
          </ul>
          <p>
            You can create a free redirect at{" "}
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me
            </a>{" "}
            in about a minute — claim a slug, add your store links, and swap it
            in wherever your App Store or Play Store link currently lives.
          </p>
        </div>

        <aside className="mt-14 border-t border-border pt-10">
          <h2 className="text-xl font-bold text-foreground">Further reading</h2>
          <p className="mt-2 text-sm text-muted">
            Related posts from eighteen1 and pleaseopen.me:
          </p>
          <ul className="mt-6 space-y-4">
            <li>
              <Link
                href="/blog/we-built-pleaseopen-me"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  eighteen1.com
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  We built pleaseopen.me — a free fix for App Store links
                  blocked on TikTok and Instagram
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/privacy-policy-generation-pleaseopen-me"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  eighteen1.com
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  We added privacy policy generation + hosting to pleaseopen.me
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/os-specific-landing-pages-pleaseopen-me"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  eighteen1.com
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  OS-specific landing pages on pleaseopen.me
                </span>
              </Link>
            </li>
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
                href="https://bydeapp.de"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  Byde
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  Byde — Smart Closet for Men on iOS
                </span>
                <span className="mt-3 inline-block text-sm font-medium text-accent group-hover:underline">
                  Visit bydeapp.de &rarr;
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
            href="https://pleaseopen.me/claim"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Create your free link
          </a>
        </footer>
      </div>
    </article>
  );
}
