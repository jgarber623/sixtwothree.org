---
copies:
  - title: Facebook
    url: https://www.facebook.com/jgarber623/posts/10153095752552343
  - title: Twitter
    url: https://twitter.com/jgarber/status/662266753267953665
date: 2015-11-05 08:40:13 -0500
excerpt: Take some of the pain out of managing SVG icon sprites with this little Ruby gem.
tags: development ruby svg
title: Automating SVG Icon Sprite Generation with svgeez
---

Last summer, [Chris Coyier](http://chriscoyier.net/) wrote a pair of really great articles on [CSS Tricks](https://css-tricks.com/) detailing a technique for using [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)-based icon systems. Both posts are solid reads full of useful information. They're _definitely_ worth your time.

- [Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)
- [SVG \`symbol\` a Good Choice for Icons](https://css-tricks.com/svg-symbol-good-choice-icons/)

SVGs are a _great_ choice for managing icon systems. For starters, they're infinitely scalable which means your icons will look stellar on devices of all resolutions and pixel densities. Secondly, since SVGs are essentially text files, they're highly compressible with tools like [gzip](https://www.gnu.org/software/gzip/). _Thirdly_, SVGs embedded in HTML are [styleable with CSS](http://tutorials.jenkov.com/svg/svg-and-css.html). Mind: blown.

While I found a handful of [SVG sprite-generating tools on npm](https://www.npmjs.com/search?q=svg%20sprite), I had a hard time finding anything similar in the Ruby world. I spend most of my time working in Ruby-powered apps and prefer keeping my front-end tooling dependencies as minimal as possible. So… I put my Ruby skills to the test and set out to write something to suit my needs.

## Introducing svgeez

[svgeez](https://github.com/jgarber623/svgeez) is the result of those efforts: a Ruby gem that automates the SVG icon sprite creation process by providing an easy-to-use [command line interface](https://en.wikipedia.org/wiki/Command-line_interface) with a lightweight feature set. It does one thing and does it pretty well. Provide svgeez with a path to a source folder of SVG icon files and a path to a destination folder and it'll generate a single SVG icon sprite file for you, named based on the final bit of the source folder's path.

svgeez comes with two commands: `build` for doing one-off sprite file generation and `watch` for—you guessed it—watching a folder of source SVG files, regenerating the icon sprite file on the fly. With svgeez's `watch` command running, you can add, edit, or delete SVGs from the watched source folder with reckless abandon. svgeez will be there, doing its thing, regenerating an SVG icon sprite for you. I love how the automatic watch-and-regenerate process integrates seemlessly into my front-end development workflow.

## Using svgeez

All of the technical details for installing and using svgeez are in the project's [README](https://github.com/jgarber623/svgeez/blob/master/README.md), but in brief…

1. Install svgeez by adding it to an existing project's [Gemfile](http://bundler.io/gemfile.html) or by installing it manually via `gem install svgeez`.
2. Get yourself a folder of SVG icons. Might I recommend Brent Jackson's [Geomicons Open](http://geomicons.com/) icon set?
3. From the command line, run `svgeez watch --source /path/to/icons --destination /path/to/elsewhere` and marvel as svgeez compiles an SVG icon sprite file to `/path/to/elsewhere/icons.svg`.

Swap out `watch` with `build` in that command to do a one-off build of your SVG icon sprite file.

Both `source` and `destination` should be paths to folders on your computer; svgeez will grab all of the SVG files in `source` and create a single sprite file in `destination`.

If you're working in an existing Ruby app, you can use svgeez alongside other processes with the [Foreman](https://github.com/ddollar/foreman) gem. A sample Procfile might look like:

```rb
rails:  bundle exec rails server -b 0.0.0.0
svgeez: bundle exec svgeez watch --source ./app/assets/images/icons --destination ./app/assets/images --with-svgo
```

Note that last argument, `--with-svgo`. svgeez will optionally optimize source SVG icon files during sprite generation if you have the excellent [SVGO](https://github.com/svg/svgo) installed on your computer, server, etc. Optimizing source files with SVGO is non-destructive, leaving the original files intact, but may add some time to sprite generation depending on the number of files in the supplied source folder.

## Working with SVG Icon Sprites

Within svgeez-generated sprite files, each icon is wrapped in a `<symbol>` element and assigned an `id` attribute with a value combining the SVG sprite's file name and the original, individual icon's file name.

For example, a file named `menu.svg` in `~/Sites/sixtwothree.org/images/icons` will be assigned an `id` value of `icons-menu`.

```xml
<symbol id="icons-menu" viewBox="0 0 32 32">
    <path d="…"/>
</symbol>
```

### Markup

To make use of individual icons from an svgeez-generated SVG sprite file, first include the file's contents at the top of your HTML page, just after the opening `<body>` element.

In a Rails 4 application:

```erb
<body>
    <%= raw assets.find_asset('icons.svg') %>
</body>
```

Or, with PHP:

```php
<body>
    <?php include_once('path/to/icons.svg'); ?>
</body>
```

Next, wherever you want to include an icon in your user interface, use HTML similar to the following, replacing the identifier `#icons-menu` with a value corresponding to the ID of the `<symbol>` in the relevant SVG sprite file:

```html
<svg><use xlink:href="#icons-menu"></svg>
```

A more complete example from a Rails 4 application's layout file:

```erb
<body>
    <%= raw assets.find_asset('icons.svg') %>

    <button>
        <svg><use xlink:href="#icons-menu"></svg>
        Menu
    </button>
</body>
```

In this example, the contents of the generated sprite file is included on every page and isn't terribly cacheable. How onerous this is depends on the size of your icon system.

For smaller icon sets, this may be an acceptable balance of user and developer needs. For larger icon sets, you may want to investigate more advanced techniques for loading and caching an SVG sprite file (perhaps with [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)…?)

### Styling embedded icons

Icons embedded with the inline `<use>` technique will inherit their fill color from the nearest parent's `color` value, but this can be overriden with CSS:

```css
button {
    color: #333;
}

button svg {
    fill: #c00; // Absent this declaration, the icon's fill color would be #333
}
```

---

I'd love to get your feedback on svgeez. If you use it in a project, let me know! If you find a bug or have an idea for improvements, open up an [issue over on GitHub](https://github.com/jgarber623/svgeez/issues). svgeez will save me a _ton_ of time in development and I hope you find it useful in your projects!