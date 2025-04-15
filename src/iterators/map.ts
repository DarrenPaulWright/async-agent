import some, { type IIteratorSettings } from './some.js';

/**
 * Create a new array populated with the results of calling an async callback on every element in an array.
 */
export default function map<Context, Type, ReturnType>(
	this: Context,
	array: Array<Type>,
	callback: (this: Context, value: Type, index: number, array: Array<Type>) => ReturnType,
	settings: IIteratorSettings = {}
): Promise<Array<ReturnType>> {
	const output: Array<ReturnType> = [];

	const boundCallback = this ?
		callback.bind(this) as typeof callback :
		callback;

	return some(array, (element, index) => {
		// @ts-expect-error context
		return Promise.resolve(boundCallback(element, index, array))
			.then((result) => {
				output[index] = result;
			});
	}, settings)
		.then(() => output);
}
