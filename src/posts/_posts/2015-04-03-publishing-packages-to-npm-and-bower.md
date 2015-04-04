---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10152684583007343
  - title: Twitter
    url: https://twitter.com/jgarber/status/584012621516509185
date: 2015-04-03 11:16:17 -0400
excerpt: In this post, I’ll run through the process by which you can publish code to the npm and Bower repositories.
tags:
  - bower
  - development
  - javascript
  - npm
title: Publishing Packages to npm and Bower
---

The last few years have seen an explosion in the use of JavaScript for a variety of tasks outside its traditional home within the Web browser. Workflow tools like [Grunt](http://gruntjs.com/) and [Gulp](http://gulpjs.com) have changed how we use, share, and optimize front-end Web code. These tools and their brethren are typically built on top of the [Node.js](https://nodejs.org/) platform and, owing to their being written in the familiar JavaScript, have seen widespread adoption among those working on the Web.

Developers have also shared packaged code en masse to public registries like [npm](https://www.npmjs.com/) and [Bower](http://bower.io/). These registries and their associated command line tools give developers an easy way to add functionality to their projects. If you're familiar with Ruby-based dependency management tools like [Bundler](http://bundler.io/), you can think of npm and Bower packages as being similar to Ruby gems.

Packaging and publishing your front-end code allows you (and others!) to easily include code in your (and their!) projects. _What_ you choose to publish—CSS snippets, JavaScript modules, etc.—is up to you, but generally, the smaller and more discrete your code, the better.

In this post, I'll run through the process by which you can publish code to the npm and Bower repositories. In publishing my own work to these repositories, I uncovered a couple of things to watch out for and I'll note those along the way.

## Prerequisites

Before we get started, you'll need to install [Node](https://nodejs.org/) (which includes the `npm` command) and Bower. If you're on a Mac, the easiest way to install Node is with [Homebrew](http://brew.sh/):

```sh
brew install node
```

Next up, Bower:

```sh
npm install -g bower
```

If everything installed properly, the `npm` and `bower` commands should be available in your shell. You can test this by running `npm -v` and `bower -v`.

You'll also want to tag a release and push your code to a publicly-available Git repository (e.g. [GitHub](https://github.com/)). npm and Bower both rely on [Semantic Versioning](http://semver.org/) so a good starting point might look like:

```sh
git commit -am "Commit version 1.0.0 of my awesome project."
git tag v1.0.0
git push
git push --tags
```

The above commands will commit your code (if it's not already), tag it as `v1.0.0` (the `v` is optional), and push both the code and tag to your project's remote Git repository. For more on Git tags and releases, give GitHub's [About Releases help page](https://help.github.com/articles/about-releases/) a read.

With the prerequisites out of the way, you're all set to publish your code to npm and Bower.

## Publishing to npm

To get started with the npm setup process, run `npm init` from your project's root directory. You'll be prompted to answer a couple of questions about your project: your package's name, version (using the aforementioned SemVer format), description, etc.

_A quick caveat:_ For the purposes of publishing to npm and Bower, enter a lowercased package name, regardless of how you may stylize the name elsewhere (e.g. `routerrouter` vs. `RouterRouter`).

_And a quick note:_ When prompted to enter an "entry point," enter the relative path to the primary file your package provides (e.g. `dist/routerrouter.js`). The resulting `package.json` file stores this in the `main` key so I'm not sure why it's referred to as an "entry point" during setup.

Once you've responded to all of the prompts, a `package.json` file will be added to the root of your project complete with all of the values you provided during setup. The first step of publishing to npm is complete.

Step two requires an account on npm's website:

> To publish, you must have a user on the npm registry. If you don't have one, create it with `npm adduser`. If you created one on the site, use `npm login` to store the credentials on the client.

I signed up for an npm account [via the website](https://www.npmjs.com/signup) after which I ran `npm login` and filled in the appropriate credentials. Run `npm config ls` to make sure everything's configured properly. You should see output similar to:

```
//registry.npmjs.org/:always-auth = false
//registry.npmjs.org/:email = "your.email@example.com"
//registry.npmjs.org/:username = "yourusername"
```

With your npm user set, all that's left is to publish your package by running `npm package`. You should see some output confirming that your package was published if everything is in order. If you encounter an error, go through the output and correct any mistakes.

For more on publishing to npm, check out [the docs](https://docs.npmjs.com/getting-started/publishing-npm-packages). [The package.json spec](https://docs.npmjs.com/files/package.json) is also worth a look if you want to provide additional information along with your package.

## Publishing to Bower

Publishing packages to Bower is _very_ similar to publishing to npm. Kick things off by running `bower init` from the root of your project. You'll be prompted to answer a series of familiar questions. If you're unsure how to answer any of the questions, pressing `return` will use the default answer. For instance, setup asks, "What types of modules does this package expose?" If you're publishing a CSS package, this question is irrelevant; simply pressing `return` will move you on to the next question.

Once you've answered all the prompts, the program will create a `bower.json` file in the root of your project. If you take a look, you'll see a lot of similarities between the contents of `bower.json` and our previously-created `package.json` file.

Finally, we submit our package to the Bower registry by issuing a command similar to:

```sh
bower register routerrouter git://github.com/jgarber623/RouterRouter.git
```

You'll want to replace `routerrouter` with your package's name (as defined in `bower.json`) and the Git URL with the URL for your package's repository. Bower prefers Git URLs to use the `git://` protocol, so watch out for that.

For more on creating and publishing packages to Bower, check out [the documentation](http://bower.io/docs/creating-packages/) and the [`bower.json` spec](https://github.com/bower/bower.json-spec).

## Updating Packages

Now that you've successfully published the first version of your package to npm and Bower, you can get down to the good work of maintaining and improving your code. Once you're ready to release a new version, there are a couple of steps to walk through in order to publish the update.

First, commit, tag, and push your changes:

```sh
git commit -m "Fix some bugs."
git tag v1.0.1
git push
git push --tags
```

Your commit message and tag will vary depending on the nature of your changes according to the SemVer format. To notify npm that a new version of your package is available, run the following two commands, replacing `1.0.1` as appropriate:

```sh
npm version 1.0.1
npm publish
```

The new version of your package should now show up in npm's registry!

Notifying Bower of the updates to your package is much easier. Remember earlier where you tagged your release with Git? This is where that properly-formatted tag comes in to play: Bower automatically detects new versions of your package based on Git tags. _Super smart_ and makes publishing updated packages to Bower seamless.

---

While there's a bit of initial overhead and configuration, publishing pieces of code to npm and Bower for reuse in projects greatly improves efficiency when starting up new projects. The sheer volume of code available on the repositories can be overwhelming, but they are relatively well-organized and reduce a ton of dependency-management friction.

If you have any questions or tips related to publishing code on npm or Bower, let me know! You can find me on npm at [~jgarber](https://www.npmjs.com/~jgarber).