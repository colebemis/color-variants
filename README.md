# color-variants

Generate light and dark variants of a color

[![Build Status][build-badge]][build]
[![Version][version-badge]][npm]

[build-badge]: https://img.shields.io/travis/colebemis/color-variants/master.svg?style=flat-square
[build]: https://travis-ci.org/colebemis/color-variants

[version-badge]: https://img.shields.io/npm/v/color-variants.svg?style=flat-square
[npm]: https://www.npmjs.com/package/color-variants

```shell
npm install color-variants
```

```js
import colorVariants from 'color-variants'

colorVariants({
  base: '#f00',
  light: { steps: 4, lighten: 0.9, hueShift: 20, saturate: -0.1 },
  dark: { steps: 2, darken: 0.5, hueShift: -10, saturate: 0.5 },
})
```
