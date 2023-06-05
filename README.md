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

## Linting

There is simple [prettier][prettier-doc] config in place.

It’s encouraged to have your editor set up so it uses it to format on
save, but it’s not enforced anywhere (no hooks, no CI). If you’d like
hooks that check it on commit and push, you can use
[`@saji/git-hooks`][@saji/git-hooks] (run `npx @saji/git-hooks`).

If you don’t have `prettier` installed globally, you can run `npm install`.

[verkstedt]: https://verkstedt.com/about-us/
[classless]: https://classless.de
[lit]: https://lit.dev
[prettier-doc]: https://prettier.io/docs/en/
[@saji/git-hooks]: https://www.npmjs.com/@saji/git-hooks
