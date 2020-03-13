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


<br><a name="each"></a>

## each(array, callback, [settings]) ⇒ <code>Promise</code>
> Execute an async callback for each element in an array.

**Returns**: <code>Promise</code> - Resolves after iteration is complete.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | An array to iterate over. |
| callback | <code>function</code> |  | __Parameters:__ element, index, and array.<br> __Context:__ same as that provided to the main function.<br> _May return a Promise. Rejections are not caught._ |
| [settings] | <code>object</code> |  | Optional settings object. |
| [settings.down] | <code>boolean</code> | <code>false</code> | Decrement the index on each iteration from highest to lowest. |
| [settings.delay] | <code>number</code> | <code>0</code> | Delay before calls in ms. Can be updated at any time to effect the delay before future calls. |

**Example**  
``` javascript
import { each } from 'async-agent';

each([4, 5, 6], (element) => {
        console.log(element);
    })
    .then(() => {
        console.log('done');
    }

// => 4
// => 5
// => 6
// => done
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
