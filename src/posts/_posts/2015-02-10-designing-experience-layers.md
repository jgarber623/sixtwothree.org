---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10152582462777343
  - title: Twitter
    url: https://twitter.com/jgarber/status/565152172049182723
  - title: Viget Inspire
    url: http://viget.com/inspire/designing-experience-layers
date: 2015-02-10 09:07:58 -0500
excerpt: Wherein I rattle on about the Web, content-first design, and progressive enhancement.
tags: design progressiveenhancement
title: Designing Experience Layers
---

Yesterday afternoon, I [posted a little jab at Vine](https://twitter.com/jgarber/status/564855344934170625). What you see in that screenshot is a Vine video page completely devoid of usable content owing to a JavaScript error. I'm attempting a pretty typical task and a primary function of Vine's service: I want to watch [Jay-Z's reaction to Kanye reprising his schtick at the Grammys](https://vine.co/v/OUvAvAYQm6I). As you do.

But I can't. Something went wrong. You see, Vine's video pages are built in a way that expects everything goes off without a hitch. The Web browser will receive all the necessary assets in the necessary order and execute everything _exactly_ as the developer intended. Unfortunately, that's not the way the Web often works.

(For those curious, I was using the most up-to-date version of Google Chrome on a MacBook Air running the latest operating system on my home's broadband Internet connection. Pretty optimal conditions, right?)

So I post about it on Twitter. Friend and colleague [Helen Holmes](http://helenvholmes.com/) saw my post and [kicked off a lengthy back-and-forth](https://twitter.com/helenvholmes/status/564858232087539712) that convinced me to commit my thoughts to the page. I've been meaning to write about this particular topic for a while and here's what's been rattling around in my head.

## The Web is a Continuum

The way Vine's video pages are built illustrates the fault in thinking of the Web as a platform. Platforms are static, defined software environments responsible for running neatly packaged bundles of code: a downloadable native app, an installable desktop application, a Flash movie. iOS, Android, Mac OS X, Windows, Flash—these are platforms.

_This is not the Web._ Rather, this is not _today's_ Web. Today's Web is a [continuum](https://adactio.com/journal/6692).

Today's Web makes no guarantees. Every bit of code—HTML, CSS, and JavaScript—shipped from a server across the wire acts as a _suggestion_ as to how the browser should interpret and display content. More often than not, everything works planned, but for any number of reasons, a browser could fail to request or render a particular asset. Luckily, browsers are by design resilient in how they handle HTML and CSS. [Being liberal in what they accept](https://en.wikipedia.org/wiki/Robustness_principle), browsers will simply ignore any HTML or CSS they don't understand. Unfortunately, as the Vine example above demonstrates, browsers don't do so well when encountering JavaScript problems. Rather than carrying on, the browser halts further execution of any script.

That right there highlights the problem with thinking of the Web as a platform. Something _will_ go wrong, even under nearly ideal conditions. And when something inevitably goes wrong, what happens to your website? To your users?

What are we to do? How do we design for [hostile browsers](http://trentwalton.com/2014/03/10/device-agnostic/)?

## Experience Layers

Nearly a year ago, I likened the Web to [a layer cake](/posts/the-web-is-cake). A delicious metaphor, to be certain, but not entirely accurate. In the intervening eleven months, I've thought back to that post and the metaphor's shortcomings. I think I've cracked it: The Web is _experience layers_, built from the bottom up, with each successive layer enhancing the previous.

Practically speaking, this amounts to an initial content layer described using semantic HTML—the Web's native tongue—enhanced with a layer of style applied with CSS. Embeddable media—images, audio, and video—fall somewhere in the neighborhood of the style layer. Lastly, behavior applied using JavaScript tops out the experience stack.

Lower foundational levels should never rely on higher layers for their primary functionality. Rendering a website's content, for instance, shouldn't require JavaScript. Higher levels in the stack should _improve_ the overall experience, hanging on hooks found in the foundational levels (e.g. CSS classes and ID attributes).

## Designing from the Bottom Up

In his book <cite>[Responsive Design Workflow](http://www.amazon.com/dp/0321887867/?tag=sixtwothree-20)</cite>, [Stephen Hay](http://www.the-haystack.com/) details his process for designing in text. The entire book is worth your time, but you can read [this particular chapter](http://www.peachpit.com/articles/article.aspx?p=2040824) for free online. Stephen also detailed this technique in [his presentation at Mobilism](https://vimeo.com/45915667) back in 2012.

Stephen advocates a content-first approach using plain text. The emphasis on content is critical: everything in your interface is content whether it be the text of an article, the navigation, or control elements like form inputs. It's all content and it all needs writing.

I _love_ this content-focused approach to design. It just makes sense.

Moving up a layer from plain text, Stephen recommends the popular [Markdown](http://daringfireball.net/projects/markdown/) text formatting syntax. Markdown is a simple set of formatting rules for describing common text components (such as headings and lists) and maps closely to the elements in HTML. _Awfully convenient._ There are a bunch of great Markdown editors available—I use [Byword](http://bywordapp.com/)—and every one of them will easily convert Markdown documents to HTML.

Now that you have an HTML file full of well-structured content, you can begin layering on design. This is where existing design tools and techniques like branding guidelines, [style tiles](http://styletil.es/), and Photoshop mockups are most useful. The HTML generated from Markdown is barebones, so you'll want to add additional structural elements as necessary to accommodate your website's visual design.

This is, to a degree, [designing in the browser](http://www.stuffandnonsense.co.uk/blog/about/walls_come_tumbling_down_presentation_slides_and_transcript/). I urge you, though, to think of it as designing _with_ the browser. Use the browser as you would every other tool at your disposal.

With your website's structure and visual design in place, you can bring the whole thing to life with a final layer of behavior applied with JavaScript. As before, this step may involve additional HTML, class names, or ID attributes. That's okay, but try to keep it lightweight.

Designing in this fashion allows you to easily test along the way—and you should test furiously! Try disabling styles. Does your site still read well? It should if you were rigorous during the content-crafting phase and used Markdown to organize your content. Disable JavaScript and make sure your website's primary content is still available. Do most of your website's features still function at a basic level? Most importantly, is your website still accessible in the absence of any one (or more) of these enhancing layers?

## A Progressive Experience

If you've read this far and thought, "Why, that sounds like [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement)," you'd be correct! Progressive enhancement is the best strategy for building for today's Web. With so many people connecting to and interacting with the Web on a [mind-boggling](https://www.flickr.com/photos/brad_frost/7387724364) number of devices of [varying screen sizes](http://viewportsizes.com/) in an infinite array of circumstances, it's critical to design layers of experience. Any layer atop another should serve to enhance the base-level experience of the previous. The essential functionality of the base layers should continue to function smoothly in the absence of higher-layer enhancements.

Approaching design through the lens of experience layers is _the_ design strategy for the Web; one that's better for users and designers alike.

Many thanks to [Trevor Davis](http://trevordavis.net/) for reviewing an early draft of this post.