---
date: 2014-06-29 11:21:49 -0400
excerpt: Every post on this site is now also represented in JSON format.
tags: development jekyll json
title: Adding JSON versions of Posts with Jekyll
---

Using [Ben Balter's JekyllBot](http://ben.balter.com/2012/12/27/introducing-jekyllbot/) as a guide, I've added a [JSON Page Generator](https://github.com/jgarber623/sixtwothree.org/blob/master/src/_plugins/json_page_generator.rb) plugin to this site.

Now, every post automatically has an associated JSON representation of its content and metadata. Simply replace the trailing `/` in the URL with `.json`. I've also linked to the JSON file in each post's footer.

As an example, this post's associated JSON is available at this URL:

[http://sixtwothree.org/blog/adding-json-versions-of-posts-with-jekyll.json](http://sixtwothree.org/blog/adding-json-versions-of-posts-with-jekyll.json)

As I add more features and capabilities to this site, the list of alternate formats may grow. For now, though, feel free to enjoy my posts in HTML or JSON!