import wait from './wait.js';

/**
 * Returns a function that returns a Promise that rejects with provided args after a delay.
 */
export default (
	duration: number,
	error: Error
): () => Promise<void> => {
	return (): Promise<void> => {
		return wait((_resolve, reject) => {
			wait(duration)
				.then(() => {
					reject(error);
				})
				.catch((innerError) => {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
					reject(innerError as Error);
				});
		});
	};
};
