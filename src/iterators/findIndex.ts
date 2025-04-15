import some, { type IIteratorSettings } from './some.js';

/**
 * Gets the index of the first element in an array that passes an async test, or -1 if no element passes the test.
 */
export default function findIndex<Context, Type>(
	this: Context,
	array: Array<Type>,
	callback: (this: Context, value: Type, index: number, array: Array<Type>) => unknown,
	settings: IIteratorSettings = {}
): Promise<number> {
	let found = -1;

	const boundCallback = this ?
		callback.bind(this) as typeof callback :
		callback;

	return some(array, (value, index) => {
		// @ts-expect-error context
		return Promise.resolve(boundCallback(value, index, array))
			.then((result) => {
				if (result) {
					found = index;

					return true;
				}

				return false;
			});
	}, settings)
		.then(() => found);
}
