# Astro Barge

This is a demonstration of an alternative to [Astro islands](https://docs.astro.build/en/concepts/islands/) for client-side interactive Web page components.

## Motivation

The two main goals are:

1. Support older browsers without ECMAScript 6
2. Avoid inline scripts to allow for a more secure Content Security Policy ([related discussion](https://github.com/withastro/roadmap/discussions/377))

## Overview

The component is written using [Preact 8](https://preactjs.com/guide/v8/getting-started/) to support Internet Explorer 9. The code is bundled with [Rollup](https://rollupjs.org/) and transpiled with [@babel/preset-env](https://babeljs.io/docs/babel-preset-env). The bundled code is introduced into the application using [vite-plugin-classic-js](https://github.com/jack126guy/vite-plugin-classic-js).

To avoid increasing the bundle size, the code is written to avoid requiring polyfills. This is enforced by a custom Rollup plugin that errors whenever a core-js module is imported.

## License

This demonstration is dedicated to the public domain under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/). A copy is available in `LICENSE.txt`.