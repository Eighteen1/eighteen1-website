import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, posts, unlistedPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Company notes from Eighteen1 Studios — project announcements, launch stories, and what we’re building.",
};

export default function BlogIndexPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Writing
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Company stories and project announcements from Eighteen1 Studios.
          Product how-tos live on the product sites themselves.
        </p>

        <div className="mt-14 grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/40 hover:bg-surface-hover"
            >
              <div className="flex flex-wrap items-center gap-3">
                <time
                  dateTime={post.date}
                  className="text-xs font-medium uppercase tracking-wider text-muted"
                >
                  {formatPostDate(post.date)}
                </time>
                {post.languageLabel && (
                  <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
                    {post.languageLabel}
                  </span>
                )}
              </div>
              <h2 className="mt-3 text-xl font-bold leading-snug sm:text-2xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors group-hover:text-accent"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
              >
                Read post &rarr;
              </Link>
            </article>
          ))}
        </div>

        {unlistedPosts.length > 0 && (
          <p className="mt-12 text-xs leading-relaxed text-muted/70">
            Other articles:{" "}
            {unlistedPosts.map((post, index) => (
              <span key={post.slug}>
                {index > 0 && " · "}
                <Link
                  href={`/blog/${post.slug}`}
                  className="underline-offset-2 hover:text-muted hover:underline"
                >
                  {post.indexLabel ?? post.title}
                </Link>
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
