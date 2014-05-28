---
date: 2011-07-19 10:30:35 -0500
excerpt: I’m in the middle of working out a new feature for a project that requires JavaScript to append some markup, stylesheets, and scripts to a page. A piece of JavaScript required styles be applied to certain elements before it should execute.
layout: post
tags: javascript
title: 'JS 201: Run a function when a stylesheet finishes loading'
---

_This post originally appeared on [Viget's Inspire blog](http://viget.com/inspire/js-201-run-a-function-when-a-stylesheet-finishes-loading)._

_This is the first in a series I’m calling, “JS 201.” It’s not introductory material, but is instead that helpful middle ground between the basics and pretty much anything [John Resig](http://ejohn.org/) writes. Short, practical, typically plain-ol’-JavaScript tips is what you’ll get._

I’m in the middle of working out a new feature for a project that requires JavaScript to append some markup, stylesheets, and scripts to a page. The task is fairly straightforward: JavaScript has native capability to do all of that. I’m looking at you, `createElement` and `appendChild`.

I did run into a problem, though. A piece of JavaScript required styles be applied to certain elements before it should execute. Unfortunately, the script was executing while the stylesheet was being loaded. Like most reasonable front-end developers, I figured I’d just run a function when the `onload` event fired on the `link` element. It works for images, why not for stylesheets, right? Wrong!

Currently, only [Opera and Internet Explorer](http://thudjs.tumblr.com/post/637855087/stylesheet-onload-or-lack-thereof) support the `onload` event and `onreadystatechange` respectively. Strange bedfellows, for sure, but that leaves us with the entire Gecko and WebKit landscape without anything approximating the `onload` event.

What are we to do? Exploit the `img` element's `onerror` event, that's what!

	var head = document.getElementsByTagName( "head" )[0],
	    body = document.body,
	    css = document.createElement( "link" ),
	    img = document.createElement( "img" ),
	    cssUrl = "/path/to/a/css/file.css";

	css.href = cssUrl;
	css.rel = "stylesheet";
	head.appendChild( css );

	img.onerror = function() {
	    // Code to execute when the stylesheet is loaded
	    body.removeChild( img );
	}

	body.appendChild( img );
	img.src = cssUrl;

What's happening above isn't at all complex. We first grab references to the `head` and `body`. We create our `link` and a dummy `img` and define the path to our CSS file. Next, we set some attributes on our `link` element and append it to the `head`.

The next few lines are the sneaky bits. We first set a function on the `img` to run when its `onerror` event fires. This is where we put our code that we want to execute _after the stylesheet is loaded_. After that, we append the `img` to the `body` and _then_ set its source to our CSS file path. The order of operations there is important, so don't swap those lines!

What happens behind the scenes is that the browser tries to load the CSS in the `img` element and, because a stylesheet is not a type of image, the `img` element throws the `onerror` event and executes our function. Thankfully, browsers load the entire CSS file before determining its not an image and firing the `onerror` event.

It's far from pretty, but it works, and it doesn't take a lot of extra code to make happen.

For further reading (and for some different examples), check out the following posts that served as reference and inspiration for this article:

- [stylesheet.onload: or lack thereof](http://thudjs.tumblr.com/post/637855087/stylesheet-onload-or-lack-thereof)
- [When is a stylesheet really loaded?](http://www.phpied.com/when-is-a-stylesheet-really-loaded/)
- [Link element load event support for CSS Style Sheet includes, finally!](http://www.backalleycoder.com/2011/03/20/link-tag-css-stylesheet-load-event/)