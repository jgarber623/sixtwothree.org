---
copies:
  - title: Viget Extend
    url: http://viget.com/extend/sending-webmentions-with-craft
date: 2014-06-11 15:29:55 -0400
excerpt: 'My first Craft plugin sends webmentions to supported websites.'
tags: craft indieweb webmention
title: Sending Webmentions with Craft
---

Last September, while in Brighton for [dConstruct](http://2013.dconstruct.org/), I attended the second annual [IndieWebCampUK](http://indiewebcamp.com/2013/UK), a two-day gathering of web developers focused on building [IndieWeb](http://indiewebcamp.com/) tools.

If you're unfamiliar with the IndieWeb movement, its [guiding principle](http://indiewebcamp.com/Principles) is that you should own your data. In practical terms, this amounts to publishing content on a website at a domain that you own (instead of, say, posting all of your photos to a service like Facebook). Surrounding that principle are a variety of other ideas and tools being created by some amazing people (including [Tantek Çelik](http://tantek.com/), [Aaron Parecki](http://aaronparecki.com/), [Amber Case](http://caseorganic.com/), and others).

IndieWebCampUK rekindled my desire to publish on [my own website](http://sixtwothree.org/) and build tools that would help others do the same.

Of all the IndieWeb [building blocks](http://indiewebcamp.com/building-blocks) being worked on, [webmention](http://indiewebcamp.com/webmention) caught my attention the most. From the wiki:

> Webmention is a simple way to notify any URL when you link to it on your site. From the receiver's perspective, it's a way to request notifications when other sites link to it. Webmention is a modern update to Pingback, using only HTTP and x-www-urlencoded content rather than XML-RPC requests.

The power of webmention is its simplicity. Unlike sending Pingbacks with XML-RPC, sending a webmention can be as simple as using cURL on the command line to POST to a URL (as shown in [this example](http://indiewebcamp.com/webmention#How_to_Test_Webmentions)). Very cool and relatively easy.

In the months since IndieWebCampUK, I've been trying to figure out how to best contribute to webmention. Which brings us to…

## Webmention Client Plugin for Craft CMS

With some help from [Trevor](http://trevordavis.net/), I've just released version 1.0.0 of a [webmention client](https://github.com/jgarber623/craft-webmention-client) that adds the ability to send webmentions from [Craft](http://buildwithcraft.com/). Installation and setup is really easy and is detailed in the [project README on GitHub](https://github.com/jgarber623/craft-webmention-client/blob/master/README.md).

For the initial release, the plugin makes available a new "Webmention (targets)" Field Type that can be added to any of your site's Field Layouts. When saving an entry with a webmention field, the plugin will ping each target supplied, looking for a webmention endpoint. If an endpoint is found, then the endpoint, target, and source (the Craft entry's URL) are stored in a queue for processing. Once the queue is ready to be processed, a background task kicks off and sends webmentions to the appropriate websites.

That's it! Your Craft-powered site is now sending webmentions.

## Issues, Updates, etc.

I spent some time looking through the [FAQs](http://indiewebcamp.com/webmention#FAQ), [Issues](http://indiewebcamp.com/webmention#Issues), and [Brainstorming](http://indiewebcamp.com/webmention#Brainstorming) sections of the Webmention wiki page and I _think_ the Craft plugin handles most of the primary use cases. There are some things I'd like to do better in future versions, though:

- Send a webmention when a URL is removed from the list of targets.
- Have the plugin crawl an entry's body field(s) for URLs to ping.

The latter item would involve a lot of heavy lifting and some potentially tricky UI, but I'm hoping to tackle that down the line. In the mean time, give the plugin a try let me know if you run into any [problems](https://github.com/jgarber623/craft-webmention-client/issues) or have any feature suggestions.

---

In true IndieWeb fashion, I've published this on my own website first and syndicated it on [Viget's Extend blog](http://viget.com/extend/sending-webmentions-with-craft).