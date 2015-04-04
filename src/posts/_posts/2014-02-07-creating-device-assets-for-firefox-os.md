---
date: 2014-02-07 16:00:54 -0500
excerpt: Wherein I learn about Firefox OS and App manifests.
tags: assets development firefoxos
title: Creating Device Assets for Firefox OS
---

Earlier today, I posted [Tips For Implementing Device Assets](http://viget.com/extend/tips-for-implementing-device-assets) over on the Viget Extend blog. In that post, I outline a practical approach to implementing various device assets (favicons, touch icons, and Windows 8 Tiles). If you haven't yet, give it a read!

Just yesterday, a [Firefox OS phone arrived](http://instagram.com/p/kE-Mb2NxuS/) in the mail. It's a cheap little thing with plenty of pros, cons, and tradeoffs but it was affordable enough to warrant snagging one for Device Lab testing.

One of the first things I tested was how Firefox OS handles saving web pages to its home screen (like iOS and Android). Turns out it's a fairly easy process: Browse to your favorite website, click the star icon, and I'm asked if I'd like to save the URL to my bookmarks or to the home screen.

As a test, I saved World Wildlife Fund's recently-launched [Find Your Inner Animal quiz](http://fyia.worldwildlife.org/) to the home screen. (Full disclosure: I was part of the team that built the quiz for WWF.) Saving FYIA to the ZTE's home screen displayed a scaled up version of the favicon.

Total bummer!


## ~~App manifest to the rescue~~

~~A quick bit of digging around online revealed why: Firefox OS looks for a file named `manifest.webapp` in the root of your site. This manifest file is a standard JSON file with a handful of properties describing your website. (Full documentation can be found on [MDN's App manifest page](https://developer.mozilla.org/en-US/Apps/Developing/Manifest).)~~

~~A sample `manifest.webapp` might look like:~~

```json
{
    "name": "sixtwothree.org",
    "description": "Online home to Jason Garber, one of the Internet’s top Jason Garbers.",
    "launch_path": "/",
    "icons": {
        "60": "/webapp-icon-60x60.png",
        "128": "/webapp-icon-128x128.png"
    },
    "developer": {
        "name": "Jason Garber",
        "url": "http://sixtowthree.org"
    },
    "chrome": {
        "navigation": true
    },
    "default_locale": "en"
}
```

~~Most of the properties and values in the manifest file are self-explanatory. One to note is the `chrome` object where I'm explicitly instructing Firefox OS to display navigation UI ([example screenshots](https://developer.mozilla.org/en-US/Apps/Developing/Manifest#chrome)). If your website doesn't include in-page navigational elements, you'll want to include this setting. For example, [Pinterest's `manifest.webapp`](http://m.pinterest.com/manifest.webapp) includes this setting.~~

~~Depending on the nature of your website, `manifest.webapp` could be as simple as what I've shown above or [much, much more involved](https://developer.mozilla.org/en-US/Apps/Developing/Manifest). For a basic website such as this one, adding `manifest.webapp` should take no more than a few minutes!~~


## Late-Breaking Afternoon Update

As it turns out, I was way wrong with almost everything in this article. `manifest.webapp` is specifically used to install web "apps" ([whatever that means](http://adactio.com/journal/6246/)) typically through the [Firefox Marketplace](https://marketplace.firefox.com/).

This, friends, is why you always test your work before writing about it. Firefox OS doesn't currently support home screen icons in exactly the manner that iOS and Android do. There is an [open bug on Bugzilla](https://bugzilla.mozilla.org/show_bug.cgi?id=921014) with a lengthy discussion around the merits of adding support for `apple-touch-icon` with no apparent consensus or resolution.

There is some hope, though! I mentioned at the onset of this article that Firefox OS uses the website's favicon on the home screen. While a far cry from a customized full-size icon, you can add or update the following markup in the `<head>` of your website:

```html
<link rel="icon shortcut" href="/path/to/shortcut-icon.png" sizes="16x16">
<link rel="icon shortcut" href="/path/to/shortcut-icon.png" sizes="32x32">
```

That code should look familiar as it's how we've implemented favicons since time immemorial. What's different in this example (and how I've implemented it on this site) is the addition of the `sizes` attribute. This attribute allows supporting browsers to choose the correct icon to display.

In Firefox OS' case, that should be the 32×32 pixel icon. Check it out:

![Firefox OS Home Screen](http://f.cl.ly/items/3O2O0L0Q1Y3k0u3c0T3F/firefox-os-home-screen.jpg)