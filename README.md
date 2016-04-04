# image-check [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Check if image exists and retrieve its size (based on Promise)

## Installation

```sh
$ npm install --save image-check
```

## Usage

```js
var imageCheck = require('image-check');
imageCheck('some image url to test').then((data) => {
    // access image attributes
    const width = data.width;
    const height = data.height;
    const url = data.url;
}).catch((err) => {
    // handle error
});
```
## License

MIT © [Dongwon Lim]()


[npm-image]: https://badge.fury.io/js/image-check.svg
[npm-url]: https://npmjs.org/package/image-check
[daviddm-image]: https://david-dm.org/idw111/image-check.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/idw111/image-check
[coveralls-image]: https://coveralls.io/repos/idw111/image-check/badge.svg
[coveralls-url]: https://coveralls.io/r/idw111/image-check
