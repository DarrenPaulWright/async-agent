[**async-agent**](README.md)

***

[async-agent](README.md) / \<internal\>

# \<internal\>

## Interfaces

### DebounceReturn()

Defined in: [src/debounce.ts:10](https://github.com/DarrenPaulWright/async-agent/blob/main/src/debounce.ts#L10)

#### Type Parameters

| Type Parameter |
| ------ |
| `Context` |
| `Args` *extends* `unknown`[] |

```ts
DebounceReturn(this: Context, ...args: Args): void;
```

Defined in: [src/debounce.ts:11](https://github.com/DarrenPaulWright/async-agent/blob/main/src/debounce.ts#L11)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `Context` |
| ...`args` | `Args` |

#### Returns

`void`

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="clear"></a> `clear` | () => `void` | [src/debounce.ts:13](https://github.com/DarrenPaulWright/async-agent/blob/main/src/debounce.ts#L13) |
| <a id="flush"></a> `flush` | () => `void` | [src/debounce.ts:14](https://github.com/DarrenPaulWright/async-agent/blob/main/src/debounce.ts#L14) |

***

### IDebounceOptions

Defined in: [src/debounce.ts:4](https://github.com/DarrenPaulWright/async-agent/blob/main/src/debounce.ts#L4)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="leading"></a> `leading?` | `boolean` | [src/debounce.ts:5](https://github.com/DarrenPaulWright/async-agent/blob/main/src/debounce.ts#L5) |
| <a id="maxwait"></a> `maxWait?` | `number` | [src/debounce.ts:7](https://github.com/DarrenPaulWright/async-agent/blob/main/src/debounce.ts#L7) |
| <a id="trailing"></a> `trailing?` | `boolean` | [src/debounce.ts:6](https://github.com/DarrenPaulWright/async-agent/blob/main/src/debounce.ts#L6) |

***

### IForRangeSettings

Defined in: [src/repeaters/forRange.ts:4](https://github.com/DarrenPaulWright/async-agent/blob/main/src/repeaters/forRange.ts#L4)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="delay"></a> `delay?` | `number` | [src/repeaters/forRange.ts:5](https://github.com/DarrenPaulWright/async-agent/blob/main/src/repeaters/forRange.ts#L5) |
| <a id="ignorecancel"></a> `ignoreCancel?` | `boolean` | [src/repeaters/forRange.ts:6](https://github.com/DarrenPaulWright/async-agent/blob/main/src/repeaters/forRange.ts#L6) |

***

### IIteratorSettings

Defined in: [src/iterators/some.ts:3](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/some.ts#L3)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="delay-1"></a> `delay?` | `number` | [src/iterators/some.ts:5](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/some.ts#L5) |
| <a id="down"></a> `down?` | `boolean` | [src/iterators/some.ts:4](https://github.com/DarrenPaulWright/async-agent/blob/main/src/iterators/some.ts#L4) |

***

### IThrottleOptions

Defined in: [src/throttle.ts:3](https://github.com/DarrenPaulWright/async-agent/blob/main/src/throttle.ts#L3)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="leading-1"></a> `leading?` | `boolean` | [src/throttle.ts:4](https://github.com/DarrenPaulWright/async-agent/blob/main/src/throttle.ts#L4) |
| <a id="maxwait-1"></a> `maxWait?` | `number` | [src/throttle.ts:6](https://github.com/DarrenPaulWright/async-agent/blob/main/src/throttle.ts#L6) |
| <a id="trailing-1"></a> `trailing?` | `boolean` | [src/throttle.ts:5](https://github.com/DarrenPaulWright/async-agent/blob/main/src/throttle.ts#L5) |

***

### PromiseLike

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1537

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Methods

##### then()

```ts
then<TResult1, TResult2>(onfulfilled?: 
  | (value: T) => TResult1 | PromiseLike<TResult1>
  | null, onrejected?: 
  | (reason: any) => TResult2 | PromiseLike<TResult2>
| null): PromiseLike<TResult1 | TResult2>;
```

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1544

Attaches callbacks for the resolution and/or rejection of the Promise.

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `onfulfilled?` | \| (`value`: `T`) => `TResult1` \| [`PromiseLike`](#promiselike)\<`TResult1`\> \| `null` | The callback to execute when the Promise is resolved. |
| `onrejected?` | \| (`reason`: `any`) => `TResult2` \| [`PromiseLike`](#promiselike)\<`TResult2`\> \| `null` | The callback to execute when the Promise is rejected. |

###### Returns

[`PromiseLike`](#promiselike)\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

***

### Wait()

Defined in: [src/wait.ts:4](https://github.com/DarrenPaulWright/async-agent/blob/main/src/wait.ts#L4)

#### Call Signature

```ts
Wait(): Promise<void>;
```

Defined in: [src/wait.ts:5](https://github.com/DarrenPaulWright/async-agent/blob/main/src/wait.ts#L5)

##### Returns

`Promise`\<`void`\>

#### Call Signature

```ts
Wait(duration: number): Promise<void>;
```

Defined in: [src/wait.ts:7](https://github.com/DarrenPaulWright/async-agent/blob/main/src/wait.ts#L7)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

##### Returns

`Promise`\<`void`\>

#### Call Signature

```ts
Wait<ReturnValue>(duration: (resolve: (value: ReturnValue) => void, reject: (error: Error) => void) => void): Promise<ReturnValue>;
```

Defined in: [src/wait.ts:9](https://github.com/DarrenPaulWright/async-agent/blob/main/src/wait.ts#L9)

##### Type Parameters

| Type Parameter |
| ------ |
| `ReturnValue` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | (`resolve`: (`value`: `ReturnValue`) => `void`, `reject`: (`error`: `Error`) => `void`) => `void` |

##### Returns

`Promise`\<`ReturnValue`\>
