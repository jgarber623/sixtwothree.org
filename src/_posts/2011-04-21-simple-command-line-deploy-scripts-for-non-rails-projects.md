---
category: blog
date: 2011-04-21 11:30:00 -0500
excerpt: I've been working on a lot of non-Rails projects lately. At some point during the buildout process, I start spending a fair amount of time uploading my changes to one of our testing servers. I needed a better system. So I wrote one.
layout: post
tags: development
title: Simple Command Line Deploy Scripts for Non-Rails Projects
---

_This post originally appeared on [Viget's Extend blog](http://viget.com/extend/simple-command-line-deploy-scripts-for-non-rails-projects)._

I've been working on a lot of non-Rails projects lately. At some point during the buildout process, I start spending a fair amount of time uploading my changes to one of our testing servers. I love [Panic's Transmit FTP program](http://www.panic.com/transmit) to death, but repeatedly FTPing files gets dull after a while.

I needed a better system. So I wrote one.

**Caveat:** The following is one of many means by which you can achieve the same end. I'm not touting this as _the best solution_. I'm touting it as the one that works best for me.

The system I devised utilizes a single function and a folder full of project-specific shell scripts. To deploy a particular project, you invoke the function on the command line, passing it the name of the project—which corresponds to the name of the shell script—as an argument.


## The Function

This part is pretty straight forward. In your `.bashrc`, `.profile`, or wherever works for your environment, add:

	function deploy() {
	    sh "/path/to/deploy/scripts/folder/$1.sh"
	}

Throw `. ~/.profile` into your console to make sure that the new function is available. Next up…


## The Scripts Folder

In `/path/to/deploy/scripts/folder`, create as many `projectname.sh` files as you want. The contents of these files can vary wildly depending on your setup and what you're pushing to the server.

A basic example, using `scp`:

	#!/bin/bash
	scp -pr ~/path/to/local/project/folder/* user@server:/path/to/remote/project/folder;
	echo "Success! Your project was deployed without a hitch.";

A more complicated example, using `ssh` and `git`:

	#!/bin/bash
	ssh user@server "\
	cd /path/to/remote/project/folder/;\
	git pull;
	exit;";
	echo "Success! Your project was deployed without a hitch.";

Save one of the above as something like projectname.sh in your deploy folder, change the appropriate server/path/etc., and you'll be ready for the next step.


## Deploying

To deploy a project, simply invoke the following on the command line:

	deploy projectname

How easy is that, right?

There's no real error handling in the above code, so if something goes wrong, you'll see the problems in your console. The individual deploy scripts can get as complicated as you want them to be, but mine tend to be pretty simple.


## Why not use Capistrano?

That's an excellent question! The short answer is: I haven't done much work with [Capistrano](https://github.com/capistrano/capistrano) and it was quicker (for me) to put together the solution outlined above.

Hopefully you find this script as useful as I do. If you've got suggestions on improvements or alternative solutions, I'd love to hear about them in the comments!