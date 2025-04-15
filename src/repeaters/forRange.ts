import { enforceInteger } from 'type-enforcer';
import resolveAfterBy from '../resolveAfterBy.js';

export interface IForRangeSettings {
	delay?: number;
	ignoreCancel?: boolean;
}

/**
 * Calls an async callback for each integer within a range.
 *
 * @example
 * ``` javascript
 * import { forRange } from 'async-agent';
 *
 * const output = [];
 *
 * forRange(3, 10, (index) => new Promise((resolve) => {
 *         output.push(index);
 *         resolve();
 *     })
 *     .then(() => {
 *         console.log(output);
 *     }
 *
 * // => [3, 4, 5, 6, 7, 8, 9, 10]
 *
 * const outputRight = [];
 *
 * forRange(10, 3, (index) => new Promise((resolve, reject) => {
 *         outputRight.push(index);
 *         if (index === 7) {
 *             reject();
 *         }
 *         else {
 *             resolve();
 *         }
 *     })
 *     .then(() => {
 *         console.log(outputRight);
 *     }
 *
 * // => [10, 9, 8, 7]
 * ```
 */
export default function forRange<Context, ReturnValue>(
	this: Context,
	first: number,
	last: number,
	callback: (this: Context, index: number) => ReturnValue | PromiseLike<ReturnValue>,
	settings: IForRangeSettings = {}
): Promise<boolean> {
	const firstInt = enforceInteger(first, 0);
	const lastInt = last === Infinity ?
		last :
		enforceInteger(last, 0);

	const delay = settings.delay ?? 0;

	return new Promise((resolve, reject) => {
		const fromRight = firstInt > lastInt;
		const end = fromRight ? lastInt - 1 : lastInt + 1;
		const ignoreCancel = settings.ignoreCancel;
		const boundCallback = this === undefined ?
			callback :
			callback.bind(this);

		const loop = (value: number, isCanceled: boolean): void => {
			if (isCanceled || value === end) {
				resolve(isCanceled);
			}
			else {
				resolveAfterBy(delay, boundCallback)(value)
					.then((result) => {
						loop(
							fromRight ? value - 1 : value + 1,
							ignoreCancel ? false : Boolean(result)
						);
					})
					.catch(reject);
			}
		};

		loop(firstInt, false);
	});
}
