---
date: 2010-07-01 9:45:00 -0500
excerpt: I just finished reading over the latest version of the "differences" document and thought it'd be helpful to jot down some thoughts on things I hadn't seen before when reading up on HTML5.
tags: html w3c
title: Recapping the W3C’s “HTML5 differences from HTML4” document
---

_This post originally appeared on [Viget's Inspire blog](http://viget.com/inspire/recapping-the-w3cs-html5-differences-from-html4-document)._

Last week, the W3C released an updated version of its [HTML5 differences from HTML4](http://www.w3.org/TR/2010/WD-html5-diff-20100624/) document. This is the second iteration of the text this year and the seventh overall since first being drafted in January, 2008.

The document is a tremendous resource to front-end web developers as it outlines only those items relevant to authors. If you've ever tried to parse a W3C spec (and lived to tell about it), then you know they are geared toward browser makers and not run-of-the-mill web developers (The Rest of Us™).

I just finished reading over the latest version of the "differences" document and thought it'd be helpful to jot down some thoughts on things I hadn't seen before when reading up on HTML5. For brevity's sake, we'll just cover the changes to markup. There's a truckload of new APIs that I'm hoping to cover in the near-ish future.

Let's get this party started with a "new" element.

> [`embed`](http://www.w3.org/TR/html5/embedded-content-0.html#the-embed-element) is used for plugin content.

I'll be honest and admit I'm a little confused as to how this differs from the [`object`](http://www.w3.org/TR/html5/the-iframe-element.html#the-object-element) element. It's also pretty late as I'm writing this, so that could have something to do with it. Enlighten me, dear readers.

## New Attributes

> The `a` and `area` elements have a new attribute called `ping` that specifies a space-separated list of URLs which have to be pinged when the hyperlink is followed. Currently user tracking is mostly done through redirects. This attribute allows the user agent to inform users which URLs are going to be pinged as well as giving privacy-conscious users a way to turn it off.

This is a pretty cool addition as it bakes into the browser behavior that is already in widespread use. "Paving the cowpath," as [Mr. Keith](http://adactio.com/) would say. The side benefit here is that it gives the end user power over their own privacy (at least as it pertains to click tracking).

> The new `form` attribute for `input`, `output`, `select`, `textarea`, `button` and `fieldset` elements allows for controls to be associated with a form. I.e. these elements can now be placed anywhere on a page, not just as descendants of the form element.

	<label>Email:
	    <input type=email form=x name=email>
	</label>
	<form id=x></form>

This is a huge change from the historic approach to form development. Let's be honest, though, building huge complex forms into an already complex design can be a bear. The new `form` attribute, when applied judiciously and with an eye toward accessibility, will go a long way to relieving some of the pain of modern form development. I'd love to get [John's](http://www.jfciii.com/) or [William's](http://zaxbypass.com/) opinion on the accessibility implications here.

> The `fieldset` element now allows the `disabled` attribute. It disables all descendant controls when specified.

Another sensible addition to the spec. This should ease scripting gymnastics when dealing with larger, complex forms.

## Global Attributes

HTML5 introduces the notion of "global attributes" which, as you may have guessed, apply to any element in the DOM. Previous versions of HTML (and XHTML) had "core attributes" that applied to _most_ elements, but not all. A thorough list of global (or standard) attributes in HTML5 can be found [over on W3Schools](http://www.w3schools.com/html5/html5_ref_standardattributes.asp).

Of the new global attributes, `spellcheck` is interesting:

> The `spellcheck` attribute allows for hinting whether content can be checked for spelling or not.

It does exactly what you'd think it would. Success!

> HTML5 also makes all event handler attributes from HTML4, which take the form `onevent-name`, global attributes and adds several new event handler attributes for new events it defines.

The "separation of content, presentation, and behavior" purist in me isn't too keen on codifying event handlers as attributes, but it's in the spec so it's worth mentioning.

## Changed Elements

> The `b` element now represents a span of text to be stylistically offset from the normal prose without conveying any extra importance, such as keywords in a document abstract, product names in a review, or other spans of text whose typical typographic presentation is emboldened.

Yep, good ol' `b` is still there. As is our old friend…

> The `i` element now represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, a thought, a ship name, or some other prose whose typical typographic presentation is italicized. Usage varies widely by language.

Both of those reformulations imply presentation, so make of them what you will.

## That's a wrap

There you have it: things I didn't know (or had otherwise forgotten) about the HTML5 spec. Definitely give [the whole document](http://www.w3.org/TR/2010/WD-html5-diff-20100624/) a read when you have the chance and let us know in the comments what you like, dislike, or don't understand.