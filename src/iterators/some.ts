import forRange from '../repeaters/forRange.js';

export interface IIteratorSettings {
	down?: boolean;
	delay?: number;
}

/**
 * Determine whether at least one element in an array passes an async test.
 */
export default function some<Context, Type>(
	this: Context,
	array: Array<Type>,
	callback: (
		this: Context,
		value: Type,
		index: number,
		array: Array<Type>
		// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
	) => boolean | void | PromiseLike<boolean | void>,
	settings: IIteratorSettings = {}
): Promise<boolean> {
	if (array.length === 0) {
		return Promise.resolve(false);
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
		settings
	);
}
