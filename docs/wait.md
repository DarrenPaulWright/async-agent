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


<br><a name="wait"></a>

## wait([duration]) ⇒ <code>Promise</code>
> Delays the resolving of a new Promise for a given amount of time. Provides the same functionality as defer and delay, but with promises. Also serves as a wrapper for a Promise if a callback is provided in place of duration.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [duration] | <code>number</code>, <code>function</code> | <code>0</code> | If a number is provided, waits that many ms before resolving. If a function is provided then the function is treated like an async function. |

**Example**  
``` javascript
import { wait } from 'async-agent';

wait(1000)
    .then(() => {
        console.log('2');
    });

console.log('1');

// => 1
// (after 1000ms) => 2
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
