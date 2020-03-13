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

<br><a name="Installation"></a>

## Installation
```
npm install async-agent
```
_Requires Babel 7.2+_


<br>

## Functions

<dl>
<dt><a href="docs/clear.md">clear(id)</a></dt>
<dd><p>Clears a defer or delay callback.</p>
</dd>
<dt><a href="docs/debounce.md">debounce(callback, [duration], [options])</a> ⇒ <code>function</code></dt>
<dd><p>Returns a new debounced function that waits to call the callback until <code>duration</code> ms have passed since the last time it was called.</p>
</dd>
<dt><a href="docs/defer.md">defer(callback)</a> ⇒ <code>number</code></dt>
<dd><p>Defers the calling of a callback until the current stack is complete.</p>
</dd>
<dt><a href="docs/delay.md">delay(callback, [duration])</a> ⇒ <code>number</code></dt>
<dd><p>Delays the calling of a callback for a given amount of time.</p>
</dd>
<dt><a href="docs/throttle.md">throttle(callback, [duration], [options])</a> ⇒ <code>function</code></dt>
<dd><p>Returns a new throttled function that waits to call the callback until <code>duration</code> ms have passed. Any calls to it during that time will do nothing.</p>
</dd>
<dt><a href="docs/wait.md">wait([duration])</a> ⇒ <code>Promise</code></dt>
<dd><p>Delays the resolving of a new Promise for a given amount of time. Provides the same functionality as defer and delay, but with promises. Also serves as a wrapper for a Promise if a callback is provided in place of duration.</p>
</dd>

#### Higher-order Functions

<dt><a href="docs/rejectAfterBy.md">rejectAfterBy(duration, callback)</a> ⇒ <code>function</code></dt>
<dd><p>Returns a function that returns a Promise that rejects with the results of a callback after a delay.</p>
</dd>
<dt><a href="docs/rejectAfterWith.md">rejectAfterWith([duration], [args])</a> ⇒ <code>function</code></dt>
<dd><p>Returns a function that returns a Promise that rejects with provided args after a delay.</p>
</dd>
<dt><a href="docs/rejectBy.md">rejectBy([callback])</a> ⇒ <code>function</code></dt>
<dd><p>Returns a function that returns a Promise that rejects with the results of a callback.</p>
</dd>
<dt><a href="docs/resolveWith.md">resolveWith([...args])</a> ⇒ <code>function</code></dt>
<dd><p>Returns a function that returns a Promise that rejects with provided args.</p>
</dd>
<dt><a href="docs/resolveAfterBy.md">resolveAfterBy(duration, callback)</a> ⇒ <code>function</code></dt>
<dd><p>Returns a function that returns a Promise that resolves with the results of a callback after a delay.</p>
</dd>
<dt><a href="docs/resolveAfterWith.md">resolveAfterWith([duration], [arg])</a> ⇒ <code>function</code></dt>
<dd><p>Returns a function that returns a Promise that resolves with provided args after a delay.</p>
</dd>
<dt><a href="docs/resolveBy.md">resolveBy([callback])</a> ⇒ <code>function</code></dt>
<dd><p>Returns a function that returns a Promise that resolves with the results of a callback.</p>
</dd>
<dt><a href="docs/resolveWith.md">resolveWith([arg])</a> ⇒ <code>function</code></dt>
<dd><p>Returns a function that returns a Promise that resolves with provided args.</p>
</dd>
<dt><a href="docs/waitBy.md">waitBy(callback)</a> ⇒ <code>function</code></dt>
<dd><p>Returns a function that returns a Promise that calls a callback.</p>
</dd>

#### Iterator Functions

<dt><a href="docs/discard.md">discard(array, callback, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Discard elements from an array, in place, that pass an async test. The array is only mutated if and when all iterations are completed successfully.</p>
</dd>
<dt><a href="docs/each.md">each(array, callback, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Execute an async callback for each element in an array.</p>
</dd>
<dt><a href="docs/every.md">every(array, callback, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Determine whether every element in an array passes an async test.</p>
</dd>
<dt><a href="docs/filter.md">filter(array, callback, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Create a new array with all the elements of an array that pass an async test.</p>
</dd>
<dt><a href="docs/find.md">find(array, callback, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Gets the first element in an array that passes an async test, or undefined if no element passes the test.</p>
</dd>
<dt><a href="docs/findIndex.md">findIndex(array, callback, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Gets the index of the first element in an array that passes an async test, or -1 if no element passes the test.</p>
</dd>
<dt><a href="docs/includes.md">includes(array, value, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Determines if an element is in an array. Uses SameValue comparison performed async.</p>
</dd>
<dt><a href="docs/indexOf.md">indexOf(array, value, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Gets the index of an element in an array, or -1 if the element is not found in the array. Uses SameValue comparison performed async.</p>
</dd>
<dt><a href="docs/map.md">map(array, callback, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Create a new array populated with the results of calling an async callback on every element in an array.</p>
</dd>
<dt><a href="docs/reduce.md">reduce(array, callback, initialValue, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Calls an async callback on each element of an array, reducing the array to a single output value.</p>
</dd>
<dt><a href="docs/some.md">some(array, callback, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Determine whether at least one element in an array passes an async test.</p>
</dd>

#### Repeater Functions

<dt><a href="docs/fill.md">fill(length, [callback], [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Returns an array of specified length filled with either the index value or the value returned from an async callback.</p>
</dd>
<dt><a href="docs/forRange.md">forRange(first, last, callback, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Calls an async callback for each integer within a range.</p>
</dd>
<dt><a href="docs/repeat.md">repeat(times, callback, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Calls an async callback a specified number of times.</p>
</dd>
<dt><a href="docs/until.md">until(callback, [settings])</a> ⇒ <code>Promise</code></dt>
<dd><p>Calls an async callback until true is returned.</p>
</dd>
</dl>

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
