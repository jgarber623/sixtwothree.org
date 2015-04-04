---
copies:
  - title: Viget Inspire
    url: http://viget.com/inspire/extending-paul-irishs-comprehensive-dom-ready-execution
date: 2010-10-27 9:30:00 -0400
excerpt: Way back in March of '09, Paul Irish laid forth a markup-based means of executing JavaScript on page load. I iterated on Paul's method, adding a touch of HTML5 and making use of some built-in Rails magic.
tags:
  - html
  - javascript
  - rubyonrails
title: Extending Paul Irish’s comprehensive DOM-ready execution
---

_This post originally appeared on [Viget's Inspire blog](http://viget.com/inspire/extending-paul-irishs-comprehensive-dom-ready-execution)._

Way back in March of '09, the intelligent (and dashing!) Paul Irish laid forth a [markup-based means of executing JavaScript on page load](http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/). If you're unfamiliar with the technique, the basics are:

1. Use `class` and `id` attributes on your document's body element that map to keys in an object literal.
2. Create initializing and executing functions in your JavaScript that parse those `class`es and `id`s and call the appropriate functions.

The method is noteworthy in that it enforces a sense of organization in both your JavaScript and your HTML. For sufficiently large web applications, using a system like Paul's can make JavaScript integration a snap. The added benefit of having a structured object containing all your application's functionality is icing on the cake.

On a recent Ruby on Rails project, I iterated on Paul's method (dubbed the [Garber-Irish Implementation](http://www.flickr.com/photos/viget/4941545212/) by [some](http://markupboy.com/2010/08/devnation-falls-church.html)), adding a touch of HTML5 and making use of some built-in Rails magic. Let's take a look.

## The Garber-Irish Implementation

First off, it'd be negligent to not mention that I'm a huge fan of [HTML5's `data-*` attributes](http://html5doctor.com/html5-custom-data-attributes/). While I firmly believe that useful data should be made visible to users, there are circumstances where `data-*` attributes make sense. For instance, including `data-lat` and `data-lng` attributes in an element containing a street address would allow for easily adding markers to a Google Map on the page:

```html
<span data-lat="38.8951" data-lng="-77.0363">
    1600 Pennsylvania Ave.
    Washington, DC
</span>
```

Taking a step back, we can use `data-\*` attributes on the `body` element to provide an indication of where we are within an application:

```erb
<body data-controller="<%= controller_name %>" data-action="<%= action_name %>">
```

The above code will yield something like:

```html
<body data-controller="users" data-action="show">
```

This presumes, of course, that you have a "users" controller with a "show" action in your application. Throw that code in your application's `layout.html.erb` and we're done on the markup front.

The JavaScript is also relatively straightforward:

```js
SITENAME = {
    common: {
        init: function() {
            // application-wide code
        }
    },

    users: {
        init: function() {
            // controller-wide code
        },

        show: function() {
            // action-specific code
        }
    }
};

UTIL = {
    exec: function( controller, action ) {
        var ns = SITENAME,
            action = ( action === undefined ) ? "init" : action;

        if ( controller !== "" && ns[controller] && typeof ns[controller][action] == "function" ) {
            ns[controller][action]();
        }
    },

    init: function() {
        var body = document.body,
            controller = body.getAttribute( "data-controller" ),
            action = body.getAttribute( "data-action" );

        UTIL.exec( "common" );
        UTIL.exec( controller );
        UTIL.exec( controller, action );
    }
};

$( document ).ready( UTIL.init );
```

The above example relies on jQuery's `$( document ).ready()` to fire off `UTIL.init`, but you could just as easily use a straight JavaScript event handler.

`UTIL.init`, when passed a single argument, defaults to calling an "init" function (should it exist). Otherwise, `UTIL.init` will execute `SITENAME.controller.action()`. In our example, that shakes out to `SITENAME.users.show()`.

Before any of that, though, a "common" function is executed (`SITENAME.common.init()`). You can utilize this function to run code on every page of your site (for, you know, _common_ things).

So, the order of operations in our example would be:

```js
SITENAME.common.init();
SITENAME.users.init();
SITENAME.users.show();
```

In Paul's original method, he includes a `finalize()` function which you can add in should you need it.

## Pros and Cons

The Garber-Irish Implementation is pretty great (I'm biased), but isn't without some drawbacks. Having used the above code in a real-world project, I came to realize two things:

First, depending on the nature of your application, you may not want to expose controller and action names. If that is a concern in your application, you may want to consider a different naming pattern.

Second, page-specific CSS selectors can get really awkward:

```css
body[data-controller="users"][data-action="show"] div.some-element { … }
```

Whether or not you do something like this completely depends on how you architect your CSS, but be warned things can get verbose fast if you're not careful.

On the upside, the code presented here is entirely framework-independent (aside from that jQuery-specific `ready()` function, of course). The Garber-Irish Implementation also frees up the `id` and `class` attributes on the `body` element for other things, should you need them.

Lastly, this method adds another layer of consistency by making use of application-wide naming conventions (something that Rails is pretty high on).

## Wrapping Up…

There you have it, an amended comprehensive means of DOM-ready execution. Feel free to take this concept wholesale or change it up further to better suit your particular needs. Some additional takeaways:

1. `data-*` attributes are pretty great and are incredibly useful.
2. Sharing application-wide naming conventions makes everyone happy.
3. Organize your JavaScript into an object literal. They rule!

I'd love to hear in the comments how you're architecting your JavaScript. Thanks for reading!