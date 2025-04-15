/**
 * Clears a defer or delay callback.
 *
 * @example
 * ``` javascript
 * import { delay, clear } from 'async-agent';
 *
 * const id = delay(() => {
 *     console.log('2');
 * }, 1000);
 *
 * console.log('1');
 *
 * clear(id);
 *
 * // => 1
 * ```
 */
const clear: (id: number) => void = clearTimeout;

export default clear;
