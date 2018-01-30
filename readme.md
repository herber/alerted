# Alerted

> Minimalist toast notifications

## Install

```
$ npm install alerted
```

## Usage

```js
const alerted = require('alerted');

alerted({
  text: 'This is a message',
  position: 'bottom'
});
```

## API

### alerted([options])

#### text

Type: `string`

Some text to be displayed.

#### heading

Type: `string`

An optional heading.

#### time

Type: `int`
Default: `3000`

How long the notification should be displayed.

#### position

Type: `string`
Default: `top`

Specify the notification's position(either `top` or `bottom`)

#### classes

Type: `string`, `array`

A single string or an array of string representing additional classes.

## License

MIT © [Tobias Herber](http://tobihrbr.com)
