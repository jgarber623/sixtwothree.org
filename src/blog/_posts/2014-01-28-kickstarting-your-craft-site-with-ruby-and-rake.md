---
date: 2014-01-28 10:15:00 -0500
excerpt: craft-master is a set of tools written in Ruby using Rake tasks for common Craft-related installation tasks.
tags: craft ruby
title: Kickstarting your Craft project with Ruby and Rake
---

_This post originally appeared on [Viget's Extend blog](http://viget.com/extend/kickstarting-your-craft-project-with-ruby-and-rake)._

It's no secret that we're [big](http://viget.com/extend/getting-crafty) [fans](http://viget.com/extend/reroute-plugin-for-craft) of [Craft](http://buildwithcraft.com/), the new CMS by Pixel & Tonic. While ExpressionEngine remains our go-to CMS for most client work, we've been spending an increasing amount of time experimenting with Craft.

As we get further into Craft development, we're asking ourselves one big question: "How easily can we get a new project up and running?" With ExpressionEngine, we've built up our toolset and bootstrapping scripts over time to the point that spinning up a new EE project is a straightforward—and quick—process. We haven't had something like that for Craft.

_Until now._ #epicforeshadowing

Over the last few weeks, I spent some free time playing around with Craft. While I won't expound on the merits of choosing Craft for your project (I'll leave that to the experts), I will say that the app is beautifully designed and the installation docs are very thorough and well-written. Still, there are a bunch of setup tasks that would benefit from automation.


## Introducing craft-master

[craft-master](https://github.com/vigetlabs/craft-master) is a set of tools written in Ruby using Rake tasks for common Craft-related installation tasks. By issuing a single command, `rake install`, you'll be guided through the process of installing and configuring Craft.

These steps include:

* Downloading and installing the latest Craft core code base.
* Configuring local database settings.
* Creating a local MySQL database.
* Setting up a virtual host for the local web server.

At each step, craft-master asks a series of basic questions, gathering the necessary information to complete that portion of Craft's setup. _Much_ easier than doing all that work by hand.


## Why Ruby?

Craft is written in PHP so wouldn't it have made sense to write a set of tools in PHP? That's an excellent question!

The answer is entirely practical. I'm much more comfortable writing Ruby and Rake tasks than I am writing PHP scripts. While far from being a Ruby master, I've got a decent grasp on the Ruby language and appreciate the organizational capabilities of namespaced Rake tasks. Additionally, using ERB for templating and YAML for configuration files is dead simple in Ruby.

Additionally, craft-master uses a set of tools (Ruby, Rake, and Bundler) that are already a part of our tool chain here at Viget. If you use front-end development tools like Sass and Compass for pre-processing stylesheets or Capistrano for deployment, craft-master lays the groundwork for including those tools in your project.

Your needs and opinions may vary, of course, but for me, building craft-master in Ruby was the obvious choice.


## Free as in Beer

Since Craft's core code base is freely available , we've open sourced craft-master with the hopes that you'll find it as useful as we do. Additionally, we're looking to see what ideas you bring to the table. There are already a couple of [open Issues](https://github.com/vigetlabs/craft-master/issues?state=open) on GitHub that we hope to tackle soon.

So that's [craft-master](https://github.com/vigetlabs/craft-master)! What do you think? Let us know if you give it a try and if it suits your needs.