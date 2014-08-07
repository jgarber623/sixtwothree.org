---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10152190543487343
  - title: Twitter
    url: https://twitter.com/jgarber/status/496431514742431745
date: 2014-08-04 18:38:55 -0400
excerpt: As of today, I’ve removed Google Analytics from this site. Here’s why.
tags: development googleanalytics
title: Abandoning Google Analytics
---

I've had Google Analytics on this site since at least July of 2009, tracking the comings and goings of visitors to my humble node in the vast network. As of today, though, I've [removed the Analytics-related code](https://github.com/jgarber623/sixtwothree.org/commit/225c32239af7affec5247b668c7a69acd72eff25).

I've found that, for this site and for my purposes, I don't _need_ to know how many people are coming to this site (answer: far too few!). I don't need to know how long they're staying on my site or what content they are looking at. Knowing either of those bits of information won't change how or when I post to this site nor will it affect the topics about which I write.

Further, knowing the browser or device someone uses to access this site isn't going to influence its spartan design. This site is built to work in a web browser and is designed to be fast. Like, _really fast_.

It was this last point—a concern over speed—that tipped the scales squarely to the "dump Google Analytics" side. Removing Google Analytics code shaved ~300 bytes off every page and, more importantly, reduced by one the number of HTTP requests required to build a page.

Let's look at some numbers.

Before removing the Analytics code, this site's [homepage](/) was 69.5 kilobytes (when browsing with cache turned off) spread across nine HTTP requests. Google's `ga.js` script file made up 15.8 kilobytes—or 22.7%—of that total, making it the largest single asset on the homepage.

Looking at [a sample blog post page](/blog/the-internet-never-forgets), I saw 11 requests made for a total of 81.6 kilobytes. Again, the Google Analytics script was the largest single asset on the page, this time accounting for 19.4% of total page weight.

Two things to note:

1. **The pages on this site are small.** This is a feature, not a bug. However, the results I've achieved by dumping Google Analytics are relative to the overall weight of my site's pages and are not likely representative of the kinds of savings you may get on your site.
2. **The above tests were conducted with the browser's cache turned off.** It's unlikely that your site's visitors have turned off their browser's cache, but the numbers presented were gathered in that fashion.

Naturally, your mileage will vary. But for this site, removing Google Analytics was an easy way to improve its performance to the benefit of all.