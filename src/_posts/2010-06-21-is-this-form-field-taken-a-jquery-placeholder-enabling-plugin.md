---
category: blog
date: 2010-06-21 10:10:00 -0500
excerpt: I present to you a short jQuery plugin that utilizes the placeholder attribute and enables it (in a manner of speaking) in non-supporting user agents.
layout: post
tags: javascript jquery plugin
title: Is this form field taken? A jQuery placeholder-enabling plugin
---

_This post originally appeared on [Viget's Inspire blog](http://viget.com/inspire/a-jquery-placeholder-enabling-plugin)._

Not too long ago, Trevor wrote [a great article](http://www.viget.com/inspire/a-better-jquery-in-field-label-plugin/) on better in-field labels using a handy jQuery plugin. In the course of the article, Trevor points out the new-to-HTML5 `placeholder` attribute which is available on textual inputs (the `input` and `textarea` elements).

As the spec defines it, [the `placeholder` attribute](http://dev.w3.org/html5/spec/Overview.html#the-placeholder-attribute) "represents a short hint (a word or short phrase) intended to aid the user with data entry." Seems pretty straight forward, right? If you've filled out a form on the web (and who hasn't?), you've likely seen placeholder text in forms fields. Sadly, they may often be used instead of labels. Placeholder text should work in concert with the label element to provide the user with context, formatting information, or other helpful aid.

So! Now that we know what the attribute is for, I'm here to tell you that you can start using it today in your HTML5-doctype'd web pages. [Browser support](http://diveintohtml5.org/forms.html#placeholder) is still spotty, but you can enjoy the goodness of the placeholder attribute in Firefox 3.7+, Safari 4.0+, and Chrome 4.0+.

For our not-quite-bleeding-edge browsers, I present to you a short jQuery plugin that utilizes the `placeholder` attribute and enables it (in a manner of speaking) in non-supporting user agents.

The implementation is pretty simple:

	$( "input, textarea" ).placehold();

You can't get much easier than that. The method takes one optional parameter: `placeholderClassName`. This allows you to specify a class name that will be attached to the form field when the placeholder text is being shown (the class is removed when a user focuses the form field). This gives you a styling hook whereby you can present your placeholder text in a different way from filled-in form fields.

An example:

	$( "input, textarea" ).placehold({
	    placeholderClassName: "temporary"
	});

The default for `placeholderClassName` is "placeholder" (I dug deep for that one…). Hat tip to Mr. Avery for suggesting the addition of this option.

If you dive into the plugin source, you'll notice that I'm binding a submit action (lines 28-34). As I was bragging to Blake about my first iteration of the plugin, he rightly pointed out that in browsers that execute the plugin, the placeholder text will get submitted and sent to the server. This is undesirable. To compensate, for each input, we bind a short action to the element's parent form (using [jQuery's `closest()` method](http://api.jquery.com/closest/)) that resets the value of the input should it's final value be equal to the placeholder.

So there you have it: a jQuery plugin that enables the `placeholder` attribute in any browser. The beautiful thing about this plugin is that it utilizes feature detection instead of browser sniffing to determine when to execute the plugin (line 6) and is thus future-proof. As more browsers implement the `placeholder` attribute, the plugin will execute in fewer and fewer instances. That wonderful snippet of code comes from the great Mark Pilgrim's Dive into HTML5 chapter on [Detecting HTML5 Features](http://diveintohtml5.org/detect.html).

Check out [the whole thing in action](http://www.viget.com/uploads/file/jquery-placehold/). Additionally, the [source code is available over on GitHub](http://github.com/jgarber623/jquery-placehold).

Thanks for reading and I hope you enjoy jQuery.placehold(). Let me know what you think (and if you have suggestions for improvements/optimizations) in the comments!