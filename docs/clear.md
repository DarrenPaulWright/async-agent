# async-agent

A javascript library of async functions

[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/async-agent/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/async-agent?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/async-agent/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/async-agent?targetFile=package.json)

---

<a name="clear"></a>

## clear(id)
Clears a defer or delay callback.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | An id returned from defer or delay |

**Example**  
``` javascriptimport { delay, clear } from 'async-agent';const id = delay(() => {    console.log('2');}, 1000);console.log('1');clear(id);// => 1```

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
