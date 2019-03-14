import delay from './delay';

/**
 * Delays the resolving of a new Promise for a given amount of time. Provides the same functionality as defer and delay, but with promises.
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
 * @arg {Number} [duration=0]
 *
 * @returns {Promise}
 */
export default (duration = 0) => new Promise((resolve) => {
		if (!duration) {
			resolve();
		}
		else {
			delay(resolve, duration);
		}
	});
