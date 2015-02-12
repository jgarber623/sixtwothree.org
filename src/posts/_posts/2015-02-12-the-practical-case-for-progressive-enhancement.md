---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10152585900862343
  - title: Twitter
    url: https://twitter.com/jgarber/status/565880379429912576
date: 2015-02-12 09:19:22 -0500
excerpt: The third, and hopefully final, post in a series about developing websites using progressive enhancement.
tags: development progressiveenhancement
title: The Practical Case for Progressive Enhancement
---

This is the third in an unexpected series of posts on design and [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement). I thought [my first post](/posts/designing-experience-layers) made a good case for considering website design a series of "experience layers" which, in development terms, amounts to progressive enhancement. I think I hit the mark more than I missed, but still. That post begat [comments](http://viget.com/inspire/designing-experience-layers#disqus_thread), which begat [another post](/posts/in-defense-of-progressive-enhancement), which begat _more comments_, which begat this third, and hopefully final, post on the subject.

So far, the feedback on my original post is a generous mix of honest commentary and critique with a helping of misconceptions about the strategy for which I advocate. In this post, I'll address some major points brought up by my colleague [Josh Korr](http://viget.com/about/team/jkorr) and The Man in Charge, [Brian Williams](http://viget.com/about/team/bwilliams).

Josh and I debated the topic yesterday afternoon in [Slack](https://slack.com/) and Brian and I have discussed these very issues multiple times in the past. I'm prone to getting _really excited_ when I talk about Web development and my arguments tend to be less rigorous in one-on-one conversation than when writing. I'll attempt to do better here.

[Let's do this](https://www.youtube.com/watch?v=LkCNJRfSZBU&t=1m20s).

## The "Moral" Argument for Progressive Enhancement

In [Designing Experience Layers](/posts/designing-experience-layers), I described a design method of sequentially layering components of a website (e.g. content, presentation, behavior/interaction), one atop the other. The metaphor is decent and I feel I did a pretty good job explaining it from a design perspective without being too code-centric. The positioning is more a philosophical argument than a nuts-and-bolts technical implementation discussion.

While I find these particular kinds of conversations thought-provoking and potentially persuasive, others clearly don't. And that's fine! Diversity of opinion makes for effective teams.

Josh takes issue with my statement:

> It's our responsibility to do right by the billions already online and the next billion preparing to come online.

He refers to this as the "moral argument" for progressive enhancement. I believe my statement to be true and I hope you do as well. But, it's not a compelling business case for using progressive enhancement when your clients' customers tend not to fall neatly into that "next billion" demographic. My background building things on the Web for nearly twenty years is steeped in this sort of egalitarian philosophy about the nature of the Web. It's where I come from. Also: I'd make a terrible businessperson.

Let's then pitch out the notion that progressive enhancement is _the best_ Web development strategy based on it being _the right thing to do_.

Let's move on to The Businessing.

## The "Cost" of Progressive Enhancement

Brian and Josh both expressed concerns about how much progressive enhancement costs. "Cost," in this case, comes in several forms:

1. The cost (in dollars, time, etc.) to build and maintain a website.
1. The cost (in dollars, time, etc.) to test that website (preferably throughout the development cycle).
1. The cost (in dollars, time, etc.) to "support" various browsers and devices.

A quick aside: I define "website" as "anything existing on the Web built using a combination of HTML, CSS, and JavaScript addressable by URL."

### Cost to Build and Maintain

I see progressive enhancement—as a development strategy—falling along the same lines as accessibility and responsive design. In fact, the three components dovetail nicely.

Accessibility and responsive design, if you consider them as items on your Web Project Punch List, are a pain in the ass to bolt on at the end of a project. They're both core to the buildout approach and the same holds true for progressive enhancement. You really need to decide to use it from the get-go; it'll save you a lot of headache.

When considered as a core component of a project from the beginning, building a website with progressive enhancement is easy. As with accessibility and responsive design, building a progressively-enhanced website should add no extra cost to a project and may, if done well, cost less and take less time to complete.

Compared to framework-laden, JavaScript-"first" Web apps (or whatever you'd like to call them), websites built with progressive enhancement are also likely cheaper to maintain. Making direct comparisons here is tenuous, but odds are good that there's less that _could_ go wrong with a progressively-enhanced website. Simpler code is more maintainable code, after all.

And honestly, when something inevitably breaks with your progressively-enhanced website (e.g. JavaScript randomly fails to load), you needn't worry; the website will continue functioning with plain ol' HTML and CSS. (But really, you should test and monitor your website to catch errors like this!)

### Cost to Test

In conversation, Josh asked about testing progressively-enhanced websites. His concern was that progressive enhancement would mean _more_ testing since you'd have a "basic" experience and an "enhanced" experience, each needing rigorous automated and manual testing. More testing is _always_ better, but it can certainly run up cost quickly.

I posit that a progressively-enhanced website may require _less_ testing. Any Web developer worth her salt should be able to build out a website that looks good at a basic level—meaning HTML and CSS—in most common browsers. She should also test her work along the way, correcting _major_ layout problems as they arise. Now, keep in mind that [websites don't need to look the same in every browser](http://dowebsitesneedtolookexactlythesameineverybrowser.com/).

Start by building the basic structure and layout and enhance upward from there, providing a better experience to more capable browsers and devices. The sky's the limit! When it comes time to add JavaScript—and that time _will_ come—there are a variety of techniques for ensuring that the appropriate browsers execute your code. The BBC's [Cutting the mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard) technique is a personal favorite.

My point here is that you shouldn't _have_ to do more testing of a progressively-enhanced website. It's generally safe to assume that browsers can correctly display textual content, navigate between pages, and submit form data. Put that massive QA budget to use ensuring that your website is usable on as many devices as you can get your hands on!

### Cost to "Support" Browsers and Devices

There's a common fallacy in our industry that "supporting" a particular browser or device must come at the exclusion of others. Brad Frost goes in-depth on this topic in his great post, [Support Vs Optimization](http://bradfrost.com/blog/mobile/support-vs-optimization/). He draws a clear distinction between _supporting_ browsers/devices and _optimizing_ for certain browsers/devices. Brad writes:

> For time and budget reasons, we can't make the best experience ever for every connected device, but we have a responsibility to provide a decent experience to those who wish to interact with our products and services.

I'll let you guess how we can achieve this balance of supporting many browsers/devices while optimizing for a defined subset of browsers/devices. Brad again brings the wisdom:

> [Progressive enhancement] allows us to reach more places while still delivering powerful experiences to iOS, Android and other more capable future browsers. It's laying the foundation which we can then build upon.

Building websites with progressive enhancement allows you to deliver a souped-up, Awwward-winning Web _experience_ to users with capable browsers and devices without doing so at the expense of everyone else. It's a win-win!

## Practicality

Inevitably in conversations about progressive enhancement, someone trots out The Edge Case. "What about this in-browser video game?" "What about my Web _app_?"

If you're building an in-browser video game using [HTML5's Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API), _right on, sister_. That shit is _hard to do_. But, by its very nature, your video game requires JavaScript. It's silly to stand up in-browser video games as damning evidence against progressive enhancement.

Your Web "app." We could go 'round and 'round all day trying to define a Web "app." Odds are good your Web "app," whatever it may be, could benefit from a little progressive enhancement. It may never be 100% progressively enhanced, but give it a shot. Try building that user-facing form HTML-first and enhance upward from there.

A 100% pure progressively-enhanced website may not be practical on every single project you will ever encounter. While that sort of purity _can_ exist, it's unlikely in many business scenarios. Budgets, timelines: these things exist. Progressive enhancement isn't a zero sum game. It's a continuum, just like the Web. And just because you may not be able to do something _all the way_ doesn't give you a reason to forsake a strategy supported by Internet titans like [Google](http://googlewebmastercentral.blogspot.com/2014/10/updating-our-technical-webmaster.html) and [Twitter](https://blog.twitter.com/2012/improving-performance-on-twittercom).

I'm speaking, of course, about progressive enhancement.

---

I hope you've found this series of posts on designing with experience layers and developing using progressive enhancement convincing or, at the very least informative. Thanks for reading!