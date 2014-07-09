---
copies:
  - title: Viget Extend
    url: http://viget.com/extend/sass-maps-are-awesome
date: 2013-10-15 10:25:34 -0400
excerpt: This past weekend at SassConf, the authors of Sass announced the first version 3.3 release candidate of the popular CSS extension language. There are a ton of new features in 3.3 that I'm excited to try out, but I want to share a personal favorite with you.
tags: sass webdesign
title: Sass Maps Are Awesome!
---

_This post originally appeared on [Viget's Extend blog](http://viget.com/extend/sass-maps-are-awesome)._

This past weekend at [SassConf](http://sassconf.com/), the authors of Sass [announced](https://twitter.com/SassCSS/status/389086335505805312) the first version 3.3 release candidate of the popular CSS extension language. This is great, long-anticipated news for those of us that use Sass on a daily basis. There are [a ton of new features](https://github.com/nex3/sass/blob/master/doc-src/SASS_CHANGELOG.md) in 3.3 that I'm excited to try out, but I want to share a personal favorite with you.


## SassScript Maps

[Lists](https://github.com/nex3/sass/blob/master/doc-src/SASS_CHANGELOG.md#lists) (which have been a part of Sass since version 3.1.0) are a great feature, but have always been one-dimensional. You have a list of things, you can loop over those things, you can access one of the things by index, etc. etc. Super-easy, right?

The new [Maps data type](https://github.com/nex3/sass/blob/master/doc-src/SASS_CHANGELOG.md#sassscript-maps) coming in Sass 3.3 add dimensionality to Lists. Maps are associations of values with a syntax that very closely resembles JSON. From the documentation:

	$map: (key1: value1, key2: value2, key3: value3);

This is, in a word, _awesome_. Let me show you why.


## Demo Time

In this example, I have a list of links to my various social networks. When a user hovers over a link, I'd like to swap out that link's background color with a network-specific color. To write all of that CSS by hand would be dreadfully tedious (and _soooooo_ last year). We can instead use Maps.

Let's start with the markup, though:

	<ol>
	    <li><a href="#" class="profile-link--bandcamp profile-link">Bandcamp</a></li>
	    <li><a href="#" class="profile-link--delicious profile-link">Delicious</a></li>
	    <li><a href="#" class="profile-link--facebook profile-link">Facebook</a></li>
	    <li><a href="#" class="profile-link--ficly profile-link">Ficly</a></li>
	    <li><a href="#" class="profile-link--flickr profile-link">Flickr</a></li>
	    <li><a href="#" class="profile-link--github profile-link">GitHub</a></li>
	    <li><a href="#" class="profile-link--googleplus profile-link">Google+</a></li>
	    <li><a href="#" class="profile-link--instagram profile-link">Instagram</a></li>
	    <li><a href="#" class="profile-link--kickstarter profile-link">Kickstarter</a></li>
	    <li><a href="#" class="profile-link--lanyrd profile-link">Lanyrd</a></li>
	    <li><a href="#" class="profile-link--lastfm profile-link">Last.fm</a></li>
	    <li><a href="#" class="profile-link--linkedin profile-link">LinkedIn</a></li>
	    <li><a href="#" class="profile-link--photodrop profile-link">PhotoDrop</a></li>
	    <li><a href="#" class="profile-link--pinterest profile-link">Pinterest</a></li>
	    <li><a href="#" class="profile-link--rdio profile-link">Rdio</a></li>
	    <li><a href="#" class="profile-link--soundcloud profile-link">SoundCloud</a></li>
	    <li><a href="#" class="profile-link--twitter profile-link">Twitter</a></li>
	    <li><a href="#" class="profile-link--vimeo profile-link">Vimeo</a></li>
	    <li><a href="#" class="profile-link--youtube profile-link">YouTube</a></li>
	</ol>

Nothing crazy there. Just a simple ordered list (semantics!) containing a series of links with [BEM-ish class names](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/).

Next we'll apply some basic styling to the list and links:

	ol {
	    font-family: Helvetica, sans-serif;
	    list-style: none;
	    margin: 0 auto;
	    padding: 0;
	    width: 20em;
	}

	li {
	    margin-bottom: 0.5em;
	}

	.profile-link {
	    background: #f2f2f2;
	    border-radius: 3px;
	    color: #4778b8;
	    display: block;
	    padding: 0.75em 1em;
	    text-decoration: none;

	    &:focus,
	    &:hover {
	        color: #fff;
	    }
	}

Check out this example [over on CodePen](http://codepen.io/jgarber/pen/amDlI).


## Map-Making

Now for the real magic. First, we'll define our network-specific set of colors using a Map:

	$profiles: (
	    bandcamp: #4e9bac,
	    delicious: #248cff,
	    facebook: #3b5998,
	    ficly: #b51c2c,
	    flickr: #0063db,
	    github: #4183c4,
	    googleplus: #dd4b39,
	    instagram: #517fa4,
	    kickstarter: #76cc1e,
	    lanyrd: #152e51,
	    lastfm: #d51007,
	    linkedin: #007bb6,
	    photodrop: #cdb6e3,
	    pinterest: #cb2027,
	    rdio: #0088da,
	    soundcloud: #f60,
	    twitter: #00aced,
	    vimeo: #aad450,
	    youtube: #b00
	);

As you can see, the syntax is pretty straightforward. We've created a comma-separated list of key/value pairs and assigned it to the `$profiles` variable.

The last piece of the puzzle is to write some Sass to loop over our Map and generate the necessary CSS rules.

	@each $profile, $bgcolor in $profiles {
	    .profile-link--#{$profile}:focus,
	    .profile-link--#{$profile}:hover {
	        background: $bgcolor;
	    }
	}

In the above `@each` loop, we're cycling over each key/value pair in `$profiles`, assigning the key to `$profile` and the value to `$bgcolor`. Inside the loop, we generate our selectors (e.g. `.profile-link--facebook`) and an appropriate background color (e.g. `background: #3b5998;`) for each. The resulting CSS for each social network would look something like:

	.profile-link--facebook:focus,
	.profile-link--facebook:hover {
	    background: #3b5998;
	}

Since Sass 3.3 isn't yet officially available, I can't show you a working CodePen example of this code, but you can check out [my personal site](http://sixtwothree.org/) which proudly displays my presence on a variety of social networks. (If you want to play around with the release candidate, [follow these instructions](http://rubygems.org/gems/sass/versions/3.3.0.rc.1).)

SassScript Maps are just one of the many new features coming in Sass 3.3. I'm pretty excited for the official release and hope that you've found this quick peak at Maps helpful!