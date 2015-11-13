---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10153107508262343
  - title: Twitter
    url: https://twitter.com/jgarber/status/665245405077180416
date: 2015-11-13 14:08:02 -0500
excerpt: Demonstrating a useful technique for providing fallback content to browsers lacking support for inline SVGs.
tags: development png progressiveenhancement svg
title: Inline SVG with PNG Fallback
---

In response to [my recent article on SVG icon sprites](/posts/automating-svg-icon-sprite-generation-with-svgeez), [Russell asks](https://twitter.com/kingkool68/status/662375235585376256):

> But my real question is how do you provide fallback support for SVG icons if the browser doesn't support SVG?

Russell asks an excellent question that I'm sure many front-end developers fret over as we strive to support the capabilities of all of our users' browsers and devices. Luckily, the state of SVG support in modern browsers [is strong](http://caniuse.com/#search=svg). _But_… there's still potential for users running older browsers to have a less-than-ideal experience.

So then how can we give the best experience to users with modern browsers and devices without leaving other users out in the cold? Allow me to bang on that old drum we call [progressive enhancement](/tags/progressiveenhancement)…

## A Brief Introduction to HTML Parsing

If you've used the new(ish) HTML5 [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video), or [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) elements, you're likely familiar with how browsers parse the content within these elements. Within these elements, you may provide a series of [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source) elements, each pointing to a particular format of the media in question. User agents then decide which format to display based on the browsers' capabilities, network conditions, etc. In addition to `<source>` elements, authors can include fallback content of any kind (text, images, etc.) for browsers that either don't understand the containing media element or that don't support any of the provided formats.

For instance, [this example](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#Examples) from MDN illustrates the kind of fallback content you might provide:

```html
<video controls>
    <source src="foo.webm" type="video/webm">
    <source src="foo.ogg" type="video/ogg">
    <source src="foo.mov" type="video/quicktime">
    I'm sorry; your browser doesn't support HTML5 video.
</video>
```

In the above example, any browser lacking support for [WebM](http://www.webmproject.org/), [Ogg Vorbis](http://www.vorbis.com/), and [QuickTime](http://www.apple.com/quicktime)—or for the `<video>` element in general—will render the fallback text, "I'm sorry; your browser doesn't support HTML5 video." This is HTML's parsing model at work! A browser, encountering an element it doesn't understand, will simply ignore the unknown element and render any recognizable content within.

As you may have guessed by now, we can use HTML's forgiving error-handling model to supply fallback content within an SVG element.

## Inline SVG with PNG Fallback

For this demonstration, I'll be building on the inline SVG icon system mentioned [in last week's svgeez post](/posts/automating-svg-icon-sprite-generation-with-svgeez). For the full background on SVG icon systems, give these two [CSS Tricks](https://css-tricks.com/) posts a read:

- [Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)
- [SVG \`symbol\` a Good Choice for Icons](https://css-tricks.com/svg-symbol-good-choice-icons/)

Here's what we're shooting for:

{% include figure.html image_url='http://f.cl.ly/items/3z2x262g0E0O1e41301l/livingsocial-logo.png' image_alt='LivingSocial logo' caption='Look at that crisp logo!' %}

_If you'd rather skip the explanation and play with the final product, I've posted a [demo on CodePen](http://codepen.io/jgarber/pen/epbgRN)._

Let's dive in…

### The Markup

First, we'll want to embed our SVG icon system in the page's markup (abbreviated here for sanity's sake). This code can appear anywhere within the `<body>` element, but I recommend including it at the bottom of the page.

```html
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
	<symbol id="livingsocial-logo" viewBox="0 0 112 42">
		…
	</symbol>
</svg>
```

Next, we'll add markup for the logo with the `<svg>` and `<use>` elements:

```html
<a href="https://www.livingsocial.com/" class="logo">
    <svg aria-label="LivingSocial">
        <use xlink:href="#livingsocial-logo">
    </svg>
</a>
```

At this point, we could call it a day, comfortable in the knowledge that users of modern browsers will delight in seeing a crisp version of our logo. Unfortunately, users with older browsers get [a big, fat goose egg](http://idioms.thefreedictionary.com/goose+egg). _We can do better._

Here's where we get to use our knowledge of HTML's parsing model to add some fallback content to our logo:

```html
<a href="https://www.livingsocial.com/" class="logo">
    <svg aria-label="LivingSocial>
        <use xlink:href="#livingsocial-logo">
        <img src="http://f.cl.ly/items/3t3H3K3q060J1H2H342l/livingsocial-logo.png" alt="LivingSocial">
    </svg>
</a>
```

[Boom goes the dynamite](https://www.youtube.com/watch?v=W45DRy7M1no).

### The Style

If you're building this example as we go along, you're no doubt seeing _two_ images in your page (using a modern browser, that is!): the SVG version of the logo and the PNG fallback. Nothing a little CSS can't handle:

```css
.logo {
    color: #fff;
    display: block;
    height: 5.25em;
    margin: 0 auto;
    width: 14em;
}

.logo svg {
    max-height: 100%;
    width: 100%;
}

.logo img {
    display: none;
}
```

Perfect! Right? Well, almost…

With these styles, we've hidden the fallback PNG from _all_ browsers, not just those understanding SVG. At this point, there are two routes we could go. The first uses Internet Explorer-specific [conditional comments](https://en.wikipedia.org/wiki/Conditional_comment) while the second utilizes [Modernizr](https://modernizr.com/). The former solution _only_ works in IE and the latter relies on JavaScript. Pick your poison, really.

### Hello, Old IE…

If we go the conditional comments route, adding this block of code to the `<head>` of our page will display the fallback PNG in older versions of Internet Explorer:

```html
<!--[if lt IE 9]>
    <style>
        .logo img {
            display: inline-block;
        }
    </style>
<![endif]-->
```

Ideally, the above code would be in a `legacy.css` file served only to older versions of Internet Explorer, but for purposes of this demonstration, it's included in the page.

If you want to use conditional comments but don't want to bother with additional CSS or stylesheets, you _could_ update the markup to something like this:

```html
<a href="https://www.livingsocial.com/" class="logo">
    <svg aria-label="LivingSocial>
        <use xlink:href="#livingsocial-logo">
        <!--[if lt IE 9]>
            <img src="http://f.cl.ly/items/3t3H3K3q060J1H2H342l/livingsocial-logo.png" alt="LivingSocial">
        <![endif]-->
    </svg>
</a>
```

Wrapping the fallback `<img>` in an IE-specific conditional comment would also eliminate the need for the `.logo img { display: none; }` rule. I'm not crazy about this option, but again… pick your poison.

### Feature Detection with Modernizr

Using Modernizr's [Inline SVG feature detection](https://github.com/Modernizr/Modernizr/blob/master/feature-detects/svg/inline.js), we can check for SVG support and write a basic CSS rule to display our fallback image for any browser lacking the necessary capabilities:

```css
.no-inlinesvg .logo img {
    display: inline-block;
}
```

Super simple and works great if you're already using Modernizr on your website. Basically: use whichever technique best meets your users' needs.

Using the above markup, CSS, and—optionally—JavaScript, modern browsers render a crisp SVG and older browsers display the fallback PNG. Hooray, progressive enhancement!

You can see the complete code for this demo [over on CodePen](http://codepen.io/jgarber/pen/epbgRN).

A [quick DuckDuckGo search](https://duckduckgo.com/?q=inline%20svg%20fallback%20png) returned an abundance of articles outlining similar fallback techniques. A couple of choice selections:

- [A Complete Guide to SVG Fallbacks](https://css-tricks.com/a-complete-guide-to-svg-fallbacks/) by [Chris Coyier](http://chriscoyier.net/)
- [SVG Fallback with PNG Images](http://callmenick.com/post/svg-fallback-with-png) by [Nick Salloum](http://callmenick.com/)
- [Inline SVG with IE8 Fallback Support](https://j.eremy.net/inline-svg-with-ie8-fallback-support/) by [Jeremy Church](https://j.eremy.net/)

Many thanks to [Morgan Whaley](https://twitter.com/supwhaley) and [Trevor Davis](http://trevordavis.net/) for reviewing an early draft of this post.