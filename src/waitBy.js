import wait from './wait';

/**
 * Returns a function that returns a Promise that calls a callback.
 *
 * @function waitBy
 * @category Higher-order
 *
 * @arg {function} callback - Context and args are set to the same as those passed to the initially returned function.
 *
 * @returns {function(...[*]): Promise<unknown>}
 */
export default function(callback) {
	return function(...args) {
		const self = this;

		return wait((resolve, reject) => {
			callback.call(self, resolve, reject, ...args);
		});
	};
}

