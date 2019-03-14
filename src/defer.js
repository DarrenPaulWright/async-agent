import delay from './delay';

/**
 * Defers the calling of a callback until the current stack is complete.
 *
 * @example
 * ``` javascript
 * import { defer } from 'async-agent';
 *
 * defer(() => {
 *     console.log('2');
 * });
 *
 * console.log('1');
 *
 * // => 1
 * // => 2
 * ```
 *
 * @function defer
 *
 * @arg {Function} callback
 *
 * @returns {Number} An id that can be used to clear the callback before it gets called.
 */
export default (callback) => delay(callback, 0);
