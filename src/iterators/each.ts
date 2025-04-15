import forRange from '../repeaters/forRange.js';
import type { IIteratorSettings } from './some.js';

/**
 * Execute an async callback for each element in an array.
 *
 * @example
 * ``` javascript
 * import { each } from 'async-agent';
 *
 * each([4, 5, 6], (element) => {
 *         console.log(element);
 *     })
 *     .then(() => {
 *         console.log('done');
 *     }
 *
 * // => 4
 * // => 5
 * // => 6
 * // => done
 * ```
 */
export default function each<Context, Type>(
	this: Context,
	array: Array<Type>,
	callback: (
		this: Context,
		value: Type,
		index: number,
		array: Array<Type>
	) => void | Promise<void>,
	settings: IIteratorSettings = {}
): Promise<Array<Type>> {
	if (array.length === 0) {
		return Promise.resolve(array);
	}

	const boundCallback = this ?
		callback.bind(this) as typeof callback :
		callback;

	return forRange(
		settings.down ? array.length - 1 : 0,
		settings.down ? 0 : array.length - 1,
		(index): boolean => {
			if (index in array) {
				// @ts-expect-error context
				return boundCallback(array[index], index, array);
			}

			return false;
		},
		{ ...settings, ignoreCancel: true }
	)
		.then(() => array);
}
