import debounce from './debounce.js';

interface IThrottleOptions {
	leading?: boolean;
	trailing?: boolean;
	maxWait?: number;
}

/**
 * Returns a new throttled function that waits to call the callback until `duration` ms have passed. Any calls to it during that time will do nothing.
 *
 * @example
 * ``` javascript
 * import { throttle } from 'async-agent';
 *
 * const throttled = throttle(() => {
 *     console.log('1');
 * });
 *
 * throttled();
 * throttled();
 * throttled();
 * throttled();
 *
 * // => 1
 * ```
 */
export default <Context, Args extends Array<unknown>>(
	callback: (this: Context, ...args: Args) => void,
	duration = 0,
	options: IThrottleOptions = {}
): ReturnType<typeof debounce<Context, Args>> => {
	return debounce(callback, duration, {
		leading: options.leading !== false,
		maxWait: duration,
		trailing: options.trailing !== false
	});
};
