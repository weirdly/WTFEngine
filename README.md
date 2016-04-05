# Weirdly Wellness Generator

## Requirements

- NPM

## Build

Check out this repository.

`git clone git@github.com:weirdly/wellness-generator.git && cd wellness-generator`

Install dependencies.

`npm install`

Compile static artifacts.

`./node_modules/.bin/gulp build`

(Alternatively, install gulp globally with `npm install -g gulp`)

This application comes bundled with a dev server. To use it, run gulp with no arguments.

`./node_modules/.bin/gulp`

This will build the artifacts as above, and will also start a live reload server, and open the local site in your browser.

## Deploy

To deploy the site to production, use gulp.

`./node_modules/.bin/gulp deploy`

This will build, then force the content of the `./web` dir into the `gh-pages` branch and push to origin.
GitHub pages takes care of the deployment.

The updated site is now available at [https://weirdly.github.com/wellness-generator](https://weirdly.github.com/wellness-generator)

## Credit

Based on [WTFEngine](https://github.com/soulwire/WTFEngine)
