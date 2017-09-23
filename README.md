# to-array
![logo](https://avatars1.githubusercontent.com/u/31987273?v=4&s=100)

consume an iterable and return an array of all items. 

[![NPM version][npm-image]][npm-url]
[![Travis Status][travis-image]][travis-url]
[![Travis Status][codecov-image]][codecov-url]

## Usage

_package requires a system that supports async-iteration, either natively or via down-compiling_

### Install
```
npm install @async-generators/to-array --save
yarn add @async-generators/to-array
```

This package's `main` entry points to a `commonjs` distribution. 

Additionally, the `module` entry points to a `es2015` distribution, which can be used by build systems, such as webpack, to directly use es2015 modules. 

## Api

### toArray(source)

<code>toArray()</code> iterates `source`, adds each item to an array and returns the array when the `source()` iterator completes. 

## Example

example.js
```js
const toArray = require('@async-generators/to-array').default;

async function main() {

  let source = async function* () {   
    yield 1; yield 2; yield 3; yield 4;
  }

  let result = await toArray(source());

  console.log(result);
}

main();

```

Execute with the latest node.js: 

```
node --harmony-async-iteration example.js
```


output:
```
[ 1, 2, 3, 4 ]
```
## Typescript

This library is fully typed and can be imported using: 

```ts
import toArray from '@async-generators/to-array');
```

It is also possible to directly execute your [properly configured](https://stackoverflow.com/a/43694282/1657476) typescript with [ts-node](https://www.npmjs.com/package/ts-node):

```
ts-node --harmony_async_iteration example.ts
```

[npm-url]: https://npmjs.org/package/@async-generators/to-array
[npm-image]: https://img.shields.io/npm/v/@async-generators/to-array.svg
[npm-downloads]: https://img.shields.io/npm/dm/@async-generators/to-array.svg
[travis-url]: https://travis-ci.org/async-generators/to-array
[travis-image]: https://img.shields.io/travis/async-generators/to-array/master.svg
[codecov-url]: https://codecov.io/gh/async-generators/to-array
[codecov-image]: https://codecov.io/gh/async-generators/to-array/branch/master/graph/badge.svg
