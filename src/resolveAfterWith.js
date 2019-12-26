import wait from './wait';
import waitBy from './waitBy';

/**
 * Returns a function that returns a Promise that resolves with provided args after a delay.
 *
 * @function resolveAfterWith
 * @category Higher-order
 *
 * @arg {Number} [duration=0] - Milliseconds
 * @arg {*} [args] - Passed in to the resolve function.
 *
 * @returns {function(): Promise}
 */
export default (duration, ...args) => waitBy(function(resolve) {
	wait(duration).then(() => resolve(...args));
});
