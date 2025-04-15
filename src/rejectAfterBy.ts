import wait from './wait.js';
import waitBy from './waitBy.js';

/**
 * Returns a function that returns a Promise that rejects with the results of a callback after a delay.
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export default <Context, Args extends Array<unknown>>(
	duration: number,
	callback: (this: Context, ...args: Args) => Error
): (...args: Args) => Promise<unknown> => {
	return waitBy(function(this: Context, _resolve, reject, ...args) {
		wait(duration)
			.then(() => {
				reject(callback.apply(this, args));
			})
			.catch((error) => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
				reject(error as Error);
			});
	});
};
