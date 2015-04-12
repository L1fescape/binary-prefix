# Binary-Prefix [![Build Status](https://travis-ci.org/akenn/binary-prefix.svg?branch=master)](https://travis-ci.org/akenn/binary-prefix)

> A Javascript library for retrieveing a list of binary or decimal SI unit prefixes

## Install

```sh
$ npm install --save binary-prefix 
```

## Usage

```js
var prefixes = require('binary-prefix');

prefixes();
//=> {
//=>   B: 'B',
//=>   KB: 'KB',
//=>   MB: 'MB',
//=>   GB: 'GB',
//=>   TB: 'TB', 
//=>   PB: 'PB',
//=>   EB: 'EB',
//=>   ZB: 'ZB',
//=>   YB: 'YB'
//=> }

// Getting a list of decimal prefixes
prefixes({ decimal: true });
//=> {
//=>   B: 'B',
//=>   KB: 'kB',
//=>   MB: 'MB',
//=>   GB: 'GB',
//=>   TB: 'TB', 
//=>   PB: 'PB',
//=>   EB: 'EB',
//=>   ZB: 'ZB',
//=>   YB: 'YB'
//=> }

// Using custom prefixes
prefixes({ custom: { KB: 'kilobytes', GB: 'gigga-bytes' } });
//=> {
//=>   B: 'B',
//=>   KB: 'kilobytes',
//=>   MB: 'MB',
//=>   GB: 'gigga-bytes',
//=>   TB: 'TB', 
//=>   PB: 'PB',
//=>   EB: 'EB',
//=>   ZB: 'ZB',
//=>   YB: 'YB'
//=> }

## License

MIT © [Andrew Kennedy](https://akenn.org)
