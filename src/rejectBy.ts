import rejectAfterBy from './rejectAfterBy.js';

/**
 * Returns a function that returns a Promise that rejects with the results of a callback.
 */
export default <Args extends Array<unknown>>(
	callback: (this: unknown, ...args: Args) => Error
): (...args: Args) => Promise<unknown> => {
	return rejectAfterBy(0, callback);
};
