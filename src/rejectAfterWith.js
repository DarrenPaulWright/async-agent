import wait from './wait.js';

/**
 * Returns a function that returns a Promise that rejects with provided args after a delay.
 *
 * @function rejectAfterWith
 * @category Higher-order
 *
 * @arg {Number} [duration=0] - Milliseconds
 * @arg {*} [args] - Passed in to the reject function.
 *
 * @returns {function(): Promise}
 */
export default (duration, ...args) => () => wait((resolve, reject) => {
	wait(duration).then(() => reject(...args));
});
