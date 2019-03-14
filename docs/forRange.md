# async-agent

A javascript library of async functions

[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/async-agent/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/async-agent?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/async-agent/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/async-agent?targetFile=package.json)

---

<a name="forRange"></a>

## forRange(first, last, callback) ⇒ <code>Promise</code>
Calls an async callback for a range of numbers.

**Kind**: global function  
**Returns**: <code>Promise</code> - The promise is resolved after every callback is resolved or one is rejected.  

| Param | Type | Description |
| --- | --- | --- |
| first | <code>Integer</code> | The first number passed to the callback |
| last | <code>Integer</code> | The last number passed to the callback |
| callback | <code>function</code> | Must return a promise. If this promise is rejected then iteration stops and the returned promise is resolved. |

**Example**  
``` javascriptimport { forRange } from 'async-agent';const output = [];forRange(3, 10, (index) => new Promise((resolve) => {        output.push(index);        resolve();    })    .then(() => {        console.log(output);    }// => [3, 4, 5, 6, 7, 8, 9, 10]const outputRight = [];forRange(10, 3, (index) => new Promise((resolve, reject) => {        outputRight.push(index);        if (index === 7) {            reject();        }        else {            resolve();        }    })    .then(() => {        console.log(outputRight);    }// => [10, 9, 8, 7]```

## License

[MIT](LICENSE.md)

[npm]: https://img.shields.io/npm/v/async-agent.svg
[npm-url]: https://npmjs.com/package/async-agent
[build]: https://travis-ci.org/DarrenPaulWright/async-agent.svg?branch=master
[build-url]: https://travis-ci.org/DarrenPaulWright/async-agent
[deps]: https://david-dm.org/darrenpaulwright/async-agent.svg
[deps-url]: https://david-dm.org/darrenpaulwright/async-agent
[size]: https://packagephobia.now.sh/badge?p=async-agent
[size-url]: https://packagephobia.now.sh/result?p=async-agent
