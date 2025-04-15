import some, { type IIteratorSettings } from './some.js';

/**
 * Calls an async callback on each element of an array, reducing the array to a single output value.
 */
export default function reduce<Context, Type, ReturnValue>(
	this: Context,
	array: Array<Type>,
	callback: (
		this: Context,
		accumulator: ReturnValue,
		value: Type,
		index: number,
		array: Array<Type>
	) => ReturnValue | PromiseLike<ReturnValue>,
	initialValue: ReturnValue,
	settings: IIteratorSettings = {}
): Promise<ReturnValue> {
	let accumulator = initialValue === undefined ?
		// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
		array[0] as unknown as ReturnValue :
		initialValue;

	const boundCallback = this ?
		callback.bind(this) as typeof callback :
		callback;

	return some(
		initialValue === undefined ? array.slice(1) : array,
		(value, index) => {
			// @ts-expect-error context
			return Promise.resolve(boundCallback(accumulator, value, index, array))
				.then((output) => {
					accumulator = output ?? initialValue;
				});
		},
		settings
	)
		.then(() => accumulator);
}
