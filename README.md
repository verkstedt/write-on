# Write On

An almost collaborative game of storywriting.

_Project created on a [verkstedt]’s Open Wednesday._

## Run locally

You can use 11ty’s dev server which comes with hot reloading:

```sh
npm run dev
```

_No_ need to run `npm install`.

## Goals

- Allow fast prototyping.
  - Things split into components that are easy to re–arrange.
- Be familiar to people with minimal knowledge about the web platform
  - Minimal number of dependencies
    - CSS baseline ([classless]) and web component framework ([lit])
  - Use native browser technologies

## Browser support

Since this is mostly for prototyping, we aim for supporting only
[relatively small group of browsers](./browserslist) that have
features we want to use here. Note that this browserslist is purely
informational and not automatically enforced anywhere.

## Linting

There are simple [EsLint] / [Prettier] and [StyleLint] configs in place.

You will probably need to run `npm install` to make use of them.

It’s encouraged to have your editor set up so it auto–formats using
EsLint and StyleLint on save, but it’s not enforced anywhere (no hooks,
no CI). If you’d like hooks that check it on commit and push, you can
use [`@saji/git-hooks`][@saji/git-hooks] (run `npx @saji/git-hooks`).

You can run `npm run lint` to lint the whole project on `npm run fix`
to auto–fix any linting errors.

[verkstedt]: https://verkstedt.com/about-us/
[classless]: https://classless.de
[lit]: https://lit.dev
[eslint]: https://eslint.org/docs/latest/
[prettier]: https://prettier.io/docs/en/
[stylelint]: https://stylelint.io
[@saji/git-hooks]: https://www.npmjs.com/@saji/git-hooks
