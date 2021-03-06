import clear from './clear.js';
import delay from './delay.js';

/**
 * Returns a new debounced function that waits to call the callback until `duration` ms have passed since the last time it was called.
 *
 * @example
 * ``` javascript
 * import { debounce } from 'async-agent';
 *
 * const debounced = debounce(() => {
 *     console.log('1');
 * });
 *
 * debounced();
 * debounced();
 * debounced();
 * debounced();
 *
 * // => 1
 * ```
 *
 * @function debounce
 *
 * @param {Function} callback - The context and args from the last call will be passed in.
 * @param {number} [duration=0] - Time in milliseconds.
 * @param {object} [options={}] - Options.
 * @param {boolean} [options.leading=false] - If true then the callback is called immediately the first time.
 * @param {boolean} [options.trailing=true] - If false then the callback will only be called on the leading edge.
 * @param {number.int} [options.maxWait] - Max time (ms) to wait before flushing.
 *
 * @returns {Function} The debounced function. Has two methods: .clear() clears any current timeouts, and .flush() immediately calls any waiting callbacks.
 */
export default (callback, duration = 0, options = {}) => {
	let timeout = 0;
	let maxTimeout = 0;
	let isLeading = false;
	let self; // eslint-disable-line init-declarations
	let lastArgs = [];

	if (options.trailing === false) {
		options.leading = true;
	}

	const call = () => {
		isLeading = options.leading;
		callback.apply(self, lastArgs);
		if (isLeading) {
			timeout = delay(debounced.clear, duration);
		}
	};

	const debounced = function(...args) {
		self = this;
		lastArgs = args;

		if (options.leading && !timeout) {
			call();
		}
		else {
			isLeading = false;
			debounced.clear();
			timeout = delay(debounced.flush, duration);
		}

		if (options.maxWait && !maxTimeout) {
			maxTimeout = delay(debounced.flush, options.maxWait);
		}
	};

	debounced.clear = () => {
		if (timeout) {
			clear(timeout);
			timeout = null;
		}
	};

	debounced.flush = () => {
		if (timeout) {
			debounced.clear();

			if (maxTimeout) {
				clear(maxTimeout);
				maxTimeout = null;
			}

			if (options.trailing !== false && !isLeading) {
				call();
			}
		}
	};

	return debounced;
};
