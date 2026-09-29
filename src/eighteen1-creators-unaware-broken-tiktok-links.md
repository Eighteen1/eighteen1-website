---
title: "We Found Dozens of TikTok Creators With Broken App Store Links. Most Don't Know."
description: "While researching TikTok marketing for our app, we noticed a pattern: creators with App Store links in their bio that fail on iPhones, and they keep posting anyway. Here's what we learned."
slug: tiktok-creators-unaware-broken-app-store-bio-links
date: 2026-09-29
author: Eighteen1 Studio
tags: [TikTok marketing, app growth, bio links, indie apps, pleaseopen.me]
---

# We Found Dozens of TikTok Creators With Broken App Store Links. Most Don't Know.

*Editor's note: replace "dozens" in the title and body with your real number before publishing.*

When we launched our app Byde, we spent a lot of time on TikTok, watching what other app makers and creators were doing. Along the way we noticed something that changed how we think about our own marketing.

A surprising number of TikTok accounts have an App Store or Play Store link in their bio that **doesn't work for a large share of their viewers**. And most of them appear to have no idea.

## How we noticed

We had already run into the problem ourselves: our own store links showed "Action can't be completed" when tapped from TikTok. That's why we built [pleaseopen.me](https://www.pleaseopen.me) in the first place.

Once we knew what to look for, we started seeing it everywhere. We'd open a creator's profile, tap the bio link on an iPhone, and land on a blank white page.

A few things stood out:

- **These weren't dead accounts.** Many of them posted regularly and were clearly trying to grow an app or a brand.
- **The link had usually been like that for a long time.** It wasn't a recent glitch, and it just never got fixed.
- **Some of the accounts had large followings,** which means real traffic was probably hitting the dead end every day.

## The part that surprised us: it depends on the device

We assumed everyone saw the same error. They don't. When we tested, the results split by device and link type:

- **Desktop:** an App Store link opens the App Store page.
- **Android phone, App Store link:** opens.
- **iPhone, Play Store link:** the Play Store page opens.
- **iPhone, App Store link:** a white page reading "Action can't be completed."
- **Android phone, Play Store link:** a "potentially unsafe" warning first. The listing then loads, but you can't download, and "Open in Play Store app" fails with the same error.

*(Tested September 2026. Behavior may change with app and OS updates.)*

We think this explains why so many creators never fixed it. If you test on a laptop, or on the wrong phone for the link you posted, everything looks fine. You'd have to tap the link from inside TikTok on the right device to see it fail. As far as we could tell, it also seems to work more reliably on some verified business accounts than on personal or non-verified accounts, so a creator's own experience may not match their viewers'. We haven't been able to confirm exactly which account types are affected, so we're flagging it as something to check rather than a rule.

We wrote up the device-by-device results in more detail on the pleaseopen.me blog: [Is Your TikTok Bio Link Broken?](https://www.pleaseopen.me/blog/is-your-tiktok-bio-link-broken-app-store-play-store-test)

## There's no feedback loop

A direct store link has no analytics attached. A creator can't see:

- how many people tapped it,
- how many of them hit an error,
- which devices or countries they came from.

TikTok doesn't alert you either. The visitor just leaves, and from the creator's side nothing happened. Without any signal, a broken link can sit in a bio for months.

## What this means for anyone marketing an app on TikTok

If you're driving downloads through TikTok, some lessons are worth taking from this.

**1. Test the funnel on real devices.** Check your bio link from inside TikTok on both an iPhone and an Android phone, with each store link, not only on your own device.

**2. Assume there are silent losses.** If viewers can't reach the store, you won't see an error, only lower installs than your views suggest.

**3. Don't rely on a direct store link in an in-app browser.** Route visitors through a link that first gets them out of TikTok's in-app browser, then sends them to the correct store for their device.

**4. Get analytics on the click, not only the install.** Knowing how many people reached the store tells you whether the problem is your content or your link.

## How we handle it

We use pleaseopen.me for our own apps. One short link goes in the bio, it detects the device, and it sends iPhone users to the App Store and Android users to Google Play. On TikTok it shows a quick guide to opening the page in the browser, then redirects. It also gives us click analytics by country and destination. It's free to start, and we made it that way on purpose because we didn't want other small teams to pay for something this basic.

If you run an app or a creator account, it's worth checking your own bio link today.

**[Check and fix your link at pleaseopen.me →](https://www.pleaseopen.me/)**

*Related reading: [Why TikTok and Instagram block App Store links](https://www.eighteen1.com/blog/tiktok-instagram-blocking-app-store-links-pleaseopen-me)*
