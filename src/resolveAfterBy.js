import wait from './wait.js';
import waitBy from './waitBy.js';

/**
 * Returns a function that returns a Promise that resolves with the results of a callback after a delay.
 *
 * @function resolveAfterBy
 * @category Higher-order
 *
 * @param {number} duration - Time in milliseconds.
 * @param {Function} callback - Context and args are set to the same as those passed to the initially returned function.
 *
 * @returns {function(): Promise}
 */
export default (duration, callback) => waitBy(function(resolve, reject, ...args) {
	wait(duration).then(() => resolve(callback.apply(this, args)));
});
