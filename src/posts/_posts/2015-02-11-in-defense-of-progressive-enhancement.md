---
date: 2015-02-11 10:27:44 -0500
excerpt: Furthering the conversation after receiving some critical feedback on my previous post.
tags: development progressiveenhancement
title: In Defense of Progressive Enhancement
---

Yesterday's [experience layers post](/posts/designing-experience-layers)—cross-published to [Viget's Inspire blog](http://viget.com/inspire/designing-experience-layers)—was overwhelmingly well-received by friends and colleagues (Mom said I sounded _real smart!_). It wasn't without its detractors, though.

Over on Inspire, my supervisor Doug took issue with several of my key points. Doug's a brilliant web designer and a friend, but on the matter of [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_Enhancement), he and I couldn't be farther apart. I'm grateful he took the time to comment, giving me an opportunity to revisit my original post's thesis.

[Doug's lengthy comment](http://viget.com/inspire/designing-experience-layers#comment-1847156038) covers quite a bit of ground and I'd like to address several of his remarks. His main gripe is my use of [Vine's broken video page](https://twitter.com/jgarber/status/564855344934170625) as a foundation for a conversation about progressive enhancement.

Doug's right that my [Vine](https://vine.co/) example is cheeky:

> Credit card numbers weren't lost, data wasn't destroyed, users weren't endangered.

But what if the example used _were_ a bank? Or an online store? Or a service providing health care information to the disadvantaged?

Vine merely provided a basic example of a larger issue. Websites _should not_ rely on JavaScript for delivering primary content, even if that content is a goofy six-second video.

> I bet Vine's engineers would consider a little JS-related downtime a reasonable tradeoff for the advantages of building JS-first.

I've [previously](/posts/five-easy-ways-to-be-a-better-web-professional) quoted [Jeremy Keith](https://adactio.com/) on [this topic](https://adactio.com/journal/8252) and I'll do so again:

> I feel very strongly that the needs of the end user should trump the needs of the developer in almost all instances.

Without knowing the particulars of Vine's development team, I feel safe hypothesizing that they chose to rely on JavaScript for displaying primary page content as a convenience to themselves at the expense of their users. I'd be interested in learning more about their decision-making process.

> [Vine's] failure _was_ preventable — even a single integration test should catch a catastrophic bug like this.

True! Thorough test coverage can catch mistakes like the one we saw on Vine's video page. A website serving primary content in HTML and treating JavaScript as an enhancement, though, requires less testing and is less prone to this sort of catastrophic failure.

> In 2015, I don't think JavaScript is an enhancement — it's the baseline.

I couldn't disagree more. In 2015, the landscape has never been more hostile. The [proliferation of devices](https://www.flickr.com/photos/brad_frost/7387724364), the [unreliability of mobile data networks](http://calendar.perfplanet.com/2012/latency-in-mobile-networks-the-missing-link/), and [the hostile nature of browsers](http://trentwalton.com/2014/03/10/device-agnostic/) demand that we build robust and reliable websites. Treating JavaScript as a baseline for displaying a website's core content doesn't square with reality.

I'm not advocating that we abandon JavaScript; far from it. As [Christian Heilmann remarked](https://twitter.com/codepo8/status/563635832956145664), modern websites "all become better when enhanced with JS." JavaScript plays an important role in Web development, but it should always be treated as an enhancement.

(Also: check out Christian's [The "Web Application" Myth](https://medium.com/@codepo8/the-web-application-myth-69c6b1506515) for more on this topic.)

> Users have it turned on.

[Jake Archibald pointed out](http://jakearchibald.com/2013/progressive-enhancement-still-important/) that progressive enhancement is not about whether or not a user has JavaScript enabled. Jake's post is a favorite of mine and worth a read.

> It runs fast.

True again! However, it's important to remember that executing JavaScript consumes a [great deal of energy](http://fluentconf.com/fluent2013/public/schedule/detail/28003) on mobile devices. I'd much rather build websites that don't place significant energy burdens on users' devices.

---

Regarding the Vine example, I took a look at [the page's source](view-source:https://vine.co/v/OUvAvAYQm6I) and was ~~heartened~~ dismayed to find that the content _is in the markup_:

```html
<video src="https://v.cdn.vine.co/r/videos/65B585E5BE1176418784886628352_2265f312907.5.1.14774757561628941091.mp4?versionId=zAjo2cpXw7AocL9pyw_0uTWOZkkPZCXJ"></video>
```

Why, then, didn't the content display even with the JavaScript error? Glad you asked. The entire page is wrapped in this little bit of gold:

```html
<div style="display: none">
```

---

I remain unconvinced that abandoning progressive enhancement in favor of JavaScript-first development is better for users or is the direction the Web is inevitably heading. It's our responsibility to do right by the billions already online and [the next billion](http://time.com/3589909/internet-next-billion-mobile/) preparing to come online. We can achieve this by designing robust, resilient, layered experiences using techniques like progressive enhancement.
