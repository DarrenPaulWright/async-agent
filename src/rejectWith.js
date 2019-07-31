import rejectAfterWith from './rejectAfterWith';

/**
 * Returns a function that returns a Promise that rejects with provided args.
 *
 * @function resolveWith
 *
 * @arg [args] - Passed in to the reject function.
 *
 * @returns {function(): Promise}
 */
export default (...args) => rejectAfterWith(0, ...args)
