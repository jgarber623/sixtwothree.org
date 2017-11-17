# sixtwothree.org

**Welcome to my website.**

[![Build Status](https://img.shields.io/travis/jgarber623/sixtwothree.org/the-grand-rewrite.svg?label=build%20status)](https://travis-ci.org/jgarber623/sixtwothree.org)
[![Code Climate GPA](https://img.shields.io/codeclimate/github/jgarber623/sixtwothree.org.svg)](https://codeclimate.com/github/jgarber623/sixtwothree.org)
[![Code Climate Coverage](https://img.shields.io/codeclimate/coverage/github/jgarber623/sixtwothree.org.svg)](https://codeclimate.com/github/jgarber623/sixtwothree.org/coverage)
[![Code Climate Issues](https://img.shields.io/codeclimate/issues/github/jgarber623/sixtwothree.org.svg)](https://codeclimate.com/github/jgarber623/sixtwothree.org/issues)
[![Known Vulnerabilities](https://snyk.io/test/github/jgarber623/sixtwothree.org/badge.svg)](https://snyk.io/test/github/jgarber623/sixtwothree.org)

## Installation

**Note:** These installation instructions are written for users who are comfortable with the command line and using macOS Sierra (or newer).

1. Install [Homebrew](https://brew.sh)
1. Install [Homebrew Services](https://github.com/Homebrew/homebrew-services): `brew tap homebrew/services`
1. Install [PostgreSQL](https://www.postgresql.org) (9.6.5): `brew install postgresql`
1. Install [Ruby](https://www.ruby-lang.org) (2.4.1) using [rbenv](https://github.com/rbenv/rbenv): `rbenv install 2.4.1`
1. Start PostgreSQL: `brew services run postgresql`
1. Run setup script: `bin/setup`
1. Start the application: `bin/foreman start`

The app should now be running locally and accessible in a Web browser at [http://localhost:3000](http://localhost:3000).
