import { isFunction } from 'type-enforcer';
import delay from './delay.js';

/**
 * Delays the resolving of a new Promise for a given amount of time. Provides the same functionality as defer and delay, but with promises. Also serves as a wrapper for a Promise if a callback is provided in place of duration.
 *
 * @example
 * ``` javascript
 * import { wait } from 'async-agent';
 *
 * wait(1000)
 *     .then(() => {
 *         console.log('2');
 *     });
 *
 * console.log('1');
 *
 * // => 1
 * // (after 1000ms) => 2
 * ```
 *
 * @function wait
 *
 * @param {number|Function} [duration=0] - If a number is provided, waits that many ms before resolving. If a function is provided then the function is treated like an async function.
 *
 * @returns {Promise}
 */
export default (duration = 0) => new Promise((resolve, reject) => {
	if (isFunction(duration)) {
		duration(resolve, reject);
	}
	else if (duration === 0) {
		resolve();
	}
	else {
		delay(resolve, duration);
	}
});
