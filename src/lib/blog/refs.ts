/** Append a tracking ref so product analytics can attribute traffic to a blog post. */
export function productUrl(url: string, blogSlug: string): string {
  const parsed = new URL(url);
  const host = parsed.hostname.replace(/^www\./, "");
  if (host === "pleaseopen.me" || host === "fanfor.me") {
    parsed.searchParams.set("ref", `eighteen1-blog-${blogSlug}`);
  }
  return parsed.toString();
}
