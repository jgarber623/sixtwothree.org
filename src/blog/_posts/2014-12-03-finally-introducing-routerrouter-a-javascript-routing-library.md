---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10152424305652343
  - title: Twitter
    url: https://twitter.com/jgarber/status/540219927425482754
date: 2014-12-03 13:51:36 -0500
excerpt: Just over a year ago, I wrote a small JS library for mapping functions to URLs. It's based on Backbone's Router.
tags: backbone development javascript routerrouter
title: (Finally) Introducing RouterRouter, a JavaScript Routing Library derived from Backbone
---

Just over a year ago now, I wrapped up [a significantly large project for The Chronicle of Higher Education](http://viget.com/work/chronicle-vitae). I spent a good amount of my time on the project learning and working with [Backbone.js](http://backbonejs.org), a popular MVC-ish JavaScript library. There are plenty of things to like and dislike about Backbone, but I really like the library's Router.

Put simply, [Backbone's Router](http://backbonejs.org/#Router) triggers actions based on the current page's URL. The class accepts an object whose keys represent URLs (or patterns that match URLs) and whose values are functions (or calls to functions). Like so:

	var router = new Backbone.Router.extend({
	    routes: {
	        'foo/:bar': function(bar) {
	            console.log(bar);
	        }
	    }
	});

It's a brilliantly simple design that's dramatically different from techniques I'd previously considered (see: [The Garber-Irish Implementation](http://viget.com/inspire/extending-paul-irishs-comprehensive-dom-ready-execution)). I was a fan, to say the least.

But… the thought of including Backbone wholesale in every project ever [really rustled my jimmies](http://i0.kym-cdn.com/photos/images/newsfeed/000/249/839/14f.jpg). I looked at some other routing libraries ([there's a great list here](http://microjs.com/#routing)), but each was either too feature-heavy or just not quite like Backbone's Router. I wanted Just this one feature. And even then, not _all_ of that feature.

So I set out to build my own by extracting Backbone's Router into a standalone library.

## Enter RouterRouter

Also just over a year ago now, I committed the first version of [RouterRouter](https://github.com/jgarber623/RouterRouter) on GitHub. The super smart group of people working on Backbone made the task of extracting Backbone.Router fairly straightforward. Using the [annotated source](http://backbonejs.org/docs/backbone.html#section-155), I was able to find the relevant pieces, re-writing things as necessary to incorporate only the features I really wanted.

What I ended up with is a dependency-free, modular library clocking in at a whopping 982 bytes (minified and gzipped). RouterRouter matches [all kinds of URL patterns](https://github.com/jgarber623/RouterRouter#pattern-matching) from simple string matching to completely custom regular expressions.

A basic example of RouterRouter in action, re-using the Backbone example from above:

	var router = new RouterRouter();

	router.route('foo/:bar', function(bar) {
	    console.log(bar);
	});

In the above example, the function will fire on any URL matching the pattern `foo/:bar` and passes `:bar` into the function for use. That's great if you want to match one route at a time. But, just like Backbone, you can supply a hash of routes to match against a variety of functions:

	var router = new RouterRouter({
	    routes: {
	        'foo/:bar': 'whiskey', // matches http://example.com/foo/1234
	        'biz/*baz': 'tango',   // matches http://example.com/biz/1/2/3/4
	        '': 'foxtrot'          // matches http://example.com/
	    },

	    foxtrot: function() {
	        console.log('This very basic route matches the root URL.');
	    },

	    tango: function(baz) {
	        console.log(baz); // logs 1/2/3/4
	    },

	    whiskey: function(bar) {
	        console.log(bar); // logs 1234
	    }
	});

In this example, the `routes` hash is checked for a matching pattern against the current URL, firing the appropriate function when a match occurs. Any values specified in the `routes` hash are passed along to the fired callback function. Additional usage examples are provided in [the project's the README file](https://github.com/jgarber623/RouterRouter/blob/master/README.md).

## But can it do…?

It's worth mentioning a couple things RouterRouter can't do or doesn't attempt to do.

RouterRouter doesn't (currently) support the [HTML5 History API](http://diveintohtml5.info/history.html). This is a choice I made to keep the library as small as possible and, well, I haven't had a project yet that required using the History API. That could change, of course.

Also, RouterRouter makes use of the `Object.keys` and `Array.prototype.map` JavaScript methods. Versions of Internet Explorer prior to 9 don't support either of these methods. Luckily, there are polyfills for each available. It's up to you if you choose to polyfill old versions of Internet Explorer or use a [mustard-cutting technique](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard) to supply enhanced features to more-capable browsers. Leaving that decision in your hands felt like the right thing to do.

---

RouterRouter is available for inclusion in your project via [Bower](http://bower.io/): `bower install routerrouter`. Source code is also [available on GitHub](https://github.com/jgarber623/RouterRouter). If you're interested in improving RouterRouter, look over the [contributing guidelines](https://github.com/jgarber623/RouterRouter/blob/master/CONTRIBUTING.md) and submit an Issue or Pull Request.

I've been using RouterRouter on projects for the last year and it hasn't let me down. It's a tiny, dependency-free, and reliable library well-suited for a variety of projects. [Try it out yourself](https://github.com/jgarber623/RouterRouter) and let me know what you think.