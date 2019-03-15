import debounce from './debounce';

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
 * // => 1
 * ```
 *
 * @function throttle
 *
 * @arg {Function} callback - The context and args from the last call will be passed in.
 * @arg {Number} [duration=0]
 * @arg {Object} [options={}]
 * @arg {Boolean} [options.leading=true] - If true then the callback is called immediately the first time.
 * @arg {Boolean} [options.trailing=true] - If false then the callback will only be called on the leading edge.
 *
 * @returns {Function} The throttled function. Has two methods: .clear() clears any current timeouts, and .flush() immediately calls any waiting callbacks.
 */
export default (callback, duration = 0, options = {}) => debounce(callback, duration, {
	leading: options.leading !== false,
	maxWait: duration,
	trailing: options.trailing !== false
});
