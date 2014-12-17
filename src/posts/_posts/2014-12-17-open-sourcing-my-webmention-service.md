---
date: 2014-12-17 10:21:29 -0500
excerpt: It may have taken five months, but I finally published the code behind webmention.sixtwothree.org.
tags: development indieweb webmention
title: Open-Sourcing My Webmention Service
---

Since November 2011, I've used the excellent static-site generator [Jekyll](http://jekyllrb.com/) to power this site. It's a fantastic piece of software that's grown by leaps and bounds since I first picked it up. In that time, as you've likely noticed if you've followed my recent writing, I've been working to integrate various [IndieWeb](https://indiewebcamp.com/) concepts and features into the site.

Some IndieWeb features, like adding  `rel="me"` to profile links, are easily achievable and fit nicely within Jekyll's boundaries as a static HTML-generating tool. More dynamic features, like webmentions, require a service or application—something with the ability to respond to incoming requests.

In July, I wrote about [the launch of my webmention endpoint](http://sixtwothree.org/posts/now-accepting-webmentions). That small web app, living at [webmention.sixtwothree.org](http://webmention.sixtwothree.org/), collects, verifies, and stores comments from around the web related to my posts. I then use JavaScript to pull those comments and display them on the relevant post over here on sixtwothree.org. It's a simple little service: the webmention app accepts and verifies webmentions and provides a JSON API for retrieving webmention data by URL.

For instance, if I want to display webmentions for this post, I request the following URL:

```
http://webmention.sixtwothree.org/api/webmentions?target=http://sixtwothree.org/posts/open-sourcing-my-webmention-service
```

Asking for the content of that URL, parsing the response, and running the resulting data set through a series of templates yields the "Responses" section on each of my posts.

## Open-Sourcing the Project

Earlier this week, after much dragging of feet and checking that I didn't commit any sensitive, revealing pieces of code, I made public [the GitHub repository for webmention.sixtwothree.org](https://github.com/jgarber623/webmention.sixtwothree.org). It's rough around the edges, but it works. Not bad for my first real attempt at a Ruby application, right?

The code is presented as-is and I've noted as much as I could in the [README.md](https://github.com/jgarber623/webmention.sixtwothree.org/blob/master/README.md). If you find any glaring holes in the documentation, submit an [Issue](https://github.com/jgarber623/FrancisCMS/issues) and I'll try to fill in the gaps.

While I'm currently working on replacing Jekyll with [my own custom-built CMS](https://github.com/jgarber623/FrancisCMS), I wanted to make the code for this project available to anyone who may find it helpful. It's served me well and I hope you find it useful for implementing webmentions into your own project.

