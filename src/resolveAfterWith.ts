import wait from './wait.js';
import waitBy from './waitBy.js';

/**
 * Returns a function that returns a Promise that resolves with provided args after a delay.
 */
export default <Value>(duration: number, value: Value): () => Promise<Value> => {
	return waitBy((resolve) => wait(duration)
		.then(() => {
			resolve(value);
		}));
};
