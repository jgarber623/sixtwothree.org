---
date: 2007-01-05 21:52:00 -0500
tags:
  - browser
  - firefox
title: Me vs. Firefox 2 (Mac)
---

**Update (1/11/2007):** I think (knock on wood) I’ve solved my troubles. I’ve rolled back to Firefox 2.0 on both the MacBook Pro and Powerbook and things seem to be working again.

It’s likely a bad idea to blog while angry (okay, not angry, but upset in this case), but here goes nothing. I’ve grown increasingly displeased with the performance of the latest version of [Firefox](http://www.mozilla.com/en-US/firefox/) (currently version 2.0.0.1) for the Mac. A little bit of history…

I’ve been a Firefox user since the days when it was called Phoenix, and later Firebird. I liked (and still do like) its speed, [extensibility](https://addons.mozilla.org/), and security as compared to [the competition](http://www.microsoft.com/windows/ie/default.mspx). Firefox 1.5 was a great browser and I (like most) eagerly anticipated the arrival of 2.0.

Version 2 arrives and it’s pretty good, it’s got some cool new features, but not the Earth-shattering release that everyone was anticipating. Not a huge deal, as a software developer, you can’t always hit home runs. I will, in fact, applaud the Firefox crew for working to keep the browser lean and mean.

All that aside, I’ve been having more and more trouble with my Mac install of Firefox 2.0.0.1. With increasing frequency, when filling in web forms, the browser has lost focus on the form field and gone into Quick Find or Find mode. Thinking at first there was an issue with the “search for text when I begin typing” feature, I quickly disabled that. No good, the issue persisted.

The problem only occurs when entering form data and does not appear to discriminate between `input`s or `textarea`s. When using Gmail, the character that seems to blow things up is the apostrophe. In other fields, typing a single letter will often cause things to go haywire.

Additionally, using Command+L (location bar focus) and Command+K (search box focus) will often not focus on their respective inputs. Not sure if the two problems are related, but could very well be.

I removed Firefox and all associated profiles and started from scratch, hoping maybe it was a bad profile. Things worked great for about an hour and the problems came back, so it doesn’t seem to be a bad profile.

For what it’s worth, the issue is occurring in Mac OS X 10.4.8 on both PowerPC and Intel machines (my Powerbook and work’s MacBook Pro). The extensions I have installed are:

- Adblock Plus
- del.icio.us
- ErrorZilla Mod
- Firebug
- FLST
- Gmail Notifier
- HTML Validator
- Operator
- Organize Status Bar
- Stop-or-Reload Button
- Tails
- Web Developer

The versions on all of the extensions are the latest-and-greatest.

I don’t want this to come off as an attack on the fine folks that develop and contribute to Firefox. I still love Firefox, I’m simply annoyed at some of the odd behavior in the latest version of my browser of choice. My hope is that this post will get noticed by others who may be experiencing the same issue and (hopefully) someone will have some insight into the issue.

This post brought to you by [Camino](http://www.caminobrowser.org/) – my backup browser o’ choice.