# postcss-transform-pxvw [![npm version](https://badge.fury.io/js/postcss-transform-pxvw.svg)](https://badge.fury.io/js/postcss-transform-pxvw)

The plugin allows you use exact pixels from a design markup and get in result a responsive layout. It's very helpful for pixel perfect. 

There is new `pxvw(val: number, pageWidth?: number)` function. See example below:

## Example
CSS in your source:
```css
.selector {
   /* It means "At 1024 page width it should be exact 150 pixels" */
   width: pxvw(150, 1024);
}
```
CSS after transform:
```css
.selector {
   width: 14.6484vw;
}
```

It also works with `less` and `sass`.

## Installation

### Download package

For NPM users:

`npm i postcss-transform-pxvw --save-dev`

or if you using Yarn:

`yarn add postcss-transform-pxvw -D`

### Add to your toolchain

```js
postcss([
  require('postcss-transform-pxvw')({
    // ...options here
  })
])
```

See [PostCSS] docs for examples for your environment.

## Options

Name | Type | Default value | Description
--- | --- | --- | ---
`defaultPageWidth` | `number` | 1200 | The page width which will be used for calculations when second `pxvw()` argument not provided
`digitsCount` | `number` | 3 | The digits number which stay after decimal dot in vw value

[PostCSS]: https://github.com/postcss/postcss
