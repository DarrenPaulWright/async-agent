import forRange from '../repeaters/forRange.js';
import type { IIteratorSettings } from './some.js';

/**
 * Determine whether every element in an array passes an async test.
 *
 * @function every
 * @category Iterator
 *
 * @param {Array} array - An array to iterate over.
 * @param {Function} callback - __Parameters:__ element, index, and array.<br>__Context:__ same as that provided to the main function.<br>__Return:__ A falsey value to indicate a failure.<br>_May return a Promise. Rejections are not caught_.
 * @param {object} [settings] - Optional settings object.
 * @param {boolean} [settings.down=false] - Decrement the index on each iteration from highest to lowest.
 * @param {number} [settings.delay=0] - Delay before calls in ms. Can be updated at any time to effect the delay before future calls.
 *
 * @returns {Promise} The promise is resolved after every callback is done or a callback returns true or an error is caught.
 */
export default function every<Context, Type>(
	this: Context,
	array: Array<Type>,
	callback: (this: Context, value: Type, index: number, array: Array<Type>) => unknown,
	settings: IIteratorSettings = {}
): Promise<boolean> {
	if (array.length === 0) {
		return Promise.resolve(true);
	}

	let result = true;

	const boundCallback = this ?
		callback.bind(this) as typeof callback :
		callback;

	return forRange(
		settings.down ? array.length - 1 : 0,
		settings.down ? 0 : array.length - 1,
		(index): boolean => {
			if (index in array) {
				// @ts-expect-error context
				return Promise.resolve(boundCallback(array[index], index, array))
					.then((response) => {
						return !(result = Boolean(response));
					});
			}

			return false;
		},
		settings
	)
		.then(() => result);
}
