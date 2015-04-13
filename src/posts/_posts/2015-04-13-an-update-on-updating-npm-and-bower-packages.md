---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10152704510232343
  - title: Twitter
    url: https://twitter.com/jgarber/status/587610305498324993
  - title: Viget Extend
    url: http://viget.com/extend/an-update-on-updating-npm-and-bower-packages
date: 2015-04-13 09:32:18 -0400
excerpt: Turns out I got a couple things less-than-correct in my last post on npm and Bower. This post is a more accurate process for updating packages for each registry.
tags: bower development javascript npm
title: An Update on Updating npm and Bower Packages
---

In my [previous post on publishing code to npm and Bower](/posts/publishing-packages-to-npm-and-bower), I included a section at the end with some information and instructions on updating and releasing new versions of packages. Turns out I got it sort of right and sort of wrong.

What follows is a more accurate process for updating packages for each registry and a proposed workflow for publishing updates to both registries.

## Updating an npm package

[npm's documentation](https://docs.npmjs.com/getting-started/publishing-npm-packages#updating-the-package) has the full story:

> When you make changes, you can update the package using `npm version <update_type>`, where update_type is one of the semantic versioning release types, patch, minor, or major. This command will change the version number in `package.json`. Note that this will also add a tag with this release number to your git repository if you have one.
>
> After updating the version number, you can `npm publish` again.
>
> Test: Go to `http://npmjs.com/package/<package>`. The package number should be updated.

A typical workflow could look something like:

```sh
git commit -am "Fix some bugs."
npm version 1.0.1
npm publish
```

This series of commands will commit your package's updated code, change the version listed in `package.json` to `1.0.1`, commit _that_ change, and notify the npm registry of the update.

What these commands don't appear to do is push your code to a remote Git repository, so you'll want to run `git push origin master && git push --tags` or similar.

## Updating a Bower package

Much like updating an npm package, [updating a Bower package](http://bower.io/docs/api/#version) is fairly straightforward:

```sh
git commit -am "Fix some bugs."
bower version 1.0.1
```

And, just like npm:

> If run in a git repo, it will also create a version commit and tag, and fail if the repo is not clean.

Unlike npm, Bower doesn't have a corresponding `publish` command. Instead, you'd run `git push origin master && git push --tags`. The Bower registry will pick up the updated release after some time.

## Updating Packages to both registries

If, like me, you want to make available the same code to both registries, using each registry's `version` command will create a couple of extraneous commits. I also use the version listed in `package.json` to populate the preamble [in RouterRouter's build script](https://github.com/jgarber623/RouterRouter/blob/master/scripts/build.js). For this reason in particular, I tend to update the version listed in `package.json` and `bower.json` by hand.

My workflow looks a little bit like this:

1. `git commit -am "Fix some bugs."`
1. Update the `version` string in `package.json` and `bower.json` by hand to `1.0.1`.
1. `npm run build`
1. `git commit -am "Bump version to 1.0.1 and run build script."`
1. `git tag v1.0.1`
1. `git push origin master && git push --tags`
1. `npm publish`

While this process is a little tedious, I've found it works for me and how I think about the package publication and maintenance.

Do you have any tips or tricks that help you more easily publish code to npm, Bower, or other public registries? I'd love to hear more about your process!