---
date: 2007-06-03 22:48:00 -05:00
excerpt: Add hCards to your RoundCube Webmail installation.
layout: post
tags: webdesign
title: Adding microformats to RoundCube Webmail
---

[RoundCube Webmail](http://roundcube.net/) is “a browser-based multilingual IMAP client with an application-like user interface.” Basically, it’s a really slick webmail app. [Dreamhost](http://www.dreamhost.com/) provides users with a dreadfully basic webmail application (SquirrelMail) which is a real pain to use. RoundCube is free (and pretty neat looking), so I decided to give it a shot.

After some initial hassle getting the configuration sorted out, the app runs pretty well and is much more intuitive and easier to use than SquirrelMail. It’s not as full-fledged an application as say, Outlook Web Access, but it’s going to make checking my mail from other machines a lot less painful.

Anyway, RoundCube has a simple enough address book, really only storing name and email. The essentials. What boggled my mind, though, was its lack of [microformats](http://microformats.org/). [hCard](http://microformats.org/wiki/hcard) _was designed_ for just this sort of application. A [quick Google search](http://www.google.com/search?q=microformat+site%3Aroundcube.net&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:en-US:official&client=firefox-a) of their site yields no mention of microformats.

Being the <abbr title="microformat">µF</abbr> geek that I am, I took it upon myself to inject some hCard goodness into the app. It took a good deal of hunting, but here’s how I did it:

In `~/program/steps/addressbook/show.inc` (line 51):

	'<a href="#compose" onclick="%s.command(\'compose\', \'%s\')" title="%s" class="email">%s</a>',

In `~/skins/default/templates/showcontact.html` (lines 8 & 10):

	<body class="iframe vcard">

	<div id="contact-title" class="boxtitle fn">
	    <roundcube :object name="contactdetails" part="name" />
	</div>

That should do it! The only issue I’m seeing is that [Tails](https://addons.mozilla.org/en-US/firefox/addon/2240) and [Operator](https://addons.mozilla.org/en-US/firefox/addon/4106) have some trouble finding the hCards. RoundCube is using a mix of JavaScript and an iframe (_shudder_) to display contacts, so my best guess is this is what’s causing the confusion. I have noticed, though, that if you switch to another tab in Firefox and then switch back to RoundCube, Operator can find the hCard.

There you have it, you’ve added hCards to your RoundCube install. Next step is to get in touch with the RoundCube folks and get them to add this out-of-the-box.

**Update (4 June 2007):** In Operator 0.7 (the current release), if you check “Observe all page changes,” Operator will recognize the hCards without the need to switch tabs. Note, though, that this may effect performance. Talking with [Mike Kaply](http://www.kaply.com/weblog/), it looks like the next version of Operator improves performance with iframes, so everything should be good to go.