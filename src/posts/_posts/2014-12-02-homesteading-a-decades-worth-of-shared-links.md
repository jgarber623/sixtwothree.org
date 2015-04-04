---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10152422968357343
  - title: Twitter
    url: https://twitter.com/jgarber/status/539897179645956096
date: 2014-12-02 16:35:06 -0500
excerpt:
tags:
  - delicious
  - magnolia
  - indieweb
  - preservation
  - ruby
title: Homesteading a Decade's Worth of Shared Links
---

For the last two months, I've been working on an [IndieWeb](https://indiewebcamp.com)-friendly content management system to replace my current [Jekyll-powered website](https://github.com/jgarber623/sixtwothree.org). There's a lot of ground to cover there and I'll be detailing my thought process, the technologies I chose, and the many things I've learned in an upcoming series of posts.

Right now, though, I'd like to turn attention to content. Bookmarks, specifically. Links. _Those things that make the Web a web._ I wrote a chapter about the mighty hyperlink in <cite>[Foundation HTML5 with CSS3](http://www.amazon.com/dp/1430238763/?tag=sixtwothree-20)</cite>, but as the book is an instructional guide and reference manual, I wasn't able to pen an appropriately gushy love letter to my most-favorite-of-all HTML elements.

## Social Bookmarking: A Brief History

For nearly ten years, I've been sharing and saving links on social bookmarking sites. And _my word_ what a decade it's been. Back in 2005-ish, [Web 2.0](https://en.wikipedia.org/wiki/Web_2.0) (kids, ask your parents) changed _everything_. Interest in social content sharing via blogs, RSS, photos, APIs, wikis, events, and bookmarks reached a fever pitch, minting a new generation of millionaire founders and fundamentally changing the way we participated online. The Web was exciting again!

[Delicious](https://delicious.com/) (née del.icio.us), one of Web 2.0's early darlings, is predicated on a simple notion: move your web browser's saved bookmarks onto the Web and share them with anyone. Slap a lightweight social network on top and you've got a product that Yahoo! would acquire for [somewhere in the neighborhood of $30 million](http://money.cnn.com/magazines/business2/business2_archive/2006/01/01/8368130/index.htm).

If my records are correct, I started saving bookmarks to Delicious on the evening of March 31st, 2005. According to [this tweet](https://twitter.com/jgarber/statuses/717708272), I jumped ship to [Ma.gnolia](https://en.wikipedia.org/wiki/Gnolia) in February 2008, leaving the stagnating Delicious for the newer, shinier upstart. Sadly, Ma.gnolia was destined for catastrophe. The service met its maker in late January 2009, courtesy a system-wide failure resulting in the total corruption and loss of all user data.

I felt terribly for [Larry](http://about.me/lhalff). I still do, in fact. Ma.gnolia was a wonderful service that pioneered and embraced many open standards. While it flamed out spectacularly, Ma.gnolia remains notable for its embrace of open standards and serves as a reminder of the importance of owning ones own content.

Shortly after Ma.gnolia went down, I [wrote on Twitter](https://twitter.com/jgarber/statuses/1182133512) (in the third person as was the style at the time):

> [@jgarber] just spent his entire evening rescuing a fraction of his old bookmarks from ma.gnolia. It involved NewsGator, PHP, jQuery, and Delicious.

Back to Delicious it was. Until two years later when [an internal Yahoo! presentation](http://techcrunch.com/2010/12/16/is-yahoo-shutting-down-del-icio-us/) implied the service was on the chopping block. Delicious dodged that particular bullet thanks to a [late-in-the-game sale](http://latimesblogs.latimes.com/technology/2011/04/bookmark-this-youtubes-chad-hurley-and-steve-chen-buy-delicious-from-yahoo.html) to AVOS Systems. The new owners breathed some life into the site until May of this year when the property was [sold to the generically-named holding company, Science, Inc.](http://dealbook.nytimes.com/2014/05/08/delicious-social-site-is-sold-by-youtube-founders)

_Seriously._

"Bright" is not a word I'd use to describe Delicious' future.

## Coming Home

I've [written previously](/blog/the-internet-never-forgets) about the importance of preserving one's own content. "[Own your data](https://indiewebcamp.com/own-your-data)" is the first principle of the IndieWeb and I've been preaching this particular gospel since attending 2013's [IndieWebCampUK](https://indiewebcamp.com/2013/UK). It's time I practice what I preach.

Delicious kindly offers a [bookmark export tool](http://export.delicious.com/settings/bookmarks/export), providing an HTML file marked up using the ancient [Netscape Bookmark File Format](http://msdn.microsoft.com/en-us/library/aa753582.aspx). _(And yes, that documentation is on Microsoft's website. Oh, sweet irony of ironies.)_ While antiquated, the Netscape Bookmark File Format persists for one simple reason: it is parsable by any web browser. It is otherwise—as best as I can determine—a dead format.

[Take a look at that markup](https://gist.github.com/jgarber623/cdc8e2fa1cbcb6889872). It's atrocious by modern standards. Hell, it's probably atrocious by the standards of its time.

Regardless, the Delicious-exported file contained the raw data I would need to bring these links into my own website. I next needed a better structure for working with that data; ancient markup and proprietary attributes do not make for easy or reliable database imports.

I spent a couple hours hacking away at the problem and came up with a [Delicious Data Convertor](https://github.com/jgarber623/delicious-data-convertor). Written in Ruby and using Rake, the code is fed a Delicious-exported HTML file and spits out a well-structured JSON representation of the bookmarks data. The resulting JSON file can then be easily imported into whatever database you choose.

The convertor takes this:

```html
<DT><A HREF="https://developer.apple.com/library/mac/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/index.html#//apple_ref/doc/-%20uid/TP40014508" ADD_DATE="1414706885" PRIVATE="0" TAGS="javascript,mac,osx,yosemite">JavaScript for Automation Release Notes</A>
<DD>This article describes JavaScript for Automation, a new feature in OS X Yosemite.
```

and transforms it into this:

```json
{
    "add_date": "2014-10-30 18:08:05 -0400",
    "comment": "This article describes JavaScript for Automation, a new feature in OS X Yosemite.",
    "private": "0",
    "tags": [
        "javascript",
        "mac",
        "osx",
        "yosemite"
    ],
    "title": "JavaScript for Automation Release Notes",
    "url": "https://developer.apple.com/library/mac/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/index.html#//apple_ref/doc/-%20uid/TP40014508"
}
```

While using the Delicous Data Convertor introduces an extra step in the process of going from data to database, I feel _much_ better working with well-structured JSON than I do with crusty old Netscape Bookmark File formatted HTML.

The Delicious Data Convertor is available [over on GitHub](https://github.com/jgarber623/delicious-data-convertor). Feedback and contributions are always appreciated.

I found this bit of code to be really useful as I work to homestead more of my content. I hope it helps you take back control of your content as well!