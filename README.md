# color-variants

Generate light and dark variants of a color

[![Build Status][build-badge]][build]
[![Version][version-badge]][npm]

[build-badge]: https://img.shields.io/travis/colebemis/color-variants/master.svg?style=flat-square
[build]: https://travis-ci.org/colebemis/color-variants
[version-badge]: https://img.shields.io/npm/v/color-variants.svg?style=flat-square
[npm]: https://www.npmjs.com/package/color-variants

## Usage

### Install

```shell
npm install color-variants
```

### Import

```js
// ES modules
import colorVariants from 'color-variants'

// CommonJS
const colorVariants = require('color-variants').default
```

### Use

```js
colorVariants({
  base: '#f00',
  light: { steps: 4, lighten: 0.9, hueShift: 20, saturate: -0.1 },
  dark: { steps: 2, darken: 0.5, hueShift: -10, saturate: 0.5 },
})
```

## Inspiration

- [scale](https://hihayk.github.io/scale/) by [Hayk An](https://twitter.com/hihayk)
- [palx](https://palx.jxnblk.com/) by [Brent Jackson](https://twitter.com/jxnblk)

## Further reading

- [Color in UI Design: A (Practical) Framework](https://medium.com/@erikdkennedy/color-in-ui-design-a-practical-framework-e18cacd97f9e) by [Erik D. Kennedy](https://twitter.com/erikdkennedy)
- [Color schemes - Programming Design Systems](https://programmingdesignsystems.com/color/color-schemes/index.html#color-schemes-dV9Rf6L) by [Rune Madsen](https://twitter.com/runemadsen)
