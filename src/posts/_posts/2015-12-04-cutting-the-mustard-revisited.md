---
date: 2015-12-04 12:15:40 -0500
excerpt: Taking a look at a few possible updates to the BBC News team’s classic JavaScript feature detection.
tags: development featuredetection javascript progressiveenhancement
title: Cutting the Mustard Revisited
---

Three years ago, the team working on the redesigned BBC News website posted "[Cutting the Mustard,](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard)" outlining their method for bucketing browsers based on capability. While JavaScript feature detection isn't new, the BBC News team's approach is a novel rethinking of the technique.

With the following lines of code, browsers are categorized as being either "HTML4" or "HTML5" capable.

```js
if ('querySelector' in document
    && 'localStorage' in window
    && 'addEventListener' in window) {
    // Bootstrap the JavaScript application…
}
```

_If_ a browser supports [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), _if_ it supports [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), and _if_ it also understands [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), then that browser is capable enough to execute the website's JavaScript. There's no mention of browsers and no fiddling about with [the nightmare hellscape that is user agent strings](http://useragentstring.com/pages/useragentstring.php). This is [designing with progressive enhancement](/posts/designing-with-progressive-enhancement) in mind: build a functional core experience using HTML and CSS and then, as browser capabilities allow, _enhance!_

The combination of feature detections in the code example above covers the majority of browsers released in the last six or so years. Oh, and Internet Explorer 9 (released in 2011) and newer. It's possible this combination will work for you, but you'll want to gather some analytics on this before making any decisions.

## New Mustard

In the three years since the original mustard cut, browsers have progressed at a fantastic clip. Most significantly, in March of this year, Microsoft retired Internet Explorer in favor of the more-frequently updated Edge. With [global usage](http://caniuse.com/usage-table) of _all versions of Internet Explorer prior to 11_ sitting comfortably around 3% and the rapid adoption of current versions of other major browsers, it seems the time is right to spice up our mustard.

_(I promise that's the last food pun…)_

### Detecting with `visibilityState`

Google developer [Jake Archibald](https://jakearchibald.com/) gave us the following gem [in a tweet](https://twitter.com/jaffathecake/status/570872103227953153):

> if (!('visibilityState' in document)) return;
>
> A nice way to prevent your JS running in IE<10 and Android WebKit [http://caniuse.com/#feat=pagevisibility](http://caniuse.com/#feat=pagevisibility)

`visibilityState` is part of the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) and, as Jake points out, can be used to serve JavaScript to modern browsers (excluding IE less than 10 and older versions of Android's default WebKit-based Browser app).

```js
if ('visibilityState' in document) {
    // Bootstrap the JavaScript application…
}
```

_Much_ shorter, a touch more obscure, and only slightly more exclusive than the BBC News team's original technique.

### Detecting with `devicePixelRatio`

You may find, while evaluating your website's usage statistics, that you want to raise the bar just a little bit higher. In that case, you may consider using [`devicePixelRatio`](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio):

```js
if ('devicePixelRatio' in window) {
    // Bootstrap the JavaScript application…
}
```

According to [Can I use…](http://caniuse.com/#search=devicepixelratio), `devicePixelRatio` is well-supported and first appeared in Internet Explorer in version 11. For testing and verification purposes, I put together [this quick demo on CodePen](http://codepen.io/jgarber/pen/PZowBG). It's nice and short and works as you'd imagine. Since we can use pixel density in HTML on [an `<img>` with the `srcset` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) and in CSS with [resolution media queries](http://www.w3.org/TR/css3-mediaqueries/#resolution), using the `devicePixelRatio` feature detection may be a little more obvious to you and your teammates.

## Your Mileage May Vary

I suggested earlier in this post that you look at your website's analytics. I can't stress this enough. The techniques outlined above are useful, but may not be the most appropriate choice for your website. Dive into the data you have at your disposal and make the best choice for your particular use case.