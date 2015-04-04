---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10152287974162343
  - title: Twitter
    url: https://twitter.com/jgarber/status/513773797867290625
date: 2014-09-21 15:23:11 -0400
excerpt: Last week, Kevin and I turned off login access to Ficly.
tags:
  - ficlets
  - ficly
  - preservation
title: Thoughts on Winding Down Ficly and Updates on Its Future
---

Last week, [Kevin](http://lawver.net/) and I turned off login access to [Ficly](http://ficly.com/). The reasons for doing this are numerous—as detailed in [Kevin's announcement](http://ficly.com/blog/farewell-ficly) last month—but what I think is more important than the "closing" of an active and vibrant community are the steps we're taking to guarantee that the site's content remains available for many years to come.

First, a bit of back story…

## Ficly's wild and wonderful history

Ficly is actually the second iteration of a project Kevin and I worked on together during my brief stint at AOL. At an internal hack day in mid- to late-2006, he proposed a community site where users could write really short stories. Like, 1,024 characters. That's exactly 1 kilobyte of text. Other users could then extend the story in both directions, writing as many prequels or sequels as they liked. The idea was born and, with a bit of internal wrangling, Kevin was able to pull together a small team—there were only five of us—with enough executive cover to allow us three solid months to conceive, design, build, and launch the project.

Somewhere along the way, the name "ficlets" popped up as a descriptor for these really short stories. We'd set a hard goal for ourselves to launch before 2007's SXSW Interactive Festival. Kevin also decided that this project was going to be AOL's first launched product using Ruby on Rails—a framework and language none of us had used before. We were rather daring back then. Keep in mind that AOL's rigid corporate structure rarely allowed for this sort of cavalier—and decidedly non-Java—approach to software development.

With three months of furious learning, sketching, designing, and coding, we launched Ficlets mere days before we jetted off to Austin for SXSW. Through some connections at AOL, renowned science fiction author [John Scalzi](http://whatever.scalzi.com/) agreed to contribute to the fledgling site and helped us get some early promotion on [Boing Boing](http://boingboing.net/2007/03/14/ficlets-creative-com.html).

After launch, the site sort of ran itself as we each were moved off to other projects. The five of us all eventually left AOL for greener pastures and, with no one left to champion the site within the vast machinery of the corporation, AOL pulled the plug in January, 2009.

Four months later, with an assist from [Joe](http://www.drdzoe.com/) and the design team at [Viget](http://viget.com/), we launched Ficly—a better, shorter story. We added a couple new features and tweaked a couple things, but the concept remained the same. We'd pulled it off and, as before, a community sprung up around writing really, really short stories.

Over the years, Kevin [wrote about Ficlets and Ficly](http://lawver.net/categories/development/aol/ficlets/) with greater frequency than [I ever did](/tags/ficlets). (A lot of this history occurred during my time spent away from blogging.) There's also a pretty good [Ficlets Wikipedia entry](http://en.m.wikipedia.org/wiki/Ficlets). _(Hey, look ma! I'm in the encyclopedia!)_

## So what happened?

The reasons for disabling login access—ostensibly "shutting down"—are a mix of technical and personal. First, the technical.

As Kevin pointed out, Google has deprecated their OpenID authentication service. At the time we built the site, we made it a point not to require users to manage Yet Another Password. We also had little desire to manage our own authentication system and contend with the UI and code around such a system. That said, learning that one of our largest login service providers is shutting down the service was quite a blow.

This ties directly in with the personal reasons for changing the site. We built Ficly because we loved Ficlets so much and were so intensely agitated by AOL's unceremonious demolition of _that_ community. It felt like something we _had_ to do.

_So we did it._ And the community returned and grew and evolved over five and a half incredible years. With no budget and [a lone Kickstarter campaign](https://www.kickstarter.com/projects/kplawver/the-ficly-server-support-project) to raise a tiny amount of funds for hosting the site, we built a platform that several thousand authors used to share over 38,000 stories. That's in addition to _the nearly 45,000 stories_ we rescued from Ficlets before the shutdown.

Unfortunately, we weren't able to follow through on many of the plans we had for the site. Life gets in the way. This isn't so much an excuse as it is just plain, simple fact. We both loved Ficly and the community deeply, but there were other interests—family, day jobs, bands, etc.—that commanded our time and attention.

All that's to say that by late 2014, Ficly was a thriving community built atop an increasingly creaky system that wasn't going to see any of the significant updates it so sorely deserved.

## On preserving content

If you've followed my recent writing and ranting, you've no doubt heard me bang on about digital preservation—the idea that we should insure that the content we create online should _remain_ online for future generations. In December 2008, when AOL announced they were shutting down Ficlets, they made it clear they didn't give a damn about user's content. Humorously—or maddeningly, perhaps—[the original post](http://www.peopleconnectionblog.com/2008/12/02/ficlets-will-be-shut-down-permanently/) announcing Ficlet's shutdown on AOL's People Connection blog no longer exists. The Wayback Machine has [a copy](https://web.archive.org/web/20101017103123/http://www.peopleconnectionblog.com/2008/12/02/ficlets-will-be-shut-down-permanently), though.

We're better than this.

We knew as soon as we decided to wind down Ficly that we wanted to provide users with continued access to their work, even if they couldn't create more. We're still working on some export tools, but more importantly, we're guaranteeing that all original work on the site will live on at its current URL far into the future. We'll have more details on export and other data-related tools soon at [ficly.org](http://ficly.org/).

We'll also be [open-sourcing the code](https://github.com/ficly) that powered the site. While it may be creaky and dated, it could serve as a useful starting point or as inspiration to others looking to build their own social writing platform.

## Signing out

It's a strange thing to change Ficly in the way we have. I don't like that all logical signs point to this being the right thing to do, but I do like that we're going about it in a way that doesn't leave users completely out in the cold and doesn't destroy five and a half years of art and shared culture.

To all the authors who contributed to Ficly over the years: thank you and we love you so very much. Thank you for sharing your creativity with the world.