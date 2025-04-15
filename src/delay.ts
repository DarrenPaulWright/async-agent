/**
 * Delays the calling of a callback for a given amount of time.
 *
 * @example
 * ``` javascript
 * import { delay } from 'async-agent';
 *
 * delay(() => {
 *     console.log('2');
 * }, 1000);
 *
 * console.log('1');
 *
 * // => 1
 * // (after 1000ms) => 2
 * ```
 */
export default (callback: () => void, duration = 0): number => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	return setTimeout(callback, duration);
};
