# Async Agent

> A javascript library of async functions
>
> [![npm][npm]][npm-url]
[![build][build]][build-url]
[![coverage][coverage]][coverage-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]


<br><a name="forRange"></a>

## forRange(first, last, callback, [settings]) ⇒ <code>Promise</code>
> Calls an async callback for each integer within a range.

**Returns**: <code>Promise</code> - The promise is resolved with true if iteration was cancelled by returning a truthy value in the callback, otherwise false.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| first | <code>integer</code> |  | The first number passed to the callback. |
| last | <code>integer</code> |  | The last number passed to the callback. |
| callback | <code>function</code> |  | __Parameters:__ value.<br> __Context:__ same as that provided to the main function.<br> __Return:__ A truthy value to cancel further iterations.<br> _May return a Promise. Rejections are not caught._ |
| [settings] | <code>object</code> |  | Optional settings object. |
| [settings.delay] | <code>number</code> | <code>0</code> | Delay before calls in ms. Can be updated at any time to effect the delay before future calls. |

**Example**  
``` javascript
import { forRange } from 'async-agent';

const output = [];

forRange(3, 10, (index) => new Promise((resolve) => {
        output.push(index);
        resolve();
    })
    .then(() => {
        console.log(output);
    }

// => [3, 4, 5, 6, 7, 8, 9, 10]

const outputRight = [];

forRange(10, 3, (index) => new Promise((resolve, reject) => {
        outputRight.push(index);
        if (index === 7) {
            reject();
        }
        else {
            resolve();
        }
    })
    .then(() => {
        console.log(outputRight);
    }

// => [10, 9, 8, 7]
```

[npm]: https://img.shields.io/npm/v/async-agent.svg
[npm-url]: https://npmjs.com/package/async-agent
[build]: https://travis-ci.org/DarrenPaulWright/async-agent.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/async-agent
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/async-agent/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/async-agent?branch&#x3D;master
[deps]: https://david-dm.org/darrenpaulwright/async-agent.svg
[deps-url]: https://david-dm.org/darrenpaulwright/async-agent
[size]: https://packagephobia.now.sh/badge?p&#x3D;async-agent
[size-url]: https://packagephobia.now.sh/result?p&#x3D;async-agent
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/async-agent/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/async-agent?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/async-agent.svg
[license-url]: https://npmjs.com/package/async-agent/LICENSE.md
