import wait from './wait';
import waitBy from './waitBy';

/**
 * Returns a function that returns a Promise that resolves with the results of a callback after a delay.
 *
 * @function resolveAfterBy
 * @category Higher-order
 *
 * @arg {Number} duration - Milliseconds
 * @arg {function} callback - Context and args are set to the same as those passed to the initially returned function.
 *
 * @returns {function(): Promise}
 */
export default (duration, callback) => waitBy(function(resolve, reject, ...args) {
	wait(duration).then(() => resolve(callback.apply(this, args)));
});
