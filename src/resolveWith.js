import resolveAfterWith from './resolveAfterWith';

/**
 * Returns a function that returns a Promise that resolves with provided args.
 *
 * @function resolveWith
 *
 * @arg [args] - Passed in to the resolve function.
 *
 * @returns {function(): Promise}
 */
export default (...args) => resolveAfterWith(0, ...args);
