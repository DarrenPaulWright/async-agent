**async-agent**

***

# Async Agent

> A javascript library of async functions

<br><a name="Installation"></a>

## Installation
```
npm install async-agent
```
_Requires Babel 7.2+_

<br>

- [Documentation](https://github.com/DarrenPaulWright/async-agent/blob/main/docs/README.md)

## Iterator

### every()

```ts
function every<Context, Type>(
   this: Context, 
   array: Type[], 
   callback: (this: Context, value: Type, index: number, array: Type[]) => unknown, 
settings?: IIteratorSettings): Promise<boolean>;
```

Defined in: [src/iterators/every.ts:18](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/every.ts#L18)

**`Function`**

Determine whether every element in an array passes an async test.

 every

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Type` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `Context` | - |
| `array` | `Type`[] | An array to iterate over. |
| `callback` | (`this`: `Context`, `value`: `Type`, `index`: `number`, `array`: `Type`[]) => `unknown` | __Parameters:__ element, index, and array.<br>__Context:__ same as that provided to the main function.<br>__Return:__ A falsey value to indicate a failure.<br>_May return a Promise. Rejections are not caught_. |
| `settings?` | [`IIteratorSettings`](-internal-.md#iiteratorsettings) | Optional settings object. |

#### Returns

`Promise`\<`boolean`\>

The promise is resolved after every callback is done or a callback returns true or an error is caught.

## Other

### clear()

```ts
const clear: (id: number) => void = clearTimeout;
```

Defined in: [src/clear.ts:19](https://github.com/DarrenPaulWright/async-agent/blob/main/src/clear.ts#L19)

Clears a defer or delay callback.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

#### Example

``` javascript
import { delay, clear } from 'async-agent';

const id = delay(() => {
    console.log('2');
}, 1000);

console.log('1');

clear(id);

// => 1
```

***

### debounce()

```ts
debounce: <Context, Args>(callback: (this: Context, ...args: Args) => void, duration: number, options: IDebounceOptions) => DebounceReturn<Context, Args>;
```

Defined in: [src/debounce.ts:36](https://github.com/DarrenPaulWright/async-agent/blob/main/src/debounce.ts#L36)

Returns a new debounced function that waits to call the callback until `duration` ms have passed since the last time it was called.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Args` *extends* `unknown`[] |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `callback` | (`this`: `Context`, ...`args`: `Args`) => `void` | `undefined` |
| `duration` | `number` | `0` |
| `options` | [`IDebounceOptions`](-internal-.md#idebounceoptions) | `{}` |

#### Returns

[`DebounceReturn`](-internal-.md#debouncereturn)\<`Context`, `Args`\>

#### Example

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

***

### defer()

```ts
defer: (callback: () => void) => number;
```

Defined in: [src/defer.ts:20](https://github.com/DarrenPaulWright/async-agent/blob/main/src/defer.ts#L20)

Defers the calling of a callback until the current stack is complete.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

`number`

#### Example

``` javascript
import { defer } from 'async-agent';

defer(() => {
    console.log('2');
});

console.log('1');

// => 1
// => 2
```

***

### delay()

```ts
delay: (callback: () => void, duration: number) => number;
```

Defined in: [src/delay.ts:18](https://github.com/DarrenPaulWright/async-agent/blob/main/src/delay.ts#L18)

Delays the calling of a callback for a given amount of time.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `callback` | () => `void` | `undefined` |
| `duration` | `number` | `0` |

#### Returns

`number`

#### Example

``` javascript
import { delay } from 'async-agent';

delay(() => {
    console.log('2');
}, 1000);

console.log('1');

// => 1
// (after 1000ms) => 2
```

***

### rejectAfterBy()

```ts
rejectAfterBy: <Context, Args>(duration: number, callback: (this: Context, ...args: Args) => Error) => (...args: Args) => Promise<unknown>;
```

Defined in: [src/rejectAfterBy.ts:8](https://github.com/DarrenPaulWright/async-agent/blob/main/src/rejectAfterBy.ts#L8)

Returns a function that returns a Promise that rejects with the results of a callback after a delay.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Args` *extends* `unknown`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |
| `callback` | (`this`: `Context`, ...`args`: `Args`) => `Error` |

#### Returns

```ts
(...args: Args): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Args` |

##### Returns

`Promise`\<`unknown`\>

***

### rejectAfterWith()

```ts
rejectAfterWith: (duration: number, error: Error) => () => Promise<void>;
```

Defined in: [src/rejectAfterWith.ts:6](https://github.com/DarrenPaulWright/async-agent/blob/main/src/rejectAfterWith.ts#L6)

Returns a function that returns a Promise that rejects with provided args after a delay.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |
| `error` | `Error` |

#### Returns

```ts
(): Promise<void>;
```

##### Returns

`Promise`\<`void`\>

***

### rejectBy()

```ts
rejectBy: <Args>(callback: (this: unknown, ...args: Args) => Error) => (...args: Args) => Promise<unknown>;
```

Defined in: [src/rejectBy.ts:6](https://github.com/DarrenPaulWright/async-agent/blob/main/src/rejectBy.ts#L6)

Returns a function that returns a Promise that rejects with the results of a callback.

#### Type Parameters

| Type Parameter |
| ------ |
| `Args` *extends* `unknown`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`this`: `unknown`, ...`args`: `Args`) => `Error` |

#### Returns

```ts
(...args: Args): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Args` |

##### Returns

`Promise`\<`unknown`\>

***

### rejectWith()

```ts
rejectWith: (error: Error) => () => Promise<void>;
```

Defined in: [src/rejectWith.ts:6](https://github.com/DarrenPaulWright/async-agent/blob/main/src/rejectWith.ts#L6)

Returns a function that returns a Promise that rejects with provided args.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `Error` |

#### Returns

```ts
(): Promise<void>;
```

##### Returns

`Promise`\<`void`\>

***

### resolveAfterBy()

```ts
resolveAfterBy: <Context, Args, ReturnValue>(duration: number, callback: (this: Context, ...args: Args) => ReturnValue) => (...args: Args) => Promise<ReturnValue>;
```

Defined in: [src/resolveAfterBy.ts:8](https://github.com/DarrenPaulWright/async-agent/blob/main/src/resolveAfterBy.ts#L8)

Returns a function that returns a Promise that resolves with the results of a callback after a delay.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Args` *extends* `unknown`[] |
| `ReturnValue` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |
| `callback` | (`this`: `Context`, ...`args`: `Args`) => `ReturnValue` |

#### Returns

```ts
(...args: Args): Promise<ReturnValue>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Args` |

##### Returns

`Promise`\<`ReturnValue`\>

***

### resolveAfterWith()

```ts
resolveAfterWith: <Value>(duration: number, value: Value) => () => Promise<Value>;
```

Defined in: [src/resolveAfterWith.ts:7](https://github.com/DarrenPaulWright/async-agent/blob/main/src/resolveAfterWith.ts#L7)

Returns a function that returns a Promise that resolves with provided args after a delay.

#### Type Parameters

| Type Parameter |
| ------ |
| `Value` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |
| `value` | `Value` |

#### Returns

```ts
(): Promise<Value>;
```

##### Returns

`Promise`\<`Value`\>

***

### resolveBy()

```ts
resolveBy: <Context, Args, ReturnValue>(callback: (this: Context, ...args: Args) => ReturnValue) => (...args: Args) => Promise<ReturnValue>;
```

Defined in: [src/resolveBy.ts:7](https://github.com/DarrenPaulWright/async-agent/blob/main/src/resolveBy.ts#L7)

Returns a function that returns a Promise that resolves with the results of a callback.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Args` *extends* `unknown`[] |
| `ReturnValue` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`this`: `Context`, ...`args`: `Args`) => `ReturnValue` |

#### Returns

```ts
(...args: Args): Promise<ReturnValue>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Args` |

##### Returns

`Promise`\<`ReturnValue`\>

***

### resolveWith()

```ts
resolveWith: <Value>(arg: Value) => () => Promise<Value>;
```

Defined in: [src/resolveWith.ts:4](https://github.com/DarrenPaulWright/async-agent/blob/main/src/resolveWith.ts#L4)

Returns a function that returns a Promise that resolves with provided args.

#### Type Parameters

| Type Parameter |
| ------ |
| `Value` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `arg` | `Value` |

#### Returns

```ts
(): Promise<Value>;
```

##### Returns

`Promise`\<`Value`\>

***

### throttle()

```ts
throttle: <Context, Args>(callback: (this: Context, ...args: Args) => void, duration: number, options: IThrottleOptions) => DebounceReturn<Context>;
```

Defined in: [src/throttle.ts:28](https://github.com/DarrenPaulWright/async-agent/blob/main/src/throttle.ts#L28)

Returns a new throttled function that waits to call the callback until `duration` ms have passed. Any calls to it during that time will do nothing.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Args` *extends* `unknown`[] |

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `callback` | (`this`: `Context`, ...`args`: `Args`) => `void` | `undefined` |
| `duration` | `number` | `0` |
| `options` | [`IThrottleOptions`](-internal-.md#ithrottleoptions) | `{}` |

#### Returns

[`DebounceReturn`](-internal-.md#debouncereturn)\<`Context`\>

#### Example

``` javascript
import { throttle } from 'async-agent';

const throttled = throttle(() => {
    console.log('1');
});

throttled();
throttled();
throttled();
throttled();

// => 1
```

***

### wait

```ts
const wait: Wait;
```

Defined in: [src/wait.ts:32](https://github.com/DarrenPaulWright/async-agent/blob/main/src/wait.ts#L32)

Delays the resolving of a new Promise for a given amount of time. Provides the same functionality as defer and delay, but with promises. Also serves as a wrapper for a Promise if a callback is provided in place of duration.

#### Example

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

***

### discard()

```ts
function discard<Context, Type>(
   this: Context, 
   array: Type[], 
   callback: (this: Context, value: Type, index: number, array: Type[]) => unknown, 
settings: IIteratorSettings): Promise<Type[]>;
```

Defined in: [src/iterators/discard.ts:38](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/discard.ts#L38)

Discard elements from an array, in place, that pass an async test. The array is only mutated if and when all iterations are completed successfully.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Type` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| `array` | `Type`[] |
| `callback` | (`this`: `Context`, `value`: `Type`, `index`: `number`, `array`: `Type`[]) => `unknown` |
| `settings` | [`IIteratorSettings`](-internal-.md#iiteratorsettings) |

#### Returns

`Promise`\<`Type`[]\>

***

### each()

```ts
function each<Context, Type>(
   this: Context, 
   array: Type[], 
   callback: (this: Context, value: Type, index: number, array: Type[]) => void | Promise<void>, 
settings: IIteratorSettings): Promise<Type[]>;
```

Defined in: [src/iterators/each.ts:24](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/each.ts#L24)

Execute an async callback for each element in an array.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Type` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| `array` | `Type`[] |
| `callback` | (`this`: `Context`, `value`: `Type`, `index`: `number`, `array`: `Type`[]) => `void` \| `Promise`\<`void`\> |
| `settings` | [`IIteratorSettings`](-internal-.md#iiteratorsettings) |

#### Returns

`Promise`\<`Type`[]\>

#### Example

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

***

### fill()

```ts
function fill<Context, ReturnValue>(
   this: Context, 
   length: number, 
   callback: (this: Context, index: number) => 
  | ReturnValue
  | PromiseLike<ReturnValue>, 
settings: IForRangeSettings): Promise<ReturnValue[]>;
```

Defined in: [src/repeaters/fill.ts:10](https://github.com/DarrenPaulWright/async-agent/blob/main/src/repeaters/fill.ts#L10)

Returns an array of specified length filled with either the index value or the value returned from an async callback.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `ReturnValue` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| `length` | `number` |
| `callback` | (`this`: `Context`, `index`: `number`) => \| `ReturnValue` \| [`PromiseLike`](-internal-.md#promiselike)\<`ReturnValue`\> |
| `settings` | [`IForRangeSettings`](-internal-.md#iforrangesettings) |

#### Returns

`Promise`\<`ReturnValue`[]\>

***

### filter()

```ts
function filter<Context, Type>(
   this: Context, 
   array: Type[], 
   callback: (this: Context, value: Type, index: number, array: Type[]) => unknown, 
settings: IIteratorSettings): Promise<Type[]>;
```

Defined in: [src/iterators/filter.ts:6](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/filter.ts#L6)

Create a new array with all the elements of an array that pass an async truthy test.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Type` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| `array` | `Type`[] |
| `callback` | (`this`: `Context`, `value`: `Type`, `index`: `number`, `array`: `Type`[]) => `unknown` |
| `settings` | [`IIteratorSettings`](-internal-.md#iiteratorsettings) |

#### Returns

`Promise`\<`Type`[]\>

***

### find()

```ts
function find<Context, Type>(
   this: Context, 
   array: Type[], 
   callback: (this: Context, value: Type, index: number, array: Type[]) => unknown, 
settings: IIteratorSettings): Promise<Type | undefined>;
```

Defined in: [src/iterators/find.ts:7](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/find.ts#L7)

Gets the first element in an array that passes an async test, or undefined if no element passes the test.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Type` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| `array` | `Type`[] |
| `callback` | (`this`: `Context`, `value`: `Type`, `index`: `number`, `array`: `Type`[]) => `unknown` |
| `settings` | [`IIteratorSettings`](-internal-.md#iiteratorsettings) |

#### Returns

`Promise`\<`Type` \| `undefined`\>

***

### findIndex()

```ts
function findIndex<Context, Type>(
   this: Context, 
   array: Type[], 
   callback: (this: Context, value: Type, index: number, array: Type[]) => unknown, 
settings: IIteratorSettings): Promise<number>;
```

Defined in: [src/iterators/findIndex.ts:6](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/findIndex.ts#L6)

Gets the index of the first element in an array that passes an async test, or -1 if no element passes the test.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Type` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| `array` | `Type`[] |
| `callback` | (`this`: `Context`, `value`: `Type`, `index`: `number`, `array`: `Type`[]) => `unknown` |
| `settings` | [`IIteratorSettings`](-internal-.md#iiteratorsettings) |

#### Returns

`Promise`\<`number`\>

***

### forRange()

```ts
function forRange<Context, ReturnValue>(
   this: Context, 
   first: number, 
   last: number, 
   callback: (this: Context, index: number) => 
  | ReturnValue
  | PromiseLike<ReturnValue>, 
settings: IForRangeSettings): Promise<boolean>;
```

Defined in: [src/repeaters/forRange.ts:46](https://github.com/DarrenPaulWright/async-agent/blob/main/src/repeaters/forRange.ts#L46)

Calls an async callback for each integer within a range.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `ReturnValue` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| `first` | `number` |
| `last` | `number` |
| `callback` | (`this`: `Context`, `index`: `number`) => \| `ReturnValue` \| [`PromiseLike`](-internal-.md#promiselike)\<`ReturnValue`\> |
| `settings` | [`IForRangeSettings`](-internal-.md#iforrangesettings) |

#### Returns

`Promise`\<`boolean`\>

#### Example

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

***

### includes()

```ts
function includes(
   array: unknown[], 
   value: unknown, 
settings: IIteratorSettings): Promise<boolean>;
```

Defined in: [src/iterators/includes.ts:7](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/includes.ts#L7)

Determines if an element is in an array. Uses SameValue comparison performed async.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `array` | `unknown`[] |
| `value` | `unknown` |
| `settings` | [`IIteratorSettings`](-internal-.md#iiteratorsettings) |

#### Returns

`Promise`\<`boolean`\>

***

### indexOf()

```ts
function indexOf(
   array: unknown[], 
   value: unknown, 
settings: IIteratorSettings): Promise<number>;
```

Defined in: [src/iterators/indexOf.ts:7](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/indexOf.ts#L7)

Gets the index of an element in an array, or -1 if the element is not found in the array. Uses SameValue comparison performed async.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `array` | `unknown`[] |
| `value` | `unknown` |
| `settings` | [`IIteratorSettings`](-internal-.md#iiteratorsettings) |

#### Returns

`Promise`\<`number`\>

***

### map()

```ts
function map<Context, Type, ReturnType>(
   this: Context, 
   array: Type[], 
   callback: (this: Context, value: Type, index: number, array: Type[]) => ReturnType, 
settings: IIteratorSettings): Promise<ReturnType[]>;
```

Defined in: [src/iterators/map.ts:6](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/map.ts#L6)

Create a new array populated with the results of calling an async callback on every element in an array.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Type` |
| `ReturnType` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| `array` | `Type`[] |
| `callback` | (`this`: `Context`, `value`: `Type`, `index`: `number`, `array`: `Type`[]) => `ReturnType` |
| `settings` | [`IIteratorSettings`](-internal-.md#iiteratorsettings) |

#### Returns

`Promise`\<`ReturnType`[]\>

***

### reduce()

```ts
function reduce<Context, Type, ReturnValue>(
   this: Context, 
   array: Type[], 
   callback: (this: Context, accumulator: ReturnValue, value: Type, index: number, array: Type[]) => 
  | ReturnValue
  | PromiseLike<ReturnValue>, 
   initialValue: ReturnValue, 
settings: IIteratorSettings): Promise<ReturnValue>;
```

Defined in: [src/iterators/reduce.ts:6](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/reduce.ts#L6)

Calls an async callback on each element of an array, reducing the array to a single output value.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Type` |
| `ReturnValue` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| `array` | `Type`[] |
| `callback` | (`this`: `Context`, `accumulator`: `ReturnValue`, `value`: `Type`, `index`: `number`, `array`: `Type`[]) => \| `ReturnValue` \| [`PromiseLike`](-internal-.md#promiselike)\<`ReturnValue`\> |
| `initialValue` | `ReturnValue` |
| `settings` | [`IIteratorSettings`](-internal-.md#iiteratorsettings) |

#### Returns

`Promise`\<`ReturnValue`\>

***

### repeat()

```ts
function repeat<Context, ReturnValue>(
   this: Context, 
   times: number, 
   callback: (this: Context, index: number) => 
  | ReturnValue
  | PromiseLike<ReturnValue>, 
settings: IForRangeSettings): Promise<boolean>;
```

Defined in: [src/repeaters/repeat.ts:7](https://github.com/DarrenPaulWright/async-agent/blob/main/src/repeaters/repeat.ts#L7)

Calls an async callback a specified number of times.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `ReturnValue` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| `times` | `number` |
| `callback` | (`this`: `Context`, `index`: `number`) => \| `ReturnValue` \| [`PromiseLike`](-internal-.md#promiselike)\<`ReturnValue`\> |
| `settings` | [`IForRangeSettings`](-internal-.md#iforrangesettings) |

#### Returns

`Promise`\<`boolean`\>

***

### some()

```ts
function some<Context, Type>(
   this: Context, 
   array: Type[], 
   callback: (this: Context, value: Type, index: number, array: Type[]) => 
  | boolean
  | void
  | PromiseLike<boolean | void>, 
settings: IIteratorSettings): Promise<boolean>;
```

Defined in: [src/iterators/some.ts:11](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/some.ts#L11)

Determine whether at least one element in an array passes an async test.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Type` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| `array` | `Type`[] |
| `callback` | (`this`: `Context`, `value`: `Type`, `index`: `number`, `array`: `Type`[]) => \| `boolean` \| `void` \| [`PromiseLike`](-internal-.md#promiselike)\<`boolean` \| `void`\> |
| `settings` | [`IIteratorSettings`](-internal-.md#iiteratorsettings) |

#### Returns

`Promise`\<`boolean`\>

***

### until()

```ts
function until<Context, ReturnValue>(
   this: Context, 
   callback: (this: Context, index: number) => 
  | ReturnValue
  | PromiseLike<ReturnValue>, 
settings: IForRangeSettings): Promise<boolean>;
```

Defined in: [src/repeaters/until.ts:6](https://github.com/DarrenPaulWright/async-agent/blob/main/src/repeaters/until.ts#L6)

Calls an async callback until true is returned.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `ReturnValue` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| `callback` | (`this`: `Context`, `index`: `number`) => \| `ReturnValue` \| [`PromiseLike`](-internal-.md#promiselike)\<`ReturnValue`\> |
| `settings` | [`IForRangeSettings`](-internal-.md#iforrangesettings) |

#### Returns

`Promise`\<`boolean`\>

***

### waitBy()

```ts
function waitBy<Context, Args, ReturnValue>(callback: (this: Context, resolve: (value: ReturnValue) => void, reject: (error: Error) => void, ...args: Args) => void): (...args: Args) => Promise<ReturnValue>;
```

Defined in: [src/waitBy.ts:7](https://github.com/DarrenPaulWright/async-agent/blob/main/src/waitBy.ts#L7)

Returns a function that returns a Promise that calls a callback.

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Args` *extends* `unknown`[] |
| `ReturnValue` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`this`: `Context`, `resolve`: (`value`: `ReturnValue`) => `void`, `reject`: (`error`: `Error`) => `void`, ...`args`: `Args`) => `void` |

#### Returns

```ts
(...args: Args): Promise<ReturnValue>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `Args` |

##### Returns

`Promise`\<`ReturnValue`\>
