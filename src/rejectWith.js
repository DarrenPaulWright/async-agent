import rejectAfterWith from './rejectAfterWith.js';

/**
 * Returns a function that returns a Promise that rejects with provided args.
 *
 * @function resolveWith
 * @category Higher-order
 *
 * @param {...*} [args] - Passed in to the reject function.
 *
 * @returns {function(): Promise}
 */
export default (...args) => rejectAfterWith(0, ...args);
