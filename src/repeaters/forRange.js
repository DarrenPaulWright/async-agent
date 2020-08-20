import { enforceInteger } from 'type-enforcer';
import resolveAfterBy from '../resolveAfterBy.js';

/**
 * @typedef integer
 * @private
 */

/**
 * Calls an async callback for each integer within a range.
 *
 * @example
 * ``` javascript
 * import { forRange } from 'async-agent';
 *
 * const output = [];
 *
 * forRange(3, 10, (index) => new Promise((resolve) => {
 *         output.push(index);
 *         resolve();
 *     })
 *     .then(() => {
 *         console.log(output);
 *     }
 *
 * // => [3, 4, 5, 6, 7, 8, 9, 10]
 *
 * const outputRight = [];
 *
 * forRange(10, 3, (index) => new Promise((resolve, reject) => {
 *         outputRight.push(index);
 *         if (index === 7) {
 *             reject();
 *         }
 *         else {
 *             resolve();
 *         }
 *     })
 *     .then(() => {
 *         console.log(outputRight);
 *     }
 *
 * // => [10, 9, 8, 7]
 * ```
 *
 * @function forRange
 * @category Repeater
 *
 * @param {integer} first - The first number passed to the callback.
 * @param {integer} last - The last number passed to the callback.
 * @param {Function} callback - __Parameters:__ value.<br>__Context:__ same as that provided to the main function.<br>__Return:__ A truthy value to cancel further iterations.<br>_May return a Promise. Rejections are not caught_.
 * @param {object} [settings] - Optional settings object.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved with true if iteration was cancelled by returning a truthy value in the callback, otherwise false.
 */
export default function forRange(first, last, callback, settings = {}) {
	first = enforceInteger(first, 0);
	if (last !== Infinity) {
		last = enforceInteger(last, 0);
	}

	return new Promise((resolve, reject) => {
		const fromRight = first > last;
		const end = fromRight ? last - 1 : last + 1;

		if (this !== undefined) {
			callback = callback.bind(this);
		}

		const loop = (value, isCanceled) => {
			if (isCanceled || value === end) {
				resolve(isCanceled);
			}
			else {
				resolveAfterBy(settings.delay, callback)(value)
					.then((result) => {
						loop(fromRight ? value - 1 : value + 1, Boolean(result));
					})
					.catch(reject);
			}
		};

		loop(first, false);
	});
}
