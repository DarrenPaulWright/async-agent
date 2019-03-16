# async-agent

A javascript library of async functions

[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/async-agent/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/async-agent?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/async-agent/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/async-agent?targetFile=package.json)

---

<a name="debounce"></a>

## debounce(callback, [duration], [options]) ⇒ <code>function</code>
Returns a new debounced function that waits to call the callback until `duration` ms have passed since the last time it was called.

**Kind**: global function  
**Returns**: <code>function</code> - The debounced function. Has two methods: .clear() clears any current timeouts, and .flush() immediately calls any waiting callbacks.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| callback | <code>function</code> |  | The context and args from the last call will be passed in. |
| [duration] | <code>Number</code> | <code>0</code> |  |
| [options] | <code>Object</code> | <code>{}</code> |  |
| [options.leading] | <code>Boolean</code> | <code>false</code> | If true then the callback is called immediately the first time. |
| [options.maxWait] | <code>Boolean</code> |  | Max time to wait before flushing. |
| [options.trailing] | <code>Boolean</code> | <code>true</code> | If false then the callback will only be called on the leading edge. |

**Example**  
``` javascriptimport { debounce } from 'async-agent';const debounced = debounce(() => {    console.log('1');});debounced();debounced();debounced();debounced();// => 1```

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
