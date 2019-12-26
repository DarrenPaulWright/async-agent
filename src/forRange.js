import wait from './wait';

/**
 * Calls an async callback for a range of numbers.
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
 * @category Iteration
 *
 * @arg {Integer} first - The first number passed to the callback
 * @arg {Integer} last - The last number passed to the callback
 * @arg {Function} callback - Must return a promise. If this promise is rejected then iteration stops and the returned promise is resolved.
 *
 * @returns {Promise} The promise is resolved after every callback is resolved or one is rejected.
 */
export default (first, last, callback) => wait((resolve) => {
	const isRight = first > last;

	const loop = (index) => {
		if (isRight ? index < last : index > last) {
			resolve();
		}
		else {
			callback(index)
				.then(() => loop(isRight ? --index : ++index))
				.catch(resolve);
		}
	};

	loop(first);
});
