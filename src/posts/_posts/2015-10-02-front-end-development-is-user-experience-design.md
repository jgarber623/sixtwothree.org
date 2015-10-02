---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10153048402847343
  - title: Twitter
    url: https://twitter.com/jgarber/status/649957126987771904
date: 2015-10-02 10:29:37 -0400
excerpt: It may not be in your title, but it’s definitely part of your job.
tags: design development ux
title: Front-End Development is User Experience Design
---

I was speaking yesterday with a colleague of mine tasked with auditing a website. She, a user experience designer, is responsible for a great many things: facilitating client kick-off exercises, conducting user interviews and research, assessing information architecture, and designing the user interface with wireframing tools like [OmniGraffle](https://www.omnigroup.com/omnigraffle/). Instinctually, she started the audit by assessing the website's content structure, information organization on the page, and the overall visual design.

Without putting much thought into it, I suggested she open up her browser's Web Inspector and get a feel for how the website was built. Does the website's markup appear to be concise? Are there an over-abundance of images? Are stylesheets and JavaScript files minified and [gzipped](https://en.wikipedia.org/wiki/Gzip)? There's a wealth of information valuable to user experience designers buried amongst the seemingly-arcane HTTP status codes, intimidating `console.log()` messages, and curly braces.

I didn't think much of the conversation as I went about the rest of my work day. It wasn't until this morning that I became consciously aware of what I was getting at: _Front-end development is user experience design._ More specifically, front-end development is one piece of the user experience process.

As front-end developers, we're responsible for building the user experience. We take the information architecture, the wireframes, and the visual design, run it through the blender of HTML, CSS, and JavaScript, and deliver a functioning website. Every decision we make during the buildout phase affects how quickly users can accomplish their tasks. Thinking of using a CSS framework like [Bootstrap](http://getbootstrap.com/)? What about including a JavaScript library like [Modernizr](https://modernizr.com/)? What's your team's process for optimizing images? The answers to these and a thousand similar questions carry a cost and should be carefully vetted before inclusion in a website's codebase.

Every byte we ship over the wire matters. Clearly, a slow website is a bad user experience. So too is an inaccessible website. Every single line of code we write affects the user experience. Performance and accessibility aren't _solely_ the front-end developer's responsibility, but the onus is on us to ensure that the code we write _improves_ the user's experience.

To be clear, I'm not advocating we abandon useful tools like Bootstrap, Modernizr, or any of the other great libraries and frameworks we have at our disposal simply because they add weight to our websites. I _am_ encouraging front-end developers to keep the user's experience front-of-mind throughout the build process. As we're tasked with writing the code delivered to user's browsers, it's our responsibility to act as stewards of the user experience.