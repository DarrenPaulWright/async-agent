import wait from './wait.js';
import waitBy from './waitBy.js';

/**
 * Returns a function that returns a Promise that rejects with the results of a callback after a delay.
 *
 * @function rejectAfterBy
 * @category Higher-order
 *
 * @param {number} duration - Milliseconds
 * @param {Function} callback - Context and args are set to the same as those passed to the initially returned function.
 *
 * @returns {function(): Promise}
 */
export default (duration, callback) => waitBy(function(resolve, reject, ...args) {
	wait(duration).then(() => reject(callback.apply(this, args)));
});
