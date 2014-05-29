---
date: 2011-06-02 12:15:00 -0500
tags: javascript
title: A Quick Pair of Random JavaScript Tips
---

_This post originally appeared on [Viget's Inspire blog](http://viget.com/inspire/a-quick-pair-of-random-javascript-tips)._

I recently came across [Jed Schmidt’s 140bytes project on GitHub](https://github.com/jed/140bytes/). Jed describes the project as, “a tweet-sized, fork-to-play, community-curated collection of JavaScript.” There’s a ton of interesting (and interestingly coded) script examples from a variety of people, but my favorite part of the project so far has been the [Byte-saving Techniques](https://github.com/jed/140bytes/wiki/Byte-saving-techniques) page on the wiki.

Here are two quick tips gleaned from the wiki.


## Use `~` and `indexOf` to test presence

This piece of code will set a variable to a value that evaluates to true or false depending on the presence or absence of a string (your needle) in another string (your haystack).

	has_my_name = "Most times, Jason knows what he's doing.".indexOf( "Jason" ) >= 0;

	has_my_name = ~"Most times, Jason knows what he's doing.".indexOf( "Jason" );

The first line (the traditional method) sets `has_my_name` to `true`. The second, shorter, line sets `has_my_name` to -13 which, being non-zero, would also evaluate to `true`. <strike>I’m not entirely sure why the returned index is negative, but it works.</strike> [Chris Jones](http://www.viget.com/about/team/cjones) unearthed [this article on the tilde](http://dreaminginjavascript.wordpress.com/2008/07/04/28/) that more-or-less clarifies what the tilde is doing. Thanks, Chris!

**Update:** In [Elliot's comment](http://www.viget.com/inspire/a-quick-pair-of-random-javascript-tips/#12058), he rightly notes that separating the equals and tilde works and is less obscure than `=~`. I've updated the example accordingly.


## Use the `.link` String method

Quickly generating blocks of HTML in JavaScript can be a mess of concatenated strings. Reign in some of the mess with the `.link` String method.

	anchor = '<a href="' + url + ">' + text + '</a>';

	anchor = text.link( url );

The first line is the string-concatenating method of building anchor elements with which we’re all familiar. The second line is the new hotness. Turns out, though, that it’s actually the old hotness: `.link` has been available to us since [IE 3.0 and Netscape 2.0](http://www.hunlock.com/blogs/The_Complete_Javascript_Strings_Reference#link). If I’d known then what I know now…


## Boom.

There you have it, friends: two quick JavaScript tips that’ll save a couple of bytes, make your code a little cleaner, and impress your friends at dinner parties.