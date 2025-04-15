import wait from './wait.js';
import waitBy from './waitBy.js';

/**
 * Returns a function that returns a Promise that resolves with the results of a callback after a delay.
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export default <Context, Args extends Array<unknown>, ReturnValue>(
	duration: number,
	callback: (this: Context, ...args: Args) => ReturnValue
): (...args: Args) => Promise<ReturnValue> => {
	return waitBy(function(this: Context, resolve, reject, ...args) {
		wait(duration)
			.then(() => {
				resolve(callback.apply(this, args));
			})
			.catch((error) => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
				reject(error as Error);
			});
	});
};
