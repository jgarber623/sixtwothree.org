---
date: 2006-05-07 00:43:00 -0400
tags: development hack internetexplorer javascript polyfill
title: activateActiveX() – A Standards-Based Solution to Internet Explorer’s Active Content Woes
---


**Update (11/10/2006):** activateActiveX() version 1.2 is available [here](http://sixtwothree.org/blog/archives/2006/11/10/activateactivex-12/).

**Update (05/20/2006):** activateActiveX() version 1.1 is available [here](http://sixtwothree.org/blog/archives/2006/05/20/activateactivex-11/). Newer is better!

This past week at work, I put together a brief whitepaper on Microsoft’s [recent update to Internet Explorer 6](http://msdn.microsoft.com/library/default.asp?url=/workshop/author/dhtml/overview/activating_activex.asp "Activating ActiveX Controls") which affects the way the browser handles embedded ActiveX controls (Flash, Quicktime, Java applets, etc.). Our clients were slowly beginning to notice this new activation message and, as clients are prone to doing, assumed it was our fault.

Being proactive consultants, we (mostly, I) dove into researching potential fixes for the issue. For those not familiar with the Eolas patent lawsuit, I’d recommend giving the once-over to [Wikipedia’s article on the subject](http://msdn.microsoft.com/library/default.asp?url=/workshop/author/dhtml/overview/activating_activex.asp). In brief, yet another small, patent-holding company is suing Microsoft for big bucks. Only difference is, this time they won, and in the process forced Microsoft to make a change to their browser that will negatively impact the user experience of ninety plus percent of web users.

Propaganda: [Firefox](http://www.mozilla.com/firefox/ "Get Firefox") is, at present, not impacted by this change.

After becoming very angry at Eolas and depressed about the future of interactivity on the web, I took stock of the workarounds provided by [Adobe](http://www.adobe.com/devnet/activecontent/articles/devletter.html), [Apple](http://developer.apple.com/internet/ieembedprep.html), [deconcept](http://blog.deconcept.com/swfobject/), and [Aldo](http://www.hoeben.net/node/135/). I wasn’t terribly happy with any of these (largely similar) solutions. My main gripe with them is that they involve throwing `script` tags into the source markup.

I’m happy to announce a standards-based fix for IE’s ActiveX activation: [activateActiveX()](/files/activateActiveX.js "Download javascript source file"). _(Full disclosure: I just now found [ripper.rhetoric’s activateActiveX function](http://therippa.blogspot.com/2006/03/activateactivex.html) which performs almost identically.)_

First, a look at the `activateActiveX()` function itself. The first thing we do is a little object detection to prevent the script from executing in non-affected browsers. `outerHTML` is IE-only and `compatMode` is supported only in IE6.0+.

```js
if ( !document.getElementsByTagName || !document.body.outerHTML || !document.compatMode ) return false;
```

The next thing we do is determine which tags we’re replacing, and loop through them.

```js
var elems = new Array( "object", "embed", "applet" );
for ( h = 0; h &lt; elems.length; h++ ) {
    var objects = document.getElementsByTagName( elems[h] );
}
```

This is where things start to get sticky. Most existing methods refer to the `object`'s or `applet`'s parent element, assuming that the replaced element will be the lone child of another element (a `div` for instance). Practically speaking, this isn’t always the case. I needed to find a way to replace the element without referring to its parent or siblings. This is where `outerHTML` comes into play.

`outerHTML` is similar to `innerHTML` in that it returns HTML as a string, complete with elements, attributes, etc. Its behavior around `object` tags seems to be a bit buggy when using the [Flash Satay](http://www.alistapart.com/articles/flashsatay/) method of embedding Flash content. After several rounds of banging my head on the desk, I was able to determine the problem revolved around the Satay method’s removal of the `codebase` and `classid` attributes. Being the stickler that I am, I didn’t want to compromise my crazysexycool code by throwing in some old school attributes.

Back on target, `outerHTML` was only returning the `object` tag and my non-Flash content (in this case an image). Hence the need for the second loop to grab my `param`s.

```js
var params = "";
for ( var j = 0; j &lt; objects[i].childNodes.length; j++ ) {
    params += objects[i].childNodes[j].outerHTML;
}
```

Still with me? Okay, great. We’re almost there. The last thing we need to do is replace the element. We can achieve that with the following:

```js
objects[i].outerHTML = objects[i].outerHTML.replace( "&lt;/" +
elems[h].toUpperCase() + "&gt;",
params + "&lt;/" + elems[h].toUpperCase() + "&gt;" );
```

It’s certainly not pretty, but it works. All that’s left is to add a call to `activateActiveX()` in your `onload`. For this type of task, I’m a big fan of Simon Willison’s [addLoadEvent](http://simon.incutio.com/archive/2004/05/26/addLoadEvent).

“But wait,” you say. “I’ve got a large Flash movie with a loading screen and my movie gets loaded twice! What’s up with that?” This was the problem I ran in to once I started testing on a live server. This problem revolved around using `window.onload` to call my function. `window.onload` is not triggered until the entire page’s content (HTML, images, Flash movies, etc.) are loaded by the browser. The time it took to download the Flash movie in my case was causing the repeated loading of the swf. What I needed to do was replace my elements when the DOM was finished loading (which occurs <em>way</em> before the page finished loading).

I hacked together an `onDomReady()` function based on [brothercake’s domFunction()](http://www.brothercake.com/site/resources/scripts/domready/) and [Dave Rolsky’s DOM.Ready](http://www.openjsan.org/doc/a/au/autarch/DOM/Ready/0.14/lib/DOM/Ready.html). I then changed how I call `activateActiveX()` and everything worked like a charm.

Again, `activateActiveX()` can be downloaded [here](/files/activateActiveX.js). The script has been licensed under the [Creative Commons – Lesser GNU Public License](http://creativecommons.org/licenses/LGPL/2.1/) and is available for you to use free of charge. Praise, critiques, criticism, bug reports, and love letters are more than welcome.