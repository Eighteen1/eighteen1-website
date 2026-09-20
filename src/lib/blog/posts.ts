export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

export const posts: BlogPost[] = [
  {
    slug: "tiktok-instagram-blocking-app-store-links-pleaseopen-me",
    title:
      "Why TikTok and Instagram block App Store links — and how we fixed it for Byde",
    description:
      "TikTok and Instagram block App Store and Play Store links in their in-app browsers, breaking bio-link installs. Here's why it happens, what \"Action can't be completed\" means, and how we fixed it for Byde with pleaseopen.me.",
    date: "2026-09-20",
    author: "eighteen1",
  },
  {
    slug: "os-specific-landing-pages-pleaseopen-me",
    title:
      "We added coming-soon landing pages for stores you haven't shipped to yet",
    description:
      "pleaseopen.me now detects the visitor's OS and shows a dedicated landing state for platforms you haven't shipped to — protecting store conversion data and capturing demand.",
    date: "2026-09-11",
    author: "eighteen1",
  },
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
