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
 */
export default (callback: () => void): number => delay(callback, 0);
