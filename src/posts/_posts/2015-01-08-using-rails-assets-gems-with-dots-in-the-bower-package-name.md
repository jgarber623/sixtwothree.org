---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10152518773277343
  - title: Twitter
    url: https://twitter.com/jgarber/status/553318807289466881
date: 2015-01-08 17:22:26 -0500
excerpt: Today I uncovered a curious little bug while using Rails Assets and Bower packages with dots in the package name. Here's how to solve it.
tags: bower development rubyonrails railsassets scss
title: Using Rails Assets Gems with Dots in the Bower Package Name
---

I recently came across the brilliant [Rails Assets](https://rails-assets.org/) service. Rails Assets is great. It acts as a bridge between your application and all of the packages available via [Bower](http://bower.io/) while still playing within the familiar confines of Rails' oft-maligned [Asset Pipeline](http://guides.rubyonrails.org/asset_pipeline.html). Bower packages are available as gems in the form of `rails-assets-bower-package-name`. Easy peasy.

I did, however, uncover a minor snag today while a CSS package with a dot in the package name ([normalize.css](http://bower.io/search/?q=normalize.css)). In `application.scss`, I had:

```scss
@import "dependencies";
@import "normalize.css";
@import "base/*";
@import "components/**/*";
```

Nothing out of the ordinary if you're familiar with importing [Sass](http://sass-lang.com/) files. Everything appeared to be working great when running my application in development mode. When I ran the app in production mode, though, I noticed that none of normalize.css' styles were being applied.

I dug in and found the following in the precompiled stylesheet:

```css
@import url('normalize.css');
```

Something—Rails, the Asset Pipeline, Rails Assets, Sass, Sprockets, _whatever_—was interpreting `@import "normalize.css";` as a vanilla CSS `@import` instead of as instructions to the precompiler to include that file directly in the compiled stylesheet.

I was immediately suspicious that the dot in the package name was to blame. A quick `bower search normalize` revealed that the official normalize.css package is also available as `normalize-css`. I swapped `rails-assets-normalize-css` into my app's Gemfile, ran `bundle install`, updated `application.scss`, re-precompiled (that's right) my app's assets, fired up my app in production mode, crossed my fingers, recited an incantation, and reloaded my browser.

Success!

**Lesson learned:** If you're using [Rails Assets](https://rails-assets.org/) in a project and any of your `rails-assets-*` gems have dots in the Bower package name, find a version of the package without the dot.