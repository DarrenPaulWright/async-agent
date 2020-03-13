/**
 * Returns a function that returns a Promise that resolves with provided args.
 *
 * @function resolveWith
 * @category Higher-order
 *
 * @param {*} [arg] - Passed in to the resolve function.
 *
 * @returns {function(): Promise}
 */
export default (arg) => () => Promise.resolve(arg);
