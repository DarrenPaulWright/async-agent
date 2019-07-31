import wait from './wait';

/**
 * Returns a function that returns a Promise that resolves with provided args after a delay.
 *
 * @function resolveAfterWith
 *
 * @arg {Number} [duration=0] - Milliseconds
 * @arg {*} [args] - Passed in to the resolve function.
 *
 * @returns {function(): Promise}
 */
export default (duration, ...args) => () => wait(duration).then(() => args);
