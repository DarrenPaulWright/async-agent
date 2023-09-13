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


<br><a name="debounce"></a>

## debounce(callback, [duration], [options]) ⇒ <code>function</code>
> Returns a new debounced function that waits to call the callback until `duration` ms have passed since the last time it was called.

**Returns**: <code>function</code> - The debounced function. Has two methods: .clear() clears any current timeouts, and .flush() immediately calls any waiting callbacks.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| callback | <code>function</code> |  | The context and args from the last call will be passed in. |
| [duration] | <code>number</code> | <code>0</code> | Time in milliseconds. |
| [options] | <code>object</code> | <code>{}</code> | Options. |
| [options.leading] | <code>boolean</code> | <code>false</code> | If true then the callback is called immediately the first time. |
| [options.trailing] | <code>boolean</code> | <code>true</code> | If false then the callback will only be called on the leading edge. |
| [options.maxWait] | <code>number</code> |  | Max time (ms) to wait before flushing. |

**Example**  
``` javascript
import { debounce } from 'async-agent';

const debounced = debounce(() => {
    console.log('1');
});

debounced();
debounced();
debounced();
debounced();

// => 1
```

[npm]: https://img.shields.io/npm/v/async-agent.svg
[npm-url]: https://npmjs.com/package/async-agent
[build]: https://travis-ci.org/DarrenPaulWright/async-agent.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/async-agent
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/async-agent/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/async-agent?branch&#x3D;master
[deps]: https://david-dm.org/DarrenPaulWright/async-agent.svg
[deps-url]: https://david-dm.org/DarrenPaulWright/async-agent
[size]: https://packagephobia.now.sh/badge?p&#x3D;async-agent
[size-url]: https://packagephobia.now.sh/result?p&#x3D;async-agent
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/async-agent/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/async-agent?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/async-agent.svg
[license-url]: https://npmjs.com/package/async-agent/LICENSE.md
