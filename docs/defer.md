# async-agent

A javascript library of async functions

[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/async-agent/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/async-agent?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/async-agent/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/async-agent?targetFile=package.json)

---

<a name="defer"></a>

## defer(callback) ⇒ <code>Number</code>
Defers the calling of a callback until the current stack is complete.

**Kind**: global function  
**Returns**: <code>Number</code> - An id that can be used to clear the callback before it gets called.  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

**Example**  
``` javascriptimport { defer } from 'async-agent';defer(() => {    console.log('2');});console.log('1');// => 1// => 2```

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
