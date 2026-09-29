import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPostDate, getPost } from "@/lib/blog/posts";

const SLUG = "tiktok-creators-unaware-broken-app-store-bio-links";

export const metadata: Metadata = {
  title:
    "We Found Hundreds of TikTok Creators With Broken App Store Links. Most Don't Know.",
  description:
    "While researching TikTok marketing for our app, we noticed a pattern: creators with App Store links in their bio that fail on iPhones, and they keep posting anyway. Here's what we learned.",
  alternates: {
    canonical: `https://eighteen1.com/blog/${SLUG}`,
  },
  openGraph: {
    title:
      "We Found Hundreds of TikTok Creators With Broken App Store Links. Most Don't Know.",
    description:
      "While researching TikTok marketing for our app, we noticed a pattern: creators with App Store links in their bio that fail on iPhones, and they keep posting anyway. Here's what we learned.",
    type: "article",
    url: `https://eighteen1.com/blog/${SLUG}`,
    publishedTime: "2026-09-29",
  },
};

export default function TikTokCreatorsUnawareBrokenLinksPage() {
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
            When we launched our app{" "}
            <Link
              href="/projects"
              className="font-medium text-accent hover:underline"
            >
              Byde
            </Link>
            , we spent a lot of time on TikTok, watching what other app makers
            and creators were doing. Along the way we noticed something that
            changed how we think about our own marketing.
          </p>
          <p>
            A surprising number of TikTok accounts have an App Store or Play
            Store link in their bio that{" "}
            <strong className="font-semibold text-foreground">
              doesn&apos;t work for a large share of their viewers
            </strong>
            . And most of them appear to have no idea.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            How we noticed
          </h2>
          <p>
            We had already run into the problem ourselves: our own store links
            showed &ldquo;Action can&apos;t be completed&rdquo; when tapped from
            TikTok. That&apos;s why we built{" "}
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me
            </a>{" "}
            in the first place — and why we wrote about{" "}
            <Link
              href="/blog/tiktok-instagram-blocking-app-store-links-pleaseopen-me"
              className="font-medium text-accent hover:underline"
            >
              why TikTok and Instagram block App Store links
            </Link>
            .
          </p>
          <p>
            Once we knew what to look for, we started seeing it everywhere.
            We&apos;d open a creator&apos;s profile, tap the bio link on an
            iPhone, and land on a blank white page.
          </p>
          <p>A few things stood out:</p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong className="font-semibold text-foreground">
                These weren&apos;t dead accounts.
              </strong>{" "}
              Many of them posted regularly and were clearly trying to grow an
              app or a brand.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                The link had usually been like that for a long time.
              </strong>{" "}
              It wasn&apos;t a recent glitch, and it just never got fixed.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Some of the accounts had large followings,
              </strong>{" "}
              which means real traffic was probably hitting the dead end every
              day.
            </li>
          </ul>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            The part that surprised us: it depends on the device
          </h2>
          <p>
            We assumed everyone saw the same error. They don&apos;t. When we
            tested, the results split by device and link type:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong className="font-semibold text-foreground">Desktop:</strong>{" "}
              an App Store link opens the App Store page.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Android phone, App Store link:
              </strong>{" "}
              opens.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                iPhone, Play Store link:
              </strong>{" "}
              the Play Store page opens.
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                iPhone, App Store link:
              </strong>{" "}
              a white page reading &ldquo;Action can&apos;t be completed.&rdquo;
            </li>
            <li>
              <strong className="font-semibold text-foreground">
                Android phone, Play Store link:
              </strong>{" "}
              a &ldquo;potentially unsafe&rdquo; warning first. The listing then
              loads, but you can&apos;t download, and &ldquo;Open in Play Store
              app&rdquo; fails with the same error.
            </li>
          </ul>
          <p className="text-sm italic">
            Tested September 2026. Behavior may change with app and OS updates.
          </p>
          <p>
            We think this explains why so many creators never fixed it. If you
            test on a laptop, or on the wrong phone for the link you posted,
            everything looks fine. You&apos;d have to tap the link from inside
            TikTok on the right device to see it fail. As far as we could tell,
            it also seems to work more reliably on some verified business
            accounts than on personal or non-verified accounts, so a
            creator&apos;s own experience may not match their viewers&apos;. We
            haven&apos;t been able to confirm exactly which account types are
            affected, so we&apos;re flagging it as something to check rather
            than a rule.
          </p>
          <p>
            We wrote up the device-by-device results in more detail here:{" "}
            <a
              href="https://pleaseopen.me/is-your-tiktok-bio-link-broken-app-store-play-store-test"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline"
            >
              Is Your TikTok Bio Link Broken?
            </a>
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            There&apos;s no feedback loop
          </h2>
          <p>
            A direct store link has no analytics attached. A creator can&apos;t
            see:
          </p>
          <ul className="list-disc space-y-3 pl-5">
            <li>how many people tapped it,</li>
            <li>how many of them hit an error,</li>
            <li>which devices or countries they came from.</li>
          </ul>
          <p>
            TikTok doesn&apos;t alert you either. The visitor just leaves, and
            from the creator&apos;s side nothing happened. Without any signal, a
            broken link can sit in a bio for months.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            What this means for anyone marketing an app on TikTok
          </h2>
          <p>
            If you&apos;re driving downloads through TikTok, some lessons are
            worth taking from this.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              1. Test the funnel on real devices.
            </strong>{" "}
            Check your bio link from inside TikTok on both an iPhone and an
            Android phone, with each store link, not only on your own device.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              2. Assume there are silent losses.
            </strong>{" "}
            If viewers can&apos;t reach the store, you won&apos;t see an error,
            only lower installs than your views suggest.
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              3. Don&apos;t rely on a direct store link in an in-app browser.
            </strong>{" "}
            Route visitors through a link that first gets them out of TikTok&apos;s
            in-app browser, then sends them to the correct store for their
            device. That&apos;s what{" "}
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me
            </a>{" "}
            is for — see also{" "}
            <Link
              href="/blog/we-built-pleaseopen-me"
              className="font-medium text-accent hover:underline"
            >
              why we built it
            </Link>
            .
          </p>
          <p>
            <strong className="font-semibold text-foreground">
              4. Get analytics on the click, not only the install.
            </strong>{" "}
            Knowing how many people reached the store tells you whether the
            problem is your content or your link. And if you only ship to one
            store,{" "}
            <Link
              href="/blog/os-specific-landing-pages-pleaseopen-me"
              className="font-medium text-accent hover:underline"
            >
              OS-specific landing pages
            </Link>{" "}
            help keep off-platform traffic from polluting your conversion data.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-foreground">
            How we handle it
          </h2>
          <p>
            We use{" "}
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              pleaseopen.me
            </a>{" "}
            for our own apps. One short link goes in the bio, it detects the
            device, and it sends iPhone users to the App Store and Android users
            to Google Play. On TikTok it shows a quick guide to opening the page
            in the browser, then redirects. It also gives us click analytics by
            country and destination. It&apos;s free to start, and we made it that
            way on purpose because we didn&apos;t want other small teams to pay
            for something this basic.
          </p>
          <p>
            If you run an app or a creator account, it&apos;s worth checking your
            own bio link today.
          </p>
          <p>
            <a
              href="https://pleaseopen.me"
              className="font-medium text-accent hover:underline"
            >
              Check and fix your link at pleaseopen.me &rarr;
            </a>
          </p>
        </div>

        <aside className="mt-14 border-t border-border pt-10">
          <h2 className="text-xl font-bold text-foreground">Further reading</h2>
          <p className="mt-2 text-sm text-muted">
            More from eighteen1 and pleaseopen.me:
          </p>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href="https://pleaseopen.me/is-your-tiktok-bio-link-broken-app-store-play-store-test"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  pleaseopen.me
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  Is Your TikTok Bio Link Broken? — App Store &amp; Play Store
                  test
                </span>
                <span className="mt-3 inline-block text-sm font-medium text-accent group-hover:underline">
                  Read more &rarr;
                </span>
              </a>
            </li>
            <li>
              <Link
                href="/blog/tiktok-instagram-blocking-app-store-links-pleaseopen-me"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  eighteen1
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  Why TikTok and Instagram block App Store links — and how we
                  fixed it for Byde
                </span>
                <span className="mt-3 inline-block text-sm font-medium text-accent group-hover:underline">
                  Read more &rarr;
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/blog/we-built-pleaseopen-me"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  eighteen1
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  We built pleaseopen.me — a free fix for App Store links blocked
                  on TikTok and Instagram
                </span>
                <span className="mt-3 inline-block text-sm font-medium text-accent group-hover:underline">
                  Read more &rarr;
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
                href="https://www.pleaseopen.me/blog/tiktok-bio-link-appstore-broken"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  pleaseopen.me
                </span>
                <span className="mt-2 block text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                  TikTok bio link to the App Store not working
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
            href="/blog"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Back to blog
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
