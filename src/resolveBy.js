import resolveAfterBy from './resolveAfterBy';

/**
 * Returns a function that returns a Promise that resolves with the results of a callback.
 *
 * @function resolveBy
 *
 * @arg {function} [callback] - Context and args are set to the same as those passed to the initially returned function.
 *
 * @returns {function(): Promise}
 */
export default (callback) => resolveAfterBy(0, callback);
