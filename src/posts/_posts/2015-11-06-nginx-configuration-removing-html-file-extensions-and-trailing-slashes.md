---
date: 2015-11-06 16:37:37 -0500
excerpt: How to get clean URLs with nginx and Jekyll.
tags: development jekyll nginx
title: 'nginx Configuration: Removing HTML file extensions and trailing slashes'
---

I'm in the process of migrating most of my sites from a server running [Apache](http://httpd.apache.org) to a newer host dishing out sites with [nginx](http://nginx.org/). Sorting out the differences in configuration between the two Web servers has been a ~~fun~~ geeky challenge. The new nginx configuration should replicate the old Apache configuration as closely as possible, particularly regarding URLs. I want to take care not to contribute to the Web's runaway case of linkrot. [Cool URIs don't change](http://www.w3.org/Provider/Style/URI.html), after all.

Many of my sites are [Jekyll](http://jekyllrb.com/)-generated static affairs and serving clean, human-friendly URLs requires a bit of server voodoo. I'd long ago figured out how to remove trailing slashes and file extensions from URLs with Apache, but nginx is its own thing.

So! How to have nginx remove trailing slashes and file extensions?

Some quick searching turned up a few results, but Sean Davis' post, [Remove HTML Extension And Trailing Slash In Nginx Config](http://thepolymathlab.com/remove-html-extension-and-trailing-slash-in-nginx-config), got me most of the way there. His code removed trailing slashes and file extensions, but it also prevented certain assets (images, in particular) from loading. Ooph.

Luckily I was able to suss out the cause in short order. Adding `$uri` to the end of the `try_files` line below did the trick!

```nginx
rewrite ^(/.*)\.html(\?.*)?$ $1$2 permanent;
rewrite ^/(.*)/$ /$1 permanent;

try_files $uri/index.html $uri.html $uri/ $uri =404;
```

I've yet to see any unforeseen side effects from adding `$uri` to `try_files`. Great success!