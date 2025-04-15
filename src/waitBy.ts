import wait from './wait.js';

/**
 * Returns a function that returns a Promise that calls a callback.
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
const waitBy = <Context, Args extends Array<unknown>, ReturnValue>(
	callback: (
		this: Context,
		resolve: (value: ReturnValue) => void,
		reject: (error: Error) => void,
		...args: Args
	) => void
): (...args: Args) => Promise<ReturnValue> => {
	return function(this: Context, ...args: Args) {
		return wait((resolve, reject) => {
			callback.call(this, resolve, reject, ...args);
		});
	};
};

export default waitBy;
