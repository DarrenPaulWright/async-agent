import delay from './delay.js';

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
 * @param {Function} callback - The callback to defer execution of.
 *
 * @returns {number} An id that can be used to clear the callback before it gets called.
 */
export default (callback) => delay(callback, 0);
