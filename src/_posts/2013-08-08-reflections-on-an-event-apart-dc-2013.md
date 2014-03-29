---
category: blog
date: 2013-08-08 9:45:14 -0500
excerpt: This week, Trevor and I attended An Event Apart, the annual design conference roadshow organized by Eric Meyer and Jeffrey Zeldman.
layout: post
tags: aneventapart conference
title: Reflections on An Event Apart DC 2013
---

_This post originally appeared on [Viget's Inspire blog](http://viget.com/inspire/reflections-on-an-event-apart-dc-2013)._

This week, [Trevor](http://viget.com/about/team/tdavis) and I attended [An Event Apart DC](http://aneventapart.com/event/washington-dc-2013), the annual design conference roadshow organized by [Eric Meyer](http://meyerweb.com/) and [Jeffrey Zeldman](http://www.zeldman.com/). Past AEAs were must-see events and this year's conference was no exception.

One of the things I love about An Event Apart is that, while each speaker presents on their own topic, common themes pervade the entire event. The conference functions as a cohesive full-length album rather than a collection of hit singles; more "[Pet Sounds](http://en.wikipedia.org/wiki/Pet_sounds)" than "[Surfin' Safari](http://en.wikipedia.org/wiki/Surfin_Safari)."

This year's conference touched on many common themes, but the three that stuck with me the most are the importance of iteration, content-first design, and progressive enhancement.


## The Importance of Iteration

Several speakers drove home the importance of iteration, both in design and development. In his kickoff presentation, Jeffrey Zeldman remarked that agencies should include post-launch iteration phases in their contracts. Far too often, he argues, we design products, launch them, and then fail to revisit our creations in the following weeks and months.

Speaking at the atomic level, [Samantha Warren](http://badassideas.com/) remarked that it's much easier to iterate on a [style tile](http://styletil.es/) than it is to iterate on a fully-realized composition. This point ties in nicely with Brad Frost's recent push toward [Atomic Design](http://bradfrostweb.com/blog/post/atomic-web-design/) and the increasingly pervasive notion that we should be designing patterns and systems instead of pages. In fact, [Jeremy Keith](http://adactio.com/) shared his [Pattern Primer](https://github.com/adactio/Pattern-Primer) describing it as "unit tests for your CSS."


## Content-First Design

Last year's popular content-first (or "content-out") design returned in force again this year, with [Karen McGrane](http://karenmcgrane.com/) making strong arguments for the value of a multi-device content strategy. Karen spoke of how good content transcends platform: "There's no such thing as 'How to Write for Mobile.' There's just good writing."

With the ascension of the Multi-Device Web, we must now take a long, hard look at our content strategy. We should never think, "We can just hide this content on mobile." Instead, we should be asking ourselves, "Do we even _need_ this content?"

Several speakers noted that, in the near-future, all phones will be smartphones. That means people of all economic walks of life will be accessing the Internet from small(ish) devices on a variety of connections and service plans. For many of these people, this device will be the _only_ way they access the Internet. It is therefore critical that your website be designed in a way that lets these users accomplish their desired tasks. Technically speaking, this means building a high-performance, progressively-enhanced, mobile-first responsive design.


## Progressive Enhancement is Still Important

Speaking of our old friend Progressive Enhancement… Throughout his presentation on The Long Web, Jeremy Keith reminded us all of the importance of progressively enhanced experiences. That is: build your website using HTML and CSS first _then_ enhance that experience responsibly with JavaScript.

Progressive enhancement was never really about trying to cater to users with JavaScript disabled. Instead, progressive enhancement is about _expecting the unexpected_. The problem with building a JavaScript-reliant website is that JavaScript is a single point of failure.

HTML and CSS have a simple yet brilliant error-handling model: when the browser encounters a bit of markup or a CSS property that it doesn't understand, it simply skips that markup or property and moves on to the next thing. JavaScript, on the other hand, breaks when the interpreter encounters an error. Building progressively-enhanced websites safeguards your work against the possibility of broken JavaScript. Your fancy AJAX-powered escalators will simply become [stairs](http://www.brainyquote.com/quotes/quotes/m/mitchhedbe401954.html).

Building mobile-first, responsive, progressively-enhanced websites is a winning strategy as far as I'm concerned.


## Wrapping Up

The above is just the tip of the iceberg. An Event Apart DC 2013 may be over, but there are plenty more valuable pieces of knowledge to consider and fold into our thought processes in the coming year. If you're interested in reading more about the event, I've posted [all of my session notes](http://sketchnotes.sixtwothree.org/) for your perusal.