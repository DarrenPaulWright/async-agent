import clear from './clear.js';
import delay from './delay.js';

interface IDebounceOptions {
	leading?: boolean;
	trailing?: boolean;
	maxWait?: number;
}

interface DebounceReturn<Context, Args extends Array<unknown>> {
	(this: Context, ...args: Args): void;

	clear: () => void;
	flush: () => void;
}

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
 */
export default <Context, Args extends Array<unknown>>(
	callback: (this: Context, ...args: Args) => void,
	duration = 0,
	options: IDebounceOptions = {}
): DebounceReturn<Context, Args> => {
	let timeout: number | null = 0;
	let maxTimeout: number | null = 0;
	let isLeading = false;
	let self: Context; // eslint-disable-line @typescript-eslint/init-declarations
	let lastArgs: Array<unknown> = [];

	if (options.trailing === false) {
		options.leading = true;
	}

	const call = (): void => {
		isLeading = options.leading ?? false;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
		callback.apply(self, lastArgs as Args);

		if (isLeading) {
			// eslint-disable-next-line @typescript-eslint/no-use-before-define
			timeout = delay(debounced.clear, duration);
		}
	};

	const debounced = function(this: Context, ...args: Args): void {
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

	debounced.clear = (): void => {
		if (timeout) {
			clear(timeout);
			timeout = null;
		}
	};

	debounced.flush = (): void => {
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
