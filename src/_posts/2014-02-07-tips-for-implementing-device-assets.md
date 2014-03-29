---
category: blog
date: 2014-02-07 09:30:00 -0500
excerpt: In this post, I'll outline the approach I used to create a practical and manageable set of device assets for World Wildlife Fund's recently-launched Find Your Inner Animal quiz.
layout: post
tags: development
title: Tips For Implementing Device Assets
---

_This post originally appeared on [Viget's Extend blog](http://viget.com/extend/tips-for-implementing-device-assets)._

Back in November, [Blair](http://viget.com/about/team/bculbreth) wrote a great post about [designing device assets](http://viget.com/inspire/designing-device-assets-templates-techniques-and-tips). In her post, she details the ins and outs of creating favicons, touch icons, and Windows 8 Tiles. If you've read her post (or worked with device assets before), you know that the sheer number of assets you _could_ create is overwhelming. But which assets _should_ you create?

In this post, I'll outline the approach I used to create a practical and manageable set of device assets for World Wildlife Fund's recently-launched [Find Your Inner Animal](http://fyia.worldwildlife.org/) quiz.

I'll start with…


## The Mighty favicon

Blair linked to [this css-tricks.com article](http://css-tricks.com/video-screencasts/122-the-state-of-favicons/) that describes how to create a favicon using [Icon Slate](http://www.kodlian.com/apps/icon-slate). That pretty much sums up what you need to do to combine several PNGs into a compatible `favicon.ico`. The only additional piece of advice I have to offer is that you should optimize those PNGs (using [ImageAlpha](http://pngmini.com/) and [ImageOptim](http://imageoptim.com/), perhaps?) before dragging them into Icon Slate.

As you'd imagine, Wikipedia has a [ridiculously thorough article on favicons](http://en.wikipedia.org/wiki/Favicon), including compatibility charts. While you could include markup to link to your favicon, every browser released in the last ten years will look for a file named `favicon.ico` in the root of your website. Dropping a file named `favicon.ico` into your site's root is sufficient (and nearly effortless!).


## Touch Icons

Oh, heavens. _Touch icons._

If you take a look at [Mathias Bynens' exhaustive post](http://mathiasbynens.be/notes/touch-icons) on the subject, you'd rightly conclude that the most appropriate course of action is to run screaming for the hills.

There are a couple of different approaches you could take here.

You could create images at every size Blair mentioned in her post and create `link` elements for each. This "kitchen sink" approach guarantees that an appropriately-sized touch icon is provided to every browser that supports touch icons. _There is nothing wrong with this approach._ I think it's overkill, but by no means is it wrong.

My favorite hardline approach is the "no HTML" solution Mathias outlines. Simply drop whichever combination of properly-sized images you prefer into the root of your site and let browsers sort it out. This approach is great other than that it leaves Android browsers out in the cold.

We can do better! For Find Your Inner Animal, we used the following combination of icons and markup.

The icons:

- `apple-touch-icon-152x152-precomposed.png`
- `apple-touch-icon-120x120-precomposed.png`
- `apple-touch-icon-76x76-precomposed.png`
- `apple-touch-icon-72x72-precomposed.png`
- `apple-touch-icon-precomposed.png` (sized 57x57)
- `apple-touch-icon.png` (sized 57x57)

The markup:

	<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-152x152-precomposed.png" sizes="152x152">
	<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-120x120-precomposed.png" sizes="120x120">
	<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-76x76-precomposed.png" sizes="76x76">
	<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png">

This bizarre collection of images and markup provides Retina-quality touch icons to high-DPI displays and ever-so-slightly scaled touch icons to older devices running iOS and Android. The scaling isn't the _greatest_, but it's a practical tradeoff.


## Windows Tiles

Adding support for Windows Tiles to your site requires a tiny bit of legwork. The first thing to know is that implementation differs dramatically between Internet Explorer versions 10 and 11. Let's take a look at the following markup:

	<meta name="msapplication-config" content="/ieconfig.xml">
	<meta name="msapplication-TileColor" content="#6a9a22">
	<meta name="msapplication-TileImage" content="/ms-tile-144x144.png">

I'll come back to that first line in a moment. Lines 2 and 3 are custom `meta` elements that instruct IE 10 to use `#6a9a22` as the tile's background color and `/ms-tile-144x144.png` as the tile's image. The color you choose and the file name are entirely up to you, but the image should be 144 pixels square.

Now for that first line. `ieconfig.xml` is a small file that looks like this:

	<?xml version="1.0" encoding="utf-8"?>
	<browserconfig>
	    <msapplication>
	        <tile>
	            <square70x70logo src="ms-tile-128x128.png"/>
	            <square150x150logo src="ms-tile-270x270.png"/>
	            <wide310x150logo src="ms-tile-558x270.png"/>
	            <square310x310logo src="ms-tile-558x558.png"/>
	            <TileColor>#6a9a22</TileColor>
	        </tile>
	    </msapplication>
	</browserconfig>

Ignore as best you can those heinously-named elements. The important parts are the various paths to file names and the `TileColor` element. As mentioned in [Creating custom tiles for IE11 websites](http://msdn.microsoft.com/en-us/library/ie/dn455106.aspx), tile images should be 1.8 times larger than you'd think in order to accommodate a wide range of devices. This accounts for the apparent discrepancy between an element's name (`square70x70logo`) and its associated image (`ms-tile-128x128.png`).

Save that XML to a file named `ieconfig.xml`, throw it in the root of your project, and link to it using the `meta` element from the earlier code block. Fire up your favorite Windows 8/8.1 device and you'll be able to pin your site to the Start screen.

**Update:** As [John Riviello points out](http://viget.com/extend/tips-for-implementing-device-assets#comment-1234719605), you can remove the `msapplication-config` element from your markup _if_ you create a `browserconfig.xml` file in the root of your site (IE11 looks for this file by default). Thanks, John!


## All Set!

Device assets are by no means _hard_ to implement, just tricky. There's been significant implementation changes over the last year or two as devices shift toward high-DPI displays. The landscape has shifted so quickly and dramatically that supporting all features across all devices would be a real headache. With the above tips, you should now be able to support a broad swath of devices without pulling out your hair!