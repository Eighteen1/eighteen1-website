export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  locale?: "en" | "de" | "ko" | "es";
  languageLabel?: string;
  /** Ambiguous label for low-key /blog index links (unlisted posts). */
  indexLabel?: string;
}

export const APP_STORE_LINK_POST_ALTERNATES = {
  en: "/blog/tiktok-instagram-blocking-app-store-links-pleaseopen-me",
  de: "/blog/warum-tiktok-instagram-app-store-links-blockieren-pleaseopen-me",
  ko: "/blog/tiktok-instagram-app-store-link-chaedan-pleaseopen-me",
  es: "/blog/por-que-tiktok-instagram-bloquean-enlaces-app-store-pleaseopen-me",
} as const;

export const posts: BlogPost[] = [
  {
    slug: "tiktok-instagram-blocking-app-store-links-pleaseopen-me",
    title:
      "Why TikTok and Instagram block App Store links — and how we fixed it for Byde",
    description:
      "TikTok and Instagram block App Store and Play Store links in their in-app browsers, breaking bio-link installs. Here's why it happens, what \"Action can't be completed\" means, and how we fixed it for Byde with pleaseopen.me.",
    date: "2026-09-20",
    author: "eighteen1",
    locale: "en",
    languageLabel: "English",
  },
  {
    slug: "warum-tiktok-instagram-app-store-links-blockieren-pleaseopen-me",
    title:
      "Warum TikTok und Instagram App-Store-Links blockieren – und wie du das mit pleaseopen.me löst",
    description:
      "TikTok und Instagram blockieren App-Store- und Play-Store-Links in ihren In-App-Browsern. Erfahre, warum das passiert und wie du mit pleaseopen.me einen einzigen Link für deine App einrichtest.",
    date: "2026-09-20",
    author: "eighteen1",
    locale: "de",
    languageLabel: "Deutsch",
  },
  {
    slug: "tiktok-instagram-app-store-link-chaedan-pleaseopen-me",
    title:
      "TikTok과 Instagram이 App Store 링크를 차단하는 이유 – 그리고 pleaseopen.me로 해결하는 방법",
    description:
      "TikTok과 Instagram은 In-App Browser에서 App Store 및 Play Store 링크를 차단합니다. 왜 이런 일이 발생하는지, 그리고 pleaseopen.me를 사용해 앱을 위한 하나의 링크를 설정하는 방법을 알아보세요.",
    date: "2026-09-20",
    author: "eighteen1",
    locale: "ko",
    languageLabel: "한국어",
  },
  {
    slug: "por-que-tiktok-instagram-bloquean-enlaces-app-store-pleaseopen-me",
    title:
      "Por qué TikTok e Instagram bloquean los enlaces de App Store – y cómo solucionarlo con pleaseopen.me",
    description:
      "TikTok e Instagram bloquean los enlaces de App Store y Play Store en sus In-App Browser. Descubre por qué ocurre y cómo configurar un único enlace para tu app con pleaseopen.me.",
    date: "2026-09-20",
    author: "eighteen1",
    locale: "es",
    languageLabel: "Español",
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

/** Indexed for SEO / sitemap but not shown as cards on /blog. */
export const unlistedPosts: BlogPost[] = [
  {
    slug: "tiktok-instagram-blocking-onlyfans-link-pleaseopen-me",
    title:
      "How to Stop Instagram and TikTok From Blocking Your OnlyFans Link in 2026",
    description:
      "Why Instagram and TikTok hide or break OnlyFans and Fansly bio links — and the two-layer setup (link-in-bio + pleaseopen.me redirect, optionally on your own domain) creators use to keep them working.",
    date: "2026-09-26",
    author: "eighteen1",
    indexLabel: "Bio links that get blocked on Instagram & TikTok",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return (
    posts.find((post) => post.slug === slug) ??
    unlistedPosts.find((post) => post.slug === slug)
  );
}

export function getAllPostsForSitemap(): BlogPost[] {
  return [...posts, ...unlistedPosts];
}

export function formatPostDate(date: string, locale = "en-US"): string {
  return new Date(date + "T12:00:00").toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
