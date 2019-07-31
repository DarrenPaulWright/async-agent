import wait from './wait';
import waitBy from './waitBy';

/**
 * Returns a function that returns a Promise that rejects with the results of a callback after a delay.
 *
 * @function rejectAfterBy
 *
 * @arg {Number} duration - Milliseconds
 * @arg {function} callback - Context and args are set to the same as those passed to the initially returned function.
 *
 * @returns {function(): Promise}
 */
export default (duration, callback) => waitBy(function(resolve, reject, ...args) {
	wait(duration).then(() => reject(callback.apply(this, args)));
});
