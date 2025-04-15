import resolveAfterBy from './resolveAfterBy.js';

/**
 * Returns a function that returns a Promise that resolves with the results of a callback.
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export default <Context, Args extends Array<unknown>, ReturnValue>(
	callback: (this: Context, ...args: Args) => ReturnValue
): (...args: Args) => Promise<ReturnValue> => {
	return resolveAfterBy<Context, Args, ReturnValue>(0, callback);
};
