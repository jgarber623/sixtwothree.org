---
date: 2015-07-07 10:47:07 -0400
excerpt: Text and links from my presentation at the seventh annual CSS Summit.
tags: csssummit event progressiveenhancement
title: Designing with Progressive Enhancement
---

The following is the text (and links!) from my presentation at the seventh annual [CSS Summit](http://csssummit.com/), delivered Tuesday morning, July 7th, 2015.

---

Good morning!

First off, I'd like to thank [Christopher](http://christopherschmitt.com/) and [Ari](http://www.aristiles.com/) at [Environments for Humans](http://environmentsforhumans.com/) for putting together this wonderful event and for inviting me to speak with you all today. It's a pleasure to be here and I'm excited to share with you some lessons I've learned designing and building things on the Web for nearly twenty years.

I'm here today to talk with you about a Web development methodology known as [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement). Some of you may be familiar with the concept, others not. Don't worry; there's plenty here for everyone, independent of your familiarity with the technique.

I've organized today's presentation into three major sections:

1. I'll give a brief history of progressive enhancement: what the term means, the environment from which it grew, and how it compared to existing development strategies of the time.
2. I'll compare those circumstances to the Web as we know it. That is, how does a methodology like progressive enhancement fit into the state of the Web in 2015.
3. I'll walk through some examples of progressive enhancement as applied to the Web's front-end layers: HTML, CSS, and JavaScript.

There's a lot to cover, so let's dive in.

## A Brief History of Progressive Enhancement

Before we can talk about progressive enhancement's relevance in 2015, we must first look to the past. Two thousand and three, to be exact.

### State of the Web: 2003 Edition

By 2003, the [first browser wars](https://en.wikipedia.org/wiki/Browser_wars) were over and Microsoft's Internet Explorer 6 stood atop a decimated landscape. In January of that year, Steve Jobs announced the release of [Apple's Safari Web browser](https://en.wikipedia.org/wiki/Safari_(web_browser)), giving us the first version of the [Webkit rendering engine](https://en.wikipedia.org/wiki/WebKit). [Netscape](https://en.wikipedia.org/wiki/Netscape) by this point had already open-sourced their browser's code, spawning the [Mozilla](https://en.wikipedia.org/wiki/Mozilla) project and its suite of applications. Mozilla's Phoenix browser—which we now know as [Firefox](https://en.wikipedia.org/wiki/Firefox)—was just beginning to capture savvy Web users' attention and Google, as characterized by then-CEO Eric Schmidt, was "[a small company](http://blogs.wsj.com/digits/2009/07/09/sun-valley-schmidt-didnt-want-to-build-chrome-initially-he-says/)."

While alternatives to Internet Explorer were available, for all intents and purposes, we lived with a de facto browser monoculture.

### The Participatory Web

The Web at this time was also on the cusp of its second boom cycle—later dubbed "[Web 2.0](https://en.wikipedia.org/wiki/Web_2.0)"—which would blow the Web's doors wide open, inviting everyone to participate online via easy-to-use blogging services and new social networks. Looking at raw numbers, in 2003, [upwards of 700 million people](http://www.internetworldstats.com/emarketing.htm)—roughly 10% of the world's population—were online. An additional hundred million would come online by the end of the following year.

### Graceful Degradation

The prevailing development practice at the time—[graceful degradation](https://en.wikipedia.org/wiki/Fault_tolerance)—focused on providing an optimal experience to the latest and greatest browsers with little focus on users saddled with older or less-capable browsers. In practical terms, this approach amounted to coding for an ideal set of circumstances—a particular browser or a certain amount of bandwidth—and hoping for the best in all other cases. Web developers made _a lot_ of dangerous assumptions about how their websites were accessed.

While it was common practice throughout the industry, graceful degradation had its critics.

### South by Southwest 2003

Way back in March of 2003, at a then-tiny conference in Austin, Texas, [Steve Champeon](http://hesketh.com/) delivered a presentation titled "[Inclusive Web Design for the Future](http://hesketh.com/publications/inclusive_web_design_for_the_future/)." 

In his presentation, Steve threw the gauntlet squarely at the feet of Web designers, declaring:

> Web design must mature and accept the developments of the past several years, abandon the exclusionary attitudes formed in the rough and tumble dotcom era, realize the coming future of a wide variety of devices and platforms, and separate semantic markup from presentation logic and behavior.

I'll repeat my favorite line from that because it's so beautifully forward-thinking:

> The coming future of a wide variety of devices and platforms.

This was 2003: four years before the release of the first iPhone and what we now consider the launch of the modern, mobile-accessible Web.

He continues:

> The goal of Web design is not merely to dazzle, but to deliver information to the widest audience possible.

Steve's approach—progressive enhancement—flipped graceful degradation on its head by focusing on providing _everyone_ with access to a website's content and layering on technology—HTML, CSS, and JavaScript—in responsible ways that enhance the experience of lower layers in the stack.

### Content-Focused Design

As [Aaron Gustafson](http://www.aaron-gustafson.com/) would later write in "[Adaptive Web Design](http://www.amazon.com/dp/098358950X/?tag=sixtwothree-20)," progressive enhancement is about "crafting experiences that serve your audience by giving them access to content without technological restrictions." This gets to the heart of progressive enhancement as originally conceived: universal access to a website's content irrespective of a person's physical abilities or technological capabilities.

On that point: It's important to keep in mind that we each experience and interact with the Web in different ways. Those differences may be subtle or pronounced, but they exist and we shouldn't forget that.

So these are the philosophical origins and underpinnings of progressive enhancement: a content-first, accessible, inclusive, layered approach to building websites.

## Progressive Enhancement in 2015

Now that we've got the history lesson behind us, let's take a look at how the Web's changed in the intervening years. Twelve years ago, we wrestled with limited bandwidth, memory-constrained devices, and display, screen size, and resolution limitations.

That… sounds awfully familiar…

_Today we wrestle with limited bandwidth, memory-constrained devices, and display, screen size, and resolution limitations._

### Ch-ch-changes

But to say nothing has changed in twelve years would, of course, be disingenuous. _Everything has changed._ It's 2015! We have iPhones. We have the Samsung Galaxy series of devices. [Xiaomi](http://www.mi.com/en/) has tremendous traction in China. We interact with high-resolution displays of all shapes and sizes. There are [Web browsers in refrigerators](https://en.wikipedia.org/wiki/Internet_refrigerator), for crying out loud. We wear [the Web on our wrist](http://www.android.com/wear/) and we carry the Web in our pocket.

We have "web apps!" I don't really know what that means or how a "web app" is different from a website, but still… We have things called "web apps!"

On the Web design front, [Ethan Marcotte](http://unstoppablerobotninja.com/) clued us in to [responsive Web design](https://en.wikipedia.org/wiki/Responsive_web_design), native [responsive images](https://responsiveimages.org/) are just around the corner, and our ability to tap in to device APIs—[geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation), [ambient light detection](https://developer.mozilla.org/en-US/docs/Web/API/DeviceLightEvent), and more—expands on a weekly basis.

Most importantly, there are more human beings than ever using more devices than ever connecting to the Web in more diverse—and often [hostile](http://trentwalton.com/2014/03/10/device-agnostic/)—conditions than ever before.

### Opportunity vs. Availability

While we now have more _opportunity_ to connect to the Internet than ever before, the _availability_ and wildly variable _quality_ of that connection is likewise greater than ever before. We'll talk more about availability in a minute, but you've no doubt experienced this opportunity versus availability challenge in your own daily life.

If you regularly take public transportation, particularly the subway or the train, then you know the pains of intermittent cellular data network connections. If you work in cafés, libraries, or other public spaces, then you know the pains of slow WiFi connections. Visit anywhere outside of major metropolitan centers and you'll quickly feel the excrutiating pain of browsing the Web on [GPRS or EDGE networks](https://en.wikipedia.org/wiki/General_Packet_Radio_Service).

Unfortunately, these challenges—the opportunity to connect versus the availability and quality of the connection—aren't unique to us Web designers. The users of our products deal with these challenges in their daily lives as well and, as much as we wish the opposite were true, we don't get to decide how, when, and where our audience interacts with our websites.

### Internet Trends

Kleiner Perkins' [2015 Internet Trends Report](http://www.slideshare.net/kleinerperkins/internet-trends-v1) just came out and, according to their research, there are 2.8 billion people online, accounting for 39% of the world's population. Contrast that with the [roughly 700 million people online in 2003](http://www.internetworldstats.com/emarketing.htm) and you'll get a sense for how much has changed. Of those 2.8 billion people online in 2014, 70% percent of them live outside of Europe and the United States.

The report also found a whopping 5.2 billion people—73% of all living humans on this planet—own mobile phones. Of those mobile phones, 40%—nearly 2.1 billion—are smartphones. Presuming each of those smartphones has _at least_ one proper Web browser and a handful of apps with in-app browsers, we quickly arrive at a practically infinite number of combinations of browsers and devices.

_The mind reels._

### A Different Approach for a Changed Web?

The question then is: Does this notion of progressive enhancement, as originally conceived in 2003, espousing a content-first, accessible, inclusive, layered approach to building websites, still make sense on today's Web?

I contend that, yes, this approach makes more sense now than ever before!

How we think and talk about this approach has evolved dramatically, though. 

Over the last twelve years, the conversation around progressive enhancement shifted and lost focus as the term itself became too closely associated with a singular technology: JavaScript. Rather than referring to a broader, layered approach to building websites, "progressive enhancement" became tantamount to "dealing with users who have JavaScript turned off."

The general thinking devolved into fallacious statements like:

- "We can't do cool things if we have to do progressive enhancement!"
- "Progressive enhancement means we have to waste time and money supporting old versions of Internet Explorer!"
- "No one in our target audience turns off JavaScript!"

The waters were further muddied when we rekindled our torrid love affair with JavaScript. The quick rise—and often just as quick fall—of libraries and frameworks like [Prototype](http://prototypejs.org/), [jQuery](http://jquery.com/), [Backbone](http://backbonejs.org/), [Angular](https://angularjs.org/), and [React](https://facebook.github.io/react/) have brought with them a ton of new ideas and opportunities. What they've also brought with them—and I believe unintentionally so—are misconceptions about the nature of the Web and actual users' experiences with the Web.

I mentioned earlier the dangerous assumptions Web designers made using the graceful degradation methodology: coding for a particular browser or expecting a certain amount of bandwidth. While not the fault of any one particular framework, many of these same assumptions are creeping their way back into our work.

### An Evolved Definition

I'd like for us to reframe the conversation around progressive enhancement; to _take it back_ as it were. The timing of CSS Summit is fortuitous as it closely follows this year's [Edge Conference](https://edgeconf.com/2015-london) in London, held at the end of last month. [Lyza Danger Gardner](http://www.lyza.com/) moderated a panel discussion on progressive enhancement and out of that conversation spun a number of blog posts and tweets from folks sharing their perspectives on the subject. It's been a thought-provoking ten days that's reshaped how I think about progressive enhancement.

While at its core, progressive enhancement remains a content-first, accessible, inclusive, layered approach to building websites, a newer definition is emerging. Progressive enhancement in 2015 has evolved to mean:

_Making available to all users a baseline experience with access to core content and functionality by reducing assumption._

Let's dissect that.

#### Availability

Stuart Langridge brought [availability](http://www.kryogenix.org/days/2015/06/28/availability/) to the conversation and further demonstrated his point with some [smiling diagrams](http://www.kryogenix.org/code/browser/why-availability/). Stuart writes:

> I'm going to be talking about availability. About reach. About my web apps being for everyone even when the universe tries to get in the way.

And rest assured, the universe will get in the way. Websites can fail for many reasons: dodgy WiFi, a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) goes down for ten seconds, an asset server crashes. These are real things that happen every day on the Web despite our best efforts. Our awareness of this reality should inform our design and development process.

Pertaining to availability, here are a few questions to keep in mind as you design and build your website:

- "Is my website's core content and functionality available in the initial HTML sent from the server to the user's browser?"
- "Would someone be able to accomplish their tasks if one or more of my website's components—images, CSS, or JavaScript—failed to load?"
- "What advanced technologies (e.g. [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)) could I take advantage of to account for unforeseen circumstances?"

#### Baselines

Progressive enhancement's foundation rests on the baseline experience. But what is that baseline experience?

We often couch baseline experiences in terms of browsers and versions: "This site will work in Internet Explorer 8 and above; the latest versions of Chrome, Firefox, and Safari; and on iPhone and iPad." While this kind of thinking lends itself nicely to QA checklists, it fails to acknowledge the real-world diversity of device and browser combinations.

Instead of thinking in terms of browsers, [Jeremy Keith defines a baseline experience](https://adactio.com/journal/9206) as "the minimum required technology to allow a user to accomplish the _core_ task." He specifically differentiates the _core_ task from nice-to-haves that rely on more sophisticated technology.

There are three technologies required to deliver the absolute bare minimum website: a running Web server, HTTP, and HTML. A server, a protocol, and a text file containing structured content. That's it!

You may determine that the baseline for your project requires additional technology, but for many, many, many projects, these three basic, reliable tools will do the job.

The question to keep in mind here is: "What are the _most basic_ technologies required to deliver a functional website?"

#### Core Functionality

We established earlier that progressive enhancement is a content-first approach to design. Given the participatory nature of today's Web, we must expand that content-first approach to include user actions.

Instead of determining a website's core content and ensuring its delivered in an accessible way, we must ensure that a website's core content _and_ functionality are delivered accessibly. This is what Jeremy refers to as the _core task_. The nature of that core task will vary depending on the purpose of your website:

- Reading a news article or blog post.
- Looking up critical health care information.
- Managing finances or applying for a loan.

Identify those core tasks and ensure that users can quickly and efficiently complete them with and without enhancements like images, CSS, and JavaScript.

The key question to think about here is an obvious one: "For any given page or flow on my website, what is the core task?"

#### Reducing Assumptions

I've mentioned assumptions several times this morning, mostly in a negative context. I want to be clear, though, that not all assumptions are bad or evil or wrong, or that we aren't allowed to make assumptions in our work. Practicality—particularly in the agency setting—requires us to make assumptions and tradeoffs every day; it's built into the nature of our work.

We can—and should—work tirelessly to eliminate assumption wherever possible, though. [Tim Kadlec](http://timkadlec.com/), in his recent post "[Thriving in Unpredictability](http://timkadlec.com/2015/06/thriving-in-unpredictability/)," expertly writes:

> Assumptions will naturally be made at some point. But I want to make as few of those assumptions as possible. Because every assumption I make introduces fragility. Every assumption introduces another way that my site can break.

Every assumption we build into our work introduces fragility and the possibility of something breaking. Tim's post is a brilliant miniature manifesto in which he divests himself of control over devices, browsers, contexts, the network, and more.

In a lot of ways, "Thriving in Unpredictability" reminds me of John Allsopp's "[A Dao of Web Design](http://alistapart.com/article/dao)," published fifteen years ago on A List Apart. "Dao" is a must-read piece of Web design literature full of lessons still applicable to our work today. In it, John rightly insists that we relinquish control and "accept the ebb and flow of things."

By reducing assumption, we accept the unpredictability of the Web; the "ebb and flow of things." Constantly ask yourself, "What assumptions am I making and what can be done to reduce those assumptions?"

### Ch-ch-changes?

Progressive enhancement's twelve years old. "A Dao of Web Design" is _fifteen_ years old. And yet, the lessons we can take from each remain relevant today. So has anything _really_ changed?

Let's take another look at the modernized definition of progressive enhancement:

_Making available to all users a baseline experience with access to core content and functionality by reducing assumption._

That feels pretty good, right?

Nowhere have we said that, if you build a progressively-enhanced website, you can't take advantage of the latest-and-greatest browser features. _Quite the opposite, in fact._ Applying progressive enhancement affords you the opportunity to utilize new, cutting-edge browser features in a way that ensures users without those capabilities aren't left out in the cold. When you start with an accessible baseline experience, the sky's the limit!

A colleague of mine recently declared: "In 2015, I don’t think JavaScript is an enhancement—it's the baseline."

I reject that notion, though. Based on everything we've looked at so far—devices, browsers, networks, contexts—I can't in good conscience accept a statement like that. Particularly when building progressively-enhanced websites—and yes, even "web apps"—is perfectly achievable with a little bit of planning, know-how, and elbow grease.

## Applying Progressive Enhancement

Earlier, I noted how, in conversations about progressive enhancement, the technique is often misrepresented as only being concerned with the behavior layer of the front-end Web stack. While JavaScript is an important part of building progressively-enhanced websites, it's certainly not the only layer to benefit from the approach.

Let's take a look at some examples of progressive enhancement applied to HTML, CSS, and JavaScript.

### HTML

It's surprisingly easy to apply the principles of progressive enhancement to our markup. The most obvious enhancement? Take advantage of [new HTML5 elements](http://diveintohtml5.info/semantics.html#new-elements)!

#### New HTML5 Elements

For example, here we have a very basic structure for a blog post:

```html
<div class="blog-post">
    <div class="blog-post-header">
        <h1>My Sweet Blog Post</h1>
    </div>
    
    <p>…</p>
</div>
```

With some small changes, we can provide additional semantics to newer browsers and assistive technologies using HTML5's [`<article>`](http://html5doctor.com/the-article-element/) and [`<header>`](http://html5doctor.com/the-header-element/) elements.

```html
<article class="blog-post">
    <header class="blog-post-header">
        <h1>My Sweet Blog Post</h1>
    </header>
    
    <p>…</p>
</article>
```

Nice and easy, right?

#### ARIA Roles

I've mentioned accessibility throughout this presentation so far and, as you might've guess by now, progressive enhancement and accessibility go hand-in-hand. In our markup, we can improve our website's accessibility by adding [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) landmark roles to particular components with the `role` attribute.

There are only a handful of [ARIA landmark roles](http://www.w3.org/TR/wai-aria/roles#landmark_roles) and they're easily applied to our markup. Let's take a look at a basic page structure:

```html
<header>
    <h1>My Website’s Header</h1>
</header>

<main>
    <p>My website’s content!</p>
</main>

<footer>
    <p>Send me a tweet, I’m @jgarber!</p>
</footer>
```

In this example, we have a document with a header, main content area, and a footer. As you've noticed, I'm using new HTML5 sectioning elements. Adding landmark roles would look like:

```html
<header role="banner">
    <h1>My Website’s Header</h1>
</header>

<main role="main">
    <p>My website’s content!</p>
</main>

<footer role="contentinfo">
    <p>Send me a tweet, I’m @jgarber!</p>
</footer>
```

I've added three roles: [`banner`](http://www.w3.org/TR/wai-aria/roles#banner), [`main`](http://www.w3.org/TR/wai-aria/roles#main), and [`contentinfo`](http://www.w3.org/TR/wai-aria/roles#contentinfo). The `banner` role defines a region of site-specific content, `main` denotes the primary content of a document, and `contentinfo`, as its name implies, surrounds a block of content containing information about the document.

Notice the duplication on the main content container:

```html
<main role="main">
```

[There are some rules](http://html5doctor.com/on-html-belts-and-aria-braces/) around when you should and shouldn't use ARIA roles alongside HTML elements. For the time being, though, I _think_ it's worth using both HTML5's structural elements _and_ relevant ARIA roles as not all browsers and assistive technologies recognize newer semantics.

ARIA roles are just the tip of the accessibility iceberg, though. How we can better build accessibility into our markup is a much, much larger discussion and one deserving of more time than I have allotted here today.

#### microformats

This is the last markup-centric enhancement I'll cover this morning and it's a personal favorite. [microformats](http://microformats.org/) are community-developed patterns for marking up a variety of common data structures: [people](http://microformats.org/wiki/h-card), [locations](http://microformats.org/wiki/h-adr), [events](http://microformats.org/wiki/h-event), [blog posts](http://microformats.org/wiki/h-entry), and [much more](http://microformats.org/wiki/microformats2).

They're an excellent way to quickly add enhanced semantics to your website's markup, exposing additional structured content to browsers by way of [browser extensions, plugins, and bookmarklets](http://microformats.org/wiki/browsers).

Implementing microformats is a cinch, too. Let's use the blog post markup example from earlier:

```html
<article class="blog-post">
    <header class="blog-post-header">
        <h1>My Sweet Blog Post</h1>
    </header>
    
    <p>…</p>
</article>
```

There's an established microformat for marking up blog posts known as [h-entry](http://microformats.org/wiki/h-entry), so we can update our markup accordingly:

```html
<article class="blog-post h-entry">
    <header class="blog-post-header">
        <h1 class="p-name">My Sweet Blog Post</h1>
    </header>
    
    <div class="e-content">
        <p>…</p>
    </div>
</article>
```

In this example, we've added the root class value `h-entry` to the `<article>` element, indicating that the content contained within is a discrete, syndicatable piece of content. The `p-name` class value on the heading identifies the entry's title and an `e-content` class value wraps the post's full content.

By [design](http://microformats.org/wiki/principles), microformats utilize the `class` attribute to declare properties. This `class`-based implementation—reusing existing building blocks from established standards—sets microformats apart from other, more complicated, Semantic Web technologies like [Microdata](https://en.wikipedia.org/wiki/Microdata_(HTML)) and [RDFa](https://en.wikipedia.org/wiki/RDFa).

There's plenty more to the [h-entry spec](http://microformats.org/wiki/h-entry) than what I've shown here—structures for adding authors, tags, and publication date—so I encourage you to give the documentation a look.

### CSS

As we move up the front-end stack to the presentation layer, we're met with ample opportunity to apply progressive enhancement. And, like our HTML examples, these are generally easier than you'd think.

#### Progressively-Enhanced Aesthetics

Starting with an obvious example, we can use newer CSS features in ways that enhance our interfaces without adversely impacting users. For instance, when applying [CSS gradients](https://css-tricks.com/css3-gradients/) to elements, make sure to include a generic background color:

```css
.fancy-button {
    background-color: #c00;
    background-image: linear-gradient(#f00, #a00);
    color: #fff;
}
```

By first setting a background color and _then_ declaring a gradient as a background image, we're providing modern browsers with an aesthetically-pleasing gradient while also supplying a solid background color to browsers lacking support for CSS-generated gradients. We've also made our design more resilient by ensuring that the button's white text will never accidentally appear on a white background, rendering the button inaccessible.

Progressive enhancement and accessibility: _two great tastes that taste great together_. The [Reese's Peanut Butter Cups](https://en.wikipedia.org/wiki/Reese%27s_Peanut_Butter_Cups) of the Web.

You can apply this same technique to your use of other aesthetic properties: `border-radius`, [RGBA colors with fallbacks](https://css-tricks.com/rgba-browser-support/), and [multiple background images](http://www.css3.info/preview/multiple-backgrounds/).

#### Media Queries

I've mentioned already this notion of starting small: setting a baseline and enhancing upward from there. [Bryan Rieger](https://bryanrieger.com/), in his presentation "[Rethinking the Mobile Web](http://www.slideshare.net/bryanrieger/rethinking-the-mobile-web-by-yiibu)," noted that:

> The absence of support for @media queries is in fact the first @media query.

If we take that thinking, combine it with a [mobile first](http://abookapart.com/products/mobile-first) structuring of our CSS, we can apply progressive enhancement by using `min-width`-based media queries. Each `min-width`-based media query would be, in effect, an enhancement of the layout based on increasing viewport real estate.

It's important to note here that this _only_ has to do with layout and not browser or device capabilities. While width- and height-based media queries are the easiest to work with, there are [a number of features](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) that we can progressively hook in to: [color](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries#color), [aspect ratio](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries#aspect-ratio), and [orientation](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries#orientation), for instance. As with everything progressive enhancement-related, if you start from a solid foundation, you're free to enhance upward as much as possible.

#### Advanced Layout with Flexbox

I'll get this out of the way: [Flexbox](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes) is awesome and terrifying. [Chris](http://www.lemondesign.co/) has a presentation on the subject later today, so I'll keep this example pretty high-level and introductory.

While browser support for flexbox is [surprisingly good](http://caniuse.com/#search=flexbox), you may consider treating its use as an enhancement. I've created [a basic example](http://codepen.io/jgarber/pen/pJpdYx) showing how you can easily reorder content using but a tiny fraction of flexbox's power.

As you can see if you pull up [the demo on Codepen](http://codepen.io/jgarber/pen/pJpdYx), there's an advertisement for [a _fantastic_ book about HTML and CSS](http://www.amazon.com/dp/1430238763/?tag=sixtwothree-20)—one which I encourage you all to rush out and purchase—at the bottom of the page. At viewports wider than 900 pixels, the advertisement is moved to the top of the page using a smattering of flexbox-related properties:

```css
@media (min-width: 50em) {
    .main {
        display: flex;
        flex-direction: column;
    }

    .intro,
    .social {
        order: 1;
    }

    .advert {
        order: 0;
    }
}
```

It's a silly example and a non-critical layout change, but it succinctly demonstrates how a small application of a tool like flexbox can enhance an existing layout.

### JavaScript

Here it is, the elephant in the room: _JavaScript_. The final layer in the front-end Web technology stack.

I want you to know that I love JavaScript. I don't always love the things we do with it, and while it's a hot mess of a language, it's _our_ hot mess of a language.

There are so many great progressively-enhanced JavaScript examples out there. I thought a lot about what to show you here today and narrowed it down to a couple of techniques and a pretty cool example. Let's start with the techniques.

#### Object Detection

Given the utter insanity of [the browser user agent string](http://useragentstring.com/pages/All/) and the futility of attempting to match against it, you should lean heavily on [object detection](http://www.quirksmode.org/js/support.html) to determine a browser's support for JavaScript features. While testing for features varies, at a basic level you'll wrap your code in a conditional like so:

```js
if ('addEventListener' in window) {
    // Your code using addEventListener goes here…
}
```

The code within this conditional _only_ executes in browsers that respond affirmatively to the question: "Does your `window` object include a method named [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)?" This particular object detection is often used to keep versions of Internet Explorer prior to 9 from executing the JavaScript within.

#### Cutting the Mustard

The BBC, as part of their [responsive news redesign project](http://responsivenews.co.uk/), took object detection a step further, combining several key feature detections to put into action their browser support matrix. They dubbed their technique "[Cutting the Mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard)."

```js
if ('querySelector' in document
    && 'localStorage' in window
    && 'addEventListener' in window) {
    // Bootstrap the JavaScript application…
}
```

The team at the BBC grouped browsers into "HTML4 browsers" and "HTML5 browsers" and used these object detections to filter browsers based on their capabilities rather than how browsers identify themselves. "HTML4 browsers" receive a perfectly usable website while "HTML5 browsers" run the full-featured, progressively-enhanced _experience_.

#### Working with `<datalist>`

I've borrowed this final example from a [2011 blog post by Jeremy Keith](https://adactio.com/journal/4272) and more recently shared by [Aaron Gustafson](http://www.aaron-gustafson.com/) in his presentation "[Falling in Love with Forms](http://www.slideshare.net/AaronGustafson/falling-in-love-with-forms-microsoft-edge-web-summit-2015)." I've made a couple of enhancements and posted [a demo on Codepen](http://codepen.io/jgarber/pen/OVzzJz).

The [`<datalist>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) behaves similarly to the familiar `<select>` form control, accepting as children a series of `<option>` elements:

```html
<label for="state" id="state-label">State</label>
<datalist id="states">
    <option value="Alabama">Alabama</option> 
    <option value="Alaska">Alaska</option> 
    <option value="Arizona">Arizona</option> 
    <option value="Arkansas">Arkansas</option>
</datalist>
<input type="text" id="state" name="state" list="states">
```

When associated with another `<input>` element (via the `list` attribute), `<datalist>` acts as a browser-native auto-complete field. No JavaScript required!

Jeremy took his demo a step further, wrapping those `<option>` elements in a `<select>`:

```html
<label for="state" id="state-label">State</label>
<datalist id="states">
    <select>
        <option value="Alabama">Alabama</option> 
        <option value="Alaska">Alaska</option> 
        <option value="Arizona">Arizona</option> 
        <option value="Arkansas">Arkansas</option>
    </select>
</datalist>
<input type="text" id="state" name="state" list="states">
```

Browsers that are `<datalist>`-aware ignore any content _other than_ `<option>` elements. Browsers lacking support for `<datalist>` ignore the containing element and render a standard `<select>` input.

This works thanks to the manner in which browsers parse HTML documents. Rather than grinding to a halt and stopping page rendering, Web browsers simply ignore elements they don't recognize and carry on rendering. The essence of progressive enhancement is baked into the design of HTML!

Jumping ahead, the completed example's markup looks like:

```html
<form>
    <label for="state" id="state-label">State</label>
    <datalist id="states">
        <select name="state" id="state-select" aria-labelledby="state-label">
            <option value="Alabama">Alabama</option> 
            <option value="Alaska">Alaska</option> 
            <option value="Arizona">Arizona</option> 
            <option value="Arkansas">Arkansas</option>
        </select>

        <p id="other-label">If other, please specify:</p>
    </datalist>
    <input type="text" id="state" name="state" list="states">
</form>
```

In addition to the aforementioned `<select>` element, we've nested an explanatory paragraph within the `<datalist>`. Like the `<select>`, this element will _only_ show in browsers lacking native `<datalist>` support.

This is a pretty solid pattern, but it irked me that, in browsers lacking support for `<datalist>`, the `<label>` wasn't associated with the `<select>` and a paragraph acted as the text input's label.

A little bit of JavaScript solved the problem:

```js
if (!('list' in document.createElement('input'))) {
    var stateLabel = document.getElementById('state-label'),
        otherLabel = document.getElementById('other-label');
    
    stateLabel.setAttribute('for', 'state-select');
    otherLabel.innerHTML = '<label for="state">' + otherLabel.innerText + '</label>';
}
```

With this code, we've associated the "State" label with the `<select>` element and swapped out the explanatory paragraph with a properly-associated `<label>` element. All it took was a bit of object detection and some simple DOM manipulation.

## In Conclusion…

We've covered a lot of ground this morning. We've looked back at the history of progressive enhancement, evaluated its relevance in our modern design process, and walked through useful applications of the technique in all layers of the front-end Web stack.

I'll leave you with a final thought: Much like the Web, progressive enhancement exists on a [continuum](https://adactio.com/journal/6692). It's not a binary decision: "You either build with progressive enhancement or you don't." It's entirely possible to introduce progressive enhancement into your design process in small ways at first. Remember: _define a baseline and enhance from there_.

Christopher and Ari have put together a tremendous lineup here at CSS Summit and it's been an honor kicking things off with you this morning. Over the next three days, as you learn about some awesome new design and development tools and techniques—SVG, Sass, and Angular—think about how you can best apply those tools and techniques in a [progressive](https://medium.com/@jjaybrown98/it-s-time-to-progress-702e0779df3a), [resilient](https://twitter.com/scottjehl/status/615580565404839936), [future-friendly](http://futurefriendlyweb.com/) fashion.

Thank you!