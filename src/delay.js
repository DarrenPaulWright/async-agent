/**
 * Delays the calling of a callback for a given amount of time.
 *
 * @example
 * ``` javascript
 * import { delay } from 'async-agent';
 *
 * delay(() => {
 *     console.log('2');
 * }, 1000);
 *
 * console.log('1');
 *
 * // => 1
 * // (after 1000ms) => 2
 * ```
 *
 * @function delay
 *
 * @param {Function} callback - The function to delay execution of.
 * @param {number} [duration=0] - Time in milliseconds.
 *
 * @returns {number} An id that can be used to clear the callback before it gets called.
 */
export default (callback, duration = 0) => setTimeout(callback, duration);
