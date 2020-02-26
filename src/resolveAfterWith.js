import wait from './wait.js';
import waitBy from './waitBy.js';

/**
 * Returns a function that returns a Promise that resolves with provided args after a delay.
 *
 * @function resolveAfterWith
 * @category Higher-order
 *
 * @param {number} [duration=0] - Milliseconds
 * @param {...*} [args] - Passed in to the resolve function.
 *
 * @returns {function(): Promise}
 */
export default (duration, ...args) => waitBy(function(resolve) {
	wait(duration).then(() => resolve(...args));
});
