import rejectAfterBy from './rejectAfterBy.js';

/**
 * Returns a function that returns a Promise that rejects with the results of a callback.
 *
 * @function rejectBy
 * @category Higher-order
 *
 * @arg {function} [callback] - Context and args are set to the same as those passed to the initially returned function.
 *
 * @returns {function(): Promise}
 */
export default (callback) => rejectAfterBy(0, callback);
