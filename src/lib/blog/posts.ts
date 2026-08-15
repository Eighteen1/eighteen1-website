export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

export const posts: BlogPost[] = [
  {
    slug: "privacy-policy-generation-pleaseopen-me",
    title: "We added privacy policy generation + hosting to pleaseopen.me",
    description:
      "pleaseopen.me now generates and hosts an app-specific privacy policy URL you can drop into App Store Connect or Play Console — no developer website required.",
    date: "2026-08-15",
    author: "eighteen1",
  },
  {
    slug: "we-built-pleaseopen-me",
    title:
      "We built pleaseopen.me — a free fix for App Store links blocked on TikTok and Instagram",
    description:
      "eighteen1 launched pleaseopen.me: a free bio-link tool that gets App Store and Play Store links past TikTok and Instagram blocks — as a simple redirect, a multi-button social page, or on your own custom domain.",
    date: "2026-08-10",
    author: "eighteen1",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string): string {
  return new Date(date + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
