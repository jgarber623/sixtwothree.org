---
date: 2014-01-10 18:21:09 -0500
excerpt: In this post, I'll cover how I combined browser-sync with a couple of my favorite tools (Compass, Jekyll, and Foreman) to build out a static site and make browser and device testing easier.
layout: post
tags: browsersync development ruby
title: Using browser-sync with Compass, Jekyll, and Foreman
---

Building and testing websites in a bunch of browsers and on a bunch of devices can be a real pain. Save a file, flip to a browser, hit reload. Grab a phone or tablet, hit reload. Etc. etc. etc.

There are a number of tools (like [Live Reload](http://livereload.com/), [Ghostlab](http://vanamco.com/ghostlab/), and [Adobe Edge Inspect CC](http://html.adobe.com/edge/inspect/)) that solve the multi-browser, many-device problem in different ways. I've tried out most of them, usually settling on one for a while before completely re-thinking my workflow. Nothing really _stuck_.

[browser-sync](https://github.com/shakyShane/browser-sync) popped up on my radar thanks to [Addy Osmani's great introduction post](http://addyosmani.com/blog/browser-sync/). browser-sync, a [Node.js](http://nodejs.org/) module, will automatically reload all connected browsers when a file changes. It can even live-inject CSS files without requiring a full page reload. On top of that, it will also synchronize scroll position and form input. Super-handy if you're testing pages that require authentication.

In this post, I'll cover how I combined browser-sync with a couple of my favorite tools (Compass, Jekyll, and Foreman) to build out a static site and make browser and device testing easier.

_The following assumes that you are somewhat familiar with front-end development tools like Compass, Jekyll, and Node, and aren't afraid of the command line._


## Setup

You can find detailed installation instructions for each of the dependencies on their respective websites. But, briefly:

	npm install -g browser-sync
	gem install compass foreman jekyll


## File Structure

The application we'll be discussing will have the following file structure:

	• config
	  • browser-sync.js
	  • compass.rb
	  • jekyll.yml
	• html
	• src
	  • jekyll
	  • sass


## Compass

For this example, we're using a pretty basic [Compass](http://compass-style.org/) configuration.

From `config/compass.rb`:

	http_path       = '/'
	css_dir         = 'src/jekyll/assets/stylesheets'
	images_dir      = 'src/jekyll/assets/images'
	sass_dir        = 'src/sass'

	output_style    = :compressed
	relative_assets = true

The above settings will compile all Sass files in `src/sass` into `src/jekyll/assets/stylesheets`. Your settings may differ, of course, based on your project's file structure (there's [a long list of available options](http://compass-style.org/help/tutorials/configuration-reference/)).


## Jekyll

Configuring [Jekyll](http://jekyllrb.com/) is similarly straightforward. You'll likely have more settings in this file, but here's the bare minimum you'll need to get started.

From `config/jekyll.yml`:

	source: ./src/jekyll
	destination: ./html

Set a `source` and a `destination`. Pretty simple, right?


## browser-sync

Finally, we'll add some configuration for [browser-sync](https://github.com/shakyShane/browser-sync)—the newest tool in the workflow.

browser-sync, being a Node.js module, takes a configuration file similar to other Node modules you may use (like [Grunt](http://gruntjs.com/)).

From `config/browser-sync.js`:

	module.exports = {
	    debugInfo: true,
	    files: [
	        'html/assets/stylesheets/*.css',
	        'html/**/*.html'
	    ],
	    ghostMode: {
	        forms: true,
	        links: true,
	        scroll: true
	    },
	    server: {
	        baseDir: 'html'
	    }
	};

There are plenty of [configuration options](https://github.com/shakyShane/browser-sync/wiki/Working-with-a-Config-File) available. In our config, we're telling browser-sync to do the following:

1. Spit out as much debug information into the console as possible.
2. Watch for changes to any CSS or HTML files in our output directory (which we set to `html` in our Jekyll configuration).
3. Set three of the four `ghostMode` options to `true`.
4. Provide a `baseDir` since we want to serve static HTML, CSS, etc.


## Tying everything together with Foreman

Now that we have the configuration sorted out for each of our application's three processes, let's wrangle everything using [Foreman](https://github.com/ddollar/foreman). If you're anything like me, you hate having a dozen terminal tabs open, each running a single process. This is why I love Foreman.

In the root of your project, create a `Procfile` and add the following:

	jekyll:       bundle exec jekyll build --config config/jekyll.yml --trace --watch
	compass:      bundle exec compass watch
	browser-sync: browser-sync --config config/browser-sync.js

Let's take a look the `jekyll` process:

	bundle exec jekyll build --config config/jekyll.yml --trace --watch

We're using `jekyll build` with the `--watch` flag instead of `jekyll serve` since we rely on browser-sync's built-in server. The `--trace` switch is a convenient addition that will display a backtrace when an error occurs. Super handy for rooting out bugs.

The Compass line is about as basic as it gets. For browser-sync, we're passing our configuration file using the `--config` switch.

That's it! What we've done here is given Foreman instructions on how to run our three processes. After that, starting up the application is as easy as running `foreman start`.


## Working It

Now that everything is up and running, we should be able to connect to our application at the IP address and port number (e.g. `http://10.0.1.200:3001`) provided by browser-sync. Open up that URL in as many browsers as you can find, scroll and click to your heart's content, and watch as every connected browsers and devices update in real time.

Similarly, as we make changes to our application (either the markup or styles), browser-sync will push these updates to all connected devices. No need to manually refresh!

## _Fin._

There you have it: a rough outline of how I brought together several useful tools to quickly develop and test a web project.