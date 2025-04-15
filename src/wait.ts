import { isFunction } from 'type-enforcer';
import delay from './delay.js';

interface Wait {
	(): Promise<void>;

	(duration: number): Promise<void>;

	<ReturnValue>(
		duration: (resolve: (value: ReturnValue) => void, reject: (error: Error) => void) => void
	): Promise<ReturnValue>;
}

/**
 * Delays the resolving of a new Promise for a given amount of time. Provides the same functionality as defer and delay, but with promises. Also serves as a wrapper for a Promise if a callback is provided in place of duration.
 *
 * @example
 * ``` javascript
 * import { wait } from 'async-agent';
 *
 * wait(1000)
 *     .then(() => {
 *         console.log('2');
 *     });
 *
 * console.log('1');
 *
 * // => 1
 * // (after 1000ms) => 2
 * ```
 */
const wait: Wait = <ReturnValue>(
	duration: number |
		((resolve: (value?: ReturnValue) => void, reject: (error: Error) => void) => void) = 0
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
): Promise<ReturnValue | void> => {
	return new Promise((resolve, reject) => {
		if (isFunction(duration)) {
			duration(resolve, reject);
		}
		else if (duration === 0) {
			resolve();
		}
		else {
			delay(resolve, duration);
		}
	});
};

export default wait;
