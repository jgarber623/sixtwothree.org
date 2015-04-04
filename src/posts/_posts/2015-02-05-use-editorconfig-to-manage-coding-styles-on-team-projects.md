---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10152571616312343
  - title: Twitter
    url: https://twitter.com/jgarber/status/563364596980121601
  - title: Viget Extend
    url: http://viget.com/extend/use-editorconfig-to-manage-coding-styles-on-team-projects
date: 2015-02-05 10:44:40 -0500
excerpt: In this post, I show how you can use EditorConfig to declare your project’s coding styles and why that’s useful on team projects.
tags:
  - development
  - editorconfig
  - programming
title: Use EditorConfig to Manage Coding Styles on Team Projects
---

Perhaps you're familiar with Phil Karlton's thoughts on [hard problems](http://martinfowler.com/bliki/TwoHardThings.html):

> There are only two hard things in Computer Science: cache invalidation and naming things.

If that's the case, then agreeing on coding style is a close third. Hard tabs or soft tabs? End-of-file newlines or not? More often than not, these decisions come down to personal preference. I have my preference, you have yours, and nary the twain shall meet. The table is set for _serious disagreement_.

Luckily, there's a simple utility that can resolve some of these problems on team projects that use a variety of file formats and coding styles.

## EditorConfig to the Rescue!

[EditorConfig](http://editorconfig.org/) is a file format for defining a project's coding styles. In its most basic form, an EditorConfig is a file (`.editorconfig`) existing in a project's root whose contents sets coding styles for the kinds of files in your project. [Plugins for a variety of editors and IDEs](http://editorconfig.org/#download) are available for download.

With the appropriate plugin installed, your editor of choice will look to your project's `.editorconfig` file when opening project files and enforce any styles declared by the configuration. Want hard tabs in your HTML? No problem. Two-space soft indentation and end-of-file newlines when working with Ruby? EditorConfig won't even bat an eyelash.

The beauty of EditorConfig is that it does all of this for you _automatically_.

Let's take a look at an example. A sample `.editorconfig` file for a basic project consisting of some HTML, CSS, and JavaScript may look something like:

```
# EditorConfig is awesome: http://EditorConfig.org
root = true

[*]
end_of_line = lf
indent_size = 4
indent_style = tab
insert_final_newline = false
```

The above specifies that this EditorConfig file is the root file and that your editor should stop looking for other configuration files. The line `[*]` specifies that the following lines declare coding styles for all file types in the project, regardless of file extension. A variety of patterns can be matched and are outlined in [the documentation](http://editorconfig.org/#file-format-details).

The remaining four lines instruct your editor to use Unix-style newlines, insert hard tabs equal to the width of four characters, and not insert a newline at the end of a file.

Depending on the nature of your project, your `.editorconfig` file might include additional blocks for different file types. You can get as granular with coding style definitions as you like.

## Why It's Great

There are a couple things I love about EditorConfig. It's a simple tool that does one thing well with a clear syntax and a flat learning curve. I installed the appropriate [plugin](https://github.com/sindresorhus/editorconfig-sublime) for my [editor](http://www.sublimetext.com/), added a brief `.editorconfig` file to a personal project, and was ready to go in only a couple minutes.

I love that it _just works_. I love the "set it and forget it" nature of the `.editorconfig` file. I love that your project's coding standards are documented _alongside your project's code_.

That last point makes EditorConfig a great option for large, diverse teams. Since the project's coding styles are specified in a file with the project's codebase in a format enforced by an editor or IDE, team members can stop fretting over whether or not they're using the "correct" indentation and instead get down to the business of writing code and solving problems.

## In the Wild

EditorConfig is taking off in the open source community. A recent notable example: the popular [HTML5 Boilerplate](https://html5boilerplate.com) project added an `.editorconfig` file in [their 5.0 release](https://github.com/h5bp/html5-boilerplate/blob/v5.0.0/CHANGELOG.md). jQuery, Ruby, WordPress. The [list of projects](https://github.com/editorconfig/editorconfig/wiki/Projects-Using-EditorConfig) using EditorConfig is impressive. [Most impressive](http://i.imgur.com/YErTzPb.gif).

[Pelle Wessman replied](https://twitter.com/voxpelli/status/563255316914388992) to [my question](https://twitter.com/jgarber/status/563067176362717184) on Twitter that the team at [Bloglovin](http://www.bloglovin.com/) use EditorConfig and [Grunt](http://gruntjs.com/) to enforce their in-house coding styles.

For the reasons outlined above, [EditorConfig](http://editorconfig.org/) is a great solution to a recurring coding inconvenience. I encourage you to give it a look and try it out for yourself on a project!
