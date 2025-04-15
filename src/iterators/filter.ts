import some, { type IIteratorSettings } from './some.js';

/**
 * Create a new array with all the elements of an array that pass an async truthy test.
 */
export default function filter<Context, Type>(
	this: Context,
	array: Array<Type>,
	callback: (this: Context, value: Type, index: number, array: Array<Type>) => unknown,
	settings: IIteratorSettings = {}
): Promise<Array<Type>> {
	const output: Array<Type> = [];

	const boundCallback = this ?
		callback.bind(this) as typeof callback :
		callback;

	return some(array, (element, index) => {
		// @ts-expect-error context
		return Promise.resolve(boundCallback(element, index, array))
			.then((result) => {
				if (result) {
					output.push(element);
				}
			});
	}, settings)
		.then(() => output);
}
