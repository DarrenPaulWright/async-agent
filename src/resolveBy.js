import resolveAfterBy from './resolveAfterBy.js';

/**
 * Returns a function that returns a Promise that resolves with the results of a callback.
 *
 * @function resolveBy
 * @category Higher-order
 *
 * @param {Function} [callback] - Context and args are set to the same as those passed to the initially returned function.
 *
 * @returns {function(): Promise}
 */
export default (callback) => resolveAfterBy(0, callback);
