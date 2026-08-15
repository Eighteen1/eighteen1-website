# We Added Privacy Policy Generation + Hosting to pleaseopen.me

If you've shipped an app before, you know the drill: you get to the App Store or Play Store submission screen, it asks for a privacy policy URL, and if you don't already have a website, you're suddenly building one just to host a single page you'll probably never look at again.

We ran into this ourselves enough times that we decided to build it into [pleaseopen.me](https://pleaseopen.me) directly.

## What's new

pleaseopen.me now includes a guided privacy policy generator and hosting, alongside the TikTok/Instagram in-app-browser bounce page the tool started out as.

Instead of a blank text box or a generic one-size-fits-all template, the generator walks you through the actual data practices of your app:

- App info — name, platform, category, contact details
- What data you collect (if any) — personal info, location, analytics
- Which third-party SDKs you use — analytics tools, ad networks, crash reporting — and generates the right disclosure language for each
- Ads and monetization setup, in-app purchases, subscriptions
- A flag (not an auto-generated clause) if your app is directed at children, since that space has stricter requirements than a standard policy can safely cover

You get an editable preview before anything goes live, and the finished policy is hosted at `pleaseopen.me/yourslug/privacy` — a URL you can drop straight into your App Store Connect or Play Console listing.

## Why we built it this way

Most free privacy policy tools are built for websites, not apps — they don't ask about ad SDKs, mediation platforms, or app-specific data flows, so developers end up with a policy that technically exists but doesn't actually describe what their app does. We wanted something that's fast to fill out but still asks the right questions for an app specifically.

To be clear about scope: this generates a solid, template-based starting point, not a substitute for legal advice. It's not built by a law firm, and if your app has more complex compliance needs — significant EU/international traffic, sensitive data categories, or anything aimed at children — that's a case for reading up on the specifics or talking to someone who specializes in it. For the average indie app collecting standard analytics and running ads, it should cover what stores and users actually expect to see.

## Versioning, so store review doesn't break on you

One detail we cared about: app stores sometimes cache your privacy policy URL's content at review time, so if you silently change what's published at that URL later, it can create a mismatch between what was reviewed and what's live. pleaseopen.me keeps version history for your policy so a URL that was already submitted stays consistent, and you can see exactly what changed and when if you do need to update it.

## Try it

If you're building an app solo or with a small team and don't have a developer website, this should save you the step of standing one up just to host a legal page. It's part of the free tier — one app, generation, hosting, and unlimited edits, no account required to get started. Multiple apps under one account and a custom domain are part of the paid plan for studios managing more than one app.

[Generate and host your privacy policy free →](https://pleaseopen.me)

---

*We're also working on ads.txt hosting as a companion feature, for anyone running ads through AdMob, AppLovin, or similar — more on that soon.*