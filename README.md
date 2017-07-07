# sixtwothree.org

**Welcome to my website.**

[![Build Status](https://img.shields.io/travis/jgarber623/sixtwothree.org/the-grand-rewrite.svg?label=build%20status)](https://travis-ci.org/jgarber623/sixtwothree.org)
[![Code Climate](https://img.shields.io/codeclimate/github/jgarber623/sixtwothree.org.svg)](https://codeclimate.com/github/jgarber623/sixtwothree.org)
[![Coverage](https://img.shields.io/codeclimate/coverage/github/jgarber623/sixtwothree.org.svg)](https://codeclimate.com/github/jgarber623/sixtwothree.org/coverage)

## Installation

**Note:** These installation instructions are written for users who are comfortable with the command line and using macOS Sierra (or newer).

1. Install [Homebrew](https://brew.sh) and [Homebrew Services](https://github.com/Homebrew/homebrew-services): `brew tap homebrew/services`
1. Install [PostgreSQL](https://www.postgresql.org) (version 9.6.3): `brew install postgresql`
1. Install [Ruby](https://www.ruby-lang.org) (version 2.4.1) using [rbenv](https://github.com/rbenv/rbenv) (or [chruby](https://github.com/postmodern/chruby) or [RVM](https://rvm.io))
1. Install [Bundler](http://bundler.io): `gem install bundler`
1. Install Ruby dependencies: `bundle install`
1. Start PostgreSQL: `brew services start postgresql`
1. Create and migrate databases: `bundle exec rails db:create` and `bundle exec rails db:migrate`
1. Start the application: `bundle exec foreman start`

The app should now be running locally and accessible in a Web browser at [http://localhost:3000](http://localhost:3000).
