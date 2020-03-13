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


<br><a name="fill"></a>

## fill(length, [callback], [settings]) ⇒ <code>Promise</code>
> Returns an array of specified length filled with either the index value or the value returned from an async callback.

**Returns**: <code>Promise</code> - The promise is resolved with the resulting array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| length | <code>integer</code> |  | The first number passed to the callback. |
| [callback] | <code>function</code> |  | __Parameters:__ index.<br> __Context:__ same as that provided to the main function.<br> __Return:__ A value to assign to the resulting array at the same index.<br> __Default:__ (index) => index<br> _May return a Promise. Rejections are not caught and any work done up to that point will be lost._ |
| [settings] | <code>object</code> |  | Optional settings object. |
| [settings.down] | <code>boolean</code> | <code>false</code> | Decrement the index on each iteration from highest to lowest. |
| [settings.delay] | <code>number</code> | <code>0</code> | Delay before calls in ms. Can be updated at any time to effect the delay before future calls. |


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
